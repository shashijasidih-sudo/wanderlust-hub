# SEO Rendering Upgrade Plan

The site is a Vite + React Router SPA (~668 routes, 341 in the sitemap). Full SSR would require migrating to TanStack Start / Next, which would break the current build/preview/publish flow. The pragmatic, low-risk path that fully meets your goals is **build-time static prerendering** combined with **per-route head metadata via `react-helmet-async`**.

## Approach

1. **Per-route metadata layer** — Add `react-helmet-async` and wrap the app in `<HelmetProvider>`. Create a reusable `<Seo />` component that emits `title`, `description`, canonical, OG, Twitter, and JSON-LD. Use it on the priority page templates (Home, Destination Guides, Blog/Article, Activity/Tour, Transfer, Package). Today most pages share `index.html` head, so this gives Google unique metadata per URL.

2. **Static prerendering at build time** — Add `vite-plugin-prerender` (Puppeteer-based) wired to read URLs from `public/sitemap.xml` (~341 priority URLs). At `vite build`, each URL is rendered to HTML; the rendered file is written to `dist/<route>/index.html` with the fully-resolved DOM, Helmet head, and inline JSON-LD. Hosting then serves the static HTML directly for crawlers and first paint, then React hydrates.
   - Output: every prioritized URL gets a real HTML file with title, meta description, canonical, OG/Twitter tags, and JSON-LD already in the response — no JS required.
   - Crawl coverage: anchors in the prerendered HTML expose all internal links to crawlers.
   - Perf: first paint is the prerendered HTML; CWV improves (LCP/CLS) because content is in the initial response.

3. **Sitemap-driven route list** — `scripts/generate-sitemap.mjs` already produces the canonical URL list. We reuse it as the source of truth for prerender, so adding a new page only requires updating the sitemap generator (already automated).

4. **Fallbacks & safety**
   - Hydration mismatch guard: lazy-load any client-only widgets (CurrencyContext, cart) with `useEffect` so initial HTML matches.
   - Routes not in the prerender list still work as today (client-rendered SPA fallback).
   - `index.html` keeps sitewide defaults; `<Seo />` overrides per route.

## Technical Details

- Install: `react-helmet-async`, `@prerenderer/rollup-plugin`, `@prerenderer/renderer-puppeteer`.
- `src/main.tsx`: wrap `<App />` in `<HelmetProvider>`.
- `src/components/seo/Seo.tsx`: new component accepting `{ title, description, canonical, ogImage?, jsonLd? }`.
- `vite.config.ts`: add prerender plugin in production mode; route list loaded from `public/sitemap.xml`.
- Page edits: add `<Seo />` to ~6 template files (Home, `*DestinationGuides`, `BlogArticleLayout`, `TourBooking`, `TransferBooking`, package pages). Per-page values pulled from the existing data files (`*DestinationGuides.ts`, `toursData`, `transfersData`).
- Remove `<link rel="canonical">` from `index.html` (per-route Helmet owns it) to avoid duplicate canonicals.
- `package.json`: build still runs `vite build`; prerender hook fires during the bundle step. No deploy changes.
- Build time impact: ~341 pages × ~1.5s each ≈ 8–10 min on first build (Puppeteer). Acceptable for publish.

## Out of scope

- Full Node SSR / framework migration (would rewrite the project).
- Dynamic personalization in prerendered HTML (e.g. logged-in state) — these stay client-rendered post-hydration, same as today.

Confirm and I'll implement.
