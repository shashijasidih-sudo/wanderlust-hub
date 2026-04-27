#!/usr/bin/env node
/**
 * validate-sitemap.mjs
 *
 * Build-time check: ensure public/sitemap.xml contains only the canonical
 * /thailand/<city>/... URLs for Thailand destinations and no legacy
 * /bangkok, /pattaya, /phuket, or /krabi variants slip back in.
 *
 * Exits with code 1 (failing the build) if any forbidden URL is found.
 */
import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const sitemapPath = resolve(__dirname, "..", "public", "sitemap.xml");

if (!existsSync(sitemapPath)) {
  console.error(`[validate-sitemap] sitemap.xml not found at ${sitemapPath}`);
  process.exit(1);
}

const xml = readFileSync(sitemapPath, "utf8");

// Extract every <loc>...</loc> URL.
const locRegex = /<loc>([^<]+)<\/loc>/g;
const urls = [];
for (const m of xml.matchAll(locRegex)) urls.push(m[1].trim());

if (urls.length === 0) {
  console.error("[validate-sitemap] No <loc> entries found in sitemap.xml");
  process.exit(1);
}

const FORBIDDEN_CITIES = ["bangkok", "pattaya", "phuket", "krabi"];
// A URL is forbidden when its path starts with /<city> or /<city>/...
// (i.e. NOT prefixed with /thailand/).
const forbiddenRegex = new RegExp(
  `^https?://[^/]+/(${FORBIDDEN_CITIES.join("|")})(/|$)`,
  "i"
);

const violations = urls.filter((u) => forbiddenRegex.test(u));

if (violations.length > 0) {
  console.error(
    `\n❌ [validate-sitemap] Found ${violations.length} legacy Thailand city URL(s) in sitemap.xml.`
  );
  console.error(
    `   These must use the canonical /thailand/<city>/... prefix:\n`
  );
  for (const v of violations) console.error(`   • ${v}`);
  console.error(
    `\n   Fix: replace each occurrence of "/(bangkok|pattaya|phuket|krabi)" with "/thailand/$1" in public/sitemap.xml.\n`
  );
  process.exit(1);
}

console.log(
  `✅ [validate-sitemap] ${urls.length} URLs checked — no legacy Thailand city paths found.`
);
