import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl, SITE, track } from "@/lib/site";
import { FAQ, IMAGES, TESTIMONIALS, TRUST_POINTS, WHY } from "@/content/school";
import { CtaLink } from "@/components/site/Cta";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CycleCards } from "@/components/site/CycleCards";
import { AdmissionsProcess, LocationSection } from "@/components/site/Sections";
import { AdmissionsForm } from "@/components/site/AdmissionsForm";
import { Gallery } from "@/components/site/Gallery";
import { Faq } from "@/components/site/Faq";
import * as Icons from "lucide-react";

const title = "Inscriptions 2026–2027 | École Privée Al Oumrane, Sidi Maârouf Casablanca";
const description =
  "Inscriptions 2026–2027 ouvertes au Groupe Scolaire Al Oumrane, Sidi Maârouf, Casablanca : maternelle, primaire, collège et lycée. Demandez une visite ou des informations.";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: absoluteUrl("/admissions") },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/admissions") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }),
      },
    ],
  }),
  component: Admissions,
});

function Admissions() {
  return (
    <>
      <section className="relative">
        <img
          src={IMAGES.campus}
          alt="École privée à Sidi Maârouf, Casablanca — campus du Groupe Scolaire Al Oumrane, de la maternelle au lycée"
          width={1920}
          height={1000}
          className="h-[88dvh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/65" />
        <div className="absolute inset-0 mx-auto flex max-w-[88rem] flex-col justify-end px-5 pb-16 sm:px-8 lg:pb-24">
          <div className="max-w-3xl text-navy-foreground">
            <span className="inline-flex border border-gold/60 px-4 py-2 text-[0.625rem] tracking-[0.2em] uppercase text-gold">
              Inscriptions {SITE.schoolYear} ouvertes
            </span>
            <h1 className="mt-8 text-4xl leading-[1.06] sm:text-5xl lg:text-[4rem]">
              Offrez à votre enfant un environnement où exigence, accompagnement et épanouissement
              avancent ensemble.
            </h1>
            <div className="mt-10 flex flex-wrap gap-3">
              <CtaLink
                to="/demande-visite"
                variant="gold"
                onClick={() => track("visit_request", { location: "admissions_hero" })}
              >
                Demander une visite
              </CtaLink>
              <a
                href="#formulaire"
                className="inline-flex items-center justify-center border border-navy-foreground/30 px-6 py-3.5 text-[0.8125rem] tracking-[0.08em] uppercase text-navy-foreground transition-colors hover:bg-navy-foreground hover:text-navy"
              >
                Demander des informations
              </a>
            </div>
            <p className="mt-10 text-xs tracking-[0.2em] uppercase text-navy-foreground/70">
              Maternelle • Primaire • Collège • Lycée
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-ivory">
        <ul className="mx-auto grid max-w-[88rem] divide-y divide-border px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 lg:grid-cols-5">
          {TRUST_POINTS.map((p, i) => (
            <Reveal as="li" key={p} delay={i * 60} className="px-0 py-6 md:px-6">
              <span className="font-display text-xs text-gold">0{i + 1}</span>
              <p className="mt-2 text-sm leading-snug">{p}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Le choix des parents"
            title="Pourquoi les parents choisissent Al Oumrane"
          />
          <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
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

      <section className="border-y border-border bg-ivory py-24 lg:py-32">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Nos cycles"
            title="Un parcours continu, de la maternelle au lycée."
          />
          <CycleCards />
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-[88rem] gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal className="overflow-hidden">
            <img
              src={IMAGES.philosophy}
              alt="Accompagnement personnalisé d'une élève par son enseignante, école privée Sidi Maârouf"
              loading="lazy"
              className="aspect-4/5 w-full object-cover"
            />
          </Reveal>
          <SectionHeading
            eyebrow="Accompagnement"
            title="Un suivi attentif, à chaque étape du parcours."
            subtitle="Identifier les besoins, accompagner les apprentissages, suivre les progrès et préparer la réussite : notre accompagnement s'adapte au profil de chaque élève."
          />
        </div>
      </section>

      <section className="border-y border-border bg-ivory py-24 lg:py-32">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Vie scolaire"
            title="Des activités qui complètent les apprentissages."
            subtitle="Apprendre, créer, partager, explorer."
          />
          <div className="mt-14">
            <Gallery />
          </div>
        </div>
      </section>

      <section className="bg-navy py-24 text-navy-foreground lg:py-32">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <SectionHeading
            tone="inverse"
            eyebrow="Résultats"
            title="Des résultats communiqués par l'établissement."
            subtitle="Baccalauréat, session 2026 : tous nos candidats ont été reçus."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                stat: "100%",
                text: "Taux de réussite au Baccalauréat — session 2026",
              },
              {
                stat: "100%",
                text: "De nos candidats au Bac 2026 ont été admis",
              },
              {
                stat: "100%",
                text: "Aucun échec enregistré au Baccalauréat 2026",
              },
            ].map((s, i) => (
              <Reveal key={s.text} delay={i * 80} className="border border-navy-foreground/15 p-6">
                <p className="font-display text-4xl text-gold">{s.stat}</p>
                <p className="mt-3 text-xs text-navy-foreground/60">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <SectionHeading eyebrow="Témoignages" title="Ils parlent de leur expérience." />
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal as="article" key={i} delay={i * 80} className="border border-border p-8">
                <p className="font-display text-xl leading-relaxed">{t.quote}</p>
                <footer className="mt-6 text-xs tracking-[0.14em] uppercase text-muted-foreground">
                  {t.parent} — {t.level}
                </footer>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AdmissionsProcess />

      <Faq />

      <section id="formulaire" className="border-t border-border bg-ivory py-24 lg:py-32">
        <div className="mx-auto grid max-w-[88rem] gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading
            eyebrow={`Inscriptions ${SITE.schoolYear}`}
            title="Parlons du parcours de votre enfant."
            subtitle="Notre équipe vous recontacte rapidement pour répondre à vos questions et organiser une visite de l'établissement."
          />
          <Reveal className="border border-border bg-card p-6 sm:p-10">
            <AdmissionsForm source="admissions" />
          </Reveal>
        </div>
      </section>

      <LocationSection />

      <section className="bg-navy py-20 text-navy-foreground">
        <div className="mx-auto flex max-w-[88rem] flex-col items-start gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-2xl text-3xl leading-tight sm:text-4xl">
            Construisons ensemble le parcours de votre enfant.
          </h2>
          <div className="flex flex-wrap gap-3">
            <CtaLink to="/demande-visite" variant="gold">
              Demander une visite
            </CtaLink>
            <CtaLink to="/contact" variant="ghostLight">
              Nous contacter
            </CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}
