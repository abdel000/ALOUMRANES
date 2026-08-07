import { PageHero } from "./PageHero";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { CtaLink } from "./Cta";
import { AdmissionsCta } from "./Sections";
import { CycleCards } from "./CycleCards";
import type { Cycle } from "@/content/school";

export function CyclePage({ cycle }: { cycle: Cycle }) {
  return (
    <>
      <PageHero
        eyebrow={`Cycle ${cycle.index}`}
        title={cycle.title}
        intro={cycle.intro}
        image={cycle.image}
        imageAlt={`Élèves du cycle ${cycle.title} au Groupe Scolaire Al Oumrane`}
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
            title={`Ce que nous visons au ${cycle.title.toLowerCase()}.`}
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
