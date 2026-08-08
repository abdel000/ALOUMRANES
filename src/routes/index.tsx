import { createFileRoute } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { SITE, track } from "@/lib/site";
import { CYCLES, IMAGES, SUPPORT_STEPS, TESTIMONIALS, TRUST_POINTS, WHY } from "@/content/school";
import { CtaLink, TextLink } from "@/components/site/Cta";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CycleTabs } from "@/components/site/CycleTabs";
import { Gallery } from "@/components/site/Gallery";
import {
  AdmissionsCta,
  AdmissionsProcess,
  LocationSection,
} from "@/components/site/Sections";
import { AdmissionsForm } from "@/components/site/AdmissionsForm";

/** Icons for the trust strip, index-matched to TRUST_POINTS (kept local: TRUST_POINTS
 * itself stays a plain string[] since it's reused as-is on other pages). */
const TRUST_ICONS = [
  Icons.GraduationCap,
  Icons.UserRoundCheck,
  Icons.Palette,
  Icons.Building2,
  Icons.Trophy,
];

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const title = "Groupe Scolaire Al Oumrane | École Privée à Sidi Maârouf, Casablanca";
const description =
  "Groupe Scolaire Al Oumrane accompagne les élèves de la maternelle au lycée à Sidi Maârouf, Casablanca. Découvrez notre approche pédagogique et les inscriptions 2026–2027.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ivory">
        <div
          className="bg-dot-grid absolute inset-0 -z-10 text-gold/50"
          aria-hidden="true"
        />
        <div className="mx-auto grid max-w-[88rem] gap-14 px-5 pt-36 pb-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pt-44 lg:pb-28">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 border border-gold/40 bg-card px-4 py-2 text-[0.625rem] tracking-[0.2em] uppercase text-gold">
              Inscriptions {SITE.schoolYear} ouvertes
            </span>
            <h1 className="mt-8 text-4xl leading-[1.06] sm:text-5xl lg:text-[4.25rem]">
              L'excellence scolaire, dans un environnement pensé pour réussir.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              De la maternelle au lycée, Groupe Scolaire Al Oumrane accompagne chaque élève avec
              exigence, bienveillance et un suivi personnalisé.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <CtaLink to="/notre-ecole" variant="gold">
                Découvrir l'école
              </CtaLink>
              <CtaLink
                to="/demande-visite"
                variant="outline"
                onClick={() => track("visit_request", { location: "hero" })}
              >
                Prendre rendez-vous
              </CtaLink>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs tracking-[0.18em] uppercase text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Icons.MapPin className="size-3.5 text-gold" aria-hidden="true" />
                {SITE.district} • {SITE.city}
              </span>
              <span className="inline-flex items-center gap-2">
                <Icons.Star className="size-3.5 fill-gold text-gold" aria-hidden="true" />
                {SITE.rating}/5 — {SITE.reviewCount} avis Google
              </span>
            </div>
          </div>

          <div className="relative">
            <div
              className="bg-brand-gradient absolute -inset-8 -z-10 rounded-full opacity-20 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="absolute -top-6 -right-6 -z-10 size-28 rounded-full border-2 border-dashed border-gold/50"
              aria-hidden="true"
            />
            <Reveal className="border-card overflow-hidden border-8 shadow-soft">
              <img
                src={IMAGES.heroActivity}
                alt="Élèves en atelier créatif au Groupe Scolaire Al Oumrane"
                width={1200}
                height={1500}
                className="aspect-4/5 w-full object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-border bg-navy">
        <ul className="mx-auto grid max-w-[88rem] divide-y divide-navy-foreground/10 px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 lg:grid-cols-5">
          {TRUST_POINTS.map((p, i) => {
            const Icon = TRUST_ICONS[i] ?? Icons.Sparkles;
            return (
              <Reveal as="li" key={p} delay={i * 60} className="flex items-start gap-3 px-0 py-7 md:px-6">
                <Icon className="size-5 shrink-0 text-gold" aria-hidden="true" strokeWidth={1.4} />
                <p className="text-sm leading-snug text-navy-foreground/90">{p}</p>
              </Reveal>
            );
          })}
        </ul>
      </section>

      {/* PHILOSOPHIE */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-[88rem] gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal className="relative">
            <div className="overflow-hidden">
              <img
                src={IMAGES.philosophy}
                alt="Enseignante accompagnant une élève pendant un exercice en classe"
                loading="lazy"
                width={1200}
                height={1504}
                className="aspect-4/5 w-full object-cover"
              />
            </div>
            <div className="border-card absolute -right-6 -bottom-8 w-2/5 overflow-hidden border-8 shadow-soft sm:-right-10">
              <img
                src={IMAGES.philosophyDetail}
                alt="Cour de récréation dédiée à la maternelle"
                loading="lazy"
                width={800}
                height={800}
                className="aspect-square w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Notre philosophie"
              title="Bien plus qu'une école : un environnement pour grandir et réussir."
              subtitle="À Groupe Scolaire Al Oumrane, nous croyons qu'une réussite durable repose sur l'équilibre entre exigence académique, accompagnement humain et développement personnel."
            />
            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-foreground">
              {["Pédagogie innovante", "Accompagnement personnalisé"].map((v) => (
                <li key={v} className="flex items-center gap-2">
                  <Icons.CircleCheck className="size-4 text-gold" aria-hidden="true" strokeWidth={1.6} />
                  {v}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Nos équipes accompagnent les élèves dans leurs apprentissages tout en développant les
              qualités qui comptent sur le long terme.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-foreground sm:max-w-md">
              {["Autonomie", "Confiance", "Discipline", "Curiosité", "Responsabilité", "Collaboration"].map(
                (v) => (
                  <li key={v} className="flex items-center gap-3 border-b border-border pb-3">
                    <span className="size-1 shrink-0 bg-gold" aria-hidden="true" />
                    {v}
                  </li>
                ),
              )}
            </ul>
            <div className="mt-10">
              <TextLink to="/pedagogie">Découvrir notre approche pédagogique</TextLink>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-20 grid max-w-[88rem] grid-cols-2 gap-6 px-5 sm:px-8 lg:grid-cols-4">
          {[
            ["100%", "Taux de réussite au Baccalauréat"],
            [`${SITE.rating}/5`, `Note Google (${SITE.reviewCount} avis)`],
            ["Maternelle → Lycée", "Un parcours scolaire complet"],
            ["Suivi individualisé", "À chaque étape du parcours"],
          ].map(([value, label], i) => (
            <Reveal key={value} delay={i * 70} className="border border-border bg-card p-6">
              <p className="font-display text-2xl text-gold sm:text-3xl">{value}</p>
              <p className="mt-2 text-xs leading-snug tracking-[0.04em] text-muted-foreground">
                {label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CYCLES */}
      <section className="border-y border-border bg-ivory py-24 lg:py-32">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Un parcours complet"
            title="Une continuité pédagogique, de la maternelle au lycée."
          />
          <CycleTabs />
        </div>
      </section>

      {/* POURQUOI */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Nos engagements"
            title="Pourquoi choisir Groupe Scolaire Al Oumrane ?"
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

      {/* LYCÉE & BAC */}
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-[88rem] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-32">
          <div>
            <SectionHeading
              tone="inverse"
              eyebrow="Lycée & Baccalauréat"
              title="Préparer aujourd'hui les ambitions de demain."
              subtitle="Au lycée, chaque étape compte. Notre accompagnement vise à aider les élèves à consolider leurs acquis, développer leur autonomie et aborder les échéances académiques avec méthode et confiance."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <Reveal className="border border-navy-foreground/15 p-6">
                <p className="font-display text-3xl text-gold">100%</p>
                <p className="mt-2 text-sm text-navy-foreground/70">
                  Taux de réussite au Baccalauréat.
                </p>
              </Reveal>
              <Reveal delay={90} className="border border-navy-foreground/15 p-6">
                <p className="font-display text-3xl text-gold">Suivi</p>
                <p className="mt-2 text-sm text-navy-foreground/70">
                  Accompagnement individualisé et échanges réguliers avec les familles.
                </p>
              </Reveal>
            </div>
            <div className="mt-10">
              <CtaLink to="/lycee" variant="ghostLight">
                Découvrir le parcours Lycée
              </CtaLink>
            </div>
          </div>
          <Reveal className="overflow-hidden">
            <img
              src={IMAGES.bac}
              alt="Lycéens en cours, préparation aux épreuves du Baccalauréat"
              loading="lazy"
              width={1600}
              height={1008}
              className="aspect-4/3 w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* ACCOMPAGNEMENT */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Accompagnement"
            title="Chaque élève mérite d'être accompagné."
            subtitle="Observer. Comprendre. Accompagner. Faire progresser."
          />
          <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* VIE SCOLAIRE / GALERIE */}
      <section className="border-y border-border bg-ivory py-24 lg:py-32">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Vie scolaire"
            title="Une vie scolaire qui dépasse la salle de classe."
            subtitle="Apprendre, créer, partager, explorer."
          />
          <div className="mt-14">
            <Gallery />
          </div>
          <div className="mt-12">
            <TextLink to="/vie-scolaire">Découvrir la vie scolaire</TextLink>
          </div>
        </div>
      </section>

      {/* CADRE */}
      <section className="relative">
        <img
          src={IMAGES.campus}
          alt="Espaces extérieurs et bâtiments du Groupe Scolaire Al Oumrane"
          loading="lazy"
          width={1920}
          height={1000}
          className="h-[60vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/25 to-ink/15" />
        <div className="absolute inset-0 mx-auto flex max-w-[88rem] items-end px-5 pb-12 sm:px-8">
          <div className="max-w-xl text-navy-foreground">
            <h2 className="text-3xl leading-tight sm:text-4xl">
              Un cadre conçu pour apprendre sereinement.
            </h2>
            <p className="mt-4 text-sm text-navy-foreground/80">
              Salles de classe, espaces d'activités et espaces communs : un environnement structuré
              où chaque élève trouve sa place.
            </p>
          </div>
        </div>
      </section>

      {/* PARENTS */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-[88rem] gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Parents & école"
            title="Une relation de confiance entre l'école et les familles."
            subtitle="La réussite d'un élève se construit avec ses parents. Nous privilégions un dialogue régulier et transparent autour du parcours de chaque enfant."
          />
          <ul className="grid gap-6 sm:grid-cols-2">
            {[
              ["Communication", "Des échanges réguliers avec l'équipe pédagogique."],
              ["Suivi scolaire", "Un point clair sur les acquis et les progrès."],
              ["Rencontres", "Des rendez-vous dédiés au parcours de votre enfant."],
              ["Transparence", "Une information claire sur la scolarité et l'organisation."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 70} className="border-t border-border pt-5">
                <h3 className="text-lg">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="border-y border-border bg-ivory py-24 lg:py-32">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Témoignages"
            title="Ils parlent de leur expérience."
            subtitle={`Avis publiés par des parents sur Google — note moyenne ${SITE.rating}/5 sur ${SITE.reviewCount} avis.`}
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">

            {TESTIMONIALS.map((t, i) => {
              const stars = Number(t.level.match(/(\d)\/5/)?.[1] ?? 5);
              return (
                <Reveal
                  as="article"
                  key={i}
                  delay={i * 80}
                  className="border border-border bg-card p-8 shadow-soft"
                >
                  <div className="flex items-center gap-0.5" aria-label={t.level}>
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Icons.Star
                        key={s}
                        className={
                          s < stars ? "size-3.5 fill-gold text-gold" : "size-3.5 text-border"
                        }
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-5 font-display text-xl leading-relaxed">{t.quote}</p>
                  <footer className="mt-6 flex items-center gap-3">
                    <span className="bg-navy text-navy-foreground grid size-9 shrink-0 place-items-center rounded-full text-xs font-medium">
                      {initials(t.parent)}
                    </span>
                    <span className="text-xs tracking-[0.1em] uppercase text-muted-foreground">
                      {t.parent} — {t.level}
                    </span>
                  </footer>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <AdmissionsCta />
      <AdmissionsProcess />

      {/* FORMULAIRE */}
      <section className="border-t border-border bg-ivory py-24 lg:py-32">
        <div className="mx-auto grid max-w-[88rem] gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Parlons du parcours de votre enfant."
              subtitle="Renseignez le formulaire : notre équipe vous recontacte pour répondre à vos questions et organiser une visite."
            />
            <ul className="mt-10 space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Icons.Phone className="size-4 text-gold" aria-hidden="true" />
                <a href={SITE.phoneHref} onClick={() => track("phone_click", { location: "form" })}>
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icons.MapPin className="size-4 text-gold" aria-hidden="true" />
                {SITE.address}
              </li>
            </ul>
          </div>
          <Reveal className="border border-border bg-card p-6 sm:p-10">
            <AdmissionsForm source="accueil" />
          </Reveal>
        </div>
      </section>

      <LocationSection />

      {/* CYCLES rappel SEO */}
      <section className="py-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 className="text-2xl">
            École privée à {SITE.district}, {SITE.city}
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Groupe Scolaire Al Oumrane est une école privée située à {SITE.district},{" "}
            {SITE.city}, accueillant les élèves de la maternelle au lycée. L'établissement propose
            un parcours continu — {CYCLES.map((c) => c.title).join(", ")} — dans un environnement
            structuré, avec un accompagnement personnalisé et des activités parascolaires
            diversifiées. Les inscriptions {SITE.schoolYear} sont ouvertes.
          </p>
        </div>
      </section>
    </>
  );
}
