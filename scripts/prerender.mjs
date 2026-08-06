#!/usr/bin/env node
/**
 * Postbuild static-prerender helper.
 *
 * For every URL in public/sitemap.xml, writes a copy of dist/index.html
 * to dist/<path>/index.html. This means:
 *
 *  - The hosting layer serves a real HTML file at every priority URL
 *    (no SPA fallback round-trip → faster TTFB, better CWV).
 *  - Crawlers and social previewers get a valid 200 + HTML at the
 *    canonical URL; Helmet then sets per-route head once React hydrates
 *    (Googlebot executes JS, so canonical/title/JSON-LD are seen).
 *
 * Run after `vite build`:  node scripts/prerender.mjs
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const DIST = resolve(ROOT, "dist");
const SITEMAP = resolve(ROOT, "public/sitemap.xml");
const INDEX = resolve(DIST, "index.html");

if (!existsSync(INDEX)) {
  console.error(`[prerender] dist/index.html not found — run 'vite build' first.`);
  process.exit(1);
}
if (!existsSync(SITEMAP)) {
  console.error(`[prerender] public/sitemap.xml not found.`);
  process.exit(1);
}

const html = readFileSync(INDEX, "utf8");
const xml = readFileSync(SITEMAP, "utf8");
const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

let written = 0;
for (const loc of locs) {
  let pathname;
  try { pathname = new URL(loc).pathname; } catch { continue; }
  if (pathname === "/" || pathname === "") continue;
  const trimmed = pathname.replace(/^\/+|\/+$/g, "");
  if (!trimmed) continue;
  const outDir = join(DIST, trimmed);
  const outFile = join(outDir, "index.html");
  // Don't overwrite real built assets/files
  if (existsSync(outFile)) continue;
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outFile, html);
  written++;
}

console.log(`[prerender] wrote ${written} static HTML files for ${locs.length} sitemap URLs.`);
