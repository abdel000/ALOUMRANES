import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CycleCards } from "@/components/site/CycleCards";
import { AdmissionsCta, LocationSection } from "@/components/site/Sections";
import { IMAGES, TRUST_POINTS } from "@/content/school";
import { CtaLink } from "@/components/site/Cta";
import { SITE } from "@/lib/site";

const title = "Notre École | Groupe Scolaire Al Oumrane, Sidi Maârouf Casablanca";
const description =
  "Découvrez le Groupe Scolaire Al Oumrane : une école privée à Sidi Maârouf, Casablanca, de la maternelle au lycée, dans un cadre structuré et bienveillant.";

export const Route = createFileRoute("/notre-ecole")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/notre-ecole" },
    ],
    links: [{ rel: "canonical", href: "/notre-ecole" }],
  }),
  component: NotreEcole,
});

function NotreEcole() {
  return (
    <>
      <PageHero
        eyebrow="Notre école"
        title="Un environnement pour grandir et réussir."
        intro="Groupe Scolaire Al Oumrane accueille les élèves de la maternelle au lycée à Sidi Maârouf, Casablanca, dans un cadre structuré où l'exigence académique et l'accompagnement humain avancent ensemble."
        image={IMAGES.campus}
        imageAlt="Bâtiments et espaces extérieurs du Groupe Scolaire Al Oumrane"
        actions={
          <>
            <CtaLink to="/demande-visite" variant="solid">
              Demander une visite
            </CtaLink>
            <CtaLink to="/pedagogie" variant="outline">
              Notre pédagogie
            </CtaLink>
          </>
        }
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-[88rem] gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Notre identité"
            title="Une école exigeante, attentive à chaque élève."
            subtitle="Nous croyons qu'une réussite durable repose sur l'équilibre entre exigence académique, accompagnement humain et développement personnel."
          />
          <ul className="grid gap-6">
            {TRUST_POINTS.map((p, i) => (
              <Reveal as="li" key={p} delay={i * 60} className="flex gap-5 border-t border-border pt-5">
                <span className="font-display text-xl text-gold">0{i + 1}</span>
                <p className="text-base text-muted-foreground">{p}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-border bg-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Un parcours complet"
            title={`Une continuité pédagogique à ${SITE.district}.`}
          />
          <CycleCards />
        </div>
      </section>

      <section className="relative">
        <img
          src={IMAGES.primaire}
          alt="Salle de classe lumineuse du Groupe Scolaire Al Oumrane"
          loading="lazy"
          className="h-[55vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 mx-auto flex max-w-[88rem] items-end px-5 pb-12 sm:px-8">
          <div className="max-w-xl text-navy-foreground">
            <h2 className="text-3xl leading-tight sm:text-4xl">
              Un cadre conçu pour apprendre sereinement.
            </h2>
            <p className="mt-4 text-sm text-navy-foreground/80">
              Salles de classe, espaces d'activités, espaces communs et espaces extérieurs.
            </p>
          </div>
        </div>
      </section>

      <AdmissionsCta />
      <LocationSection />
    </>
  );
}
