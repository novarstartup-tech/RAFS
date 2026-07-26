# RAFS — Réseau pour l'Autonomie des Femmes du Sankaran

Site vitrine de l'ONG RAFS (Faranah, Guinée).
Production : **https://rafs-gn.org**

Stack : React 19 + Vite, page unique, hébergement Vercel.

## Commandes

```bash
npm install
npm run dev       # serveur de développement
npm run build     # build de production + pré-rendu
npm run preview   # sert le build de production en local
npm run lint
```

## Pré-rendu (SSG)

`npm run build` enchaîne deux étapes :

1. `vite build` → bundle client dans `dist/`
2. `node scripts/prerender.mjs` → rend `<App />` en HTML au moment du build et
   l'injecte dans `dist/index.html`

Sans cette seconde étape, le HTML servi ne contiendrait qu'un `<div id="root">`
vide : tout le contenu dépendrait de l'exécution du JavaScript. Le pré-rendu
apporte une indexation fiable (Google, Bing, crawlers IA), un affichage
beaucoup plus rapide, et un site lisible même si le JS échoue.

Côté client, `src/main.jsx` **hydrate** ce HTML au lieu de le reconstruire.

> Conséquence : les composants doivent produire le même rendu au build et au
> premier rendu client. Éviter d'initialiser un état à partir de `window`, d'un
> timer ou d'une valeur aléatoire — sinon React signale une erreur
> d'hydratation. Les `useEffect` ne s'exécutent pas au pré-rendu, ce qui est le
> comportement attendu pour les carrousels.

## Référencement — où se trouve quoi

| Élément | Fichier |
| --- | --- |
| Title, meta description, Open Graph, Twitter Card | `index.html` |
| Données structurées JSON-LD (NGO, WebSite, WebPage, Course) | `index.html` |
| URL canonique | `index.html` (`<link rel="canonical">`) |
| robots.txt / sitemap.xml | `public/` |
| Icônes, manifeste PWA | `public/` |
| Redirections, cache, en-têtes de sécurité | `vercel.json` |

Toute URL absolue du site pointe vers `https://rafs-gn.org` (sans `www`).
En cas de changement de domaine, mettre à jour : `index.html`,
`public/robots.txt`, `public/sitemap.xml`, `vercel.json`.

Après chaque mise à jour de contenu, penser à actualiser `<lastmod>` dans
`public/sitemap.xml`.

## Icônes

Les icônes de `public/` sont dérivées de `src/assets/rafs-logo.jpg` (200×200).
Un logo vectoriel ou ≥ 512 px donnerait un résultat plus net — à remplacer dès
qu'il sera disponible.
