import type { Localized } from '@/i18n/utils';
import type { AnchorKey } from '@/i18n/routes';

/** Partenaires : logos et liens (le contenu détaillé est dans la page Partenaires). */
export interface Partner {
  id: string;
  name: string;
  anchor: AnchorKey;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  /** Afficher le nom à côté du logo (quand le logo est une simple icône). */
  showName?: boolean;
  /** Logo conçu pour un fond sombre. */
  dark?: boolean;
  url: string;
  urlLabel: string;
  short: Localized;
}

export const partners: Partner[] = [
  {
    id: 'factbird', name: 'Factbird', anchor: 'factbird',
    logo: '/images/partenaires/factbird-logo.png', logoWidth: 600, logoHeight: 99,
    url: 'https://www.factbird.com', urlLabel: 'factbird.com',
    short: { fr: 'TRS et énergie mesurés en temps réel', en: 'Real-time OEE and energy data' },
  },
  {
    id: 'enerlexia', name: 'EnerLexia', anchor: 'enerlexia',
    logo: '/images/partenaires/enerlexia-icone.png', logoWidth: 297, logoHeight: 307, showName: true,
    url: 'https://enerlexia.fr', urlLabel: 'enerlexia.fr',
    short: { fr: 'Autoconsommation collective et gestion énergétique', en: 'Collective self-consumption and energy management' },
  },
  {
    id: 'procid', name: 'Procid', anchor: 'procid',
    logo: '/images/partenaires/procid-logo.svg', logoWidth: 568, logoHeight: 62,
    url: 'https://fr.linkedin.com/company/procid', urlLabel: 'LinkedIn',
    short: { fr: 'Automatisme et informatique industrielle', en: 'Industrial automation and IT' },
  },
  {
    id: 'start-and-grow', name: 'Start & Grow', anchor: 'startGrow',
    logo: '/images/partenaires/start-and-grow-logo.png', logoWidth: 1979, logoHeight: 617,
    url: 'https://www.anienim.asso.fr/fr/group/start-grow/136', urlLabel: 'anienim.asso.fr',
    short: { fr: 'Réseau de dirigeants et créateurs ENIM-Alumni', en: 'ENIM-Alumni network of business leaders and founders' },
  },
  {
    id: 'farming-futura', name: 'Farming Futura', anchor: 'farmingFutura',
    logo: '/images/partenaires/farming-futura-logo.png', logoWidth: 1179, logoHeight: 195, dark: true,
    url: 'https://farmingfutura.org', urlLabel: 'farmingfutura.org',
    short: { fr: 'Agriculture Lean & Green et Ferme du Futur', en: 'Lean & Green farming and the Farm of the Future' },
  },
];
