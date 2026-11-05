import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const sitemap = readFileSync(resolve(__dirname, "../../public/sitemap.xml"), "utf8");
const seo = JSON.parse(readFileSync(resolve(__dirname, "../../scripts/seo-meta.json"), "utf8"));

describe("sitemap excludes account/utility pages", () => {
  for (const p of ["/cart/", "/wishlist/", "/my-bookings/", "/user-bookings/", "/profile/", "/user-profile/", "/settings/", "/customer-information/", "/routes-health-check/"]) {
    it(`omits ${p} and marks it private`, () => {
      expect(sitemap).not.toContain(`<loc>https://yellodae.com${p}</loc>`);
      expect(seo.private).toContain(p);
    });
  }
});
