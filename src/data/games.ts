import type { Localized } from '@/i18n/utils';
import type { StripeProduct } from '@/config/site';

/**
 * Serious Games : trois façons d'en profiter.
 * À VALIDER : prix et contenus des kits.
 */

export type GameOptionKind = 'animation' | 'kit' | 'printplay';

export interface GameOption {
  kind: GameOptionKind;
  price: number | null; // null = sur devis
  priceNote: Localized;
  includes: Localized<string[]>;
  stripe?: StripeProduct;
}

export interface Game {
  id: 'beer-game' | 'lean-coffee-shop';
  name: string;
  topic: Localized;
  pitch: Localized;
  players: Localized;
  duration: Localized;
  lessons: Localized<string[]>;
  options: GameOption[];
}

export const optionLabels: Record<GameOptionKind, Localized> = {
  animation: { fr: 'Animation par Phi-Lean', en: 'Facilitated by Phi-Lean' },
  kit: { fr: 'Kit physique', en: 'Physical kit' },
  printplay: { fr: 'Print & Play', en: 'Print & Play' },
};

export const games: Game[] = [
  {
    id: 'beer-game',
    name: 'The Beer Game',
    topic: { fr: 'Supply chain et effet coup de fouet', en: 'Supply chain and the bullwhip effect' },
    pitch: {
      fr: "Quatre maillons, une seule bière, aucune communication entre les tables. En trente semaines simulées, les équipes vivent l'amplification des commandes qui coûte si cher aux chaînes logistiques réelles.",
      en: 'Four links, one beer, no talking between tables. Over thirty simulated weeks, teams experience the order amplification that costs real supply chains so much.',
    },
    players: { fr: '4 à 32 joueurs (équipes de 4)', en: '4 to 32 players (teams of 4)' },
    duration: { fr: '3 heures avec le débriefing', en: '3 hours including debrief' },
    lessons: {
      fr: ['Comprendre l’effet coup de fouet par l’expérience', 'Mesurer le coût des stocks et des ruptures', 'Partager l’information pour stabiliser la chaîne'],
      en: ['Understand the bullwhip effect first-hand', 'Measure the cost of inventory and stock-outs', 'Share information to stabilise the chain'],
    },
    options: [
      {
        kind: 'animation',
        price: null,
        priceNote: { fr: 'Sur site ou à distance, débriefing adapté à votre secteur', en: 'On site or remote, debrief tailored to your sector' },
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
          fr: ['Plateaux, jetons et cartes pour 4 équipes', 'Guide d’animation pas à pas', 'Tableur de débriefing automatique'],
          en: ['Boards, tokens and cards for 4 teams', 'Step-by-step facilitator guide', 'Automated debrief spreadsheet'],
        },
        stripe: 'beerGameKit',
      },
      {
        kind: 'printplay',
        price: 49,
        priceNote: { fr: 'TTC, téléchargement immédiat', en: 'incl. VAT, instant download' },
        includes: {
          fr: ['Fichiers PDF à imprimer en A3 et A4', 'Guide d’animation', 'Tableur de débriefing'],
          en: ['PDF files to print in A3 and A4', 'Facilitator guide', 'Debrief spreadsheet'],
        },
        stripe: 'beerGamePrintPlay',
      },
    ],
  },
  {
    id: 'lean-coffee-shop',
    name: 'The Lean Coffee Shop',
    topic: { fr: 'Flux tiré et Lean en service', en: 'Pull flow and Lean in services' },
    pitch: {
      fr: "Un comptoir, des commandes qui arrivent, des clients qui attendent. Trois tours de jeu pour passer d'une production poussée à un flux tiré, et voir le délai fondre sans travailler plus vite.",
      en: 'One counter, incoming orders, waiting customers. Three rounds to move from push to pull and watch lead time shrink without working any faster.',
    },
    players: { fr: '6 à 12 joueurs par table', en: '6 to 12 players per table' },
    duration: { fr: '2 h 30 avec le débriefing', en: '2.5 hours including debrief' },
    lessons: {
      fr: ['Voir l’effet des lots et des en-cours sur le délai', 'Équilibrer les postes au takt du client', 'Construire un standard de travail en équipe'],
      en: ['See how batches and WIP drive lead time', 'Balance stations to customer takt', 'Build standard work as a team'],
    },
    options: [
      {
        kind: 'animation',
        price: null,
        priceNote: { fr: 'Idéal en séminaire ou en lancement de démarche', en: 'Ideal for off-sites or programme kick-offs' },
        includes: {
          fr: ['Animateur Phi-Lean et matériel fournis', 'Transposition à vos processus', 'Synthèse écrite des enseignements'],
          en: ['Phi-Lean facilitator and materials', 'Mapping to your own processes', 'Written summary of the lessons'],
        },
      },
      {
        kind: 'kit',
        price: 590,
        priceNote: { fr: 'HT, livraison en France métropolitaine incluse', en: 'excl. VAT, delivery to mainland France included' },
        includes: {
          fr: ['Comptoir, gobelets et cartes commandes pour 2 tables', 'Chronomètres et fiches de mesure', 'Guide d’animation pas à pas'],
          en: ['Counter, cups and order cards for 2 tables', 'Timers and measurement sheets', 'Step-by-step facilitator guide'],
        },
        stripe: 'coffeeShopKit',
      },
      {
        kind: 'printplay',
        price: 39,
        priceNote: { fr: 'TTC, téléchargement immédiat', en: 'incl. VAT, instant download' },
        includes: {
          fr: ['Fichiers PDF à imprimer', 'Guide d’animation', 'Fiches de mesure'],
          en: ['Printable PDF files', 'Facilitator guide', 'Measurement sheets'],
        },
        stripe: 'coffeeShopPrintPlay',
      },
    ],
  },
];
