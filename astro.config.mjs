// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { routes, hreflang } from './src/i18n/routes.ts';

const SITE = 'https://phi-lean.com';

/**
 * Associe chaque URL du sitemap à ses équivalents FR / EN
 * (les slugs sont traduits, l'option i18n native du plugin ne suffit donc pas).
 */
/** @param {import('@astrojs/sitemap').SitemapItem} item */
function withAlternates(item) {
  const path = new URL(item.url).pathname;
  const match = Object.values(routes).find((r) => r.fr === path || r.en === path);
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
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  integrations: [
    sitemap({
      filter: (page) => !/\/(404|merci)\/?$/.test(page),
      serialize: withAlternates,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
