import cityPattaya from "@/assets/city-pattaya.jpg";

export type PattayaBlogCategory =
  | "activity"
  | "price-cost"
  | "comparison"
  | "itinerary"
  | "indian-audience"
  | "micro"
  | "transfer";

export interface PattayaCategoryMeta {
  key: PattayaBlogCategory;
  label: string;
  short: string;
  description: string;
}

export const PATTAYA_CATEGORIES: PattayaCategoryMeta[] = [
  {
    key: "activity",
    label: "Activity Blogs",
    short: "Activities",
    description:
      "Coral Island, cabaret shows, water sports and Pattaya must-do experiences.",
  },
  {
    key: "price-cost",
    label: "Price / Cost Blogs",
    short: "Price & Cost",
    description: "Trip costs, ticket pricing and detailed Pattaya budget breakdowns.",
  },
  {
    key: "comparison",
    label: "Comparison Blogs",
    short: "Comparisons",
    description:
      "Pattaya vs Bangkok, Alcazar vs Tiffany and other side-by-side guides.",
  },
  {
    key: "itinerary",
    label: "Itinerary Blogs",
    short: "Itineraries",
    description:
      "2-day, 3-day, 4-day and family / couple Pattaya itineraries.",
  },
  {
    key: "indian-audience",
    label: "Indian Audience Blogs",
    short: "For Indians",
    description:
      "Visa, food, currency and safety tips written for Indian travelers.",
  },
  {
    key: "micro",
    label: "Micro Blogs",
    short: "Micro Guides",
    description: "Short, high-intent Pattaya answers — best timings, dress, quick tips.",
  },
  {
    key: "transfer",
    label: "Transfer Blogs",
    short: "Transfers",
    description: "Airport pickups, drops and city-to-city Pattaya transport explained.",
  },
];

export interface PattayaBlogEntry {
  title: string;
  description: string;
  category: PattayaBlogCategory;
  image: string;
  date: string;
  readTime: string;
  link: string;
  external?: boolean;
}

// Blogs will be added one-by-one per category in follow-up turns.
export const pattayaBlogs: PattayaBlogEntry[] = [];

export const getPattayaBlogsByCategory = (cat: PattayaBlogCategory) =>
  pattayaBlogs.filter((b) => b.category === cat);

export const PATTAYA_HUB_FALLBACK_IMAGE = cityPattaya;
