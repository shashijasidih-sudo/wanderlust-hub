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

const baseHtml = readFileSync(INDEX, "utf8");
const xml = readFileSync(SITEMAP, "utf8");
const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

/**
 * LCP preload map: route pathname -> { desktop, mobile } source asset paths.
 * Hashed output filenames are resolved from the Vite build manifest, so the
 * preload always points at the exact file the app will request (no duplicate
 * download, no stale hash). Only routes listed here get a preload tag.
 */
const LCP_ASSETS = {
  "/": {
    desktop: "src/assets/hero-thailand-beach.jpg",
    mobile: "src/assets/hero-thailand-beach-mobile.webp",
  },
};

let manifest = {};
for (const candidate of ["dist/.vite/manifest.json", "dist/manifest.json"]) {
  const p = resolve(ROOT, candidate);
  if (existsSync(p)) {
    manifest = JSON.parse(readFileSync(p, "utf8"));
    break;
  }
}

function resolveAsset(srcPath) {
  const entry = manifest[srcPath];
  if (entry && entry.file) return "/" + entry.file;
  return null;
}

function withPreload(html, pathname) {
  const spec = LCP_ASSETS[pathname];
  if (!spec) return html;
  const desktop = resolveAsset(spec.desktop);
  const mobile = resolveAsset(spec.mobile);
  const tags = [];
  if (mobile) {
    tags.push(
      `<link rel="preload" as="image" href="${mobile}" type="image/webp" fetchpriority="high" media="(max-width: 768px)">`
    );
  }
  if (desktop) {
    tags.push(
      `<link rel="preload" as="image" href="${desktop}" type="image/webp" fetchpriority="high" media="(min-width: 769px)">`
    );
  }
  if (!tags.length) return html;
  return html.replace("</head>", `    ${tags.join("\n    ")}\n  </head>`);
}

/**
 * Above-the-fold static shell.
 *
 * The app is a client-rendered SPA, so without this the first paint waits for
 * the JS bundle to download, parse and mount — pushing LCP past 6s on a
 * throttled connection. Injecting a tiny, inline-styled shell (brand bar +
 * page H1 + subtitle + card skeletons) into #root gives the browser a real
 * LCP candidate within a few hundred ms. React's createRoot() clears the
 * container on its first commit, so the shell disappears the moment the real
 * UI is ready. No routing, analytics or SEO behaviour changes: Helmet still
 * owns the head, and the H1 text matches the page's own topic.
 */
const TITLE_OVERRIDES = {
  "/singapore/": ["Singapore Tours & Activities", "Attraction tickets, theme parks and private transfers — booked in minutes."],
  "/singapore/transfers/": ["Singapore Airport Transfers", "Private Changi Airport pickups and drop-offs with meet & greet."],
  "/thailand/": ["Thailand Tours & Activities", "Bangkok, Phuket, Krabi, Pattaya and Koh Samui experiences for Indian travellers."],
  "/dubai/": ["Dubai Tours & Activities", "Desert safaris, city tours and attraction tickets across Dubai."],
  "/japan/": ["Japan Tours & Activities", "Curated Japan experiences, tickets and transfers."],
  "/thailand/bangkok/": ["Bangkok Tours & Activities", "Temples, cruises, shows and day trips with hotel transfers."],
  "/thailand/phuket/": ["Phuket Tours & Activities", "Island hopping, speedboat tours and Phuket attraction tickets."],
  "/thailand/krabi/": ["Krabi Tours & Activities", "Four Islands, Phi Phi and Hong Island tours with transfers."],
  "/thailand/pattaya/": ["Pattaya Tours & Activities", "Coral Island, shows and Pattaya day tours with transfers."],
  "/thailand/koh-samui/": ["Koh Samui Tours & Activities", "Island tours, snorkelling trips and Koh Samui transfers."],
  "/thailand/chiang-mai/": ["Chiang Mai Tours & Activities", "Elephant sanctuaries, temples and Chiang Mai day tours."],
};

