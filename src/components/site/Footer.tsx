import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Phone, MessageCircle } from "lucide-react";
import { SITE, whatsappHref, track } from "@/lib/site";
import { CtaLink } from "./Cta";
const logo = "/images/logo-al-oumrane.png";

const navLinks = [
  { label: "Accueil", to: "/" },
  { label: "Notre École", to: "/notre-ecole" },
  { label: "Pédagogie", to: "/pedagogie" },
  { label: "Cycles", to: "/primaire" },
  { label: "Vie Scolaire", to: "/vie-scolaire" },
  { label: "Admissions", to: "/admissions" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-[88rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-4">
        <div className="lg:pr-8">
          <img
            src={logo}
            alt={`Logo ${SITE.name}`}
            width={96}
            height={96}
            className="size-20 rounded-xl bg-navy-foreground/95 object-contain p-1.5"
          />
          <p className="mt-5 font-display text-2xl">Groupe Scolaire Al Oumrane</p>
          <p className="mt-4 text-sm leading-relaxed text-navy-foreground/70">
            École privée à {SITE.district}, {SITE.city}. De la maternelle au lycée, un
            accompagnement exigeant et bienveillant pour chaque élève.
          </p>
        </div>

        <nav aria-label="Navigation du pied de page">
          <p className="eyebrow text-navy-foreground/60">Navigation</p>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-navy-foreground/80 transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow text-navy-foreground/60">Admissions</p>
          <p className="mt-5 font-display text-xl">
            Inscriptions {SITE.schoolYear} ouvertes
          </p>
          <p className="mt-3 text-sm text-navy-foreground/70">
            Maternelle • Primaire • Collège • Lycée
          </p>
          <CtaLink to="/demande-visite" variant="ghostLight" className="mt-6">
            Demander une visite
          </CtaLink>
        </div>

        <div>
          <p className="eyebrow text-navy-foreground/60">Contact</p>
          <ul className="mt-5 space-y-4 text-sm text-navy-foreground/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={SITE.phoneHref} onClick={() => track("phone_click", { location: "footer" })}>
                {SITE.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <MessageCircle className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <a
                href={whatsappHref()}
                onClick={() => track("whatsapp_click", { location: "footer" })}
              >
                {SITE.whatsapp ? "Écrire sur WhatsApp" : "WhatsApp — numéro à confirmer"}
              </a>
            </li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a
              href={SITE.instagram || "#"}
              aria-label="Instagram"
              className="grid size-10 place-items-center border border-navy-foreground/25 transition-colors hover:border-gold hover:text-gold"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={SITE.facebook || "#"}
              aria-label="Facebook"
              className="grid size-10 place-items-center border border-navy-foreground/25 transition-colors hover:border-gold hover:text-gold"
            >
              <Facebook className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto flex max-w-[88rem] flex-col gap-2 px-5 py-6 text-xs text-navy-foreground/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Groupe Scolaire Al Oumrane. Tous droits réservés.</p>
          <p>{SITE.district} • {SITE.city} • Maroc</p>
        </div>
      </div>
    </footer>
  );
}
