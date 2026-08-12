const facade1 = "/images/ecole-privee-sidi-maarouf-entree-principale.jpg";
const pool1 = "/images/ecole-privee-casablanca-piscine-natation.jpg";
const facade2 = "/images/ecole-privee-sidi-maarouf-casablanca-facade.jpg";
const atelier1 = "/images/maternelle-privee-sidi-maarouf-atelier-creatif.jpg";
const pool2 = "/images/ecole-privee-bouskoura-piscine-couverte.jpg";
const kids = "/images/maternelle-privee-casablanca-aire-de-jeux.jpg";
const atelier2 = "/images/primaire-prive-sidi-maarouf-travail-groupe.jpg";
const courBus = "/images/college-prive-sidi-maarouf-cour-transport-scolaire.jpg";
const library = "/images/lycee-prive-casablanca-bibliotheque.jpg";
const poolStudy = "/images/lycee-prive-sidi-maarouf-etude-plein-air.jpg";
const facadeFisheye = "/images/ecole-privee-sidi-maarouf-casablanca-batiment.webp";
const ecranInteractif = "/images/ecole-privee-casablanca-ecran-interactif-classe.jpg";
const bac100 = "/images/lycee-prive-casablanca-100-pourcent-baccalaureat.png";

const ateliersCreatifs = "/images/ecole-trilingue-sidi-maarouf-atelier-creatif.jpg";
const jardinageArrosage = "/images/college-prive-bouskoura-atelier-jardinage.jpg";
const courMaternelle = "/images/maternelle-privee-sidi-maarouf-cour-recreation.jpg";
const tirArc1 = "/images/college-prive-casablanca-tir-a-arc-activite.jpg";
const tirArc2 = "/images/college-prive-sidi-maarouf-tir-a-arc-cible.jpg";
const sortiePoney = "/images/ecole-privee-bouskoura-sortie-pedagogique-poney.jpg";
const jardinagePlantation = "/images/primaire-prive-sidi-maarouf-potager-pedagogique.jpg";
const parcoursMotricite1 = "/images/maternelle-privee-casablanca-parcours-motricite.jpg";
const sportFoot = "/images/college-prive-sidi-maarouf-football-sport.jpg";
const sportCollege = "/images/college-prive-casablanca-handball-sport.jpg";
const evenementEquipe = "/images/ecole-privee-sidi-maarouf-equipe-pedagogique.jpg";
const spectacleScolaire = "/images/vie-scolaire-ecole-privee-sidi-maarouf-spectacle.jpg";
const jeuPedagogique = "/images/college-prive-bouskoura-jeu-pedagogique-scene.jpg";
const parcoursMotricite2 = "/images/maternelle-privee-sidi-maarouf-eveil-moteur-groupe.jpg";

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
  imageAlt: string;
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
    imageAlt: "Maternelle privée à Sidi Maârouf, Casablanca — élèves du Groupe Scolaire Al Oumrane",
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
    imageAlt: "École primaire privée à Sidi Maârouf, Casablanca — élèves du Groupe Scolaire Al Oumrane",
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
    imageAlt: "Collège privé à Sidi Maârouf, Casablanca — élèves du Groupe Scolaire Al Oumrane",
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
    imageAlt: "Lycée privé à Sidi Maârouf, Casablanca — élèves en préparation du Baccalauréat",
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
    title: "Des écrans interactifs dans nos classes",
    date: "2026",
    category: "Pédagogie",
    excerpt:
      "Le Groupe Scolaire Al Oumrane s'équipe d'écrans interactifs pour des cours plus vivants, collaboratifs et adaptés aux usages numériques d'aujourd'hui.",
    image: ecranInteractif,
  },
  {
    title: "100% de réussite au Baccalauréat",
    date: "Session 2026",
    category: "Réussite",
    excerpt:
      "Tous nos candidats au Baccalauréat de la session 2026 ont été reçus. Une fierté pour nos élèves, leurs familles et toute l'équipe pédagogique.",
    image: bac100,
  },
];

export type FaqItem = { question: string; answer: string };

/**
 * Questions fréquentes des parents, avec réponses basées uniquement sur des faits
 * déjà publiés ailleurs sur le site (adresse, horaires, étapes d'admission, résultats
 * Bac 2026, transport). Ne pas ajouter de question dont la réponse n'est pas vérifiée.
 */
export const FAQ: FaqItem[] = [
  {
    question: "Où se trouve le Groupe Scolaire Al Oumrane ?",
    answer:
      "Le Groupe Scolaire Al Oumrane est situé Lotissement Salma, Route de Sidi Maârouf, 20280 Casablanca, dans le quartier de Sidi Maârouf.",
  },
  {
    question: "Quels niveaux scolaires propose l'école ?",
    answer:
      "L'école accueille les élèves de la maternelle au lycée : maternelle, primaire, collège et lycée, dans un parcours pédagogique continu.",
  },
  {
    question: "Quels sont les horaires de l'école ?",
    answer: "Lundi au vendredi de 08h00 à 18h00. L'établissement est fermé le samedi et le dimanche.",
  },
  {
    question: "Comment inscrire mon enfant au Groupe Scolaire Al Oumrane ?",
    answer:
      "L'inscription se déroule en quatre étapes : prendre contact par téléphone, WhatsApp ou via le formulaire du site ; échanger avec l'équipe sur le parcours de l'enfant ; visiter l'établissement ; puis finaliser les démarches administratives d'inscription.",
  },
  {
    question: "L'école propose-t-elle un transport scolaire ?",
    answer:
      "Oui. Une flotte de bus assure le ramassage scolaire des élèves dans le secteur de Sidi Maârouf.",
  },
  {
    question: "Quel est le taux de réussite au Baccalauréat au Groupe Scolaire Al Oumrane ?",
    answer:
      "Tous les candidats du Groupe Scolaire Al Oumrane au Baccalauréat de la session 2026 ont été reçus, soit un taux de réussite de 100%.",
  },
  {
    question: "Comment contacter le Groupe Scolaire Al Oumrane ?",
    answer:
      "Par téléphone au 05 22 97 25 24, ou via le formulaire de demande de visite / d'informations disponible sur le site.",
  },
];

