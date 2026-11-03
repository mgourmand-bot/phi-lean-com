/**
 * Configuration centrale du site.
 * Les URL de services tiers se règlent dans .env (voir .env.example) ;
 * les valeurs ci-dessous servent de repli.
 */
const env = import.meta.env;

export const site = {
  name: 'Phi-Lean',
  tagline: 'The True Philosophie of Lean', // orthographe volontaire
  url: 'https://www.phi-lean.com',
  aiUrl: 'https://phi-lean.ai',
  email: 'manuel@phi-lean.com',
  founder: {
    name: 'Manuel Gourmand',
    jobTitle: { fr: 'Fondateur de Phi-Lean, consultant et formateur Lean', en: 'Founder of Phi-Lean, Lean consultant and trainer' },
    linkedin: '', // À COMPLÉTER : URL du profil LinkedIn
    photo: '/images/manuel-gourmand.webp', // portrait 4:5, 800 x 1000
  },
  /** Deux bases d'intervention. */
  offices: [
    { city: 'Liverdun', region: { fr: 'Grand Est, France', en: 'Grand Est, France' }, country: 'FR', lat: 48.749, lon: 6.061 },
    { city: 'Royal Tunbridge Wells', region: { fr: 'Kent, Royaume-Uni', en: 'Kent, United Kingdom' }, country: 'GB', lat: 51.132, lon: 0.263 },
  ],
  languages: { fr: 'français, anglais et portugais', en: 'French, English and Portuguese' },

  /** Logo officiel (PNG d'origine, ne pas modifier). */
  logo: { src: '/brand/phi-lean-logo.png', width: 605, height: 285 },
  ogImage: '/og/phi-lean-og.png',

  /** Page Calendly de prise de rendez-vous. Vide = repli e-mail. */
  calendlyUrl: env.PUBLIC_CALENDLY_URL || 'https://calendly.com/manuel-phi-lean',

  /**
   * Formulaires : FormSubmit (formsubmit.co) envoie chaque formulaire par e-mail
   * à cette adresse, sans compte ni serveur. La toute première soumission déclenche
   * un e-mail d'activation à confirmer une seule fois (voir README).
   */
  forms: {
    recipient: env.PUBLIC_FORM_RECIPIENT || 'manuel@phi-lean.com',
  },

  /** Stripe Checkout via Payment Links : aucune clé secrète côté site. */
  stripe: {
    beerGameKit: env.PUBLIC_STRIPE_BEERGAME_KIT || '',
    beerGamePrintPlay: env.PUBLIC_STRIPE_BEERGAME_PRINTPLAY || '',
    leanCafeKit: env.PUBLIC_STRIPE_LEANCAFE_KIT || '',
    leanCafePrintPlay: env.PUBLIC_STRIPE_LEANCAFE_PRINTPLAY || '',
  },
} as const;

export type StripeProduct = keyof typeof site.stripe;

/** Points d'envoi FormSubmit. */
export const formEndpoints = {
  ajax: `https://formsubmit.co/ajax/${site.forms.recipient}`,
  post: `https://formsubmit.co/${site.forms.recipient}`,
};
