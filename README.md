# Portfolio Website via Netlify

A photography portfolio site built with the hellp of Claude (Design and Code) and Netlify

**Live site:** https://paulie-photography.netlify.app

## Structure

```
index.html    Page markup and content
styles.css    Design tokens and shared component classes (colors, type,
              spacing — as CSS custom properties: --color-*, --font-*, --space-*)
script.js     Gallery behavior: category data, horizontal scroll, the
              expanded category view, and the lightbox
images/       Photos. Not tracked in git — see below.
```

## Adding or changing photos

Photo files go in `images/` but aren't tracked in git (only
`images/readme.txt` is) — the site deploys from the local folder directly, so
photos never need to be pushed.

- `images/hero.jpg` — hero photo
- `images/portrait.jpg` — About section photo
- Gallery photos — referenced by exact filename in the `CATEGORIES` list at
  the top of `script.js`. Drop a matching file into `images/` and it appears
  automatically. A missing file shows a small placeholder box instead of a
  broken image.

## Running locally

```
python -m http.server 8000
```

## Deploying

Deploys independently of GitHub — pushing to `main` does not redeploy the
site. Either drag-and-drop this folder onto the site's deploy page in the
Netlify dashboard, or run `netlify deploy --prod` from a linked project
(`netlify login`, then `netlify link`, once).
