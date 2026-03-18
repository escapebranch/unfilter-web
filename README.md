# unfilter-web

Landing page for **Unfilter**, built with Next.js App Router + Tailwind CSS + Framer Motion.

## Stack

- Next.js (static export)
- Tailwind CSS
- Framer Motion
- Geist font

## Run locally

```bash
npm install
npm run dev
```

## Build for GitHub Pages

```bash
npm run build
```

The static site is generated in `out/` and deployed with `.github/workflows/deploy.yml`.

`next.config.mjs` is configured with:

- `output: 'export'`
- `trailingSlash: true`
- dynamic `basePath`/`assetPrefix` from `GITHUB_REPOSITORY`
