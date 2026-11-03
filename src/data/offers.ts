import type { Localized } from '@/i18n/utils';

/**
 * Les deux métiers de Phi-Lean (page Conseil) et l'offre d'entrée
 * « Diagnostic VSM Express ».
 * La partie « VSM expliquée simplement » reprend la présentation
 * « Suivez le produit : la VSM expliquée simplement » de Manuel Gourmand.
 */

export interface ConsultingLine {
  id: 'usine' | 'supply';
  title: Localized;
  tagline: Localized;
  intro: Localized;
  symptoms: Localized<string[]>;
  levers: Localized<string[]>;
  deliverables: Localized<string[]>;
}

export const plantLine: ConsultingLine = {
  id: 'usine',
  title: { fr: 'Lean Flux Usine', en: 'Lean Plant Flow' },
  tagline: { fr: "Le Lean appliqué à l'usine, avec la VSM pour point de départ.", en: 'Lean applied to the plant, starting from value stream mapping.' },
  intro: {
    fr: "Pour les sites de production qui veulent livrer à l'heure sans gonfler les stocks ni épuiser les équipes. On commence toujours de la même façon : suivre le produit, de la commande du client jusqu'au camion, et regarder où il attend.",
    en: 'For production sites that want to deliver on time without inflating inventory or exhausting their teams. We always start the same way: follow the product from the customer order to the truck, and look at where it waits.',
  },
  symptoms: {
    fr: ['En-cours qui débordent entre deux ateliers', 'Changements de série longs, petites séries impossibles', 'Retards clients compensés par des heures supplémentaires', 'Des indicateurs suivis, mais personne ne sait quoi en faire le lundi matin'],
    en: ['WIP spilling over between two shops', 'Long changeovers that rule out small batches', 'Late deliveries patched with overtime', 'KPIs tracked, but nobody knows what to do with them on Monday morning'],
  },
  levers: {
    fr: ['VSM usine : état actuel, état futur, plan de transformation', 'Flux tiré : supermarchés, kanban, lissage de la production', 'SMED et TPM sur les équipements goulets', 'Mesure du TRS en temps réel, avec Factbird', '5S, standards au poste et management visuel', 'Résolution de problèmes : QRQC, A3, 8D'],
    en: ['Plant VSM: current state, future state, transformation plan', 'Pull flow: supermarkets, kanban, production levelling', 'SMED and TPM on bottleneck equipment', 'Real-time OEE measurement with Factbird', '5S, standard work and visual management', 'Problem solving: QRQC, A3, 8D'],
  },
  deliverables: {
    fr: ["Cartographie de flux validée par l'encadrement", 'Plan de transformation chiffré à 90 jours', 'Standards et routines transmis aux équipes'],
    en: ['Value stream map validated by management', 'Costed 90-day transformation plan', 'Standards and routines handed over to the teams'],
  },
};

export const supplyLine: ConsultingLine = {
  id: 'supply',
  title: { fr: 'Lean Flux Supply Chain', en: 'Lean Supply Chain Flow' },
  tagline: { fr: 'Le Lean appliqué à la supply chain, avec un focus sur la gestion des risques (SCRM).', en: 'Lean applied to the supply chain, with a focus on supply chain risk management (SCRM).' },
  intro: {
    fr: "Pour les entreprises dont la performance dépend d'un réseau de fournisseurs, de transporteurs et d'entrepôts qu'elles ne maîtrisent pas entièrement. Même logique que dans l'usine : suivre le flux de bout en bout, de vos fournisseurs à vos clients, et repérer où il attend, où il s'amplifie et où il peut casser.",
    en: 'For companies whose performance depends on a network of suppliers, carriers and warehouses they do not fully control. Same logic as in the plant: follow the flow end to end, from your suppliers to your customers, and find where it waits, where it amplifies and where it can break.',
  },
  symptoms: {
    fr: ['Ruptures à répétition sur quelques articles critiques', 'Effet coup de fouet : des commandes qui s’amplifient en remontant la chaîne', 'Dépendance à un fournisseur unique ou à une seule zone géographique', 'Stocks de sécurité fixés au jugé'],
    en: ['Repeated stock-outs on a few critical items', 'Bullwhip effect: orders amplified as they move upstream', 'Dependence on a single supplier or region', 'Safety stocks set by gut feeling'],
  },
  levers: {
    fr: ['VSM étendue, du fournisseur au client', 'Flux tirés entre sites et entrepôts, kanban fournisseurs', 'Dimensionnement des stocks de sécurité', 'Processus S&OP et pilotage de la demande'],
    en: ['Extended VSM, from supplier to customer', 'Pull flows between sites and warehouses, supplier kanban', 'Safety stock sizing', 'S&OP and demand management'],
  },
  deliverables: {
    fr: ['Cartographie du réseau et matrice de risques fournisseurs et articles', 'Plan de protection priorisé par impact', "Processus S&OP opérationnel, avec ses indicateurs d'alerte"],
    en: ['Network map and supplier and item risk matrix', 'Protection plan prioritised by impact', 'Working S&OP process with early-warning indicators'],
  },
};

