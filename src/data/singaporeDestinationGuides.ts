import marinaBayImg from "@/assets/singapore-marina-bay-sands-night-1.jpg";
import sentosa4DImg from "@/assets/singapore-sentosa-4d.jpg";
import universalImg from "@/assets/singapore-universal-studios.jpg";
import gardensBayNightImg from "@/assets/singapore-gardens-bay-night-1.jpg";
import cityTourImg from "@/assets/singapore-city-tour.jpg";
import nightSafariImg from "@/assets/singapore-night-safari.jpg";
import cableCarImg from "@/assets/singapore-cable-car.jpg";
import wingsTimeImg from "@/assets/singapore-wings-time.jpg";
import riverCruiseImg from "@/assets/singapore-river-cruise.jpg";
import gardensBayImg from "@/assets/singapore-gardens-bay.jpg";
import flyerImg from "@/assets/singapore-flyer.jpg";
import bigBusImg from "@/assets/singapore-big-bus.jpg";
import zooImg from "@/assets/singapore-zoo.jpg";
import adventureCoveImg from "@/assets/singapore-adventure-cove.jpg";
import flyerTwilightImg from "@/assets/singapore-flyer-twilight-1.jpg";

export type SingaporeBlogCategory =
  | "indian-audience"
  | "itinerary"
  | "activity"
  | "comparison";

export interface SingaporeCategoryMeta {
  key: SingaporeBlogCategory;
  label: string;
  short: string;
  description: string;
}

export const SINGAPORE_CATEGORIES: SingaporeCategoryMeta[] = [
  { key: "itinerary", label: "Itinerary Blogs", short: "Itineraries",
    description: "3-day, 4-day, 5-day and honeymoon Singapore itineraries with day-by-day plans." },
  { key: "indian-audience", label: "Indian Audience Blogs", short: "For Indians",
    description: "Visa, food, currency and tips for Indian travelers visiting Singapore." },
  { key: "activity", label: "Activity Blogs", short: "Activities",
    description: "Universal Studios, Sentosa, Gardens by the Bay, Night Safari and must-do experiences." },
  { key: "comparison", label: "Comparison Blogs", short: "Comparisons",
    description: "Singapore vs Bangkok, Sentosa vs city stay and side-by-side decision guides." },
];

export interface SingaporeBlogEntry {
  title: string;
  description: string;
  category: SingaporeBlogCategory;
  image: string;
  date: string;
  readTime: string;
  link: string;
}

export const SINGAPORE_CATEGORY_HERO: Record<SingaporeBlogCategory, string> = {
  itinerary: marinaBayImg,
  "indian-audience": gardensBayNightImg,
  activity: universalImg,
  comparison: sentosa4DImg,
};

const ACT = "/singapore/destination-guides/activity";

export const singaporeBlogs: SingaporeBlogEntry[] = [
  {
    title: "Singapore City Tour with Guide & Shared Transfer Itinerary (2026)",
    description: "Half-day Singapore city tour with shared transfer — Merlion Park, Marina Bay, Chinatown, Little India and Orchard Road. INR pricing, timings and tips.",
    category: "activity", image: cityTourImg, date: "May 18, 2026", readTime: "9 min read",
    link: `${ACT}/singapore-city-tour-with-shared-transfer`,
  },
  {
    title: "Night Safari Singapore Experience Guide (Tram, Trails & Tips)",
    description: "Complete Night Safari Singapore guide — tram zones, walking trails, Creatures of the Night show, best timings and INR ticket cost for 2026.",
    category: "activity", image: nightSafariImg, date: "May 18, 2026", readTime: "10 min read",
    link: `${ACT}/night-safari-singapore-guide`,
  },
  {
    title: "Sentosa 4D Adventureland Complete Experience (Rides, Tips & Cost)",
    description: "Inside Sentosa 4D Adventureland — Journey 2 ride, Desperados shooting game, Extreme Log Ride, combo tickets and 2026 INR cost from India.",
    category: "activity", image: sentosa4DImg, date: "May 18, 2026", readTime: "8 min read",
    link: `${ACT}/sentosa-4d-adventureland-guide`,
  },
  {
    title: "Sentosa Cable Car Ride Guide (Mount Faber Line) — 2026",
    description: "Mount Faber Line Sentosa Cable Car guide — stations, sunset timings, glass-bottom cabins, round-trip cost and how to combine with Sentosa attractions.",
    category: "activity", image: cableCarImg, date: "May 18, 2026", readTime: "9 min read",
    link: `${ACT}/sentosa-cable-car-mount-faber-line`,
  },
  {
    title: "Wings of Time Singapore Show — Seating, Timings & Tips (2026)",
    description: "Wings of Time Sentosa night show guide — story, show timings, premium vs standard seating, fireworks finale and INR ticket price.",
    category: "activity", image: wingsTimeImg, date: "May 18, 2026", readTime: "8 min read",
    link: `${ACT}/wings-of-time-singapore-show`,
  },
  {
    title: "Singapore River Cruise Experience — Day vs Night & Route Guide",
    description: "Singapore River Cruise complete guide — Clarke Quay to Marina Bay route, day vs night cruise, ticket cost in INR and best photo spots.",
    category: "activity", image: riverCruiseImg, date: "May 18, 2026", readTime: "8 min read",
    link: `${ACT}/singapore-river-cruise-guide`,
  },
  {
    title: "Gardens by the Bay Attractions Guide — Cloud Forest, Flower Dome & Supertrees",
    description: "Gardens by the Bay 2026 guide — Supertree Grove, Cloud Forest, Flower Dome, Garden Rhapsody light show, free vs paid attractions and INR cost.",
    category: "activity", image: gardensBayImg, date: "May 18, 2026", readTime: "10 min read",
    link: `${ACT}/gardens-by-the-bay-guide`,
  },
  {
    title: "Singapore Flyer Observation Wheel Experience — Complete 2026 Guide",
    description: "Singapore Flyer guide — 165m capsule ride, sunset vs night timing, ticket options, Flyer vs SkyHelix comparison and INR ticket cost from India.",
    category: "activity", image: flyerImg, date: "May 18, 2026", readTime: "8 min read",
    link: `${ACT}/singapore-flyer-observation-wheel`,
  },
  {
    title: "Universal Studios Singapore Full Experience — Rides, Tips & Itinerary",
    description: "Universal Studios Singapore 2026 guide — all 7 themed zones, top rides, Express Pass value, full-day itinerary and INR ticket pricing.",
    category: "activity", image: universalImg, date: "May 18, 2026", readTime: "11 min read",
    link: `${ACT}/universal-studios-singapore-guide`,
  },
  {
    title: "Big Bus Singapore Hop-On Hop-Off Experience — Routes, Tips & Cost",
    description: "Big Bus Singapore hop-on hop-off guide — Red heritage route, Yellow city route, 24/48-hour passes and how to plan your stops efficiently.",
    category: "activity", image: bigBusImg, date: "May 18, 2026", readTime: "8 min read",
    link: `${ACT}/big-bus-singapore-hop-on-hop-off`,
  },
];

export const getSingaporeBlogsByCategory = (category: SingaporeBlogCategory) =>
  singaporeBlogs.filter((b) => b.category === category);
