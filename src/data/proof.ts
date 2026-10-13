import type { Localized } from '@/i18n/utils';

/**
 * PREUVE SOCIALE – chiffres clés et études de cas anonymisées.
 * À VALIDER : toutes les valeurs ci-dessous sont des exemples réalistes
 * à remplacer par les résultats réels de vos missions avant mise en ligne.
 */

export type KpiTone = 'blue' | 'turq' | 'sun' | 'coral';

export interface Metric {
  value: Localized;
  label: Localized;
  tone: KpiTone;
}

export const metrics: Metric[] = [
  {
    value: { fr: '-35 %', en: '-35%' },
    label: { fr: "d'en-cours sur une ligne d'assemblage en 5 mois", en: 'work-in-progress on an assembly line in 5 months' },
    tone: 'turq',
  },
  {
    value: { fr: '-46 %', en: '-46%' },
    label: { fr: 'de délai de traitement dans un back-office de mutuelle', en: 'processing lead time in an insurance back office' },
    tone: 'turq',
  },
  {
    value: { fr: '+13 pts', en: '+13 pts' },
    label: { fr: 'de taux de service client chez un équipementier', en: 'on-time delivery at an automotive supplier' },
    tone: 'blue',
  },
  {
    value: { fr: '3 jours', en: '3 days' },
    label: { fr: 'pour cartographier votre flux et chiffrer les gains', en: 'to map your value stream and size the gains' },
    tone: 'sun',
  },
];

export interface CaseStudy {
  id: string;
  line: 'usine' | 'service' | 'supply';
  sector: Localized;
  size: Localized;
  challenge: Localized;
  actions: Localized<string[]>;
  headline: { value: Localized; label: Localized };
  results: { label: Localized; before: string; after: string }[];
  duration: Localized;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'equipementier-auto',
    line: 'usine',
    sector: { fr: 'Équipementier automobile de rang 2', en: 'Tier-2 automotive supplier' },
    size: { fr: '450 salariés', en: '450 employees' },
    challenge: {
      fr: "Des stocks qui s'accumulent entre emboutissage et soudure, et des livraisons en retard malgré des heures supplémentaires.",
      en: 'Inventory piling up between stamping and welding, and late deliveries despite overtime.',
    },
    actions: {
      fr: ['VSM état actuel et état futur avec les chefs d’équipe', 'Supermarché et boucle kanban entre les deux ateliers', 'Chantier SMED sur les trois presses goulets'],
      en: ['Current and future-state VSM with team leaders', 'Supermarket and kanban loop between the two shops', 'SMED workshop on the three bottleneck presses'],
    },
    headline: {
      value: { fr: '-35 %', en: '-35%' },
      label: { fr: "d'en-cours", en: 'work-in-progress' },
    },
    results: [
      { label: { fr: 'Changement de série', en: 'Changeover time' }, before: '52 min', after: '19 min' },
      { label: { fr: 'Taux de service', en: 'On-time delivery' }, before: '83 %', after: '96 %' },
    ],
    duration: { fr: '5 mois', en: '5 months' },
  },
  {
    id: 'mutuelle-back-office',
    line: 'service',
    sector: { fr: 'Mutuelle régionale, gestion des sinistres', en: 'Regional insurer, claims handling' },
    size: { fr: '120 gestionnaires', en: '120 claims handlers' },
    challenge: {
      fr: 'Des dossiers qui attendent plus longtemps qu’ils ne sont traités, et des adhérents qui relancent.',
      en: 'Files waiting far longer than they are worked on, and members chasing for updates.',
    },
    actions: {
      fr: ['VSM transactionnel du dossier, de la déclaration au paiement', 'Flux en FIFO et suppression des doubles saisies', 'Point d’équipe quotidien de 15 minutes autour d’un tableau visuel'],
      en: ['Transactional VSM from claim to payment', 'FIFO flow and removal of double data entry', 'Daily 15-minute team huddle around a visual board'],
    },
    headline: {
      value: { fr: '-46 %', en: '-46%' },
      label: { fr: 'de délai de traitement', en: 'processing lead time' },
    },
    results: [
      { label: { fr: 'Dossiers en attente', en: 'Files in backlog' }, before: '2 400', after: '910' },
      { label: { fr: 'Relances adhérents / mois', en: 'Member follow-ups / month' }, before: '640', after: '410' },
    ],
    duration: { fr: '4 mois', en: '4 months' },
  },
  {
    id: 'distributeur-b2b',
    line: 'supply',
    sector: { fr: 'Distributeur B2B de pièces techniques', en: 'B2B distributor of technical parts' },
    size: { fr: '18 000 références', en: '18,000 SKUs' },
    challenge: {
      fr: 'Des ruptures à répétition sur des articles à fournisseur unique, et des stocks de sécurité fixés au jugé.',
      en: 'Repeated stock-outs on single-sourced items, and safety stocks set by gut feeling.',
    },
    actions: {
      fr: ['Cartographie des risques fournisseurs et des articles critiques', 'Double sourcing sur 12 références à fort impact', 'Processus S&OP mensuel et stocks de sécurité recalculés'],
      en: ['Supplier and critical-item risk mapping', 'Dual sourcing on 12 high-impact items', 'Monthly S&OP and recalculated safety stocks'],
    },
    headline: {
      value: { fr: '-38 %', en: '-38%' },
      label: { fr: 'de ruptures client', en: 'customer stock-outs' },
    },
    results: [
      { label: { fr: 'Stock de sécurité', en: 'Safety stock' }, before: '41 j', after: '35 j' },
      { label: { fr: 'Articles critiques couverts', en: 'Critical items covered' }, before: '0', after: '12' },
    ],
    duration: { fr: '6 mois', en: '6 months' },
  },
];
