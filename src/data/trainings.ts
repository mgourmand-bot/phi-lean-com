import type { Localized } from '@/i18n/utils';

/**
 * Catalogue des formations opérationnelles.
 * À VALIDER : intitulés, durées et formats.
 */

export type TrainingDomain = 'usine' | 'service' | 'logistique';

export const domains: Record<TrainingDomain, Localized> = {
  usine: { fr: 'Usine', en: 'Plant' },
  service: { fr: 'Service', en: 'Office' },
  logistique: { fr: 'Supply chain', en: 'Supply chain' },
};

export interface Training {
  id: string;
  domain: TrainingDomain;
  title: Localized;
  duration: Localized;
  audience: Localized;
  objectives: Localized<string[]>;
  formats: ('intra' | 'inter' | 'distanciel')[];
}

export const formatLabels: Record<Training['formats'][number], Localized> = {
  intra: { fr: 'Intra-entreprise', en: 'In-company' },
  inter: { fr: 'Inter-entreprises', en: 'Open session' },
  distanciel: { fr: 'À distance', en: 'Remote' },
};

export const trainings: Training[] = [
  {
    id: 'fondamentaux-lean',
    domain: 'usine',
    title: { fr: 'Fondamentaux du Lean Manufacturing', en: 'Lean Manufacturing fundamentals' },
    duration: { fr: '2 jours', en: '2 days' },
    audience: { fr: "Chefs d'équipe, techniciens méthodes, responsables de production", en: 'Team leaders, process engineers, production managers' },
    objectives: {
      fr: ['Reconnaître les sept gaspillages sur le terrain', 'Relier flux, stocks et délai client', 'Mener un premier chantier d’amélioration'],
      en: ['Spot the seven wastes on the shop floor', 'Link flow, inventory and customer lead time', 'Run a first improvement workshop'],
    },
    formats: ['intra', 'inter'],
  },
  {
    id: 'vsm',
    domain: 'usine',
    title: { fr: 'VSM : cartographier et redessiner un flux', en: 'VSM: map and redesign a value stream' },
    duration: { fr: '2 jours', en: '2 days' },
    audience: { fr: 'Responsables de flux, ingénieurs amélioration continue', en: 'Value stream managers, continuous improvement engineers' },
    objectives: {
      fr: ['Dessiner une VSM état actuel sur un cas réel', 'Calculer délai de traversée et takt time', 'Construire un état futur et son plan d’action'],
      en: ['Draw a current-state VSM on a real case', 'Calculate lead time and takt time', 'Build a future state and its action plan'],
    },
    formats: ['intra', 'inter'],
  },
  {
    id: 'smed-tpm',
    domain: 'usine',
    title: { fr: 'SMED et TPM : des équipements fiables et rapides à changer', en: 'SMED and TPM: reliable, quick-to-change equipment' },
    duration: { fr: '2 jours', en: '2 days' },
    audience: { fr: 'Régleurs, maintenance, chefs d’atelier', en: 'Setters, maintenance teams, shop managers' },
    objectives: {
      fr: ['Filmer et analyser un changement de série', 'Séparer opérations internes et externes', 'Mesurer et améliorer le TRS'],
      en: ['Film and analyse a changeover', 'Separate internal and external operations', 'Measure and improve OEE'],
    },
    formats: ['intra'],
  },
  {
    id: 'resolution-problemes',
    domain: 'usine',
    title: { fr: 'Résolution de problèmes : QRQC, A3 et 8D', en: 'Problem solving: QRQC, A3 and 8D' },
    duration: { fr: '1 jour', en: '1 day' },
    audience: { fr: 'Encadrement de proximité, qualité, méthodes', en: 'Front-line managers, quality, engineering' },
    objectives: {
      fr: ['Poser un problème factuellement', 'Remonter aux causes racines', 'Suivre l’efficacité des actions'],
      en: ['State a problem factually', 'Get to root causes', 'Track the effectiveness of actions'],
    },
    formats: ['intra', 'inter', 'distanciel'],
  },
  {
    id: 'lean-office',
    domain: 'service',
    title: { fr: 'Lean Office : fluidifier les processus administratifs', en: 'Lean Office: streamlining office processes' },
    duration: { fr: '2 jours', en: '2 days' },
    audience: { fr: 'Managers de back-office, fonctions support, chefs de projet', en: 'Back-office managers, support functions, project leads' },
    objectives: {
      fr: ['Rendre visible le stock invisible : dossiers, e-mails, demandes', 'Mesurer le délai réel d’un processus', 'Supprimer les boucles de validation inutiles'],
      en: ['Make invisible inventory visible: files, e-mails, requests', 'Measure the real lead time of a process', 'Remove needless approval loops'],
    },
    formats: ['intra', 'inter', 'distanciel'],
  },
  {
    id: 'management-visuel',
    domain: 'service',
    title: { fr: "Management visuel et rituels d'équipe", en: 'Visual management and team routines' },
    duration: { fr: '1 jour', en: '1 day' },
    audience: { fr: 'Managers d’équipe, en production comme en service', en: 'Team managers, in production and services alike' },
    objectives: {
      fr: ['Concevoir un tableau d’équipe utile', 'Animer un point quotidien de 15 minutes', 'Faire remonter et traiter les problèmes'],
      en: ['Design a useful team board', 'Run a 15-minute daily huddle', 'Escalate and solve problems'],
    },
    formats: ['intra', 'distanciel'],
  },
  {
    id: 'flux-tires',
    domain: 'logistique',
    title: { fr: 'Flux tirés, kanban et supermarchés', en: 'Pull flow, kanban and supermarkets' },
    duration: { fr: '2 jours', en: '2 days' },
    audience: { fr: 'Logisticiens, planificateurs, approvisionneurs', en: 'Logistics staff, planners, buyers' },
    objectives: {
      fr: ['Dimensionner une boucle kanban', 'Implanter un supermarché', 'Lisser la production avec le heijunka'],
      en: ['Size a kanban loop', 'Set up a supermarket', 'Level production with heijunka'],
    },
    formats: ['intra', 'inter'],
  },
  {
    id: 'scrm',
    domain: 'logistique',
    title: { fr: 'Supply Chain Risk Management', en: 'Supply Chain Risk Management' },
    duration: { fr: '2 jours', en: '2 days' },
    audience: { fr: 'Acheteurs, supply chain managers, directions des opérations', en: 'Buyers, supply chain managers, operations directors' },
    objectives: {
      fr: ['Cartographier son réseau d’approvisionnement', 'Évaluer la criticité fournisseurs et articles', 'Bâtir un plan de mitigation'],
      en: ['Map the supply network', 'Assess supplier and item criticality', 'Build a mitigation plan'],
    },
    formats: ['intra', 'inter', 'distanciel'],
  },
  {
    id: 'sop',
    domain: 'logistique',
    title: { fr: 'S&OP : aligner ventes, production et achats', en: 'S&OP: aligning sales, production and purchasing' },
    duration: { fr: '1 jour', en: '1 day' },
    audience: { fr: 'Directions commerciales, industrielles et supply chain', en: 'Sales, operations and supply chain leaders' },
    objectives: {
      fr: ['Structurer le cycle S&OP mensuel', 'Arbitrer entre demande et capacité', 'Piloter avec quelques indicateurs partagés'],
      en: ['Structure the monthly S&OP cycle', 'Balance demand and capacity', 'Steer with a few shared KPIs'],
    },
    formats: ['intra', 'distanciel'],
  },
];
