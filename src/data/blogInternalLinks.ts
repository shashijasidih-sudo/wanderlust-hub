import { phuketBlogs } from "./phuketDestinationGuides";
import { japanBlogs } from "./japanDestinationGuides";
import { krabiBlogs } from "./krabiDestinationGuides";
import { singaporeBlogs } from "./singaporeDestinationGuides";
import { bangkokBlogs } from "./bangkokDestinationGuides";

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
  // Optional richer category buckets — used by Bangkok hub for full cross-linking
  priceCost?: InternalLink[];
  comparisons?: InternalLink[];
  indianAudience?: InternalLink[];
  micro?: InternalLink[];
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

// Krabi has only itinerary blogs at launch — fall back to Phuket cross-links
// for activity, transfer and comparison categories so the linking rule is satisfied.
const KRABI_ACTIVITY_FALLBACKS: InternalLink[] = [
  { title: "Best Phi Phi Island Tours from Phuket (also reachable from Krabi)",
    link: "/thailand/phuket/destination-guides/activity/best-phi-phi-island-tours" },
  { title: "Maya Bay Tour Guide: Rules, Best Time & What to Expect",
    link: "/thailand/phuket/destination-guides/activity/maya-bay-tour-guide" },
  { title: "James Bond Island Tour: Complete Experience Guide",
    link: "/thailand/phuket/destination-guides/activity/james-bond-island-tour-guide" },
  { title: "Snorkeling Guide: Best Spots, Tours & Cost",
    link: "/thailand/phuket/destination-guides/activity/snorkeling-in-phuket-guide" },
];

const KRABI_TRANSFER_FALLBACKS: InternalLink[] = [
  { title: "Krabi Airport to Ao Nang Transfer Guide",
    link: "/thailand/krabi/destination-guides/transfer/krabi-airport-to-ao-nang-transfer-guide" },
  { title: "Phuket to Krabi Transfer Guide (Bus, Ferry, Taxi)",
    link: "/thailand/krabi/destination-guides/transfer/phuket-to-krabi-transfer-guide" },
];

const KRABI_MORE_FALLBACKS: InternalLink[] = [
  { title: "Phuket vs Krabi: Which Is Better for Indian Travelers?",
    link: "/thailand/phuket/destination-guides/comparison/phuket-vs-krabi-for-indians" },
  { title: "Phuket + Krabi Combo Itinerary: 6–7 Days Plan",
    link: "/thailand/phuket/destination-guides/itinerary/phuket-krabi-combo-itinerary" },
  { title: "James Bond Island vs Phi Phi Island Tour",
    link: "/thailand/phuket/destination-guides/comparison/james-bond-island-vs-phi-phi-island" },
  { title: "Phi Phi Speedboat vs Big Boat: Which to Pick?",
    link: "/thailand/phuket/destination-guides/comparison/phi-phi-speedboat-vs-big-boat" },
];

export const getKrabiInternalLinks = (currentLink: string): InternalLinkSet => {
  const others = krabiBlogs.filter((b) => b.link !== currentLink);
  const itineraries = pickN(others.filter((b) => b.category === "itinerary"), 2, currentLink + "-it").map(toLink);
  const realActivities = pickN(others.filter((b) => b.category === "activity"), 4, currentLink + "-act").map(toLink);
  const activities = realActivities.length === 4 ? realActivities : [...realActivities, ...KRABI_ACTIVITY_FALLBACKS].slice(0, 4);
  const realTransfers = pickN(others.filter((b) => b.category === "transfer"), 2, currentLink + "-tr").map(toLink);
  const transfers = realTransfers.length === 2 ? realTransfers : [...realTransfers, ...KRABI_TRANSFER_FALLBACKS].slice(0, 2);
  const realMore = pickN(
    others.filter((b) => ["comparison", "indian-audience", "micro"].includes(b.category)),
    4,
    currentLink + "-more",
  ).map(toLink);
  const more = realMore.length === 4 ? realMore : [...realMore, ...KRABI_MORE_FALLBACKS].slice(0, 4);
  return {
    activities,
    itineraries,
    transfers,
    more,
    pillar: { title: "Krabi Destination Guides Hub", link: "/thailand/krabi/destination-guides" },
  };
};

