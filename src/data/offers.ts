import type { Localized } from '@/i18n/utils';

/**
 * Lignes de conseil et offre d'entrée « Diagnostic VSM Express ».
 * À VALIDER : prix, durée et condition de déduction.
 */

export interface ConsultingLine {
  id: 'usine' | 'service' | 'supply';
  anchor: Localized;
  title: Localized;
  subtitle: Localized;
  intro: Localized;
  symptoms: Localized<string[]>;
  levers: Localized<string[]>;
  deliverables: Localized<string[]>;
}

export const consultingLines: ConsultingLine[] = [
  {
    id: 'usine',
    anchor: { fr: 'usine', en: 'manufacturing' },
    title: { fr: 'Ligne Usine', en: 'Plant line' },
    subtitle: { fr: 'Lean Manufacturing', en: 'Lean Manufacturing' },
    intro: {
      fr: "Pour les sites de production qui veulent livrer à l'heure sans gonfler les stocks ni épuiser les équipes.",
      en: 'For production sites that want to deliver on time without inflating inventory or exhausting their teams.',
    },
    symptoms: {
      fr: ['En-cours qui débordent entre deux ateliers', 'Changements de série longs, petites séries impossibles', 'Retards clients compensés par des heures supplémentaires', 'Indicateurs suivis, mais personne ne sait quoi en faire le lundi matin'],
      en: ['WIP spilling over between two shops', 'Long changeovers that rule out small batches', 'Late deliveries patched with overtime', 'KPIs tracked, but nobody knows what to do with them on Monday morning'],
    },
    levers: {
      fr: ['Value Stream Mapping état actuel et état futur', 'Flux tiré : supermarchés, kanban, lissage', 'SMED et TPM sur les équipements goulets', '5S et standards au poste', 'Résolution de problèmes : QRQC, A3, 8D', 'Management visuel et rituels de performance'],
      en: ['Current and future-state Value Stream Mapping', 'Pull flow: supermarkets, kanban, levelling', 'SMED and TPM on bottleneck equipment', '5S and standard work', 'Problem solving: QRQC, A3, 8D', 'Visual management and performance routines'],
    },
    deliverables: {
      fr: ["Cartographie de flux validée par l'encadrement", 'Plan de transformation chiffré à 90 jours', 'Standards et routines transmis aux équipes'],
      en: ['Value stream map validated by management', 'Costed 90-day transformation plan', 'Standards and routines handed over to the teams'],
    },
  },
  {
    id: 'service',
    anchor: { fr: 'service', en: 'office' },
    title: { fr: 'Ligne Service', en: 'Service line' },
    subtitle: { fr: 'Lean Office', en: 'Lean Office' },
    intro: {
      fr: 'Pour les fonctions support, back-offices et services clients où le stock est invisible : dossiers, e-mails, demandes en attente.',
      en: 'For support functions, back offices and customer service teams where inventory is invisible: files, e-mails, pending requests.',
    },
    symptoms: {
      fr: ['Des demandes qui attendent plus longtemps qu’elles ne sont traitées', 'Relances, doubles saisies, allers-retours de validation', 'Charge mal répartie entre les équipes', 'Des outils informatiques qui figent de mauvaises pratiques'],
      en: ['Requests waiting longer than they are worked on', 'Chasing, double entry, endless approval loops', 'Workload unevenly spread across teams', 'IT tools that lock in bad practices'],
    },
    levers: {
      fr: ['VSM transactionnel, de la demande à la réponse', 'Flux FIFO et limitation du travail en cours', 'Standard de travail administratif', 'Obeya et tableaux de pilotage d’équipe', 'Automatisation ciblée des tâches sans valeur ajoutée (avec Phi-Lean.ai)'],
      en: ['Transactional VSM, from request to response', 'FIFO flow and WIP limits', 'Standard work for office processes', 'Obeya and team performance boards', 'Targeted automation of non-value-adding tasks (with Phi-Lean.ai)'],
    },
    deliverables: {
      fr: ['Mesure du délai réel et du temps à valeur ajoutée', 'Processus cible simplifié et documenté', 'Rituels d’équipe installés et autonomes'],
      en: ['Measured real lead time and value-added time', 'Simplified, documented target process', 'Team routines in place and self-sustaining'],
    },
  },
  {
    id: 'supply',
    anchor: { fr: 'supply-chain', en: 'supply-chain' },
    title: { fr: 'Supply Chain & Risk Management', en: 'Supply Chain & Risk Management' },
    subtitle: { fr: 'SCRM', en: 'SCRM' },
    intro: {
      fr: "Pour les entreprises dont la performance dépend d'un réseau de fournisseurs, de transporteurs et d'entrepôts qu'elles ne maîtrisent pas entièrement.",
      en: 'For companies whose performance depends on a network of suppliers, carriers and warehouses they do not fully control.',
    },
    symptoms: {
      fr: ['Ruptures à répétition sur quelques articles critiques', 'Effet coup de fouet : commandes qui s’amplifient en remontant la chaîne', 'Dépendance à un fournisseur unique ou à une seule zone géographique', 'Stocks de sécurité fixés au jugé'],
      en: ['Repeated stock-outs on a few critical items', 'Bullwhip effect: orders amplified as they move upstream', 'Dependence on a single supplier or region', 'Safety stocks set by gut feeling'],
    },
    levers: {
      fr: ['Cartographie du réseau et analyse de criticité', 'Stress-tests et scénarios de rupture', 'Stratégies de double sourcing et de stocks tampons', 'Dimensionnement des stocks de sécurité', 'Processus S&OP et pilotage de la demande', 'Plans de continuité d’activité'],
      en: ['Network mapping and criticality analysis', 'Stress tests and disruption scenarios', 'Dual sourcing and buffer strategies', 'Safety stock sizing', 'S&OP and demand management', 'Business continuity plans'],
    },
    deliverables: {
      fr: ['Matrice de risques fournisseurs et articles', 'Plan de mitigation priorisé par impact', 'Processus S&OP opérationnel'],
      en: ['Supplier and item risk matrix', 'Mitigation plan prioritised by impact', 'Working S&OP process'],
    },
  },
];

