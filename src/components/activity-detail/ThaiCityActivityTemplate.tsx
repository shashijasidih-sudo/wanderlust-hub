/**
 * Shared "Gardens by the Bay style" layout for Pattaya, Koh Samui and
 * Chiang Mai activity pages.
 *
 * Wraps <TourBooking /> with the standard marketing stack:
 *   Hero meta -> value badges -> trust strip -> Why Yellodae -> comparison table
 *   -> optional tables -> Indian Traveler Companion
 *   -> Complete Your Trip grid -> Thailand Travel Essentials -> final CTA.
 */
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import TourBooking from "@/components/TourBooking";
import Seo from "@/components/seo/Seo";
import ThailandTravelEssentials from "@/components/activity-detail/ThailandTravelEssentials";
import SafeImage from "@/components/SafeImage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Utensils, Plug, Languages, IndianRupee, Plane, ShieldCheck,
  Star, MapPin, Clock, Users, Check, Sparkles, MessageCircle, X,
  Smartphone, Car, Shirt, AppWindow, Landmark, Calculator, AlertTriangle,
  Leaf, CloudRain, Baby, ArrowRight, Camera,
} from "lucide-react";

/* Pattaya assets */
import coralIslandImg from "@/assets/pattaya-boats-beach-1.jpg";
import alcazarImg from "@/assets/alcazar-show-1.jpg";
import floatingMarketImg from "@/assets/floating-market-1.jpg";
import floatingMarketDayImg from "@/assets/floating-market-daylight-1.jpg";
import nongNoochImg from "@/assets/pattaya-lake-tour-1.jpg";
import dolphinImg from "@/assets/dolphin-show-3.jpg";
import muayThaiImg from "@/assets/muay-thai-1.jpg";
import bigBuddhaImg from "@/assets/pattaya-temple-woman-1.jpg";
import nightlifeImg from "@/assets/pattaya-nightlife-1.jpg";
import pubCrawlImg from "@/assets/pattaya-nightlife-2.jpg";

/* Koh Samui assets */
import fullMoonImg from "@/assets/koh-samui-full-moon-party-1.jpg";
import loyKrathongImg from "@/assets/koh-samui-loy-krathong-cruise-1.jpg";

/* Chiang Mai assets */
import doiSuthepImg from "@/assets/chiang-mai-doi-suthep-1.jpg";
import goldenTriangleImg from "@/assets/chiang-mai-chiang-rai-golden-triangle-1.jpg";
import doiInthanonImg from "@/assets/chiang-mai-doi-inthanon-1.jpg";

const WHATSAPP = "917061710810";

/* ---------------------------------- types --------------------------------- */

export type ThaiCity = "pattaya" | "koh-samui" | "chiang-mai";

export interface TableBlock {
  heading?: string;
  columns: string[];
  rows: string[][];
  minWidth?: number;
}

export interface ThaiActivityConfig {
  /** canonical path with trailing slash */
  path: string;
  city: ThaiCity;
  /** area preset key within the city */
  area: string;
  seoTitle: string;
  seoDescription: string;
  seoImage?: string;
  whatsappTopic: string;
  audience?: string;
  companionIntro: string;
  ctaHeadline: string;
  ctaImage?: string;
  tables?: TableBlock[];
  tips?: string[];
  mistakes?: string[];
  hideItinerary?: boolean;
}

interface AreaPreset {
  label: string;
  food: string[][];
  photos: string[];
  nearby: string[];
  fares: string;
}

interface CityPreset {
  name: string;
  hubPath: string;
  airport: string;
  simNote: string;
  taxiNote: string;
  wear: string[];
  mistakes: string[];
  veg: string[];
  bestTime: string;
  templeNote: string;
  trip: { title: string; desc: string; image: string; slug: string }[];
  areas: Record<string, AreaPreset>;
}

/* ------------------------------ city presets ------------------------------ */

const PATTAYA_FOOD = [
  ["Sagar Indian Restaurant (Central Pattaya)", "~10 min", "North Indian", "Veg & Non-veg"],
  ["Bombay Cafe (Soi Buakhao)", "~12 min", "Punjabi", "Pure Veg options"],
  ["Namaste Pattaya (Beach Road)", "~8 min", "North & South Indian", "Pure Veg options"],
  ["Gujarati Thali House (Jomtien)", "~20 min", "Gujarati", "Pure Veg / Jain on request"],
];

