import type { Localized } from '@/i18n/utils';
import type { StripeProduct } from '@/config/site';

/**
 * Serious Games.
 * Prix : Beer Game kit 690 € HT (12 joueurs maximum, sans plateau),
 * Lean Café kit 590 € HT (sans machine à café ni bouilloires),
 * Print & Play 89 € pour chacun des deux jeux.
 */

export type GameOptionKind = 'animation' | 'kit' | 'printplay';

export interface GameOption {
  kind: GameOptionKind;
  price: number | null; // null = sur devis
  priceNote: Localized;
  includes: Localized<string[]>;
  /** Ce qui n'est PAS fourni (affiché à part, en évidence). */
  excludes?: Localized<string[]>;
  stripe?: StripeProduct;
}

export interface Photo {
  src: string; // version 1600 px ; la version 800 px porte le suffixe -800
  width: number;
  height: number;
  alt: Localized;
}

export interface Game {
  id: 'beer-game' | 'lean-cafe' | 'codir-crise' | 'disc-joker';
  name: Localized;
  topic: Localized;
  pitch: Localized;
  formats: Localized<string[]>;
  duration?: Localized;
  /** Déroulé, quand il aide à se projeter. */
  happens?: Localized<{ title: string; text: string }[]>;
  lessons: Localized<string[]>;
  photos?: Photo[];
  options: GameOption[];
}

export const optionLabels: Record<GameOptionKind, Localized> = {
  animation: { fr: 'Animation par Phi-Lean', en: 'Facilitated by Phi-Lean' },
  kit: { fr: 'Kit physique', en: 'Physical kit' },
  printplay: { fr: 'Print & Play', en: 'Print & Play' },
};

export const photos: Record<string, Photo> = {
  leanCafeHall: {
    src: '/images/sessions/lean-cafe-hall.webp', width: 1600, height: 1200,
    alt: { fr: 'The Lean Café installé dans le hall d’entrée : comptoir, gobelets et file d’attente tracée au sol.', en: 'The Lean Café set up in the entrance hall: counter, cups and a queue line taped on the floor.' },
  },
  boulangerie: {
    src: '/images/sessions/boulangerie-supply-chain-lab.webp', width: 1536, height: 2048,
    alt: { fr: 'Le stand boulangerie, pendant le jeu.', en: 'The bakery stand, during the game.' },
  },
  debriefing: {
    src: '/images/sessions/debriefing.webp', width: 1600, height: 1200,
    alt: { fr: 'Le débriefing : relier ce qui s’est passé dans le jeu à la réalité de l’entreprise.', en: 'The debrief: linking what happened in the game to the reality of the company.' },
  },
  equipes: {
    src: '/images/sessions/equipes-chapeaux.webp', width: 1536, height: 2048,
    alt: { fr: 'Mise en situation, en équipes.', en: 'Hands-on role play, in teams.' },
  },
  promotion: {
    src: '/images/sessions/promotion.webp', width: 1600, height: 1200,
    alt: { fr: 'Fin de session, en école.', en: 'End of a session at a school.' },
  },
};

