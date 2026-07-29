// Shared helpers for the post-checkout recommendation sections.
// Pure presentation/data helpers — no checkout or payment logic here.

export type DestinationKey =
  | "bangkok"
  | "pattaya"
  | "phuket"
  | "krabi"
  | "singapore"
  | "japan"
  | "dubai";

export const DESTINATION_LABELS: Record<DestinationKey, string> = {
  bangkok: "Bangkok",
  pattaya: "Pattaya",
  phuket: "Phuket",
  krabi: "Krabi",
  singapore: "Singapore",
  japan: "Japan",
  dubai: "Dubai",
};

const MATCHERS: Array<[DestinationKey, RegExp]> = [
  ["bangkok", /bangkok|suvarnabhumi|don[- ]?mueang|\bbkk\b|\bdmk\b|ayutthaya|safari world|chao phraya/i],
  ["pattaya", /pattaya|alcazar|coral island|nong nooch|u-?tapao/i],
  ["phuket", /phuket|phi phi|james bond|patong|maya bay/i],
  ["krabi", /krabi|hong island|emerald pool|ao nang|railay/i],
  ["singapore", /singapore|sentosa|universal studios|gardens by the bay|night safari|changi/i],
  ["japan", /japan|tokyo|kyoto|osaka|narita|haneda|fuji|teamlab/i],
  ["dubai", /dubai|abu dhabi|burj|palm jumeirah/i],
];

/** Best-effort destination detection from a slug / title string. */
export const detectDestination = (value?: string | null): DestinationKey | null => {
  if (!value) return null;
  for (const [key, re] of MATCHERS) {
    if (re.test(value)) return key;
  }
  return null;
};

/** First destination found across an ordered list of candidate strings. */
export const detectDestinationFrom = (values: Array<string | null | undefined>): DestinationKey | null => {
  for (const v of values) {
    const d = detectDestination(v);
    if (d) return d;
  }
  return null;
};

export const normalizeSlug = (slug?: string | null) => {
  if (!slug) return "";
  const s = slug.startsWith("/") ? slug : `/${slug}`;
  return s.endsWith("/") ? s.toLowerCase() : `${s.toLowerCase()}/`;
};

/** Filter out anything already in the cart / booking, de-duplicate, then take exactly `count`. */
export function pickExactly<T extends { slug: string }>(
  pools: T[][],
  exclude: Set<string>,
  count = 4
): T[] {
  const out: T[] = [];
  const seen = new Set<string>();
  for (const pool of pools) {
    for (const item of pool) {
      if (out.length >= count) return out;
      const key = normalizeSlug(item.slug);
      if (!key || seen.has(key) || exclude.has(key)) continue;
      seen.add(key);
      out.push(item);
    }
  }
  return out;
}

export const sectionWrapClass = "container mx-auto px-4 py-8";
export const gridClass =
  "flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 sm:overflow-visible scrollbar-hide";
export const gridItemClass = "snap-start shrink-0 w-[85%] sm:w-auto";
