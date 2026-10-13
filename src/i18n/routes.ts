/**
 * Table de routage bilingue.
 * Chaque page est identifiée par une clé ; les slugs sont traduits
 * (meilleur référencement que /en/conseil). C'est la seule source de vérité
 * utilisée par le menu, le sélecteur de langue, les balises hreflang et le sitemap.
 */
export const languages = { fr: 'Français', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'fr';

export const hreflang: Record<Lang, string> = { fr: 'fr-FR', en: 'en-GB' };
export const ogLocale: Record<Lang, string> = { fr: 'fr_FR', en: 'en_GB' };

export const routes = {
  home: { fr: '/', en: '/en/' },
  consulting: { fr: '/conseil/', en: '/en/consulting/' },
  training: { fr: '/formations/', en: '/en/training/' },
  games: { fr: '/serious-games/', en: '/en/serious-games/' },
  publications: { fr: '/publications/', en: '/en/publications/' },
  about: { fr: '/a-propos/', en: '/en/about/' },
  careers: { fr: '/carrieres/', en: '/en/careers/' },
  contact: { fr: '/contact/', en: '/en/contact/' },
  legal: { fr: '/mentions-legales/', en: '/en/legal-notice/' },
  privacy: { fr: '/confidentialite/', en: '/en/privacy/' },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof routes;

/** Page portugaise unique (lien discret du footer). */
export const portugueseRoute = '/pt/';
