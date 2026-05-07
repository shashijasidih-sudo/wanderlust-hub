import imgSpeedboatVsBig from "@/assets/phuket-big-boat-1.jpg";
import imgPhuketVsKrabi from "@/assets/city-krabi.jpg";
import imgJamesBondVsPhiPhi from "@/assets/james-bond-island-hero.jpg";
import imgPrivateVsGroup from "@/assets/phuket-speedboat-1.jpg";
import imgDolphinVsSafari from "@/assets/dolphin-show-1.jpg";
import imgCityVsIsland from "@/assets/phuket-night-market-1.jpg";
import imgSharedVsPrivate from "@/assets/blog-bkk-airport-transfer.jpg";
import imgPhuketVsBali from "@/assets/phuket-longtail-boats-beach-1.jpg";
import imgLuxuryVsBudget from "@/assets/phuket-island-viewpoint-1.jpg";
import imgBestPhiPhi from "@/assets/phuket-speedboat-1.jpg";
import imgMayaBay from "@/assets/phuket-longtail-boats-beach-1.jpg";
import imgDolphin from "@/assets/dolphin-show-1.jpg";
import imgBigBuddha from "@/assets/phuket-island-viewpoint-1.jpg";
import imgJamesBond from "@/assets/james-bond-island-hero.jpg";
import imgCityTour from "@/assets/phuket-night-market-1.jpg";
import imgSnorkeling from "@/assets/phuket-big-boat-1.jpg";

export type PhuketBlogCategory =
  | "activity"
  | "comparison"
  | "price-cost"
  | "itinerary"
  | "indian-audience"
  | "transfer";

export interface PhuketCategoryMeta {
  key: PhuketBlogCategory;
  label: string;
  short: string;
  description: string;
}

export const PHUKET_CATEGORIES: PhuketCategoryMeta[] = [
  { key: "activity", label: "Activity Blogs", short: "Activities",
    description: "Phi Phi, James Bond, Big Buddha, cabaret shows and Phuket must-do experiences." },
  { key: "comparison", label: "Comparison Blogs", short: "Comparisons",
    description: "Phuket vs Krabi, Phuket vs Bali, speedboat vs big boat — side-by-side decision guides." },
  { key: "price-cost", label: "Price / Cost Blogs", short: "Price & Cost",
    description: "Trip costs, ticket pricing and detailed Phuket budget breakdowns." },
  { key: "itinerary", label: "Itinerary Blogs", short: "Itineraries",
    description: "3-day, 5-day and family / honeymoon Phuket itineraries." },
  { key: "indian-audience", label: "Indian Audience Blogs", short: "For Indians",
    description: "Visa, food, currency and safety tips written for Indian travelers." },
  { key: "transfer", label: "Transfer Blogs", short: "Transfers",
    description: "Phuket airport pickups, drops and city-to-city transport explained." },
];

export interface PhuketBlogEntry {
  title: string;
  description: string;
  category: PhuketBlogCategory;
  image: string;
  date: string;
  readTime: string;
  link: string;
}

export const phuketBlogs: PhuketBlogEntry[] = [
  {
    title: "Phi Phi Island Speedboat vs Big Boat: Which Tour Should You Choose? (2026)",
    description: "Speedboat or big boat to Phi Phi from Phuket — cost, comfort, islands covered, crowds and the right pick for families vs adventure seekers.",
    category: "comparison", image: imgSpeedboatVsBig, date: "May 7, 2026", readTime: "10 min read",
    link: "/thailand/phuket/destination-guides/comparison/phi-phi-speedboat-vs-big-boat",
  },
  {
    title: "Phuket vs Krabi: Which Is Better for Indian Travelers? (2026 Guide)",
    description: "Honest 2026 Phuket vs Krabi comparison — connectivity, beaches, nightlife, honeymoon vibe, food and which suits Indian travelers best.",
    category: "comparison", image: imgPhuketVsKrabi, date: "May 7, 2026", readTime: "11 min read",
    link: "/thailand/phuket/destination-guides/comparison/phuket-vs-krabi-for-indians",
  },
  {
    title: "James Bond Island vs Phi Phi Island Tour: Which One Is Worth It? (2026)",
    description: "Phi Phi vs James Bond Island from Phuket — scenery, activities, crowds, cost in INR and the right pick for first-timers.",
    category: "comparison", image: imgJamesBondVsPhiPhi, date: "May 7, 2026", readTime: "10 min read",
    link: "/thailand/phuket/destination-guides/comparison/james-bond-island-vs-phi-phi-island",
  },
  {
    title: "Phuket Private Tour vs Group Tour: Cost & Experience Comparison (2026)",
    description: "Private vs group tours in Phuket — flexibility, cost per person, comfort and which works better for couples, families and solo travelers.",
    category: "comparison", image: imgPrivateVsGroup, date: "May 7, 2026", readTime: "9 min read",
    link: "/thailand/phuket/destination-guides/comparison/phuket-private-vs-group-tour",
  },
  {
    title: "Phuket Dolphin Show vs Safari World Bangkok: Which Is Better? (2026)",
    description: "Dolphin Show in Phuket or Safari World in Bangkok — duration, ticket cost, family value and which is worth your half-day.",
    category: "comparison", image: imgDolphinVsSafari, date: "May 7, 2026", readTime: "8 min read",
    link: "/thailand/phuket/destination-guides/comparison/phuket-dolphin-show-vs-safari-world-bangkok",
  },
  {
    title: "Phuket City Tour vs Island Tour: What Should You Pick? (2026)",
    description: "City tour vs island tour in Phuket — sightseeing depth, comfort, photos, cost and the smarter choice for short trips.",
    category: "comparison", image: imgCityVsIsland, date: "May 7, 2026", readTime: "9 min read",
    link: "/thailand/phuket/destination-guides/comparison/phuket-city-tour-vs-island-tour",
  },
  {
    title: "Shared vs Private Airport Transfer in Phuket: Which Is Better? (2026)",
    description: "Shared vans vs private cars from HKT airport — real cost in INR, time saved, comfort and the smartest option per group size.",
    category: "comparison", image: imgSharedVsPrivate, date: "May 7, 2026", readTime: "8 min read",
    link: "/thailand/phuket/destination-guides/comparison/shared-vs-private-airport-transfer-phuket",
  },
  {
    title: "Phuket vs Bali: Budget, Beaches & Activities Comparison (2026)",
    description: "Phuket vs Bali for Indian travelers — flights, budget, beaches, food, nightlife and which delivers a better tropical holiday in 2026.",
    category: "comparison", image: imgPhuketVsBali, date: "May 7, 2026", readTime: "11 min read",
    link: "/thailand/phuket/destination-guides/comparison/phuket-vs-bali",
  },
  {
    title: "Phuket Luxury vs Budget Travel: What's Worth It? (2026)",
    description: "Where to splurge and where to save in Phuket — accommodation, transport, island tours and dining compared at every budget tier.",
    category: "comparison", image: imgLuxuryVsBudget, date: "May 7, 2026", readTime: "10 min read",
    link: "/thailand/phuket/destination-guides/comparison/phuket-luxury-vs-budget-travel",
  },
];

export const getPhuketBlogsByCategory = (cat: PhuketBlogCategory) =>
  phuketBlogs.filter((b) => b.category === cat);
