import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { AdmissionsForm } from "@/components/site/AdmissionsForm";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { LocationSection } from "@/components/site/Sections";
import { IMAGES, ADMISSION_STEPS } from "@/content/school";
import { absoluteUrl, SITE } from "@/lib/site";

const title = "Demander une visite | Groupe Scolaire Al Oumrane, Casablanca";
const description =
  "Planifiez une visite du Groupe Scolaire Al Oumrane à Sidi Maârouf, Casablanca. Rencontrez notre équipe et découvrez l'établissement avant l'inscription 2026–2027.";

export const Route = createFileRoute("/demande-visite")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: absoluteUrl("/demande-visite") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/demande-visite") }],
  }),
  component: Visite,
});

function Visite() {
  return (
    <>
      <PageHero
        eyebrow="Rendez-vous"
        title="Venez découvrir l'école."
        intro="Une visite est souvent le meilleur moyen de se projeter. Choisissez un créneau et rencontrez notre équipe pédagogique."
        image={IMAGES.campus}
        imageAlt="Entrée et espaces extérieurs de l'école privée Al Oumrane à Sidi Maârouf, Casablanca"
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-[88rem] gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow={`Rentrée ${SITE.schoolYear}`}
              title="Planifier une visite"
              subtitle="Renseignez vos coordonnées : nous vous proposons un créneau adapté à votre disponibilité."
            />
            <ol className="mt-10 space-y-6">
              {ADMISSION_STEPS.map((s) => (
                <li key={s.index} className="flex gap-5 border-t border-border pt-5">
                  <span className="font-display text-2xl text-gold">{s.index}</span>
                  <div>
                    <h3 className="text-lg">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <Reveal className="border border-border bg-card p-6 sm:p-10">
            <AdmissionsForm defaultRequest="Planifier une visite" source="demande-visite" />
          </Reveal>
        </div>
      </section>

      <LocationSection />
    </>
  );
}
