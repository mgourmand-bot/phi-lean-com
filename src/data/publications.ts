import type { Localized } from '@/i18n/utils';

/**
 * PHI-LEAN PRESS – livres, white papers, articles scientifiques.
 *
 * À COMPLÉTER : les entrées marquées `placeholder: true` affichent
 * visiblement « Titre provisoire » / « Référence à compléter » sur le site,
 * pour qu'aucune ne parte en ligne par erreur. Passez-les à false une fois
 * le vrai titre, le lien Amazon et la couverture renseignés.
 *
 * Fichiers PDF : déposez-les dans public/ au chemin indiqué. Tant qu'un
 * fichier est absent, le site affiche « Bientôt disponible » au lieu d'un lien cassé.
 */

export interface Book {
  id: string;
  title: Localized;
  subtitle: Localized;
  summary: Localized;
  amazonUrl: Localized; // amazon.fr pour le FR, amazon.com pour l'EN si disponible
  cover?: string; // ex. '/images/livres/livre-1.jpg' (ratio 2:3)
  tone: 'blue' | 'turq' | 'sun';
  placeholder?: boolean;
}

export const books: Book[] = [
  {
    id: 'livre-1',
    title: { fr: 'Le Lean, une philosophie avant une boîte à outils', en: 'Lean, a philosophy before a toolbox' },
    subtitle: { fr: 'Titre provisoire', en: 'Working title' },
    summary: {
      fr: "Pourquoi tant de démarches Lean s'essoufflent après le départ du consultant, et comment ancrer durablement la culture du progrès.",
      en: 'Why so many Lean programmes fade once the consultant leaves, and how to anchor a lasting culture of improvement.',
    },
    amazonUrl: { fr: '', en: '' },
    tone: 'blue',
    placeholder: true,
  },
  {
    id: 'livre-2',
    title: { fr: 'Cartographier pour décider', en: 'Map to decide' },
    subtitle: { fr: 'Titre provisoire', en: 'Working title' },
    summary: {
      fr: 'Le Value Stream Mapping expliqué pas à pas, de l’usine aux bureaux, avec des cas réels et des gabarits prêts à l’emploi.',
      en: 'Value Stream Mapping step by step, from the plant to the office, with real cases and ready-to-use templates.',
    },
    amazonUrl: { fr: '', en: '' },
    tone: 'turq',
    placeholder: true,
  },
  {
    id: 'livre-3',
    title: { fr: 'Chaînes logistiques sous tension', en: 'Supply chains under strain' },
    subtitle: { fr: 'Titre provisoire', en: 'Working title' },
    summary: {
      fr: 'Identifier, mesurer et réduire les risques d’une supply chain mondialisée, sans sacrifier la logique de flux.',
      en: 'Identifying, measuring and reducing risk in a global supply chain without giving up flow thinking.',
    },
    amazonUrl: { fr: '', en: '' },
    tone: 'sun',
    placeholder: true,
  },
];

export interface WhitePaper {
  id: string;
  title: Localized;
  summary: Localized;
  pages: number;
  file: string; // chemin dans public/
}

export const whitePapers: WhitePaper[] = [
  {
    id: 'vsm-erreurs',
    title: { fr: 'VSM : sept erreurs qui faussent une cartographie', en: 'VSM: seven mistakes that distort a value stream map' },
    summary: {
      fr: 'Les pièges les plus fréquents observés en mission, et la manière de les éviter dès la marche terrain.',
      en: 'The most common pitfalls seen in the field, and how to avoid them from the very first gemba walk.',
    },
    pages: 14,
    file: '/downloads/white-papers/vsm-sept-erreurs.pdf',
  },
  {
    id: 'lean-office-mesure',
    title: { fr: 'Lean Office : mesurer un flux qui ne se voit pas', en: 'Lean Office: measuring a flow you cannot see' },
    summary: {
      fr: 'Méthode et gabarits pour mesurer le délai réel et le temps à valeur ajoutée d’un processus administratif.',
      en: 'Method and templates to measure the real lead time and value-added time of an office process.',
    },
    pages: 18,
    file: '/downloads/white-papers/lean-office-mesure.pdf',
  },
  {
    id: 'scrm-criticite',
    title: { fr: 'SCRM : grille de criticité fournisseurs', en: 'SCRM: supplier criticality grid' },
    summary: {
      fr: 'Une grille d’évaluation prête à l’emploi pour classer fournisseurs et articles selon leur impact et leur probabilité de rupture.',
      en: 'A ready-to-use grid to rank suppliers and items by impact and likelihood of disruption.',
    },
    pages: 12,
    file: '/downloads/white-papers/scrm-grille-criticite.pdf',
  },
];

export interface Paper {
  id: string;
  title: string; // titre dans la langue de publication
  authors: string;
  venue: string;
  year: number | null;
  abstract: Localized;
  file?: string; // PDF libre dans public/
  doi?: string;
  placeholder?: boolean;
}

export const papers: Paper[] = [
  {
    id: 'article-1',
    title: 'Titre de l’article à compléter (Lean et pérennité des démarches)',
    authors: 'M. Gourmand',
    venue: 'Revue ou conférence à compléter',
    year: null,
    abstract: {
      fr: 'Résumé à compléter : renseignez le titre exact, la revue, l’année et déposez le PDF auteur.',
      en: 'Abstract to be completed: add the exact title, journal, year and upload the author PDF.',
    },
    file: '/downloads/papers/article-1.pdf',
    placeholder: true,
  },
  {
    id: 'article-2',
    title: 'Titre de l’article à compléter (gestion des risques supply chain)',
    authors: 'M. Gourmand',
    venue: 'Revue ou conférence à compléter',
    year: null,
    abstract: {
      fr: 'Résumé à compléter : renseignez le titre exact, la revue, l’année et déposez le PDF auteur.',
      en: 'Abstract to be completed: add the exact title, journal, year and upload the author PDF.',
    },
    file: '/downloads/papers/article-2.pdf',
    placeholder: true,
  },
];
