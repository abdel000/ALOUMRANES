import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { AdmissionsForm } from "@/components/site/AdmissionsForm";
import { LocationSection } from "@/components/site/Sections";
import { CtaLink } from "@/components/site/Cta";
import { SITE, whatsappHref, track } from "@/lib/site";
import { IMAGES } from "@/content/school";

const title = "Contact | Groupe Scolaire Al Oumrane, Sidi Maârouf Casablanca";
const description =
  "Contactez le Groupe Scolaire Al Oumrane à Sidi Maârouf, Casablanca : téléphone 0522 97 25 24, WhatsApp, adresse et prise de rendez-vous.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de son avenir."
        intro="Notre équipe est à votre disposition pour répondre à vos questions sur la scolarité, les inscriptions et l'organisation de l'établissement."
        image={IMAGES.philosophy}
        imageAlt="Échange entre une enseignante et une élève au Groupe Scolaire Al Oumrane"
        actions={
          <>
            <CtaLink to="/demande-visite" variant="solid">
              Prendre rendez-vous
            </CtaLink>
          </>
        }
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-[88rem] gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Coordonnées" title={SITE.name} />
            <ul className="mt-10 space-y-6 text-sm">
              <li className="flex gap-4 border-t border-border pt-5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex gap-4 border-t border-border pt-5">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <a
                  href={SITE.phoneHref}
                  onClick={() => track("phone_click", { location: "contact_page" })}
                  className="link-underline"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex gap-4 border-t border-border pt-5">
                <MessageCircle className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <a
                  href={whatsappHref()}
                  onClick={() => track("whatsapp_click", { location: "contact_page" })}
                  className="link-underline"
                >
                  {SITE.whatsapp ? "Écrire sur WhatsApp" : "WhatsApp — [NUMÉRO À CONFIRMER]"}
                </a>
              </li>
              <li className="flex gap-4 border-t border-border pt-5">
                <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <span>{SITE.email || "[ADRESSE EMAIL À CONFIRMER]"}</span>
              </li>
              <li className="flex gap-4 border-t border-border pt-5">
                <Clock className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <span>{SITE.hours}</span>
              </li>
            </ul>
          </div>
          <Reveal className="border border-border bg-card p-6 sm:p-10">
            <AdmissionsForm source="contact" />
          </Reveal>
        </div>
      </section>

      <LocationSection />
    </>
  );
}
