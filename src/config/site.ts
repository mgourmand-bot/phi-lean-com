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
    jobTitle: { fr: 'Fondateur de Phi-Lean, consultant en excellence opérationnelle', en: 'Founder of Phi-Lean, operational excellence consultant' },
    linkedin: 'https://www.linkedin.com/in/manuelgourmand/',
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
   * Formulaires : envoi par e-mail sans serveur, via l'un de deux services.
   * - « formsubmit » (par défaut) : aucun compte ; la toute première soumission
   *   déclenche un e-mail d'activation à confirmer une seule fois.
   * - « web3forms » : clé d'accès gratuite (250 envois par mois), à coller dans
   *   PUBLIC_WEB3FORMS_KEY ; pas de pièce jointe en offre gratuite.
   * Mode d'emploi pas à pas : README, section « Formulaires ».
   */
  forms: {
    provider: (env.PUBLIC_FORM_PROVIDER === 'web3forms' && env.PUBLIC_WEB3FORMS_KEY ? 'web3forms' : 'formsubmit') as 'formsubmit' | 'web3forms',
    recipient: env.PUBLIC_FORM_RECIPIENT || 'manuel@phi-lean.com',
    web3formsKey: env.PUBLIC_WEB3FORMS_KEY || '',
    /** Pièces jointes possibles : FormSubmit, ou Web3Forms Pro (PUBLIC_WEB3FORMS_PRO=true). */
    attachments: env.PUBLIC_FORM_PROVIDER !== 'web3forms' || !env.PUBLIC_WEB3FORMS_KEY || env.PUBLIC_WEB3FORMS_PRO === 'true',
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

/** Points d'envoi du service de formulaires choisi. */
export const formEndpoints =
  site.forms.provider === 'web3forms'
    ? { ajax: 'https://api.web3forms.com/submit', post: 'https://api.web3forms.com/submit' }
    : { ajax: `https://formsubmit.co/ajax/${site.forms.recipient}`, post: `https://formsubmit.co/${site.forms.recipient}` };
