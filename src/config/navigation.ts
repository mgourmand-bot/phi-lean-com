/**
 * Menus principaux et sous-menus.
 * Clic sur un menu : ouvre la page. Clic sur un sous-menu : va directement
 * à la section concernée (ancre) ou à la page dédiée.
 * Le header, le menu mobile et le footer lisent tous cette même liste.
 */
import { routes, anchors, type Lang, type RouteKey, type AnchorKey } from '@/i18n/routes';
import type { Localized } from '@/i18n/utils';

export interface NavChild {
  label: Localized;
  hint?: Localized;
  route: RouteKey;
  anchor?: AnchorKey;
}
export interface NavItem {
  route: RouteKey;
  label: Localized;
  /** Pages qui « allument » ce menu dans le header. */
  activeFor: RouteKey[];
  children: NavChild[];
}

export const navigation: NavItem[] = [
  {
    route: 'consulting',
    label: { fr: 'Conseil', en: 'Consulting' },
    activeFor: ['consulting'],
    children: [
      { label: { fr: 'Lean Flux Usine', en: 'Lean Plant Flow' }, hint: { fr: 'VSM usine, flux tiré, TRS', en: 'Plant VSM, pull flow, OEE' }, route: 'consulting', anchor: 'usine' },
      { label: { fr: 'Lean Flux Supply Chain', en: 'Lean Supply Chain Flow' }, hint: { fr: 'Flux logistiques et gestion des risques', en: 'Logistics flows and risk management' }, route: 'consulting', anchor: 'supply' },
    ],
  },
  {
    route: 'training',
    label: { fr: 'Formation', en: 'Training' },
    activeFor: ['training', 'games'],
    children: [
      { label: { fr: 'Cours et parcours', en: 'Courses' }, hint: { fr: 'Formations opérationnelles sur vos cas', en: 'Hands-on courses on your own cases' }, route: 'training', anchor: 'catalogue' },
      { label: { fr: 'Serious Games', en: 'Serious Games' }, hint: { fr: 'Beer Game, Lean Café, CODIR de crise…', en: 'Beer Game, Lean Café, crisis board game…' }, route: 'games' },
    ],
  },
  {
    route: 'publications',
    label: { fr: 'Phi-Lean Press', en: 'Phi-Lean Press' },
    activeFor: ['publications'],
    children: [
      { label: { fr: 'Livres', en: 'Books' }, hint: { fr: 'Dont « Prendre le virage de l’IA »', en: 'Including “Prendre le virage de l’IA”' }, route: 'publications', anchor: 'books' },
      { label: { fr: 'Articles', en: 'Articles' }, hint: { fr: 'En téléchargement libre', en: 'Free to download' }, route: 'publications', anchor: 'articles' },
    ],
  },
  {
    route: 'partners',
    label: { fr: 'Partenaires', en: 'Partners' },
    activeFor: ['partners'],
    children: [
      { label: { fr: 'Factbird OEE', en: 'Factbird OEE' }, hint: { fr: 'TRS et énergie en temps réel', en: 'Real-time OEE and energy' }, route: 'partners', anchor: 'factbird' },
      { label: { fr: 'EnerLexia', en: 'EnerLexia' }, hint: { fr: 'Autoconsommation et gestion énergétique', en: 'Energy self-consumption and management' }, route: 'partners', anchor: 'enerlexia' },
      { label: { fr: 'Procid', en: 'Procid' }, hint: { fr: 'Automatisme et informatique industrielle', en: 'Industrial automation and IT' }, route: 'partners', anchor: 'procid' },
      { label: { fr: 'Start & Grow', en: 'Start & Grow' }, hint: { fr: 'Réseau de dirigeants ENIM-Alumni', en: 'ENIM-Alumni business leaders network' }, route: 'partners', anchor: 'startGrow' },
      { label: { fr: 'Farming Futura', en: 'Farming Futura' }, hint: { fr: 'Agriculture Lean & Green, Ferme du Futur', en: 'Lean & Green farming, Farm of the Future' }, route: 'partners', anchor: 'farmingFutura' },
    ],
  },
  {
    route: 'about',
    label: { fr: 'Le cabinet', en: 'The firm' },
    activeFor: ['about', 'careers'],
    children: [
      { label: { fr: 'Notre approche', en: 'Our approach' }, route: 'about', anchor: 'approach' },
      { label: { fr: 'Le fondateur', en: 'The founder' }, route: 'about', anchor: 'founder' },
      { label: { fr: "Zones d'intervention", en: 'Where we work' }, hint: { fr: 'France, Royaume-Uni et au-delà', en: 'France, the UK and beyond' }, route: 'about', anchor: 'presence' },
      { label: { fr: 'Rejoindre Phi-Lean', en: 'Join Phi-Lean' }, route: 'careers' },
    ],
  },
];

export function childHref(child: NavChild, lang: Lang): string {
  return routes[child.route][lang] + (child.anchor ? `#${anchors[child.anchor][lang]}` : '');
}
