import { defineMiddleware } from 'astro:middleware';

/**
 * Typographie française automatique sur les pages en français :
 * espace insécable avant « : ; ? ! % » et après « « », pour éviter
 * qu'un signe se retrouve seul en début de ligne.
 * Ne touche que le texte visible : balises, attributs, scripts et styles sont ignorés.
 * S'exécute au build (pages statiques) comme en développement.
 */
const NBSP = ' ';
const SKIP = /(<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>)/i;

function frenchTypography(html: string): string {
  return html
    .split(SKIP)
    .map((part) => {
      if (!part || part.startsWith('<')) return part;
      return part
        .replace(/ ([:;?!%»])/g, `${NBSP}$1`)
        .replace(/« /g, `«${NBSP}`);
    })
    .join('');
}

export const onRequest = defineMiddleware(async (_context, next) => {
  const response = await next();
  const type = response.headers.get('content-type') ?? '';
  if (!type.includes('text/html')) return response;

  const html = await response.text();
  const isFrench = /<html[^>]*\slang="fr"/i.test(html);
  return new Response(isFrench ? frenchTypography(html) : html, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });
});
