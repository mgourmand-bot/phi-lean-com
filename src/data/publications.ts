import type { Localized } from '@/i18n/utils';
import type { RouteKey, AnchorKey } from '@/i18n/routes';
import type { HouseElementId } from '@/i18n/slugs';

/**
 * PHI-LEAN PRESS : livres et articles.
 * Chaque publication a sa page à partager : /publications/<id>/ et /en/publications/<id>/.
 * PDF dans public/downloads/, vignettes dans public/images/articles/ (340 px et @2x),
 * couvertures dans public/images/livres/, pages d'aperçu dans public/images/apercus/<id>-p<n>.webp,
 * image de partage (LinkedIn…) dans public/og/publications/<id>.png.
 * Les résumés et les points clés sont rédigés à partir du contenu de chaque texte ;
 * les extraits sont cités tels quels.
 */

/** Date de publication : 'AAAA-MM-JJ', 'AAAA-MM' ou 'AAAA'. */
export type PubDate = string;

export interface Related {
  label: Localized;
  route?: RouteKey;
  anchor?: AnchorKey;
  hash?: string | Localized;
  house?: HouseElementId;
  publication?: string;
}

interface PublicationBase {
  id: string;
  title: string; // dans la langue du texte
  subtitle?: string;
  lang: 'fr' | 'en';
  hook?: Localized;
  /** Ce que l'on y trouve (page détail). */
  takeaways: Localized<string[]>;
  audience: Localized;
  /** Extrait cité tel quel, dans la langue du texte. */
  excerpt?: string;
  /** Pages montrées en aperçu (numéros de page du PDF). */
  previews?: number[];
  related?: Related[];
  pages?: number;
  date?: PubDate;
}

export interface Book extends PublicationBase {
  kind: 'book';
  cover?: string;
  coverLarge?: string;
  coverSize?: { width: number; height: number };
  details: Localized<string[]>;
  isbn?: string;
  /** Date de parution (AAAA-MM-JJ). Avant cette date, le livre est annoncé « à paraître ». */
  releaseDate?: string;
  /** Lien Amazon exact ; à défaut, recherche Amazon par ISBN après la parution. */
  amazonUrl?: Localized;
  /** PDF en téléchargement libre (e-book). */
  file?: string;
}

export interface Article extends PublicationBase {
  kind: 'article';
  /** Collection, dans la langue de l'article (la date est affichée à part). */
  publication?: string;
  readingTime?: number; // minutes
  series?: Localized;
  file: string;
  thumb?: string;
}

export type Publication = Book | Article;

