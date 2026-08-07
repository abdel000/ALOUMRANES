import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { AdmissionsCta } from "@/components/site/Sections";
import { NEWS, IMAGES } from "@/content/school";

const title = "Actualités | Groupe Scolaire Al Oumrane, Casablanca";
const description =
  "Actualités et temps forts du Groupe Scolaire Al Oumrane à Sidi Maârouf, Casablanca : vie scolaire, pédagogie et admissions 2026–2027.";

export const Route = createFileRoute("/actualites")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/actualites" },
    ],
    links: [{ rel: "canonical", href: "/actualites" }],
  }),
  component: Actualites,
});

function Actualites() {
  return (
    <>
      <PageHero
        eyebrow="Actualités"
        title="Les temps forts de l'école."
        intro="Retrouvez ici les actualités, événements et informations pratiques publiés par l'établissement."
        image={IMAGES.campus}
        imageAlt="Espaces extérieurs du Groupe Scolaire Al Oumrane"
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <SectionHeading eyebrow="Publications" title="Dernières actualités" />
          <div className="mt-14 grid gap-10 lg:grid-cols-3">
            {NEWS.map((n, i) => (
              <Reveal as="article" key={i} delay={i * 80}>
                <div className="overflow-hidden">
                  <img
                    src={n.image}
                    alt={`Illustration de l'actualité : ${n.category}`}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover"
                  />
                </div>
                <p className="mt-5 text-xs tracking-[0.16em] uppercase text-muted-foreground">
                  {n.category} • {n.date}
                </p>
                <h3 className="mt-3 text-xl leading-snug">{n.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{n.excerpt}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AdmissionsCta />
    </>
  );
}
