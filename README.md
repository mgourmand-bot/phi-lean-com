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
| Conseil | `/conseil/` | Lean Flux Usine `#usine`, Lean Flux Supply Chain `#supply-chain`, Lean Flux Services `/conseil/lean-flux-services/`, Lean Supply Chain Risk Management `/conseil/lean-supply-chain-risk-management/` |
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
| Pages des six éléments de la maison (`/maison/…`, `/en/house/…`) : littérature, pratique, « Et chez vous ? » | `src/data/houseElements.ts` (adresses : `src/i18n/slugs.ts`) |
| Le fondateur : parcours, résultats, formation, liens de preuve | `src/data/founder.ts` (d'après le CV de novembre 2026) |
| Lean Flux Services / Lean Supply Chain Risk Management | `src/views/ServicesPage.astro`, `src/views/ScrmPage.astro` |
| Deux métiers, VSM expliquée, SCRM, Diagnostic VSM Express (prix, FAQ) | `src/data/offers.ts` |
| Serious games, prix, photos, vidéo | `src/data/games.ts` |
| Livres et articles, et leur page à partager (`/publications/<id>/`) | `src/data/publications.ts` |
| Partenaires (logos, liens) | `src/data/partners.ts` ; textes dans `src/views/PartnersPage.astro` |
| Pays de la carte | `src/data/presence.ts` |
| Études de cas (vide = section masquée) | `src/data/cases.ts` |
| Catalogue de formations | `src/data/trainings.ts` |

## Formulaires : envoi direct à manuel@phi-lean.com

Mode d'emploi pas à pas (activation, test, plan B, dépannage) : document « Formulaires du site Phi-Lean : mise en service pas à pas », fourni avec le site.

En résumé :

- Par défaut, les formulaires passent par **FormSubmit** (formsubmit.co) : aucun compte, aucune clé. **Rien n'arrive tant que le formulaire n'est pas activé** : après le premier envoi depuis le site en ligne, FormSubmit envoie un e-mail « Activate Form » à manuel@phi-lean.com (à chercher aussi dans les indésirables et la quarantaine). Un clic, une seule fois.
- Plan B, sans toucher au code : **Web3Forms**. Créer une clé gratuite sur web3forms.com, puis régler `PUBLIC_FORM_PROVIDER=web3forms` et `PUBLIC_WEB3FORMS_KEY=…`, et reconstruire. L'offre gratuite n'accepte pas les pièces jointes : le formulaire de candidature remplace alors le CV par un lien (avec l'offre Pro : `PUBLIC_WEB3FORMS_PRO=true`).
- En cas d'échec, le message d'erreur affiche en petit la réponse exacte du service (par exemple une activation manquante).

Le formulaire de contact s'envoie en arrière-plan (message de confirmation sur place). Le formulaire de candidature fait un envoi classique pour transmettre le CV en pièce jointe (5 Mo maximum), puis affiche la page `/merci/`.

## Calendly

Branché sur `https://calendly.com/manuel-phi-lean` (valeur par défaut dans `src/config/site.ts`, modifiable par `PUBLIC_CALENDLY_URL`). L'agenda ne se charge qu'au clic du visiteur (cookies Calendly). Si le lien est vidé, la page Contact propose un rendez-vous par e-mail pré-rédigé.

## Vidéo de la page Serious Games

La vidéo « Boulangerie » (The Lean Café) est hébergée sur le site : `public/videos/the-lean-cafe-boulangerie.mp4`, réencodée pour le web (720 x 720, H.264, environ 12 Mo au lieu de 82 Mo, lecture progressive). Elle ne se télécharge que si le visiteur appuie sur lecture.
Pour en changer : objet `gamesVideo` de `src/data/games.ts` (`mp4`, ou `linkedinEmbed` pour un post LinkedIn chargé au clic). Commande utilisée pour réencoder :
`ffmpeg -i source.mp4 -vf scale=720:720 -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p -c:a aac -b:a 96k -movflags +faststart sortie.mp4`

## Phi-Lean Press

- Chaque livre et chaque article a **sa page à partager** : `/publications/<id>/` et `/en/publications/<id>/` (couverture, date, accroche, points clés, extrait, aperçu des premières pages, boutons LinkedIn, e-mail et copie du lien). L'`id` est celui de `src/data/publications.ts`.
- **Ajouter un article** : déposer le PDF dans `public/downloads/articles/`, sa vignette de première page dans `public/images/articles/` (WebP 340 x 481 et @2x), les pages d'aperçu dans `public/images/apercus/<id>-p<n>.webp` (900 px de large), puis renseigner l'entrée dans `publications.ts` (`date`, `hook`, `takeaways`, `audience`, `excerpt`, `previews`, `pages`).
- **Image de partage** (LinkedIn, e-mail) : `public/og/publications/<id>.png`, 1200 x 630. À défaut, l'image générale du site est utilisée.
- **Dates** : `date: '2026-11'` s'affiche « Novembre 2026 » ; `'2026'` s'affiche « 2026 » (cas des trois épisodes « David, Goliath & l'IA », dont le mois exact reste à préciser).
- **Livres** : « Prendre le virage de l'IA » est annoncé « à paraître » jusqu'au 15 novembre 2026, puis bascule automatiquement sur « Acheter sur Amazon » au build suivant (recherche par ISBN tant que `amazonUrl` est vide). E-books gratuits : « Les 15 effets indésirables du Lean » (ISBN 978-1-0654997-0-1) et « Combien de jours tenez-vous ? » (ISBN 978-1-0654997-3-2), dans `public/downloads/livres/`.

Pour générer une vignette depuis un PDF : `pdftoppm -r 60 -png -singlefile -f 1 article.pdf vignette` puis conversion en WebP.

## Sitemap

`/sitemap-index.xml` renvoie vers `/sitemap-0.xml`, qui liste toutes les pages avec leurs versions FR / EN. Ouvert dans un navigateur, il s'affiche comme un tableau lisible grâce à `public/sitemap.xsl` ; les moteurs de recherche, eux, lisent le XML brut. (Sans cette feuille de style, certains navigateurs collent toutes les adresses à la suite : ce n'était qu'un problème d'affichage, le fichier était valide.)

## Carte des zones d'intervention

Calculée au moment du build (d3-geo + données Natural Earth de `world-atlas`) : SVG statique, aucun script chez le visiteur. Bleu du logo pour les pays principaux, bleu clair pour les interventions ponctuelles ; zoom Europe avec les deux bases.

## Stripe

Payment Links Stripe (pages de paiement hébergées par Stripe) : créez un lien par produit (kits Beer Game et Lean Café, Print & Play à 89 €) et collez-les dans `.env`. Lien vide : le bouton renvoie vers le formulaire de contact pré-rempli.

## SEO

Title et description par page, canonical, hreflang FR / EN / x-default (+ PT), Open Graph (image avec logo et portrait), sitemap avec alternates, robots.txt, données structurées JSON-LD (ProfessionalService avec les deux bases, Person, Service, Offer, FAQPage, Course, Product, Book avec ISBN, Article).

## Reste à fournir ou à vérifier

1. Activation FormSubmit (voir plus haut et le guide pas à pas).
2. Mois de publication des trois épisodes « David, Goliath & l'IA » (affichés « 2026 »).
3. Tarif éventuel du diagnostic de flux de service (page Lean Flux Services) et des offres Lean Supply Chain Risk Management (aujourd'hui : sur demande).
4. Version complète du logo Farming Futura (celui reçu est rogné ; le fragment de slogan coupé a été effacé).
5. Lien Amazon exact du livre dès sa mise en vente.
6. Études de cas réelles (facultatif), dans `src/data/cases.ts`.
7. Mentions légales et confidentialité : zones surlignées (SIREN, adresse, hébergeur, médiateur, CGV).
8. Droit à l'image des personnes visibles sur les photos et la vidéo de sessions.
9. Liens Stripe des kits et Print & Play.
