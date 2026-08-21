/**
 * Shared "Gardens by the Bay style" layout for every Krabi activity page.
 *
 * Wraps <TourBooking /> with the standard marketing stack:
 *   Hero meta -> value badges -> trust strip -> Why Yellodae -> comparison table
 *   -> optional tables -> Indian Traveler Companion
 *   -> Complete Your Krabi Trip grid -> Thailand Travel Essentials -> final CTA.
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

import fourIslandsImg from "@/assets/krabi-doc/four-islands-1.webp";
import fourIslands2Img from "@/assets/krabi-doc/four-islands-2.webp";
import hongImg from "@/assets/krabi-doc/hong-1.jpg";
import hong2Img from "@/assets/krabi-doc/hong-2.webp";
import sevenImg from "@/assets/krabi-doc/seven-1.webp";
import seven2Img from "@/assets/krabi-doc/seven-2.webp";
import jamesBondImg from "@/assets/krabi-doc/james-bond-1.webp";
import emeraldImg from "@/assets/krabi-doc/emerald-1.webp";

const WHATSAPP = "917061710810";

/* ---------------------------------- types --------------------------------- */

export type KrabiArea = "beach" | "island" | "city" | "jungle";

export interface TableBlock {
  heading?: string;
  columns: string[];
  rows: string[][];
  minWidth?: number;
}

export interface KrabiActivityConfig {
  /** canonical path with trailing slash */
  path: string;
  seoTitle: string;
  seoDescription: string;
  seoImage?: string;
  whatsappTopic: string;
  audience?: string;
  area: KrabiArea;
  companionIntro: string;
  ctaHeadline: string;
  ctaImage?: string;
  tables?: TableBlock[];
  tips?: string[];
  mistakes?: string[];
  hideItinerary?: boolean;
}

/* ------------------------------ area presets ------------------------------ */

