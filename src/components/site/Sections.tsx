import { SITE } from "@/lib/site";
import { CtaLink } from "./Cta";
import { SectionHeading } from "./SectionHeading";
import { ADMISSION_STEPS } from "@/content/school";
import { Reveal } from "./Reveal";
import { track } from "@/lib/site";
import { MapPin, ArrowUpRight } from "lucide-react";

export function AdmissionsCta() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-navy-foreground lg:py-32">
      <div className="bg-dot-grid absolute inset-0 text-navy-foreground/40" aria-hidden="true" />
      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading
            tone="inverse"
            eyebrow={`Admissions ${SITE.schoolYear}`}
            title={`Les inscriptions ${SITE.schoolYear} sont ouvertes.`}
            subtitle="Vous recherchez une école privée à Casablanca pour accompagner votre enfant dans un environnement exigeant, structuré et bienveillant ?"
          />
          <Reveal className="flex flex-wrap gap-3">
            <CtaLink to="/admissions" variant="gold">
              Demander des informations
            </CtaLink>
            <CtaLink
              to="/demande-visite"
              variant="ghostLight"
              onClick={() => track("visit_request", { location: "cta_section" })}
            >
              Planifier une visite
            </CtaLink>
          </Reveal>
        </div>
        <p className="mt-12 border-t border-navy-foreground/15 pt-8 text-sm tracking-[0.18em] uppercase text-navy-foreground/60">
          Maternelle • Primaire • Collège • Lycée
        </p>
      </div>
    </section>
  );
}

export function AdmissionsProcess() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Comment procéder"
          title="Un parcours d'inscription simple et accompagné."
        />
        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {ADMISSION_STEPS.map((s, i) => (
            <Reveal as="li" key={s.index} delay={i * 90} className="border-t border-border pt-6">
              <span className="font-display text-4xl text-gold">{s.index}</span>
              <h3 className="mt-4 text-xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function LocationSection() {
  return (
    <section className="border-t border-border bg-ivory py-24 lg:py-32">
      <div className="mx-auto grid max-w-[88rem] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Localisation"
            title="Nous rendre visite"
            subtitle={`${SITE.name} — ${SITE.address}`}
          />
          <div className="mt-8 space-y-3 text-sm text-muted-foreground">
            <p className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-gold" aria-hidden="true" />
              {SITE.district}, {SITE.city}
            </p>
            <p>{SITE.hours}</p>
          </div>
          <a
            href={SITE.mapsLink}
            target="_blank"
            rel="noreferrer"
            onClick={() => track("map_click", { location: "location_section" })}
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-navy"
          >
            <span className="link-underline">Itinéraire</span>
            <ArrowUpRight className="size-4" />
          </a>
        </div>
        <Reveal className="overflow-hidden border border-border">
          <iframe
            src={SITE.mapsEmbed}
            title={`Localisation de ${SITE.name}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[380px] w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
