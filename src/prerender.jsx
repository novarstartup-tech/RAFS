import { renderToString } from 'react-dom/server';
import App from './App.jsx';

/**
 * Exécuté au moment du build par vite-prerender-plugin.
 * Le HTML retourné est injecté dans #root de dist/index.html, ce qui rend
 * tout le contenu du site lisible sans exécution de JavaScript (Google,
 * Bing, crawlers IA, aperçus de partage, lecteurs d'écran).
 */
export function prerender() {
  return { html: renderToString(<App />) };
}
