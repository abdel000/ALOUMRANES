import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { AdmissionsCta } from "@/components/site/Sections";
import { IMAGES, SUPPORT_STEPS, WHY } from "@/content/school";
import * as Icons from "lucide-react";

const title = "Pédagogie | Groupe Scolaire Al Oumrane, Casablanca";
const description =
  "Notre approche pédagogique : exigence académique, accompagnement personnalisé et développement de l'autonomie, de la maternelle au lycée à Sidi Maârouf, Casablanca.";

export const Route = createFileRoute("/pedagogie")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/pedagogie" },
    ],
    links: [{ rel: "canonical", href: "/pedagogie" }],
  }),
  component: Pedagogie,
});

function Pedagogie() {
  return (
    <>
      <PageHero
        eyebrow="Notre pédagogie"
        title="Observer. Comprendre. Accompagner. Faire progresser."
        intro="Notre pédagogie s'appuie sur un suivi attentif : comprendre le profil de chaque élève pour adapter l'accompagnement et installer des méthodes de travail durables."
        image={IMAGES.philosophy}
        imageAlt="Enseignante accompagnant une élève pendant un exercice"
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <SectionHeading eyebrow="Méthode" title="Un accompagnement en quatre temps." />
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {SUPPORT_STEPS.map((s, i) => (
              <Reveal as="li" key={s.index} delay={i * 90} className="border-t border-border pt-6">
                <span className="font-display text-4xl text-gold">{s.index}</span>
                <h3 className="mt-4 text-xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-border bg-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <SectionHeading eyebrow="Nos engagements" title="Ce qui structure notre enseignement." />
          <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((f, i) => {
              const Icon = (Icons[f.icon as keyof typeof Icons] ??
                Icons.Sparkles) as typeof Icons.Sparkles;
              return (
                <Reveal key={f.title} delay={i * 70} className="border-t border-border pt-6">
                  <Icon className="size-5 text-gold" aria-hidden="true" strokeWidth={1.4} />
                  <h3 className="mt-5 text-xl">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-[88rem] gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Parents & école"
            title="Une relation de confiance entre l'école et les familles."
            subtitle="Communication régulière, suivi scolaire clair et rencontres dédiées : la réussite se construit avec les parents."
          />
          <Reveal className="overflow-hidden">
            <img
              src={IMAGES.college}
              alt="Élèves travaillant en groupe avec leur enseignante"
              loading="lazy"
              className="aspect-4/3 w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <AdmissionsCta />
    </>
  );
}