export const books: Book[] = [
  {
    kind: 'book',
    id: 'combien-de-jours-tenez-vous',
    title: 'Combien de jours tenez-vous ?',
    subtitle: '30 fiches pour sécuriser la supply chain de votre PME',
    lang: 'fr',
    date: '2026-11',
    pages: 37,
    cover: '/images/livres/combien-de-jours-tenez-vous.webp',
    coverLarge: '/images/livres/combien-de-jours-tenez-vous-grand.webp',
    coverSize: { width: 600, height: 850 },
    hook: {
      fr: 'Le 22 octobre 2026, Londres a demandé à chaque foyer britannique de pouvoir tenir trois jours sans aide. Et votre PME ? Combien de jours sans son premier fournisseur, son serveur ou son premier client ? Trente fiches, une par jour, pour remplacer « je crois » par un nombre de jours : voir, compter, fermer les trous, s’entraîner, durer. Chaque fiche tient sur une page, avec une durée et un responsable. Aucune ne demande de logiciel.',
      en: 'On 22 October 2026, London asked every British household to be able to last three days without help. What about your company? How many days without its first supplier, its server or its biggest customer? Thirty sheets, one a day, to replace “I think” with a number of days: see, count, close the gaps, rehearse, last. Each sheet fits on one page, with a duration and an owner. None needs software (in French).',
    },
    takeaways: {
      fr: [
        'Trente fiches d’une page, une par jour, chacune avec une durée, un responsable et quatre actions concrètes.',
        'Quatre semaines pour voir, compter, fermer les trous et s’entraîner, puis deux fiches pour durer.',
        'Le temps de survie et le temps de rétablissement, la méthode du MIT, calculés sans logiciel.',
        'Des cas vérifiés et sourcés : Genex UK, Octave, OVHcloud, KNP Logistics, Toyota.',
        'À la fin : vos trois trous prioritaires et un plan de continuité qui tient sur une page.',
      ],
      en: [
        'Thirty one-page sheets, one a day, each with a duration, an owner and four concrete actions.',
        'Four weeks to see, count, close the gaps and rehearse, then two sheets to make it last.',
        'Time to survive and time to recover, the MIT method, worked out without software.',
        'Verified, sourced cases: Genex UK, Octave, OVHcloud, KNP Logistics, Toyota.',
        'At the end: your three priority gaps and a continuity plan that fits on one page.',
      ],
    },
    audience: {
      fr: 'Dirigeants de TPE et de PME, avec leur comité de direction, tous secteurs.',
      en: 'Owners and managers of small and mid-sized companies, with their leadership team, in any sector.',
    },
    excerpt: 'Ce livre ne vous demande pas de prévoir le prochain choc. Personne ne le peut. Il vous demande de savoir combien de jours vous tiendrez, puis d’en gagner.',
    previews: [1, 2, 6],
    related: [
      { route: 'scrm', hash: { fr: 'pme', en: 'smes' }, label: { fr: 'Le diagnostic « Combien de jours tenez-vous ? » en deux jours', en: 'The two-day “How many days can you last?” diagnostic' } },
      { publication: 'state-of-the-art-supply-chain-risk-management-2026', label: { fr: 'La version grandes entreprises : le Working Paper 26-04', en: 'The large-company version: Working Paper 26-04' } },
    ],
    details: {
      fr: ['30 fiches, une par jour', 'Aucun logiciel nécessaire', 'ISBN 978-1-0654997-3-2'],
      en: ['30 sheets, one a day', 'No software needed', 'ISBN 978-1-0654997-3-2'],
    },
    isbn: '978-1-0654997-3-2',
    file: '/downloads/livres/combien-de-jours-tenez-vous.pdf',
  },
  {
    kind: 'book',
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
    takeaways: {
      fr: [
        'Vingt fiches métiers, courtes et concrètes : ce que l’IA change déjà, et ce qu’elle va changer, dans votre activité.',
        'Un autodiagnostic en dix questions pour savoir où agir en premier.',
        'Ce qui sépare les entreprises qui s’engagent dès maintenant de celles qui subiront le virage.',
        'Un guide écrit pour les dirigeants, sans jargon technique.',
      ],
      en: [
        'Twenty short, practical sheets by trade: what AI is already changing, and will change, in your business.',
        'A ten-question self-assessment to know where to act first.',
        'What separates the companies getting on board now from those that will have the turn forced on them.',
        'A guide written for business leaders, without technical jargon (in French).',
      ],
    },
    audience: { fr: 'Dirigeants de TPE et de PME, tous secteurs.', en: 'Leaders of small and mid-sized companies, in any sector.' },
    previews: [],
    related: [
      { publication: 'spirale-attrition-systemique', label: { fr: 'L’analyse de fond : « La spirale d’attrition systémique »', en: 'The in-depth analysis: “The Systemic Attrition Spiral”' } },
      { route: 'services', label: { fr: 'Lean Flux Services', en: 'Lean Services Flow' } },
    ],
    details: {
      fr: ['20 fiches métiers pour savoir où agir avant vos concurrents', 'Un autodiagnostic en dix questions', 'Guide à l’usage des dirigeants', 'ISBN 978-1-0654997-2-5'],
      en: ['20 sheets by trade to know where to act before your competitors', 'A ten-question self-assessment', 'A guide for business leaders (in French)', 'ISBN 978-1-0654997-2-5'],
    },
    isbn: '978-1-0654997-2-5',
    releaseDate: '2026-11-15',
    amazonUrl: { fr: '', en: '' }, // À COMPLÉTER : lien Amazon exact dès la mise en vente
  },
  {
    kind: 'book',
    id: 'les-15-effets-indesirables-du-lean',
    title: 'Les 15 effets indésirables du Lean',
    subtitle: 'Notice à lire attentivement avant toute démarche Lean',
    lang: 'fr',
    date: '2026',
    pages: 17,
    cover: '/images/livres/les-15-effets-indesirables-du-lean.webp',
    coverLarge: '/images/livres/les-15-effets-indesirables-du-lean-grand.webp',
    coverSize: { width: 600, height: 850 },
    hook: {
      fr: "Attention : le Lean peut provoquer une sérénité durable. On vous avait promis moins de gaspillages et des délais tenus ; personne ne vous avait lu la notice. Changements de série plus courts que la pause café, président qui pique-nique à même le sol de l'atelier, clients qui fondent un fan-club pour saluer vos livraisons… En quinze fiches illustrées et pleines d'humour, la liste complète des effets indésirables du Lean. À garder près de la machine à café, ou à oublier négligemment sur la table du comité de direction.",
      en: 'Warning: Lean may cause lasting serenity. You were promised less waste and on-time delivery; nobody read you the leaflet. Changeovers shorter than the coffee break, a CEO picnicking on the shop floor, customers founding a fan club to cheer your deliveries… Fifteen illustrated, tongue-in-cheek sheets listing every side effect of Lean (in French). Best left, casually, on the boardroom table.',
    },
    takeaways: {
      fr: [
        'Quinze « effets indésirables » du Lean, présentés comme une notice de médicament, un par fiche illustrée.',
        'Derrière l’humour, les résultats d’une démarche bien menée : changements de série raccourcis, flux qui s’accélère, équipes qui s’impliquent.',
        'Un support pour lancer la discussion en comité de direction, ou à l’atelier.',
        'Takt time de lecture : 15 minutes.',
      ],
      en: [
        'Fifteen Lean “side effects”, presented like a medicine leaflet, one per illustrated sheet.',
        'Behind the humour, the results of a well-run programme: shorter changeovers, faster flow, engaged teams.',
        'A conversation starter for the leadership team, or the shop floor.',
        'Reading takt time: 15 minutes (in French).',
      ],
    },
    audience: {
      fr: 'Dirigeants, managers et équipes qui hésitent à se lancer, ou qui veulent sourire de ce qu’ils ont déjà accompli.',
      en: 'Leaders, managers and teams who hesitate to start, or want to smile at what they have already achieved.',
    },
    excerpt: 'Attention : le Lean peut provoquer une sérénité durable.',
    previews: [1, 2, 4],
    related: [
      { route: 'consulting', anchor: 'usine', label: { fr: 'Lean Flux Usine', en: 'Lean Plant Flow' } },
      { house: 'socle', label: { fr: 'Le socle de la maison : des équipes épanouies et compétentes', en: 'The foundation of the house: fulfilled and competent teams' } },
    ],
    details: {
      fr: ['15 fiches illustrées, une par jour de préférence au gemba', 'Takt time de lecture : 15 minutes', 'ISBN 978-1-0654997-0-1'],
      en: ['15 illustrated sheets, one a day, ideally at the gemba', 'Reading takt time: 15 minutes', 'ISBN 978-1-0654997-0-1'],
    },
    isbn: '978-1-0654997-0-1',
    file: '/downloads/livres/les-15-effets-indesirables-du-lean.pdf',
  },
];