export const games: Game[] = [
  {
    id: 'beer-game',
    name: { fr: 'The Beer Game', en: 'The Beer Game' },
    topic: { fr: 'Supply chain et effet coup de fouet', en: 'Supply chain and the bullwhip effect' },
    pitch: {
      fr: "Quatre maillons d'une chaîne logistique, une seule bière, aucune communication entre les tables. Semaine après semaine, chacun passe commande à son fournisseur… et découvre comment une petite variation de la demande client devient une tempête de stocks et de ruptures en remontant la chaîne.",
      en: 'Four links in a supply chain, one beer, no talking between tables. Week after week, everyone orders from their supplier… and discovers how a small change in customer demand becomes a storm of inventory and stock-outs as it moves upstream.',
    },
    formats: { fr: ['5 à 12 participants', '25 à 35 participants, en grand groupe'], en: ['5 to 12 participants', '25 to 35 participants, as a large group'] },
    duration: { fr: '3 heures avec le débriefing', en: '3 hours including debrief' },
    lessons: {
      fr: ['Comprendre l’effet coup de fouet par l’expérience', 'Mesurer le coût des stocks et des ruptures', 'Partager l’information pour stabiliser la chaîne'],
      en: ['Understand the bullwhip effect first-hand', 'Measure the cost of inventory and stock-outs', 'Share information to stabilise the chain'],
    },
    options: [
      {
        kind: 'animation',
        price: null,
        priceNote: { fr: 'Sur site, pour 5 à 12 ou 25 à 35 participants', en: 'On site, for 5 to 12 or 25 to 35 participants' },
        includes: {
          fr: ['Animateur Phi-Lean et matériel fournis', 'Débriefing avec vos propres données', 'Synthèse écrite des enseignements'],
          en: ['Phi-Lean facilitator and materials', 'Debrief using your own data', 'Written summary of the lessons'],
        },
      },
      {
        kind: 'kit',
        price: 690,
        priceNote: { fr: 'HT, livraison en France métropolitaine incluse', en: 'excl. VAT, delivery to mainland France included' },
        includes: {
          fr: ['Jetons et cartes pour 12 joueurs maximum', 'Guide d’animation pas à pas', 'Tableur de débriefing automatique'],
          en: ['Tokens and cards for up to 12 players', 'Step-by-step facilitator guide', 'Automated debrief spreadsheet'],
        },
        excludes: { fr: ['Plateau de jeu non inclus'], en: ['Game board not included'] },
        stripe: 'beerGameKit',
      },
      {
        kind: 'printplay',
        price: 89,
        priceNote: { fr: 'TTC, téléchargement immédiat', en: 'incl. VAT, instant download' },
        includes: {
          fr: ['Fichiers PDF à imprimer', 'Guide d’animation', 'Tableur de débriefing'],
          en: ['Printable PDF files', 'Facilitator guide', 'Debrief spreadsheet'],
        },
        stripe: 'beerGamePrintPlay',
      },
    ],
  },
  {
    id: 'lean-cafe',
    name: { fr: 'The Lean Café', en: 'The Lean Café' },
    topic: { fr: 'Flux tiré et Lean en service, grandeur nature', en: 'Pull flow and Lean in services, for real' },
    pitch: {
      fr: "Le jeu consiste à monter et faire tourner un véritable café dans le hall d'entrée de votre entreprise. Vos collègues sont les clients, les commandes sont réelles, l'attente aussi. Au fil des services, l'équipe passe d'une production poussée à un flux tiré, et voit le temps d'attente fondre sans travailler plus vite.",
      en: "The game is about setting up and running a real café in your company's entrance hall. Your colleagues are the customers, the orders are real, and so is the wait. Service after service, the team moves from push to pull and watches waiting time melt away without anyone working faster.",
    },
    formats: { fr: ['3 à 16 participants, et tous les clients de passage'], en: ['3 to 16 participants, plus every customer passing by'] },
    happens: {
      fr: [
        { title: 'On installe le café', text: "L'équipe monte le comptoir, la boulangerie et la caisse dans le hall, se répartit les postes et ouvre le service." },
        { title: 'Premier service, en flux poussé', text: 'On prépare à l’avance pour aller vite : les gobelets s’accumulent, les commandes se mélangent, la file s’allonge.' },
        { title: 'On mesure, on analyse', text: 'Temps d’attente, erreurs, invendus : les chiffres du service sont posés sur la table, et l’équipe redessine son flux.' },
        { title: 'Service suivant, en flux tiré', text: 'On ne prépare que ce qui est commandé, au rythme du client. L’attente fond, sans que personne ne travaille plus vite.' },
      ],
      en: [
        { title: 'Set up the café', text: 'The team builds the counter, the bakery and the till in the hall, shares out the roles and opens for service.' },
        { title: 'First service, push flow', text: 'Everything is prepared in advance to go fast: cups pile up, orders get mixed up, the queue grows.' },
        { title: 'Measure and analyse', text: 'Waiting time, mistakes, unsold items: the figures go on the table and the team redesigns its flow.' },
        { title: 'Next service, pull flow', text: 'Only what is ordered gets made, at the customer’s pace. Waiting melts away without anyone working faster.' },
      ],
    },
    lessons: {
      fr: ['Voir l’effet des lots et des en-cours sur le délai', 'Équilibrer les postes au rythme du client', 'Construire un standard de travail en équipe', 'Faire vivre le Lean devant toute l’entreprise, pas seulement en salle'],
      en: ['See how batches and WIP drive lead time', 'Balance stations to the customer’s pace', 'Build standard work as a team', 'Bring Lean to life in front of the whole company, not just in a training room'],
    },
    photos: [photos.leanCafeHall, photos.boulangerie],
    options: [
      {
        kind: 'animation',
        price: null,
        priceNote: { fr: 'Installé dans votre hall, avec l’animateur Phi-Lean', en: 'Set up in your entrance hall, with a Phi-Lean facilitator' },
        includes: {
          fr: ['Animateur Phi-Lean et matériel de jeu', 'Transposition à vos propres processus', 'Synthèse écrite des enseignements'],
          en: ['Phi-Lean facilitator and game materials', 'Mapping to your own processes', 'Written summary of the lessons'],
        },
      },
      {
        kind: 'kit',
        price: 590,
        priceNote: { fr: 'HT, livraison en France métropolitaine incluse', en: 'excl. VAT, delivery to mainland France included' },
        includes: {
          fr: ['Gobelets et cartes commandes', 'Chronomètres et fiches de mesure', 'Guide d’animation pas à pas'],
          en: ['Cups and order cards', 'Timers and measurement sheets', 'Step-by-step facilitator guide'],
        },
        excludes: { fr: ['Machine à café et bouilloires non incluses'], en: ['Coffee machine and kettles not included'] },
        stripe: 'leanCafeKit',
      },
      {
        kind: 'printplay',
        price: 89,
        priceNote: { fr: 'TTC, téléchargement immédiat', en: 'incl. VAT, instant download' },
        includes: {
          fr: ['Fichiers PDF à imprimer', 'Guide d’animation', 'Fiches de mesure'],
          en: ['Printable PDF files', 'Facilitator guide', 'Measurement sheets'],
        },
        stripe: 'leanCafePrintPlay',
      },
    ],
  },
  {
    id: 'codir-crise',
    name: { fr: 'CODIR : gestion de crise', en: 'Leadership team crisis game' },
    topic: { fr: 'Jeu de rôle pour comités de direction', en: 'Role play for leadership teams' },
    pitch: {
      fr: "Une carte « Crise » est piochée : accident, pollution, incendie, mouvement social… Le comité de direction doit réagir. Ce jeu de rôle entraîne les dirigeants à raisonner dans le calme, à distinguer la gestion de l'urgence de la pensée stratégique, et à garder la main avant que la presse ne s'en mêle.",
      en: 'A “Crisis” card is drawn: an accident, a pollution event, a fire, a strike… The leadership team has to respond. This role play trains executives to think calmly, to tell urgent firefighting from strategic thinking, and to stay in control before the press gets involved.',
    },
    formats: { fr: ['Pour un comité de direction'], en: ['For a leadership team'] },
    lessons: {
      fr: ['Raisonner dans le calme, sous pression', 'Distinguer l’urgence de la décision stratégique', 'Répartir les rôles au sein du comité de direction', 'Préparer la communication avant que la presse ne s’en mêle'],
      en: ['Think calmly under pressure', 'Tell urgent firefighting from strategic decisions', 'Share out roles within the leadership team', 'Prepare communication before the press gets involved'],
    },
    options: [
      {
        kind: 'animation',
        price: null,
        priceNote: { fr: 'Sur site, en séminaire de direction', en: 'On site, at a leadership off-site' },
        includes: {
          fr: ['Scénarios de crise adaptés à votre activité', 'Animation et débriefing par Phi-Lean', 'Synthèse des réflexes à installer'],
          en: ['Crisis scenarios tailored to your business', 'Facilitation and debrief by Phi-Lean', 'Summary of the reflexes to put in place'],
        },
      },
    ],
  },
  {
    id: 'disc-joker',
    name: { fr: 'Le DISC-Joker', en: 'The DISC-Joker' },
    topic: { fr: 'Communication et influence avec le modèle DISC', en: 'Communication and influence with the DISC model' },
    pitch: {
      fr: 'Un jeu de rôles fait de mises en situation pour comprendre ses propres réactions et celles des autres selon les quatre couleurs du modèle DISC, et apprendre à influencer en s’adaptant à son interlocuteur.',
      en: 'A role-play game built on real-life situations, to understand your own reactions and those of others through the four DISC colours, and learn to influence by adapting to the person in front of you.',
    },
    formats: { fr: ['5 à 12 participants'], en: ['5 to 12 participants'] },
    lessons: {
      fr: ['Reconnaître les quatre profils DISC en situation', 'Adapter son message à son interlocuteur', 'Désamorcer les tensions dans une équipe'],
      en: ['Recognise the four DISC profiles in action', 'Adapt your message to the person in front of you', 'Defuse tension within a team'],
    },
    options: [
      {
        kind: 'animation',
        price: null,
        priceNote: { fr: 'Sur site, pour une équipe ou un groupe de managers', en: 'On site, for a team or a group of managers' },
        includes: {
          fr: ['Mises en situation adaptées à votre contexte', 'Animation et débriefing par Phi-Lean', 'Synthèse écrite pour chaque participant'],
          en: ['Role plays tailored to your context', 'Facilitation and debrief by Phi-Lean', 'Written summary for each participant'],
        },
      },
    ],
  },
];

/**
 * Vidéo de la page Serious Games.
 * - linkedinEmbed : URL d'intégration LinkedIn, du type
 *   https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:1234567890
 *   (menu « … » du post, « Intégrer ce post », copier l'adresse du src).
 * - mp4 : fichier déposé dans public/videos/ (prioritaire s'il est renseigné).
 * Tant que les deux sont vides, le bloc vidéo n'apparaît pas.
 */
export const gamesVideo = {
  linkedinEmbed: '',
  // Vidéo « Boulangerie » (1 min 46), réencodée pour le web : 720 x 720, environ 12 Mo
  mp4: '/videos/the-lean-cafe-boulangerie.mp4',
  width: 720,
  height: 720,
  poster: '/images/sessions/video-boulangerie-poster.webp',
  title: { fr: 'The Lean Café en vidéo : la boulangerie et le café, du ticket à la caisse', en: 'The Lean Café on video: the bakery and the café, from order to till' },
  caption: {
    fr: 'The Lean Café en vidéo : la boulangerie et le café, du ticket à la caisse (1 min 46).',
    en: 'The Lean Café on video: the bakery and the café, from order to till (1 min 46).',
  },
};
