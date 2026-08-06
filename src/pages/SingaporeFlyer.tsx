import SafeImage from "@/components/SafeImage";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import TourBooking from "@/components/TourBooking";
import SingaporeTravelEssentials from "@/components/activity-detail/SingaporeTravelEssentials";
import { toursData } from "@/data/tourData";
import Seo from "@/components/seo/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Utensils, Plug, Languages, IndianRupee, Plane, ShieldCheck,
  Star, MapPin, Clock, Users, Check, Sparkles, MessageCircle, X,
  Smartphone, Car, Shirt, AppWindow, Landmark, Calculator, AlertTriangle,
  Leaf, CloudRain, Baby, ArrowRight, Camera,
} from "lucide-react";

import flyerHeroImg from "@/assets/singapore-flyer-twilight-1.jpg";
import ussImg from "@/assets/singapore-universal-studios.webp";
import nightSafariImg from "@/assets/singapore-night-safari.webp";
import wingsOfTimeImg from "@/assets/singapore-wings-time.webp";
import gardensImg from "@/assets/singapore-gardens-bay-night-1.jpg";
import cableCarImg from "@/assets/singapore-cable-car.webp";
import cityTourImg from "@/assets/singapore-city-tour.jpg";
import singaporeZooImg from "@/assets/singapore-zoo.webp";
import bigBusImg from "@/assets/singapore-big-bus.webp";

const highlightsTable = [
  { emoji: "🎡", name: "Giant Observation Wheel", type: "165m Icon", best: "360° skyline views", time: "30 min rotation" },
  { emoji: "🕰️", name: "Time Capsule", type: "Multisensory Walkthrough", best: "Kids & history lovers", time: "15 min" },
  { emoji: "🌇", name: "Sunset Slot", type: "Best-Value Timing", best: "Day + night in one ride", time: "6:30–7:15 PM" },
  { emoji: "🏙️", name: "Marina Bay Panorama", type: "Viewpoint", best: "MBS, Gardens & Helix Bridge", time: "Throughout ride" },
  { emoji: "🥂", name: "Premium Capsule Upgrade", type: "Optional Add-on", best: "Proposals & anniversaries", time: "On request" },
];

const HeroMeta = () => (
  <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-black">
    <span className="inline-flex items-center gap-1 font-semibold">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
      ))}
      <span className="ml-1">4.9 (150+ Indian Travelers)</span>
    </span>
    <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-primary" /> Marina Bay, Singapore</span>
    <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-primary" /> 30 Min Ride · 1–2 Hrs Total</span>
    <span className="inline-flex items-center gap-1"><Users className="h-3.5 w-3.5 text-primary" /> Perfect for Families & Couples</span>
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

