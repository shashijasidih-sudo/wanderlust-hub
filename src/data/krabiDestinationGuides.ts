import imgItin4Days from "@/assets/krabi-longtail-boats-1.jpg";
import imgItin5Days from "@/assets/krabi-boat-tour-1.jpg";
import imgItin3Days from "@/assets/krabi-island-viewpoint-1.jpg";
import imgItinHoneymoon from "@/assets/krabi-beach-woman-1.jpg";
import imgIndPackages from "@/assets/krabi-tour-boat-1.jpg";
import imgIndFood from "@/assets/city-krabi.jpg";
import imgIndHoneymoon from "@/assets/krabi-sailboat-1.jpg";
import imgMicro4Island from "@/assets/krabi-longtail-boats-1.jpg";
import imgMicroIslandHopping from "@/assets/krabi-boat-tour-1.jpg";
import imgTrAoNang from "@/assets/krabi-tour-boat-1.jpg";
import imgTrPhuketKrabi from "@/assets/krabi-speedboat-1.jpg";
import imgTrPhiPhi from "@/assets/phi-phi-boat.jpeg";
import imgTrSpeedboatFerry from "@/assets/phuket-speedboat-1.jpg";
import imgCmpKrabiPhuket from "@/assets/krabi-island-viewpoint-1.jpg";
import imgCmp4IslandHong from "@/assets/krabi-boat-tour-1.jpg";
import imgCmpKrabiPhiPhi from "@/assets/krabi-sailboat-1.jpg";
import imgCmpLongtailSpeedboat from "@/assets/krabi-longtail-boats-1.jpg";
import imgAct15Things from "@/assets/krabi-island-viewpoint-1.jpg";
import imgAct4Island from "@/assets/krabi-longtail-boats-1.jpg";
import imgActPhiPhi from "@/assets/phi-phi-boat.jpeg";
import imgActHongIsland from "@/assets/krabi-boat-tour-1.jpg";
import imgActEmeraldPool from "@/assets/hot-spring-emerald-hero.jpg";
import imgActNightMarkets from "@/assets/krabi-temple-woman-1.jpg";
import imgActKayaking from "@/assets/krabi-kayaks-beach-1.jpg";

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
  {
    title: "Is 4 Island Tour in Krabi Worth It in 2026? (Complete Guide)",
    description: "Honest 2026 verdict on the Krabi 4 Island Tour — what's included, pros & cons, longtail vs speedboat, INR cost breakdown and who should (and shouldn't) book it.",
    category: "micro", image: imgMicro4Island, date: "May 13, 2026", readTime: "9 min read",
    link: "/thailand/krabi/destination-guides/micro/is-4-island-tour-krabi-worth-it",
  },
  {
    title: "Best Time for Island Hopping in Krabi (Month-wise Guide 2026)",
    description: "Month-by-month Krabi island hopping guide for 2026 — best months for calm seas, snorkeling visibility, lower prices and which months to avoid for boat tours.",
    category: "micro", image: imgMicroIslandHopping, date: "May 13, 2026", readTime: "10 min read",
    link: "/thailand/krabi/destination-guides/micro/best-time-for-island-hopping-in-krabi",
  },
  {
    title: "Krabi Airport to Ao Nang Transfer Guide (Taxi, Shuttle, Cost — 2026)",
    description: "Complete 2026 guide to getting from Krabi Airport to Ao Nang — shared shuttle, private taxi and hotel transfer options with INR cost, travel time and pro tips.",
    category: "transfer", image: imgTrAoNang, date: "May 14, 2026", readTime: "9 min read",
    link: "/thailand/krabi/destination-guides/transfer/krabi-airport-to-ao-nang-transfer-guide",
  },
  {
    title: "Phuket to Krabi Transfer Guide (Bus, Ferry, Taxi — 2026)",
    description: "Compare bus, ferry and private taxi from Phuket to Krabi — INR cost, travel time, comfort and the best pick for Indian travelers in 2026.",
    category: "transfer", image: imgTrPhuketKrabi, date: "May 14, 2026", readTime: "10 min read",
    link: "/thailand/krabi/destination-guides/transfer/phuket-to-krabi-transfer-guide",
  },
  {
    title: "Krabi to Phi Phi Transfer: Ferry vs Speedboat (2026 Guide)",
    description: "Krabi to Phi Phi ferry vs speedboat — cost in INR, travel time, comfort, timings and tips to pick the right transfer in 2026.",
    category: "transfer", image: imgTrPhiPhi, date: "May 14, 2026", readTime: "9 min read",
    link: "/thailand/krabi/destination-guides/transfer/krabi-to-phi-phi-ferry-vs-speedboat",
  },
  {
    title: "Krabi Speedboat Transfers vs Ferry: Which is Faster? (2026 Guide)",
    description: "Krabi speedboat vs ferry compared — speed, INR cost, comfort and which transfer to pick for Phi Phi, Hong Island and other 2026 day tours.",
    category: "transfer", image: imgTrSpeedboatFerry, date: "May 14, 2026", readTime: "8 min read",
    link: "/thailand/krabi/destination-guides/transfer/krabi-speedboat-vs-ferry-which-is-faster",
  },
  {
    title: "Krabi vs Phuket: Which is Better for Indian Travelers? (2026 Guide)",
    description: "Krabi vs Phuket compared for Indian travelers in 2026 — cost in INR, beaches, nightlife, food, transport, safety and which to pick for honeymoon, family or friends.",
    category: "comparison", image: imgCmpKrabiPhuket, date: "May 15, 2026", readTime: "11 min read",
    link: "/thailand/krabi/destination-guides/comparison/krabi-vs-phuket-for-indian-travelers",
  },
  {
    title: "4 Island Tour vs Hong Island Tour Krabi: Which is Better? (2026)",
    description: "Krabi 4 Island Tour vs Hong Island Tour compared — beauty, crowd, cost in INR, activities and which to pick for first-time travelers, couples and families in 2026.",
    category: "comparison", image: imgCmp4IslandHong, date: "May 15, 2026", readTime: "10 min read",
    link: "/thailand/krabi/destination-guides/comparison/4-island-vs-hong-island-tour-krabi",
  },
  {
    title: "Krabi vs Phi Phi Stay: Where Should You Stay? (2026 Guide)",
    description: "Krabi vs Phi Phi stay compared for 2026 — cost in INR, beaches, nightlife, food, activities and the best plan for Indian couples, families and first-time travelers.",
    category: "comparison", image: imgCmpKrabiPhiPhi, date: "May 15, 2026", readTime: "10 min read",
    link: "/thailand/krabi/destination-guides/comparison/krabi-vs-phi-phi-where-to-stay",
  },
  {
    title: "Longtail Boat vs Speedboat in Krabi: Which to Choose? (2026)",
    description: "Krabi longtail boat vs speedboat compared — speed, comfort, INR cost, safety and which boat to pick for 4 Island Tour, Hong Island and Phi Phi trips in 2026.",
    category: "comparison", image: imgCmpLongtailSpeedboat, date: "May 15, 2026", readTime: "9 min read",
    link: "/thailand/krabi/destination-guides/comparison/longtail-vs-speedboat-in-krabi",
  },
];

export const getKrabiBlogsByCategory = (category: KrabiBlogCategory) =>
  krabiBlogs.filter((b) => b.category === category);
