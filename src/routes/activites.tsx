import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { AdmissionsCta } from "@/components/site/Sections";
import { ACTIVITY_CATEGORIES, IMAGES } from "@/content/school";
import { absoluteUrl } from "@/lib/site";

const title = "Activités parascolaires | Al Oumrane, Casablanca";
const description =
  "Des activités parascolaires diversifiées au Groupe Scolaire Al Oumrane à Sidi Maârouf, Casablanca : culture, sport, arts, projets et vie collective.";

export const Route = createFileRoute("/activites")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: absoluteUrl("/activites") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/activites") }],
  }),
  component: Activites,
});

function Activites() {
  return (
    <>
      <PageHero
        eyebrow="Parascolaire"
        title="Des activités parascolaires diversifiées"
        intro="Les activités parascolaires complètent les apprentissages : elles développent les talents, la confiance en soi et le goût du travail collectif."
        image={IMAGES.activites}
        imageAlt="Élèves sur scène lors d'un spectacle scolaire"
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <SectionHeading eyebrow="Domaines" title="Cinq domaines complémentaires." />
          <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {ACTIVITY_CATEGORIES.map((a, i) => (
              <Reveal key={a.title} delay={i * 70} className="border-t border-border pt-6">
                <span className="font-display text-sm text-gold">0{i + 1}</span>
                <h3 className="mt-4 text-xl">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-14 max-w-2xl text-xs text-muted-foreground">
            La liste détaillée des activités proposées sera publiée après confirmation par
            l'établissement.
          </p>
        </div>
      </section>

      <AdmissionsCta />
    </>
  );
}