/** Offre d'entrée « pied dans la porte ». */
export const vsmExpress = {
  priceHT: 2900, // À VALIDER (euros HT)
  days: 3, // À VALIDER
  deductibleWindow: { fr: '3 mois', en: '3 months' }, // À VALIDER
  steps: {
    fr: [
      { title: 'Cadrage à distance', text: "Une heure pour choisir le flux à cartographier, la famille de produits ou de dossiers, et réunir les données existantes." },
      { title: 'Jour 1 : sur le terrain', text: 'Marche du flux à rebours, du client vers les fournisseurs. Mesure des stocks, des temps et des attentes, poste par poste.' },
      { title: 'Jour 2 : cartographie', text: "Construction de la VSM état actuel avec vos équipes, puis de l'état futur. Chaque gaspillage est chiffré." },
      { title: 'Jour 3 : restitution', text: 'Présentation à la direction : trois à cinq chantiers prioritaires, les gains attendus et un plan à 90 jours.' },
    ],
    en: [
      { title: 'Remote scoping', text: 'One hour to choose the value stream, the product or file family, and gather existing data.' },
      { title: 'Day 1: on the shop floor', text: 'Walking the flow backwards, from customer to suppliers. Measuring inventory, times and waits, step by step.' },
      { title: 'Day 2: mapping', text: 'Building the current-state VSM with your teams, then the future state. Every source of waste is quantified.' },
      { title: 'Day 3: read-out', text: 'Presentation to leadership: three to five priority workstreams, the expected gains and a 90-day plan.' },
    ],
  },
  deliverables: {
    fr: ['VSM état actuel et état futur au format A3', 'Délai de traversée et ratio de valeur ajoutée mesurés', 'Plan d’action à 90 jours, chiffré et priorisé', 'Support de restitution pour votre comité de direction'],
    en: ['Current and future-state VSM on A3', 'Measured lead time and value-added ratio', 'Costed, prioritised 90-day action plan', 'Read-out deck for your leadership team'],
  },
  faq: {
    fr: [
      { q: 'Que veut dire « 100 % déductible » ?', a: "Si vous confiez à Phi-Lean la mission d'accompagnement qui suit le diagnostic dans les 3 mois, le montant du diagnostic est intégralement déduit de cette mission." },
      { q: 'Quels flux peut-on cartographier ?', a: 'Une famille de produits en usine, un processus administratif (commande, réclamation, facturation, recrutement...) ou un flux logistique entre fournisseurs, entrepôt et clients.' },
      { q: 'Qui doit être disponible chez nous ?', a: 'Un responsable du flux pendant les trois jours, et deux à trois heures de chaque équipe concernée pour la cartographie.' },
      { q: 'Les frais de déplacement sont-ils inclus ?', a: 'Le forfait couvre l’intervention. Les frais de déplacement hors agglomération sont refacturés au réel, annoncés dans le devis.' },
    ],
    en: [
      { q: 'What does “100% deductible” mean?', a: 'If you entrust Phi-Lean with the follow-up engagement within 3 months, the full cost of the diagnostic is deducted from it.' },
      { q: 'Which flows can be mapped?', a: 'A product family in a plant, an office process (order, claim, invoicing, hiring...) or a logistics flow between suppliers, warehouse and customers.' },
      { q: 'Who needs to be available on our side?', a: 'One value stream owner for the three days, and two to three hours from each team involved in the mapping.' },
      { q: 'Are travel expenses included?', a: 'The fixed fee covers the engagement. Travel outside the metropolitan area is charged at cost and stated in the quotation.' },
    ],
  },
};
