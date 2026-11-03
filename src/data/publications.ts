import type { Localized } from '@/i18n/utils';

/**
 * PHI-LEAN PRESS : livres et articles.
 * PDF dans public/downloads/, vignettes de première page dans public/images/articles/
 * (340 px et @2x). Les résumés (hook) sont rédigés à partir du contenu de chaque texte.
 */

export interface Book {
  id: string;
  title: string; // titre dans la langue du livre
  subtitle?: string;
  lang: 'fr' | 'en';
  cover?: string;
  coverLarge?: string;
  coverSize?: { width: number; height: number };
  hook?: Localized;
  details: Localized<string[]>;
  isbn?: string;
  /** Date de parution (AAAA-MM-JJ). Avant cette date, le livre est annoncé « à paraître ». */
  releaseDate?: string;
  /** Lien Amazon exact ; à défaut, recherche Amazon par ISBN après la parution. */
  amazonUrl?: Localized;
  /** PDF en téléchargement libre (e-book). */
  file?: string;
}

export const books: Book[] = [
  {
    id: 'prendre-le-virage-de-l-ia',
    title: 'Prendre le virage de l’IA',
    subtitle: 'Ce qui attend les TPE et PME qui s’y engagent dès maintenant, et celles qui subissent',
    lang: 'fr',
    cover: '/images/livres/prendre-le-virage-de-l-ia.webp',
    coverLarge: '/images/livres/prendre-le-virage-de-l-ia-grand.webp',
    coverSize: { width: 600, height: 848 },
    hook: {
      fr: "L'intelligence artificielle n'attendra pas que les PME soient prêtes. Certaines s'y engagent dès maintenant et prennent de l'avance ; d'autres subiront le virage, imposé par leurs clients et leurs concurrents. Vingt fiches métiers courtes et concrètes, et un autodiagnostic en dix questions, pour que chaque dirigeant de TPE ou de PME sache où agir en premier, avant les autres.",
      en: 'Artificial intelligence will not wait for small businesses to be ready. Some are getting on board now and pulling ahead; others will have the turn forced on them by customers and competitors. Twenty short, practical sheets by trade, and a ten-question self-assessment, so every small business leader knows where to act first (in French).',
    },
    details: {
      fr: ['20 fiches métiers pour savoir où agir avant vos concurrents', 'Un autodiagnostic en dix questions', 'Guide à l’usage des dirigeants', 'ISBN 978-1-0654997-2-5'],
      en: ['20 sheets by trade to know where to act before your competitors', 'A ten-question self-assessment', 'A guide for business leaders (in French)', 'ISBN 978-1-0654997-2-5'],
    },
    isbn: '978-1-0654997-2-5',
    releaseDate: '2026-11-15',
    amazonUrl: { fr: '', en: '' }, // À COMPLÉTER : lien Amazon exact dès la mise en vente
  },
  {
    id: 'les-15-effets-indesirables-du-lean',
    title: 'Les 15 effets indésirables du Lean',
    subtitle: 'Notice à lire attentivement avant toute démarche Lean',
    lang: 'fr',
    cover: '/images/livres/les-15-effets-indesirables-du-lean.webp',
    coverLarge: '/images/livres/les-15-effets-indesirables-du-lean-grand.webp',
    coverSize: { width: 600, height: 850 },
    hook: {
      fr: "Attention : le Lean peut provoquer une sérénité durable. On vous avait promis moins de gaspillages et des délais tenus ; personne ne vous avait lu la notice. Changements de série plus courts que la pause café, président qui pique-nique à même le sol de l'atelier, clients qui fondent un fan-club pour saluer vos livraisons… En quinze fiches illustrées et pleines d'humour, la liste complète des effets indésirables du Lean. À garder près de la machine à café, ou à oublier négligemment sur la table du comité de direction.",
      en: 'Warning: Lean may cause lasting serenity. You were promised less waste and on-time delivery; nobody read you the leaflet. Changeovers shorter than the coffee break, a CEO picnicking on the shop floor, customers founding a fan club to cheer your deliveries… Fifteen illustrated, tongue-in-cheek sheets listing every side effect of Lean (in French). Best left, casually, on the boardroom table.',
    },
    details: {
      fr: ['15 fiches illustrées, une par jour de préférence au gemba', 'Takt time de lecture : 15 minutes', 'ISBN 978-1-0654997-0-1'],
      en: ['15 illustrated sheets, one a day, ideally at the gemba', 'Reading takt time: 15 minutes', 'ISBN 978-1-0654997-0-1'],
    },
    isbn: '978-1-0654997-0-1',
    file: '/downloads/livres/les-15-effets-indesirables-du-lean.pdf',
  },
];

