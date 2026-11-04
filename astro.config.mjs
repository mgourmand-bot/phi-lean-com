// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { routes, hreflang } from './src/i18n/routes.ts';
import { houseSlugs, houseBase, publicationsBase } from './src/i18n/slugs.ts';

const SITE = 'https://www.phi-lean.com';

/**
 * Associe chaque URL du sitemap à ses équivalents FR / EN
 * (les slugs sont traduits, l'option i18n native du plugin ne suffit donc pas).
 * @param {import('@astrojs/sitemap').SitemapItem} item
 */
function withAlternates(item) {
  const path = new URL(item.url).pathname;
  /** @type {{ fr: string, en: string }[]} */
  const pairs = [
    ...Object.values(routes),
    ...Object.values(houseSlugs).map((s) => ({ fr: `${houseBase.fr}${s.fr}/`, en: `${houseBase.en}${s.en}/` })),
  ];
  let match = pairs.find((r) => r.fr === path || r.en === path);
  // Livres et articles : même slug dans les deux langues
  const pub = path.match(/^(?:\/en)?\/publications\/([^/]+)\/$/);
  if (!match && pub) match = { fr: `${publicationsBase.fr}${pub[1]}/`, en: `${publicationsBase.en}${pub[1]}/` };
  if (!match) return item;
  return {
    ...item,
    links: [
      { lang: hreflang.fr, url: SITE + match.fr },
      { lang: hreflang.en, url: SITE + match.en },
      { lang: 'x-default', url: SITE + match.fr },
    ],
  };
}

export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      // Feuille de style : le sitemap s'affiche comme un tableau lisible dans un navigateur
      xslURL: '/sitemap.xsl',
      filter: (page) => !/\/(404|merci|thank-you)\/?$/.test(page),
      serialize: withAlternates,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
