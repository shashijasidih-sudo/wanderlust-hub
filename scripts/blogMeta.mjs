#!/usr/bin/env node
/**
 * Build-time extraction of blog article metadata.
 *
 * Reads src/App.tsx for /blog/* routes -> lazy component -> page file, then
 * pulls the props passed to <BlogArticleLayout> (title, description, category,
 * date, readTime, heroImage) straight out of the source. Used by the
 * prerenderer to emit a real article header (not a generic card skeleton) in
 * the static HTML for blog URLs.
 */
import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const prop = (block, name) => {
  const m = block.match(new RegExp(`\\n\\s*${name}=\"([^\"]*)\"`));
  return m ? m[1] : null;
};

export function collectBlogMeta() {
  const app = readFileSync(resolve(ROOT, "src/App.tsx"), "utf8");

  const lazyMap = {};
  for (const m of app.matchAll(/const\s+(\w+)\s*=\s*lazy\(\s*\(\)\s*=>\s*import\("\.\/(pages\/[\w-]+)"\)\s*\)/g)) {
    lazyMap[m[1]] = m[2];
  }

  const routes = [];
  for (const m of app.matchAll(/<Route\s+path="(\/blog\/[^"]*)"\s+element=\{<(\w+)\s*\/>\}/g)) {
    routes.push([m[1], m[2]]);
  }

  const out = {};
  for (const [path, comp] of routes) {
    const rel = lazyMap[comp];
    if (!rel) continue;
    const file = resolve(ROOT, "src", rel + ".tsx");
    if (!existsSync(file)) continue;
    const src = readFileSync(file, "utf8");
    const start = src.indexOf("<BlogArticleLayout");
    if (start === -1) continue;
    const block = src.slice(start, start + 3000);

    const title = prop(block, "title");
    if (!title) continue;

    let heroSrc = null;
    const heroVar = block.match(/\n\s*heroImage=\{(\w+)\}/);
    if (heroVar) {
      const imp = src.match(new RegExp(`import\\s+${heroVar[1]}\\s+from\\s+"@/(assets/[^"]+)"`));
      if (imp) heroSrc = "src/" + imp[1];
    }

    out[path.endsWith("/") ? path : path + "/"] = {
      title,
      description: prop(block, "description") || "",
      category: prop(block, "category") || "Travel Guide",
      date: prop(block, "date") || "",
      readTime: prop(block, "readTime") || "",
      heroAlt: prop(block, "heroAlt") || title,
      heroSrc,
    };
  }
  return out;
}
