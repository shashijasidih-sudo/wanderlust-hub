import { phuketBlogs } from "./phuketDestinationGuides";
import { japanBlogs } from "./japanDestinationGuides";
import { krabiBlogs } from "./krabiDestinationGuides";

export interface InternalLink {
  title: string;
  link: string;
  image?: string;
}

export interface InternalLinkSet {
  activities: InternalLink[];
  itineraries: InternalLink[];
  transfers: InternalLink[];
  more: InternalLink[];
  pillar: { title: string; link: string };
}

const pickN = <T>(arr: T[], n: number, seed: string): T[] => {
  if (arr.length <= n) return arr.slice();
  // deterministic pseudo-random based on seed
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  const copy = arr.slice();
  // Fisher-Yates with seeded RNG
  for (let i = copy.length - 1; i > 0; i--) {
    h = (h * 1103515245 + 12345) >>> 0;
    const j = h % (i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
};

const toLink = (b: { title: string; link: string; image?: string }): InternalLink => ({
  title: b.title,
  link: b.link,
  image: b.image,
});

export const getPhuketInternalLinks = (currentLink: string): InternalLinkSet => {
  const others = phuketBlogs.filter((b) => b.link !== currentLink);
  const activities = pickN(others.filter((b) => b.category === "activity"), 4, currentLink + "-act").map(toLink);
  const itineraries = pickN(others.filter((b) => b.category === "itinerary"), 2, currentLink + "-it").map(toLink);
  // transfers + the airport transfer comparison
  const transferPool = others.filter(
    (b) => b.category === "transfer" || b.link.includes("airport-transfer-phuket")
  );
  const transfers = pickN(transferPool, 2, currentLink + "-tr").map(toLink);
  // "more" from comparison + price-cost + indian-audience (random 4)
  const usedLinks = new Set([
    ...activities.map((x) => x.link),
    ...itineraries.map((x) => x.link),
    ...transfers.map((x) => x.link),
  ]);
  const morePool = others.filter(
    (b) =>
      !usedLinks.has(b.link) &&
      ["comparison", "price-cost", "indian-audience"].includes(b.category)
  );
  const more = pickN(morePool, 4, currentLink + "-more").map(toLink);
  return {
    activities,
    itineraries,
    transfers,
    more,
    pillar: { title: "Phuket Destination Guides Hub", link: "/thailand/phuket/destination-guides" },
  };
};

// Phuket activity tour pages used as transfer/itinerary fallbacks for Japan (none in Japan yet)
const JAPAN_TRANSFER_FALLBACKS: InternalLink[] = [
  {
    title: "Tokyo Narita Airport Transfer Guide (Train, Limo Bus & Taxi) — 2026",
    link: "/japan/destination-guides/activity/tokyo-city-tour-guide",
  },
  {
    title: "Getting Around Japan: JR Pass, Shinkansen & Local Transport (2026)",
    link: "/japan/destination-guides/price-cost/japan-trip-cost-from-india",
  },
];

const JAPAN_ITINERARY_FALLBACKS: InternalLink[] = [
  {
    title: "5-Day Japan Itinerary: Tokyo, Mt Fuji & Kyoto Highlights",
    link: "/japan/destination-guides/activity/mount-fuji-day-tour-from-tokyo",
  },
  {
    title: "7-Day Japan Itinerary for First-Time Indian Travelers",
    link: "/japan/destination-guides/price-cost/japan-trip-cost-from-india",
  },
];

export const getJapanInternalLinks = (currentLink: string): InternalLinkSet => {
  const others = japanBlogs.filter((b) => b.link !== currentLink);
  const activities = pickN(others.filter((b) => b.category === "activity"), 4, currentLink + "-act").map(toLink);
  const itinerariesPool = others.filter((b) => b.category === "price-cost");
  // Japan has no dedicated itinerary blogs yet — use price-cost + fallbacks
  const itineraries = pickN(
    [...itinerariesPool.map(toLink), ...JAPAN_ITINERARY_FALLBACKS],
    2,
    currentLink + "-it"
  );
  const transfers = JAPAN_TRANSFER_FALLBACKS;
  const usedLinks = new Set([
    ...activities.map((x) => x.link),
    ...itineraries.map((x) => x.link),
    ...transfers.map((x) => x.link),
  ]);
  const more = pickN(
    others.filter((b) => !usedLinks.has(b.link)).map(toLink),
    4,
    currentLink + "-more"
  );
  return {
    activities,
    itineraries,
    transfers,
    more,
    pillar: { title: "Japan Smart Guides Hub", link: "/japan/destination-guides" },
  };
};
