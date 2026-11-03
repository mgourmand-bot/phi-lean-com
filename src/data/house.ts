import type { Localized } from '@/i18n/utils';

/**
 * LA MAISON PHI-LEAN
 * D'après la planche « La maison Phi-Lean » (version executive) et sa planche
 * « Références bibliographiques », issues du manifeste
 * « Make Europe Great Again, Economically » (Phi-Lean Press, Working Paper 25-01).
 * Les étages se lisent de la base au cap.
 * La planche et ses sources, en PDF : public/downloads/la-maison-phi-lean.pdf
 */

export type FloorId = 'socle' | 'leviers' | 'methode' | 'resultat' | 'cap';

/** Éléments du dessin auxquels se rattachent les sources (les leviers en comptent deux). */
export type ElementId = 'cap' | 'resultat' | 'methode' | 'capacite' | 'valeur' | 'socle';

export interface Floor {
  id: FloorId;
  label: Localized; // « Le cap »… (en capitales à l'écran)
  title: Localized; // la ligne de description de la planche
  text: Localized;
  refs: Localized; // forme courte, renvoie vers les sources complètes
  sourceId: ElementId; // ancre de la première source de l'étage
}

/** Segment de référence : texte normal, en italique (titres d'ouvrages, revues) ou traduit. */
export type RefSegment = string | { i: string } | { t: Localized };

export interface Reference {
  cite: RefSegment[]; // format APA, 7e édition
  note: Localized; // ce que l'on en retient
}

export interface SourceGroup {
  id: ElementId;
  element: Localized; // nom de l'élément tel qu'écrit dans la maison
  refs: Reference[];
}

export const house = {
  eyebrow: { fr: 'La maison Phi-Lean', en: 'The Phi-Lean house' },
  title: {
    fr: 'La performance durable se construit des équipes jusqu’à la raison d’être.',
    en: 'Lasting performance is built from the teams up to the reason for being.',
  },
  /** Textes inscrits dans le dessin. */
  drawing: {
    cap: { fr: 'Objectif ultime', en: 'Ultimate goal' },
    roof: { fr: 'Profitables aujourd’hui et demain', en: 'Profitable today and tomorrow' },
    beam: { fr: 'Systems Thinking', en: 'Systems Thinking' },
    pillarLeftHead: { fr: 'Servir plus', en: 'Serve more' },
    pillarLeft: { fr: '+ Capacité', en: '+ Capacity' },
    pillarRightHead: { fr: 'Servir mieux', en: 'Serve better' },
    pillarRight: { fr: '+ Valeur ajoutée', en: '+ Added value' },
    base: { fr: 'Épanouis et compétents', en: 'Fulfilled and competent' },
    lowerCost: { fr: '(moindres coûts)', en: '(lower costs)' },
  },
  /** Planche et sources en un PDF de deux pages (en français). */
  pdf: '/downloads/la-maison-phi-lean.pdf',
};

