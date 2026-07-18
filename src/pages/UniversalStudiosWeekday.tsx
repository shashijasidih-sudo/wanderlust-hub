import { useEffect } from "react";
import { Link } from "react-router-dom";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import Seo from "@/components/seo/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Utensils, Plug, Languages, IndianRupee, Plane, ShieldCheck,
  Star, MapPin, Clock, Users, Check, Sparkles, MessageCircle, X,
  Smartphone, Car, Shirt, AppWindow, Landmark, Calculator, AlertTriangle,
  Leaf, CloudRain, Baby, ArrowRight,
} from "lucide-react";

import gardensByTheBayImg from "@/assets/singapore-gardens-bay-night-1.jpg";
import nightSafariImg from "@/assets/singapore-night-safari.jpg";
import wingsOfTimeImg from "@/assets/singapore-wings-time.jpg";
import airportTransferImg from "@/assets/singapore-city-tour.jpg";
import cableCarImg from "@/assets/singapore-cable-car.jpg";
import seaAquariumImg from "@/assets/blog-sea-life-aquarium.jpg";
import singaporeZooImg from "@/assets/singapore-zoo.jpg";
import birdParadiseImg from "@/assets/singapore-river-safari.jpg";
import ussHeroImg from "@/assets/singapore-universal-studios.jpg";

const rides = [
  { emoji: "🚀", name: "Battlestar Galactica: CYLON", thrill: "⭐⭐⭐⭐⭐", type: "Inverted Roller Coaster", best: "Thrill Seekers" },
  { emoji: "🚀", name: "Battlestar Galactica: HUMAN", thrill: "⭐⭐⭐⭐☆", type: "Seated Roller Coaster", best: "Teens & Adults" },
  { emoji: "🤖", name: "Transformers: The Ride 3D", thrill: "⭐⭐⭐⭐⭐", type: "3D Motion Simulator", best: "Everyone" },
  { emoji: "🏺", name: "Revenge of the Mummy", thrill: "⭐⭐⭐⭐⭐", type: "Indoor Roller Coaster", best: "Adventure Lovers" },
  { emoji: "🦖", name: "Jurassic Park Rapids Adventure", thrill: "⭐⭐⭐⭐☆", type: "Water Rapids Ride", best: "Families & Friends" },
];

const HeroMeta = () => (
  <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-black">
    <span className="inline-flex items-center gap-1 font-semibold">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
      ))}
      <span className="ml-1">4.9 (150+ Indian Travelers)</span>
    </span>
    <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-primary" /> Resorts World Sentosa</span>
    <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-primary" /> Full Day Experience</span>
    <span className="inline-flex items-center gap-1"><Users className="h-3.5 w-3.5 text-primary" /> Best for Families & Kids</span>
  </div>
);

