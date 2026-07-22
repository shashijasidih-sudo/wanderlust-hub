import { useEffect } from "react";
import { Link } from "react-router-dom";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import Seo from "@/components/seo/Seo";
import { SentosaWingsTimeSEO } from "@/components/activity-detail/SingaporeActivitySEO";
import { sentosaWingsTimeFaqs } from "@/data/singaporeActivityFaqs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Utensils, Plug, Languages, IndianRupee, Plane, ShieldCheck,
  Star, MapPin, Clock, Users, Check, Sparkles, MessageCircle, X,
  Smartphone, Car, Shirt, AppWindow, Landmark, Calculator, AlertTriangle,
  Leaf, CloudRain, Baby, ArrowRight,
} from "lucide-react";

import wt1 from "@/assets/singapore-doc/wings-time-1.jpg";
import wt2 from "@/assets/singapore-doc/wings-time-2.jpg";
import wt3 from "@/assets/singapore-doc/wings-time-3.jpg";
import wingsHero from "@/assets/singapore-wings-time.jpg";
import ussImg from "@/assets/singapore-universal-studios.jpg";
import gardensByTheBayImg from "@/assets/singapore-gardens-bay-night-1.jpg";
import nightSafariImg from "@/assets/singapore-night-safari.jpg";
import cityTourImg from "@/assets/singapore-city-tour.jpg";
import cableCarImg from "@/assets/singapore-cable-car.jpg";
import seaAquariumImg from "@/assets/blog-sea-life-aquarium.jpg";
import singaporeZooImg from "@/assets/singapore-zoo.jpg";
import birdParadiseImg from "@/assets/singapore-river-safari.jpg";

const HeroMeta = () => (
  <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-black">
    <span className="inline-flex items-center gap-1 font-semibold">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
      ))}
      <span className="ml-1">4.9 (150+ Indian Travelers)</span>
    </span>
    <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-primary" /> Siloso Beach, Sentosa</span>
    <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-primary" /> 20–25 Min Show</span>
    <span className="inline-flex items-center gap-1"><Users className="h-3.5 w-3.5 text-primary" /> Great for Families & Couples</span>
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
          "Hi Yellodae, I have a question about Wings of Time Sentosa tickets & transfers."
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

