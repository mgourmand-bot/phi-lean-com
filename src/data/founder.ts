import type { Localized } from '@/i18n/utils';

/**
 * LE FONDATEUR : Manuel Gourmand.
 * Tout ce qui est dit de lui sur le site part d'ici (accueil, page Le cabinet,
 * pages de la maison, page portugaise, données structurées).
 * Source : CV de novembre 2026. Ne rien ajouter qui n'y figure pas.
 */

export const founderLinks = {
  linkedin: 'https://www.linkedin.com/in/manuelgourmand/',
};

/** Ligne de titre, sous le nom. */
export const founderHeadline: Localized = {
  fr: 'Fondateur de Phi-Lean · Ingénieur ENIM · MSc Lean Enterprise, University of Buckingham',
  en: 'Founder of Phi-Lean · ENIM engineer · MSc Lean Enterprise, University of Buckingham',
};

/** Présentation courte (accueil). */
export const founderShortBio: Localized = {
  fr: 'Ingénieur ENIM et titulaire d’un MSc en Lean Enterprise de l’University of Buckingham (mention Distinction), Manuel Gourmand a passé quinze ans à la tête d’opérations industrielles et de supply chains, en France, au Royaume-Uni, aux Pays-Bas, au Brésil et aux États-Unis. Il a dirigé un site de production avec l’ensemble de son compte de résultat, mené le démarrage d’une usine aux Pays-Bas et coordonné la distribution d’un groupe à travers onze plateformes régionales. Il a fondé Phi-Lean pour mettre cette expérience au service des dirigeants, des PME aux grands groupes.',
  en: 'An ENIM engineer with an MSc in Lean Enterprise from the University of Buckingham (Distinction), Manuel Gourmand spent fifteen years running industrial operations and supply chains in France, the UK, the Netherlands, Brazil and the United States. He ran a production site with full P&L responsibility, led the start-up of a new plant in the Netherlands and coordinated a group’s distribution through eleven regional hubs. He founded Phi-Lean to put that experience to work for business leaders, from SMEs to large groups.',
};

/** Résultats chiffrés (preuve sociale). */
export const founderProof: { value: string; label: Localized; tone: 'kpi-blue' | 'kpi-turq' | 'kpi-sun' }[] = [
  {
    value: '15',
    label: { fr: 'ans de direction industrielle et supply chain, dans cinq pays', en: 'years running plants and supply chains, in five countries' },
    tone: 'kpi-blue',
  },
  {
    value: '+14 %',
    label: {
      fr: 'd’EBITDA en deux ans sur le dernier site qu’il a dirigé, sans investissement lourd',
      en: 'EBITDA in two years at the last site he ran, without heavy investment',
    },
    tone: 'kpi-turq',
  },
  {
    value: '75 → 98 %',
    label: { fr: 'de taux de service client sur ce même site, avec un prix de vente moyen en hausse de 22 %', en: 'on-time service at that same site, with the average selling price up 22%' },
    tone: 'kpi-turq',
  },
  {
    value: '189 M$',
    label: { fr: 'de chiffre d’affaires servis par la supply chain de distribution qu’il a coordonnée (11 plateformes)', en: 'of revenue served by the distribution supply chain he coordinated (11 hubs)' },
    tone: 'kpi-sun',
  },
];

/** Pourquoi les petites entreprises, et tous les secteurs, sont chez eux avec lui. */
export const founderForEveryone: { title: Localized; text: Localized }[] = [
  {
    title: { fr: 'La réalité d’une PME, vécue de l’intérieur', en: 'SME reality, lived from the inside' },
    text: {
      fr: 'Son dernier site comptait 32 personnes. Production, qualité, laboratoires, maintenance, achats, logistique, RH et finance : tout remontait au même bureau, le sien. Il sait ce qu’est une décision prise avec peu de monde, sans service support et avec la trésorerie en tête.',
      en: 'His last site had 32 people. Production, quality, laboratories, maintenance, purchasing, logistics, HR and finance all reported to the same desk: his. He knows what it is to decide with a small team, no support functions and cash always in mind.',
    },
  },
  {
    title: { fr: 'Des secteurs très différents', en: 'Very different sectors' },
    text: {
      fr: 'Machines agricoles, véhicules de nettoyage de voirie, papier, ingrédients pour la pharmacie, distribution de pièces détachées, conseil en systèmes SAP. Le Lean qu’il pratique ne dépend pas du produit : il suit le flux, qu’il s’agisse de pièces, de dossiers ou de clients.',
      en: 'Agricultural machinery, street-cleaning vehicles, paper, pharmaceutical ingredients, spare-parts distribution, SAP systems consulting. The Lean he practises does not depend on the product: it follows the flow, whether parts, files or customers.',
    },
  },
  {
    title: { fr: 'Les grands groupes, de l’intérieur aussi', en: 'Large groups, from the inside too' },
    text: {
      fr: 'Responsable supply chain groupe, intérims de direction aux États-Unis et en Amérique latine, intégration d’une usine rachetée : il parle la langue des directions générales et des comités de pilotage, et des cabinets de conseil comme Cubik font appel à lui en renfort d’expertise.',
      en: 'Group supply chain manager, interim leadership roles in the United States and Latin America, integration of an acquired plant: he speaks the language of executive committees and steering boards, and consulting firms such as Cubik bring him in as an expert.',
    },
  },
];

