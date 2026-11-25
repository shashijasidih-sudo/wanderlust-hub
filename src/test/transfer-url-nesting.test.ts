import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

/**
 * Transfer detail pages are nested under their transfers listing, e.g.
 * /thailand/bangkok-airport-transfers/don-mueang-airport-to-bangkok-hotel-transfer/
 * The previous flat URL keeps working through a 301 / <Navigate replace> redirect.
 */
const TRANSFER_URLS: ReadonlyArray<readonly [string, string]> = [
  ["/dubai/airport-dropoff-zone1/", "/dubai/budget-airport-transfers/airport-dropoff-zone1/"],
  ["/dubai/airport-dropoff-zone2/", "/dubai/budget-airport-transfers/airport-dropoff-zone2/"],
  ["/dubai/airport-dropoff-zone3/", "/dubai/budget-airport-transfers/airport-dropoff-zone3/"],
  ["/dubai/airport-dropoff-zone4/", "/dubai/budget-airport-transfers/airport-dropoff-zone4/"],
  ["/dubai/airport-dropoff-zone5/", "/dubai/budget-airport-transfers/airport-dropoff-zone5/"],
  ["/dubai/airport-pickup-zone1/", "/dubai/budget-airport-transfers/airport-pickup-zone1/"],
  ["/dubai/airport-pickup-zone2/", "/dubai/budget-airport-transfers/airport-pickup-zone2/"],
  ["/dubai/airport-pickup-zone3/", "/dubai/budget-airport-transfers/airport-pickup-zone3/"],
  ["/dubai/airport-pickup-zone4/", "/dubai/budget-airport-transfers/airport-pickup-zone4/"],
  ["/dubai/airport-pickup-zone5/", "/dubai/budget-airport-transfers/airport-pickup-zone5/"],
  ["/singapore/singapore-airport-dropoff/", "/singapore/budget-airport-transfers/singapore-airport-dropoff/"],
  ["/singapore/singapore-airport-night-pickup/", "/singapore/budget-airport-transfers/singapore-airport-night-pickup/"],
  ["/singapore/singapore-airport-pickup/", "/singapore/budget-airport-transfers/singapore-airport-pickup/"],
  ["/thailand/bangkok/bangkok-city-tour-to-pattaya-hotel-transfer/", "/thailand/bangkok-airport-transfers/bangkok-city-tour-to-pattaya-hotel-transfer/"],
  ["/thailand/bangkok/bangkok-hotel-safari-world-to-don-mueang-airport-transfer/", "/thailand/bangkok-airport-transfers/bangkok-hotel-safari-world-to-don-mueang-airport-transfer/"],
  ["/thailand/bangkok/bangkok-hotel-safari-world-to-pattaya-hotel-transfer/", "/thailand/bangkok-airport-transfers/bangkok-hotel-safari-world-to-pattaya-hotel-transfer/"],
  ["/thailand/bangkok/bangkok-hotel-safari-world-to-suvarnabhumi-airport-transfer/", "/thailand/bangkok-airport-transfers/bangkok-hotel-safari-world-to-suvarnabhumi-airport-transfer/"],
  ["/thailand/bangkok/bangkok-hotel-to-don-mueang-airport-transfer/", "/thailand/bangkok-airport-transfers/bangkok-hotel-to-don-mueang-airport-transfer/"],
  ["/thailand/bangkok/bangkok-hotel-to-pattaya-hotel-transfer/", "/thailand/bangkok-airport-transfers/bangkok-hotel-to-pattaya-hotel-transfer/"],
  ["/thailand/bangkok/bangkok-hotel-to-suvarnabhumi-airport-transfer/", "/thailand/bangkok-airport-transfers/bangkok-hotel-to-suvarnabhumi-airport-transfer/"],
  ["/thailand/bangkok/bangkok-hotel-two-temple-tour-to-don-mueang-airport-transfer/", "/thailand/bangkok-airport-transfers/bangkok-hotel-two-temple-tour-to-don-mueang-airport-transfer/"],
  ["/thailand/bangkok/bangkok-hotel-two-temple-tour-to-suvarnabhumi-airport-transfer/", "/thailand/bangkok-airport-transfers/bangkok-hotel-two-temple-tour-to-suvarnabhumi-airport-transfer/"],
  ["/thailand/bangkok/don-mueang-airport-tiger-topia-to-pattaya-hotel-transfer/", "/thailand/pattaya-transfers/don-mueang-airport-tiger-topia-to-pattaya-hotel-transfer/"],
  ["/thailand/bangkok/don-mueang-airport-to-bangkok-hotel-transfer/", "/thailand/bangkok-airport-transfers/don-mueang-airport-to-bangkok-hotel-transfer/"],
  ["/thailand/bangkok/don-mueang-airport-to-pattaya-hotel-transfer/", "/thailand/pattaya-transfers/don-mueang-airport-to-pattaya-hotel-transfer/"],
  ["/thailand/bangkok/suvarnabhumi-airport-tiger-topia-to-pattaya-hotel-transfer/", "/thailand/pattaya-transfers/suvarnabhumi-airport-tiger-topia-to-pattaya-hotel-transfer/"],
  ["/thailand/bangkok/suvarnabhumi-airport-to-bangkok-hotel-transfer/", "/thailand/bangkok-airport-transfers/suvarnabhumi-airport-to-bangkok-hotel-transfer/"],
  ["/thailand/bangkok/suvarnabhumi-airport-to-pattaya-hotel-transfer/", "/thailand/pattaya-transfers/suvarnabhumi-airport-to-pattaya-hotel-transfer/"],
  ["/thailand/bangkok/tiger-topia-sriracha-zoo-to-pattaya-hotel-transfer/", "/thailand/bangkok-airport-transfers/tiger-topia-sriracha-zoo-to-pattaya-hotel-transfer/"],
  ["/thailand/krabi/krabi-airport-to-ao-nang-hotel-transfer/", "/thailand/krabi-airport-transfers/krabi-airport-to-ao-nang-hotel-transfer/"],
  ["/thailand/krabi/krabi-airport-to-phuket-hotel-transfer/", "/thailand/krabi-airport-transfers/krabi-airport-to-phuket-hotel-transfer/"],
  ["/thailand/krabi/krabi-hotel-to-krabi-airport-transfer/", "/thailand/krabi-airport-transfers/krabi-hotel-to-krabi-airport-transfer/"],
  ["/thailand/krabi/krabi-hotel-to-phuket-airport-transfer/", "/thailand/krabi-airport-transfers/krabi-hotel-to-phuket-airport-transfer/"],
  ["/thailand/krabi/krabi-hotel-to-phuket-hotel-transfer/", "/thailand/krabi-airport-transfers/krabi-hotel-to-phuket-hotel-transfer/"],
  ["/thailand/krabi/phuket-city-tour-to-phuket-hotel-transfer/", "/thailand/krabi-airport-transfers/phuket-city-tour-to-phuket-hotel-transfer/"],
  ["/thailand/pattaya/pattaya-hotel-indra-square-shopping-to-don-mueang-airport-transfer/", "/thailand/pattaya-transfers/pattaya-hotel-indra-square-shopping-to-don-mueang-airport-transfer/"],
  ["/thailand/pattaya/pattaya-hotel-safari-world-to-suvarnabhumi-airport-transfer/", "/thailand/pattaya-transfers/pattaya-hotel-safari-world-to-suvarnabhumi-airport-transfer/"],
  ["/thailand/pattaya/pattaya-hotel-to-bangkok-hotel-transfer/", "/thailand/pattaya-transfers/pattaya-hotel-to-bangkok-hotel-transfer/"],
  ["/thailand/pattaya/pattaya-hotel-to-don-mueang-airport-transfer/", "/thailand/pattaya-transfers/pattaya-hotel-to-don-mueang-airport-transfer/"],
  ["/thailand/pattaya/pattaya-hotel-to-suvarnabhumi-airport-transfer/", "/thailand/pattaya-transfers/pattaya-hotel-to-suvarnabhumi-airport-transfer/"],
  ["/thailand/pattaya/pattaya-hotel-two-temple-tour-to-don-mueang-airport-transfer/", "/thailand/pattaya-transfers/pattaya-hotel-two-temple-tour-to-don-mueang-airport-transfer/"],
  ["/thailand/pattaya/pattaya-hotel-two-temple-tour-to-suvarnabhumi-airport-transfer/", "/thailand/pattaya-transfers/pattaya-hotel-two-temple-tour-to-suvarnabhumi-airport-transfer/"],
  ["/thailand/pattaya/pattaya-to-bangkok-city-tour-and-hotel-transfer/", "/thailand/pattaya-transfers/pattaya-to-bangkok-city-tour-and-hotel-transfer/"],
  ["/thailand/pattaya/u-tapao-airport-to-pattaya-hotel-transfer/", "/thailand/pattaya-transfers/u-tapao-airport-to-pattaya-hotel-transfer/"],
  ["/thailand/phuket/krabi-city-tour-to-krabi-hotel-transfer/", "/thailand/phuket-airport-transfers/krabi-city-tour-to-krabi-hotel-transfer/"],
  ["/thailand/phuket/phuket-airport-phuket-city-tour-to-phuket-hotel-transfer/", "/thailand/phuket-airport-transfers/phuket-airport-phuket-city-tour-to-phuket-hotel-transfer/"],
  ["/thailand/phuket/phuket-airport-to-krabi-hotel-transfer/", "/thailand/krabi-airport-transfers/phuket-airport-to-krabi-hotel-transfer/"],
  ["/thailand/phuket/phuket-airport-to-phuket-hotel-transfer/", "/thailand/phuket-airport-transfers/phuket-airport-to-phuket-hotel-transfer/"],
  ["/thailand/phuket/phuket-city-tour-to-krabi-hotel-transfer/", "/thailand/phuket-airport-transfers/phuket-city-tour-to-krabi-hotel-transfer/"],
  ["/thailand/phuket/phuket-city-tour-to-phuket-airport-transfer/", "/thailand/phuket-airport-transfers/phuket-city-tour-to-phuket-airport-transfer/"],
  ["/thailand/phuket/phuket-hotel-to-krabi-airport-transfer/", "/thailand/krabi-airport-transfers/phuket-hotel-to-krabi-airport-transfer/"],
  ["/thailand/phuket/phuket-hotel-to-krabi-hotel-transfer/", "/thailand/phuket-airport-transfers/phuket-hotel-to-krabi-hotel-transfer/"],
  ["/thailand/phuket/phuket-hotel-to-phuket-airport-transfer/", "/thailand/phuket-airport-transfers/phuket-hotel-to-phuket-airport-transfer/"],
];

