/**
 * Table de routage bilingue.
 * Chaque page est identifiée par une clé ; les slugs sont traduits.
 * Seule source de vérité pour le menu, le sélecteur de langue,
 * les balises hreflang et le sitemap.
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
  partners: { fr: '/partenaires/', en: '/en/partners/' },
  about: { fr: '/a-propos/', en: '/en/about/' },
  careers: { fr: '/carrieres/', en: '/en/careers/' },
  contact: { fr: '/contact/', en: '/en/contact/' },
  thanks: { fr: '/merci/', en: '/en/thank-you/' },
  legal: { fr: '/mentions-legales/', en: '/en/legal-notice/' },
  privacy: { fr: '/confidentialite/', en: '/en/privacy/' },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof routes;

/**
 * Ancres des sous-menus (identifiants de sections dans les pages).
 * Un sous-menu mène directement à la section correspondante.
 */
export const anchors = {
  usine: { fr: 'usine', en: 'plant' },
  supply: { fr: 'supply-chain', en: 'supply-chain' },
  vsmExpress: { fr: 'vsm-express', en: 'vsm-express' },
  catalogue: { fr: 'catalogue', en: 'catalogue' },
  books: { fr: 'livres', en: 'books' },
  articles: { fr: 'articles', en: 'articles' },
  factbird: { fr: 'factbird', en: 'factbird' },
  enerlexia: { fr: 'enerlexia', en: 'enerlexia' },
  procid: { fr: 'procid', en: 'procid' },
  startGrow: { fr: 'start-and-grow', en: 'start-and-grow' },
  farmingFutura: { fr: 'farming-futura', en: 'farming-futura' },
  approach: { fr: 'approche', en: 'approach' },
  founder: { fr: 'fondateur', en: 'founder' },
  presence: { fr: 'zones-d-intervention', en: 'where-we-work' },
  meeting: { fr: 'rdv', en: 'rdv' },
  form: { fr: 'formulaire', en: 'formulaire' },
} as const satisfies Record<string, Record<Lang, string>>;

export type AnchorKey = keyof typeof anchors;

/** Page portugaise unique (lien discret du footer). */
export const portugueseRoute = '/pt/';
