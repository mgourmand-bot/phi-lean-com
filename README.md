# Phi-Lean – site web (www.phi-lean.com)

Site bilingue FR / EN (+ page PT/BR) du cabinet **Phi-Lean – The True *Philosophie* of Lean**.
Astro 7 (sortie 100 % statique), Tailwind CSS 4. Aucun cookie de mesure d'audience.

## Démarrer

```bash
npm install
cp .env.example .env   # puis compléter
npm run dev            # http://localhost:4321
npm run check          # vérification TypeScript / Astro
npm run build          # génère dist/ (site statique)
```

Le dossier `dist/` se déploie tel quel sur n'importe quel hébergeur statique (Netlify, Vercel, Cloudflare Pages, OVH...).
Déclarez les variables de `.env` dans l'interface de l'hébergeur.

## Menus

Définis une seule fois dans `src/config/navigation.ts` (header, menu mobile et footer les lisent).
Clic sur un menu : la page s'ouvre. Clic sur un sous-menu : on arrive directement sur la section.

| Menu | Page | Sous-menus |
|---|---|---|
| Conseil | `/conseil/` | Lean Flux Usine `#usine`, Lean Flux Supply Chain `#supply-chain` |
| Formation | `/formations/` | Cours et parcours `#catalogue`, Serious Games `/serious-games/` |
| Phi-Lean Press | `/publications/` | Livres `#livres`, Articles `#articles` |
| Partenaires | `/partenaires/` | Factbird OEE `#factbird`, EnerLexia, Procid, Start & Grow, Farming Futura |
| Le cabinet | `/a-propos/` | Notre approche, Le fondateur, Zones d'intervention, Rejoindre Phi-Lean |

Les URL anglaises sont sous `/en/` (`/en/consulting/`, `/en/partners/`...). Ancres traduites : `src/i18n/routes.ts`.

## Où modifier quoi

| Contenu | Fichier |
|---|---|
| E-mail, bases (Liverdun, Royal Tunbridge Wells), Calendly, Stripe | `src/config/site.ts` et `.env` |
| Maison Phi-Lean de l'accueil (textes des étages, sources au format APA) | `src/data/house.ts` ; dessin dans `src/components/MaisonPhiLean.astro` ; planche et sources en PDF : `public/downloads/la-maison-phi-lean.pdf` |
| Deux métiers, VSM expliquée, SCRM, Diagnostic VSM Express (prix, FAQ) | `src/data/offers.ts` |
| Serious games, prix, photos, vidéo | `src/data/games.ts` |
| Livres et articles | `src/data/publications.ts` |
| Partenaires (logos, liens) | `src/data/partners.ts` ; textes dans `src/views/PartnersPage.astro` |
| Pays de la carte | `src/data/presence.ts` |
| Études de cas (vide = section masquée) | `src/data/cases.ts` |
| Catalogue de formations | `src/data/trainings.ts` |

## Formulaires : envoi direct à manuel@phi-lean.com

Les formulaires passent par **FormSubmit** (formsubmit.co) : aucun compte, aucun serveur.

1. Une fois le site en ligne, envoyez-vous un premier message depuis la page Contact.
2. FormSubmit envoie un e-mail **« Activate Form »** à manuel@phi-lean.com : cliquez sur le bouton d'activation (une seule fois).
3. Tous les envois suivants arrivent directement dans votre boîte, sous forme de tableau.
4. Facultatif : FormSubmit fournit ensuite un alias aléatoire ; mettez-le dans `PUBLIC_FORM_RECIPIENT` pour ne plus afficher l'adresse dans le code de la page.

Le formulaire de contact s'envoie en arrière-plan (message de confirmation sur place). Le formulaire de candidature fait un envoi classique pour transmettre le CV en pièce jointe (10 Mo maximum au total), puis affiche la page `/merci/`.

## Calendly

Branché sur `https://calendly.com/manuel-phi-lean` (valeur par défaut dans `src/config/site.ts`, modifiable par `PUBLIC_CALENDLY_URL`). L'agenda ne se charge qu'au clic du visiteur (cookies Calendly). Si le lien est vidé, la page Contact propose un rendez-vous par e-mail pré-rédigé.

## Vidéo de la page Serious Games

La vidéo « Boulangerie » (The Lean Café) est hébergée sur le site : `public/videos/the-lean-cafe-boulangerie.mp4`, réencodée pour le web (720 x 720, H.264, environ 12 Mo au lieu de 82 Mo, lecture progressive). Elle ne se télécharge que si le visiteur appuie sur lecture.
Pour en changer : objet `gamesVideo` de `src/data/games.ts` (`mp4`, ou `linkedinEmbed` pour un post LinkedIn chargé au clic). Commande utilisée pour réencoder :
`ffmpeg -i source.mp4 -vf scale=720:720 -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p -c:a aac -b:a 96k -movflags +faststart sortie.mp4`

## Phi-Lean Press

- **Articles** : déposez chaque PDF dans `public/downloads/articles/` sous le nom indiqué dans `publications.ts`, et sa vignette de première page dans `public/images/articles/` (WebP, environ 340 x 481 px), puis renseignez `thumb`, `hook` (résumé d'accroche) et `pages`. Clic sur la vignette = téléchargement direct.
- **Livres** : clic sur la couverture = agrandissement. « Prendre le virage de l'IA » est annoncé « à paraître » jusqu'au 15 novembre 2026, puis bascule automatiquement sur « Acheter sur Amazon » au build suivant (recherche par ISBN tant que `amazonUrl` est vide).
- L'e-book « Les 15 effets indésirables du Lean » (ISBN 978-1-0654997-0-1) se télécharge depuis `public/downloads/livres/`.

Pour générer une vignette depuis un PDF : `pdftoppm -r 60 -png -singlefile -f 1 article.pdf vignette` puis conversion en WebP.

## Carte des zones d'intervention

Calculée au moment du build (d3-geo + données Natural Earth de `world-atlas`) : SVG statique, aucun script chez le visiteur. Bleu du logo pour les pays principaux, bleu clair pour les interventions ponctuelles ; zoom Europe avec les deux bases.

## Stripe

Payment Links Stripe (pages de paiement hébergées par Stripe) : créez un lien par produit (kits Beer Game et Lean Café, Print & Play à 89 €) et collez-les dans `.env`. Lien vide : le bouton renvoie vers le formulaire de contact pré-rempli.

## SEO

Title et description par page, canonical, hreflang FR / EN / x-default (+ PT), Open Graph (image avec logo et portrait), sitemap avec alternates, robots.txt, données structurées JSON-LD (ProfessionalService avec les deux bases, Person, Service, Offer, FAQPage, Course, Product, Book avec ISBN, Article).

## Reste à fournir ou à vérifier

1. Activation FormSubmit (voir plus haut).
2. Version complète du logo Farming Futura (celui reçu est rogné ; le fragment de slogan coupé a été effacé).
3. Lien Amazon exact du livre dès sa mise en vente.
4. Études de cas réelles (facultatif), dans `src/data/cases.ts`.
5. Mentions légales et confidentialité : zones surlignées (SIREN, adresse, hébergeur, médiateur, CGV).
6. Droit à l'image des personnes visibles sur les photos et la vidéo de sessions.
7. Liens Stripe des kits et Print & Play.