const SeatingAndTimings = () => (
  <div className="space-y-6 min-w-0">
    <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
      <table className="w-full text-[11px] md:text-sm border border-border rounded-lg overflow-hidden min-w-[520px] md:min-w-0">
        <thead className="bg-muted">
          <tr>
            <th className="text-left p-2 md:p-3 font-semibold">Seat Category</th>
            <th className="text-left p-2 md:p-3 font-semibold">View</th>
            <th className="text-left p-2 md:p-3 font-semibold">Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-border">
            <td className="p-2 md:p-3">🎟 Standard Seat</td>
            <td className="p-2 md:p-3">Good overall view of the beach stage</td>
            <td className="p-2 md:p-3">Value seekers & first-timers</td>
          </tr>
          <tr className="border-t border-border">
            <td className="p-2 md:p-3">⭐ Premium Seat</td>
            <td className="p-2 md:p-3">Closer to stage, centred angle</td>
            <td className="p-2 md:p-3">Photography & couples</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div>
      <h3 className="text-base md:text-lg font-semibold mb-3">Show Timings & Duration</h3>
      <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
        <table className="w-full text-[11px] md:text-sm border border-border rounded-lg overflow-hidden min-w-[520px] md:min-w-0">
          <thead className="bg-muted">
            <tr>
              <th className="text-left p-2 md:p-3 font-semibold">Slot</th>
              <th className="text-left p-2 md:p-3 font-semibold">Timing</th>
              <th className="text-left p-2 md:p-3 font-semibold">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="p-2 md:p-3">First Show</td>
              <td className="p-2 md:p-3">7:40 PM</td>
              <td className="p-2 md:p-3">20–25 mins · less crowded</td>
            </tr>
            <tr className="border-t border-border">
              <td className="p-2 md:p-3">Second Show</td>
              <td className="p-2 md:p-3">8:40 PM</td>
              <td className="p-2 md:p-3">20–25 mins · better night ambience</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

/* ---------- Indian Traveller Companion ---------- */

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
        A complete handbook for Indian families visiting Wings of Time at Sentosa — from vegetarian
        food and SIM cards to getting to Siloso Beach, budget planning and tips to enjoy the show.
      </p>

      <div className="grid sm:grid-cols-2 gap-3">
        <div className="flex gap-3">
          <Utensils className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-black">Indian & vegetarian food</p>
            <p className="text-black">Grab a quick dinner at Malaysian Food Street or Food Republic before the show. Pure-veg and Jain options are available at Komala Vilas & Ananda Bhavan in Little India.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <IndianRupee className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-black">Currency & payments</p>
            <p className="text-black">Pay Yellodae in INR upfront — no need to carry large SGD amounts for the show ticket itself. Cards & forex cards are accepted at nearby cafés.</p>
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
            <p className="text-black">English is spoken everywhere at Sentosa. All signage, ticket counters and staff communicate in English.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-black">Prayer & wudu facilities</p>
            <p className="text-black">Resorts World Sentosa has a Muslim prayer facility with wudu at Basement 1 — a 10-minute walk from Siloso Beach.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Plane className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-black">Best time from India</p>
            <p className="text-black">Feb–Apr and Sep–Oct offer the clearest weather. The 8:40 PM slot gives a darker sky and richer visuals; the 7:40 PM slot is less crowded.</p>
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
                <tr className="border-t border-border"><td className="p-2">Komala Vilas</td><td className="p-2">~25 min</td><td className="p-2">South Indian</td><td className="p-2">Pure Veg</td></tr>
                <tr className="border-t border-border"><td className="p-2">Ananda Bhavan</td><td className="p-2">~25 min</td><td className="p-2">South Indian</td><td className="p-2">Pure Veg</td></tr>
                <tr className="border-t border-border"><td className="p-2">Punjab Grill (MBS)</td><td className="p-2">~15 min</td><td className="p-2">North Indian</td><td className="p-2">Veg & Non-veg</td></tr>
                <tr className="border-t border-border"><td className="p-2">Kailash Parbat</td><td className="p-2">~25 min</td><td className="p-2">Indian Chaat</td><td className="p-2">Pure Veg</td></tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section icon={Smartphone} title="SIM Cards & Connectivity">
          <ul className="space-y-1.5 list-disc pl-5">
            <li>Buy at <b>Changi Airport</b> on arrival — Singtel, StarHub, M1 counters open 24/7.</li>
            <li>7-Eleven & convenience stores across the city stock tourist SIMs.</li>
            <li>Tourist eSIMs (Airalo, Nomad) start at ~₹500 for 5 GB / 7 days.</li>
            <li>Free Wi-Fi available across Resorts World Sentosa & Siloso Beach.</li>
          </ul>
        </Section>

        <Section icon={Car} title="How to Reach Siloso Beach">
          <ul className="space-y-1.5 list-disc pl-5">
            <li><b>Sentosa Express Monorail</b> — fastest & cheapest from VivoCity, alight at Beach Station.</li>
            <li><b>Cable Car (Mount Faber line)</b> — most scenic ride into Sentosa.</li>
            <li><b>Grab / Taxi</b> — easiest for families; drop directly at Beach Plaza.</li>
            <li>Approx fares: Orchard → Sentosa ≈ SGD 20–25 · Changi → Sentosa ≈ SGD 30–40.</li>
          </ul>
        </Section>

        <Section icon={Shirt} title="What to Wear">
          <ul className="space-y-1.5 list-disc pl-5">
            <li>Singapore is <b>hot & humid</b> — wear breathable cotton clothes.</li>
            <li>Carry a lightweight <b>scarf or jacket</b> — the beach can get breezy at night.</li>
            <li>Comfortable <b>walking shoes</b> — expect a 5-minute walk from Beach Station.</li>
            <li>A small <b>umbrella / poncho</b> in case of a sudden shower.</li>
          </ul>
        </Section>

        <Section icon={AppWindow} title="Must-Have Apps">
          <div className="flex flex-wrap gap-2">
            {["Grab", "Google Maps", "MySentosa", "MyICA", "PayNow", "WhatsApp", "Google Translate"].map((a) => (
              <span key={a} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-black text-xs font-medium">
                <Check className="h-3 w-3 text-green-600" /> {a}
              </span>
            ))}
          </div>
        </Section>

        <Section icon={Landmark} title="Pair with Nearby Sentosa Attractions">
          <ul className="grid grid-cols-2 gap-y-1.5 list-disc pl-5">
            <li>Sentosa Cable Car</li>
            <li>SkyHelix Sentosa</li>
            <li>Sentosa 4D Adventureland</li>
            <li>S.E.A. Aquarium</li>
            <li>Universal Studios</li>
            <li>Madame Tussauds</li>
          </ul>
        </Section>

        <Section icon={Calculator} title="Budget Calculator (Family of 4)">
          <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
            <table className="w-full text-xs md:text-sm border border-border rounded-lg overflow-hidden min-w-[360px]">
              <thead className="bg-muted">
                <tr><th className="text-left p-2 font-semibold">Item</th><th className="text-right p-2 font-semibold">Approx (INR)</th></tr>
              </thead>
              <tbody>
                <tr className="border-t border-border"><td className="p-2">Wings of Time Standard (2A + 2C)</td><td className="p-2 text-right">₹5,600</td></tr>
                <tr className="border-t border-border"><td className="p-2">Dinner near Sentosa</td><td className="p-2 text-right">₹3,500</td></tr>
                <tr className="border-t border-border"><td className="p-2">Sentosa Express / entry</td><td className="p-2 text-right">₹800</td></tr>
                <tr className="border-t border-border"><td className="p-2">Grab (hotel ↔ Sentosa)</td><td className="p-2 text-right">₹2,500</td></tr>
                <tr className="border-t border-border bg-primary/5 font-semibold"><td className="p-2">Total</td><td className="p-2 text-right">≈ ₹12,400</td></tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section icon={AlertTriangle} title="Common Mistakes Indians Make">
          <ul className="space-y-1.5 list-disc pl-5">
            <li>Arriving late — you may miss the opening sequence.</li>
            <li>Booking Standard seats far from centre — go Premium for photography.</li>
            <li>Not checking weather — heavy rain can reschedule shows.</li>
            <li>Skipping dinner beforehand — no full-service dining at the amphitheatre.</li>
            <li>Forgetting phone/power bank — the finale is very photogenic.</li>
          </ul>
        </Section>

        <Section icon={Leaf} title="Vegetarian Food Guide">
          <ul className="space-y-1.5 list-disc pl-5">
            <li><b>At Sentosa:</b> Malaysian Food Street, Food Republic (VivoCity), FoodPlay at RWS.</li>
            <li><b>Budget:</b> Kopitiam meals from SGD 6.</li>
            <li><b>Jain food:</b> Komala Vilas & Ananda Bhavan (Little India) on request.</li>
            <li><b>Halal:</b> Many outlets at RWS are halal-certified — look for the green logo.</li>
          </ul>
        </Section>

        <Section icon={CloudRain} title="Rain Tips">
          <ul className="space-y-1.5 list-disc pl-5">
            <li>Wings of Time is an open-air show — carry a poncho.</li>
            <li>In case of heavy rain, timings may be adjusted or refunded.</li>
            <li>Rain usually clears in 30–45 mins — grab a coffee at Beach Plaza.</li>
            <li>Check the operator forecast on show day.</li>
          </ul>
        </Section>

        <Section icon={Baby} title="Kids Guide">
          <ul className="space-y-1.5 list-disc pl-5">
            <li><b>Age:</b> Suitable for all ages; under 4 can sit on parent's lap for free.</li>
            <li><b>Sound:</b> Fireworks are loud — carry earmuffs for infants.</li>
            <li><b>Best seat:</b> Central Premium row for the clearest projection view.</li>
            <li><b>Timing:</b> The 7:40 PM slot works better for young kids' bedtime.</li>
          </ul>
        </Section>
      </div>
    </CardContent>
  </Card>
);

