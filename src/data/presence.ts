import type { Localized } from '@/i18n/utils';

/**
 * Zones d'intervention (carte du cabinet).
 * `atlas` = nom du pays dans les données Natural Earth (world-atlas).
 */
export interface Country {
  atlas: string;
  name: Localized;
}

/** Pays principaux : même bleu que le logo. */
export const primaryCountries: Country[] = [
  { atlas: 'France', name: { fr: 'France', en: 'France' } },
  { atlas: 'United Kingdom', name: { fr: 'Royaume-Uni', en: 'United Kingdom' } },
  { atlas: 'Ireland', name: { fr: 'Irlande', en: 'Ireland' } },
  { atlas: 'Belgium', name: { fr: 'Belgique', en: 'Belgium' } },
  { atlas: 'Luxembourg', name: { fr: 'Luxembourg', en: 'Luxembourg' } },
  { atlas: 'Switzerland', name: { fr: 'Suisse', en: 'Switzerland' } },
  { atlas: 'Portugal', name: { fr: 'Portugal', en: 'Portugal' } },
];

/** Interventions ponctuelles et déplacements : bleu plus clair. */
export const secondaryCountries: Country[] = [
  { atlas: 'Spain', name: { fr: 'Espagne', en: 'Spain' } },
  { atlas: 'Italy', name: { fr: 'Italie', en: 'Italy' } },
  { atlas: 'Germany', name: { fr: 'Allemagne', en: 'Germany' } },
  { atlas: 'Netherlands', name: { fr: 'Pays-Bas', en: 'Netherlands' } },
  { atlas: 'Brazil', name: { fr: 'Brésil', en: 'Brazil' } },
  { atlas: 'United States of America', name: { fr: 'États-Unis', en: 'United States' } },
  { atlas: 'Canada', name: { fr: 'Canada', en: 'Canada' } },
];