const CITIES: Record<ThaiCity, CityPreset> = {
  pattaya: {
    name: "Pattaya",
    hubPath: "/thailand/pattaya/things-to-do/",
    airport: "Suvarnabhumi (BKK) Airport / U-Tapao (UTP)",
    simNote: "AIS, TrueMove and dtac counters at Suvarnabhumi and U-Tapao airports; 7-Eleven stores all over Pattaya sell tourist SIMs.",
    taxiNote: "Songthaews (baht buses) on Beach Road cost THB 10–20 per hop — never book them as a private taxi unless you agree the fare first.",
    wear: [
      "Light cotton clothing and swimwear — Pattaya is hot and humid year-round.",
      "Shoulders and knees covered for Big Buddha Hill and Sanctuary of Truth.",
      "Slip-on sandals work best for boat boarding and temple entries.",
      "Smart casual for cabaret shows and rooftop bars in the evening.",
    ],
    mistakes: [
      "Booking show tickets at the counter — walk-in seats cost more and front rows sell out.",
      "Hiring a songthaew without agreeing the fare, then paying private-taxi rates.",
      "Wearing shorts or sleeveless tops to Big Buddha Hill and being refused entry.",
      "Underestimating Bangkok–Pattaya traffic — keep a 60-minute buffer for pickups.",
    ],
    veg: [
      "Say \"mangsawirat\" (vegetarian) and \"mai sai nam pla\" (no fish sauce).",
      "Central Pattaya and Soi Buakhao have several pure-veg Indian kitchens.",
      "Jomtien has Gujarati thali options and Jain-friendly meals on request.",
      "Budget: veg Thai meals cost THB 60–120 at local eateries.",
    ],
    bestTime: "November to February is the coolest and driest window — perfect for Coral Island, boat tours and outdoor evenings.",
    templeNote: "Cover shoulders and knees at Big Buddha Hill and Sanctuary of Truth, remove shoes before entering shrines, and never point your feet towards Buddha images.",
    trip: [
      { title: "Coral Island Tour with Indian Lunch", desc: "Speedboat to Koh Larn with water sports and Indian lunch.", image: coralIslandImg, slug: "/thailand/pattaya/coral-island-tour-with-transfer-and-indian-lunch/" },
      { title: "Alcazar Cabaret Show", desc: "Pattaya's most famous cabaret with hotel transfers.", image: alcazarImg, slug: "/thailand/pattaya/alcazar-cabaret-show-with-transfer/" },
      { title: "Pattaya Floating Market Tour", desc: "Boat rides, Thai street food and handicraft stalls.", image: floatingMarketImg, slug: "/thailand/pattaya/pattaya-floating-market-tour/" },
      { title: "Nong Nooch Tropical Garden", desc: "500-acre gardens with cultural and elephant shows.", image: nongNoochImg, slug: "/thailand/pattaya/nong-nooch-tropical-garden-tickets/" },
      { title: "Pattaya Dolphinarium Show", desc: "Indoor dolphin and seal show — a family favourite.", image: dolphinImg, slug: "/thailand/pattaya/pattaya-dolphinarium-show-tickets/" },
      { title: "Muay Thai Live Show", desc: "Thailand's national sport as a theatrical live show.", image: muayThaiImg, slug: "/thailand/pattaya/muay-thai-boxing-show-pattaya/" },
      { title: "Big Buddha & Gems Gallery Tour", desc: "Hilltop Buddha, bay views and the Gems Gallery.", image: bigBuddhaImg, slug: "/thailand/pattaya/big-buddha-gems-gallery-tour/" },
      { title: "Pattaya Nightlife Walking Tour", desc: "Guided Walking Street and rooftop bar crawl.", image: nightlifeImg, slug: "/thailand/pattaya/pattaya-nightlife-walking-tour/" },
      { title: "Pattaya Pub Crawl", desc: "Multiple bars in one night with a fun group.", image: pubCrawlImg, slug: "/thailand/pattaya/pattaya-pub-crawl-night-tour/" },
      { title: "Floating Market Guided Tour", desc: "Guided market walk with hotel pickup and drop.", image: floatingMarketDayImg, slug: "/thailand/pattaya/pattaya-floating-market-guided-tour/" },
    ],
    areas: {
      beach: {
        label: "Pattaya Beach & Jomtien",
        food: PATTAYA_FOOD,
        photos: [
          "Pattaya Beach Road at sunset with longtail boats.",
          "Pattaya City Sign viewpoint over the bay.",
          "Jomtien Beach palms and deck chairs.",
          "Bali Hai Pier with speedboats lined up.",
        ],
        nearby: ["Pattaya Beach", "Jomtien Beach", "Bali Hai Pier", "Pattaya City Sign", "Terminal 21 Pattaya", "Walking Street"],
        fares: "Approx fares: Suvarnabhumi → Pattaya hotel ≈ THB 1,500–2,000 · Beach Road hops by songthaew ≈ THB 10–20.",
      },
      island: {
        label: "Koh Larn & Pattaya Bay",
        food: PATTAYA_FOOD,
        photos: [
          "Ta Waen Beach turquoise water on Koh Larn.",
          "Parasailing above Pattaya Bay.",
          "Speedboat wake between the islands.",
          "Samae Beach viewpoint on Koh Larn.",
        ],
        nearby: ["Koh Larn (Coral Island)", "Ta Waen Beach", "Bali Hai Pier", "Pattaya Beach", "Sanctuary of Truth", "Pattaya City Sign"],
        fares: "Approx fares: hotel → Bali Hai Pier ≈ THB 150–300 (island tours include hotel transfers).",
      },
      city: {
        label: "Central Pattaya & Naklua",
        food: PATTAYA_FOOD,
        photos: [
          "The golden Big Buddha on Pratumnak Hill.",
          "Pattaya Floating Market boats and stalls.",
          "Nong Nooch garden topiary and pavilions.",
          "Sanctuary of Truth carved teak spires.",
        ],
        nearby: ["Big Buddha Hill", "Sanctuary of Truth", "Pattaya Floating Market", "Nong Nooch Garden", "Terminal 21", "Art in Paradise"],
        fares: "Approx fares: Central Pattaya → Nong Nooch ≈ THB 500–700 · Central Pattaya → Big Buddha ≈ THB 200–300.",
      },
      show: {
        label: "Pattaya Show & Nightlife District",
        food: PATTAYA_FOOD,
        photos: [
          "Alcazar Theatre's neon-lit facade before showtime.",
          "Costumed cabaret performers on stage.",
          "Walking Street lights after dark.",
          "Rooftop bar views over Pattaya Bay.",
        ],
        nearby: ["Alcazar Theatre", "Walking Street", "Central Festival Pattaya", "Beach Road", "Terminal 21", "Pattaya Viewpoint"],
        fares: "Approx fares: hotel → Alcazar / Walking Street ≈ THB 100–300 (show packages include transfers).",
      },
    },
  },

  "koh-samui": {
    name: "Koh Samui",
    hubPath: "/thailand/koh-samui/",
    airport: "Samui International Airport (USM)",
    simNote: "AIS and TrueMove counters at Samui Airport; 7-Eleven stores in Chaweng and Lamai sell tourist SIMs and top-ups.",
    taxiNote: "Samui taxis are meter-free and pricey — agree the fare first, or use Grab / Bolt where available.",
    wear: [
      "Light beachwear and quick-dry clothing — Samui is hot and humid year-round.",
      "Cover up over swimwear when walking through villages and temples.",
      "Reef-safe sunscreen, cap and sunglasses for boat and beach days.",
      "Flip-flops for the beach, plus one pair of grippy sandals for waterfalls.",
    ],
    mistakes: [
      "Booking ferries and party transfers on the day — Koh Phangan boats sell out.",
      "Riding scooters without a licence or helmet — fines and accidents are common.",
      "Carrying no cash on Koh Phangan party nights, where cards rarely work.",
      "Ignoring monsoon season (Oct–Dec) when planning boat trips.",
    ],
    veg: [
      "Say \"mangsawirat\" (vegetarian) and \"mai sai nam pla\" (no fish sauce).",
      "Chaweng has Indian restaurants with pure-veg thalis and paneer dishes.",
      "Fresh fruit, coconut and Thai veg curries are available everywhere.",
      "Budget: veg Thai meals cost THB 80–150 in Chaweng and Lamai.",
    ],
    bestTime: "December to April brings calm seas and sunshine — the best window for island hopping, cruises and beach parties.",
    templeNote: "Cover shoulders and knees at Big Buddha Temple and Wat Plai Laem, remove shoes before entering shrines, and dress modestly away from the beach.",
    trip: [
      { title: "Full Moon Party Koh Phangan", desc: "Return transfers and boat to Haad Rin's legendary beach party.", image: fullMoonImg, slug: "/thailand/koh-samui/full-moon-party-koh-phangan-with-transfer/" },
      { title: "White Orchid Loy Krathong Cruise", desc: "River cruise with dinner, cabaret and krathong floating.", image: loyKrathongImg, slug: "/thailand/koh-samui/white-orchid-river-cruise-loy-krathong-festival/" },
      { title: "Koh Samui Destination Guides", desc: "Local guides, costs and itineraries for Samui.", image: fullMoonImg, slug: "/thailand/koh-samui/destination-guides/" },
      { title: "Full Moon Party Beginner Guide", desc: "First-timer tips: tickets, timings and safety.", image: loyKrathongImg, slug: "/thailand/koh-samui/destination-guides/activity/first-time-full-moon-party-koh-samui-beginner-guide/" },
      { title: "Full Moon Party for Indians", desc: "Everything Indian travellers should plan for.", image: fullMoonImg, slug: "/thailand/koh-samui/destination-guides/activity/full-moon-party-thailand-guide-for-indians/" },
      { title: "Loy Krathong for Indian Travellers", desc: "Festival dates, etiquette and best viewing spots.", image: loyKrathongImg, slug: "/thailand/koh-samui/destination-guides/activity/loy-krathong-festival-for-indian-travelers/" },
    ],
    areas: {
      beach: {
        label: "Chaweng & Lamai, Koh Samui",
        food: [
          ["Namaste Indian Restaurant (Chaweng)", "~5 min", "North Indian", "Veg & Non-veg"],
          ["Sweet Chilli Indian (Chaweng)", "~8 min", "Punjabi", "Pure Veg options"],
          ["Taste of India (Lamai)", "~20 min", "North & South Indian", "Pure Veg options"],
          ["Curry Hut (Bophut)", "~15 min", "North Indian", "Veg & Non-veg"],
        ],
        photos: [
          "Chaweng Beach at sunrise with longtail boats.",
          "Big Buddha Temple's golden statue over the bay.",
          "Fisherman's Village lanterns in Bophut.",
          "Na Muang waterfall in the island's interior.",
        ],
        nearby: ["Chaweng Beach", "Lamai Beach", "Big Buddha Temple", "Fisherman's Village", "Na Muang Waterfall", "Wat Plai Laem"],
        fares: "Approx fares: Samui Airport → Chaweng ≈ THB 500–700 · Chaweng → Lamai ≈ THB 400–600.",
      },
      party: {
        label: "Haad Rin, Koh Phangan",
        food: [
          ["Namaste Indian Restaurant (Chaweng)", "Before transfer", "North Indian", "Veg & Non-veg"],
          ["Beach shacks (Haad Rin)", "On site", "Thai + Western", "Veg options"],
          ["Sweet Chilli Indian (Chaweng)", "On return", "Punjabi", "Pure Veg options"],
          ["Curry Hut (Bophut)", "On return", "North Indian", "Veg & Non-veg"],
        ],
        photos: [
          "Haad Rin beach lit up on full moon night.",
          "Fire-rope dancers on the sand.",
          "Neon body paint under blacklights.",
          "Sunrise over Haad Rin after the party.",
        ],
        nearby: ["Haad Rin Beach", "Koh Phangan", "Bophut Pier", "Chaweng Beach", "Big Buddha Temple", "Fisherman's Village"],
        fares: "Approx fares: Chaweng hotel → Bophut pier ≈ THB 300–500 (party packages include return transfers and boat).",
      },
      cruise: {
        label: "Koh Samui Cruise Piers",
        food: [
          ["On-board dinner", "On tour", "Thai + Veg", "Veg options on request"],
          ["Namaste Indian Restaurant (Chaweng)", "Before boarding", "North Indian", "Veg & Non-veg"],
          ["Sweet Chilli Indian (Chaweng)", "After cruise", "Punjabi", "Pure Veg options"],
          ["Taste of India (Lamai)", "After cruise", "North & South Indian", "Pure Veg options"],
        ],
        photos: [
          "Krathongs floating on the water at dusk.",
          "The cruise deck lit up for the festival.",
          "Cabaret performers on board.",
          "Samui coastline from the water.",
        ],
        nearby: ["Bophut Pier", "Fisherman's Village", "Big Buddha Temple", "Chaweng Beach", "Wat Plai Laem", "Lamai Beach"],
        fares: "Approx fares: hotel → cruise pier ≈ THB 300–500 each way (cruise packages usually include transfers).",
      },
    },
  },

  "chiang-mai": {
    name: "Chiang Mai",
    hubPath: "/thailand/chiang-mai/things-to-do/",
    airport: "Chiang Mai International Airport (CNX)",
    simNote: "AIS, TrueMove and dtac counters at Chiang Mai Airport; 7-Eleven and malls across the Old City sell tourist SIMs.",
    taxiNote: "Red songthaews (rot daeng) are the local shared taxis — THB 30–50 per person inside the Old City if you agree first.",
    wear: [
      "Light layers — Chiang Mai mornings and Doi Inthanon can be genuinely cold (Nov–Feb).",
      "Shoulders and knees covered for Doi Suthep, Chedi Luang and Wat Pha Lat.",
      "Comfortable walking shoes for temple steps and nature trails.",
      "A light jacket for mountain viewpoints and early-morning departures.",
    ],
    mistakes: [
      "Wearing shorts or sleeveless tops to temples and being refused entry.",
      "Underestimating mountain cold at Doi Inthanon — it can drop below 10°C.",
      "Booking day trips too late — Chiang Rai tours leave around 6:30 AM.",
      "Skipping the national park fee budget for Doi Inthanon and Doi Suthep.",
    ],
    veg: [
      "Say \"mangsawirat\" (vegetarian) and \"mai sai nam pla\" (no fish sauce).",
      "Nimman and the Old City have several pure-veg and Indian restaurants.",
      "Northern Thai khao soi is available in a vegetarian version at many cafes.",
      "Budget: veg Thai meals cost THB 60–120 at local eateries.",
    ],
    bestTime: "November to February is cool and clear — ideal for temples and mountains. Avoid March–April burning season haze.",
    templeNote: "Cover shoulders and knees at Doi Suthep, Wat Chedi Luang and Wat Pha Lat, remove shoes before entering, and never point your feet towards Buddha images.",
    trip: [
      { title: "Chiang Mai City & Temple Tour", desc: "Doi Suthep, Chedi Luang and Wat Pha Lat with transfers.", image: doiSuthepImg, slug: "/thailand/chiang-mai/city-temple-tour-doi-suthep-chedi-luang-pha-lat-with-transfer/" },
      { title: "Chiang Rai & Golden Triangle", desc: "White Temple, Mekong Golden Triangle and hill tribe village.", image: goldenTriangleImg, slug: "/thailand/chiang-mai/chiang-rai-golden-triangle-long-neck-tribe-day-trip/" },
      { title: "Doi Inthanon Full Day Tour", desc: "Thailand's highest peak, twin pagodas and waterfalls.", image: doiInthanonImg, slug: "/thailand/chiang-mai/doi-inthanon-national-park-full-day-tour/" },
      { title: "Chiang Mai Destination Guides", desc: "Costs, itineraries and local tips for Chiang Mai.", image: doiSuthepImg, slug: "/thailand/chiang-mai/destination-guides/" },
      { title: "Best Day Trips from Chiang Mai", desc: "Compare the top full-day tours before you book.", image: goldenTriangleImg, slug: "/thailand/chiang-mai/destination-guides/activity/best-day-trips-from-chiang-mai/" },
      { title: "Doi Suthep Complete Guide", desc: "Timings, dress code, steps and ticket prices.", image: doiInthanonImg, slug: "/thailand/chiang-mai/destination-guides/activity/doi-suthep-temple-complete-guide/" },
    ],
    areas: {
      city: {
        label: "Chiang Mai Old City & Nimman",
        food: [
          ["Ashoka Indian Restaurant (Old City)", "~5 min", "North Indian", "Veg & Non-veg"],
          ["Indian Kitchen (Loi Kroh)", "~8 min", "Punjabi", "Pure Veg options"],
          ["Om Vegetarian & Indian (Nimman)", "~12 min", "North & South Indian", "Pure Veg / Jain on request"],
          ["Namaste Chiang Mai (Old City)", "~7 min", "North Indian", "Pure Veg options"],
        ],
        photos: [
          "Wat Phra That Doi Suthep's golden chedi at sunset.",
          "Wat Chedi Luang's ancient brick ruin.",
          "The jungle terrace at Wat Pha Lat.",
          "Tha Phae Gate and the Old City moat.",
        ],
        nearby: ["Wat Phra That Doi Suthep", "Wat Chedi Luang", "Wat Pha Lat", "Tha Phae Gate", "Sunday Walking Street", "Nimman Road"],
        fares: "Approx fares: CNX Airport → Old City ≈ THB 150–250 · Old City → Doi Suthep ≈ THB 500–700 round trip.",
      },
      mountain: {
        label: "Doi Inthanon & Northern Highlands",
        food: [
          ["Park restaurants (Doi Inthanon)", "On site", "Thai + Veg", "Veg options"],
          ["Ashoka Indian Restaurant (Old City)", "On return", "North Indian", "Veg & Non-veg"],
          ["Om Vegetarian & Indian (Nimman)", "On return", "North & South Indian", "Pure Veg / Jain on request"],
          ["Indian Kitchen (Loi Kroh)", "On return", "Punjabi", "Pure Veg options"],
        ],
        photos: [
          "The twin royal pagodas at Doi Inthanon.",
          "Wachirathan Waterfall's mist and rainbows.",
          "Terraced rice fields in the Karen village.",
          "Sunrise clouds from Thailand's highest point.",
        ],
        nearby: ["Doi Inthanon Summit", "Wachirathan Waterfall", "Royal Twin Pagodas", "Karen Village", "Mae Klang Waterfall", "Chiang Mai Old City"],
        fares: "Approx fares: Old City → Doi Inthanon ≈ THB 2,000–2,800 round trip (tours include hotel transfers).",
      },
      daytrip: {
        label: "Chiang Rai & Golden Triangle",
        food: [
          ["Local Thai restaurant (Chiang Rai)", "On tour", "Thai + Veg", "Veg options"],
          ["Ashoka Indian Restaurant (Old City)", "On return", "North Indian", "Veg & Non-veg"],
          ["Namaste Chiang Mai (Old City)", "On return", "North Indian", "Pure Veg options"],
          ["Om Vegetarian & Indian (Nimman)", "On return", "South Indian", "Pure Veg / Jain on request"],
        ],
        photos: [
          "The all-white Wat Rong Khun (White Temple).",
          "The Golden Triangle where three countries meet.",
          "The Blue Temple's cobalt interior.",
          "Long Neck Karen village portraits (ask first).",
        ],
        nearby: ["White Temple", "Blue Temple", "Golden Triangle", "Long Neck Village", "Mekong River", "Chiang Rai City"],
        fares: "Approx fares: Chiang Mai → Chiang Rai ≈ THB 3,000–4,000 private car (day trips include transfers).",
      },
    },
  },
};

