export const SITE = {
  name: "Groupe Scolaire Al Oumrane",
  shortName: "Al Oumrane",
  city: "Casablanca",
  district: "Sidi Maârouf",
  address: "Lotissement Salma, Route de Sidi Maârouf, 20280 Casablanca, Maroc",
  phone: "05 22 97 25 24",
  phoneHref: "tel:+212522972524",
  /** TODO: remplacer par le numéro WhatsApp officiel de l'établissement. */
  whatsapp: "",
  /** TODO: adresse email à confirmer par l'établissement. */
  email: "",
  mapsLink: "https://maps.app.goo.gl/33zBABjmk8LFuBNK8",
  mapsEmbed:
    "https://www.google.com/maps?q=place_id:ChIJqZQVTd0tpg0RFfc-RBGix2s&output=embed",
  /** TODO: liens réseaux sociaux officiels. */
  instagram: "",
  facebook: "",
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
  { label: "Accueil", to: "/" },
  { label: "Notre École", to: "/notre-ecole" },
  { label: "Pédagogie", to: "/pedagogie" },
  { label: "Nos Cycles", to: "/maternelle" },
  { label: "Vie Scolaire", to: "/vie-scolaire" },
  { label: "Réussite", to: "/lycee" },
  { label: "Actualités", to: "/actualites" },
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

export function getUtm() {
  if (typeof window === "undefined") return { utm_source: "", utm_medium: "", utm_campaign: "" };
  const p = new URLSearchParams(window.location.search);
  return {
    utm_source: p.get("utm_source") ?? "",
    utm_medium: p.get("utm_medium") ?? "",
    utm_campaign: p.get("utm_campaign") ?? "",
  };
}
