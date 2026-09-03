# Paulie Yap Photography

A photography portfolio site: hero, about, a categorized gallery (film and
digital, grouped into landscape/street/portraits/etc.) with horizontal-scroll
rows, an expandable category view, and a click-to-open lightbox — plus a
contact form. Plain HTML/CSS/JS, no build step, no framework.

**Live site:** https://paulie-photography.netlify.app

## Structure

```
index.html    Page markup and content (copy, links, section layout)
styles.css    Design tokens and shared component classes (buttons, forms,
              nav, tags, etc.) — colors, type, spacing all live here as
              CSS custom properties (--color-*, --font-*, --space-*)
script.js     Gallery behavior: category data, horizontal scroll, the
              expanded category view, and the lightbox (open/close/prev/next,
              Escape and arrow-key navigation)
images/       Photos — see "Adding photos" below. Not tracked in git.
uploads/      Raw/original photo exports, if present. Not tracked in git.
```

## Adding or changing photos

Photo files live in `images/` but are **git-ignored on purpose** — only
`images/readme.txt` is tracked. This site is deployed straight from the local
folder (drag-and-drop or `netlify deploy`, see below), not built from what's
in GitHub, so photos never need to touch the repo.

- `images/hero.jpg` — the signature photo in the top hero section
- `images/portrait.jpg` — the photo in the About section
- Everything else — the gallery photos — is referenced by exact filename
  inside the `CATEGORIES` data at the top of `script.js`. Drop a file into
  `images/` under the exact name script.js expects and it appears
  automatically; no HTML edits needed. Any filename script.js references
  that isn't present in `images/` shows a small dashed placeholder box
  naming the missing file, instead of a broken image, so it's easy to see
  what's left to add.

To add a new photo to the gallery (not just replace an existing one), add its
filename to the relevant category array in `script.js` and drop the matching
file into `images/`.

## Running locally

No build step — just serve the folder and open it:

```
python -m http.server 8000
```

then visit `http://localhost:8000`.

## Deploying

This site deploys independently of GitHub — pushing to `main` does **not**
redeploy it. To publish:

```
netlify deploy --site 8d79e036-4de9-487f-bc81-e22b4d97107c --dir . --prod
```

(or drag-and-drop this folder onto the site's deploy page in the Netlify
dashboard). Requires being logged in via `netlify login` first. If Netlify
reports deploys are locked, unlock them under Site configuration → Build &
deploy → Continuous deployment, then deploy again.

## Contact form

The contact form posts to Netlify Forms (`data-netlify="true"` in
`index.html`) — submissions show up under the site's Forms tab in the
Netlify dashboard, no backend required.
