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
import imgBigEyeShow from "@/assets/bigeye-show-pattaya-1.jpg";
import imgPhuketSpeedboat from "@/assets/phuket-speedboat-1.jpg";
import imgBangkokVsPattaya from "@/assets/blog-bangkok-vs-pattaya.jpg";
import imgPattayaWoman from "@/assets/pattaya-woman-sea-1.jpg";
import imgPattayaNightlife from "@/assets/pattaya-nightlife-1.jpg";

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
  {
    title: "Big Eye vs Show 69 vs Show 89 Pattaya: Honest Comparison (2026)",
    description: "Non-explicit comparison of Pattaya's adult-themed shows — prices, experience, safety and better cabaret alternatives.",
    category: "comparison",
    image: imgBigEyeShow,
    date: "May 4, 2026",
    readTime: "8 min read",
    link: "/thailand/pattaya/destination-guides/comparison/adult-shows-pattaya-comparison",
  },
  {
    title: "Alcazar vs Tiffany Show Pattaya: Which One Should You Choose?",
    description: "Side-by-side cabaret comparison — ticket prices, seating, performance quality and which Pattaya show suits you best.",
    category: "comparison",
    image: imgAlcazarVsTiffany,
    date: "May 4, 2026",
    readTime: "9 min read",
    link: "/thailand/pattaya/destination-guides/comparison/alcazar-vs-tiffany-show",
  },
  {
    title: "Coral Island Tour vs Koh Larn DIY: Which is Better? (2026)",
    description: "Pattaya Coral Island package tour vs self-planned Koh Larn — cost, water sports, transfers, food and best fit for you.",
    category: "comparison",
    image: imgCoralIslandPrice,
    date: "May 4, 2026",
    readTime: "9 min read",
    link: "/thailand/pattaya/destination-guides/comparison/coral-island-tour-vs-koh-larn-diy",
  },
  {
    title: "Pattaya vs Phuket: Which is Better for Indian Travelers? (2026)",
    description: "Pattaya vs Phuket honest comparison — cost, beaches, nightlife, food, family vs couple suitability and which to pick.",
    category: "comparison",
    image: imgPhuketSpeedboat,
    date: "May 4, 2026",
    readTime: "10 min read",
    link: "/thailand/pattaya/destination-guides/comparison/pattaya-vs-phuket",
  },
  {
    title: "Bangkok vs Pattaya: Where Should You Spend More Time? (2026)",
    description: "Bangkok vs Pattaya travel-time strategy — culture, beaches, nightlife, food, shopping and the perfect combo plan.",
    category: "comparison",
    image: imgBangkokVsPattaya,
    date: "May 4, 2026",
    readTime: "9 min read",
    link: "/thailand/pattaya/destination-guides/comparison/bangkok-vs-pattaya",
  },
  {
    title: "Ramayana vs Cartoon Network Water Park Pattaya: Which is Better?",
    description: "Compare Pattaya's two big water parks — tickets, rides, food, kid-friendliness and which one to pick for your group.",
    category: "comparison",
    image: imgRamayana,
    date: "May 4, 2026",
    readTime: "9 min read",
    link: "/thailand/pattaya/destination-guides/comparison/ramayana-vs-cartoon-network-water-park",
  },
  {
    title: "Speedboat vs Ferry to Coral Island Pattaya: Which is Better?",
    description: "Speedboat or public ferry to Koh Larn — cost, time, comfort, safety and which option fits your day-trip plan.",
    category: "comparison",
    image: imgPattayaTripCost,
    date: "May 4, 2026",
    readTime: "7 min read",
    link: "/thailand/pattaya/destination-guides/comparison/speedboat-vs-ferry-coral-island",
  },
  {
    title: "Pattaya 2 Days Itinerary 2026: Perfect Weekend Plan",
    description: "Tested 2-day Pattaya plan — arrival, city, nightlife, Coral Island and water sports for a quick weekend from Bangkok.",
    category: "itinerary",
    image: imgPattayaActivityPrices,
    date: "May 5, 2026",
    readTime: "9 min read",
    link: "/thailand/pattaya/destination-guides/itinerary/pattaya-2-days-itinerary",
  },
  {
    title: "Pattaya 3 Days Itinerary 2026: Activities + Island + Shows",
    description: "Balanced 3-day plan covering Coral Island, Sanctuary of Truth, Nong Nooch and a cabaret show — the sweet-spot Pattaya itinerary.",
    category: "itinerary",
    image: imgPattaya3Day,
    date: "May 5, 2026",
    readTime: "11 min read",
    link: "/thailand/pattaya/destination-guides/itinerary/pattaya-3-days-itinerary",
  },
  {
    title: "Bangkok + Pattaya 5 Days Itinerary 2026: Most Popular Route",
    description: "The most popular Thailand itinerary — 2 days Bangkok culture & shopping + 3 days Pattaya beaches, Coral Island and nightlife.",
    category: "itinerary",
    image: imgBangkokVsPattaya,
    date: "May 5, 2026",
    readTime: "12 min read",
    link: "/thailand/pattaya/destination-guides/itinerary/bangkok-pattaya-5-days-itinerary",
  },
  {
    title: "Pattaya Honeymoon Itinerary 2026: 4 Days Romantic Plan",
    description: "4-day Pattaya honeymoon — romantic dinners, private Coral Island, Sanctuary of Truth at sunset and luxury options.",
    category: "itinerary",
    image: imgPattayaWoman,
    date: "May 5, 2026",
    readTime: "11 min read",
    link: "/thailand/pattaya/destination-guides/itinerary/pattaya-honeymoon-itinerary",
  },
  {
    title: "Pattaya Family Itinerary 2026: 4 Days Plan with Kids",
    description: "Kid-friendly 4-day plan — Coral Island, Nong Nooch, Underwater World and Ramayana Water Park with safe family hotels.",
    category: "itinerary",
    image: imgRamayana,
    date: "May 5, 2026",
    readTime: "11 min read",
    link: "/thailand/pattaya/destination-guides/itinerary/pattaya-family-itinerary",
  },
  {
    title: "Pattaya Nightlife Itinerary 2026: 2 Nights Plan (Safe & Smart)",
    description: "Balanced 2-night plan — Soi Buakhao bars on Night 1, Walking Street + clubs on Night 2 with safety tips and budget.",
    category: "itinerary",
    image: imgPattayaNightlife,
    date: "May 5, 2026",
    readTime: "9 min read",
    link: "/thailand/pattaya/destination-guides/itinerary/pattaya-nightlife-itinerary",
  },
  {
    title: "Is Pattaya Safe for Indian Tourists? 2026 Complete Safety Guide",
    description: "Crime levels, nightlife safety, scams, women & solo travel tips and a clear safety verdict for Indian travelers visiting Pattaya.",
    category: "indian-audience",
    image: imgPattayaActivityPrices,
    date: "May 6, 2026",
    readTime: "10 min read",
    link: "/thailand/pattaya/destination-guides/indian-audience/pattaya-safety-for-indians",
  },
  {
    title: "Pattaya for Indian Families 2026: What to Expect (Complete Guide)",
    description: "Safety, hotels, Indian food, kid-friendly attractions, transport, costs and a tested 4-5 day Pattaya family plan.",
    category: "indian-audience",
    image: imgRamayana,
    date: "May 6, 2026",
    readTime: "11 min read",
    link: "/thailand/pattaya/destination-guides/indian-audience/pattaya-for-indian-families",
  },
  {
    title: "Indian Restaurants in Pattaya 2026: Best Places to Eat (Veg & Jain)",
    description: "Top North Indian, South Indian, vegetarian and Jain-friendly restaurants in Pattaya with prices and pro food tips.",
    category: "indian-audience",
    image: imgPattayaWoman,
    date: "May 6, 2026",
    readTime: "9 min read",
    link: "/thailand/pattaya/destination-guides/indian-audience/indian-restaurants-in-pattaya",
  },
  {
    title: "Pattaya Travel Tips for Indians 2026: First-Time Guide",
    description: "Visa, currency, SIM, transport, food, must-do activities, costs, safety and best time to visit Pattaya from India.",
    category: "indian-audience",
    image: imgPattayaWoman,
    date: "May 6, 2026",
    readTime: "11 min read",
    link: "/thailand/pattaya/destination-guides/indian-audience/pattaya-travel-tips-for-indians",
  },
  {
    title: "Pattaya + Coral Island Itinerary 2026: Best Combo Plan",
    description: "The perfect 2–3 day Pattaya + Coral Island combo — beaches, water sports, city sights and budget tips for a balanced trip.",
    category: "itinerary",
    image: imgCoralIslandPrice,
    date: "May 5, 2026",
    readTime: "10 min read",
    link: "/thailand/pattaya/destination-guides/itinerary/pattaya-coral-island-combo-itinerary",
  },
  {
    title: "Best Time to Visit Pattaya 2026: Weather, Season & Travel Guide",
    description: "Month-by-month Pattaya weather, peak vs off-season pricing and the ideal travel window for families, couples and budget travelers.",
    category: "micro",
    image: imgPattayaActivityPrices,
    date: "May 7, 2026",
    readTime: "8 min read",
    link: "/thailand/pattaya/destination-guides/micro/best-time-to-visit-pattaya",
  },
  {
    title: "Is Coral Island Worth It? Honest Pattaya Travel Guide 2026",
    description: "Real verdict on Koh Larn — beaches, water sports, costs, scams to avoid and who should and shouldn't visit.",
    category: "micro",
    image: imgCoralIslandPrice,
    date: "May 7, 2026",
    readTime: "8 min read",
    link: "/thailand/pattaya/destination-guides/micro/is-coral-island-worth-it",
  },
  {
    title: "Pattaya Nightlife Safety Guide 2026: How to Enjoy It Safely",
    description: "Best zones, scams to avoid, safety rules, costs and pro tips for a fun, trouble-free Pattaya night out.",
    category: "micro",
    image: imgPattayaNightlife,
    date: "May 7, 2026",
    readTime: "9 min read",
    link: "/thailand/pattaya/destination-guides/micro/pattaya-nightlife-safety-guide",
  },
  {
    title: "Do You Need Tickets for Pattaya Beach Activities? 2026 Guide",
    description: "Pre-book or pay on the spot — prices, scams, where to book and smart payment tips for Pattaya water sports.",
    category: "micro",
    image: imgPattayaWaterSports,
    date: "May 7, 2026",
    readTime: "8 min read",
    link: "/thailand/pattaya/destination-guides/micro/pattaya-beach-activities-tickets",
  },
  {
    title: "Pattaya Travel Mistakes to Avoid 2026: Honest First-Timer Guide",
    description: "13 most common Pattaya travel mistakes — wasted money, bad hotel choices, scams, nightlife traps and how to avoid them.",
    category: "micro",
    image: imgPattayaTripCost,
    date: "May 7, 2026",
    readTime: "10 min read",
    link: "/thailand/pattaya/destination-guides/micro/pattaya-travel-mistakes-to-avoid",
  },
  {
    title: "What to Wear in Pattaya Temples 2026: Complete Dress Code Guide",
    description: "Exact temple dress code for Big Buddha, Sanctuary of Truth and Wat Chaimongkol with pro tips for Indian travelers.",
    category: "micro",
    image: imgSanctuaryTruth,
    date: "May 7, 2026",
    readTime: "7 min read",
    link: "/thailand/pattaya/destination-guides/micro/pattaya-temple-dress-code",
  },
];

export const getPattayaBlogsByCategory = (cat: PattayaBlogCategory) =>
  pattayaBlogs.filter((b) => b.category === cat);

export const PATTAYA_HUB_FALLBACK_IMAGE = cityPattaya;