const titleCase = (s) =>
  s
    .split("-")
    .map((w) => (w.length > 2 ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");

function shellFor(pathname) {
  const override = TITLE_OVERRIDES[pathname];
  let heading, sub;
  if (override) {
    [heading, sub] = override;
  } else {
    const segs = pathname.split("/").filter(Boolean);
    if (!segs.length) return null;
    heading = titleCase(segs[segs.length - 1]);
    sub = "Book with Yellodae Trails — instant confirmation and 24/7 WhatsApp support.";
  }
  const esc = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  return `<div id="pp-shell" style="font-family:system-ui,-apple-system,'Segoe UI',sans-serif;color:#0f172a">
      <div style="height:64px;border-bottom:1px solid #e8ecea;display:flex;align-items:center;padding:0 16px;font-weight:700;font-size:18px;color:#2e6b57">Yellodae Trails</div>
      <div style="max-width:1200px;margin:0 auto;padding:28px 16px 0">
        <h1 style="margin:0 0 10px;font-size:32px;line-height:1.15;font-weight:800;letter-spacing:-0.5px">${esc(heading)}</h1>
        <p style="margin:0 0 22px;font-size:15px;line-height:1.5;color:#5a6b64;max-width:640px">${esc(sub)}</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:16px">
          <div style="height:230px;border-radius:14px;background:#eef2f0"></div>
          <div style="height:230px;border-radius:14px;background:#eef2f0"></div>
          <div style="height:230px;border-radius:14px;background:#eef2f0"></div>
          <div style="height:230px;border-radius:14px;background:#eef2f0"></div>
        </div>
      </div>
    </div>`;
}

function withShell(html, pathname) {
  const shell = shellFor(pathname);
  if (!shell) return html;
  return html.replace(/<div id="root">\s*<\/div>/, `<div id="root">${shell}</div>`);
}

function homeShell() {
  const desktop = resolveAsset(LCP_ASSETS["/"].desktop);
  const mobile = resolveAsset(LCP_ASSETS["/"].mobile);
  if (!desktop) return null;
  const source = mobile
    ? `<source media="(max-width: 768px)" srcset="${mobile}">`
    : "";
  return `<div id="pp-shell" style="font-family:system-ui,-apple-system,'Segoe UI',sans-serif">
      <div style="height:64px;border-bottom:1px solid #e8ecea;display:flex;align-items:center;padding:0 16px;font-weight:700;font-size:18px;color:#2e6b57">Yellodae Trails</div>
      <div style="position:relative;height:600px;overflow:hidden">
        <picture>${source}<img src="${desktop}" alt="Thailand beach hero" width="1920" height="1080" fetchpriority="high" decoding="sync" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover"></picture>
        <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,.4),rgba(0,0,0,.3),rgba(0,0,0,.6))"></div>
        <div style="position:relative;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 16px">
          <h1 style="margin:0 0 16px;font-size:40px;line-height:1.1;font-weight:700;color:#fff">Explore your Destination Activities</h1>
          <p style="margin:0;font-size:18px;color:rgba(255,255,255,.9)">Find exclusive tours, activities, and transfer deals all in one place</p>
        </div>
      </div>
    </div>`;
}

// Homepage: preload + a static hero shell so the (already preloaded) LCP image
// paints without waiting for the JS bundle to mount.
{
  const withHome = withPreload(baseHtml, "/");
  const shell = homeShell();
  writeFileSync(
    INDEX,
    shell ? withHome.replace(/<div id="root">\s*<\/div>/, `<div id="root">${shell}</div>`) : withHome
  );
}


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
  writeFileSync(outFile, withShell(withPreload(baseHtml, pathname), pathname));
  written++;
}

console.log(`[prerender] wrote ${written} static HTML files for ${locs.length} sitemap URLs.`);


