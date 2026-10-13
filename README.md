# Phi-Lean – site web (phi-lean.com)

Site vitrine bilingue FR / EN (+ page PT/BR) du cabinet **Phi-Lean – The True *Philosophie* of Lean**.
Astro 7 (sortie 100 % statique), Tailwind CSS 4, aucune dépendance JavaScript côté client hormis quelques scripts natifs (menu mobile, formulaires, Calendly).

## Démarrer

```bash
nvm use            # Node 22.12 ou plus récent
npm install
cp .env.example .env   # puis compléter
npm run dev        # http://localhost:4321
npm run check      # vérification TypeScript / Astro
npm run build      # génère dist/ (site statique)
npm run preview    # sert dist/ en local
```

Le dossier `dist/` se déploie tel quel sur n'importe quel hébergeur statique : Netlify, Vercel, Cloudflare Pages, OVH, o2switch...
Pensez à déclarer les variables de `.env` dans l'interface de l'hébergeur.

## Structure

```
phi-lean-site/
├── astro.config.mjs        Astro : URL du site, sitemap (avec hreflang FR/EN), Tailwind
├── tsconfig.json           alias @/ vers src/
├── .env.example            Formspree / webhooks, Calendly, Stripe Payment Links
├── public/
│   ├── brand/              logo officiel à déposer (phi-lean-logo.png)
│   ├── images/             portrait du fondateur, couvertures de livres
│   ├── downloads/          PDF des white papers et articles scientifiques
│   ├── og/                 image de partage réseaux sociaux (1200 x 630)
│   └── favicon.svg, robots.txt
└── src/
    ├── config/site.ts      configuration centrale (e-mail, URL, services tiers)
    ├── i18n/
    │   ├── routes.ts       table des URL FR/EN (slugs traduits) : source unique
    │   ├── ui.ts           libellés d'interface FR/EN
    │   └── utils.ts        helpers de traduction et de formatage
    ├── data/               TOUS les contenus chiffrés et listes (à valider)
    │   ├── proof.ts        chiffres clés + études de cas anonymisées
    │   ├── offers.ts       3 lignes de conseil + Diagnostic VSM Express (prix, FAQ)
    │   ├── trainings.ts    catalogue de formations
    │   ├── games.ts        serious games, options et prix
    │   └── publications.ts livres, white papers, articles
    ├── layouts/BaseLayout.astro   <head> SEO complet, JSON-LD, header, footer
    ├── components/
    │   ├── Header.astro, Footer.astro, LanguageSwitcher.astro
    │   ├── CaseStudyCard.astro, KpiTile.astro, VsmLadder.astro (visuel du hero)
    │   ├── VsmExpressOffer.astro, BookCard.astro, WhitePaperCard.astro
    │   ├── StripeButton.astro, CalendlyEmbed.astro, FounderBlock.astro, GameVisual.astro
    │   ├── forms/          FormShell (envoi AJAX), ContactForm, CareersForm
    │   ├── sections/       PageHero, CtaBand
    │   └── ui/             Icon (SVG), Logo
    ├── views/              une vue par page, partagée entre FR et EN (prop lang)
    ├── pages/              routes : fichiers FR à la racine, EN dans en/, PT dans pt/
    ├── middleware.ts       espaces insécables français automatiques (« : ; ? ! % »)
    └── styles/global.css   thème Tailwind v4 (@theme) = charte graphique Phi-Lean
```

### Plan du site

| Page | FR | EN |
|---|---|---|
| Accueil | `/` | `/en/` |
| Conseil & Diagnostic VSM | `/conseil/` | `/en/consulting/` |
| Formations | `/formations/` | `/en/training/` |
| Serious Games | `/serious-games/` | `/en/serious-games/` |
| Phi-Lean Press | `/publications/` | `/en/publications/` |
| Le cabinet | `/a-propos/` | `/en/about/` |
| Rejoindre Phi-Lean | `/carrieres/` | `/en/careers/` |
| Contact & RDV | `/contact/` | `/en/contact/` |
| Mentions légales | `/mentions-legales/` | `/en/legal-notice/` |
| Confidentialité | `/confidentialite/` | `/en/privacy/` |
| Português | `/pt/` | |

Ajouter une page : déclarer sa clé dans `src/i18n/routes.ts`, créer la vue dans `src/views/`, puis les deux fichiers fins dans `src/pages/` et `src/pages/en/`. Le menu, le sélecteur de langue, les balises hreflang et le sitemap suivent automatiquement.