/** « La VSM expliquée simplement » (d'après la présentation de Manuel Gourmand). */
export const vsmExplained = {
  question: {
    fr: 'Combien de temps met une commande pour traverser votre usine ?',
    en: 'How long does an order take to travel through your plant?',
  },
  definition: {
    fr: "VSM veut dire Value Stream Mapping. En clair : on suit une seule commande, de bout en bout, comme on suit un colis, et on dessine tout son voyage sur une seule feuille. À chaque étape, on note ce qui avance… et surtout ce qui attend.",
    en: 'VSM stands for Value Stream Mapping. Put simply: we follow a single order end to end, the way you track a parcel, and draw its whole journey on one sheet. At each step we note what moves forward… and above all what waits.',
  },
  example: {
    lead: { fr: '20 jours', en: '20 days' },
    leadLabel: { fr: 'de trajet au total', en: 'of total journey' },
    work: { fr: '3 heures', en: '3 hours' },
    workLabel: { fr: 'de vrai travail', en: 'of real work' },
    conclusion: { fr: 'Plus de 98 % du temps, votre commande attend.', en: 'More than 98% of the time, your order is waiting.' },
    note: {
      fr: 'Exemple illustratif : 3 heures de travail sur 20 jours ouvrés de 8 heures (160 h), soit moins de 2 %.',
      en: 'Illustrative example: 3 hours of work over 20 working days of 8 hours (160 h), i.e. less than 2%.',
    },
  },
  benefits: {
    fr: [
      { title: 'Voir', text: 'le trajet complet de votre produit, et surtout ce qui attend. Chacun connaît sa pièce du puzzle ; personne n’a l’image sur la boîte.' },
      { title: 'Relier', text: 'les équipes autour d’une même image. Comme au relais 4 × 100, la course se perd au passage du témoin : les pertes sont entre les services.' },
      { title: 'Libérer', text: 'le goulot qui freine tout le reste. Une bouteille se vide au rythme de son goulot ; votre usine aussi.' },
    ],
    en: [
      { title: 'See', text: 'the full journey of your product, and above all what waits. Everyone knows their piece of the puzzle; nobody has the picture on the box.' },
      { title: 'Connect', text: 'teams around one shared picture. As in a 4 × 100 relay, the race is lost at the baton handover: losses sit between departments.' },
      { title: 'Release', text: 'the bottleneck that slows everything else. A bottle empties at the pace of its neck; so does your plant.' },
    ],
  },
  bottleneck: {
    steps: [
      { name: { fr: 'Découpe', en: 'Cutting' }, rate: 120 },
      { name: { fr: 'Soudure', en: 'Welding' }, rate: 40 },
      { name: { fr: 'Peinture', en: 'Painting' }, rate: 100 },
      { name: { fr: 'Montage', en: 'Assembly' }, rate: 90 },
    ],
    unit: { fr: 'pièces / jour', en: 'parts / day' },
    result: { fr: '40 pièces par jour. Pas une de plus.', en: '40 parts per day. Not one more.' },
    moral: {
      fr: 'Accélérer ailleurs ne sert à rien : on grossit juste le stock devant le bouchon.',
      en: 'Speeding up elsewhere is pointless: it only grows the pile in front of the bottleneck.',
    },
  },
  steps: {
    fr: [
      { title: 'Marcher', text: 'On suit une vraie commande sur le terrain, avec ceux qui la font.' },
      { title: 'Dessiner', text: 'On dessine son trajet au mur, ensemble : ce qui avance, ce qui attend.' },
      { title: 'Améliorer', text: 'On dessine le trajet idéal, puis on fait sauter les bouchons un par un.' },
    ],
    en: [
      { title: 'Walk', text: 'We follow a real order on the shop floor, with the people who make it.' },
      { title: 'Draw', text: 'We draw its journey on the wall, together: what moves, what waits.' },
      { title: 'Improve', text: 'We draw the ideal journey, then clear the bottlenecks one by one.' },
    ],
  },
};

