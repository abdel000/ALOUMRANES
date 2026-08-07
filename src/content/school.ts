import facade1 from "@/assets/gmb/gmb-01.jpg.asset.json";
import pool1 from "@/assets/gmb/gmb-02.jpg.asset.json";
import facade2 from "@/assets/gmb/gmb-03.jpg.asset.json";
import atelier1 from "@/assets/gmb/gmb-04.jpg.asset.json";
import pool2 from "@/assets/gmb/gmb-05.jpg.asset.json";
import kids from "@/assets/gmb/gmb-06.jpg.asset.json";
import atelier2 from "@/assets/gmb/gmb-07.jpg.asset.json";
import courBus from "@/assets/gmb/gmb-08.jpg.asset.json";
import library from "@/assets/gmb/gmb-09.jpg.asset.json";
import poolStudy from "@/assets/gmb/gmb-10.jpg.asset.json";

/** Photos officielles issues de la fiche Google du Groupe Scolaire Al Oumrane. */
const maternelle = kids.url;
const primaire = atelier2.url;
const college = courBus.url;
const lycee = poolStudy.url;
const campus = facade2.url;
const philosophy = atelier1.url;
const bac = library.url;


/**
 * Contenu éditorial structuré (prêt à être branché sur un CMS).
 * Aucune statistique, distinction ou témoignage n'est inventé : les valeurs
 * non confirmées par l'établissement restent des placeholders explicites.
 */

export type Cycle = {
  index: string;
  slug: string;
  to: "/maternelle" | "/primaire" | "/college" | "/lycee";
  title: string;
  description: string;
  image: string;
  intro: string;
  points: string[];
};

export const CYCLES: Cycle[] = [
  {
    index: "01",
    slug: "maternelle",
    to: "/maternelle",
    title: "Maternelle",
    description: "Les premières bases pour apprendre, découvrir et s'épanouir.",
    image: maternelle,
    intro:
      "La maternelle est le temps des premières découvertes. Dans un cadre rassurant et structuré, chaque enfant apprend à s'exprimer, à vivre avec les autres et à prendre confiance en lui.",
    points: [
      "Un environnement calme, sécurisant et adapté aux plus jeunes",
      "Éveil au langage, à la motricité et à la socialisation",
      "Attention individuelle portée au rythme de chaque enfant",
      "Communication régulière avec les familles",
    ],
  },
  {
    index: "02",
    slug: "primaire",
    to: "/primaire",
    title: "Primaire",
    description: "Construire des fondamentaux solides et développer le goût d'apprendre.",
    image: primaire,
    intro:
      "Au primaire, les apprentissages fondamentaux se consolident. L'objectif est double : maîtriser les savoirs essentiels et développer des méthodes de travail durables.",
    points: [
      "Maîtrise des fondamentaux : lecture, écriture, mathématiques, langues",
      "Méthodes de travail et autonomie progressive",
      "Suivi régulier des acquis et des progrès",
      "Activités parascolaires pour élargir les horizons",
    ],
  },
  {
    index: "03",
    slug: "college",
    to: "/college",
    title: "Collège",
    description: "Accompagner l'adolescent dans une étape clé de son parcours scolaire.",
    image: college,
    intro:
      "Le collège est une étape de transition. Nous accompagnons chaque élève dans l'organisation de son travail, la construction de sa méthode et l'affirmation de sa personnalité.",
    points: [
      "Encadrement pédagogique attentif et exigeant",
      "Travail sur l'organisation, la méthode et la régularité",
      "Suivi individualisé des difficultés et des progrès",
      "Ouverture culturelle et projets collectifs",
    ],
  },
  {
    index: "04",
    slug: "lycee",
    to: "/lycee",
    title: "Lycée",
    description:
      "Préparer efficacement les élèves aux exigences de l'enseignement supérieur et du Baccalauréat.",
    image: lycee,
    intro:
      "Au lycée, chaque étape compte. L'accompagnement vise la consolidation des acquis, l'autonomie de travail et une préparation méthodique aux échéances académiques.",
    points: [
      "Préparation structurée aux épreuves du Baccalauréat",
      "Développement de l'autonomie et de la rigueur de travail",
      "Suivi personnalisé et échanges réguliers avec les familles",
      "Accompagnement dans la réflexion sur l'orientation",
    ],
  },
];

export const TRUST_POINTS = [
  "Maternelle → Lycée",
  "Accompagnement personnalisé",
  "Activités parascolaires diversifiées",
  "Environnement éducatif structuré",
  "Objectif : réussite et épanouissement",
];

export const WHY = [
  {
    title: "Excellence académique",
    text: "Un cadre exigeant qui encourage la progression et la réussite.",
    icon: "GraduationCap",
  },
  {
    title: "Accompagnement personnalisé",
    text: "Une attention portée au parcours et aux besoins de chaque élève.",
    icon: "UserRoundCheck",
  },
  {
    title: "Encadrement pédagogique",
    text: "Une équipe engagée dans le suivi et la progression des élèves.",
    icon: "Users",
  },
  {
    title: "Activités parascolaires",
    text: "Des activités diversifiées pour développer les talents et la confiance.",
    icon: "Palette",
  },
  {
    title: "Préparation aux examens",
    text: "Un accompagnement structuré pour les étapes importantes du parcours scolaire.",
    icon: "NotebookPen",
  },
  {
    title: "Épanouissement personnel",
    text: "Développer l'autonomie, la responsabilité, la confiance et l'esprit d'initiative.",
    icon: "Sparkles",
  },
] as const;