const AREA = {
  beach: {
    label: "Ao Nang & Railay Beach, Krabi",
    food: [
      ["Namaste Indian Restaurant (Ao Nang)", "~5 min", "North Indian", "Veg & Non-veg"],
      ["Bombay Restaurant (Ao Nang)", "~7 min", "North Indian", "Pure Veg options"],
      ["Kohinoor Indian Food (Ao Nang)", "~8 min", "Punjabi", "Veg & Non-veg"],
      ["Taj Palace (Krabi Town)", "~25 min", "South & North Indian", "Pure Veg options"],
    ],
    photos: [
      "Ao Nang beachfront at sunset with longtail boats.",
      "Railay's limestone walls from Phra Nang Beach.",
      "Ao Nang viewpoint over the Andaman Sea.",
      "Nopparat Thara Beach sandbar at low tide.",
    ],
    nearby: ["Ao Nang Beach", "Railay Beach", "Phra Nang Cave Beach", "Nopparat Thara", "Ao Nang Night Market", "Tiger Cave Temple"],
    fares: "Approx fares: Krabi Airport → Ao Nang ≈ THB 600–800 · Ao Nang → Krabi Town ≈ THB 400–500.",
  },
  island: {
    label: "Andaman Islands, from Krabi",
    food: [
      ["Namaste Indian Restaurant (Ao Nang)", "Before departure", "North Indian", "Veg & Non-veg"],
      ["On-board / island lunch", "On tour", "Thai + Veg", "Veg options"],
      ["Bombay Restaurant (Ao Nang)", "On return", "North Indian", "Pure Veg options"],
      ["Kohinoor Indian Food (Ao Nang)", "On return", "Punjabi", "Veg & Non-veg"],
    ],
    photos: [
      "Tub Island sandbar joining three islands.",
      "The hidden Hong Island lagoon at high tide.",
      "Poda Island's postcard limestone rock.",
      "Phra Nang Cave Beach from the water.",
    ],
    nearby: ["Poda Island", "Chicken Island", "Tub Island", "Hong Island", "Phi Phi Islands", "Railay Beach"],
    fares: "Approx fares: hotel → Ao Nang / Nopparat pier ≈ THB 200–400 each way (island tours include transfers).",
  },
  city: {
    label: "Krabi Town & Tiger Cave",
    food: [
      ["Taj Palace (Krabi Town)", "~5 min", "North Indian", "Pure Veg options"],
      ["Indian Bahar (Krabi Town)", "~7 min", "North Indian", "Veg & Non-veg"],
      ["Namaste Indian Restaurant (Ao Nang)", "~25 min", "North Indian", "Veg & Non-veg"],
      ["Bombay Restaurant (Ao Nang)", "~25 min", "Punjabi", "Pure Veg options"],
    ],
    photos: [
      "The 1,237-step Tiger Cave Temple summit view.",
      "Krabi Town riverfront and crab statues.",
      "Walking Street night market stalls.",
      "Khao Khanab Nam twin cliffs from the river.",
    ],
    nearby: ["Tiger Cave Temple", "Krabi Walking Street", "Khao Khanab Nam", "Wat Kaew Korawaram", "Ao Nang Beach", "Krabi Riverfront"],
    fares: "Approx fares: Krabi Town → Tiger Cave ≈ THB 300–400 · Krabi Town → Ao Nang ≈ THB 400–500.",
  },
  jungle: {
    label: "Emerald Pool & Inland Krabi",
    food: [
      ["On-site Thai restaurant", "On-site", "Thai + Veg", "Veg options"],
      ["Namaste Indian Restaurant (Ao Nang)", "~60 min", "North Indian", "Veg & Non-veg"],
      ["Taj Palace (Krabi Town)", "~45 min", "North Indian", "Pure Veg options"],
      ["Bombay Restaurant (Ao Nang)", "~60 min", "Punjabi", "Pure Veg options"],
    ],
    photos: [
      "The turquoise Emerald Pool in Khao Phra Bang Khram.",
      "Steam rising off the Klong Thom hot spring waterfalls.",
      "Rainforest boardwalks and jungle trails.",
      "Tiger Cave Temple's golden Buddha above the treetops.",
    ],
    nearby: ["Emerald Pool", "Klong Thom Hot Springs", "Blue Pool", "Tiger Cave Temple", "Krabi Town", "Ao Nang Beach"],
    fares: "Approx fares: Ao Nang → Emerald Pool ≈ THB 1,200–1,600 round trip (tours include hotel transfers).",
  },
} as const;

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
        <ul className="space-y-1.5">
          {items.map((t) => (
            <li key={t} className="flex items-center gap-2 text-xs md:text-sm text-black">
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

const IndianTravelerCompanion = ({ config }: { config: KrabiActivityConfig }) => {
  const area = AREA[config.area];
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
              <p className="text-black">Pure-veg and Jain-friendly Indian meals are easy to find near {area.label}. Ao Nang and Krabi Town have the widest choice.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <IndianRupee className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-black">Currency & payments</p>
              <p className="text-black">Thailand uses THB. Carry cash for markets, tuk-tuks and beach vendors; cards work at malls and big attractions. Ao Nang exchange counters offer good rates.</p>
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
              <p className="text-black">Cover shoulders and knees at Tiger Cave Temple and Wat Kaew Korawaram, remove shoes before entering shrines, and avoid pointing your feet towards Buddha images.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Plane className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-black">Best time from India</p>
              <p className="text-black">November to April is the dry season with calm seas — the best window for island and boat tours.</p>
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
              <li>Buy at <b>Krabi International Airport</b> — AIS, TrueMove and dtac counters are open late.</li>
              <li>7-Eleven stores across Ao Nang and Krabi Town sell tourist SIMs and top-ups.</li>
              <li>Tourist eSIMs start at ~₹400 for 8–15 GB / 7 days.</li>
              <li>Free Wi-Fi is common at beach cafes, resorts and hotels.</li>
            </ul>
          </Section>

          <Section icon={Car} title="Taxi Apps & Fares">
            <ul className="space-y-1.5 list-disc pl-5">
              <li><b>Grab</b> — most reliable, upfront pricing, English UI.</li>
              <li><b>Bolt</b> — usually cheaper for short rides around Ao Nang and Krabi Town.</li>
              <li>Local taxis and songthaews are fixed-fare in Krabi — agree the price before boarding.</li>
              <li>{area.fares}</li>
            </ul>
          </Section>

          <Section icon={Shirt} title="What to Wear">
            <ul className="space-y-1.5 list-disc pl-5">
              <li>Light cotton clothing and swimwear — Krabi is hot and humid year-round.</li>
              <li>Shoulders and knees covered for Tiger Cave Temple and Wat Kaew (sarongs available on site).</li>
              <li>Slip-on sandals work best for boat boarding and temple entries.</li>
              <li>Cap, sunglasses and reef-safe sunscreen for beach and boat days.</li>
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
              {(config.mistakes ?? [
                "Booking at the counter — walk-in tickets cost more and slots sell out.",
                "Wearing shorts or sleeveless tops to temples and being refused entry.",
                "Taking tuk-tuks without agreeing the fare first.",
                "Underestimating Krabi pier timings — always keep a buffer of 45–60 minutes.",
              ]).map((m) => <li key={m}>{m}</li>)}
            </ul>
          </Section>

          <Section icon={Leaf} title="Vegetarian Food Guide">
            <ul className="space-y-1.5 list-disc pl-5">
              <li><b>Say "mangsawirat"</b> (vegetarian) and "mai sai nam pla" (no fish sauce).</li>
              <li><b>Ao Nang:</b> Namaste, Bombay Restaurant and Kohinoor serve pure-veg thalis.</li>
              <li><b>Krabi Town:</b> Indian kitchens that can prepare Jain-friendly meals on request.</li>
              <li><b>Budget:</b> veg Thai meals cost THB 60–120 at local eateries.</li>
            </ul>
          </Section>

          <Section icon={CloudRain} title="Rain Tips">
            <ul className="space-y-1.5 list-disc pl-5">
              <li>Monsoon showers (May–Oct) are short and heavy — carry a compact umbrella and dry bag.</li>
              <li>Boat tours may be rescheduled on rough-sea days — we inform you in advance.</li>
              <li>Boat and outdoor tours usually run unless there's a storm warning.</li>
              <li>Keep Krabi Town cafes, a spa or the night market as an indoor backup.</li>
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

/* ----------------------- complete your Krabi trip ----------------------- */

const TRIP_POOL = [
  { title: "4 Island Tour by Longtail Boat", desc: "Poda, Chicken, Tub Island and Phra Nang Cave Beach.", image: fourIslandsImg, slug: "/thailand/krabi/4-island-tour-longtail-boat-with-transfer/" },
  { title: "4 Island Tour by Speedboat", desc: "Faster island hopping with more time on the sand.", image: fourIslands2Img, slug: "/thailand/krabi/4-island-tour-speedboat-with-transfer/" },
  { title: "Hong Island Longtail Tour", desc: "The hidden Hong lagoon and Pakbia Island.", image: hongImg, slug: "/thailand/krabi/hong-island-tour-longtail-boat-with-transfer/" },
  { title: "Hong Island Speedboat Tour", desc: "Lagoon, viewpoint and Lao Lading beach.", image: hong2Img, slug: "/thailand/krabi/hong-island-tour-speedboat-with-transfer/" },
  { title: "7 Islands Sunset Longtail Tour", desc: "Sunset cruise with BBQ dinner and plankton swim.", image: sevenImg, slug: "/thailand/krabi/7-islands-tour-longtail-boat-with-transfer/" },
  { title: "7 Islands Sunset Speedboat Tour", desc: "Seven islands, snorkelling and beach BBQ.", image: seven2Img, slug: "/thailand/krabi/7-islands-tour-speedboat-with-transfer/" },
  { title: "James Bond Island Tour", desc: "Phang Nga Bay karsts and Koh Panyee village.", image: jamesBondImg, slug: "/thailand/krabi/james-bond-island/" },
  { title: "Emerald Pool & Hot Springs", desc: "Tiger Cave Temple, hot springs and jungle pools.", image: emeraldImg, slug: "/thailand/krabi/full-day-emerald-pool-hot-springs-tiger-temple-tour-with-transfer/" },
];

const CompleteYourKrabiTrip = ({ currentPath, title }: { currentPath: string; title: string }) => {
  const items = TRIP_POOL.filter((i) => i.slug !== currentPath).slice(0, 4);
  return (
    <section className="mt-12">
      <div className="flex items-end justify-between mb-4 md:mb-6">
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">Complete Your Krabi Trip</h2>
          <p className="text-muted-foreground mt-1 text-sm md:text-base">
            Top Krabi experiences to pair with {title}
          </p>
        </div>
        <Link
          to="/thailand/krabi/things-to-do/"
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

const FinalCTA = ({ config, fallbackImage }: { config: KrabiActivityConfig; fallbackImage?: string }) => (
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
  /** already-merged tour data (base tour + hero/gallery/faq overrides) */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tourData: any;
  config: KrabiActivityConfig;
  extraContentBeforeReviews?: ReactNode;
  /** Rendered directly under "What to Expect", above the marketing blocks */
  contentAfterOverview?: ReactNode;
}

const KrabiActivityTemplate = ({ tourData, config, extraContentBeforeReviews, contentAfterOverview }: Props) => {
  if (!tourData) return null;

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
            {contentAfterOverview}
            <div className="space-y-6 min-w-0">
              <HeroMeta
                rating={Math.max(tourData.rating ?? 4.8, 4.5)}
                reviews={tourData.reviews ?? 150}
                location={tourData.location ?? AREA[config.area].label}
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
          <CompleteYourKrabiTrip currentPath={config.path} title={tourData.title} />
        }
        extraContentBeforeGuides={<ThailandTravelEssentials />}
        extraContentAfterTransfers={<FinalCTA config={config} fallbackImage={tourData.heroImages?.[0]?.src} />}
      />
    </>
  );
};

export default KrabiActivityTemplate;
