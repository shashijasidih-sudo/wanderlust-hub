/**
 * Shared "Gardens by the Bay style" layout for every Singapore activity page.
 *
 * Wraps <TourBooking /> with the standard marketing stack:
 *   Hero meta -> value badges -> trust strip -> Why Yellodae -> comparison table
 *   -> optional highlights/timings tables -> Indian Traveler Companion
 *   -> Complete Your Singapore Trip grid -> final CTA.
 */
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import Seo from "@/components/seo/Seo";
import SingaporeTravelEssentials from "@/components/activity-detail/SingaporeTravelEssentials";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Utensils, Plug, Languages, IndianRupee, Plane, ShieldCheck,
  Star, MapPin, Clock, Users, Check, Sparkles, MessageCircle, X,
  Smartphone, Car, Shirt, AppWindow, Landmark, Calculator, AlertTriangle,
  Leaf, CloudRain, Baby, ArrowRight, Camera,
} from "lucide-react";

import ussImg from "@/assets/singapore-universal-studios.webp";
import nightSafariImg from "@/assets/singapore-night-safari.webp";
import wingsOfTimeImg from "@/assets/singapore-wings-time.webp";
import cityTourImg from "@/assets/singapore-city-tour.jpg";
import cableCarImg from "@/assets/singapore-cable-car.webp";
import gardensImg from "@/assets/singapore-gardens-bay-night-1.jpg";
import singaporeZooImg from "@/assets/singapore-zoo.webp";
import riverSafariImg from "@/assets/singapore-river-safari.jpg";
import SafeImage from "@/components/SafeImage";

const WHATSAPP = "917061710810";

/* ---------------------------------- types --------------------------------- */

export type SingaporeArea = "sentosa" | "mandai" | "marina-bay" | "city";

export interface TableBlock {
  heading?: string;
  columns: string[];
  rows: string[][];
  minWidth?: number;
}

export interface SingaporeActivityConfig {
  /** key inside toursData */
  tourKey: string;
  /** canonical path with trailing slash */
  path: string;
  seoTitle: string;
  seoDescription: string;
  seoImage?: string;
  /** short phrase used inside WhatsApp prefill messages, e.g. "Night Safari tickets" */
  whatsappTopic: string;
  /** who the experience suits — shown in hero meta */
  audience?: string;
  /** area preset that drives food / transport / nearby content */
  area: SingaporeArea;
  /** one-paragraph intro for the Indian Traveler Companion card */
  companionIntro: string;
  /** headline used in the closing CTA banner */
  ctaHeadline: string;
  /** background image for the closing CTA banner (defaults to first hero image) */
  ctaImage?: string;
  /** merged on top of toursData[tourKey] — e.g. custom heroImages or faqs */
  tourOverrides?: Record<string, unknown>;
  /** optional tables rendered under the marketing intro */
  tables?: TableBlock[];
  /** page-specific tips list shown inside the companion card */
  tips?: string[];
  /** page-specific mistakes list */
  mistakes?: string[];
  /** extra nodes */
  extraContentBeforeReviews?: ReactNode;
  hideItinerary?: boolean;
}

/* ------------------------------ area presets ------------------------------ */

