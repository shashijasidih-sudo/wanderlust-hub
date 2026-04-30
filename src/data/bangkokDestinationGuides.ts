import blogChaoPhrayaCruise from "@/assets/blog-chao-phraya-cruise-night.jpg";
import blogCruiseCouples from "@/assets/blog-cruise-couples-watarun.jpg";
import blogWatArunSunset from "@/assets/blog-wat-arun-sunset.jpg";
import blogGrandPalace from "@/assets/blog-grand-palace-spires.jpg";
import blogMahanakhon from "@/assets/blog-mahanakhon-skywalk.jpg";
import blogSeaLife from "@/assets/blog-sea-life-aquarium.jpg";
import blogSafariWorld from "@/assets/blog-safari-world-lions.jpg";
import blogTemplesSunset from "@/assets/blog-temples-sunset-river.jpg";
import blogCostBudget from "@/assets/blog-bangkok-cost-budget.jpg";
import blogFamilyCost from "@/assets/blog-bangkok-family-cost.jpg";
import blogCoupleCost from "@/assets/blog-bangkok-couple-cost.jpg";
import blogStreetFoodCost from "@/assets/blog-bangkok-street-food-cost.jpg";
import blogSafariCost from "@/assets/blog-bangkok-safari-cost.jpg";
import blogTransportCost from "@/assets/blog-bangkok-transport-cost.jpg";

import bangkokSkywalk from "@/assets/bangkok-skywalk-1.jpg";
import bangkokTemple from "@/assets/bangkok-temple-1.jpg";
import bangkokCity from "@/assets/bangkok-city-1.jpg";
import grandPalaceWatArun from "@/assets/grand-palace-wat-arun.jpg";
import cruiseNight from "@/assets/cruise-night-1.jpg";
import floatingMarket from "@/assets/floating-market-daylight-1.jpg";
import bangkokPagodaSunset from "@/assets/bangkok-pagoda-sunset-1.jpg";
import bangkokRiverside from "@/assets/bangkok-riverside-temple-1.jpg";

export type BangkokBlogCategory =
  | "activity"
  | "price-cost"
  | "comparison"
  | "itinerary"
  | "indian-audience"
  | "micro"
  | "transfer";

export interface BangkokCategoryMeta {
  key: BangkokBlogCategory;
  label: string;
  short: string;
  description: string;
}

export const BANGKOK_CATEGORIES: BangkokCategoryMeta[] = [
  {
    key: "activity",
    label: "Activity Blogs",
    short: "Activities",
    description:
      "Attraction guides, experience-based reviews and Bangkok must-do tours.",
  },
  {
    key: "price-cost",
    label: "Price / Cost Blogs",
    short: "Price & Cost",
    description: "Trip costs, ticket pricing and detailed budget breakdowns.",
  },
  {
    key: "comparison",
    label: "Comparison Blogs",
    short: "Comparisons",
    description:
      "Bangkok vs Phuket, Princess vs White Orchid and other side-by-side guides.",
  },
  {
    key: "itinerary",
    label: "Itinerary Blogs",
    short: "Itineraries",
    description:
      "2-day, 3-day, 4-day and family / couple itineraries that actually work.",
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
    description:
      "Short, high-intent answers — dress codes, best timings, quick tips.",
  },
  {
    key: "transfer",
    label: "Transfer Blogs",
    short: "Transfers",
    description:
      "Airport pickups, drops and city-to-city transport explained.",
  },
];

export interface BangkokBlogEntry {
  title: string;
  description: string;
  category: BangkokBlogCategory;
  image: string;
  date: string;
  readTime: string;
  link: string;
  /** True for blogs that exist as full pages on the site already. */
  external?: boolean;
}