export const SUPPORT_STEPS = [
  { index: "01", title: "Identifier les besoins", text: "Observer et comprendre le profil de chaque élève." },
  { index: "02", title: "Accompagner les apprentissages", text: "Adapter le suivi et les méthodes de travail." },
  { index: "03", title: "Suivre les progrès", text: "Évaluer régulièrement et ajuster l'accompagnement." },
  { index: "04", title: "Préparer la réussite", text: "Consolider les acquis et aborder les échéances avec méthode." },
];

export const ADMISSION_STEPS = [
  { index: "01", title: "Prenez contact", text: "Par téléphone, WhatsApp ou via le formulaire." },
  { index: "02", title: "Échangez avec notre équipe", text: "Nous répondons à vos questions sur le parcours de votre enfant." },
  { index: "03", title: "Visitez l'établissement", text: "Découvrez l'école, les espaces et l'organisation." },
  { index: "04", title: "Préparez l'inscription", text: "Nous vous accompagnons dans les étapes administratives." },
];

export const ACTIVITY_CATEGORIES = [
  {
    title: "Natation",
    text: "Une piscine au sein de l'établissement permet des séances de natation encadrées tout au long de l'année.",
  },
  {
    title: "Bibliothèque",
    text: "Un espace de lecture équipé (romans, dictionnaires, anglais, bandes dessinées) pour développer le goût de lire.",
  },
  {
    title: "Aires de jeux & motricité",
    text: "Cour dédiée aux plus jeunes avec structures de jeux, trottinettes et vélos pour l'éveil moteur.",
  },
  {
    title: "Ateliers créatifs",
    text: "Ateliers d'arts plastiques, découpage et expression encadrés par les enseignantes en maternelle.",
  },
  {
    title: "Transport scolaire",
    text: "Une flotte de bus assure le ramassage scolaire des élèves dans le secteur de Sidi Maârouf.",
  },
];


export type Testimonial = { quote: string; parent: string; level: string };

/** Avis publiés par des parents sur la fiche Google de l'établissement. */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Une belle expérience éducative. L'administration est à l'écoute et les enseignants sont passionnés, je recommande vivement cette école.",
    parent: "Ghita Me",
    level: "Avis Google • 5/5",
  },
  {
    quote:
      "Le Groupe Scolaire Al Oumrane offre un environnement stimulant et sécurisé. Je suis très satisfaite du niveau d'éducation et surtout du suivi pédagogique !",
    parent: "Ghita Aj",
    level: "Avis Google • 5/5",
  },
  {
    quote:
      "Grâce à l'engagement de son équipe pédagogique et à la qualité de son encadrement, nos enfants ont pu évoluer dans un environnement sain, motivant et propice à l'apprentissage.",
    parent: "Younes Nassiri",
    level: "Avis Google • 5/5",
  },
  {
    quote:
      "Très bon encadrement, ambiance agréable et programmes adaptés. Une école qui met vraiment l'élève au centre de ses priorités.",
    parent: "Yehushua Yes",
    level: "Avis Google • 5/5",
  },
];


export type NewsItem = {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
};

/** Placeholders CMS : actualités à publier par l'établissement. */
export const NEWS: NewsItem[] = [
  {
    title: "[TITRE DE L'ACTUALITÉ À AJOUTER]",
    date: "[DATE]",
    category: "Vie scolaire",
    excerpt: "[CONTENU À AJOUTER PAR L'ÉTABLISSEMENT]",
    image: campus,
  },
  {
    title: "[TITRE DE L'ACTUALITÉ À AJOUTER]",
    date: "[DATE]",
    category: "Pédagogie",
    excerpt: "[CONTENU À AJOUTER PAR L'ÉTABLISSEMENT]",
    image: philosophy,
  },
  {
    title: "[TITRE DE L'ACTUALITÉ À AJOUTER]",
    date: "[DATE]",
    category: "Admissions",
    excerpt: "[CONTENU À AJOUTER PAR L'ÉTABLISSEMENT]",
    image: bac,
  },
];

export const GALLERY = [
  { src: facade2.url, alt: "Façade du Groupe Scolaire Al Oumrane à Sidi Maârouf, Casablanca", caption: "Notre établissement", category: "Campus" },
  { src: atelier1.url, alt: "Ateliers de maternelle encadrés par les enseignantes dans la cour", caption: "Ateliers de maternelle", category: "Maternelle" },
  { src: pool1.url, alt: "Élèves en cours de natation dans la piscine de l'école", caption: "Cours de natation", category: "Sport" },
  { src: kids.url, alt: "Jeunes élèves de maternelle sur l'aire de jeux", caption: "Aire de jeux", category: "Maternelle" },
  { src: library.url, alt: "Bibliothèque de l'école : rayons anglais, dictionnaires et bandes dessinées", caption: "Bibliothèque", category: "Ressources" },
  { src: courBus.url, alt: "Cour de récréation et bus de transport scolaire de l'établissement", caption: "Cour & transport scolaire", category: "Campus" },
  { src: atelier2.url, alt: "Travail en petits groupes en classe de maternelle", caption: "Travail en petits groupes", category: "Pédagogie" },
  { src: poolStudy.url, alt: "Élèves travaillant en plein air au bord de la piscine", caption: "Activités en plein air", category: "Vie scolaire" },
  { src: pool2.url, alt: "Piscine couverte de l'école sous pergola", caption: "Espace piscine", category: "Sport" },
  { src: facade1.url, alt: "Entrée principale du Groupe Scolaire Al Oumrane", caption: "Entrée principale", category: "Campus" },
];


export const IMAGES = { campus, philosophy, bac, maternelle, primaire, college, lycee };