/* --------------------------- marketing components -------------------------- */

const HeroMeta = ({ rating, reviews, location, duration, audience }: {
  rating: number; reviews: number; location: string; duration: string; audience: string;
}) => (
  <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-black">
    <span className="inline-flex items-center gap-1 font-semibold">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
      ))}
      <span className="ml-1">{rating.toFixed(1)} ({reviews}+ Indian Travelers)</span>
    </span>
    <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-primary" /> {location}</span>
    <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-primary" /> {duration}</span>
    <span className="inline-flex items-center gap-1"><Users className="h-3.5 w-3.5 text-primary" /> {audience}</span>
  </div>
);

const ValueBadges = () => {
  const items = [
    "Instant Confirmation",
    "Skip-the-Line Entry",
    "Mobile E-Tickets",
    "Hotel Transfers Available",
    "Indian WhatsApp Support",
    "Pay Securely in INR",
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
      {items.map((t) => (
        <div key={t} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/5 border border-primary/15 text-xs md:text-sm">
          <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
            <Check className="w-2.5 h-2.5 text-white" />
          </div>
          <span className="text-black leading-tight">{t}</span>
        </div>
      ))}
    </div>
  );
};

const TrustStrip = () => {
  const items = [
    "Trusted by 5,000+ Indian Travellers",
    "Government Registered",
    "Ministry of Tourism Approved",
    "Secure Payment",
    "No Hidden Charges",
  ];
  return (
    <div className="rounded-xl border border-amber-200 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 px-4 py-3">
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] md:text-sm font-medium text-black">
        {items.map((t, i) => (
          <span key={t} className="inline-flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-orange-600" />
            <span>{t}</span>
            {i < items.length - 1 && <span className="hidden md:inline text-amber-300">•</span>}
          </span>
        ))}
      </div>
    </div>
  );
};