export interface CareerStep {
  years: string;
  role: Localized;
  org: string;
  orgUrl?: string;
  place: Localized;
  text: Localized;
}

export const founderCareer: CareerStep[] = [
  {
    years: '2026',
    role: { fr: 'Fondateur, consultant et manager de transition', en: 'Founder, consultant and interim manager' },
    org: 'Phi-Lean',
    place: { fr: 'Liverdun et Royal Tunbridge Wells', en: 'Liverdun and Royal Tunbridge Wells' },
    text: {
      fr: 'Conseil en excellence opérationnelle, formation (VSM, S&OP, résolution de problèmes, TWI) et management de transition : direction de site, direction supply chain, maintenance, opérations.',
      en: 'Operational excellence consulting, training (VSM, S&OP, problem solving, TWI) and interim management: site, supply chain, maintenance and operations leadership.',
    },
  },
  {
    years: '2022 – 2026',
    role: { fr: 'Responsable de site et président par délégation', en: 'Site Manager and delegated President' },
    org: 'Colorcon SAS',
    orgUrl: 'https://www.colorcon.com',
    place: { fr: 'Bazainville, France', en: 'Bazainville, France' },
    text: {
      fr: 'Site de 32 personnes, plus de 9 M€ de chiffre d’affaires, compte de résultat complet. Offre scindée en deux marchés et service client à deux niveaux : EBITDA +14 % en deux ans, taux de service de 75 à 98 %, prix de vente moyen +22 %, sans investissement lourd, dans le cadre d’une transformation culturelle Lean.',
      en: '32-person site, over €9M revenue, full P&L. Offer split into two markets with a two-tier customer service: EBITDA +14% in two years, on-time service from 75% to 98%, average selling price +22%, without heavy investment, as part of a Lean culture change.',
    },
  },
  {
    years: '2020 – 2022',
    role: { fr: 'Responsable des opérations, démarrage d’usine', en: 'Operations Manager, plant start-up' },
    org: 'Colorcon BV',
    orgUrl: 'https://www.colorcon.com',
    place: { fr: 'Almere, Pays-Bas', en: 'Almere, Netherlands' },
    text: {
      fr: 'Direction du projet de planification et de démarrage d’une nouvelle usine : recrutement, production, logistique, qualité, achats, maintenance, réglementaire.',
      en: 'Led the planning and start-up of a new plant: recruitment, production, logistics, quality, purchasing, maintenance, regulatory.',
    },
  },
  {
    years: '2017 – 2021',
    role: { fr: 'Responsable supply chain groupe, distribution', en: 'Group Supply Chain Manager, distribution' },
    org: 'Colorcon Ltd',
    orgUrl: 'https://www.colorcon.com',
    place: { fr: 'Dartford, Royaume-Uni', en: 'Dartford, United Kingdom' },
    text: {
      fr: 'Coordination opérationnelle de la distribution : 11 plateformes régionales, 189 M$ de chiffre d’affaires. Intérims de direction supply chain en Amérique du Nord (3 usines, 10 acheteurs, 210 M$) et en Amérique latine, pendant le démarrage d’une nouvelle usine au Brésil.',
      en: 'Operational coordination of distribution: 11 regional hubs, $189M revenue. Interim supply chain leadership in North America (3 plants, 10 buyers, $210M) and Latin America, during the start-up of a new plant in Brazil.',
    },
  },
  {
    years: '2011 – 2017',
    role: { fr: 'Supply chain, ordonnancement, centre de distribution', en: 'Supply chain, scheduling, distribution centre' },
    org: 'Bucher Industries (Johnston Sweepers, Bucher Municipal)',
    orgUrl: 'https://www.bucherindustries.com',
    place: { fr: 'Dorking, Royaume-Uni', en: 'Dorking, United Kingdom' },
    text: {
      fr: 'Véhicules de nettoyage de voirie. Responsable de l’ordonnancement d’une usine de 300 à 350 personnes (75 M£, S&OP, plan de charge), puis du centre de distribution de pièces de rechange (15 personnes, 15 M£).',
      en: 'Street-cleaning vehicles. Head of scheduling for a 300 to 350-person plant (£75M, S&OP, capacity planning), then of the spare-parts distribution centre (15 people, £15M).',
    },
  },
  {
    years: '2010 – 2011',
    role: { fr: 'Consultant SAP supply chain', en: 'SAP supply chain consultant' },
    org: 'Capgemini',
    orgUrl: 'https://www.capgemini.com',
    place: { fr: 'Strasbourg, France', en: 'Strasbourg, France' },
    text: { fr: 'Mise en place de solutions SAP achats et approvisionnement (MM, SRM).', en: 'Implementation of SAP purchasing and procurement solutions (MM, SRM).' },
  },
  {
    years: '2009 – 2010',
    role: { fr: 'Responsable des opérations, intégration d’usine', en: 'Operations Manager, plant integration' },
    org: 'Kuhn do Brasil (Bucher Industries)',
    orgUrl: 'https://www.bucherindustries.com',
    place: { fr: 'Passo Fundo, Brésil', en: 'Passo Fundo, Brazil' },
    text: {
      fr: 'Machines agricoles. Intégration au groupe d’une usine brésilienne tout juste rachetée (V.I.E., programme international du groupe Kuhn).',
      en: 'Agricultural machinery. Integration of a newly acquired Brazilian plant into the group (Kuhn international graduate programme).',
    },
  },
];

