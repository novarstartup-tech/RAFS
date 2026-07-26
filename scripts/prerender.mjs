/**
 * Pré-rendu (SSG) de la page d'accueil.
 *
 * Pourquoi : le site est un SPA React. Sans cette étape, le HTML servi ne
 * contient qu'un <div id="root"></div> vide et tout le contenu dépend de
 * l'exécution du JavaScript. Ce script génère le HTML complet au moment du
 * build, ce qui donne :
 *   - une indexation fiable et immédiate (Google, Bing, crawlers IA) ;
 *   - un First Contentful Paint / LCP nettement plus rapide ;
 *   - un site lisible même si le JS échoue ou est lent à charger.
 *
 * Fonctionnement : on construit un bundle SSR de <App />, on le rend en
 * chaîne de caractères, et on l'injecte dans le dist/index.html produit par
 * `vite build`. Le client hydrate ensuite ce HTML (voir src/main.jsx).
 */
import { readFile, writeFile, rm } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { build } from 'vite'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(scriptDir, '..')
const distHtml = path.join(root, 'dist', 'index.html')
const ssrOutDir = path.join(root, 'node_modules', '.cache', 'rafs-prerender')

const ROOT_PLACEHOLDER = '<div id="root"></div>'

async function main() {
  if (!existsSync(distHtml)) {
    throw new Error(`dist/index.html introuvable. Lancez "vite build" avant ${path.basename(fileURLToPath(import.meta.url))}.`)
  }

  // 1. Bundle SSR de l'application (assets résolus vers les mêmes URLs
  //    hachées que le build client — Vite hache d'après le contenu).
  await build({
    root,
    logLevel: 'warn',
    build: {
      ssr: path.join(root, 'src', 'prerender.jsx'),
      outDir: path.relative(root, ssrOutDir),
      emptyOutDir: true,
      copyPublicDir: false,
      sourcemap: false,
      minify: false,
      rollupOptions: {
        output: { entryFileNames: 'prerender.mjs' },
      },
    },
  })

  // 2. Rendu de l'application en HTML.
  const entry = path.join(ssrOutDir, 'prerender.mjs')
  const { prerender } = await import(pathToFileURL(entry).href)
  const { html } = await prerender()

  if (!html || !html.trim()) {
    throw new Error('Le pré-rendu a produit un HTML vide.')
  }

  // 3. Injection dans le HTML final.
  const template = await readFile(distHtml, 'utf8')
  if (!template.includes(ROOT_PLACEHOLDER)) {
    throw new Error(`"${ROOT_PLACEHOLDER}" introuvable dans dist/index.html : impossible d'injecter le pré-rendu.`)
  }

  const output = template.replace(ROOT_PLACEHOLDER, `<div id="root">${html}</div>`)
  await writeFile(distHtml, output, 'utf8')

  // 4. Nettoyage du bundle SSR temporaire (jamais servi au navigateur).
  await rm(ssrOutDir, { recursive: true, force: true })

  const kb = (Buffer.byteLength(html, 'utf8') / 1024).toFixed(1)
  console.log(`\n✓ Pré-rendu : ${kb} kB de HTML injectés dans dist/index.html`)
}

main().catch((error) => {
  console.error('\n✗ Échec du pré-rendu :', error)
  process.exitCode = 1
})