## Charte graphique

Le thème Tailwind (`src/styles/global.css`) reprend la charte Phi-Lean : bleu `#215F9A` pour la structure, turquoise `#0F8A85` pour le positif, soleil `#D97706` pour la mise en avant, corail `#E4572E` pour les alertes, Arial partout. Composants signature transposés au web : liseré tricolore, tuiles chiffres clés à bande supérieure, encadrés à bandeau, tableaux à en-tête bleu zébrés, puces carrées turquoise, numéros bleus.

Classes utiles : `container-pl`, `section-title`, `lead`, `btn btn-primary | btn-secondary | btn-light`, `kpi-tile kpi-blue | kpi-turq | kpi-sun | kpi-coral`, `callout callout-blue | callout-turq | callout-sun`, `table-pl`, `list-square`, `list-steps`, `stripe-tri`.

Pas d'emoji (charte) : le lien `[ ⚡ Phi-Lean.ai ]` du menu utilise une icône éclair en SVG.

## Services tiers

**Formulaires (Formspree ou webhook).** Créez un formulaire par usage sur formspree.io (contact, candidatures, white papers) et collez leurs URL dans `.env`. Une URL de webhook Make / n8n / Zapier fonctionne aussi : les données partent en `multipart/form-data`. Sans JavaScript, le formulaire s'envoie classiquement. Anti-spam : champ piège `_gotcha`. Les pièces jointes (CV) nécessitent une offre Formspree payante ou un webhook.
Pré-remplissage depuis n'importe quel lien : `/contact/?sujet=vsm-express&detail=Texte#formulaire` (valeurs de `sujet` dans `ContactForm.astro`).

**White papers.** Après envoi réussi, le lien de téléchargement s'affiche dans la carte. Pour un accès strictement réservé, retirez le PDF de `public/` et faites envoyer le lien par e-mail par votre webhook (ou l'auto-réponse Formspree).

**Stripe Checkout.** Le site utilise des Payment Links Stripe (pages de paiement hébergées par Stripe) : aucune clé secrète, aucun serveur. Créez un lien par produit (kit physique avec collecte d'adresse de livraison, Print & Play avec redirection vers le téléchargement) et collez-les dans `.env`. Tant qu'un lien est vide, le bouton renvoie vers le formulaire de contact pré-rempli.

**Calendly.** L'agenda ne se charge qu'au clic du visiteur (Calendly dépose ses propres cookies), ce qui évite un bandeau cookies : le site n'en dépose aucun lui-même.

## SEO

Balises title / description par page, canonical, hreflang FR / EN / x-default (+ PT sur l'accueil), Open Graph et Twitter Card, sitemap XML avec alternates, robots.txt, données structurées JSON-LD (ProfessionalService, Person, Service + Offer, FAQPage, Course, Product, Book, ScholarlyArticle, ContactPage), HTML sémantique, aucun JavaScript bloquant, polices système (aucun chargement).

## Avant la mise en ligne

1. **Logo** : déposer `public/brand/phi-lean-logo.png` (PNG d'origine 706 x 315). Il remplace automatiquement le repère texte. Décliner ensuite le favicon à partir du logo.
2. **Chiffres et études de cas** (`src/data/proof.ts`) : remplacer les valeurs d'exemple par vos résultats réels.
3. **Prix** : Diagnostic VSM Express (`src/data/offers.ts`), kits et Print & Play (`src/data/games.ts`).
4. **Livres** (`src/data/publications.ts`) : vrais titres, liens Amazon, couvertures, puis `placeholder: false`. Même chose pour les articles scientifiques et leurs PDF.
5. **PDF** : déposer white papers et articles dans `public/downloads/...` aux chemins indiqués (sinon « Bientôt disponible » s'affiche).
6. **Portrait** : `public/images/manuel-gourmand.jpg` (4:5) et renseigner `site.founder.photo` et `site.founder.linkedin` dans `src/config/site.ts`.
7. **E-mail de contact** et URL Calendly dans `src/config/site.ts` / `.env`.
8. **Mentions légales et confidentialité** : compléter les zones surlignées (SIREN, adresse, hébergeur, médiateur, CGV) et faire relire.
9. **Formations** : intitulés, durées et formats dans `src/data/trainings.ts`.
