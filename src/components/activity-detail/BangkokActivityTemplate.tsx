/**
 * Shared "Gardens by the Bay style" layout for every Bangkok activity page.
 *
 * Wraps <TourBooking /> with the standard marketing stack:
 *   Hero meta -> value badges -> trust strip -> Why Yellodae -> comparison table
 *   -> optional tables -> Indian Traveler Companion
 *   -> Complete Your Bangkok Trip grid -> Thailand Travel Essentials -> final CTA.
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

import templeImg from "@/assets/bangkok-temple-2.jpg";
import buddhaImg from "@/assets/bangkok-buddha-1.webp";
import cruiseImg from "@/assets/bangkok-cruise-night-3.webp";
import skywalkImg from "@/assets/bangkok-skywalk-hero.webp";
import cityImg from "@/assets/bangkok-city-1.jpg";
import ayutthayaImg from "@/assets/ayutthaya-sunset-1.jpg";
import riversideImg from "@/assets/bangkok-riverside-temple-1.webp";
import nightImg from "@/assets/bangkok-city-night-1.jpg";

const WHATSAPP = "917061710810";

/* ---------------------------------- types --------------------------------- */

export type BangkokArea = "riverside" | "city" | "ayutthaya" | "outskirts";

export interface TableBlock {
  heading?: string;
  columns: string[];
  rows: string[][];
  minWidth?: number;
}