const series = (n: number): Localized => ({ fr: `David, Goliath & l’IA, épisode ${n}/3`, en: `“David, Goliath & l’IA”, episode ${n} of 3` });

export const articles: Article[] = [
  {
    kind: 'article',
    id: 'state-of-the-art-supply-chain-risk-management-2026',
    title: 'The State of the Art in Supply Chain Risk Management 2026',
    subtitle: 'How Large Corporations Catch Up: A Step-by-Step Action Plan and a Self-Audit',
    publication: 'Working Paper No. 26-04',
    date: '2026-11',
    lang: 'en',
    file: '/downloads/articles/state-of-the-art-supply-chain-risk-management-2026.pdf',
    thumb: '/images/articles/state-of-the-art-supply-chain-risk-management-2026.webp',
    pages: 13,
    hook: {
      fr: 'Fin octobre 2026, les Britanniques ont vidé les rayons de conserves et de lampes torches parce que leur gouvernement leur demandait de tenir trois jours seuls. Ormuz et Suez perdus la même semaine, Jaguar Land Rover à l’arrêt après une cyberattaque, le Rhin à 31 centimètres à Kaub : la plupart des comités de direction gèrent pourtant encore le risque avec une « Value at Risk » construite une fois et classée. Ce que l’état de l’art fait autrement, et un plan à 90 jours pour rattraper le retard.',
      en: 'In the last week of October 2026, British shoppers sent sales of tinned food and torches soaring because their government had asked them to last three days alone. Hormuz and Suez lost in the same week, Jaguar Land Rover idled by a cyber attack, the Rhine at 31 centimetres at Kaub: yet most boards still manage supply chain risk with a Value at Risk built once and filed. What the state of the art does differently, and a ninety-day plan to catch up.',
    },
    takeaways: {
      fr: [
        'Dix ans et un été : comment 2025 et 2026 ont transformé des risques connus en conditions d’exploitation.',
        'Pourquoi une Value at Risk figée mesure le passé : l’arithmétique, la vue limitée au rang 1, le calendrier.',
        'Le temps de survie et le temps de rétablissement (MIT), et pourquoi le Lean n’est pas l’accusé.',
        'Six pratiques qui tiennent, et une auto-évaluation en douze questions pour le comité de direction.',
        'Un plan de rattrapage en 90 jours et huit étapes, sans logiciel avant la huitième semaine.',
      ],
      en: [
        'Ten years and one summer: how 2025 and 2026 turned known risks into operating conditions.',
        'Why a frozen Value at Risk measures the past: the arithmetic, the tier-one eyesight, the calendar.',
        'Time to survive and time to recover (MIT), and why Lean is not the defendant.',
        'Six practices that hold, and a twelve-question self-audit for the board.',
        'A ninety-day, eight-step catch-up plan, with no software before week eight.',
      ],
    },
    audience: {
      fr: 'Directions générales, directions supply chain, achats et risques des ETI et des grands groupes.',
      en: 'Executive committees, supply chain, purchasing and risk leaders in mid-caps and large groups.',
    },
    excerpt: 'A frozen assessment measures the past.',
    previews: [1, 4, 7],
    related: [
      { route: 'scrm', hash: { fr: 'grands-comptes', en: 'large-companies' }, label: { fr: 'Lean Supply Chain Risk Management : l’offre grands groupes', en: 'Lean Supply Chain Risk Management: the large-group offer' } },
      { publication: 'combien-de-jours-tenez-vous', label: { fr: 'La version PME : l’e-book « Combien de jours tenez-vous ? »', en: 'The SME version: the e-book “Combien de jours tenez-vous ?”' } },
    ],
  },
  {
    kind: 'article',
    id: 'spirale-attrition-systemique',
    title: 'La spirale d’attrition systémique',
    subtitle: 'Quand les géants apprennent la proximité : comment l’intelligence artificielle menace le dernier avantage des PME',
    publication: 'Cahiers d’excellence opérationnelle n° 1',
    date: '2026-10',
    lang: 'fr',
    file: '/downloads/articles/spirale-attrition-systemique.pdf',
    thumb: '/images/articles/spirale-attrition-systemique.webp',
    pages: 29,
    hook: {
      fr: "Les PME ont toujours perdu la guerre des prix ; elles survivent par la proximité. Or l'IA permet désormais aux géants de simuler cette proximité à grande échelle. En revisitant les révolutions passées (micro-informatique, robotisation, ERP, Internet), Manuel Gourmand montre pourquoi les PME qui attendent glissent dans une spirale d'attrition, par quelles portes on y entre, et la feuille de route Lean AI en cinq étapes qui permet d'en sortir par le haut.",
      en: 'SMEs have always lost the price war; they survive on proximity. AI now lets the giants simulate that proximity at scale. Revisiting past revolutions (PCs, robotisation, ERP, the Internet), Manuel Gourmand shows why SMEs that wait slide into an attrition spiral, which doors lead into it, and the five-step Lean AI roadmap out. French edition of The Systemic Attrition Spiral.',
    },
    takeaways: {
      fr: [
        'Pourquoi la menace de l’IA pour les PME est la proximité, pas le coût.',
        'Le double étau, et ce que l’IA peut copier, ou non, de votre relation client.',
        'La troisième porte : l’IA qui fabrique de la demande de défaillance.',
        'Le prix de l’attente, et le regard venu de Chine.',
        'La feuille de route Lean AI en cinq étapes, et ce que l’on fait des personnes libérées.',
      ],
      en: [
        'Why the AI threat to SMEs is proximity, not cost.',
        'The double squeeze, and what AI can and cannot copy of your customer relationships.',
        'The third door: AI that manufactures failure demand.',
        'The cost of waiting, and the view from China.',
        'The five-step Lean AI roadmap, and what to do with the people it frees up (in French).',
      ],
    },
    audience: { fr: 'Dirigeants de PME et d’ETI, tous secteurs, et ceux qui les conseillent.', en: 'Leaders of SMEs and mid-caps in any sector, and their advisers.' },
    excerpt: 'Le logiciel ne coûte presque rien. La discipline nécessaire pour bien le mettre en œuvre, elle, est ce qui coûte : pas en argent, mais en réflexion.',
    previews: [1, 2, 3],
    related: [
      { publication: 'the-systemic-attrition-spiral', label: { fr: 'La version originale, en anglais', en: 'The original English version' } },
      { route: 'services', label: { fr: 'Lean Flux Services', en: 'Lean Services Flow' } },
    ],
  },
  {
    kind: 'article',
    id: 'goliath-a-appris-a-sourire',
    title: 'Goliath a appris à sourire',
    lang: 'fr',
    series: series(1),
    date: '2026',
    readingTime: 4,
    file: '/downloads/articles/episode-1-goliath-a-appris-a-sourire.pdf',
    thumb: '/images/articles/episode-1-goliath-a-appris-a-sourire.webp',
    pages: 2,
    hook: {
      fr: "Les PME craignent que l'IA rende les géants moins chers. C'est le moindre des dangers : elle les rend plus proches de vos clients. L'histoire du plus grand franchisé d'IKEA, qui a fait de 8 500 salariés de centres d'appels des conseillers, et un test en trois questions pour savoir ce que l'IA ne pourra jamais copier chez vous.",
      en: 'SMEs fear AI will make the giants cheaper. That is the lesser danger: it makes them closer to your customers. The story of IKEA’s largest franchisee, which turned 8,500 call-centre staff into advisers, and a three-question test to find what AI will never copy in your business (in French).',
    },
    takeaways: {
      fr: [
        'Pourquoi l’IA rend les géants plus proches de vos clients, et pas seulement moins chers.',
        'Le cas Ingka (IKEA) : un assistant virtuel qui traite près d’une demande sur deux, et 8 500 salariés de centres d’appels devenus conseillers.',
        'L’étau à deux mâchoires : le prix et la proximité.',
        'Un test en trois questions pour savoir ce que l’IA ne pourra pas copier chez vous.',
      ],
      en: [
        'Why AI makes the giants closer to your customers, not just cheaper.',
        'The Ingka (IKEA) case: a virtual assistant handling almost one request in two, and 8,500 call-centre staff turned advisers.',
        'The two-jawed vice: price and proximity.',
        'A three-question test to find what AI cannot copy in your business (in French).',
      ],
    },
    audience: { fr: 'Dirigeants de PME, commerçants, artisans et professions de service.', en: 'Small business owners, retailers, craftspeople and service professionals.' },
    excerpt: 'Les PME craignent que l’IA rende les géants moins chers. C’est le moindre des dangers. Le vrai : elle les rend plus proches de vos clients.',
    previews: [1],
    related: [
      { publication: 'les-trois-portes-de-la-spirale', label: { fr: 'Épisode 2 : Les trois portes de la spirale', en: 'Episode 2: Les trois portes de la spirale' } },
    ],
  },
  {
    kind: 'article',
    id: 'les-trois-portes-de-la-spirale',
    title: 'Les trois portes de la spirale',
    lang: 'fr',
    series: series(2),
    date: '2026',
    readingTime: 4,
    file: '/downloads/articles/episode-2-les-trois-portes-de-la-spirale.pdf',
    thumb: '/images/articles/episode-2-les-trois-portes-de-la-spirale.webp',
    pages: 2,
    hook: {
      fr: "Une PME s'effondre rarement d'un coup : elle glisse. On entre dans la spirale par trois portes : en attendant, en coupant des têtes… ou en achetant un chatbot. D'Air Canada condamnée à cause de son robot à Klarna qui réembauche, la règle d'or pour placer un agent IA au bon endroit, et un exercice à lancer dès lundi.",
      en: 'An SME rarely collapses overnight: it slides. There are three doors into the spiral: waiting, cutting heads… or buying a chatbot. From Air Canada taken to tribunal over its bot to Klarna hiring again, the golden rule for placing an AI agent, and an exercise to start on Monday (in French).',
    },
    takeaways: {
      fr: [
        'La spirale d’attrition en six marches, de « on verra dans deux ans » à la vente à la casse.',
        'Les trois portes : attendre, couper des têtes, acheter un chatbot.',
        'Air Canada devant le tribunal, et la demande de défaillance selon Seddon : 80 % sur 1 200 appels.',
        'La règle d’or pour placer un agent IA au bon endroit, et un exercice à lancer lundi.',
      ],
      en: [
        'The attrition spiral in six steps, from “let’s see in two years” to a fire sale.',
        'The three doors: waiting, cutting heads, buying a chatbot.',
        'Air Canada before the tribunal, and Seddon’s failure demand: 80% of 1,200 calls.',
        'The golden rule for placing an AI agent, and an exercise to start on Monday (in French).',
      ],
    },
    audience: { fr: 'Dirigeants de PME qui envisagent l’IA, ou qui l’ont déjà installée.', en: 'SME leaders considering AI, or who have already installed it.' },
    excerpt: 'Une PME s’effondre rarement d’un coup. Elle glisse.',
    previews: [1],
    related: [
      { publication: 'la-fronde-de-david', label: { fr: 'Épisode 3 : La fronde de David', en: 'Episode 3: La fronde de David' } },
      { house: 'methode', label: { fr: 'Systems Thinking, la poutre de la maison', en: 'Systems Thinking, the beam of the house' } },
    ],
  },
  {
    kind: 'article',
    id: 'la-fronde-de-david',
    title: 'La fronde de David',
    lang: 'fr',
    series: series(3),
    date: '2026',
    readingTime: 5,
    file: '/downloads/articles/episode-3-la-fronde-de-david.pdf',
    thumb: '/images/articles/episode-3-la-fronde-de-david.webp',
    pages: 2,
    hook: {
      fr: "La sortie existe, et elle coûte peu en argent : elle coûte en réflexion. La méthode en cinq étapes (écouter, regarder, réparer, viser, rendre) qui permet à une PME de 40 personnes de faire ce qu'a fait IKEA, et comment un coutelier de Thiers peut trouver ses clients jusqu'au Japon.",
      en: 'There is a way out, and it costs little money, only thinking. The five-step method (listen, look, repair, aim, give back) that lets a 40-person SME do what IKEA did, and how a knife-maker from Thiers can find customers as far away as Japan (in French).',
    },
    takeaways: {
      fr: [
        'Le vrai obstacle n’est pas l’argent : en 2025, 55 % des grandes entreprises européennes utilisaient l’IA, contre 17 % des petites.',
        'La méthode en cinq étapes : écouter, regarder, réparer, viser, rendre.',
        'Le cas d’un cuisiniste de 40 personnes face aux conseillers à distance d’IKEA.',
        'Comment un coutelier de Thiers peut trouver ses clients jusqu’au Japon.',
      ],
      en: [
        'The real obstacle is not money: in 2025, 55% of large European companies used AI, against 17% of small ones.',
        'The five-step method: listen, look, repair, aim, give back.',
        'The case of a 40-person kitchen retailer facing IKEA’s remote advisers.',
        'How a knife-maker from Thiers can find customers as far away as Japan (in French).',
      ],
    },
    audience: { fr: 'Dirigeants de PME qui veulent passer à l’action, un flux à la fois.', en: 'SME leaders who want to act, one flow at a time.' },
    excerpt: 'L’outil ne coûte presque rien. Ce qui coûte, c’est la discipline pour bien s’en servir.',
    previews: [1],
    related: [
      { publication: 'spirale-attrition-systemique', label: { fr: 'L’analyse complète : « La spirale d’attrition systémique »', en: 'The full analysis: “La spirale d’attrition systémique”' } },
      { route: 'consulting', anchor: 'vsmExpress', label: { fr: 'Le Diagnostic VSM Express', en: 'The VSM Express Diagnostic' } },
    ],
  },
  {
    kind: 'article',
    id: 'the-systemic-attrition-spiral',
    title: 'The Systemic Attrition Spiral',
    subtitle: 'When Scale Learns Proximity: How Artificial Intelligence Threatens the Last Advantage of SMEs, and the Lean AI Response',
    publication: 'Occasional Papers in Operational Excellence, No. 1',
    date: '2026-10',
    lang: 'en',
    file: '/downloads/articles/the-systemic-attrition-spiral.pdf',
    thumb: '/images/articles/the-systemic-attrition-spiral.webp',
    pages: 25,
    hook: {
      fr: "Les PME ont toujours perdu face aux grands groupes sur l'échelle ; elles survivent par la proximité. L'IA agentique permet désormais aux géants de la simuler à grande échelle. La version originale, en anglais, de « La spirale d'attrition systémique » : le double étau, les trois portes de la spirale, le regard venu de Chine et la feuille de route Lean AI en cinq étapes.",
      en: 'SMEs have always lost to big corporations on scale; they survive on intimacy. Agentic AI now lets the giants simulate that intimacy at scale. Drawing on past technology revolutions, this paper explains the double squeeze, the doors into the attrition spiral, the view from China, and a five-step Lean AI roadmap for SMEs.',
    },
    takeaways: {
      fr: [
        'Pourquoi la menace est la proximité, pas le coût.',
        'Le double étau, et ce que l’IA peut ou ne peut pas copier.',
        'La troisième porte : l’IA qui fabrique de la demande de défaillance.',
        'Le prix de l’attente, et le regard venu de Chine.',
        'La feuille de route Lean AI en cinq étapes (en anglais).',
      ],
      en: [
        'Why the threat is proximity, not cost.',
        'The double squeeze, and what AI can and cannot copy.',
        'The third door: AI that manufactures failure demand.',
        'The cost of waiting, and the view from China.',
        'The five-step Lean AI roadmap, and what to do with the people.',
      ],
    },
    audience: { fr: 'Dirigeants de PME et d’ETI, tous secteurs, et leurs conseils.', en: 'Leaders of SMEs and mid-caps in any sector, and their advisers.' },
    previews: [1, 2, 3],
    related: [
      { publication: 'spirale-attrition-systemique', label: { fr: 'La version française', en: 'The French edition' } },
      { route: 'services', label: { fr: 'Lean Flux Services', en: 'Lean Services Flow' } },
    ],
  },
  {
    kind: 'article',
    id: 'make-europe-great-again-economically',
    title: 'Make Europe Great Again, Economically',
    subtitle: 'What a Company Is Really For, and the Lean Case for Being Profitable Today and Tomorrow',
    publication: 'Working Paper No. 25-01',
    date: '2025-01',
    lang: 'en',
    file: '/downloads/articles/make-europe-great-again-economically.pdf',
    thumb: '/images/articles/make-europe-great-again-economically.webp',
    pages: 8,
    hook: {
      fr: "Demandez à des chefs d'entreprise européens ce qui les freine : impôts, paperasse, salariés qui ne voudraient plus travailler. Demandez-leur à quoi sert leur entreprise : silence. Ce manifeste, nourri de Toyota, Deming, Goldratt et Seddon, bâtit l'excellence opérationnelle comme une maison : la qualité et la capacité pour piliers, des personnes compétentes pour fondations, la pensée systémique pour poutre. L'essentiel ne coûte rien, sauf de l'attention managériale.",
      en: 'Ask European business owners what holds them back and you hear taxes, red tape and people who no longer want to work. Ask what their company is for, and the room goes quiet. Drawing on Toyota, Deming, Goldratt and Seddon, this manifesto builds operational excellence as a house: quality and capacity as pillars, competent people as foundations, systems thinking as the beam. Most of it costs nothing but management attention.',
    },
    takeaways: {
      fr: [
        'Pourquoi la question « à quoi sert votre entreprise ? » décide de tout le reste.',
        'Comment une entreprise gagne de l’argent, et comment elle cesse d’en gagner.',
        'La maison Phi-Lean : la qualité d’abord, la capacité sans capital, des personnes épanouies et compétentes, la pensée systémique.',
        'Recommencer : ce qu’un dirigeant peut faire dès lundi (en anglais).',
      ],
      en: [
        'Why the question “what is your company for?” decides everything else.',
        'How a company makes money, and how it stops.',
        'The Phi-Lean house: quality first, capacity without capital, fulfilled and competent people, systems thinking.',
        'Start again: what a leader can do on Monday.',
      ],
    },
    audience: { fr: 'Dirigeants et comités de direction, en Europe et au-delà.', en: 'Business leaders and leadership teams, in Europe and beyond.' },
    excerpt: 'The second question decides the first. A company’s ultimate goal is a higher purpose that its people can see from the shop floor.',
    previews: [1, 2, 5],
    related: [
      { route: 'house', label: { fr: 'La maison Phi-Lean, élément par élément', en: 'The Phi-Lean house, part by part' } },
    ],
  },
];

/** Articles dans l'ordre de la langue de la page (sa langue d'abord). */
export function articlesFor(lang: 'fr' | 'en'): Article[] {
  return [...articles.filter((a) => a.lang === lang), ...articles.filter((a) => a.lang !== lang)];
}

export const publications: Publication[] = [...books, ...articles];

export function getPublication(id: string): Publication {
  const p = publications.find((x) => x.id === id);
  if (!p) throw new Error(`Publication inconnue : ${id}`);
  return p;
}

/** Date lisible : « Novembre 2026 », « 15 novembre 2026 », « 2026 ». */
export function formatPubDate(date: PubDate | undefined, lang: 'fr' | 'en'): string {
  if (!date) return '';
  const [y, m, d] = date.split('-').map(Number);
  if (!m) return String(y);
  const dt = new Date(Date.UTC(y, m - 1, d || 1, 12));
  const s = dt.toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-GB', d ? { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' } : { month: 'long', year: 'numeric', timeZone: 'UTC' });
  return s.charAt(0).toUpperCase() + s.slice(1);
}