export interface Article {
  id: string;
  title: string; // titre dans la langue de l'article
  subtitle?: string;
  /** Collection et date, dans la langue de l'article. */
  publication?: string;
  lang: 'fr' | 'en';
  series?: Localized;
  file: string;
  thumb?: string;
  hook?: Localized;
  pages?: number;
}

const series = (n: number): Localized => ({ fr: `David, Goliath & l’IA, épisode ${n}/3`, en: `“David, Goliath & l’IA”, episode ${n} of 3` });

export const articles: Article[] = [
  {
    id: 'spirale-attrition-systemique',
    title: 'La spirale d’attrition systémique',
    subtitle: 'Quand les géants apprennent la proximité : comment l’intelligence artificielle menace le dernier avantage des PME',
    publication: 'Cahiers d’excellence opérationnelle n° 1, octobre 2026',
    lang: 'fr',
    file: '/downloads/articles/spirale-attrition-systemique.pdf',
    thumb: '/images/articles/spirale-attrition-systemique.webp',
    pages: 29,
    hook: {
      fr: "Les PME ont toujours perdu la guerre des prix ; elles survivent par la proximité. Or l'IA permet désormais aux géants de simuler cette proximité à grande échelle. En revisitant les révolutions passées (micro-informatique, robotisation, ERP, Internet), Manuel Gourmand montre pourquoi les PME qui attendent glissent dans une spirale d'attrition, par quelles portes on y entre, et la feuille de route Lean AI en cinq étapes qui permet d'en sortir par le haut.",
      en: 'SMEs have always lost the price war; they survive on proximity. AI now lets the giants simulate that proximity at scale. Revisiting past revolutions (PCs, robotisation, ERP, the Internet), Manuel Gourmand shows why SMEs that wait slide into an attrition spiral, which doors lead into it, and the five-step Lean AI roadmap out. French edition of The Systemic Attrition Spiral.',
    },
  },
  {
    id: 'goliath-a-appris-a-sourire',
    title: 'Goliath a appris à sourire',
    publication: 'Lecture : 4 minutes',
    lang: 'fr',
    series: series(1),
    file: '/downloads/articles/episode-1-goliath-a-appris-a-sourire.pdf',
    thumb: '/images/articles/episode-1-goliath-a-appris-a-sourire.webp',
    pages: 2,
    hook: {
      fr: "Les PME craignent que l'IA rende les géants moins chers. C'est le moindre des dangers : elle les rend plus proches de vos clients. L'histoire du plus grand franchisé d'IKEA, qui a fait de 8 500 salariés de centres d'appels des conseillers, et un test en trois questions pour savoir ce que l'IA ne pourra jamais copier chez vous.",
      en: 'SMEs fear AI will make the giants cheaper. That is the lesser danger: it makes them closer to your customers. The story of IKEA’s largest franchisee, which turned 8,500 call-centre staff into advisers, and a three-question test to find what AI will never copy in your business (in French).',
    },
  },
  {
    id: 'les-trois-portes-de-la-spirale',
    title: 'Les trois portes de la spirale',
    publication: 'Lecture : 4 minutes',
    lang: 'fr',
    series: series(2),
    file: '/downloads/articles/episode-2-les-trois-portes-de-la-spirale.pdf',
    thumb: '/images/articles/episode-2-les-trois-portes-de-la-spirale.webp',
    pages: 2,
    hook: {
      fr: "Une PME s'effondre rarement d'un coup : elle glisse. On entre dans la spirale par trois portes : en attendant, en coupant des têtes… ou en achetant un chatbot. D'Air Canada condamnée à cause de son robot à Klarna qui réembauche, la règle d'or pour placer un agent IA au bon endroit, et un exercice à lancer dès lundi.",
      en: 'An SME rarely collapses overnight: it slides. There are three doors into the spiral: waiting, cutting heads… or buying a chatbot. From Air Canada taken to tribunal over its bot to Klarna hiring again, the golden rule for placing an AI agent, and an exercise to start on Monday (in French).',
    },
  },
  {
    id: 'la-fronde-de-david',
    title: 'La fronde de David',
    publication: 'Lecture : 5 minutes',
    lang: 'fr',
    series: series(3),
    file: '/downloads/articles/episode-3-la-fronde-de-david.pdf',
    thumb: '/images/articles/episode-3-la-fronde-de-david.webp',
    pages: 2,
    hook: {
      fr: "La sortie existe, et elle coûte peu en argent : elle coûte en réflexion. La méthode en cinq étapes (écouter, regarder, réparer, viser, rendre) qui permet à une PME de 40 personnes de faire ce qu'a fait IKEA, et comment un coutelier de Thiers peut trouver ses clients jusqu'au Japon.",
      en: 'There is a way out, and it costs little money, only thinking. The five-step method (listen, look, repair, aim, give back) that lets a 40-person SME do what IKEA did, and how a knife-maker from Thiers can find customers as far away as Japan (in French).',
    },
  },
  {
    id: 'the-systemic-attrition-spiral',
    title: 'The Systemic Attrition Spiral',
    subtitle: 'When Scale Learns Proximity: How Artificial Intelligence Threatens the Last Advantage of SMEs, and the Lean AI Response',
    publication: 'Occasional Papers in Operational Excellence, No. 1, October 2026',
    lang: 'en',
    file: '/downloads/articles/the-systemic-attrition-spiral.pdf',
    thumb: '/images/articles/the-systemic-attrition-spiral.webp',
    pages: 25,
    hook: {
      fr: "Les PME ont toujours perdu face aux grands groupes sur l'échelle ; elles survivent par la proximité. L'IA agentique permet désormais aux géants de la simuler à grande échelle. La version originale, en anglais, de « La spirale d'attrition systémique » : le double étau, les trois portes de la spirale, le regard venu de Chine et la feuille de route Lean AI en cinq étapes.",
      en: 'SMEs have always lost to big corporations on scale; they survive on intimacy. Agentic AI now lets the giants simulate that intimacy at scale. Drawing on past technology revolutions, this paper explains the double squeeze, the doors into the attrition spiral, the view from China, and a five-step Lean AI roadmap for SMEs.',
    },
  },
  {
    id: 'make-europe-great-again-economically',
    title: 'Make Europe Great Again, Economically',
    subtitle: 'What a Company Is Really For, and the Lean Case for Being Profitable Today and Tomorrow',
    publication: 'Working Paper No. 25-01, January 2025',
    lang: 'en',
    file: '/downloads/articles/make-europe-great-again-economically.pdf',
    thumb: '/images/articles/make-europe-great-again-economically.webp',
    pages: 8,
    hook: {
      fr: "Demandez à des chefs d'entreprise européens ce qui les freine : impôts, paperasse, salariés qui ne voudraient plus travailler. Demandez-leur à quoi sert leur entreprise : silence. Ce manifeste, nourri de Toyota, Deming, Goldratt et Seddon, bâtit l'excellence opérationnelle comme une maison : la qualité et la capacité pour piliers, des personnes compétentes pour fondations, la pensée systémique pour poutre. L'essentiel ne coûte rien, sauf de l'attention managériale.",
      en: 'Ask European business owners what holds them back and you hear taxes, red tape and people who no longer want to work. Ask what their company is for, and the room goes quiet. Drawing on Toyota, Deming, Goldratt and Seddon, this manifesto builds operational excellence as a house: quality and capacity as pillars, competent people as foundations, systems thinking as the beam. Most of it costs nothing but management attention.',
    },
  },
];

/** Articles dans l'ordre de la langue de la page (sa langue d'abord). */
export function articlesFor(lang: 'fr' | 'en'): Article[] {
  return [...articles.filter((a) => a.lang === lang), ...articles.filter((a) => a.lang !== lang)];
}