export interface BangkokActivityConfig {
  /** canonical path with trailing slash */
  path: string;
  seoTitle: string;
  seoDescription: string;
  seoImage?: string;
  whatsappTopic: string;
  audience?: string;
  area: BangkokArea;
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
  riverside: {
    label: "Chao Phraya Riverside, Bangkok",
    food: [
      ["Indian Hut (Surawong)", "~15 min", "North Indian", "Veg & Non-veg"],
      ["Saravanaa Bhavan (Silom)", "~15 min", "South Indian", "Pure Veg"],
      ["Rang Mahal (Sukhumvit)", "~25 min", "North Indian", "Veg & Non-veg"],
      ["Chennai Kitchen (Silom)", "~15 min", "South Indian", "Pure Veg"],
    ],
    photos: [
      "Wat Arun glowing across the river at blue hour.",
      "Chao Phraya boats with the skyline behind.",
      "Riverside piers lit up after dark.",
      "Temple spires framed from the water.",
    ],
    nearby: ["Wat Arun", "Wat Pho", "Grand Palace", "Asiatique", "ICONSIAM", "Chinatown (Yaowarat)"],
    fares: "Approx fares: Suvarnabhumi → Riverside ≈ THB 450–600 · Sukhumvit → Riverside ≈ THB 150–250.",
  },
  city: {
    label: "Central Bangkok",
    food: [
      ["Indian Hut (Surawong)", "~10 min", "North Indian", "Veg & Non-veg"],
      ["Saravanaa Bhavan (Silom)", "~10 min", "South Indian", "Pure Veg"],
      ["Mrs Balbir's (Sukhumvit 11)", "~15 min", "Punjabi", "Veg & Non-veg"],
      ["Govinda (Sukhumvit)", "~20 min", "Italian-Veg", "Pure Veg"],
    ],
    photos: [
      "Mahanakhon skyline at sunset.",
      "Neon-lit Yaowarat street food lanes.",
      "Rooftop views over Sukhumvit at night.",
      "Tuk-tuk light trails in the old city.",
    ],
    nearby: ["Grand Palace", "Wat Pho", "Chinatown", "Mahanakhon SkyWalk", "Siam Paragon", "Jim Thompson House"],
    fares: "Approx fares: Suvarnabhumi → City ≈ THB 400–550 · Sukhumvit → Silom ≈ THB 100–150.",
  },
  ayutthaya: {
    label: "Ayutthaya, near Bangkok",
    food: [
      ["Indian Hut (Bangkok)", "Before departure", "North Indian", "Veg & Non-veg"],
      ["Local Thai-veg cafes (Ayutthaya)", "On-site", "Thai", "Veg options"],
      ["Saravanaa Bhavan (Silom)", "On return", "South Indian", "Pure Veg"],
      ["Chennai Kitchen (Silom)", "On return", "South Indian", "Pure Veg"],
    ],
    photos: [
      "Buddha head entwined in the banyan tree at Wat Mahathat.",
      "Ruined chedis of Wat Phra Si Sanphet.",
      "Golden hour over the Chao Phraya near Ayutthaya.",
      "Reclining Buddha at Wat Lokayasutharam.",
    ],
    nearby: ["Wat Mahathat", "Wat Phra Si Sanphet", "Wat Chaiwatthanaram", "Bang Pa-In Palace", "Ayutthaya Floating Market"],
    fares: "Approx fares: Bangkok → Ayutthaya ≈ THB 1,200–1,800 one way by car (tours include transfers).",
  },
  outskirts: {
    label: "Greater Bangkok",
    food: [
      ["On-site food courts", "On-site", "Thai + Veg", "Veg options"],
      ["Indian Hut (Surawong)", "~45 min", "North Indian", "Veg & Non-veg"],
      ["Saravanaa Bhavan (Silom)", "~45 min", "South Indian", "Pure Veg"],
      ["Mrs Balbir's (Sukhumvit 11)", "~40 min", "Punjabi", "Veg & Non-veg"],
    ],
    photos: [
      "Wide open park and show arenas.",
      "Family shots at the main entrance arch.",
      "Canal and market scenes on the way.",
      "Sunset skyline on the drive back to the city.",
    ],
    nearby: ["Safari World", "Dream World", "Maeklong Railway Market", "Damnoen Saduak", "Chatuchak Market"],
    fares: "Approx fares: City hotel → outskirts ≈ THB 400–700 each way (tours include transfers).",
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

const IndianTravelerCompanion = ({ config }: { config: BangkokActivityConfig }) => {
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
              <p className="text-black">Pure-veg and Jain-friendly Indian meals are easy to find near {area.label}. Silom, Sukhumvit and Pahurat (Little India) have the widest choice.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <IndianRupee className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-black">Currency & payments</p>
              <p className="text-black">Thailand uses THB. Carry cash for markets and tuk-tuks; cards work at malls and attractions. Super Rich and Vasu exchange counters offer the best rates.</p>
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
              <p className="text-black">Cover shoulders and knees at temples, remove shoes before entering shrines, and avoid pointing your feet towards Buddha images.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Plane className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-black">Best time from India</p>
              <p className="text-black">November to February is cool and dry. Start early to beat both the heat and the tour-bus crowds.</p>
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
              <li>Buy at <b>Suvarnabhumi or Don Mueang airport</b> — AIS, TrueMove and dtac counters are open late.</li>
              <li>7-Eleven stores across Bangkok sell tourist SIMs and top-ups.</li>
              <li>Tourist eSIMs start at ~₹400 for 8–15 GB / 7 days.</li>
              <li>Free Wi-Fi is common at malls, cafes and hotels.</li>
            </ul>
          </Section>

          <Section icon={Car} title="Taxi Apps & Fares">
            <ul className="space-y-1.5 list-disc pl-5">
              <li><b>Grab</b> — most reliable, upfront pricing, English UI.</li>
              <li><b>Bolt</b> — usually cheaper for short city rides.</li>
              <li>Metered taxis: insist on the meter; tolls are extra.</li>
              <li>{area.fares}</li>
            </ul>
          </Section>

          <Section icon={Shirt} title="What to Wear">
            <ul className="space-y-1.5 list-disc pl-5">
              <li>Light cotton clothing — Bangkok is hot and humid year-round.</li>
              <li>Shoulders and knees covered for temple visits (carry a scarf or shrug).</li>
              <li>Slip-on shoes make temple entries much easier.</li>
              <li>Cap, sunglasses and sunscreen for outdoor sections.</li>
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
                "Underestimating Bangkok traffic — always keep a buffer of 45–60 minutes.",
              ]).map((m) => <li key={m}>{m}</li>)}
            </ul>
          </Section>

          <Section icon={Leaf} title="Vegetarian Food Guide">
            <ul className="space-y-1.5 list-disc pl-5">
              <li><b>Say "mangsawirat"</b> (vegetarian) and "mai sai nam pla" (no fish sauce).</li>
              <li><b>Silom & Sukhumvit:</b> Saravanaa Bhavan, Chennai Kitchen and Govinda for pure-veg meals.</li>
              <li><b>Pahurat (Little India):</b> Punjabi dhabas and Jain-friendly kitchens.</li>
              <li><b>Budget:</b> veg Thai meals cost THB 60–120 at local eateries.</li>
            </ul>
          </Section>

          <Section icon={CloudRain} title="Rain Tips">
            <ul className="space-y-1.5 list-disc pl-5">
              <li>Monsoon showers (Jun–Oct) are short and heavy — carry a compact umbrella.</li>
              <li>Streets flood briefly; BTS and MRT stay the fastest way around.</li>
              <li>Boat and outdoor tours usually run unless there's a storm warning.</li>
              <li>Keep a mall, museum or aquarium as an indoor backup.</li>
            </ul>
          </Section>

          <Section icon={Baby} title="Kids Guide">
            <ul className="space-y-1.5 list-disc pl-5">
              <li><b>Strollers:</b> fine at malls and parks, harder on temple steps and old-city footpaths.</li>
              <li><b>Baby care:</b> malls and major attractions have feeding and changing rooms.</li>
              <li><b>Food:</b> plain rice, noodles and fruit are easy fallbacks for young kids.</li>
              <li><b>Heat:</b> plan indoor breaks between 12 PM and 3 PM.</li>
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

