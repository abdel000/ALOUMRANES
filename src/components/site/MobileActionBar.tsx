import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { SITE, whatsappHref, track } from "@/lib/site";

/** Barre d'action collante mobile : Appeler | WhatsApp | Visite */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-border bg-background/95 backdrop-blur-lg lg:hidden">
      <a
        href={SITE.phoneHref}
        onClick={() => track("phone_click", { location: "mobile_bar" })}
        className="flex flex-col items-center gap-1 py-3 text-[0.6875rem] tracking-wide text-navy"
      >
        <Phone className="size-5" aria-hidden="true" />
        Appeler
      </a>
      <a
        href={whatsappHref()}
        onClick={() => track("whatsapp_click", { location: "mobile_bar" })}
        className="flex flex-col items-center gap-1 border-x border-border py-3 text-[0.6875rem] tracking-wide text-navy"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        WhatsApp
      </a>
      <Link
        to="/demande-visite"
        onClick={() => track("visit_request", { location: "mobile_bar" })}
        className="flex flex-col items-center gap-1 bg-navy py-3 text-[0.6875rem] tracking-wide text-navy-foreground"
      >
        <CalendarCheck className="size-5" aria-hidden="true" />
        Visite
      </Link>
    </div>
  );
}

/** Bouton WhatsApp flottant (desktop). */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref()}
      onClick={() => track("whatsapp_click", { location: "float" })}
      aria-label="Écrire sur WhatsApp"
      className="fixed right-6 bottom-6 z-40 hidden items-center gap-3 rounded-full bg-[#16a34a] px-5 py-4 text-sm text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#15803d] lg:inline-flex"
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      Écrire sur WhatsApp
    </a>
  );
}
