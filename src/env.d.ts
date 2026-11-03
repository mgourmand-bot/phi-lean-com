/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_FORM_RECIPIENT?: string;
  readonly PUBLIC_CALENDLY_URL?: string;
  readonly PUBLIC_STRIPE_BEERGAME_KIT?: string;
  readonly PUBLIC_STRIPE_BEERGAME_PRINTPLAY?: string;
  readonly PUBLIC_STRIPE_LEANCAFE_KIT?: string;
  readonly PUBLIC_STRIPE_LEANCAFE_PRINTPLAY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
