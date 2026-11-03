import type { Localized } from '@/i18n/utils';

/**
 * ÉTUDES DE CAS – missions réelles uniquement.
 * La liste est vide : la section n'apparaît sur le site que lorsqu'au moins
 * un cas est renseigné. Modèle d'une entrée :
 *
 * {
 *   id: 'equipementier-auto',
 *   line: 'usine',                       // 'usine' ou 'supply'
 *   sector: { fr: '…', en: '…' },
 *   size: { fr: '…', en: '…' },
 *   challenge: { fr: '…', en: '…' },
 *   actions: { fr: ['…'], en: ['…'] },
 *   headline: { value: { fr: '-35 %', en: '-35%' }, label: { fr: "d'en-cours", en: 'WIP' } },
 *   results: [{ label: { fr: '…', en: '…' }, before: '…', after: '…' }],
 *   duration: { fr: '5 mois', en: '5 months' },
 * }
 */
export interface CaseStudy {
  id: string;
  line: 'usine' | 'supply';
  sector: Localized;
  size: Localized;
  challenge: Localized;
  actions: Localized<string[]>;
  headline: { value: Localized; label: Localized };
  results: { label: Localized; before: string; after: string }[];
  duration: Localized;
}

export const caseStudies: CaseStudy[] = [];