// Singapore — only activity blogs at launch. Use Singapore activity cross-links
// for itineraries/transfers/more fallbacks so the linking rule is satisfied.
const SINGAPORE_ITINERARY_FALLBACKS: InternalLink[] = [
  { title: "Singapore City Tour with Guide & Shared Transfer Itinerary",
    link: "/singapore/destination-guides/activity/singapore-city-tour-with-shared-transfer" },
  { title: "Big Bus Singapore Hop-On Hop-Off Experience — Routes & Tips",
    link: "/singapore/destination-guides/activity/big-bus-singapore-hop-on-hop-off" },
];

const SINGAPORE_TRANSFER_FALLBACKS: InternalLink[] = [
  { title: "Singapore Airport Transfer Booking Guide",
    link: "/blog/airport-transfer-booking-singapore" },
  { title: "Sentosa Cable Car Ride Guide (Mount Faber Line)",
    link: "/singapore/destination-guides/activity/sentosa-cable-car-mount-faber-line" },
];

const SINGAPORE_MORE_FALLBACKS: InternalLink[] = [
  { title: "Best Sentosa Activities for First-Time Visitors",
    link: "/blog/sentosa-activities-singapore" },
  { title: "Singapore Combo Pass: Is It Worth It?",
    link: "/blog/singapore-combo-pass" },
  { title: "Top Singapore Food Experiences for Indian Travelers",
    link: "/blog/singapore-food-experiences" },
  { title: "Top Things to Do in Singapore", link: "/singapore/things-to-do" },
];

export const getSingaporeInternalLinks = (currentLink: string): InternalLinkSet => {
  const others = singaporeBlogs.filter((b) => b.link !== currentLink);
  const realActivities = pickN(others.filter((b) => b.category === "activity"), 4, currentLink + "-act").map(toLink);
  const activities = realActivities.slice(0, 4);
  const realItineraries = pickN(others.filter((b) => b.category === "itinerary"), 2, currentLink + "-it").map(toLink);
  const itineraries = realItineraries.length === 2 ? realItineraries : [...realItineraries, ...SINGAPORE_ITINERARY_FALLBACKS].slice(0, 2);
  const transfers = SINGAPORE_TRANSFER_FALLBACKS;
  const usedLinks = new Set([
    ...activities.map((x) => x.link),
    ...itineraries.map((x) => x.link),
    ...transfers.map((x) => x.link),
  ]);
  const realMore = pickN(
    others.filter((b) => !usedLinks.has(b.link) && ["comparison", "indian-audience"].includes(b.category)),
    4,
    currentLink + "-more",
  ).map(toLink);
  const more = realMore.length === 4 ? realMore : [...realMore, ...SINGAPORE_MORE_FALLBACKS].slice(0, 4);
  return {
    activities,
    itineraries,
    transfers,
    more,
    pillar: { title: "Singapore Smart Guides Hub", link: "/singapore/destination-guides" },
  };
};

// ============================================================================
// Bangkok — full cross-category internal linking
// Each blog links out to every other Bangkok category so users (and crawlers)
// can navigate between Activities, Price & Cost, Transfers, Itineraries,
// For Indians, Micro Guides and Comparisons.
// ============================================================================
export const getBangkokInternalLinks = (currentLink: string): InternalLinkSet => {
  const others = bangkokBlogs.filter((b) => b.link !== currentLink);
  const pick = (cat: string, n: number, salt: string) =>
    pickN(others.filter((b) => b.category === cat), n, currentLink + salt).map(toLink);

  const activities = pick("activity", 4, "-bkk-act");
  const itineraries = pick("itinerary", 3, "-bkk-it");
  const transfers = pick("transfer", 3, "-bkk-tr");
  const priceCost = pick("price-cost", 3, "-bkk-pc");
  const comparisons = pick("comparison", 3, "-bkk-cmp");
  const indianAudience = pick("indian-audience", 3, "-bkk-ind");
  const micro = pick("micro", 3, "-bkk-mc");

  return {
    activities,
    itineraries,
    transfers,
    priceCost,
    comparisons,
    indianAudience,
    micro,
    // Keep "more" empty — categories above already cover the full hub
    more: [],
    pillar: {
      title: "Bangkok Destination Guides Hub",
      link: "/thailand/bangkok/destination-guides",
    },
  };
};
