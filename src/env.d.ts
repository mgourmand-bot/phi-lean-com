/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_FORM_CONTACT?: string;
  readonly PUBLIC_FORM_CAREERS?: string;
  readonly PUBLIC_FORM_WHITEPAPER?: string;
  readonly PUBLIC_CALENDLY_URL?: string;
  readonly PUBLIC_STRIPE_BEERGAME_KIT?: string;
  readonly PUBLIC_STRIPE_BEERGAME_PRINTPLAY?: string;
  readonly PUBLIC_STRIPE_COFFEESHOP_KIT?: string;
  readonly PUBLIC_STRIPE_COFFEESHOP_PRINTPLAY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
