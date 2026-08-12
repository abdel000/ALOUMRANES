import { createFileRoute } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CtaLink } from "@/components/site/Cta";
import { CycleCards } from "@/components/site/CycleCards";
import { AdmissionsCta } from "@/components/site/Sections";
import { CYCLES } from "@/content/school";
import { absoluteUrl } from "@/lib/site";

const cycle = CYCLES[3]!;

const title = "Lycée privé & Baccalauréat | 100% de réussite — Al Oumrane, Casablanca";
const description =
  "Lycée privé à Sidi Maârouf, Casablanca : 100% de réussite au Baccalauréat, préparation méthodique, autonomie de travail et accompagnement personnalisé des lycéens.";

export const Route = createFileRoute("/lycee")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: absoluteUrl("/lycee") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/lycee") }],
  }),
  component: Lycee,
});

function Lycee() {
  return (
    <>
      <PageHero
        eyebrow="Cycle 04"
        title="Lycée & Baccalauréat"
        intro="Au lycée, chaque étape compte. Notre accompagnement vise à aider les élèves à consolider leurs acquis, développer leur autonomie et aborder les épreuves du Baccalauréat avec méthode et confiance."
        image={cycle.image}
        imageAlt="Lycée privé à Sidi Maârouf, Casablanca — lycéens en préparation du Baccalauréat"
        actions={
          <>
            <CtaLink to="/demande-visite" variant="solid">
              Demander une visite
            </CtaLink>
            <CtaLink to="/admissions" variant="outline">
              Inscriptions 2026–2027
            </CtaLink>
          </>
        }
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-[88rem] gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Objectifs pédagogiques"
            title="Ce que nous visons au lycée."
            subtitle={cycle.description}
          />
          <ul className="grid gap-6">
            {cycle.points.map((p, i) => (
              <Reveal as="li" key={p} delay={i * 70} className="flex gap-5 border-t border-border pt-5">
                <span className="font-display text-xl text-gold">0{i + 1}</span>
                <p className="text-base leading-relaxed text-muted-foreground">{p}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-[88rem] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20 lg:py-32">
          <div>
            <SectionHeading
              tone="inverse"
              eyebrow="Résultats"
              title="100% de réussite au Baccalauréat."
              subtitle="Un taux de réussite qui reflète l'engagement de nos élèves, le suivi personnalisé de nos équipes et la rigueur de notre méthode de préparation aux examens."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <Reveal className="border border-navy-foreground/15 p-6">
                <Icons.Target className="size-5 text-gold" aria-hidden="true" strokeWidth={1.4} />
                <h3 className="mt-4 text-lg">Préparation ciblée</h3>
                <p className="mt-2 text-sm text-navy-foreground/70">
                  Programme de révision structuré et travail sur les annales.
                </p>
              </Reveal>
              <Reveal delay={90} className="border border-navy-foreground/15 p-6">
                <Icons.Users className="size-5 text-gold" aria-hidden="true" strokeWidth={1.4} />
                <h3 className="mt-4 text-lg">Accompagnement individuel</h3>
                <p className="mt-2 text-sm text-navy-foreground/70">
                  Suivi des progrès et échanges réguliers avec les familles.
                </p>
              </Reveal>
            </div>
            <div className="mt-10">
              <CtaLink to="/demande-visite" variant="gold">
                Rejoindre le lycée
              </CtaLink>
            </div>
          </div>
          <Reveal className="flex flex-col items-center justify-center border border-navy-foreground/15 p-10 text-center lg:p-14">
            <span className="font-display text-[6rem] leading-none text-gold sm:text-[8rem] lg:text-[10rem]">
              100
            </span>
            <span className="mt-2 text-2xl font-light tracking-wide text-navy-foreground sm:text-3xl">
              % de réussite
            </span>
            <span className="mt-4 text-sm uppercase tracking-[0.18em] text-navy-foreground/60">
              au Baccalauréat
            </span>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <SectionHeading eyebrow="Continuité" title="Découvrir les autres cycles." />
          <CycleCards />
        </div>
      </section>

      <AdmissionsCta />
    </>
  );
}