/* ---------- Complete Your Singapore Trip ---------- */

const tripItems = [
  { title: "Universal Studios Singapore", desc: "Southeast Asia's only Universal Studios.", image: ussImg, slug: "/singapore/universal-studios-singapore-tickets-and-transfers/" },
  { title: "Gardens by the Bay", desc: "Cloud Forest, Flower Dome & Supertree Grove.", image: gardensByTheBayImg, slug: "/singapore/gardens-by-the-bay-tickets-and-transfers/" },
  { title: "Night Safari", desc: "World's first nocturnal wildlife park.", image: nightSafariImg, slug: "/singapore/night-safari-singapore-tickets-and-transfers/" },
  { title: "Sentosa Cable Car", desc: "Iconic ride over the harbour to Sentosa.", image: cableCarImg, slug: "/singapore/sentosa-cable-car-tickets-and-transfers/" },
  { title: "Singapore City Tour", desc: "Merlion, Chinatown, Little India & more.", image: cityTourImg, slug: "/singapore/singapore-city-tour/" },
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
          Top Singapore experiences to pair with the Wings of Time show
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
        src={wingsHero}
        alt="Wings of Time Sentosa"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-primary/50" />
      <div className="relative p-6 md:p-10 text-white">
        <h2 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">
          Ready for a Magical Night at Siloso Beach?
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
              "Hi Yellodae, I want to book Wings of Time Sentosa tickets."
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

const SentosaWingsTime = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const base = toursData["sentosa-wings-time"];
  const tourData = {
    ...base,
    heroImages: [
      { src: wt1, title: base.title, subtitle: "Award-winning night show at Siloso Beach" },
      { src: wt2, title: base.title, subtitle: "Lasers, water screens & projections" },
      { src: wt3, title: base.title, subtitle: "Spectacular fireworks finale" },
      ...base.heroImages,
    ],
    galleryImages: [
      { src: wt1, alt: "Wings of Time stage with lasers and orange phoenix" },
      { src: wt2, alt: "Wings of Time water and light show on the ocean" },
      { src: wt3, alt: "Wings of Time fireworks display over water" },
      ...base.galleryImages,
    ],
    faqs: sentosaWingsTimeFaqs,
  };

  return (
    <>
      <Seo
        path="/singapore/wings-of-time-show-sentosa-tickets/"
        title="Wings of Time Sentosa Tickets with Hotel Transfers | Instant Confirmation"
        description="Book Wings of Time Sentosa tickets with hotel transfers. Standard & Premium seating, instant confirmation, INR pricing, Indian WhatsApp support and easy cancellation."
        type="product"
        image="https://yellodae.com/assets/singapore-wings-time.jpg"
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
            <SeatingAndTimings />
          </div>
        }
        extraContentBeforeReviews={<SentosaWingsTimeSEO />}
        extraContentAfterPolicies={<IndianTravelerCompanion />}
        extraContentBeforeSuggested={<CompleteYourSingaporeTrip />}
        extraContentAfterTransfers={<FinalCTA />}
      />
    </>
  );
};

export default SentosaWingsTime;
