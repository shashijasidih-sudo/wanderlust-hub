import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import fallback from "@/data/seoFallbackMeta.json";

const root = resolve(__dirname, "../..");
const snapshot = JSON.parse(readFileSync(resolve(root, "scripts/seo-meta.json"), "utf8"));
const sitemap = readFileSync(resolve(root, "public/sitemap.xml"), "utf8");
const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
const blogPaths = new Set(
  [...readFileSync(resolve(root, "src/App.tsx"), "utf8").matchAll(/path="([^"]+)"/g)].map((m) => m[1]),
);

describe("initial-HTML SEO metadata", () => {
  it("every indexable sitemap page has its own title and description for prerendering", () => {
    const missing = paths.filter(
      (p) =>
        p !== "/" &&
        !snapshot.private.includes(p) &&
        !(fallback as Record<string, unknown>)[p] &&
        !snapshot.pages[p] &&
        !blogPaths.has(p),
    );
    expect(missing).toEqual([]);
  });

  it("all sitemap URLs use https://yellodae.com with a trailing slash", () => {
    const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    expect(locs.filter((l) => !l.startsWith("https://yellodae.com/") || !l.endsWith("/"))).toEqual([]);
  });
});
