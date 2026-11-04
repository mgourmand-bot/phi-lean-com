/**
 * Slugs des pages détail (sans import : lu aussi par astro.config.mjs pour le sitemap).
 * - Éléments de la maison Phi-Lean : /maison/<fr>/ et /en/house/<en>/
 * - Livres et articles : /publications/<id>/ et /en/publications/<id>/ (même slug)
 */
export const houseSlugs = {
  cap: { fr: 'objectif-ultime', en: 'ultimate-goal' },
  resultat: { fr: 'profitables-aujourd-hui-et-demain', en: 'profitable-today-and-tomorrow' },
  methode: { fr: 'systems-thinking', en: 'systems-thinking' },
  capacite: { fr: 'capacite', en: 'capacity' },
  valeur: { fr: 'valeur-ajoutee', en: 'added-value' },
  socle: { fr: 'epanouis-et-competents', en: 'fulfilled-and-competent' },
} as const;

export type HouseElementId = keyof typeof houseSlugs;

export const houseBase = { fr: '/maison/', en: '/en/house/' } as const;
export const publicationsBase = { fr: '/publications/', en: '/en/publications/' } as const;

export function housePath(id: HouseElementId, lang: 'fr' | 'en'): string {
  return `${houseBase[lang]}${houseSlugs[id][lang]}/`;
}
export function publicationPath(id: string, lang: 'fr' | 'en'): string {
  return `${publicationsBase[lang]}${id}/`;
}