const AREA = {
  sentosa: {
    label: "Sentosa Island, Singapore",
    food: [
      ["Sanjay's Indian (VivoCity)", "~10 min", "North Indian", "Veg & Non-veg"],
      ["Saravanaa Bhavan (VivoCity)", "~10 min", "South Indian", "Pure Veg"],
      ["Malaysian Food Street (RWS)", "On-site", "Asian + Veg", "Veg options"],
      ["Komala Vilas (Little India)", "~30 min", "South Indian", "Pure Veg"],
    ],
    photos: [
      "Siloso Beach boardwalk at golden hour.",
      "Sentosa Merlion & Imbiah viewpoint.",
      "Cable car cabins framed against Keppel Harbour.",
      "Resorts World globe fountain after dark.",
    ],
    nearby: ["Universal Studios", "S.E.A. Aquarium", "Wings of Time", "Sentosa Cable Car", "Adventure Cove", "SkyHelix Sentosa"],
    fares: "Approx fares: Changi → Sentosa ≈ SGD 30–40 · Orchard → Sentosa ≈ SGD 15–20.",
  },
  mandai: {
    label: "Mandai Wildlife Reserve, Singapore",
    food: [
      ["Ulu Ulu Safari Restaurant", "On-site", "Local + Indian", "Veg options"],
      ["Casa Italia (Mandai)", "On-site", "Continental", "Veg options"],
      ["Komala Vilas (Little India)", "~35 min", "South Indian", "Pure Veg"],
      ["Anjappar (Race Course Rd)", "~30 min", "Chettinad", "Veg & Non-veg"],
    ],
    photos: [
      "Entrance archway lit up after sunset.",
      "Tram ride viewpoints over the open habitats.",
      "Walking-trail canopy shots (no flash).",
      "Live show amphitheatre from the upper rows.",
    ],
    nearby: ["Singapore Zoo", "Night Safari", "River Wonders", "Bird Paradise", "Rainforest Wild Asia", "Upper Seletar Reservoir"],
    fares: "Approx fares: Changi → Mandai ≈ SGD 35–45 · Orchard → Mandai ≈ SGD 22–28.",
  },
  "marina-bay": {
    label: "Marina Bay, Singapore",
    food: [
      ["Punjab Grill (MBS)", "~10 min", "North Indian", "Veg & Non-veg"],
      ["Kailash Parbat (MBS)", "~10 min", "Indian Chaat", "Pure Veg"],
      ["Rasapura Masters (MBS)", "~10 min", "Food Court", "Veg options"],
      ["Komala Vilas (Little India)", "~20 min", "South Indian", "Pure Veg"],
    ],
    photos: [
      "Merlion Park with the Marina Bay Sands skyline.",
      "Helix Bridge at blue hour.",
      "Supertree Grove during the 7:45 PM light show.",
      "Singapore Flyer reflections across the bay.",
    ],
    nearby: ["Marina Bay Sands", "Gardens by the Bay", "Singapore Flyer", "ArtScience Museum", "Merlion Park", "Esplanade"],
    fares: "Approx fares: Changi → Marina Bay ≈ SGD 25–35 · Orchard → Marina Bay ≈ SGD 12–18.",
  },
  city: {
    label: "Singapore City",
    food: [
      ["Komala Vilas (Little India)", "~15 min", "South Indian", "Pure Veg"],
      ["Anjappar (Race Course Rd)", "~15 min", "Chettinad", "Veg & Non-veg"],
      ["Kailash Parbat (MBS)", "~15 min", "Indian Chaat", "Pure Veg"],
      ["Tekka Centre Food Court", "~15 min", "Indian Hawker", "Veg options"],
    ],
    photos: [
      "Merlion Park with the Marina Bay skyline.",
      "Colourful shophouses in Chinatown & Little India.",
      "Marina Bay waterfront promenade at sunset.",
      "Orchard Road lights after dark.",
    ],
    nearby: ["Merlion Park", "Chinatown", "Little India", "Marina Bay Sands", "Gardens by the Bay", "Orchard Road"],
    fares: "Approx fares: Changi → City ≈ SGD 25–35 · Orchard → Marina Bay ≈ SGD 12–18.",
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

const IndianTravelerCompanion = ({ config }: { config: SingaporeActivityConfig }) => {
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
              <p className="text-black">Pure-veg and Jain-friendly Indian meals are easy to find near {area.label}. Little India and Marina Bay Sands have the widest choice.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <IndianRupee className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-black">Currency & payments</p>
              <p className="text-black">Singapore uses SGD. Indian debit/credit cards, forex cards and UPI via PayNow QR work almost everywhere. Carry small SGD for lockers and hawker stalls.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Plug className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-black">Plug & power</p>
              <p className="text-black">Singapore uses Type G (3-pin UK style), 230V. Indian Type D plugs won't fit — carry a universal adapter.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Languages className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-black">Language</p>
              <p className="text-black">English is spoken everywhere and all signage is in English — Hindi and Tamil are widely understood too.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-black">Prayer facilities</p>
              <p className="text-black">Muslim prayer rooms are available at Marina Bay Sands B1, VivoCity and Changi Airport. Sri Mariamman and Sri Veeramakaliamman temples are a short taxi ride away.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Plane className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-black">Best time from India</p>
              <p className="text-black">Weekdays are noticeably less crowded than weekends and Indian school-holiday weeks. Book online in advance for the best slots.</p>
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
              <li>Buy at <b>Changi Airport</b> on arrival — Singtel, StarHub and M1 counters are open 24/7.</li>
              <li>7-Eleven and convenience stores across the city stock tourist SIMs.</li>
              <li>Tourist eSIMs (Airalo, Nomad) start at ~₹500 for 5 GB / 7 days.</li>
              <li>Free public Wi-Fi is available at malls, MRT stations and most attractions.</li>
            </ul>
          </Section>

          <Section icon={Car} title="Taxi Apps & Fares">
            <ul className="space-y-1.5 list-disc pl-5">
              <li><b>Grab</b> — most popular, English UI, cards accepted.</li>
              <li><b>Gojek</b> — good backup, often cheaper on short rides.</li>
              <li><b>ComfortDelGro</b> — official taxi app.</li>
              <li>{area.fares}</li>
            </ul>
          </Section>

          <Section icon={Shirt} title="What to Wear">
            <ul className="space-y-1.5 list-disc pl-5">
              <li>Light cotton or dry-fit clothing — Singapore is hot and humid year-round.</li>
              <li>Comfortable walking shoes; you'll cover several kilometres on foot.</li>
              <li>Carry a light shrug for strongly air-conditioned indoor venues and coaches.</li>
              <li>Cap, sunglasses and sunscreen for outdoor sections.</li>
            </ul>
          </Section>

          <Section icon={AppWindow} title="Must-Have Apps">
            <div className="flex flex-wrap gap-2">
              {["Grab", "Google Maps", "MyICA", "PayNow", "WhatsApp", "Google Translate"].map((a) => (
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
                  <tr className="border-t border-border"><td className="p-2">Taxi (hotel ↔ attraction)</td><td className="p-2 text-right">₹2,000</td></tr>
                  <tr className="border-t border-border"><td className="p-2">Souvenirs & snacks</td><td className="p-2 text-right">₹2,500</td></tr>
                  <tr className="border-t border-border bg-primary/5 font-semibold"><td className="p-2">Add-on budget</td><td className="p-2 text-right">≈ ₹8,000</td></tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section icon={AlertTriangle} title="Common Mistakes Indians Make">
            <ul className="space-y-1.5 list-disc pl-5">
              {(config.mistakes ?? [
                "Booking at the counter — walk-in tickets are 15–20% costlier and often sold out.",
                "Underestimating travel time across Singapore during peak hours.",
                "Skipping hotel transfers and struggling with late-night taxis.",
                "Not carrying a light shrug for heavily air-conditioned venues.",
              ]).map((m) => <li key={m}>{m}</li>)}
            </ul>
          </Section>

          <Section icon={Leaf} title="Vegetarian Food Guide">
            <ul className="space-y-1.5 list-disc pl-5">
              <li><b>On-site:</b> most venues have at least one clearly labelled vegetarian counter.</li>
              <li><b>Marina Bay Sands:</b> Kailash Parbat, Punjab Grill and Rasapura Masters food court.</li>
              <li><b>Budget:</b> hawker centres serve veg meals from SGD 6–8.</li>
              <li><b>Jain food:</b> Kailash Parbat and Komala Vilas serve Jain meals on request.</li>
            </ul>
          </Section>

          <Section icon={CloudRain} title="Rain Tips">
            <ul className="space-y-1.5 list-disc pl-5">
              <li>Tropical showers are short — carry a compact umbrella or poncho.</li>
              <li>MRT stations and malls are linked by covered walkways across most of the city.</li>
              <li>Outdoor shows usually continue unless there's a heavy thunderstorm.</li>
              <li>Keep an indoor backup (museum, mall or aquarium) in your day plan.</li>
            </ul>
          </Section>

          <Section icon={Baby} title="Kids Guide">
            <ul className="space-y-1.5 list-disc pl-5">
              <li><b>Strollers:</b> Singapore attractions are fully stroller and wheelchair accessible.</li>
              <li><b>Baby care rooms:</b> available at all major attractions — feeding, changing and hot water.</li>
              <li><b>Snacks:</b> carry water and light snacks; refill points are widely available.</li>
              <li><b>Child pricing:</b> check the age band in the ticket options above before booking.</li>
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

/* ---------------------- complete your Singapore trip ---------------------- */

const TRIP_POOL = [
  { title: "Universal Studios Singapore", desc: "Tickets + hotel transfers combo.", image: ussImg, slug: "/singapore/universal-studios-singapore-tickets-and-transfers/" },
  { title: "Gardens by the Bay", desc: "Flower Dome, Cloud Forest & Supertrees.", image: gardensImg, slug: "/singapore/gardens-by-the-bay-tickets-and-transfers/" },
  { title: "Night Safari", desc: "World's first nocturnal wildlife park.", image: nightSafariImg, slug: "/singapore/night-safari-singapore-tickets-and-transfers/" },
  { title: "Wings of Time", desc: "Sentosa's spectacular outdoor night show.", image: wingsOfTimeImg, slug: "/singapore/wings-of-time-show-sentosa-tickets/" },
  { title: "Sentosa Cable Car", desc: "Iconic ride over the harbour to Sentosa.", image: cableCarImg, slug: "/singapore/sentosa-cable-car-tickets-and-transfers/" },
  { title: "Singapore City Tour", desc: "Guided half-day tour with transfers.", image: cityTourImg, slug: "/singapore/singapore-city-tour/" },
  { title: "Singapore Zoo", desc: "Award-winning open-concept rainforest zoo.", image: singaporeZooImg, slug: "/singapore/singapore-zoo-tickets/" },
  { title: "River Wonders", desc: "Giant pandas & Amazon river habitats.", image: riverSafariImg, slug: "/singapore/river-wonders-singapore-tickets/" },
  { title: "Singapore River Cruise", desc: "Bumboat ride past Clarke Quay & Merlion.", image: cityTourImg, slug: "/singapore/singapore-river-cruise-tickets-and-transfers/" },
  { title: "Singapore Flyer", desc: "Giant observation wheel over Marina Bay.", image: gardensImg, slug: "/singapore/singapore-flyer-tickets-and-transfers/" },
];

const CompleteYourSingaporeTrip = ({ currentPath, title }: { currentPath: string; title: string }) => {
  const items = TRIP_POOL.filter((i) => i.slug !== currentPath).slice(0, 4);
  return (
    <section className="mt-12">
      <div className="flex items-end justify-between mb-4 md:mb-6">
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">Complete Your Singapore Trip</h2>
          <p className="text-muted-foreground mt-1 text-sm md:text-base">
            Top Singapore experiences to pair with {title}
          </p>
        </div>
        <Link
          to="/singapore/things-to-do/"
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

const FinalCTA = ({ config, fallbackImage }: { config: SingaporeActivityConfig; fallbackImage?: string }) => (
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

const SingaporeActivityTemplate = ({ config }: { config: SingaporeActivityConfig }) => {
  const base = toursData[config.tourKey];
  if (!base) return null;
  const tourData = { ...base, ...(config.tourOverrides ?? {}) } as typeof base;

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
        extraContentBeforeReviews={config.extraContentBeforeReviews}
        extraContentBeforeSuggested={
          <CompleteYourSingaporeTrip currentPath={config.path} title={tourData.title} />
        }
        extraContentBeforeGuides={<SingaporeTravelEssentials />}
        extraContentAfterTransfers={<FinalCTA config={config} fallbackImage={tourData.heroImages?.[0]?.src} />}
      />
    </>
  );
};

export default SingaporeActivityTemplate;
