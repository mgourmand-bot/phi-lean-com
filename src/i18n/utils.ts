import { ui, type UiKey } from './ui';
import { routes, defaultLang, type Lang, type RouteKey } from './routes';

/** Langue déduite de l'URL (/en/... = anglais, sinon français). */
export function getLangFromUrl(url: URL): Lang {
  return url.pathname.startsWith('/en/') || url.pathname === '/en' ? 'en' : defaultLang;
}

/** Traducteur de libellés d'interface. */
export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

/** URL localisée d'une page, avec ancre ou paramètres éventuels. */
export function path(key: RouteKey, lang: Lang, suffix = ''): string {
  return routes[key][lang] + suffix;
}

/** Choisit la valeur dans la langue voulue ({ fr, en }). */
export type Localized<T = string> = Record<Lang, T>;
export function l<T>(value: Localized<T>, lang: Lang): T {
  return value[lang];
}

/** Format monétaire (euros, sans décimales). */
export function formatPrice(amount: number, lang: Lang): string {
  return new Intl.NumberFormat(lang === 'fr' ? 'fr-FR' : 'en-GB', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(amount);
}
