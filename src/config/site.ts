/**
 * Configuration centrale du site.
 * Les URL de services tiers se règlent dans .env (voir .env.example) ;
 * les valeurs ci-dessous servent de repli.
 *
 * Repère « À VALIDER » : valeur d'exemple à confirmer avant mise en ligne.
 */
const env = import.meta.env;

export const site = {
  name: 'Phi-Lean',
  tagline: 'The True Philosophie of Lean', // orthographe volontaire
  url: 'https://phi-lean.com',
  aiUrl: 'https://phi-lean.ai',
  email: 'contact@phi-lean.com', // À VALIDER
  founder: {
    name: 'Manuel Gourmand',
    jobTitle: { fr: 'Fondateur, consultant et formateur Lean', en: 'Founder, Lean consultant and trainer' },
    linkedin: '', // À COMPLÉTER : URL du profil LinkedIn
    photo: '', // À COMPLÉTER : ex. '/images/manuel-gourmand.jpg' (portrait 4:5, 800 x 1000 px)
  },
  /** Logo officiel : déposer le PNG d'origine (706 x 315) à cet emplacement. */
  logo: { src: '/brand/phi-lean-logo.png', width: 706, height: 315 },
  ogImage: '/og/phi-lean-og.png',

  calendlyUrl: env.PUBLIC_CALENDLY_URL || 'https://calendly.com/phi-lean/30min', // À VALIDER

  forms: {
    contact: env.PUBLIC_FORM_CONTACT || '',
    careers: env.PUBLIC_FORM_CAREERS || '',
    whitepaper: env.PUBLIC_FORM_WHITEPAPER || '',
  },

  /** Stripe Checkout via Payment Links : aucune clé secrète côté site. */
  stripe: {
    beerGameKit: env.PUBLIC_STRIPE_BEERGAME_KIT || '',
    beerGamePrintPlay: env.PUBLIC_STRIPE_BEERGAME_PRINTPLAY || '',
    coffeeShopKit: env.PUBLIC_STRIPE_COFFEESHOP_KIT || '',
    coffeeShopPrintPlay: env.PUBLIC_STRIPE_COFFEESHOP_PRINTPLAY || '',
  },
} as const;

export type StripeProduct = keyof typeof site.stripe;