export const GALLERY = [
  { src: facade2, alt: "Façade de l'école privée Al Oumrane à Sidi Maârouf, Casablanca", caption: "Notre établissement", category: "Campus" },
  { src: atelier1, alt: "Ateliers de la maternelle privée à Sidi Maârouf encadrés par les enseignantes dans la cour", caption: "Ateliers de maternelle", category: "Maternelle" },
  { src: pool1, alt: "Élèves en cours de natation à l'école privée Al Oumrane, Sidi Maârouf Casablanca", caption: "Cours de natation", category: "Sport" },
  { src: kids, alt: "Jeunes élèves de la maternelle privée sur l'aire de jeux, Casablanca", caption: "Aire de jeux", category: "Maternelle" },
  { src: library, alt: "Bibliothèque du lycée privé Al Oumrane : rayons anglais, dictionnaires et bandes dessinées", caption: "Bibliothèque", category: "Ressources" },
  { src: courBus, alt: "Cour de récréation et transport scolaire du collège privé à Sidi Maârouf", caption: "Cour & transport scolaire", category: "Campus" },
  { src: atelier2, alt: "Travail en petits groupes en classe de l'école primaire privée à Sidi Maârouf", caption: "Travail en petits groupes", category: "Pédagogie" },
  { src: poolStudy, alt: "Élèves du lycée privé travaillant en plein air au bord de la piscine, Sidi Maârouf", caption: "Activités en plein air", category: "Vie scolaire" },
  { src: pool2, alt: "Piscine couverte de l'école privée Al Oumrane sous pergola, Sidi Maârouf — accessible depuis Bouskoura", caption: "Espace piscine", category: "Sport" },
  { src: facade1, alt: "Entrée principale de l'école privée Al Oumrane à Sidi Maârouf, Casablanca", caption: "Entrée principale", category: "Campus" },
  { src: ateliersCreatifs, alt: "Élèves de la maternelle trilingue en atelier de dessin, école privée Sidi Maârouf", caption: "Ateliers créatifs en plein air", category: "Maternelle" },
  { src: tirArc1, alt: "Collégienne du collège privé s'entraînant au tir à l'arc lors d'une sortie pédagogique", caption: "Initiation au tir à l'arc", category: "Activités" },
  { src: tirArc2, alt: "Élève du collège privé visant une cible lors d'un atelier de tir à l'arc", caption: "Atelier tir à l'arc", category: "Activités" },
  { src: sortiePoney, alt: "Élèves en balade à cheval et calèche lors d'une sortie pédagogique, école privée Sidi Maârouf et Bouskoura", caption: "Sortie pédagogique à la ferme", category: "Sorties" },
  { src: jardinageArrosage, alt: "Collégiennes du collège privé arrosant une jeune plantation dans le jardin de l'école, secteur Bouskoura", caption: "Atelier jardinage", category: "Environnement" },
  { src: jardinagePlantation, alt: "Élève de primaire plantant dans le potager pédagogique de l'école privée, Sidi Maârouf", caption: "Potager pédagogique", category: "Environnement" },
  { src: courMaternelle, alt: "Cour de récréation de la maternelle privée à Sidi Maârouf avec structures de jeux", category: "Maternelle", caption: "Cour de la maternelle" },
  { src: parcoursMotricite1, alt: "Enfants de la maternelle privée en parcours de motricité, Casablanca", caption: "Parcours de motricité", category: "Maternelle" },
  { src: parcoursMotricite2, alt: "Groupe d'enfants de la maternelle privée en parcours d'obstacles, Sidi Maârouf", caption: "Éveil moteur en groupe", category: "Maternelle" },
  { src: sportFoot, alt: "Collégiens du collège privé en séance de football encadrée, Sidi Maârouf", caption: "Séance de football", category: "Sport" },
  { src: sportCollege, alt: "Élèves du collège privé en match de handball, Casablanca", caption: "Match de handball", category: "Sport" },
  { src: jeuPedagogique, alt: "Jeu pédagogique interactif sur scène avec les élèves du collège privé, secteur Bouskoura", caption: "Jeu pédagogique sur scène", category: "Pédagogie" },
  { src: spectacleScolaire, alt: "Élèves de l'école privée Al Oumrane sur scène lors d'un spectacle, vie scolaire à Sidi Maârouf", caption: "Spectacle scolaire", category: "Vie scolaire" },
  { src: evenementEquipe, alt: "Équipe pédagogique de l'école privée Al Oumrane réunie pour les 25 ans de l'établissement, Sidi Maârouf", caption: "25 ans du Groupe Scolaire Al Oumrane", category: "Vie scolaire" },
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
  philosophyHome: jardinagePlantation,
  heroBuilding: facadeFisheye,
  ferme: jardinagePlantation,
  activitesParascolaires: tirArc1,
  trilingue: ateliersCreatifs,
  galleryPool: pool1,
  galleryPlayground: kids,
  galleryLibrary: library,
  galleryGroupWork: atelier2,
  galleryGardening: jardinageArrosage,
  galleryMotricite: parcoursMotricite2,
  gallerySport: sportFoot,
  galleryTeam: evenementEquipe,
  galleryJeuPedagogique: jeuPedagogique,
};