const BookingTrustAndSupport = () => {
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
        href={`https://wa.me/917061710810?text=${encodeURIComponent(
          "Hi Yellodae, I have a question about Singapore Flyer tickets & transfers."
        )}`}
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

const MarketingIntro = () => (
  <div className="space-y-6 min-w-0">
    <HeroMeta />
    <ValueBadges />
    <TrustStrip />
    <WhyBookYellodae />
    <BookingTrustAndSupport />
    <WhyChooseYellodaeTable />
  </div>
);

const HighlightsAndTimings = () => (
  <div className="space-y-6 min-w-0">
    <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
      <table className="w-full text-[11px] md:text-sm border border-border rounded-lg overflow-hidden min-w-[520px] md:min-w-0">
        <thead className="bg-muted">
          <tr>
            <th className="text-left p-2 md:p-3 font-semibold">Experience</th>
            <th className="text-left p-2 md:p-3 font-semibold">Type</th>
            <th className="text-left p-2 md:p-3 font-semibold">Best For</th>
            <th className="text-left p-2 md:p-3 font-semibold">Duration</th>
          </tr>
        </thead>
        <tbody>
          {highlightsTable.map((r) => (
            <tr key={r.name} className="border-t border-border">
              <td className="p-2 md:p-3 whitespace-normal">{r.emoji} {r.name}</td>
              <td className="p-2 md:p-3 whitespace-normal">{r.type}</td>
              <td className="p-2 md:p-3 whitespace-normal">{r.best}</td>
              <td className="p-2 md:p-3 whitespace-normal">{r.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div>
      <h3 className="text-base md:text-lg font-semibold mb-3">Timings & Duration</h3>
      <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
        <table className="w-full text-[11px] md:text-sm border border-border rounded-lg overflow-hidden min-w-[520px] md:min-w-0">
          <thead className="bg-muted">
            <tr>
              <th className="text-left p-2 md:p-3 font-semibold">Option</th>
              <th className="text-left p-2 md:p-3 font-semibold">Timings</th>
              <th className="text-left p-2 md:p-3 font-semibold">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="p-2 md:p-3 whitespace-normal">Tickets + Hotel Transfers</td>
              <td className="p-2 md:p-3 whitespace-normal">Pickup approx. 5:30 PM · Drop by 9:00 PM</td>
              <td className="p-2 md:p-3 whitespace-normal">~3 hrs door to door</td>
            </tr>
            <tr className="border-t border-border">
              <td className="p-2 md:p-3 whitespace-normal">Tickets Only</td>
              <td className="p-2 md:p-3 whitespace-normal">Open 2:00 PM – 10:00 PM daily</td>
              <td className="p-2 md:p-3 whitespace-normal">30-min ride · allow 1–2 hrs</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const Section = ({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-xl border border-border bg-card p-4 md:p-5">
    <div className="flex items-center gap-2 mb-3">
      <Icon className="h-5 w-5 text-primary" />
      <h3 className="font-semibold text-black text-base md:text-lg">{title}</h3>
    </div>
    <div className="text-sm text-black">{children}</div>
  </div>
);

const IndianTravelerCompanion = () => (
  <Card className="text-black">
    <CardHeader>
      <CardTitle className="text-lg md:text-2xl text-black">Indian Traveler Companion</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4 text-sm p-3 md:p-6">
      <p className="text-black">
        Everything an Indian family needs for the Singapore Flyer — vegetarian food nearby, SIM cards, taxi apps,
        the best capsule timing for photos, kids tips and the mistakes first-timers usually make.
      </p>

      <div className="grid sm:grid-cols-2 gap-3">
        <div className="flex gap-3">
          <Utensils className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-black">Indian & vegetarian food</p>
            <p className="text-black">Marina Square and Suntec City food courts are a 5–10 minute walk with Indian counters; Punjab Grill and Kailash Parbat at MBS are 10 minutes away.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <IndianRupee className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-black">Currency & payments</p>
            <p className="text-black">Singapore uses SGD. Indian debit/credit cards, forex cards and PayNow QR are accepted at the Flyer terminal and all nearby malls.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Plug className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-black">Plug & power</p>
            <p className="text-black">Type G (3-pin UK style), 230V. Carry a universal adapter and a power bank — you'll shoot a lot of photos inside the capsule.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Languages className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-black">Language</p>
            <p className="text-black">All signage and staff communication is in English. Hindi and Tamil are widely understood around Marina Bay.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-black">Prayer facilities</p>
            <p className="text-black">Muslim prayer room at Marina Bay Sands Basement 1 and Suntec City. Sri Mariamman Temple is a 12-minute taxi ride away.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Plane className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-black">Best time from India</p>
            <p className="text-black">Book the 6:30–7:15 PM slot. You board in daylight, watch the sunset mid-rotation and step off into a fully lit skyline.</p>
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
                <tr className="border-t border-border"><td className="p-2">Marina Square Food Court</td><td className="p-2">~5 min</td><td className="p-2">Indian & Asian</td><td className="p-2">Veg options</td></tr>
                <tr className="border-t border-border"><td className="p-2">Punjab Grill (MBS)</td><td className="p-2">~12 min</td><td className="p-2">North Indian</td><td className="p-2">Veg & Non-veg</td></tr>
                <tr className="border-t border-border"><td className="p-2">Kailash Parbat (MBS)</td><td className="p-2">~12 min</td><td className="p-2">Indian Chaat</td><td className="p-2">Pure Veg</td></tr>
                <tr className="border-t border-border"><td className="p-2">Komala Vilas (Little India)</td><td className="p-2">~15 min</td><td className="p-2">South Indian</td><td className="p-2">Pure Veg</td></tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section icon={Smartphone} title="SIM Cards & Connectivity">
          <ul className="space-y-1.5 list-disc pl-5">
            <li>Buy at <b>Changi Airport</b> on arrival — Singtel, StarHub, M1 counters open 24/7.</li>
            <li>7-Eleven & convenience stores across the city stock tourist SIMs.</li>
            <li>Tourist eSIMs (Airalo, Nomad) start at ~₹500 for 5 GB / 7 days.</li>
            <li>Free Wi-Fi at the Flyer terminal, Marina Square and Suntec City.</li>
          </ul>
        </Section>

        <Section icon={Car} title="Taxi Apps & Fares">
          <ul className="space-y-1.5 list-disc pl-5">
            <li><b>Grab</b> — most popular, English UI, cards accepted.</li>
            <li><b>Gojek</b> — good backup, often cheaper on short rides.</li>
            <li><b>ComfortDelGro</b> — official taxi app.</li>
            <li>Approx fares: Changi → Singapore Flyer ≈ SGD 25–32 · Orchard → Flyer ≈ SGD 12–16.</li>
          </ul>
        </Section>

        <Section icon={Shirt} title="What to Wear">
          <ul className="space-y-1.5 list-disc pl-5">
            <li>Capsules are <b>air-conditioned</b> — a light layer helps on evening rides.</li>
            <li>Smart casual works well; the waterfront walk outside is hot and humid.</li>
            <li>Comfortable shoes — expect 1–2 km of walking around Marina Bay.</li>
            <li>Avoid strong glare-reflecting whites if you want clean glass photos.</li>
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
            <li><b>Inside the capsule</b> at the top — shoot Marina Bay Sands side.</li>
            <li><b>Sunset rotation</b> — golden light over Gardens by the Bay.</li>
            <li><b>Flyer base at night</b> — the illuminated wheel from the promenade.</li>
            <li><b>Helix Bridge</b> — the Flyer framed against the skyline.</li>
          </ul>
        </Section>

        <Section icon={Landmark} title="Nearby Attractions">
          <ul className="grid grid-cols-2 gap-y-1.5 list-disc pl-5">
            <li>Gardens by the Bay</li>
            <li>Marina Bay Sands</li>
            <li>ArtScience Museum</li>
            <li>Merlion Park</li>
            <li>Helix Bridge</li>
            <li>Suntec City</li>
          </ul>
        </Section>

        <Section icon={Calculator} title="Budget Calculator (Family of 4)">
          <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
            <table className="w-full text-xs md:text-sm border border-border rounded-lg overflow-hidden min-w-[360px]">
              <thead className="bg-muted">
                <tr><th className="text-left p-2 font-semibold">Item</th><th className="text-right p-2 font-semibold">Approx (INR)</th></tr>
              </thead>
              <tbody>
                <tr className="border-t border-border"><td className="p-2">Flyer Tickets (2A + 2C)</td><td className="p-2 text-right">₹11,109</td></tr>
                <tr className="border-t border-border"><td className="p-2">Dinner at Marina Square</td><td className="p-2 text-right">₹3,200</td></tr>
                <tr className="border-t border-border"><td className="p-2">Taxi (hotel ↔ Marina Bay)</td><td className="p-2 text-right">₹2,000</td></tr>
                <tr className="border-t border-border"><td className="p-2">Souvenirs & snacks</td><td className="p-2 text-right">₹2,000</td></tr>
                <tr className="border-t border-border bg-primary/5 font-semibold"><td className="p-2">Total</td><td className="p-2 text-right">≈ ₹18,309</td></tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section icon={AlertTriangle} title="Common Mistakes Indians Make">
          <ul className="space-y-1.5 list-disc pl-5">
            <li>Booking a midday slot — harsh glare ruins photos. Sunset is far better.</li>
            <li>Walking in at peak hour without a pre-booked ticket and queuing 40+ minutes.</li>
            <li>Rushing off after the ride — the waterfront and Gardens by the Bay are minutes away.</li>
            <li>Assuming transfers are included with tickets-only — pick the transfer option if you need pickup.</li>
            <li>Carrying big luggage — bulky items are not allowed in the capsule.</li>
          </ul>
        </Section>

        <Section icon={Leaf} title="Vegetarian Food Guide">
          <ul className="space-y-1.5 list-disc pl-5">
            <li><b>On-site:</b> Cafés at the Flyer terminal have veg sandwiches & snacks.</li>
            <li><b>5 min walk:</b> Marina Square & Suntec City food courts with Indian veg counters.</li>
            <li><b>Budget:</b> Hawker meals from SGD 6–8.</li>
            <li><b>Jain food:</b> Kailash Parbat and Komala Vilas serve Jain on request.</li>
          </ul>
        </Section>

        <Section icon={CloudRain} title="Rain Tips">
          <ul className="space-y-1.5 list-disc pl-5">
            <li>The capsules are fully enclosed — light rain does not affect the ride.</li>
            <li>Operations may pause briefly in lightning; staff reschedule your slot.</li>
            <li>Sheltered link-ways connect Promenade MRT to the terminal.</li>
            <li>Carry a compact umbrella for the promenade walk.</li>
          </ul>
        </Section>

        <Section icon={Baby} title="Kids Guide">
          <ul className="space-y-1.5 list-disc pl-5">
            <li><b>Strollers:</b> Capsules are stroller and wheelchair accessible.</li>
            <li><b>Baby care:</b> Nursing and changing rooms at the Flyer terminal.</li>
            <li><b>Kids love:</b> The Time Capsule walkthrough before boarding.</li>
            <li><b>Under 3s:</b> Free entry — no ticket required.</li>
          </ul>
        </Section>
      </div>
    </CardContent>
  </Card>
);

const tripItems = [
  { title: "Gardens by the Bay", desc: "Flower Dome, Cloud Forest & Supertrees.", image: gardensImg, slug: "/singapore/gardens-by-the-bay-tickets-and-transfers/" },
  { title: "Universal Studios Singapore", desc: "Tickets + hotel transfers combo.", image: ussImg, slug: "/singapore/universal-studios-singapore-tickets-and-transfers/" },
  { title: "Singapore City Tour", desc: "Half-day guided tour with transfers.", image: cityTourImg, slug: "/singapore/singapore-city-tour/" },
  { title: "Night Safari", desc: "World's first nocturnal wildlife park.", image: nightSafariImg, slug: "/singapore/night-safari-singapore-tickets-and-transfers/" },
  { title: "Wings of Time", desc: "Sentosa's spectacular outdoor night show.", image: wingsOfTimeImg, slug: "/singapore/wings-of-time-show-sentosa-tickets/" },
  { title: "Sentosa Cable Car", desc: "Iconic ride over the harbour to Sentosa.", image: cableCarImg, slug: "/singapore/sentosa-cable-car-tickets-and-transfers/" },
  { title: "Singapore Zoo", desc: "Award-winning open-concept rainforest zoo.", image: singaporeZooImg, slug: "/singapore/singapore-zoo-tickets/" },
  { title: "Big Bus Hop-On Hop-Off", desc: "Explore the city at your own pace.", image: bigBusImg, slug: "/singapore/big-bus-hop-on-hop-off-singapore-city-tour/" },
];

const CompleteYourSingaporeTrip = () => (
  <section className="mt-12">
    <div className="flex items-end justify-between mb-4 md:mb-6">
      <div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">Complete Your Singapore Trip</h2>
        <p className="text-muted-foreground mt-1 text-sm md:text-base">
          Top Singapore experiences to pair with the Singapore Flyer
        </p>
      </div>
      <Link
        to="/singapore/things-to-do/"
        className="hidden sm:inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all"
      >
        View all <ArrowRight className="h-4 w-4" />
      </Link>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
      {tripItems.slice(0, 4).map((item) => (
        <Card key={item.title} className="group cursor-pointer hover:shadow-card-hover transition-all overflow-hidden">
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

const FinalCTA = () => (
  <section className="mt-12">
    <div className="relative overflow-hidden rounded-2xl border border-border">
      <SafeImage
        src={flyerHeroImg}
        alt="Singapore Flyer observation wheel at twilight"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-primary/50" />
      <div className="relative p-6 md:p-10 text-white">
        <h2 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">
          Ready to See Singapore from 165 Metres Up?
        </h2>
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
            href={`https://wa.me/917061710810?text=${encodeURIComponent(
              "Hi Yellodae, I want to book Singapore Flyer tickets."
            )}`}
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

const SingaporeFlyer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["singapore-flyer"];

  return (
    <>
      <Seo
        path="/singapore/singapore-flyer-tickets-and-transfers/"
        title="Singapore Flyer Tickets & Transfers | Skip-the-Line | Indian Support"
        description="Book Singapore Flyer tickets with optional hotel transfers — 165m observation wheel with 360° Marina Bay views. Instant confirmation, INR pricing, Indian WhatsApp support."
        type="product"
        image="https://yellodae.com/assets/singapore-flyer-twilight-1.jpg"
      />
      <TourBooking
        tourData={tourData}
        heroVariant="collage"
        hidePhotoGallery
        hideItinerary
        forceBlackText
        extraDescriptionBeforeHighlights={
          <div className="space-y-8">
            <MarketingIntro />
            <HighlightsAndTimings />
          </div>
        }
        extraContentAfterPolicies={<IndianTravelerCompanion />}
        extraContentBeforeSuggested={<CompleteYourSingaporeTrip />}
        extraContentBeforeGuides={<SingaporeTravelEssentials />}
        extraContentAfterTransfers={<FinalCTA />}
      />
    </>
  );
};

export default SingaporeFlyer;