/** Démarche de gestion des risques supply chain (étapes successives). */
export const scrmSteps: Localized<{ title: string; text: string }[]> = {
  fr: [
    { title: 'Cartographier', text: 'Le réseau réel : fournisseurs de rang 1 et 2, sites, routes de transport, articles à source unique.' },
    { title: 'Évaluer', text: 'La criticité de chaque maillon : impact sur vos clients, probabilité de rupture, temps de rétablissement.' },
    { title: 'Tester', text: 'Des scénarios de rupture : fournisseur défaillant, route coupée, envolée de la demande.' },
    { title: 'Protéger', text: 'Double sourcing, stocks tampons placés là où ils comptent, plans de continuité.' },
    { title: 'Surveiller', text: "Des indicateurs d'alerte précoce, suivis chaque mois dans le processus S&OP." },
  ],
  en: [
    { title: 'Map', text: 'The real network: tier 1 and tier 2 suppliers, sites, transport routes, single-sourced items.' },
    { title: 'Assess', text: 'The criticality of each link: impact on your customers, likelihood of disruption, time to recover.' },
    { title: 'Test', text: 'Disruption scenarios: a failing supplier, a closed route, a demand spike.' },
    { title: 'Protect', text: 'Dual sourcing, buffer stocks placed where they matter, continuity plans.' },
    { title: 'Monitor', text: 'Early-warning indicators, reviewed every month in the S&OP process.' },
  ],
};

/** Offre d'entrée « pied dans la porte ». */
export const vsmExpress = {
  priceHT: 2900,
  days: 3,
  deductibleWindow: { fr: '3 mois', en: '3 months' },
  steps: {
    fr: [
      { title: 'Cadrage à distance', text: 'Une heure pour choisir le flux à cartographier, la famille de produits ou le flux logistique, et réunir les données existantes.' },
      { title: 'Jour 1 : sur le terrain', text: 'Marche du flux à rebours, du client vers les fournisseurs. Mesure des stocks, des temps et des attentes, étape par étape.' },
      { title: 'Jour 2 : cartographie', text: "Construction de la VSM état actuel avec vos équipes, puis de l'état futur. Chaque gaspillage est chiffré." },
      { title: 'Jour 3 : restitution', text: 'Présentation à la direction : trois à cinq chantiers prioritaires, les gains attendus et un plan à 90 jours.' },
    ],
    en: [
      { title: 'Remote scoping', text: 'One hour to choose the value stream, the product family or logistics flow, and gather existing data.' },
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
      { q: 'Quels flux peut-on cartographier ?', a: 'Une famille de produits en usine, ou un flux logistique entre vos fournisseurs, vos sites, vos entrepôts et vos clients.' },
      { q: 'Qui doit être disponible chez nous ?', a: 'Un responsable du flux pendant les trois jours, et deux à trois heures de chaque équipe concernée pour la cartographie.' },
      { q: 'Les frais de déplacement sont-ils inclus ?', a: 'Le forfait couvre l’intervention. Les frais de déplacement sont refacturés au réel, annoncés dans le devis.' },
    ],
    en: [
      { q: 'What does “100% deductible” mean?', a: 'If you entrust Phi-Lean with the follow-up engagement within 3 months, the full cost of the diagnostic is deducted from it.' },
      { q: 'Which flows can be mapped?', a: 'A product family in a plant, or a logistics flow between your suppliers, sites, warehouses and customers.' },
      { q: 'Who needs to be available on our side?', a: 'One value stream owner for the three days, and two to three hours from each team involved in the mapping.' },
      { q: 'Are travel expenses included?', a: 'The fixed fee covers the engagement. Travel expenses are charged at cost and stated in the quotation.' },
    ],
  },
};