export const floors: Floor[] = [
  {
    id: 'socle',
    label: { fr: 'Le socle', en: 'The foundation' },
    title: { fr: 'Le bien-être et les compétences des équipes', en: 'The wellbeing and skills of the teams' },
    text: {
      fr: 'La partie que l’on saute parce qu’elle paraît « soft ». C’est pourtant la plus exigeante de la maison : des équipes engagées, qui fixent elles-mêmes leurs standards de travail, ont les compétences pour l’améliorer et savent se parler quand les enjeux sont élevés. Ce sont elles qui font durablement baisser les coûts, pas les coupes.',
      en: 'The part executives skip because it sounds soft. It is the hardest part of the house: engaged teams who set their own working standards, have the skills to improve the work and can talk things through when the stakes are high. They are the ones who bring costs down for good, not the cuts.',
    },
    refs: { fr: 'Devine (2023) ; Grenny et al. (2022)', en: 'Devine (2023); Grenny et al. (2022)' },
    sourceId: 'socle',
  },
  {
    id: 'leviers',
    label: { fr: 'Les leviers', en: 'The levers' },
    title: { fr: 'Servir plus de clients, et mieux les servir', en: 'Serve more customers, and serve them better' },
    text: {
      fr: 'Servir plus : de la capacité en plus, sans investissement lourd, en réorganisant les flux d’information et de produits. Servir mieux : de la valeur ajoutée et une qualité obtenue du premier coup, sans reprises. Dans les deux cas, la baisse des coûts est une conséquence, jamais la cible.',
      en: 'Serve more: extra capacity without heavy investment, by reorganising the flow of information and product. Serve better: added value and quality right first time, with no rework. Either way, lower cost is a consequence, never the target.',
    },
    refs: { fr: 'Capacité : Bicheno & Holweg (2016) ; qualité : Deming (1986)', en: 'Capacity: Bicheno & Holweg (2016); quality: Deming (1986)' },
    sourceId: 'capacite',
  },
  {
    id: 'methode',
    label: { fr: 'La méthode', en: 'The method' },
    title: { fr: 'Pensée systémique : le flux du système', en: 'Systems thinking: the flow of the system' },
    text: {
      fr: 'C’est le système qui gouverne la performance. On le conçoit à partir de la demande client et du flux, plutôt que par le commandement et le contrôle. Améliorer un pilier isolément déplace simplement le problème chez le voisin : on redessine le système, avec ceux qui le font tourner.',
      en: 'The system governs performance. You design it from customer demand and flow, rather than through command and control. Improving one pillar in isolation simply moves the problem next door: you redesign the system, with the people who run it.',
    },
    refs: { fr: 'Seddon (2003)', en: 'Seddon (2003)' },
    sourceId: 'methode',
  },
  {
    id: 'resultat',
    label: { fr: 'Le résultat', en: 'The result' },
    title: { fr: 'Gagner de l’argent, maintenant et à l’avenir', en: 'Make money, now and in the future' },
    text: {
      fr: 'Plutôt que de réduire ses dépenses, une entreprise doit faire croître ses revenus plus vite que ses dépenses. Être profitable aujourd’hui est facile ; l’être aujourd’hui et demain est une discipline.',
      en: 'Instead of shrinking its expenses, a company must grow its income faster than its expenses. Profitable today is easy; profitable today and tomorrow is a discipline.',
    },
    refs: { fr: 'Goldratt & Cox (1984)', en: 'Goldratt & Cox (1984)' },
    sourceId: 'resultat',
  },
  {
    id: 'cap',
    label: { fr: 'Le cap', en: 'The direction' },
    title: { fr: 'La raison d’être de l’organisation', en: 'The organisation’s reason for being' },
    text: {
      fr: 'Au-dessus du toit, la raison d’être : elle reste stable quand les stratégies changent, et elle se construit avec les équipes, assez concrète pour que chacun la voie depuis son poste de travail. La boucle qui la relie au socle le rappelle : ce sont les équipes qui y mènent.',
      en: 'Above the roof, the reason for being: it holds steady while strategies change, and it is built with the teams, concrete enough for everyone to see it from their workstation. The loop back to the foundation is the reminder: it is the teams who get you there.',
    },
    refs: { fr: 'Collins & Porras (1996) ; Devine (2023)', en: 'Collins & Porras (1996); Devine (2023)' },
    sourceId: 'cap',
  },
];

/**
 * LES SOURCES DE CHAQUE ÉLÉMENT (planche « Références bibliographiques »),
 * dans l'ordre de la planche : du cap vers le socle. Format APA, 7e édition.
 */
