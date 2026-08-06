/**
 * Shared "Gardens by the Bay style" layout for Dubai / UAE activity pages.
 *
 * Wraps <TourBooking /> with the standard marketing stack:
 *   Hero meta -> value badges -> trust strip -> Why Yellodae -> comparison table
 *   -> optional tables -> Indian Traveler Companion
 *   -> Complete Your Trip grid -> Dubai Travel Essentials -> final CTA.
 */
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import TourBooking from "@/components/TourBooking";
import Seo from "@/components/seo/Seo";
import DubaiTravelEssentials from "@/components/activity-detail/DubaiTravelEssentials";
import SafeImage from "@/components/SafeImage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Utensils, Plug, Languages, IndianRupee, Plane, ShieldCheck,
  Star, MapPin, Clock, Users, Check, Sparkles, MessageCircle, X,
  Smartphone, Car, Shirt, AppWindow, Landmark, Calculator, AlertTriangle,
  Leaf, Sun, Baby, ArrowRight, Camera,
} from "lucide-react";

/* Dubai assets */
import dubaiSkylineSunset from "@/assets/dubai-skyline-sunset-1.jpg";
import dubaiSkylineNight from "@/assets/dubai-skyline-night-1.jpg";
import dubaiCityNight from "@/assets/dubai-city-night-1.jpg";
import dubaiDesertWoman from "@/assets/dubai-desert-woman-1.jpg";
import dubaiDesertCouple from "@/assets/dubai-desert-couple-1.webp";
import dubaiDhowCruise from "@/assets/dubai-dhow-cruise-1.jpg";
import dubaiFountain from "@/assets/dubai-fountain-show-1.webp";
import dubaiAquariumFish from "@/assets/dubai-aquarium-fish-1.webp";
import dubaiGlobalVillage from "@/assets/dubai-global-village-1.jpg";
import dubaiGlobalVillage2 from "@/assets/dubai-global-village-2.jpg";

const WHATSAPP = "917061710810";

/* ---------------------------------- types --------------------------------- */

export interface TableBlock {
  heading?: string;
  columns: string[];
  rows: string[][];
  minWidth?: number;
}

