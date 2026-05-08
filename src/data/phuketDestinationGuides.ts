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
import imgItin4Days from "@/assets/phi-phi-1.jpg";
import imgItin5Days from "@/assets/james-bond-island-hero.jpg";
import imgItinHoneymoon from "@/assets/phuket-longtail-boats-beach-1.jpg";
import imgItinKrabiCombo from "@/assets/krabi-longtail-boats-1.jpg";
import imgItinLuxury from "@/assets/phuket-island-viewpoint-1.jpg";
import imgTransferAirportPatong from "@/assets/phuket-mai-khao-beach-plane.jpg";

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
  {
    title: "Best Phi Phi Island Tours from Phuket (2026 Updated Guide)",
    description: "Compare speedboat, big boat, luxury and private Phi Phi tours from Phuket — pricing, inclusions and best pick for Indian travelers.",
    category: "activity", image: imgBestPhiPhi, date: "May 7, 2026", readTime: "11 min read",
    link: "/thailand/phuket/destination-guides/activity/best-phi-phi-island-tours",
  },
  {
    title: "Maya Bay Tour Guide: Rules, Best Time & What to Expect (2026)",
    description: "Maya Bay 2026 rules, opening hours, no-swim zones, best time and how to plan a Phi Phi Leh tour from Phuket.",
    category: "activity", image: imgMayaBay, date: "May 7, 2026", readTime: "9 min read",
    link: "/thailand/phuket/destination-guides/activity/maya-bay-tour-guide",
  },
  {
    title: "Dolphin Show Phuket: Tickets, Timing & Honest Review (2026)",
    description: "Phuket Dolphin Show 2026 — ticket price in INR, seat types, timings and is it worth it for families.",
    category: "activity", image: imgDolphin, date: "May 7, 2026", readTime: "8 min read",
    link: "/thailand/phuket/destination-guides/activity/dolphin-show-phuket",
  },
  {
    title: "Big Buddha Phuket: Timings, Entry & Complete Visitor Guide (2026)",
    description: "Big Buddha Phuket 2026 — free entry, timings, dress code, how to reach and best photo spots.",
    category: "activity", image: imgBigBuddha, date: "May 7, 2026", readTime: "9 min read",
    link: "/thailand/phuket/destination-guides/activity/big-buddha-phuket-guide",
  },
  {
    title: "James Bond Island Tour from Phuket: Complete Experience Guide (2026)",
    description: "James Bond Island & Phang Nga Bay 2026 — speedboat vs big boat, sea canoeing, Koh Panyee floating village and cost in INR.",
    category: "activity", image: imgJamesBond, date: "May 7, 2026", readTime: "10 min read",
    link: "/thailand/phuket/destination-guides/activity/james-bond-island-tour-guide",
  },
  {
    title: "Phuket City Tour: Big Buddha, Wat Chalong & Old Town Guide (2026)",
    description: "Phuket City Tour 2026 — full itinerary covering Big Buddha, Wat Chalong, Karon Viewpoint, Old Town and cost in INR.",
    category: "activity", image: imgCityTour, date: "May 7, 2026", readTime: "9 min read",
    link: "/thailand/phuket/destination-guides/activity/phuket-city-tour-guide",
  },
  {
    title: "Snorkeling in Phuket: Best Spots, Tours & Cost Guide (2026)",
    description: "Best snorkeling spots in Phuket 2026 — Coral Island, Phi Phi reefs, Khai Islands — tour options and cost in INR.",
    category: "activity", image: imgSnorkeling, date: "May 7, 2026", readTime: "10 min read",
    link: "/thailand/phuket/destination-guides/activity/snorkeling-in-phuket-guide",
  },
  {
    title: "4 Days Phuket Itinerary: Phi Phi, City Tour & Activities Plan (2026)",
    description: "Perfectly balanced 4-day Phuket itinerary — Phi Phi, city tour, adventure activities, costs in INR and smart tips for Indian travelers.",
    category: "itinerary", image: imgItin4Days, date: "May 8, 2026", readTime: "10 min read",
    link: "/thailand/phuket/destination-guides/itinerary/phuket-4-days-itinerary",
  },
  {
    title: "5 Days Phuket Itinerary with Phi Phi & James Bond Island (2026)",
    description: "Ideal 5-day Phuket plan covering Phi Phi, James Bond Island, city tour and adventure — costs in INR and Indian-traveler tips.",
    category: "itinerary", image: imgItin5Days, date: "May 8, 2026", readTime: "11 min read",
    link: "/thailand/phuket/destination-guides/itinerary/phuket-5-days-itinerary",
  },
  {
    title: "Phuket Honeymoon Itinerary (4–5 Days Romantic Plan) — 2026",
    description: "Romantic 4–5 day Phuket honeymoon itinerary — Phi Phi, sunset cliffs, spa, candlelight dinners and budget in INR for Indian couples.",
    category: "itinerary", image: imgItinHoneymoon, date: "May 8, 2026", readTime: "10 min read",
    link: "/thailand/phuket/destination-guides/itinerary/phuket-honeymoon-itinerary",
  },
  {
    title: "Phuket + Krabi Combo Itinerary: 6–7 Days Thailand Plan (2026)",
    description: "Smart 6–7 day Phuket + Krabi combo itinerary — why it works, day-by-day plan, transfer tips and total cost in INR.",
    category: "itinerary", image: imgItinKrabiCombo, date: "May 8, 2026", readTime: "11 min read",
    link: "/thailand/phuket/destination-guides/itinerary/phuket-krabi-combo-itinerary",
  },
  {
    title: "Phuket Luxury Itinerary: Premium Experiences & Resorts (5–6 Days) — 2026",
    description: "Premium 5–6 day Phuket luxury itinerary — private Phi Phi, beach clubs, sunset yachts, fine dining and signature resorts in INR.",
    category: "itinerary", image: imgItinLuxury, date: "May 8, 2026", readTime: "11 min read",
    link: "/thailand/phuket/destination-guides/itinerary/phuket-luxury-itinerary",
  },
  {
    title: "Phuket Airport to Patong: Best Transfer Options (Taxi, Private, Shared) — 2026 Guide",
    description: "HKT to Patong in 2026 — taxi, private and shared transfers compared with cost in INR, travel time and the smartest pick for Indian travelers.",
    category: "transfer", image: imgTransferAirportPatong, date: "May 8, 2026", readTime: "9 min read",
    link: "/thailand/phuket/destination-guides/transfer/phuket-airport-to-patong",
  },
];

export const getPhuketBlogsByCategory = (cat: PhuketBlogCategory) =>
  phuketBlogs.filter((b) => b.category === cat);
