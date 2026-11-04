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
    activeFor: ['consulting', 'services', 'scrm'],
    children: [
      { label: { fr: 'Lean Flux Usine', en: 'Lean Plant Flow' }, hint: { fr: 'VSM usine, flux tiré, TRS', en: 'Plant VSM, pull flow, OEE' }, route: 'consulting', anchor: 'usine' },
      { label: { fr: 'Lean Flux Supply Chain', en: 'Lean Supply Chain Flow' }, hint: { fr: 'Flux logistiques, du fournisseur au client', en: 'Logistics flows, from supplier to customer' }, route: 'consulting', anchor: 'supply' },
      { label: { fr: 'Lean Flux Services', en: 'Lean Services Flow' }, hint: { fr: 'Entreprises de service et fonctions support', en: 'Service businesses and support functions' }, route: 'services' },
      { label: { fr: 'Lean Supply Chain Risk Management', en: 'Lean Supply Chain Risk Management' }, hint: { fr: 'Combien de jours tenez-vous ? PME et grands groupes', en: 'How many days can you last? SMEs and large groups' }, route: 'scrm' },
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
      { label: { fr: 'Livres', en: 'Books' }, hint: { fr: 'Dont deux e-books gratuits', en: 'Including two free e-books' }, route: 'publications', anchor: 'books' },
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
      { label: { fr: 'Procid', en: 'Procid' }, hint: { fr: 'Vision industrielle, IA et traçabilité', en: 'Machine vision, AI and traceability' }, route: 'partners', anchor: 'procid' },
      { label: { fr: 'Start & Grow', en: 'Start & Grow' }, hint: { fr: 'Réseau de dirigeants ENIM-Alumni', en: 'ENIM-Alumni business leaders network' }, route: 'partners', anchor: 'startGrow' },
      { label: { fr: 'Farming Futura', en: 'Farming Futura' }, hint: { fr: 'Agriculture Lean & Green, Ferme du Futur', en: 'Lean & Green farming, Farm of the Future' }, route: 'partners', anchor: 'farmingFutura' },
    ],
  },
  {
    route: 'about',
    label: { fr: 'Le cabinet', en: 'The firm' },
    activeFor: ['about', 'careers', 'house'],
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
