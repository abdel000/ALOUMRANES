import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { SITE, whatsappHref, track } from "@/lib/site";

const logo = "/images/logo-al-oumrane.png";

const title = `Merci pour votre demande | ${SITE.name}`;
const description = "Votre demande a bien été enregistrée. Notre équipe vous recontacte rapidement.";

export const Route = createFileRoute("/inscriptions-2026-2027-merci")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: MerciPage,
});

function MerciPage() {
  useEffect(() => {
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    w.gtag?.("event", "conversion", {
      send_to: "AW-10786699280/AlF9CIi7894cEJDwv5co",
      value: 1.0,
      currency: "MAD",
    });
  }, []);

  return (
    <div className="flex min-h-dvh flex-col bg-[#0e7a80] text-white">
      <header className="flex items-center justify-center px-5 py-6">
        <img
          src={logo}
          alt={`Logo ${SITE.name}`}
          className="h-20 w-auto rounded-md bg-white/95 p-1.5 object-contain"
        />
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-5 py-14 text-center sm:px-8">
        <div className="grid size-20 place-items-center rounded-full bg-white/10">
          <CheckCircle2 className="size-11 text-[#f4c40f]" aria-hidden="true" strokeWidth={1.6} />
        </div>

        <h1 className="mt-8 max-w-xl text-3xl leading-tight font-extrabold sm:text-4xl">
          Merci ! Votre demande a bien été enregistrée.
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80">
          Notre équipe vous recontacte rapidement pour vous accompagner dans votre inscription et
          répondre à toutes vos questions sur l'offre {SITE.schoolYear}.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={SITE.phoneHref}
            onClick={() => track("phone_click", { location: "landing_promo_merci" })}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e5342c] px-8 py-4 text-sm font-bold tracking-wide uppercase text-white"
          >
            <Phone className="size-4" aria-hidden="true" />
            {SITE.phone}
          </a>
          <a
            href={whatsappHref("Bonjour, je viens de faire une demande pour l'offre inscriptions 2026-2027.")}
            onClick={() => track("whatsapp_click", { location: "landing_promo_merci" })}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-4 text-sm font-bold tracking-wide uppercase text-white"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </main>

      <footer className="px-5 py-6 text-center text-xs text-white/60 sm:px-8">
        {SITE.name} — {SITE.address}
      </footer>
    </div>
  );
}
