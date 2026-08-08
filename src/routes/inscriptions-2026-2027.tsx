import { createFileRoute } from "@tanstack/react-router";
import {
  Star,
  Phone,
  MessageCircle,
  GraduationCap,
  Users,
  Globe,
  Palette,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { SITE, whatsappHref, track } from "@/lib/site";
import { IMAGES } from "@/content/school";
import { AdmissionsForm } from "@/components/site/AdmissionsForm";

const logo = "/images/logo-al-oumrane.png";

const title = `Inscriptions ${SITE.schoolYear} ouvertes | -25% pour les 50 premiers inscrits — ${SITE.shortName}`;
const description = `Groupe Scolaire Al Oumrane, ${SITE.district}, ${SITE.city} : inscriptions ${SITE.schoolYear} ouvertes, -25% sur les frais d'inscription pour les 50 premières nouvelles inscriptions. École trilingue, de la maternelle au lycée.`;

export const Route = createFileRoute("/inscriptions-2026-2027")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/inscriptions-2026-2027" },
    ],
  }),
  component: InscriptionsLanding,
});

const CYCLE_TAGS = [
  { label: "Maternelle", className: "bg-[#e5342c] text-white" },
  { label: "Primaire", className: "bg-[#7cb928] text-white" },
  { label: "Collège", className: "bg-[#12213c] text-white" },
  { label: "Lycée", className: "bg-[#f4c40f] text-[#12213c]" },
];

const FEATURES = [
  {
    icon: GraduationCap,
    title: "Excellence académique",
    text: "Programmes forts et résultats performants",
  },
  {
    icon: Users,
    title: "Accompagnement personnalisé",
    text: "Suivi individuel pour chaque élève",
  },
  {
    icon: Globe,
    title: "Ouverture sur le monde",
    text: "Langues étrangères et échanges culturels",
  },
  {
    icon: Palette,
    title: "Activités diversifiées",
    text: "Sport, art, culture et technologie",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité et bienveillance",
    text: "Un environnement sûr et stimulant",
  },
  {
    icon: TrendingUp,
    title: "De la maternelle au lycée",
    text: "Un parcours complet vers la réussite",
  },
];