export const founderEducation: { years: string; title: Localized; school: string; url?: string; text: Localized }[] = [
  {
    years: '2015 – 2017',
    title: { fr: 'MSc Lean Enterprise, mention Distinction', en: 'MSc Lean Enterprise, with Distinction' },
    school: 'University of Buckingham Business School',
    url: 'https://www.buckingham.ac.uk/news/renault-nissan-consulting-is-university-of-buckinghams-new-partner-for-lean-enterprise',
    text: {
      fr: 'Deux ans en cours d’emploi, sur des sites industriels hôtes, dans le programme ouvert en janvier 2015 en partenariat avec Renault-Nissan Consulting. Mémoire : la négociation raisonnée et la conduite du changement au service d’un processus S&OP.',
      en: 'Two years part-time, on host industrial sites, in the programme opened in January 2015 in partnership with Renault-Nissan Consulting. Dissertation: principled negotiation and change management in support of an S&OP process.',
    },
  },
  {
    years: '2004 – 2009',
    title: { fr: 'Diplôme d’ingénieur, génie industriel et mécanique', en: 'Engineering degree (MEng), industrial and mechanical engineering' },
    school: 'ENIM, École nationale d’ingénieurs de Metz (Lorraine INP)',
    url: 'https://enim.univ-lorraine.fr/',
    text: {
      fr: 'Cinq ans de génie mécanique et de gestion de production, avec un semestre à l’UNICAMP (Campinas, Brésil) et un projet européen à Coventry University (Royaume-Uni).',
      en: 'Five years of mechanical engineering and production management, with a semester at UNICAMP (Campinas, Brazil) and a European project at Coventry University (UK).',
    },
  },
];

export const founderLanguages: Localized = {
  fr: 'Français (langue maternelle), anglais et portugais (bilingue, C2), espagnol (A2), néerlandais (en cours)',
  en: 'French (native), English and Portuguese (fluent, C2), Spanish (A2), Dutch (learning)',
};

/** Liens pour vérifier par soi-même. */
export const founderSources: { label: Localized; url: string }[] = [
  { label: { fr: 'Profil LinkedIn de Manuel Gourmand', en: 'Manuel Gourmand on LinkedIn' }, url: founderLinks.linkedin },
  {
    label: { fr: 'University of Buckingham : le MSc in Lean Enterprise et son partenariat avec Renault-Nissan Consulting (2014)', en: 'University of Buckingham: the MSc in Lean Enterprise and its partnership with Renault-Nissan Consulting (2014)' },
    url: 'https://www.buckingham.ac.uk/news/renault-nissan-consulting-is-university-of-buckinghams-new-partner-for-lean-enterprise',
  },
  {
    label: { fr: 'University of Buckingham : John Bicheno, professeur émérite, co-auteur de The Lean Toolbox', en: 'University of Buckingham: John Bicheno, Emeritus Professor, co-author of The Lean Toolbox' },
    url: 'https://www.buckingham.ac.uk/directory/mr-john-bicheno',
  },
  { label: { fr: 'ENIM, École nationale d’ingénieurs de Metz', en: 'ENIM, École nationale d’ingénieurs de Metz' }, url: 'https://enim.univ-lorraine.fr/' },
];