export const sources: SourceGroup[] = [
  {
    id: 'cap',
    element: { fr: 'Objectif ultime', en: 'Ultimate goal' },
    refs: [
      {
        cite: ['Collins, J. C., & Porras, J. I. (1996). Building your company’s vision. ', { i: 'Harvard Business Review, 74' }, '(5), 65–77.'],
        note: {
          fr: 'Une vision durable repose sur une idéologie centrale, valeurs et raison d’être, qui reste stable pendant que les stratégies évoluent.',
          en: 'A lasting vision rests on a core ideology, values and purpose, that stays stable while strategies evolve.',
        },
      },
      {
        cite: ['Devine, F. (2023). ', { i: 'Rapid mass engagement: Driving continuous improvement through employee culture creation' }, '. McGraw Hill.'],
        note: {
          fr: 'Une raison d’être élevée (Higher Purpose), construite avec les équipes, accélère l’engagement et le changement de culture.',
          en: 'A Higher Purpose, built with the teams, speeds up engagement and culture change.',
        },
      },
    ],
  },
  {
    id: 'resultat',
    element: { fr: 'Profitables aujourd’hui et demain', en: 'Profitable today and tomorrow' },
    refs: [
      {
        cite: ['Goldratt, E. M., & Cox, J. (1984). ', { i: 'The goal: A process of ongoing improvement' }, '. North River Press.'],
        note: {
          fr: 'Le but d’une entreprise : gagner de l’argent, aujourd’hui et demain.',
          en: 'The goal of a company: to make money, today and tomorrow.',
        },
      },
    ],
  },
  {
    id: 'methode',
    element: { fr: 'Systems Thinking', en: 'Systems Thinking' },
    refs: [
      {
        cite: ['Seddon, J. (2003). ', { i: 'Freedom from command and control: A better way to make the work work' }, '. Vanguard Education.'],
        note: {
          fr: 'Concevoir l’organisation comme un système, à partir de la demande client et du flux, plutôt que par le commandement-contrôle.',
          en: 'Design the organisation as a system, from customer demand and flow, rather than through command and control.',
        },
      },
    ],
  },
  {
    id: 'capacite',
    element: { fr: '+ Capacité', en: '+ Capacity' },
    refs: [
      {
        cite: ['Bicheno, J., & Holweg, M. (2016). ', { i: 'The lean toolbox: A handbook for lean transformation' }, ' (5th ed.). PICSIE Books.'],
        note: {
          fr: 'La boîte à outils du lean : flux, gestion de la capacité et de la variabilité, réduction des gaspillages.',
          en: 'The lean toolbox: flow, capacity and variability management, waste reduction.',
        },
      },
    ],
  },
  {
    id: 'valeur',
    element: { fr: '+ Valeur ajoutée (qualité)', en: '+ Added value (quality)' },
    refs: [
      {
        cite: ['Deming, W. E. (1986). ', { i: 'Out of the crisis' }, '. MIT Center for Advanced Engineering Study.'],
        note: {
          fr: 'La réaction en chaîne de Deming : améliorer la qualité fait baisser les coûts, augmente la productivité et permet de conquérir le marché.',
          en: 'Deming’s chain reaction: improving quality lowers costs, raises productivity and wins the market.',
        },
      },
    ],
  },
  {
    id: 'socle',
    element: { fr: 'Épanouis et compétents', en: 'Fulfilled and competent' },
    refs: [
      {
        cite: ['Devine, F. (2023). ', { i: 'Rapid mass engagement' }, ' ', { t: { fr: '(voir ci-dessus).', en: '(see above).' } }],
        note: {
          fr: 'Des équipes engagées, qui créent elles-mêmes leurs standards de comportement.',
          en: 'Engaged teams who create their own standards of behaviour.',
        },
      },
      {
        cite: ['Grenny, J., Patterson, K., McMillan, R., Switzler, A., & Gregory, E. (2022). ', { i: 'Crucial conversations: Tools for talking when stakes are high' }, ' (3rd ed.). McGraw Hill.'],
        note: {
          fr: 'Savoir dialoguer quand les enjeux sont élevés, les émotions fortes et les avis divergents.',
          en: 'Holding the conversation when the stakes are high, emotions run strong and opinions differ.',
        },
      },
    ],
  },
];
