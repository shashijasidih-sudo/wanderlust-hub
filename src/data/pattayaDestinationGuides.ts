import cityPattaya from "@/assets/city-pattaya.jpg";
import imgPattayaTripCost from "@/assets/pattaya-speedboat-1.jpg";
import imgCoralIslandPrice from "@/assets/pattaya-islands-boats-1.jpg";
import imgPattayaActivityPrices from "@/assets/pattaya-tropical-beach-1.jpg";
import imgAlcazarVsTiffany from "@/assets/alcazar-show-1.jpg";
import imgPattayaWaterSports from "@/assets/pattaya-boats-beach-1.jpg";
import imgPattaya3Day from "@/assets/pattaya-boat-tour-1.jpg";
import imgSanctuaryTruth from "@/assets/pattaya-temple-woman-1.jpg";
import imgTiffanyShow from "@/assets/show89-pattaya-1.jpg";
import imgNongNooch from "@/assets/pattaya-tropical-beach-1.jpg";
import imgRamayana from "@/assets/pattaya-lake-tour-1.jpg";
import imgUnderwaterWorld from "@/assets/blog-sea-life-aquarium.jpg";
import imgFloatingMarket from "@/assets/floating-market-1.jpg";

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

export const pattayaBlogs: PattayaBlogEntry[] = [
  {
    title: "Pattaya Trip Cost from India 2026: Complete Budget Breakdown",
    description: "Flights, visa, hotels, food, activities and transfers across budget, mid-range and luxury Pattaya travelers.",
    category: "price-cost",
    image: imgPattayaTripCost,
    date: "May 2, 2026",
    readTime: "9 min read",
    link: "/thailand/pattaya/destination-guides/price-cost/pattaya-trip-cost",
  },
  {
    title: "Coral Island Pattaya Price Guide: Tours vs Self-Planning (2026)",
    description: "Real Coral Island (Koh Larn) cost — tour packages vs DIY, water sports, ferry and hidden charges.",
    category: "price-cost",
    image: imgCoralIslandPrice,
    date: "May 2, 2026",
    readTime: "8 min read",
    link: "/thailand/pattaya/destination-guides/price-cost/coral-island-pattaya-price-guide",
  },
  {
    title: "Pattaya Activity Prices 2026: Full List (Shows, Islands, Parks)",
    description: "Updated 2026 prices for Coral Island, Alcazar, Tiffany's, Nong Nooch, Sanctuary of Truth, Ramayana and more.",
    category: "price-cost",
    image: imgPattayaActivityPrices,
    date: "May 2, 2026",
    readTime: "9 min read",
    link: "/thailand/pattaya/destination-guides/price-cost/pattaya-activity-prices",
  },
  {
    title: "Alcazar vs Tiffany Show Price Comparison 2026: Which Is Worth It?",
    description: "Side-by-side ticket pricing, seating, performance and value comparison for Pattaya's two big cabaret shows.",
    category: "price-cost",
    image: imgAlcazarVsTiffany,
    date: "May 2, 2026",
    readTime: "8 min read",
    link: "/thailand/pattaya/destination-guides/price-cost/alcazar-vs-tiffany-show-price",
  },
  {
    title: "Pattaya Water Sports Price Guide 2026: Parasailing, Jet Ski & More",
    description: "Updated rates for parasailing, jet ski, banana boat and sea walking — best locations and how to avoid scams.",
    category: "price-cost",
    image: imgPattayaWaterSports,
    date: "May 2, 2026",
    readTime: "8 min read",
    link: "/thailand/pattaya/destination-guides/price-cost/pattaya-water-sports-price-guide",
  },
  {
    title: "Pattaya 3 Days Trip Cost 2026: Budget vs Luxury (Day-Wise)",
    description: "Day-wise 3-day Pattaya cost across budget, mid-range and luxury — flights, hotels, food, activities and transfers.",
    category: "price-cost",
    image: imgPattaya3Day,
    date: "May 2, 2026",
    readTime: "9 min read",
    link: "/thailand/pattaya/destination-guides/price-cost/pattaya-3-days-trip-cost",
  },
  {
    title: "Sanctuary of Truth Ticket Price 2026 + Hidden Costs (Pattaya)",
    description: "Ticket price, what's included, hidden charges (elephant ride, boat ride, photos, transport) and budget tips.",
    category: "price-cost",
    image: imgSanctuaryTruth,
    date: "May 2, 2026",
    readTime: "7 min read",
    link: "/thailand/pattaya/destination-guides/price-cost/sanctuary-of-truth-ticket-price",
  },
  {
    title: "Coral Island Pattaya Guide 2026: Beaches, Activities & Tips",
    description: "Complete Coral Island (Koh Larn) guide — beaches, water sports, ferry vs speedboat, timings and what to pack.",
    category: "activity",
    image: imgCoralIslandPrice,
    date: "May 3, 2026",
    readTime: "8 min read",
    link: "/thailand/pattaya/destination-guides/activity/coral-island-pattaya-guide",
  },
  {
    title: "Sanctuary of Truth Pattaya Guide 2026: Architecture, Tips & Timings",
    description: "Visitor guide to Pattaya's all-wood Sanctuary of Truth — history, architecture, dress code, timings and add-ons.",
    category: "activity",
    image: imgSanctuaryTruth,
    date: "May 3, 2026",
    readTime: "8 min read",
    link: "/thailand/pattaya/destination-guides/activity/sanctuary-of-truth-guide",
  },
  {
    title: "Alcazar Cabaret Show Pattaya: Seating, Tickets & What to Expect",
    description: "Ticket prices, seating categories, performance highlights, after-show photos and pro tips for Pattaya's most-loved cabaret.",
    category: "activity",
    image: imgAlcazarVsTiffany,
    date: "May 4, 2026",
    readTime: "8 min read",
    link: "/thailand/pattaya/destination-guides/activity/alcazar-show-pattaya-guide",
  },
  {
    title: "Tiffany Show Pattaya Review: Tickets, Seating & Which Show is Better",
    description: "Honest Tiffany Show review — ticket prices, seating, production quality and a clear Tiffany vs Alcazar verdict.",
    category: "activity",
    image: imgTiffanyShow,
    date: "May 4, 2026",
    readTime: "8 min read",
    link: "/thailand/pattaya/destination-guides/activity/tiffany-show-pattaya-review",
  },
  {
    title: "Nong Nooch Tropical Garden Pattaya: Shows, Tickets & Best Route",
    description: "Entry tickets, cultural & elephant shows, skywalk, food and a half-day plan for Pattaya's biggest botanical garden.",
    category: "activity",
    image: imgNongNooch,
    date: "May 4, 2026",
    readTime: "9 min read",
    link: "/thailand/pattaya/destination-guides/activity/nong-nooch-garden-guide",
  },
  {
    title: "Ramayana Water Park Pattaya: Rides, Tickets & Tips",
    description: "Top rides, ticket prices, hidden costs, smart day plan and pro tips for Asia's largest water park near Pattaya.",
    category: "activity",
    image: imgRamayana,
    date: "May 4, 2026",
    readTime: "9 min read",
    link: "/thailand/pattaya/destination-guides/activity/ramayana-water-park-guide",
  },
  {
    title: "Underwater World Pattaya: Is It Worth Visiting?",
    description: "Tunnel walk, shark feeding, ticket prices and an honest worth-it verdict for Pattaya's family-friendly aquarium.",
    category: "activity",
    image: imgUnderwaterWorld,
    date: "May 4, 2026",
    readTime: "7 min read",
    link: "/thailand/pattaya/destination-guides/activity/underwater-world-pattaya-guide",
  },
  {
    title: "Pattaya Floating Market Guide: Shopping, Food & Entry Tips",
    description: "Entry tickets, must-try food, shopping tips, boat ride cost and a perfect 2-hour plan for the Four Regions Floating Market.",
    category: "activity",
    image: imgFloatingMarket,
    date: "May 4, 2026",
    readTime: "7 min read",
    link: "/thailand/pattaya/destination-guides/activity/pattaya-floating-market-guide",
  },
];

export const getPattayaBlogsByCategory = (cat: PattayaBlogCategory) =>
  pattayaBlogs.filter((b) => b.category === cat);

export const PATTAYA_HUB_FALLBACK_IMAGE = cityPattaya;
