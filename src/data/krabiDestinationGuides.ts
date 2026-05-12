import imgItin4Days from "@/assets/krabi-longtail-boats-1.jpg";
import imgItin5Days from "@/assets/krabi-boat-tour-1.jpg";
import imgItin3Days from "@/assets/krabi-island-viewpoint-1.jpg";
import imgItinHoneymoon from "@/assets/krabi-beach-woman-1.jpg";
import imgIndPackages from "@/assets/krabi-tour-boat-1.jpg";
import imgIndFood from "@/assets/city-krabi.jpg";
import imgIndHoneymoon from "@/assets/krabi-sailboat-1.jpg";

export type KrabiBlogCategory =
  | "activity"
  | "comparison"
  | "itinerary"
  | "indian-audience"
  | "micro"
  | "transfer";

export interface KrabiCategoryMeta {
  key: KrabiBlogCategory;
  label: string;
  short: string;
  description: string;
}

export const KRABI_CATEGORIES: KrabiCategoryMeta[] = [
  { key: "itinerary", label: "Itinerary Blogs", short: "Itineraries",
    description: "3-day, 4-day, 5-day and honeymoon Krabi itineraries with day-by-day plans." },
  { key: "indian-audience", label: "Indian Audience Blogs", short: "For Indians",
    description: "Visa, food, currency and tips for Indian travelers visiting Krabi." },
  { key: "activity", label: "Activity Blogs", short: "Activities",
    description: "Phi Phi, Hong Island, 4 Island Tour, Railay and Krabi must-do experiences." },
  { key: "comparison", label: "Comparison Blogs", short: "Comparisons",
    description: "Krabi vs Phuket, speedboat vs longtail and side-by-side decision guides." },
  { key: "micro", label: "Micro Guides", short: "Micro",
    description: "Short, focused micro-guides on specific Krabi spots and tips." },
  { key: "transfer", label: "Transfer Blogs", short: "Transfers",
    description: "Krabi airport pickups, drops and city-to-city transport explained." },
];

export interface KrabiBlogEntry {
  title: string;
  description: string;
  category: KrabiBlogCategory;
  image: string;
  date: string;
  readTime: string;
  link: string;
}

export const krabiBlogs: KrabiBlogEntry[] = [
  {
    title: "4 Days Krabi Itinerary 2026: Islands, Beaches & Adventure (Indian Travelers Guide)",
    description: "Perfectly balanced 4-day Krabi plan — Ao Nang, 4 Island Tour, Hong Island, jungle trip, INR budget and smart tips for Indian travelers.",
    category: "itinerary", image: imgItin4Days, date: "May 9, 2026", readTime: "10 min read",
    link: "/thailand/krabi/destination-guides/itinerary/krabi-4-days-itinerary",
  },
  {
    title: "5 Days Krabi Itinerary with Phi Phi Islands (2026 Complete Guide)",
    description: "Best 5-day Krabi + Phi Phi itinerary — 4 Island Tour, Maya Bay, Hong Island, jungle and INR budget tailored for Indian travelers.",
    category: "itinerary", image: imgItin5Days, date: "May 9, 2026", readTime: "11 min read",
    link: "/thailand/krabi/destination-guides/itinerary/krabi-5-days-itinerary",
  },
  {
    title: "3 Days Krabi Itinerary: Short Trip Plan for Phi Phi & Islands (2026)",
    description: "Quick 3-day Krabi itinerary — Ao Nang, 4 Island Tour, Phi Phi or jungle, INR cost breakdown and what you can realistically cover.",
    category: "itinerary", image: imgItin3Days, date: "May 9, 2026", readTime: "9 min read",
    link: "/thailand/krabi/destination-guides/itinerary/krabi-3-days-itinerary",
  },
  {
    title: "5 Days Krabi Honeymoon Itinerary for Indian Couples (2026 Romantic Plan)",
    description: "Romantic 5-day Krabi honeymoon — Railay, 4 Island Tour, Phi Phi, sunset cruise, spa and budget in INR for Indian couples.",
    category: "itinerary", image: imgItinHoneymoon, date: "May 9, 2026", readTime: "11 min read",
    link: "/thailand/krabi/destination-guides/itinerary/krabi-honeymoon-itinerary",
  },
  {
    title: "Best Krabi Packages for Indian Couples (2026 Guide)",
    description: "Compare Krabi tour packages for Indian couples in 2026 — budget, mid-range, honeymoon and luxury options with INR pricing, inclusions and smart booking tips.",
    category: "indian-audience", image: imgIndPackages, date: "May 12, 2026", readTime: "10 min read",
    link: "/thailand/krabi/destination-guides/indian-audience/best-krabi-packages-for-indian-couples",
  },
  {
    title: "Indian Restaurants in Krabi: Where to Eat Vegetarian Food (2026 Guide)",
    description: "Best Indian, vegetarian and Jain food spots in Krabi for 2026 — restaurants in Ao Nang, prices in INR, breakfast options and smart food tips for Indian travelers.",
    category: "indian-audience", image: imgIndFood, date: "May 12, 2026", readTime: "9 min read",
    link: "/thailand/krabi/destination-guides/indian-audience/indian-restaurants-in-krabi",
  },
  {
    title: "Krabi Honeymoon Guide for Indian Couples (2026)",
    description: "Complete Krabi honeymoon guide for Indian couples in 2026 — best areas to stay, romantic experiences, ideal itinerary, INR budget and smart tips.",
    category: "indian-audience", image: imgIndHoneymoon, date: "May 12, 2026", readTime: "11 min read",
    link: "/thailand/krabi/destination-guides/indian-audience/krabi-honeymoon-guide-for-indian-couples",
  },
];

export const getKrabiBlogsByCategory = (category: KrabiBlogCategory) =>
  krabiBlogs.filter((b) => b.category === category);
