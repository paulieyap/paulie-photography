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

**Pushing to `main` does not redeploy the site.** GitHub here is just a code
backup — it's disconnected from what's actually live. Deploys go out
separately, straight from this local folder (photos included, even though
they aren't in git).

In practice, I deploy by asking Claude Code to redeploy after a change. It
runs the Netlify CLI directly against this folder:

```
netlify deploy --dir . --prod
```

(the folder is already linked to the Netlify project via `netlify link`, done
once). That uploads whatever's currently on disk — code and photos — as the
new live version.

**Production deploys are normally locked** in the Netlify dashboard (Site
configuration → Build & deploy → Continuous deployment), on purpose — it's
what stops GitHub's own auto-publish (continuous deployment from the repo)
from firing and overwriting the live site with a photo-less build. Locked
also means the CLI command above won't go live either; it comes back as a
draft/preview URL instead. So to actually get a change live: unlock deploys,
redeploy, then lock them again once it's confirmed live.
