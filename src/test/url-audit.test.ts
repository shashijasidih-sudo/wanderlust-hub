/// <reference types="node" />
// URL migration safeguards: routing rules only, not copy or presentation.
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const root = process.cwd();
const read = (path: string) => readFileSync(`${root}/${path}`, "utf8");
const app = read("src/App.tsx");
const apache = read("public/.htaccess");
const sitemap = read("public/sitemap.xml");
const preferredCourse = "/free-business-course/free-digital-marketing-course-for-businesses/";
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);

describe("Approved URL migration safeguards", () => {
  it("keeps only the preferred Digital Marketing course in the sitemap", () => {
    expect(urls.filter(url => url.includes("free-digital-marketing-course-for-businesses"))).toEqual([`https://yellodae.com${preferredCourse}`]);
  });
  it("permanently redirects the alternate course directly to the preferred URL", () => {
    expect(apache).toContain(`RedirectMatch 301 ^/free-digital-marketing-course-for-businesses/?$ ${preferredCourse}`);
  });
  it("deduplicates sitemap URLs and omits generation-time lastmod", () => {
    expect(new Set(urls).size).toBe(urls.length);
    expect(sitemap).not.toContain("<lastmod>");
  });
  it("preserves the direct Phuket old-to-new permanent redirect", () => {
    expect(apache).toContain("RedirectMatch 301 ^/thailand/phuket/?$ /thailand/phuket-activities/");
  });
  it("points existing Singapore pickup redirects directly to the slash URL", () => {
    expect(apache).toContain("RedirectMatch 301 ^/singapore/airport-pickup/?$ /singapore/singapore-airport-pickup/");
  });
  it("keeps issue 7 rental routes unchanged", () => {
    for (const city of ["bangkok", "phuket"]) {
      expect(app).toContain(`path="/thailand/${city}-activities/${city}-hotel-to-hotel-transfer-4-hours/"`);
    }
  });
  it("preserves Japan content by redirecting to its existing guide hub", () => {
    expect(apache).toContain("RedirectMatch 301 ^/japan/?$ /japan/destination-guides/");
    expect(app).toContain('path="/japan/destination-guides/"');
  });
});