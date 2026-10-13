import { existsSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Vérifie au moment du build qu'un fichier existe bien dans public/.
 * Sert à masquer proprement un lien tant que le PDF, la photo ou le logo
 * n'ont pas été déposés (pas de lien cassé en production).
 */
export function publicFileExists(publicPath: string | undefined | null): boolean {
  if (!publicPath || /^https?:\/\//.test(publicPath)) return Boolean(publicPath);
  return existsSync(join(process.cwd(), 'public', publicPath.replace(/^\//, '')));
}