const ValueBadges = () => {
  const items = [
    "Instant Confirmation",
    "Easy Cancellation & Refund",
    "Mobile Tickets",
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
    "INR Pricing",
    "Instant WhatsApp Help",
    "Handpicked Transfers",
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
          "Hi Yellodae, I have a question about Universal Studios Singapore tickets & transfers."
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

const RidesAndTimings = () => (
  <div className="space-y-6 min-w-0">
    <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
      <table className="w-full text-[11px] md:text-sm border border-border rounded-lg overflow-hidden min-w-[520px] md:min-w-0">
        <thead className="bg-muted">
          <tr>
            <th className="text-left p-2 md:p-3 font-semibold">Ride</th>
            <th className="text-left p-2 md:p-3 font-semibold">Thrill</th>
            <th className="text-left p-2 md:p-3 font-semibold">Type</th>
            <th className="text-left p-2 md:p-3 font-semibold">Best For</th>
          </tr>
        </thead>
        <tbody>
          {rides.map((r) => (
            <tr key={r.name} className="border-t border-border">
              <td className="p-2 md:p-3 whitespace-normal">{r.emoji} {r.name}</td>
              <td className="p-2 md:p-3 whitespace-normal">{r.thrill}</td>
              <td className="p-2 md:p-3 whitespace-normal">{r.type}</td>
              <td className="p-2 md:p-3 whitespace-normal">{r.best}</td>
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
              <th className="text-left p-2 md:p-3 font-semibold">Transfers</th>
              <th className="text-left p-2 md:p-3 font-semibold">Timings</th>
              <th className="text-left p-2 md:p-3 font-semibold">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="p-2 md:p-3 whitespace-normal">Sharing Transfers</td>
              <td className="p-2 md:p-3 whitespace-normal">Pickup 08:30 am · Drop 7:00 pm</td>
              <td className="p-2 md:p-3 whitespace-normal">11 hrs</td>
            </tr>
            <tr className="border-t border-border">
              <td className="p-2 md:p-3 whitespace-normal">Without Transfers</td>
              <td className="p-2 md:p-3 whitespace-normal">10:00 am – 8:00 pm</td>
              <td className="p-2 md:p-3 whitespace-normal">04 hrs</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

/* ---------- Expanded Indian Traveler Companion ---------- */

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
        A complete handbook for Indian families visiting Universal Studios Singapore — from vegetarian food
        and SIM cards to taxi apps, budget planning, kids tips and common mistakes to avoid.
      </p>

      {/* Original quick facts */}
      <div className="grid sm:grid-cols-2 gap-3">
        <div className="flex gap-3">
          <Utensils className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-black">Indian & vegetarian food</p>
            <p className="text-black">Jain, Hindu and pure-veg options available at Malaysian Food Street, KT's Grill and Loui's NY Pizza Parlor. Halal-certified outlets are clearly marked.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <IndianRupee className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-black">Currency & payments</p>
            <p className="text-black">Park uses SGD. Indian debit/credit cards, forex cards and international UPI (via PayNow QR) work at most counters. Carry small SGD notes for lockers.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Plug className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-black">Plug & power</p>
            <p className="text-black">Singapore uses Type G (3-pin UK style) sockets, 230V. Carry a universal adapter — Indian Type D plugs will not fit.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Languages className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-black">Language</p>
            <p className="text-black">English is spoken everywhere. Most ride operators understand basic Hindi phrases. Signage is in English throughout the park.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-black">Prayer & wudu facilities</p>
            <p className="text-black">A prayer room is available near Sci-Fi City. Resorts World Sentosa has a larger Muslim prayer facility with wudu at Basement 1.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Plane className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-black">Best time from India</p>
            <p className="text-black">Weekdays are less crowded and cheaper. Avoid Indian school-holiday weeks (May-June, Oct, Dec) if you want shorter queues.</p>
          </div>
        </div>
      </div>

      {/* Expanded sections */}
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
                <tr className="border-t border-border"><td className="p-2">Komala Vilas</td><td className="p-2">~20 min</td><td className="p-2">South Indian</td><td className="p-2">Pure Veg</td></tr>
                <tr className="border-t border-border"><td className="p-2">Ananda Bhavan</td><td className="p-2">~20 min</td><td className="p-2">South Indian</td><td className="p-2">Pure Veg</td></tr>
                <tr className="border-t border-border"><td className="p-2">Punjab Grill (MBS)</td><td className="p-2">~15 min</td><td className="p-2">North Indian</td><td className="p-2">Veg & Non-veg</td></tr>
                <tr className="border-t border-border"><td className="p-2">Kailash Parbat</td><td className="p-2">~20 min</td><td className="p-2">Indian Chaat</td><td className="p-2">Pure Veg</td></tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section icon={Smartphone} title="SIM Cards & Connectivity">
          <ul className="space-y-1.5 list-disc pl-5">
            <li>Buy at <b>Changi Airport</b> on arrival — Singtel, StarHub, M1 counters open 24/7.</li>
            <li>7-Eleven & convenience stores across the city stock tourist SIMs.</li>
            <li>Tourist eSIMs (Airalo, Nomad) start at ~₹500 for 5 GB / 7 days.</li>
            <li>Free Wi-Fi available across Resorts World Sentosa & USS.</li>
          </ul>
        </Section>

        <Section icon={Car} title="Taxi Apps & Fares">
          <ul className="space-y-1.5 list-disc pl-5">
            <li><b>Grab</b> — most popular, works like Uber, English UI, cards accepted.</li>
            <li><b>Gojek</b> — good backup, often cheaper on short rides.</li>
            <li><b>ComfortDelGro</b> — official taxi app, reliable at airport.</li>
            <li>Approx fares: Changi → Sentosa ≈ SGD 30–40 · Orchard → USS ≈ SGD 20–25.</li>
          </ul>
        </Section>

        <Section icon={Shirt} title="What to Wear">
          <ul className="space-y-1.5 list-disc pl-5">
            <li>Singapore is <b>hot & humid</b> year-round — wear dry-fit / cotton clothes.</li>
            <li>Carry a lightweight <b>poncho</b> — sudden rain is common.</li>
            <li>Comfortable <b>walking shoes</b> — you'll walk 8–12 km inside the park.</li>
            <li>Cap, sunglasses & sunscreen (SPF 50+) are essential.</li>
          </ul>
        </Section>

        <Section icon={AppWindow} title="Must-Have Apps">
          <div className="flex flex-wrap gap-2">
            {["Grab", "Google Maps", "Klook", "MyICA", "PayNow", "WhatsApp", "Google Translate"].map((a) => (
              <span key={a} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-black text-xs font-medium">
                <Check className="h-3 w-3 text-green-600" /> {a}
              </span>
            ))}
          </div>
        </Section>

        <Section icon={Landmark} title="Nearby Attractions at Sentosa">
          <ul className="grid grid-cols-2 gap-y-1.5 list-disc pl-5">
            <li>S.E.A. Aquarium</li>
            <li>Adventure Cove</li>
            <li>Wings of Time</li>
            <li>Sentosa Cable Car</li>
            <li>Madame Tussauds</li>
            <li>SkyHelix Sentosa</li>
          </ul>
        </Section>

        <Section icon={Calculator} title="Budget Calculator (Family of 4)">
          <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
            <table className="w-full text-xs md:text-sm border border-border rounded-lg overflow-hidden min-w-[360px]">
              <thead className="bg-muted">
                <tr><th className="text-left p-2 font-semibold">Item</th><th className="text-right p-2 font-semibold">Approx (INR)</th></tr>
              </thead>
              <tbody>
                <tr className="border-t border-border"><td className="p-2">USS Tickets (2A + 2C)</td><td className="p-2 text-right">₹23,500</td></tr>
                <tr className="border-t border-border"><td className="p-2">Food inside park</td><td className="p-2 text-right">₹5,000</td></tr>
                <tr className="border-t border-border"><td className="p-2">Locker</td><td className="p-2 text-right">₹800</td></tr>
                <tr className="border-t border-border"><td className="p-2">Taxi (hotel ↔ Sentosa)</td><td className="p-2 text-right">₹3,000</td></tr>
                <tr className="border-t border-border"><td className="p-2">Souvenirs</td><td className="p-2 text-right">₹4,000</td></tr>
                <tr className="border-t border-border bg-primary/5 font-semibold"><td className="p-2">Total</td><td className="p-2 text-right">≈ ₹36,000</td></tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section icon={AlertTriangle} title="Common Mistakes Indians Make">
          <ul className="space-y-1.5 list-disc pl-5">
            <li>Arriving late — you lose 2–3 rides in the morning window.</li>
            <li>Not carrying a poncho — water rides & tropical showers ruin phones.</li>
            <li>Skipping sunscreen — Singapore sun is intense.</li>
            <li>Forgetting a power bank — long queues drain phones fast.</li>
            <li>Ignoring the Express Pass on peak days.</li>
            <li>No refillable water bottle — free water stations are everywhere.</li>
          </ul>
        </Section>

        <Section icon={Leaf} title="Vegetarian Food Guide">
          <ul className="space-y-1.5 list-disc pl-5">
            <li><b>Inside USS:</b> Loui's NY Pizza Parlor, Mel's Drive-In (veg burgers), KT's Grill (paneer / veg wraps).</li>
            <li><b>Outside USS:</b> Malaysian Food Street & FoodPlay food court at RWS.</li>
            <li><b>Budget:</b> Kopitiam & Food Republic — meals from SGD 6.</li>
            <li><b>Jain food:</b> Komala Vilas & Ananda Bhavan (Little India) serve Jain on request.</li>
            <li><b>Halal:</b> Most outlets inside USS are halal-certified — look for the green logo.</li>
          </ul>
        </Section>

        <Section icon={CloudRain} title="Rain Tips">
          <ul className="space-y-1.5 list-disc pl-5">
            <li>Carry a poncho or buy one at the park (SGD 5).</li>
            <li>Switch to <b>indoor rides</b> — Transformers, Revenge of the Mummy, Shrek 4D.</li>
            <li>Catch a <b>live show</b> during rain — Sesame Street, WaterWorld shelter.</li>
            <li>Rain usually clears in 30–45 mins — plan a food break.</li>
          </ul>
        </Section>

        <Section icon={Baby} title="Kids Guide">
          <ul className="space-y-1.5 list-disc pl-5">
            <li><b>Strollers:</b> Rent inside USS (single SGD 15 / double SGD 25).</li>
            <li><b>Baby care room:</b> Near Hollywood entrance & Far Far Away — feeding, changing, hot water.</li>
            <li><b>Height restrictions:</b> 92cm+ for most family rides; 125cm+ for Transformers & Mummy; 140cm+ for Battlestar Galactica.</li>
            <li><b>Best rides for kids:</b> Minion Land, Sesame Street Spaghetti Chase, Enchanted Airways, Puss in Boots Adventure.</li>
          </ul>
        </Section>
      </div>
    </CardContent>
  </Card>
);

/* ---------- Complete Your Singapore Trip ---------- */

const tripItems = [
  { title: "Gardens by the Bay", desc: "Cloud Forest, Flower Dome & Supertree Grove.", image: gardensByTheBayImg, slug: "/singapore/gardens-by-the-bay-tickets-and-transfers/" },
  { title: "Night Safari", desc: "World's first nocturnal wildlife park.", image: nightSafariImg, slug: "/singapore/night-safari-singapore-tickets-and-transfers/" },
  { title: "Airport Transfer", desc: "Reliable Changi pickup & drop-off.", image: airportTransferImg, slug: "/singapore/things-to-do/" },
  { title: "Wings of Time", desc: "Sentosa's spectacular outdoor night show.", image: wingsOfTimeImg, slug: "/singapore/wings-of-time-show-sentosa-tickets/" },
  { title: "Sentosa Cable Car", desc: "Iconic ride over the harbour to Sentosa.", image: cableCarImg, slug: "/singapore/sentosa-cable-car-tickets-and-transfers/" },
  { title: "S.E.A. Aquarium", desc: "One of the world's largest aquariums.", image: seaAquariumImg, slug: "/singapore/things-to-do/" },
  { title: "Singapore Zoo", desc: "Award-winning open-concept rainforest zoo.", image: singaporeZooImg, slug: "/singapore/singapore-zoo-tickets/" },
  { title: "Bird Paradise", desc: "Asia's largest bird park at Mandai.", image: birdParadiseImg, slug: "/singapore/things-to-do/" },
];

const CompleteYourSingaporeTrip = () => (
  <section className="mt-12">
    <div className="flex items-end justify-between mb-4 md:mb-6">
      <div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">Complete Your Singapore Trip</h2>
        <p className="text-muted-foreground mt-1 text-sm md:text-base">
          Top Singapore experiences to pair with your Universal Studios visit
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
      {tripItems.map((item) => (
        <Card key={item.title} className="group cursor-pointer hover:shadow-card-hover transition-all overflow-hidden">
          <Link to={item.slug}>
            <div className="aspect-[16/11] overflow-hidden">
              <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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

/* ---------- Final CTA ---------- */

const FinalCTA = () => (
  <section className="mt-12">
    <div className="relative overflow-hidden rounded-2xl border border-border">
      <img
        src={ussHeroImg}
        alt="Universal Studios Singapore"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-primary/50" />
      <div className="relative p-6 md:p-10 text-white">
        <h2 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">
          Ready for an Unforgettable Day at Universal Studios?
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
              "Hi Yellodae, I want to book Universal Studios Singapore tickets."
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

const UniversalStudiosWeekday = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["universal-studios-weekday"];

  return (
    <>
      <Seo
        path="/singapore/universal-studios-singapore-tickets-and-transfers/"
        title="Universal Studios Singapore Tickets with Hotel Transfers | Instant Confirmation"
        description="Book Universal Studios Singapore tickets with hotel transfers. Instant confirmation, INR pricing, Indian WhatsApp support, and easy cancellation. Trusted by 5,000+ Indian travellers."
        type="product"
        image="https://yellodae.com/assets/singapore-universal-studios.jpg"
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
            <RidesAndTimings />
          </div>
        }
        extraContentAfterPolicies={<IndianTravelerCompanion />}
        extraContentBeforeSuggested={<CompleteYourSingaporeTrip />}
        extraContentAfterTransfers={<FinalCTA />}
      />
    </>
  );
};

export default UniversalStudiosWeekday;
