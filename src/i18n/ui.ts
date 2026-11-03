/**
 * Libellés de l'interface commune (header, footer, formulaires, boutons).
 * Les menus sont définis dans src/config/navigation.ts.
 */
export const ui = {
  fr: {
    'skip': 'Aller au contenu',
    'nav.menu': 'Menu',
    'nav.close': 'Fermer le menu',
    'nav.main': 'Navigation principale',
    'nav.contact': 'Contact',
    'nav.ai': 'Phi-Lean.ai',
    'nav.aiTitle': 'Écosystème IA et automatisation de Phi-Lean (nouvel onglet)',
    'cta.meeting': 'Prendre RDV',
    'cta.vsm': 'Demander un Diagnostic VSM Express',
    'cta.expertise': 'Voir nos deux métiers',
    'cta.contact': 'Nous écrire',
    'lang.label': 'Langue',
    'lang.switchTo': 'Read this page in English',
    'footer.pitch':
      "Conseil et formation en Lean : optimisation des flux de l'usine et de la supply chain, de la VSM à la gestion des risques.",
    'footer.offices': 'Nos bases',
    'footer.legal': 'Mentions légales',
    'footer.privacy': 'Confidentialité et RGPD',
    'footer.pt': 'Português (PT/BR)',
    'footer.rights': 'Tous droits réservés.',
    'form.required': 'obligatoire',
    'form.send': 'Envoyer',
    'form.sending': 'Envoi en cours…',
    'form.success': 'Merci, votre message est bien parti. Nous revenons vers vous sous 48 heures ouvrées.',
    'form.error': "L'envoi n'a pas abouti. Réessayez dans un instant, ou écrivez-nous directement à",
    'form.consent':
      "J'accepte que Phi-Lean utilise ces informations pour me recontacter. Aucune revente, aucune newsletter sans accord séparé.",
    'form.privacyLink': 'Politique de confidentialité',
    'calendly.title': 'Choisir un créneau',
    'calendly.notice':
      "L'agenda est fourni par Calendly, qui dépose ses propres cookies. Il ne se charge que si vous le demandez.",
    'calendly.load': "Afficher l'agenda",
    'calendly.open': 'Ouvrir Calendly dans un nouvel onglet',
    'calendly.fallback':
      'Proposez-nous deux ou trois créneaux par e-mail : nous confirmons le rendez-vous dans la journée ouvrée.',
    'calendly.fallbackCta': 'Proposer un créneau par e-mail',
    'price.ht': 'HT',
    'price.onQuote': 'Sur devis',
  },
  en: {
    'skip': 'Skip to content',
    'nav.menu': 'Menu',
    'nav.close': 'Close menu',
    'nav.main': 'Main navigation',
    'nav.contact': 'Contact',
    'nav.ai': 'Phi-Lean.ai',
    'nav.aiTitle': "Phi-Lean's AI and automation ecosystem (opens in a new tab)",
    'cta.meeting': 'Book a call',
    'cta.vsm': 'Request a VSM Express Diagnostic',
    'cta.expertise': 'See our two lines of work',
    'cta.contact': 'Write to us',
    'lang.label': 'Language',
    'lang.switchTo': 'Lire cette page en français',
    'footer.pitch':
      'Lean consulting and training: optimising plant and supply chain flows, from value stream mapping to risk management.',
    'footer.offices': 'Our bases',
    'footer.legal': 'Legal notice',
    'footer.privacy': 'Privacy and GDPR',
    'footer.pt': 'Português (PT/BR)',
    'footer.rights': 'All rights reserved.',
    'form.required': 'required',
    'form.send': 'Send',
    'form.sending': 'Sending…',
    'form.success': 'Thank you, your message has been sent. We will get back to you within two working days.',
    'form.error': 'The message could not be sent. Try again in a moment, or write to us directly at',
    'form.consent':
      'I agree that Phi-Lean may use this information to contact me. No resale, no newsletter without separate consent.',
    'form.privacyLink': 'Privacy policy',
    'calendly.title': 'Pick a time slot',
    'calendly.notice':
      'The calendar is provided by Calendly, which sets its own cookies. It only loads if you ask for it.',
    'calendly.load': 'Show the calendar',
    'calendly.open': 'Open Calendly in a new tab',
    'calendly.fallback': 'Suggest two or three time slots by e-mail: we will confirm the call within one working day.',
    'calendly.fallbackCta': 'Suggest a time slot by e-mail',
    'price.ht': 'excl. VAT',
    'price.onQuote': 'On quotation',
  },
} as const;

export type UiKey = keyof (typeof ui)['fr'];