const WhyBookYellodae = () => {
  const items = [
    "Indian Customer Support",
    "INR Pricing (No Forex Surprise)",
    "Instant WhatsApp Help",
    "Handpicked Hotel Transfers",
    "Easy Cancellation",
    "Personalized Travel Guidance",
  ];
  return (
    <Card className="border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-orange-50">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg md:text-xl text-black">
          <Sparkles className="h-5 w-5 text-orange-500" />
          Why Book with Yellodae?
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 md:p-6 pt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {items.map((t) => (
            <div key={t} className="flex items-center gap-2 text-sm text-black">
              <Check className="h-4 w-4 text-green-600 shrink-0" />
              <span>{t}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const BookingTrustAndSupport = ({ topic }: { topic: string }) => {
  const items = [
    "Secure Checkout",
    "Confirmation in Minutes",
    "Indian Support Available",
    "GST Invoice Available",
    "No Hidden Fees",
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div className="rounded-xl border border-border bg-card p-4">
        <p className="text-sm font-semibold text-black mb-2">What you get</p>
        <ul className="space-y-1.5 text-sm text-black">
          {items.map((t) => (
            <li key={t} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-600 shrink-0" /> {t}
            </li>
          ))}
        </ul>
      </div>
      <a
        href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi Yellodae, I have a question about ${topic}.`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl border border-[#25D366]/30 bg-[#25D366]/5 hover:bg-[#25D366]/10 p-4 flex flex-col justify-between transition-colors"
      >
        <div>
          <p className="text-sm font-semibold text-black">Questions?</p>
          <p className="text-lg font-bold text-[#128C7E] inline-flex items-center gap-2">
            <MessageCircle className="h-5 w-5" /> WhatsApp Us
          </p>
        </div>
        <div className="mt-2">
          <p className="text-[11px] uppercase tracking-wide text-muted-foreground">Average Response Time</p>
          <p className="text-base font-bold text-black">3 Minutes</p>
        </div>
      </a>
    </div>
  );
};

const WhyChooseYellodaeTable = () => {
  const rows = [
    { feature: "Indian Support", us: true, them: false },
    { feature: "Pay in INR", us: true, them: "Sometimes" as const },
    { feature: "WhatsApp Help", us: true, them: false },
    { feature: "Personal Guidance", us: true, them: false },
    { feature: "Local Tips", us: true, them: false },
  ];
  const cell = (v: boolean | "Sometimes") =>
    v === true ? (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
        <Check className="h-4 w-4 text-green-600" />
      </span>
    ) : v === false ? (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100">
        <X className="h-4 w-4 text-red-500" />
      </span>
    ) : (
      <span className="text-xs font-medium text-amber-600">Sometimes</span>
    );
  return (
    <div>
      <h3 className="text-base md:text-xl font-bold text-black mb-3">
        Why Thousands of Indians Choose Yellodae
      </h3>
      <div className="overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-primary/10">
            <tr>
              <th className="text-left p-3 font-semibold text-black">Feature</th>
              <th className="p-3 font-semibold text-black">Yellodae</th>
              <th className="p-3 font-semibold text-black">Others</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.feature} className={i % 2 ? "bg-muted/40" : "bg-background"}>
                <td className="p-3 text-black">{r.feature}</td>
                <td className="p-3 text-center">{cell(r.us)}</td>
                <td className="p-3 text-center">{cell(r.them)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const DataTable = ({ block }: { block: TableBlock }) => (
  <div>
    {block.heading && <h3 className="text-base md:text-lg font-semibold mb-3 text-black">{block.heading}</h3>}
    <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
      <table
        className="w-full text-[11px] md:text-sm border border-border rounded-lg overflow-hidden md:min-w-0"
        style={{ minWidth: block.minWidth ?? 520 }}
      >
        <thead className="bg-muted">
          <tr>
            {block.columns.map((c) => (
              <th key={c} className="text-left p-2 md:p-3 font-semibold text-black">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((r, i) => (
            <tr key={i} className="border-t border-border">
              {r.map((cell, j) => (
                <td key={j} className="p-2 md:p-3 whitespace-normal text-black">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const Section = ({ icon: Icon, title, children }: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: ReactNode;
}) => (
  <div className="rounded-xl border border-border bg-card p-4 md:p-5">
    <div className="flex items-center gap-2 mb-3">
      <Icon className="h-5 w-5 text-primary" />
      <h3 className="font-semibold text-black text-base md:text-lg">{title}</h3>
    </div>
    <div className="text-sm text-black">{children}</div>
  </div>
);

const IndianTravelerCompanion = ({ config }: { config: ThaiActivityConfig }) => {
  const city = CITIES[config.city];
  const area = city.areas[config.area] ?? Object.values(city.areas)[0];
  return (
    <Card className="text-black">
      <CardHeader>
        <CardTitle className="text-lg md:text-2xl text-black">Indian Traveler Companion</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm p-3 md:p-6">
        <p className="text-black">{config.companionIntro}</p>

        <div className="grid sm:grid-cols-2 gap-3">
          <div className="flex gap-3">
            <Utensils className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-black">Indian & vegetarian food</p>
              <p className="text-black">Pure-veg and Jain-friendly Indian meals are easy to find near {area.label}.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <IndianRupee className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-black">Currency & payments</p>
              <p className="text-black">Thailand uses THB. Carry cash for markets, songthaews and street food; cards work at malls and big attractions.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Plug className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-black">Plug & power</p>
              <p className="text-black">Thailand uses Type A/B/C sockets at 220V. Most Indian two-pin chargers fit, but carry a universal adapter for three-pin plugs.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Languages className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-black">Language</p>
              <p className="text-black">Thai is the local language; basic English is understood at attractions, hotels and tour desks. Google Translate helps at markets.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-black">Temple etiquette</p>
              <p className="text-black">{city.templeNote}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Plane className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-black">Best time from India</p>
              <p className="text-black">{city.bestTime}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-3 pt-2">
          <Section icon={Utensils} title="Indian Restaurants Nearby">
            <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
              <table className="w-full text-xs md:text-sm border border-border rounded-lg overflow-hidden min-w-[420px]">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-2 font-semibold">Restaurant</th>
                    <th className="text-left p-2 font-semibold">Distance</th>
                    <th className="text-left p-2 font-semibold">Cuisine</th>
                    <th className="text-left p-2 font-semibold">Veg?</th>
                  </tr>
                </thead>
                <tbody>
                  {area.food.map((r) => (
                    <tr key={r[0]} className="border-t border-border">
                      {r.map((c, i) => <td key={i} className="p-2">{c}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section icon={Smartphone} title="SIM Cards & Connectivity">
            <ul className="space-y-1.5 list-disc pl-5">
              <li>Buy at <b>{city.airport}</b> on arrival.</li>
              <li>{city.simNote}</li>
              <li>Tourist eSIMs start at ~₹400 for 8–15 GB / 7 days.</li>
              <li>Free Wi-Fi is common at hotels, cafes and malls.</li>
            </ul>
          </Section>

          <Section icon={Car} title="Taxi Apps & Fares">
            <ul className="space-y-1.5 list-disc pl-5">
              <li><b>Grab</b> — most reliable, upfront pricing, English UI.</li>
              <li><b>Bolt</b> — usually cheaper for short rides.</li>
              <li>{city.taxiNote}</li>
              <li>{area.fares}</li>
            </ul>
          </Section>

          <Section icon={Shirt} title="What to Wear">
            <ul className="space-y-1.5 list-disc pl-5">
              {city.wear.map((w) => <li key={w}>{w}</li>)}
            </ul>
          </Section>

          <Section icon={AppWindow} title="Must-Have Apps">
            <div className="flex flex-wrap gap-2">
              {["Grab", "Bolt", "Google Maps", "Google Translate", "WhatsApp", "XE Currency"].map((a) => (
                <span key={a} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-black text-xs font-medium">
                  <Check className="h-3 w-3 text-green-600" /> {a}
                </span>
              ))}
            </div>
          </Section>

          <Section icon={Camera} title="Best Photo Spots">
            <ul className="space-y-1.5 list-disc pl-5">
              {area.photos.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </Section>

          <Section icon={Landmark} title="Nearby Attractions">
            <ul className="grid grid-cols-2 gap-y-1.5 list-disc pl-5">
              {area.nearby.map((n) => <li key={n}>{n}</li>)}
            </ul>
          </Section>

          <Section icon={Calculator} title="Budget Calculator (Family of 4)">
            <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
              <table className="w-full text-xs md:text-sm border border-border rounded-lg overflow-hidden min-w-[360px]">
                <thead className="bg-muted">
                  <tr><th className="text-left p-2 font-semibold">Item</th><th className="text-right p-2 font-semibold">Approx (INR)</th></tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border"><td className="p-2">Tickets (2 Adults + 2 Children)</td><td className="p-2 text-right">See live pricing above</td></tr>
                  <tr className="border-t border-border"><td className="p-2">Meals for the day</td><td className="p-2 text-right">₹2,500</td></tr>
                  <tr className="border-t border-border"><td className="p-2">Taxi / Grab rides</td><td className="p-2 text-right">₹1,500</td></tr>
                  <tr className="border-t border-border"><td className="p-2">Shopping & souvenirs</td><td className="p-2 text-right">₹2,000</td></tr>
                  <tr className="border-t border-border bg-primary/5 font-semibold"><td className="p-2">Add-on budget</td><td className="p-2 text-right">≈ ₹6,000</td></tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section icon={AlertTriangle} title="Common Mistakes Indians Make">
            <ul className="space-y-1.5 list-disc pl-5">
              {(config.mistakes ?? city.mistakes).map((m) => <li key={m}>{m}</li>)}
            </ul>
          </Section>

          <Section icon={Leaf} title="Vegetarian Food Guide">
            <ul className="space-y-1.5 list-disc pl-5">
              {city.veg.map((v) => <li key={v}>{v}</li>)}
            </ul>
          </Section>

          <Section icon={CloudRain} title="Rain Tips">
            <ul className="space-y-1.5 list-disc pl-5">
              <li>Monsoon showers are short and heavy — carry a compact umbrella and dry bag.</li>
              <li>Boat and outdoor tours may be rescheduled on rough-weather days — we inform you in advance.</li>
              <li>Keep a mall, spa or night market as an indoor backup plan.</li>
              <li>Waterproof phone pouches are handy on boat and waterfall days.</li>
            </ul>
          </Section>

          <Section icon={Baby} title="Kids Guide">
            <ul className="space-y-1.5 list-disc pl-5">
              <li><b>Strollers:</b> fine at malls and promenades, harder on sand and temple steps.</li>
              <li><b>Baby care:</b> malls and major attractions have feeding and changing rooms.</li>
              <li><b>Food:</b> plain rice, noodles and fruit are easy fallbacks for young kids.</li>
              <li><b>Heat:</b> plan shade or pool breaks between 12 PM and 3 PM.</li>
            </ul>
          </Section>

          {config.tips && config.tips.length > 0 && (
            <Section icon={Sparkles} title="Insider Tips for This Experience">
              <ul className="space-y-1.5 list-disc pl-5">
                {config.tips.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </Section>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

/* ------------------------- complete your trip grid ------------------------- */

const CompleteYourTrip = ({ city, currentPath, title }: { city: ThaiCity; currentPath: string; title: string }) => {
  const preset = CITIES[city];
  const items = preset.trip.filter((i) => i.slug !== currentPath).slice(0, 4);
  return (
    <section className="mt-12">
      <div className="flex items-end justify-between mb-4 md:mb-6">
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
            Complete Your {preset.name} Trip
          </h2>
          <p className="text-muted-foreground mt-1 text-sm md:text-base">
            Top {preset.name} experiences to pair with {title}
          </p>
        </div>
        <Link
          to={preset.hubPath}
          className="hidden sm:inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all"
        >
          View all <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
        {items.map((item) => (
          <Card key={item.slug} className="group cursor-pointer hover:shadow-card-hover transition-all overflow-hidden">
            <Link to={item.slug}>
              <div className="aspect-[16/11] overflow-hidden">
                <SafeImage src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <CardContent className="p-3">
                <h3 className="font-bold text-sm md:text-base text-foreground group-hover:text-primary transition-colors line-clamp-1">{item.title}</h3>
                <p className="text-muted-foreground text-xs mt-1 line-clamp-2">{item.desc}</p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
};

const FinalCTA = ({ config, fallbackImage }: { config: ThaiActivityConfig; fallbackImage?: string }) => (
  <section className="mt-12">
    <div className="relative overflow-hidden rounded-2xl border border-border">
      <SafeImage
        src={config.ctaImage || fallbackImage}
        alt={config.ctaHeadline}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-primary/50" />
      <div className="relative p-6 md:p-10 text-white">
        <h2 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">{config.ctaHeadline}</h2>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm md:text-base mb-5">
          <span>🎟 Instant Confirmation</span>
          <span>🚐 Hotel Transfers Available</span>
          <span>🇮🇳 Indian Customer Support</span>
          <span>📱 WhatsApp Assistance</span>
          <span>⭐⭐⭐⭐⭐ Trusted by Indian Families</span>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Book Your Tickets Now
          </Button>
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi Yellodae, I want to book ${config.whatsappTopic}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline" className="bg-white/10 border-white/40 text-white hover:bg-white/20">
              <MessageCircle className="h-5 w-5 mr-2" /> WhatsApp Us
            </Button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* --------------------------------- layout --------------------------------- */

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tourData: any;
  config: ThaiActivityConfig;
  extraContentBeforeReviews?: ReactNode;
}

const ThaiCityActivityTemplate = ({ tourData, config, extraContentBeforeReviews }: Props) => {
  if (!tourData) return null;
  const city = CITIES[config.city];
  const area = city.areas[config.area] ?? Object.values(city.areas)[0];

  return (
    <>
      <Seo
        path={config.path}
        title={config.seoTitle}
        description={config.seoDescription}
        type="product"
        {...(config.seoImage ? { image: config.seoImage } : {})}
      />
      <TourBooking
        tourData={tourData}
        heroVariant="collage"
        hidePhotoGallery
        hideItinerary={config.hideItinerary ?? true}
        forceBlackText
        extraDescriptionBeforeHighlights={
          <div className="space-y-8">
            <div className="space-y-6 min-w-0">
              <HeroMeta
                rating={Math.max(tourData.rating ?? 4.8, 4.5)}
                reviews={tourData.reviews ?? 150}
                location={tourData.location ?? area.label}
                duration={tourData.duration ?? "Half Day"}
                audience={config.audience ?? "Perfect for Families & Couples"}
              />
              <ValueBadges />
              <TrustStrip />
              <WhyBookYellodae />
              <BookingTrustAndSupport topic={config.whatsappTopic} />
              <WhyChooseYellodaeTable />
            </div>
            {config.tables && config.tables.length > 0 && (
              <div className="space-y-6 min-w-0">
                {config.tables.map((t, i) => <DataTable key={i} block={t} />)}
              </div>
            )}
          </div>
        }
        extraContentAfterPolicies={<IndianTravelerCompanion config={config} />}
        extraContentBeforeReviews={extraContentBeforeReviews}
        extraContentBeforeSuggested={
          <CompleteYourTrip city={config.city} currentPath={config.path} title={tourData.title} />
        }
        extraContentBeforeGuides={<ThailandTravelEssentials />}
        extraContentAfterTransfers={<FinalCTA config={config} fallbackImage={tourData.heroImages?.[0]?.src} />}
      />
    </>
  );
};

export default ThaiCityActivityTemplate;