export interface DubaiActivityConfig {
  /** canonical path with trailing slash */
  path: string;
  /** area preset key */
  area: DubaiArea;
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

export type DubaiArea = "downtown" | "desert" | "creek" | "marina" | "garden" | "abu-dhabi";

interface AreaPreset {
  label: string;
  food: string[][];
  photos: string[];
  nearby: string[];
  fares: string;
}

/* ------------------------------- Dubai preset ------------------------------ */

const DOWNTOWN_FOOD = [
  ["Rangoli by Bikanervala (Dubai Mall)", "~5 min", "North Indian", "Pure Veg"],
  ["Saravanaa Bhavan (Karama)", "~15 min", "South Indian", "Pure Veg"],
  ["Bikanervala (Al Rigga)", "~20 min", "North Indian & Chaat", "Pure Veg / Jain on request"],
  ["Gazebo (Bur Dubai)", "~18 min", "Mughlai & North Indian", "Veg & Non-veg"],
];

const CITY = {
  name: "Dubai",
  hubPath: "/dubai/",
  airport: "Dubai International Airport (DXB) / Al Maktoum (DWC)",
  simNote:
    "du and Etisalat counters are right at DXB arrivals; tourist SIMs with data start around AED 50. Supermarkets and malls also sell top-ups.",
  taxiNote:
    "Careem and Uber both work across Dubai. RTA metered taxis are safe and reasonably priced — flag-down is about AED 12.",
  wear: [
    "Light, breathable cotton or linen — Dubai is hot for most of the year.",
    "Shoulders and knees covered at mosques, souks and heritage districts.",
    "Carry a light jacket or shawl — malls, buses and indoor venues are heavily air-conditioned.",
    "Smart casual for dinner cruises, Burj Khalifa slots and rooftop venues.",
  ],
  mistakes: [
    "Underestimating the summer heat (May–September can cross 45°C) and planning outdoor tours at midday.",
    "Skipping the timed slot rule at Burj Khalifa and arriving late — slots are not transferable.",
    "Wearing shorts or sleeveless tops to Sheikh Zayed Grand Mosque and being refused entry.",
    "Assuming Global Village and Miracle Garden are open year-round — both are seasonal (winter only).",
    "Drinking alcohol in public places or being loud in public — UAE rules are strict.",
  ],
  veg: [
    "Karama, Bur Dubai and Al Rigga are packed with pure-veg Indian restaurants.",
    "Jain meals are available on request at most Indian restaurants and can be pre-arranged for tours.",
    "Every mall food court has Indian vegetarian counters — Dubai Mall alone has several.",
    "Budget: a veg Indian thali costs about AED 20–35 (₹450–800).",
  ],
  bestTime:
    "November to March is the ideal window — pleasant 20–30°C days, plus Global Village, Miracle Garden and outdoor dining are all in season.",
  cultureNote:
    "Dress modestly at mosques and souks, avoid public displays of affection, ask before photographing locals, and never drink alcohol outside licensed venues.",
  trip: [
    { title: "Burj Khalifa 124th & 125th Floor", desc: "Skip-the-line observation deck tickets in Downtown Dubai.", image: dubaiSkylineNight, slug: "/dubai/burj-khalifa-non-prime/" },
    { title: "Desert Safari with BBQ Dinner", desc: "Dune bashing, camel rides, live shows and BBQ dinner.", image: dubaiDesertWoman, slug: "/dubai/desert-safari-sharing/" },
    { title: "Dhow Dinner Cruise Marina", desc: "Two-hour cruise with buffet dinner and skyline views.", image: dubaiDhowCruise, slug: "/dubai/dhow-cruise-marina-lower-deck/" },
    { title: "Dubai City Tour", desc: "Old and new Dubai with a guide and hotel transfers.", image: dubaiSkylineSunset, slug: "/dubai/city-tour/" },
    { title: "Dubai Aquarium & Penguin Cove", desc: "Tunnel walk, Underwater Zoo and Penguin Cove.", image: dubaiAquariumFish, slug: "/dubai/aquarium-penguin/" },
    { title: "Dubai Fountain Show & Lake Ride", desc: "Closest possible view of the world's tallest fountain.", image: dubaiFountain, slug: "/dubai/fountain-show/" },
    { title: "Global Village Dubai", desc: "90+ country pavilions, street food and nightly fireworks.", image: dubaiGlobalVillage, slug: "/dubai/global-village/" },
    { title: "Miracle Garden Dubai", desc: "150 million blooms and the Emirates A380 flower structure.", image: dubaiGlobalVillage2, slug: "/dubai/miracle-garden/" },
    { title: "Abu Dhabi City Tour", desc: "Sheikh Zayed Grand Mosque, Corniche and Emirates Palace.", image: dubaiCityNight, slug: "/dubai/abu-dhabi-city-tour/" },
  ],
};

const AREAS: Record<DubaiArea, AreaPreset> = {
  downtown: {
    label: "Downtown Dubai & Dubai Mall",
    food: DOWNTOWN_FOOD,
    photos: [
      "Burj Khalifa framed from the Dubai Mall waterfront.",
      "The Dubai Fountain mid-show against the skyline.",
      "Souk Al Bahar bridge at blue hour.",
      "The Dubai Mall aquarium wall from the atrium.",
    ],
    nearby: ["Burj Khalifa", "The Dubai Mall", "Dubai Fountain", "Dubai Aquarium", "Souk Al Bahar", "Dubai Opera"],
    fares: "Approx fares: DXB → Downtown ≈ AED 50–70 · Marina → Downtown ≈ AED 60–80 · Metro (Burj Khalifa/Dubai Mall station) ≈ AED 5–8.",
  },
  desert: {
    label: "Dubai Desert Conservation Area",
    food: [
      ["Camp BBQ buffet", "On tour", "Arabic & Indian", "Veg & Jain on request"],
      ["Rangoli by Bikanervala (Dubai Mall)", "Before pickup", "North Indian", "Pure Veg"],
      ["Saravanaa Bhavan (Karama)", "After drop-off", "South Indian", "Pure Veg"],
      ["Gazebo (Bur Dubai)", "After drop-off", "Mughlai", "Veg & Non-veg"],
    ],
    photos: [
      "4x4 convoys cresting the red dunes at golden hour.",
      "Camel silhouettes against the desert sunset.",
      "Tanoura dancer spinning under camp lights.",
      "Star-filled sky above the Bedouin camp.",
    ],
    nearby: ["Lahbab Red Dunes", "Al Marmoom Desert", "Dubai Desert Camp", "Last Exit Al Khawaneej", "Hatta Road viewpoints", "Downtown Dubai"],
    fares: "Approx fares: safari packages include sharing hotel transfers; a private 4x4 upgrade costs about AED 250–400 extra.",
  },
  creek: {
    label: "Dubai Creek & Old Dubai",
    food: [
      ["On-board buffet dinner", "On tour", "Arabic, Indian & Continental", "Veg options"],
      ["Gazebo (Bur Dubai)", "~10 min", "Mughlai", "Veg & Non-veg"],
      ["Saravanaa Bhavan (Karama)", "~12 min", "South Indian", "Pure Veg"],
      ["Bikanervala (Al Rigga)", "~10 min", "North Indian & Chaat", "Pure Veg / Jain on request"],
    ],
    photos: [
      "Wooden dhows lit up along Dubai Creek at night.",
      "Abra crossing with Deira's old skyline behind.",
      "Gold Souk windows glowing after dark.",
      "Al Fahidi's wind towers and sand-coloured lanes.",
    ],
    nearby: ["Dubai Creek", "Gold Souk", "Spice Souk", "Al Fahidi Historic District", "Dubai Frame", "Creek Park"],
    fares: "Approx fares: Downtown → Creek ≈ AED 35–50 · abra crossing ≈ AED 1 per person · Metro (Al Ras / Union) ≈ AED 3–5.",
  },
  marina: {
    label: "Dubai Marina & JBR",
    food: [
      ["On-board buffet dinner", "On tour", "Arabic, Indian & Continental", "Veg options"],
      ["Bombay Borough (JLT)", "~10 min", "Modern Indian", "Veg & Non-veg"],
      ["Saravanaa Bhavan (JLT)", "~12 min", "South Indian", "Pure Veg"],
      ["Chatori Gali (Marina)", "~8 min", "Indian street food", "Pure Veg options"],
    ],
    photos: [
      "Marina towers reflected in the water at night.",
      "The dhow deck with skyscrapers on both sides.",
      "Ain Dubai and Bluewaters from the promenade.",
      "JBR Beach with the skyline behind at sunset.",
    ],
    nearby: ["Dubai Marina Walk", "JBR The Beach", "Bluewaters Island", "Ain Dubai", "Palm Jumeirah", "Marina Mall"],
    fares: "Approx fares: DXB → Marina ≈ AED 80–100 · Downtown → Marina ≈ AED 60–80 · Metro (DMCC / Sobha Realty) ≈ AED 5–8.",
  },
  garden: {
    label: "Al Barsha South & Dubailand",
    food: [
      ["India Pavilion food stalls (Global Village)", "On site", "Indian street food", "Pure Veg options"],
      ["Rangoli by Bikanervala (Dubai Mall)", "~20 min", "North Indian", "Pure Veg"],
      ["Saravanaa Bhavan (Karama)", "~25 min", "South Indian", "Pure Veg"],
      ["Gazebo (Bur Dubai)", "~28 min", "Mughlai", "Veg & Non-veg"],
    ],
    photos: [
      "The Emirates A380 covered in fresh blooms.",
      "Heart-shaped flower tunnels at Miracle Garden.",
      "Global Village pavilion facades lit up after dark.",
      "Fireworks over the Global Village main stage.",
    ],
    nearby: ["Dubai Miracle Garden", "Global Village", "Butterfly Garden", "IMG Worlds of Adventure", "Mall of the Emirates", "Dubai Autodrome"],
    fares: "Approx fares: Downtown → Miracle Garden / Global Village ≈ AED 55–80 one way (packages with transfers save the return fare).",
  },
  "abu-dhabi": {
    label: "Abu Dhabi & Yas Island",
    food: [
      ["Rangoli (Abu Dhabi)", "On tour", "North Indian", "Pure Veg"],
      ["Saravanaa Bhavan (Abu Dhabi)", "On tour", "South Indian", "Pure Veg"],
      ["Yas Mall food court", "On tour", "Indian & International", "Veg options"],
      ["Gazebo (Bur Dubai)", "On return", "Mughlai", "Veg & Non-veg"],
    ],
    photos: [
      "Sheikh Zayed Grand Mosque's white domes at midday.",
      "The mosque reflection pools at sunset.",
      "Emirates Palace facade from the driveway.",
      "Ferrari World's red roof and Yas Marina Circuit.",
    ],
    nearby: ["Sheikh Zayed Grand Mosque", "Emirates Palace", "Abu Dhabi Corniche", "Ferrari World", "Yas Island", "Heritage Village"],
    fares: "Approx fares: Dubai → Abu Dhabi taxi ≈ AED 250–350 one way; day tours include return coach transfers from your Dubai hotel.",
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

const IndianTravelerCompanion = ({ config }: { config: DubaiActivityConfig }) => {
  const area = AREAS[config.area] ?? AREAS.downtown;
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
              <p className="text-black">Pure-veg and Jain-friendly Indian meals are everywhere near {area.label}.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <IndianRupee className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-black">Currency & payments</p>
              <p className="text-black">The UAE uses AED (₹1 ≈ AED 0.043). Cards are accepted almost everywhere; carry small cash for souks and abras.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Plug className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-black">Plug & power</p>
              <p className="text-black">The UAE uses Type G three-pin sockets at 220V — the same as most Indian three-pin plugs. Carry a universal adapter for round-pin chargers.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Languages className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-black">Language</p>
              <p className="text-black">Arabic is official, but English is used everywhere and Hindi, Urdu and Malayalam are widely spoken by staff and drivers.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-black">Local etiquette & rules</p>
              <p className="text-black">{CITY.cultureNote}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Plane className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-black">Best time from India</p>
              <p className="text-black">{CITY.bestTime}</p>
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
              <li>Buy at <b>{CITY.airport}</b> on arrival.</li>
              <li>{CITY.simNote}</li>
              <li>Tourist eSIMs start at ~₹500 for 5–10 GB / 7 days.</li>
              <li>WhatsApp voice/video calling is restricted on UAE networks — use Botim or hotel Wi-Fi.</li>
            </ul>
          </Section>

          <Section icon={Car} title="Taxi Apps & Fares">
            <ul className="space-y-1.5 list-disc pl-5">
              <li><b>Careem</b> — the local favourite, upfront pricing and card payment.</li>
              <li><b>Uber</b> — works across Dubai and Abu Dhabi.</li>
              <li>{CITY.taxiNote}</li>
              <li>{area.fares}</li>
            </ul>
          </Section>

          <Section icon={Shirt} title="What to Wear">
            <ul className="space-y-1.5 list-disc pl-5">
              {CITY.wear.map((w) => <li key={w}>{w}</li>)}
            </ul>
          </Section>

          <Section icon={AppWindow} title="Must-Have Apps">
            <div className="flex flex-wrap gap-2">
              {["Careem", "Uber", "S'hail (RTA)", "Google Maps", "Botim", "XE Currency"].map((a) => (
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
                  <tr className="border-t border-border"><td className="p-2">Meals for the day</td><td className="p-2 text-right">₹3,500</td></tr>
                  <tr className="border-t border-border"><td className="p-2">Careem / taxi rides</td><td className="p-2 text-right">₹2,000</td></tr>
                  <tr className="border-t border-border"><td className="p-2">Shopping & souvenirs</td><td className="p-2 text-right">₹3,000</td></tr>
                  <tr className="border-t border-border bg-primary/5 font-semibold"><td className="p-2">Add-on budget</td><td className="p-2 text-right">≈ ₹8,500</td></tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section icon={AlertTriangle} title="Common Mistakes Indians Make">
            <ul className="space-y-1.5 list-disc pl-5">
              {(config.mistakes ?? CITY.mistakes).map((m) => <li key={m}>{m}</li>)}
            </ul>
          </Section>

          <Section icon={Leaf} title="Vegetarian Food Guide">
            <ul className="space-y-1.5 list-disc pl-5">
              {CITY.veg.map((v) => <li key={v}>{v}</li>)}
            </ul>
          </Section>

          <Section icon={Sun} title="Heat & Weather Tips">
            <ul className="space-y-1.5 list-disc pl-5">
              <li>May to September can cross 45°C — plan outdoor tours for early morning or after sunset.</li>
              <li>Carry a refillable water bottle, SPF 50 sunscreen, sunglasses and a cap.</li>
              <li>Indoor backups on very hot days: Dubai Mall, Aquarium, Dolphinarium and Ski Dubai.</li>
              <li>Rare winter rain can delay desert and cruise departures — we inform you in advance.</li>
            </ul>
          </Section>

          <Section icon={Baby} title="Kids Guide">
            <ul className="space-y-1.5 list-disc pl-5">
              <li><b>Strollers:</b> easy at malls, the Marina Walk and Miracle Garden; not practical on desert dunes.</li>
              <li><b>Child pricing:</b> most Dubai attractions charge reduced rates for ages 3–11 and free entry under 3.</li>
              <li><b>Baby care:</b> nursing and diaper-change rooms are available in all major malls and attractions.</li>
              <li><b>Snacks:</b> Indian snacks, milk and baby food are easily available at Carrefour and Lulu.</li>
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

const CompleteYourTrip = ({ currentPath, title }: { currentPath: string; title: string }) => {
  const items = CITY.trip.filter((i) => i.slug !== currentPath).slice(0, 4);
  return (
    <section className="mt-12">
      <div className="flex items-end justify-between mb-4 md:mb-6">
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
            Complete Your Dubai Trip
          </h2>
          <p className="text-muted-foreground mt-1 text-sm md:text-base">
            Top Dubai experiences to pair with {title}
          </p>
        </div>
        <Link
          to={CITY.hubPath}
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

const FinalCTA = ({ config, fallbackImage }: { config: DubaiActivityConfig; fallbackImage?: string }) => (
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
        <p className="text-sm md:text-lg text-white/90 mb-5 max-w-2xl">
          Instant confirmation, INR pricing and Indian traveller support — book in under two minutes.
        </p>
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
  config: DubaiActivityConfig;
  extraContentBeforeReviews?: ReactNode;
}

const DubaiActivityTemplate = ({ tourData, config, extraContentBeforeReviews }: Props) => {
  if (!tourData) return null;
  const area = AREAS[config.area] ?? AREAS.downtown;

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
          <CompleteYourTrip currentPath={config.path} title={tourData.title} />
        }
        extraContentBeforeGuides={<DubaiTravelEssentials />}
        extraContentAfterTransfers={<FinalCTA config={config} fallbackImage={tourData.heroImages?.[0]?.src} />}
      />
    </>
  );
};

export default DubaiActivityTemplate;
