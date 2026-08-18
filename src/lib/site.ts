/** Canonical production domain — keep in sync with public/robots.txt and public/sitemap.xml. */
export const SITE_URL = "https://www.groupescolairealoumrane.com";

export const absoluteUrl = (path: string) => `${SITE_URL}${path}`;

/** Default social-share image (1200x630-ish) used when a page doesn't set its own og:image. */
export const DEFAULT_OG_IMAGE = absoluteUrl("/images/ecole-privee-sidi-maarouf-casablanca-facade.jpg");

export const SITE = {
  name: "Groupe Scolaire Al Oumrane",
  shortName: "Al Oumrane",
  city: "Casablanca",
  district: "Sidi Maârouf",
  address: "Lotissement Salma, Route de Sidi Maârouf, 20280 Casablanca, Maroc",
  phone: "05 22 97 25 24",
  phoneHref: "tel:+212522972524",
  whatsapp: "212779457992",
  /** TODO: adresse email à confirmer par l'établissement. */
  email: "",
  mapsLink: "https://maps.app.goo.gl/B6jdh432VJTwhxBT7",
  mapsEmbed:
    "https://www.google.com/maps?q=33.513974,-7.650375&z=16&output=embed",
  instagram: "https://www.instagram.com/gs_aloumrane/",
  facebook: "https://web.facebook.com/profile.php?id=61580082068794",
  hours: "Lundi au vendredi : 08h00 – 18h00 • Samedi et dimanche : fermé",
  /** Note Google de l'établissement (fiche Google Business). */
  rating: 4.3,
  reviewCount: 64,
  schoolYear: "2026–2027",
} as const;


export const whatsappHref = (message = "Bonjour, je souhaite des informations sur les inscriptions.") =>
  SITE.whatsapp
    ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`
    : SITE.phoneHref;

export const NAV = [
  { label: "Notre École", to: "/notre-ecole" },
  { label: "Pédagogie", to: "/pedagogie" },
  { label: "Nos Cycles", to: "/maternelle" },
  { label: "Vie Scolaire", to: "/vie-scolaire" },
  { label: "Réussite", to: "/lycee" },
  { label: "Contact", to: "/contact" },
] as const;

export const LANGUAGES = [
  { code: "fr", label: "FR", enabled: true },
  { code: "ar", label: "AR", enabled: false },
  { code: "en", label: "EN", enabled: false },
] as const;

type TrackEvent =
  | "form_submit"
  | "whatsapp_click"
  | "phone_click"
  | "visit_request"
  | "admission_inquiry"
  | "map_click";

/** Sends a conversion event to GA4 / Meta Pixel when configured (no hardcoded IDs). */
export function track(event: TrackEvent, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  };
  w.gtag?.("event", event, params);
  w.fbq?.("trackCustom", event, params);
}

/**
 * Fires the Meta Pixel's standard "Lead" event with an explicit eventID, so Meta
 * can deduplicate it against the matching server-side Conversions API event sent
 * for the same submission (see src/lib/meta-capi.ts).
 */
export function trackMetaLead(eventId: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { fbq?: (...args: unknown[]) => void };
  w.fbq?.("track", "Lead", params, { eventID: eventId });
}

/** Reads a browser cookie by name (used for Meta's _fbp / _fbc match-quality cookies). */
export function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match?.[1] !== undefined ? decodeURIComponent(match[1]) : undefined;
}

export function getUtm() {
  if (typeof window === "undefined") return { utm_source: "", utm_medium: "", utm_campaign: "" };
  const p = new URLSearchParams(window.location.search);
  return {
    utm_source: p.get("utm_source") ?? "",
    utm_medium: p.get("utm_medium") ?? "",
    utm_campaign: p.get("utm_campaign") ?? "",
  };
}
