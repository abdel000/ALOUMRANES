const facade1 = "/images/gmb-01.jpg";
const pool1 = "/images/gmb-02.jpg";
const facade2 = "/images/gmb-03.jpg";
const atelier1 = "/images/gmb-04.jpg";
const pool2 = "/images/gmb-05.jpg";
const kids = "/images/gmb-06.jpg";
const atelier2 = "/images/gmb-07.jpg";
const courBus = "/images/gmb-08.jpg";
const library = "/images/gmb-09.jpg";
const poolStudy = "/images/gmb-10.jpg";

const ateliersCreatifs = "/images/gallery-ateliers-creatifs.jpg";
const jardinageArrosage = "/images/gallery-jardinage-arrosage.jpg";
const courMaternelle = "/images/gallery-cour-maternelle.jpg";
const tirArc1 = "/images/gallery-tir-arc-01.jpg";
const tirArc2 = "/images/gallery-tir-arc-02.jpg";
const sortiePoney = "/images/gallery-sortie-poney.jpg";
const jardinagePlantation = "/images/gallery-jardinage-plantation.jpg";
const parcoursMotricite1 = "/images/gallery-parcours-motricite-01.jpg";
const sportFoot = "/images/gallery-sport-foot.jpg";
const sportCollege = "/images/gallery-sport-college.jpg";
const evenementEquipe = "/images/gallery-evenement-equipe.jpg";
const spectacleScolaire = "/images/gallery-spectacle-scolaire.jpg";
const jeuPedagogique = "/images/gallery-jeu-pedagogique.jpg";
const parcoursMotricite2 = "/images/gallery-parcours-motricite-02.jpg";

/** Photos officielles issues de la fiche Google du Groupe Scolaire Al Oumrane. */
const maternelle = kids;
const primaire = atelier2;
const college = courBus;
const lycee = poolStudy;
const campus = facade2;
const philosophy = atelier1;
const bac = library;


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
  { src: facade2, alt: "Façade du Groupe Scolaire Al Oumrane à Sidi Maârouf, Casablanca", caption: "Notre établissement", category: "Campus" },
  { src: atelier1, alt: "Ateliers de maternelle encadrés par les enseignantes dans la cour", caption: "Ateliers de maternelle", category: "Maternelle" },
  { src: pool1, alt: "Élèves en cours de natation dans la piscine de l'école", caption: "Cours de natation", category: "Sport" },
  { src: kids, alt: "Jeunes élèves de maternelle sur l'aire de jeux", caption: "Aire de jeux", category: "Maternelle" },
  { src: library, alt: "Bibliothèque de l'école : rayons anglais, dictionnaires et bandes dessinées", caption: "Bibliothèque", category: "Ressources" },
  { src: courBus, alt: "Cour de récréation et bus de transport scolaire de l'établissement", caption: "Cour & transport scolaire", category: "Campus" },
  { src: atelier2, alt: "Travail en petits groupes en classe de maternelle", caption: "Travail en petits groupes", category: "Pédagogie" },
  { src: poolStudy, alt: "Élèves travaillant en plein air au bord de la piscine", caption: "Activités en plein air", category: "Vie scolaire" },
  { src: pool2, alt: "Piscine couverte de l'école sous pergola", caption: "Espace piscine", category: "Sport" },
  { src: facade1, alt: "Entrée principale du Groupe Scolaire Al Oumrane", caption: "Entrée principale", category: "Campus" },
  { src: ateliersCreatifs, alt: "Élèves de maternelle en atelier de dessin autour d'une table hexagonale colorée", caption: "Ateliers créatifs en plein air", category: "Maternelle" },
  { src: tirArc1, alt: "Collégienne s'entraînant au tir à l'arc lors d'une sortie pédagogique", caption: "Initiation au tir à l'arc", category: "Activités" },
  { src: tirArc2, alt: "Élève visant une cible lors d'un atelier de tir à l'arc", caption: "Atelier tir à l'arc", category: "Activités" },
  { src: sortiePoney, alt: "Élèves en balade à cheval et calèche lors d'une sortie pédagogique à la campagne", caption: "Sortie pédagogique à la ferme", category: "Sorties" },
  { src: jardinageArrosage, alt: "Deux collégiennes arrosant une jeune plantation dans le jardin de l'école", caption: "Atelier jardinage", category: "Environnement" },
  { src: jardinagePlantation, alt: "Élève plantant dans un carré potager décoré par les enfants", caption: "Potager pédagogique", category: "Environnement" },
  { src: courMaternelle, alt: "Cour de récréation dédiée à la maternelle avec structures de jeux", category: "Maternelle", caption: "Cour de la maternelle" },
  { src: parcoursMotricite1, alt: "Enfants en parcours de motricité avec trottinettes dans la bibliothèque", caption: "Parcours de motricité", category: "Maternelle" },
  { src: parcoursMotricite2, alt: "Groupe d'enfants en tenue de sport participant à un parcours d'obstacles", caption: "Éveil moteur en groupe", category: "Maternelle" },
  { src: sportFoot, alt: "Collégiens en séance de football encadrée sur le terrain de sport", caption: "Séance de football", category: "Sport" },
  { src: sportCollege, alt: "Élèves du collège en match de handball sur le terrain de sport", caption: "Match de handball", category: "Sport" },
  { src: jeuPedagogique, alt: "Jeu pédagogique interactif sur scène avec les élèves du collège", caption: "Jeu pédagogique sur scène", category: "Pédagogie" },
  { src: spectacleScolaire, alt: "Élèves sur scène lors d'un spectacle devant leurs camarades", caption: "Spectacle scolaire", category: "Vie scolaire" },
  { src: evenementEquipe, alt: "Équipe pédagogique et administrative réunie pour les 25 ans de l'établissement", caption: "25 ans du Groupe Scolaire Al Oumrane", category: "Vie scolaire" },
];


export const IMAGES = {
  campus,
  philosophy,
  bac,
  maternelle,
  primaire,
  college,
  lycee,
  activites: spectacleScolaire,
  heroActivity: ateliersCreatifs,
  philosophyDetail: courMaternelle,
};
