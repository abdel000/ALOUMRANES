import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader, getRequestIP } from "@tanstack/react-start/server";
import { createHash } from "node:crypto";

const sha256 = (value: string) => createHash("sha256").update(value.trim().toLowerCase()).digest("hex");

/** Normalizes a Moroccan phone number to E.164 digits (no +) for Meta's hashed match key. */
function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return digits.startsWith("0") ? `212${digits.slice(1)}` : digits;
}

type SendLeadInput = {
  eventId: string;
  eventSourceUrl: string;
  name: string;
  phone: string;
  /** Meta Pixel browser cookies (_fbp / _fbc) — improve match quality and enable Pixel/CAPI dedup. */
  fbp?: string;
  fbc?: string;
};

type MetaUserData = {
  ph: [string];
  client_ip_address: string | undefined;
  client_user_agent: string | undefined;
  fn?: [string];
  ln?: [string];
  fbp?: string;
  fbc?: string;
};

/**
 * Forwards a lead as a Meta "Lead" Conversions API event. Runs server-only via
 * createServerFn — the access token never reaches the client bundle. Errors are
 * swallowed (logged, not thrown) so a Meta API outage never blocks lead submission.
 */
export const sendLeadToMeta = createServerFn({ method: "POST" })
  .validator((data: SendLeadInput) => data)
  .handler(async ({ data }) => {
    const accessToken = process.env["META_ACCESS_TOKEN"];
    const pixelId = process.env["META_PIXEL_ID"];
    if (!accessToken || !pixelId) return { ok: false as const };

    const [firstName, ...rest] = data.name.trim().split(/\s+/);
    const lastName = rest.join(" ");

    const userData: MetaUserData = {
      ph: [sha256(normalizePhone(data.phone))],
      client_ip_address: getRequestIP({ xForwardedFor: true }),
      client_user_agent: getRequestHeader("user-agent"),
    };
    if (firstName) userData.fn = [sha256(firstName)];
    if (lastName) userData.ln = [sha256(lastName)];
    if (data.fbp) userData.fbp = data.fbp;
    if (data.fbc) userData.fbc = data.fbc;

    try {
      const res = await fetch(`https://graph.facebook.com/v21.0/${pixelId}/events`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          data: [
            {
              event_name: "Lead",
              event_time: Math.floor(Date.now() / 1000),
              event_id: data.eventId,
              event_source_url: data.eventSourceUrl,
              action_source: "website",
              user_data: userData,
            },
          ],
          access_token: accessToken,
        }),
      });
      if (!res.ok) {
        console.error("[meta-capi] Meta API error", res.status, await res.text());
        return { ok: false as const };
      }
      return { ok: true as const };
    } catch (error) {
      console.error("[meta-capi] request failed", error);
      return { ok: false as const };
    }
  });
