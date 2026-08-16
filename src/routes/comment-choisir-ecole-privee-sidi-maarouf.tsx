import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { AdmissionsCta } from "@/components/site/Sections";
import { CtaLink } from "@/components/site/Cta";
import { CHOICE_CRITERIA, ADMISSION_STEPS, IMAGES } from "@/content/school";
import { absoluteUrl, DEFAULT_OG_IMAGE, SITE_URL, SITE } from "@/lib/site";
import { CheckCircle2 } from "lucide-react";

const title = "Comment choisir une école privée à Sidi Maârouf ? | Al Oumrane";
const description =
  "Les critères essentiels pour choisir une école privée à Sidi Maârouf, Casablanca : pédagogie, langues, résultats au Bac, activités et transport scolaire.";
const path = "/comment-choisir-ecole-privee-sidi-maarouf";

export const Route = createFileRoute(path)({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: absoluteUrl(path) },
    ],
    links: [{ rel: "canonical", href: absoluteUrl(path) }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Comment choisir une école privée à Sidi Maârouf, Casablanca ?",
          description,
          image: DEFAULT_OG_IMAGE,
          datePublished: "2026-08-16",
          dateModified: "2026-08-16",
          mainEntityOfPage: absoluteUrl(path),
          author: { "@type": "Organization", name: SITE.name, url: SITE_URL },
          publisher: {
            "@type": "Organization",
            name: SITE.name,
            logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo-al-oumrane.png` },
          },
        }),
      },
    ],
  }),
  component: ChoiceGuide,
});

function ChoiceGuide() {
  return (
    <>
      <PageHero
        eyebrow="Guide pour les familles"
        title="Comment choisir une école privée à Sidi Maârouf ?"
        intro="Choisir un établissement pour son enfant est une décision importante. Voici les critères à évaluer pour faire un choix éclairé, que vous habitiez Sidi Maârouf, Bouskoura ou un quartier voisin de Casablanca."
        image={IMAGES.campus}
        imageAlt="École privée à Sidi Maârouf, Casablanca — campus du Groupe Scolaire Al Oumrane"
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Les critères à évaluer"
            title="Sept questions à se poser avant de choisir."
          />
          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-14">
            {CHOICE_CRITERIA.map((c, i) => (
              <Reveal key={c.title} delay={i * 70} className="border-t border-border pt-6">
                <h2 className="text-xl">{c.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <SectionHeading eyebrow="En résumé" title="Votre check-list, en un coup d'œil." />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {CHOICE_CRITERIA.map((c) => (
              <li key={c.title} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
                <span className="text-sm leading-relaxed">{c.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Étapes suivantes"
            title="Comment organiser votre visite."
            subtitle="La meilleure façon d'évaluer une école reste de la visiter. Voici comment se déroule la prise de contact avec le Groupe Scolaire Al Oumrane."
          />
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {ADMISSION_STEPS.map((s, i) => (
              <Reveal as="li" key={s.index} delay={i * 90} className="border-t border-border pt-6">
                <span className="font-display text-4xl text-gold">{s.index}</span>
                <h3 className="mt-4 text-xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </Reveal>
            ))}
          </ol>
          <div className="mt-14 flex flex-wrap gap-3">
            <CtaLink to="/demande-visite" variant="solid">
              Demander une visite
            </CtaLink>
            <CtaLink to="/admissions" variant="outline">
              Voir les inscriptions {SITE.schoolYear}
            </CtaLink>
          </div>
        </div>
      </section>

      <AdmissionsCta />
    </>
  );
}
