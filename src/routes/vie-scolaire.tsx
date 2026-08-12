import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Gallery } from "@/components/site/Gallery";
import { AdmissionsCta } from "@/components/site/Sections";
import { TextLink } from "@/components/site/Cta";
import { IMAGES } from "@/content/school";
import { absoluteUrl } from "@/lib/site";

const title = "Vie Scolaire | Groupe Scolaire Al Oumrane, Casablanca";
const description =
  "La vie scolaire au Groupe Scolaire Al Oumrane à Sidi Maârouf, Casablanca : apprendre, créer, partager et explorer au-delà de la salle de classe.";

export const Route = createFileRoute("/vie-scolaire")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: absoluteUrl("/vie-scolaire") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/vie-scolaire") }],
  }),
  component: VieScolaire,
});

function VieScolaire() {
  return (
    <>
      <PageHero
        eyebrow="Vie scolaire"
        title="Une vie scolaire qui dépasse la salle de classe."
        intro="Apprendre, créer, partager, explorer. La vie scolaire complète les apprentissages et participe au développement de la confiance et de l'esprit collectif."
        image={IMAGES.lycee}
        imageAlt="Vie scolaire de l'école privée Al Oumrane à Sidi Maârouf, Casablanca"
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Galerie"
            title="Des moments de la vie de l'école."
            subtitle="Photographies de l'établissement, des classes et des activités."
          />
          <div className="mt-14">
            <Gallery />
          </div>
          <div className="mt-12">
            <TextLink to="/activites">Découvrir les activités parascolaires</TextLink>
          </div>
        </div>
      </section>

      <AdmissionsCta />
    </>
  );
}
