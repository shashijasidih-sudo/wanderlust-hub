// Central registry for auto internal-linking inside blog content.
// Add a tour/activity here once and any future blog paragraph or list item
// that mentions the phrase (or one of its aliases) will be auto-linked to
// the correct in-app page. Matching is case-insensitive and whole-word.
// Each phrase is linked at most ONCE per text block to avoid noise.

export interface TourLink {
  /** Canonical display phrase (used for matching). */
  phrase: string;
  /** Internal route path. */
  path: string;
  /** Additional phrases that should resolve to the same page. */
  aliases?: string[];
}

export const TOUR_LINK_MAP: TourLink[] = [
  // ---------- Phuket ----------
  {
    phrase: "Phi Phi Island Tour",
    path: "/thailand/phuket/full-day-phi-phi-island-tour-with-transfer/",
    aliases: ["Phi Phi Island Speedboat Tour", "Phi Phi Islands Tour", "Phi Phi tour", "Phi Phi Island"],
  },
  {
    phrase: "James Bond Island Tour",
    path: "/thailand/phuket/james-bond-island-speed-boat-tour-with-transfer/",
    aliases: ["James Bond Island", "James Bond Island Speedboat Tour"],
  },
  {
    phrase: "Phuket City Tour",
    path: "/thailand/phuket/phuket-city-tour/",
    aliases: ["Phuket City Tour with Big Buddha", "Big Buddha Phuket"],
  },
  {
    phrase: "Phuket Fantasea",
    path: "/thailand/phuket/phuket-fantasea-show-with-transfer/",
    aliases: ["Phuket Fantasea Show"],
  },
  {
    phrase: "Phuket Transfers",
    path: "/thailand/phuket/transfers/",
    aliases: ["HKT airport transfer", "Phuket airport transfer"],
  },

  // ---------- Bangkok ----------
  {
    phrase: "Safari World Bangkok",
    path: "/thailand/bangkok/safari-world/",
    aliases: ["Safari World"],
  },
  {
    phrase: "Chao Phraya Dinner Cruise",
    path: "/thailand/bangkok/chao-phraya-princess-dinner-cruise/",
    aliases: ["Chao Phraya Princess Cruise", "Chao Phraya Cruise"],
  },
  {
    phrase: "Grand Palace Bangkok",
    path: "/thailand/bangkok/destination-guides/activity/grand-palace-bangkok-guide/",
    aliases: ["Grand Palace"],
  },
  {
    phrase: "Mahanakhon Skywalk",
    path: "/thailand/bangkok/destination-guides/activity/mahanakhon-skywalk-tickets-guide/",
  },
  {
    phrase: "Wat Arun",
    path: "/thailand/bangkok/destination-guides/activity/wat-arun-bangkok-guide/",
  },
  {
    phrase: "Suvarnabhumi Airport Transfer",
    path: "/thailand/bangkok/suvarnabhumi-airport-bkk-to-bangkok-hotel-transfer/",
  },
  {
    phrase: "Bangkok Transfers",
    path: "/thailand/bangkok/transfers/",
    aliases: ["Bangkok airport transfer"],
  },

  // ---------- Pattaya ----------
  {
    phrase: "Coral Island Pattaya",
    path: "/thailand/pattaya/coral-island-tour-with-transfer-and-indian-lunch/",
    aliases: ["Coral Island Tour", "Coral Island"],
  },
  {
    phrase: "Alcazar Cabaret Show",
    path: "/thailand/pattaya/alcazar-cabaret-show-with-transfer/",
    aliases: ["Alcazar Show Pattaya", "Alcazar Show", "Alcazar Cabaret"],
  },
  {
    phrase: "Pattaya Transfers",
    path: "/thailand/pattaya/transfers/",
    aliases: ["Pattaya airport transfer"],
  },

  // ---------- Krabi ----------
  {
    phrase: "Krabi 4 Islands Tour",
    path: "/thailand/krabi/4-islands-tour-by-speedboat-with-transfer/",
    aliases: ["4 Islands Tour Krabi", "Krabi Four Islands Tour"],
  },
  {
    phrase: "Hong Islands Tour",
    path: "/thailand/krabi/hong-islands-tour-by-speedboat-with-transfer/",
    aliases: ["Hong Island Tour"],
  },
  {
    phrase: "Krabi Transfers",
    path: "/thailand/krabi/transfers/",
  },

  // ---------- Singapore ----------
  {
    phrase: "Universal Studios Singapore",
    path: "/singapore/universal-studios-singapore-tickets-and-transfers/",
    aliases: ["Universal Studios", "USS"],
  },
  {
    phrase: "Night Safari Singapore",
    path: "/singapore/night-safari-singapore-tickets-and-transfers/",
    aliases: ["Night Safari"],
  },
  {
    phrase: "Sentosa Cable Car",
    path: "/singapore/sentosa-cable-car-tickets-and-transfers/",
  },
  {
    phrase: "Gardens by the Bay",
    path: "/singapore/gardens-by-the-bay-tickets-and-transfers/",
  },
  {
    phrase: "Singapore Flyer",
    path: "/singapore/singapore-flyer-tickets-and-transfers/",
  },

  // ---------- Country / hub ----------
  {
    phrase: "Thailand transfers",
    path: "/thailand/transfers/",
    aliases: ["Thailand airport transfers"],
  },
  {
    phrase: "Thailand tours",
    path: "/thailand/",
    aliases: ["all Thailand tours"],
  },
  {
    phrase: "Singapore tours",
    path: "/singapore/things-to-do/",
  },
];

// Pre-build a flat lookup list, longest phrase first so multi-word
// matches win over their substrings (e.g. "Phi Phi Island Tour"
// before "Phi Phi Island").
export const TOUR_LINK_LOOKUP: { phrase: string; path: string }[] = TOUR_LINK_MAP
  .flatMap((t) => [{ phrase: t.phrase, path: t.path }, ...(t.aliases ?? []).map((a) => ({ phrase: a, path: t.path }))])
  .sort((a, b) => b.phrase.length - a.phrase.length);

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Find the first auto-link match in `text` that isn't already inside
 * a markdown link. Returns null if nothing matches.
 */
export const findAutoLink = (text: string): { index: number; length: number; label: string; path: string } | null => {
  for (const { phrase, path } of TOUR_LINK_LOOKUP) {
    const re = new RegExp(`\\b${escapeRegExp(phrase)}\\b`, "i");
    const m = re.exec(text);
    if (m) return { index: m.index, length: m[0].length, label: m[0], path };
  }
  return null;
};