/* ----------------------- complete your Bangkok trip ----------------------- */

const TRIP_POOL = [
  { title: "Grand Palace & Wat Phra Kaew", desc: "Bangkok's most iconic royal complex.", image: templeImg, slug: "/thailand/bangkok/grand-palace-wat-phra-kaew-tour/" },
  { title: "Chao Phraya Princess Cruise", desc: "Dinner cruise past illuminated riverside temples.", image: cruiseImg, slug: "/thailand/bangkok/chao-phraya-princess-dinner-cruise/" },
  { title: "Mahanakhon SkyWalk", desc: "Glass-floor rooftop over the Bangkok skyline.", image: skywalkImg, slug: "/thailand/bangkok/mahanakhon-skywalk-tickets/" },
  { title: "Safari World & Marine Park", desc: "Drive-through safari plus marine shows.", image: riversideImg, slug: "/thailand/bangkok/safari-world/" },
  { title: "Ayutthaya Day Tour", desc: "UNESCO ruins on a full-day trip from Bangkok.", image: ayutthayaImg, slug: "/thailand/bangkok/ayutthaya-day-tour-from-bangkok/" },
  { title: "Three Temples City Tour", desc: "Wat Arun, Wat Pho and Golden Buddha with transfers.", image: buddhaImg, slug: "/thailand/bangkok/three-temples-bangkok-city-tour-with-transfer/" },
  { title: "Dream World Bangkok", desc: "Family theme park with Snow Town.", image: cityImg, slug: "/thailand/bangkok/dream-world-bangkok-tickets/" },
  { title: "Tuk-Tuk Night Tour", desc: "Street food and temples after dark.", image: nightImg, slug: "/thailand/bangkok/tuk-tuk-night-tour-bangkok/" },
];

const CompleteYourBangkokTrip = ({ currentPath, title }: { currentPath: string; title: string }) => {
  const items = TRIP_POOL.filter((i) => i.slug !== currentPath).slice(0, 4);
  return (
    <section className="mt-12">
      <div className="flex items-end justify-between mb-4 md:mb-6">
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">Complete Your Bangkok Trip</h2>
          <p className="text-muted-foreground mt-1 text-sm md:text-base">
            Top Bangkok experiences to pair with {title}
          </p>
        </div>
        <Link
          to="/thailand/bangkok/things-to-do/"
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

const FinalCTA = ({ config, fallbackImage }: { config: BangkokActivityConfig; fallbackImage?: string }) => (
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
  config: BangkokActivityConfig;
  extraContentBeforeReviews?: ReactNode;
  /** Rendered directly under "What to Expect", above the marketing blocks */
  contentAfterOverview?: ReactNode;
}

const BangkokActivityTemplate = ({ tourData, config, extraContentBeforeReviews, contentAfterOverview }: Props) => {
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
          <CompleteYourBangkokTrip currentPath={config.path} title={tourData.title} />
        }
        extraContentBeforeGuides={<ThailandTravelEssentials />}
        extraContentAfterTransfers={<FinalCTA config={config} fallbackImage={tourData.heroImages?.[0]?.src} />}
      />
    </>
  );
};

export default BangkokActivityTemplate;