const app = readFileSync("src/App.tsx", "utf8");
const sitemap = readFileSync("public/sitemap.xml", "utf8");
const apache = readFileSync("public/.htaccess", "utf8");
const netlify = readFileSync("public/_redirects", "utf8");

describe("nested transfer detail URLs", () => {
  it("serves every transfer detail page from its nested listing URL", () => {
    for (const [, nested] of TRANSFER_URLS) {
      expect(app).toContain(`path="${nested}"`);
    }
  });

  it("keeps the old flat URL as a replace redirect, not a rendered page", () => {
    for (const [flat, nested] of TRANSFER_URLS) {
      expect(app).toContain(
        `<Route path="${flat}" element={<Navigate to="${nested}" replace />} />`
      );
      expect(app).not.toContain(`path="${flat}" element={<Transfer`);
    }
  });

  it("publishes only the nested URL in the sitemap", () => {
    for (const [flat, nested] of TRANSFER_URLS) {
      expect(sitemap).toContain(`<loc>https://yellodae.com${nested}</loc>`);
      expect(sitemap).not.toContain(`<loc>https://yellodae.com${flat}</loc>`);
    }
  });

  it("redirects the old URL permanently at the web-server level", () => {
    for (const [flat, nested] of TRANSFER_URLS) {
      expect(apache).toContain(`RedirectMatch 301 ^${flat}/?$ ${nested}`);
      expect(netlify).toContain(`${flat.replace(/\/$$/, "")} ${nested} 301!`);
    }
  });

  it("keeps the user's example reachable end to end", () => {
    const flat = "/thailand/bangkok/don-mueang-airport-to-bangkok-hotel-transfer/";
    const nested =
      "/thailand/bangkok-airport-transfers/don-mueang-airport-to-bangkok-hotel-transfer/";
    expect(app).toContain(`path="${nested}" element={<BangkokDmkAirportPickup />} />`);
    expect(app).toContain(`Navigate to="${nested}"`);
    expect(apache).toContain(`RedirectMatch 301 ^${flat}/?$ ${nested}`);
  });

  it("leaves the pinned hourly car-hire product routes untouched", () => {
    for (const kept of [
      "/thailand/bangkok-activities/bangkok-hotel-to-hotel-transfer-4-hours/",
      "/thailand/phuket-activities/phuket-hotel-to-hotel-transfer-4-hours/",
      "/thailand/pattaya/pattaya-private-car-4-hours/",
    ]) {
      expect(app).toContain(`path="${kept}"`);
      expect(sitemap).toContain(`<loc>https://yellodae.com${kept}</loc>`);
    }
  });
});