function InscriptionsLanding() {
  return (
    <div className="min-h-dvh bg-white pb-20 lg:pb-0">
      {/* TOP BAR — logo + phone only, no nav (standalone ad landing page) */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-black/5 bg-white px-5 py-3 sm:px-8">
        <img
          src={logo}
          alt={`Logo ${SITE.name}`}
          className="h-12 w-auto object-contain sm:h-14"
        />
        <a
          href={SITE.phoneHref}
          onClick={() => track("phone_click", { location: "landing_promo_topbar" })}
          className="inline-flex items-center gap-2 rounded-full bg-[#e5342c] px-4 py-2.5 text-sm font-semibold text-white sm:px-5"
        >
          <Phone className="size-4" aria-hidden="true" />
          {SITE.phone}
        </a>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0e7a80] text-white">
        <img
          src={IMAGES.campus}
          alt="Bâtiment du Groupe Scolaire Al Oumrane à Sidi Maârouf, Casablanca"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e7a80]/20 via-[#0e7a80]/15 to-[#0e7a80]/65" />

        <div className="relative mx-auto max-w-4xl px-5 py-14 text-center sm:px-8 sm:py-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#12213c]/60 px-4 py-2 text-xs font-semibold tracking-wide uppercase backdrop-blur-sm">
            <Star className="size-4 fill-[#f4c40f] text-[#f4c40f]" aria-hidden="true" />
            École à {SITE.district}, {SITE.city}
          </span>

          <h1 className="mt-6 text-5xl leading-[1.02] font-extrabold tracking-tight [text-shadow:0_2px_4px_rgba(0,0,0,0.85),0_8px_28px_rgba(0,0,0,0.6)] sm:text-7xl">
            Inscriptions
            <br />
            <span className="text-[#f4c40f]">ouvertes</span>
          </h1>
          <span
            className="mx-auto mt-3 block h-1 w-20 rounded-full bg-[#f4c40f]"
            aria-hidden="true"
          />
          <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#e5342c] px-5 py-2 text-lg font-bold sm:text-xl">
            {SITE.schoolYear}
          </p>

          <div className="mx-auto mt-8 max-w-md rounded-2xl bg-[#f4c40f] p-6 text-[#12213c] shadow-xl">
            <p className="text-sm font-semibold tracking-wide uppercase">
              Sur les frais d'inscription
            </p>
            <p className="mt-1 text-6xl font-extrabold sm:text-7xl">-25%</p>
            <p className="mt-2 text-sm font-semibold">
              Pour les 50 premières nouvelles inscriptions
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {CYCLE_TAGS.map((c) => (
              <span
                key={c.label}
                className={`rounded-md px-4 py-2 text-sm font-bold ${c.className}`}
              >
                {c.label.toUpperCase()}
              </span>
            ))}
          </div>

          <p className="mt-8 text-lg font-semibold [text-shadow:0_2px_4px_rgba(0,0,0,0.85),0_8px_20px_rgba(0,0,0,0.55)]">
            Mon école <span className="text-[#f4c40f]">trilingue</span> d'excellence
          </p>
          <p className="mt-2 text-2xl" aria-hidden="true">
            🇲🇦 🇫🇷 🇺🇸
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#inscription-form"
              className="inline-flex items-center gap-2 rounded-full bg-[#e5342c] px-8 py-4 text-sm font-bold tracking-wide uppercase text-white transition-transform hover:-translate-y-0.5"
            >
              Profiter de l'offre
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={SITE.phoneHref}
              onClick={() => track("phone_click", { location: "landing_promo_hero" })}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-sm font-bold tracking-wide uppercase text-white"
            >
              <Phone className="size-4" aria-hidden="true" />
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ADVANTAGES — the three standout differentiators, with real photos */}
      <section className="bg-[#f7f7f5] px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-extrabold text-[#12213c] sm:text-3xl">
            Ce qui distingue Al Oumrane
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                image: IMAGES.trilingue,
                alt: "Élèves en atelier créatif au Groupe Scolaire Al Oumrane",
                title: "École trilingue",
                text: "Arabe, français et anglais dès le plus jeune âge pour une vraie ouverture sur le monde.",
              },
              {
                image: IMAGES.activitesParascolaires,
                alt: "Élève s'entraînant au tir à l'arc lors d'une activité parascolaire",
                title: "Activités parascolaires",
                text: "Sport, tir à l'arc, arts et projets collectifs pour révéler chaque talent.",
              },
              {
                image: IMAGES.ferme,
                alt: "Élèves lors d'une sortie pédagogique à la ferme",
                title: "Ferme pédagogique",
                text: "Sorties à la campagne : contact avec la nature, les animaux et l'apprentissage en plein air.",
              },
            ].map((a) => (
              <div key={a.title} className="overflow-hidden rounded-2xl bg-white shadow-lg">
                <img
                  src={a.image}
                  alt={a.alt}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-base font-bold text-[#12213c]">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-10">
          {FEATURES.map((f) => (
            <div key={f.title} className="text-center">
              <div className="mx-auto grid size-14 place-items-center rounded-full bg-[#0e7a80]/10">
                <f.icon className="size-6 text-[#0e7a80]" aria-hidden="true" strokeWidth={1.6} />
              </div>
              <h3 className="mt-3 text-sm font-bold text-[#12213c]">{f.title}</h3>
              <p className="mt-1 text-xs leading-snug text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY — real school-life photos as social proof before the form */}
      <section className="bg-[#f7f7f5] px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-extrabold text-[#12213c] sm:text-3xl">
            La vie à Al Oumrane, en images
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { src: IMAGES.gallerySport, alt: "Séance de football encadrée sur le terrain de sport" },
              { src: IMAGES.galleryPool, alt: "Élèves en cours de natation dans la piscine de l'école" },
              { src: IMAGES.galleryLibrary, alt: "Bibliothèque de l'école" },
              { src: IMAGES.galleryPlayground, alt: "Aire de jeux de la maternelle" },
              { src: IMAGES.galleryGardening, alt: "Atelier de jardinage pédagogique" },
              { src: IMAGES.galleryGroupWork, alt: "Travail en petits groupes en classe" },
              { src: IMAGES.galleryMotricite, alt: "Parcours de motricité pour les plus jeunes" },
              { src: IMAGES.galleryTeam, alt: "Équipe pédagogique du Groupe Scolaire Al Oumrane" },
            ].map((g, i) => (
              <img
                key={i}
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="aspect-square w-full rounded-lg object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="inscription-form" className="scroll-mt-20 bg-[#0e7a80] px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <div className="text-center text-white">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Réservez votre place dès maintenant
            </h2>
            <p className="mt-3 text-sm text-white/80">
              Offre réservée aux 50 premières nouvelles inscriptions pour l'année scolaire{" "}
              {SITE.schoolYear}. Places limitées.
            </p>
          </div>
          <div className="mt-10 rounded-2xl bg-white p-6 shadow-2xl sm:p-10">
            <AdmissionsForm
              source="landing-promo-2026-2027"
              defaultRequest="Demander les conditions d'inscription"
              redirectTo="/inscriptions-2026-2027-merci"
              showCurrentGrade={false}
              submitLabel="Inscrire mon enfant à la meilleure école de Sidi Maârouf"
            />
          </div>
        </div>
      </section>

      {/* FOOTER — minimal, no site nav */}
      <footer className="bg-[#12213c] px-5 py-8 text-center text-xs text-white/60 sm:px-8">
        <p className="inline-flex items-center justify-center gap-2">
          <MapPin className="size-3.5" aria-hidden="true" />
          {SITE.address}
        </p>
        <p className="mt-2">
          {SITE.name} — {SITE.rating}/5 sur {SITE.reviewCount} avis Google
        </p>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px bg-black/10 lg:hidden">
        <a
          href={SITE.phoneHref}
          onClick={() => track("phone_click", { location: "landing_promo_sticky" })}
          className="flex items-center justify-center gap-2 bg-[#e5342c] py-4 text-sm font-bold text-white"
        >
          <Phone className="size-4" aria-hidden="true" />
          Appeler
        </a>
        <a
          href={whatsappHref("Bonjour, je souhaite profiter de l'offre inscriptions 2026-2027.")}
          onClick={() => track("whatsapp_click", { location: "landing_promo_sticky" })}
          className="flex items-center justify-center gap-2 bg-[#0e7a80] py-4 text-sm font-bold text-white"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