export const bangkokBlogs: BangkokBlogEntry[] = [
  // ===================== ACTIVITY BLOGS (new from doc) =====================
  {
    title: "Chao Phraya Princess Dinner Cruise Review: Is It Worth It in 2026?",
    description:
      "An honest review of food, views, entertainment and pricing — plus who should book and who shouldn't.",
    category: "activity",
    image: blogChaoPhrayaCruise,
    date: "Apr 28, 2026",
    readTime: "9 min read",
    link: "/thailand/bangkok/destination-guides/activity/chao-phraya-princess-cruise-review",
  },
  {
    title: "Best Dinner Cruises in Bangkok for Couples (2026)",
    description:
      "Compare the most romantic Chao Phraya cruises — Princess, luxury options and White Orchid.",
    category: "activity",
    image: blogCruiseCouples,
    date: "Apr 27, 2026",
    readTime: "8 min read",
    link: "/thailand/bangkok/destination-guides/activity/best-dinner-cruises-bangkok-couples",
  },
  {
    title: "Wat Arun Bangkok Guide: Tickets, Timings & Photo Spots (2026)",
    description:
      "Everything about the Temple of Dawn — entry fee, best time to visit and the Insta-perfect angles.",
    category: "activity",
    image: blogWatArunSunset,
    date: "Apr 26, 2026",
    readTime: "7 min read",
    link: "/thailand/bangkok/destination-guides/activity/wat-arun-bangkok-guide",
  },
  {
    title: "Grand Palace Bangkok Guide: Tickets, Dress Code & Tips (2026)",
    description:
      "Skip the queues and the dress-code denials with this complete Grand Palace planning guide.",
    category: "activity",
    image: blogGrandPalace,
    date: "Apr 25, 2026",
    readTime: "9 min read",
    link: "/thailand/bangkok/destination-guides/activity/grand-palace-bangkok-guide",
  },
  {
    title: "Mahanakhon Skywalk Tickets: Price, Sunset Timing & Tips (2026)",
    description:
      "Bangkok's highest glass-floor observation deck — pricing, the best time to go and what to wear.",
    category: "activity",
    image: blogMahanakhon,
    date: "Apr 24, 2026",
    readTime: "7 min read",
    link: "/thailand/bangkok/destination-guides/activity/mahanakhon-skywalk-tickets-guide",
  },
  {
    title: "Safari World Bangkok Guide: Shows, Tickets & Timings (2026)",
    description:
      "Drive-through safari, marine park, dolphin and orangutan shows — plan a perfect family day.",
    category: "activity",
    image: blogSafariWorld,
    date: "Apr 23, 2026",
    readTime: "10 min read",
    link: "/thailand/bangkok/destination-guides/activity/safari-world-bangkok-guide",
  },
  {
    title: "Sea Life Bangkok: Is It Worth It? Tickets & Tips (2026)",
    description:
      "What to expect inside Bangkok's biggest aquarium — combo tickets, photography and best timing.",
    category: "activity",
    image: blogSeaLife,
    date: "Apr 22, 2026",
    readTime: "8 min read",
    link: "/thailand/bangkok/destination-guides/activity/sea-life-bangkok-guide",
  },
  {
    title: "Bangkok Half-Day vs Full-Day Temple Tour: Which to Choose?",
    description:
      "Compare temple tour formats by time, depth and cost so you book the right experience.",
    category: "activity",
    image: blogTemplesSunset,
    date: "Apr 21, 2026",
    readTime: "7 min read",
    link: "/thailand/bangkok/destination-guides/activity/bangkok-temple-tour-half-vs-full-day",
  },

  // ===== Existing Bangkok blogs reclassified under ACTIVITY =====
  {
    title: "Bangkok Activities Booking Guide",
    description:
      "Plan the perfect Bangkok itinerary — temples, cruises, markets and night tours with insider tips.",
    category: "activity",
    image: bangkokCity,
    date: "Mar 1, 2026",
    readTime: "9 min read",
    link: "/blog/bangkok-activities-guide",
    external: true,
  },
  {
    title: "Bangkok's Iconic Temple Trail",
    description:
      "Wat Arun, Wat Pho, Wat Traimit and the Grand Palace — what to see and how to plan the day.",
    category: "activity",
    image: bangkokTemple,
    date: "Feb 28, 2026",
    readTime: "9 min read",
    link: "/thailand/bangkok/wat-arun-wat-pho-golden-buddha-tour",
    external: true,
  },
  {
    title: "Chao Phraya Dinner Cruise Experience",
    description:
      "Compare Princess, Viva Alangka and Valentine cruises — pricing, menus and best seats.",
    category: "activity",
    image: cruiseNight,
    date: "Mar 2, 2026",
    readTime: "7 min read",
    link: "/thailand/bangkok/chao-phraya-princess-dinner-cruise-with-private-transfer",
    external: true,
  },
  {
    title: "Ayutthaya & Sunset Cruise from Bangkok",
    description:
      "UNESCO temples by day and a Chao Phraya sunset cruise to round off the trip.",
    category: "activity",
    image: bangkokPagodaSunset,
    date: "Feb 18, 2026",
    readTime: "10 min read",
    link: "/thailand/bangkok/ayutthaya-sunset-river-cruise",
    external: true,
  },
  {
    title: "Best Thailand Activities to Book Online",
    description:
      "Top-rated tours across Bangkok, Phuket, Krabi and Pattaya — what's worth booking before you fly.",
    category: "activity",
    image: grandPalaceWatArun,
    date: "Feb 25, 2026",
    readTime: "10 min read",
    link: "/blog/best-thailand-activities",
    external: true,
  },
  {
    title: "Riverside Bangkok: Where to Stay & What to Do",
    description:
      "From Asiatique to IconSiam — the best riverside spots, hotels and easy transfer tips.",
    category: "activity",
    image: bangkokRiverside,
    date: "Feb 12, 2026",
    readTime: "8 min read",
    link: "/blog/bangkok-activities-guide",
    external: true,
  },
  {
    title: "Complete Guide to Thailand Food Experiences",
    description:
      "Bangkok street food, riverside dining, floating markets and rooftop restaurants — all in one guide.",
    category: "activity",
    image: floatingMarket,
    date: "Mar 5, 2026",
    readTime: "11 min read",
    link: "/blog/thailand-food-experiences",
    external: true,
  },
];

export const getBangkokBlogsByCategory = (cat: BangkokBlogCategory) =>
  bangkokBlogs.filter((b) => b.category === cat);
