import { Link, useLocation } from "react-router-dom";
import { getBlogLinkImage } from "@/lib/blogLinkImages";
import { bangkokBlogs } from "@/data/bangkokDestinationGuides";
import { pattayaBlogs } from "@/data/pattayaDestinationGuides";
import { phuketBlogs } from "@/data/phuketDestinationGuides";
import { krabiBlogs } from "@/data/krabiDestinationGuides";
import { chiangMaiBlogs } from "@/data/chiangMaiDestinationGuides";
import { kohSamuiBlogs } from "@/data/kohSamuiDestinationGuides";
import { singaporeBlogs } from "@/data/singaporeDestinationGuides";
import { japanBlogs } from "@/data/japanDestinationGuides";

interface BlogEntry {
  title: string;
  link: string;
  image?: string;
  category?: string;
}

const CITY_POOLS: Record<string, BlogEntry[]> = {
  bangkok: bangkokBlogs,
  pattaya: pattayaBlogs,
  phuket: phuketBlogs,
  krabi: krabiBlogs,
  "chiang-mai": chiangMaiBlogs,
  "koh-samui": kohSamuiBlogs,
  singapore: singaporeBlogs,
  japan: japanBlogs,
};

const CITY_HUB: Record<string, { label: string; link: string }> = {
  bangkok: { label: "Bangkok Guides Hub", link: "/thailand/bangkok/destination-guides" },
  pattaya: { label: "Pattaya Guides Hub", link: "/thailand/pattaya/destination-guides" },
  phuket: { label: "Phuket Guides Hub", link: "/thailand/phuket/destination-guides" },
  krabi: { label: "Krabi Guides Hub", link: "/thailand/krabi/destination-guides" },
  "chiang-mai": { label: "Chiang Mai Guides Hub", link: "/thailand/chiang-mai/destination-guides" },
  "koh-samui": { label: "Koh Samui Guides Hub", link: "/thailand/koh-samui/destination-guides" },
  singapore: { label: "Singapore Guides Hub", link: "/singapore/destination-guides" },
  japan: { label: "Japan Guides Hub", link: "/japan/destination-guides" },
};

const ALL_CITIES = Object.keys(CITY_POOLS);

const detectCity = (pathname: string, override?: string): string => {
  if (override) {
    const k = override.toLowerCase().replace(/\s+/g, "-");
    if (CITY_POOLS[k]) return k;
  }
  const p = pathname.toLowerCase();
  for (const c of ALL_CITIES) {
    if (p.includes(`/${c}/`) || p.endsWith(`/${c}`) || p.includes(`/${c}-`)) return c;
  }
  return "bangkok";
};

const seededPick = <T,>(arr: T[], n: number, seed: string): T[] => {
  if (arr.length <= n) return arr.slice();
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    h = (h * 1103515245 + 12345) >>> 0;
    const j = h % (i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
};

interface RelatedArticlesProps {
  city?: string;
  currentLink?: string;
  count?: number;
  title?: string;
}

const RelatedArticles = ({ city, currentLink, count = 8, title = "Related Articles" }: RelatedArticlesProps) => {
  const location = useLocation();
  const path = currentLink || location.pathname;
  const detected = detectCity(path, city);
  const pool = CITY_POOLS[detected] || [];
  const others = pool.filter((b) => b.link !== path);

  // Prefer a balanced mix across categories
  const buckets = ["activity", "itinerary", "transfer", "comparison", "price-cost", "indian-audience", "micro"];
  const seen = new Set<string>();
  const picked: BlogEntry[] = [];
  buckets.forEach((cat) => {
    const fromCat = seededPick(
      others.filter((b) => b.category === cat && !seen.has(b.link)),
      2,
      path + "-" + cat,
    );
    fromCat.forEach((b) => {
      if (picked.length < count && !seen.has(b.link)) {
        seen.add(b.link);
        picked.push(b);
      }
    });
  });
  // Top up from anything left
  if (picked.length < count) {
    const extra = seededPick(others.filter((b) => !seen.has(b.link)), count - picked.length, path + "-extra");
    extra.forEach((b) => {
      if (!seen.has(b.link)) {
        seen.add(b.link);
        picked.push(b);
      }
    });
  }
  // Final fallback: cross-city if still short
  if (picked.length < count) {
    const crossPool = ALL_CITIES
      .filter((c) => c !== detected)
      .flatMap((c) => CITY_POOLS[c])
      .filter((b) => !seen.has(b.link) && b.link !== path);
    const extra = seededPick(crossPool, count - picked.length, path + "-cross");
    extra.forEach((b) => {
      if (!seen.has(b.link)) {
        seen.add(b.link);
        picked.push(b);
      }
    });
  }

  if (picked.length === 0) return null;
  const hub = CITY_HUB[detected];

  return (
    <section
      aria-labelledby="related-articles-heading"
      className="mt-12 pt-8 border-t border-border"
    >
      <div className="flex items-baseline justify-between mb-5 gap-4 flex-wrap">
        <h2 id="related-articles-heading" className="text-xl md:text-2xl font-bold text-foreground">
          {title}
        </h2>
        {hub && (
          <Link to={hub.link} className="text-sm font-medium text-primary hover:underline">
            View all {hub.label} →
          </Link>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {picked.map((b) => {
          const img = b.image || getBlogLinkImage(b.link);
          return (
            <Link
              key={b.link}
              to={b.link}
              className="group rounded-xl border border-border overflow-hidden bg-card hover:border-primary hover:shadow-md transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={img}
                  alt={b.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  {b.title}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default RelatedArticles;
