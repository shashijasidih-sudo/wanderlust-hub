import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Utensils, Plug, Languages, IndianRupee, Plane, ShieldCheck,
  Star, MapPin, Clock, Users, Check, Sparkles, MessageCircle, X,
} from "lucide-react";
import DontMissThese from "@/components/activity-detail/DontMissThese";

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

const IndianTravelerCompanion = () => (
  <Card className="text-black">
    <CardHeader>
      <CardTitle className="text-lg md:text-2xl text-black">Indian Traveler Companion</CardTitle>
    </CardHeader>
    <CardContent className="space-y-3 text-sm p-3 md:p-6">
      <p className="text-black">
        A quick handbook for Indian families visiting Universal Studios Singapore — from vegetarian
        food inside the park to currency, connectivity and prayer facilities on Sentosa.
      </p>
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
    </CardContent>
  </Card>
);

const UniversalStudiosWeekday = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["universal-studios-weekday"];

  return (
    <TourBooking
      tourData={tourData}
      heroVariant="collage"
      hidePhotoGallery
      hideItinerary
      forceBlackText
      extraDescriptionBeforeHighlights={<RidesAndTimings />}
      extraContentAfterPolicies={<IndianTravelerCompanion />}
      extraContentBeforeSuggested={<DontMissThese />}
    />
  );
};

export default UniversalStudiosWeekday;
