#!/usr/bin/env node
/**
 * Generates public/sitemap.xml from <Route path="..."> declarations in src/App.tsx.
 *
 * Rules:
 *  - Includes only canonical routes (those that render a real page component).
 *  - Excludes redirect routes (element={<Navigate ... />}).
 *  - Excludes dynamic segments (paths containing ":" or "*").
 *  - Excludes admin / utility routes via EXCLUDE_PATTERNS below.
 *
 * Run via `npm run generate:sitemap` (also invoked automatically in prebuild).
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const APP_TSX = resolve(ROOT, "src/App.tsx");
const SITEMAP = resolve(ROOT, "public/sitemap.xml");
const ORIGIN = "https://yellodae.com";

const EXCLUDE_PATTERNS = [
  /^\/admin(\/|$)/,
  /^\/auth(\/|$)/,
  /^\/login$/,
  /^\/signup$/,
  /^\/profile$/,
  /^\/cart$/,
  /^\/checkout/,
  /^\/booking-/,
  /^\/payment-/,
  /^\/my-bookings$/,
  /^\/wishlist$/,
  /^\/quick-pay/,
];

// Priority + changefreq heuristics
const priorityFor = (p) => {
  if (p === "/") return "1.0";
  const depth = p.split("/").filter(Boolean).length;
  if (depth === 1) return "0.9";
  if (depth === 2) return "0.8";
  return "0.7";
};

function extractRoutes(src) {
  // Match <Route ... path="..." ... element={...} ... /> across newlines.
  const routeRe = /<Route\b[^>]*?path="([^"]+)"[^>]*?element=\{([\s\S]*?)\}[^>]*?\/>/g;
  const routes = [];
  let m;
  while ((m = routeRe.exec(src)) !== null) {
    const path = m[1];
    const element = m[2];
    routes.push({ path, element });
  }
  return routes;
}

function isCanonical(path, element) {
  if (!path.startsWith("/")) return false;
  if (path.includes(":") || path.includes("*")) return false;
  if (/<\s*Navigate\b/.test(element)) return false;
  if (EXCLUDE_PATTERNS.some((re) => re.test(path))) return false;
  return true;
}

const src = readFileSync(APP_TSX, "utf8");
const routes = extractRoutes(src);
const canonical = Array.from(
  new Set(routes.filter((r) => isCanonical(r.path, r.element)).map((r) => r.path))
).sort();

const today = new Date().toISOString().slice(0, 10);

const body = canonical
  .map(
    (p) =>
      `  <url><loc>${ORIGIN}${p}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>${priorityFor(
        p
      )}</priority></url>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

writeFileSync(SITEMAP, xml, "utf8");

console.log(
  `✅ [generate-sitemap] Wrote ${canonical.length} canonical URLs to public/sitemap.xml`
);
