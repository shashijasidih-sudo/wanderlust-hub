import {
  Smartphone,
  Car,
  UtensilsCrossed,
  CloudSun,
  Wallet,
  AppWindow,
  Siren,
  Plane,
  Users,
  ClipboardCheck,
  Check,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Card = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  tint: string;
  body: React.ReactNode;
};

const Chip = ({ children, tone = "default" }: { children: React.ReactNode; tone?: "default" | "veg" | "jain" | "north" | "south" }) => {
  const tones: Record<string, string> = {
    default: "bg-slate-100 text-slate-700",
    veg: "bg-emerald-100 text-emerald-800",
    jain: "bg-amber-100 text-amber-800",
    north: "bg-rose-100 text-rose-800",
    south: "bg-sky-100 text-sky-800",
  };
  return <span className={cn("inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium", tones[tone])}>{children}</span>;
};

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-2 items-start text-sm text-slate-700">
    <Check className="w-4 h-4 mt-0.5 text-teal-600 shrink-0" />
    <span>{children}</span>
  </li>
);

const cards: Card[] = [
  {
    icon: Smartphone,
    title: "Stay Connected — SIM & Internet",
    tint: "from-sky-50 to-white",
    body: (
      <>
        <p className="text-sm text-slate-600 mb-3">Best tourist SIMs available right after immigration at Changi.</p>
        <div className="flex flex-wrap gap-2 mb-3">
          <Chip>Singtel</Chip><Chip>StarHub</Chip><Chip>M1</Chip><Chip tone="veg">eSIM supported</Chip>
        </div>
        <ul className="space-y-1.5">
          <Bullet>Buy at arrival hall counters (T1–T4)</Bullet>
          <Bullet>Free Changi Wi-Fi available airport-wide</Bullet>
          <Bullet>Download offline Google Maps before you fly</Bullet>
        </ul>
      </>
    ),
  },
  {
    icon: Car,
    title: "Airport Transport Guide",
    tint: "from-orange-50 to-white",
    body: (
      <>
        <div className="overflow-x-auto -mx-2 px-2">
          <table className="w-full text-xs md:text-sm">
            <thead className="text-slate-500">
              <tr className="text-left">
                <th className="py-1.5 pr-2 font-medium">Option</th>
                <th className="py-1.5 pr-2 font-medium">Best for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr><td className="py-1.5 pr-2 font-medium text-teal-700">Private Pickup</td><td className="py-1.5">Families, luggage, late nights</td></tr>
              <tr><td className="py-1.5 pr-2">Grab</td><td className="py-1.5">Solo daytime, surge at peaks</td></tr>
              <tr><td className="py-1.5 pr-2">Taxi</td><td className="py-1.5">Short queues, metered</td></tr>
              <tr><td className="py-1.5 pr-2">MRT</td><td className="py-1.5">Budget, minimal luggage</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mt-3">Pre-booked pickup = fixed INR price, meet & greet, no surge.</p>
      </>
    ),
  },
  {
    icon: UtensilsCrossed,
    title: "Indian Restaurants Near You",
    tint: "from-rose-50 to-white",
    body: (
      <>
        <div className="flex flex-wrap gap-1.5 mb-3">
          <Chip tone="veg">Vegetarian</Chip><Chip tone="jain">Jain Friendly</Chip>
          <Chip tone="north">North Indian</Chip><Chip tone="south">South Indian</Chip>
        </div>
        <ul className="space-y-1.5">
          <Bullet><b>Little India</b> — Komala Vilas, Ananda Bhavan (Veg/Jain)</Bullet>
          <Bullet><b>Orchard Road</b> — Shahi Maharani, Punjab Grill</Bullet>
          <Bullet><b>Marina Bay</b> — Rang Mahal, Punjab Grill</Bullet>
          <Bullet><b>Bugis</b> — Zaffron Kitchen, Anjappar</Bullet>
          <Bullet><b>Sentosa</b> — Tangerine, Malay/Indian counters</Bullet>
        </ul>
      </>
    ),
  },
  {
    icon: CloudSun,
    title: "Weather & What to Wear",
    tint: "from-amber-50 to-white",
    body: (
      <>
        <div className="grid grid-cols-3 gap-2 mb-3 text-center">
          <div className="rounded-lg bg-white/70 border border-amber-100 p-2"><div className="text-lg font-semibold text-amber-700">27–33°C</div><div className="text-[11px] text-slate-500">Temp</div></div>
          <div className="rounded-lg bg-white/70 border border-amber-100 p-2"><div className="text-lg font-semibold text-amber-700">80%+</div><div className="text-[11px] text-slate-500">Humidity</div></div>
          <div className="rounded-lg bg-white/70 border border-amber-100 p-2"><div className="text-lg font-semibold text-amber-700">Daily</div><div className="text-[11px] text-slate-500">Showers</div></div>
        </div>
        <ul className="space-y-1.5">
          <Bullet>Light cotton/linen clothing</Bullet>
          <Bullet>Comfortable walking shoes</Bullet>
          <Bullet>Foldable umbrella + sunscreen + cap</Bullet>
        </ul>
      </>
    ),
  },
  {
    icon: Wallet,
    title: "Money & Payments",
    tint: "from-emerald-50 to-white",
    body: (
      <>
        <p className="text-sm text-slate-600 mb-2">Currency: <b>Singapore Dollar (SGD)</b></p>
        <ul className="space-y-1.5">
          <Bullet>Cards accepted almost everywhere (Visa/Master)</Bullet>
          <Bullet>Carry ~SGD 100–150 cash for hawkers & tips</Bullet>
          <Bullet>UPI acceptance is limited — carry an international card</Bullet>
          <Bullet>Exchange at Mustafa Centre or The Arcade — best rates</Bullet>
          <Bullet>ATMs available at Changi & every MRT station</Bullet>
        </ul>
      </>
    ),
  },
  {
    icon: AppWindow,
    title: "Essential Apps",
    tint: "from-indigo-50 to-white",
    body: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {[
          ["Grab", "Cabs, food, payments"],
          ["Google Maps", "Offline navigation"],
          ["WhatsApp", "Contact driver & family"],
          ["MyICA", "Digital arrival card"],
          ["Citymapper", "MRT & bus routes"],
        ].map(([n, d]) => (
          <div key={n} className="rounded-lg border border-indigo-100 bg-white/70 p-2.5">
            <div className="text-sm font-semibold text-indigo-800">{n}</div>
            <div className="text-xs text-slate-600">{d}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Siren,
    title: "Emergency Information",
    tint: "from-red-50 to-white",
    body: (
      <div className="space-y-2 text-sm">
        <div className="flex justify-between rounded-md bg-red-100/60 px-3 py-2"><span>Police</span><b>999</b></div>
        <div className="flex justify-between rounded-md bg-red-100/60 px-3 py-2"><span>Ambulance / Fire</span><b>995</b></div>
        <div className="flex justify-between rounded-md bg-red-100/60 px-3 py-2"><span>Non-Emergency Ambulance</span><b>1777</b></div>
        <div className="rounded-md bg-white border border-red-100 px-3 py-2">
          <div className="font-semibold text-red-800">High Commission of India</div>
          <div className="text-xs text-slate-600">India House, 31 Grange Road · +65 6737 6777</div>
        </div>
        <div className="text-xs text-slate-500 flex items-center gap-1"><MapPin className="w-3 h-3" />Nearest hospitals: Raffles, Mount Elizabeth, SGH</div>
      </div>
    ),
  },
  {
    icon: Plane,
    title: "Changi Airport Facilities",
    tint: "from-cyan-50 to-white",
    body: (
      <div className="flex flex-wrap gap-1.5">
        {["Free Wi-Fi","Currency Exchange","ATMs","Luggage Storage","Baby Care","Prayer Rooms","Showers","Jewel Changi","Food Courts","Taxi Stand","MRT Station"].map(f => (
          <span key={f} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs bg-cyan-100 text-cyan-800">{f}</span>
        ))}
      </div>
    ),
  },
  {
    icon: Users,
    title: "Family & Senior Traveller Tips",
    tint: "from-purple-50 to-white",
    body: (
      <ul className="space-y-1.5">
        <Bullet>Request child seat at time of booking</Bullet>
        <Bullet>Keep medicines in cabin baggage with prescription</Bullet>
        <Bullet>Wheelchair assistance available at Changi (pre-book)</Bullet>
        <Bullet>Use 4-wheel spinner luggage — MRT/pavements are smooth</Bullet>
        <Bullet>Save hotel address offline in notes/WhatsApp</Bullet>
        <Bullet>Carry umbrella & light shawl for elderly parents (AC + rain)</Bullet>
      </ul>
    ),
  },
  {
    icon: ClipboardCheck,
    title: "Arrival Checklist",
    tint: "from-teal-50 to-white",
    body: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
        {["Passport","Immigration completed","SIM card active","SGD cash / card","Hotel address","Driver contact saved","WhatsApp working","Attraction tickets","Travel insurance"].map(i => (
          <label key={i} className="flex items-center gap-2 text-sm text-slate-700 rounded-md px-2 py-1.5 hover:bg-teal-50/60">
            <span className="w-4 h-4 rounded border-2 border-teal-500 flex items-center justify-center bg-white"><Check className="w-3 h-3 text-teal-600" /></span>
            {i}
          </label>
        ))}
      </div>
    ),
  },
];

const IndianTravellerCompanion = () => {
  return (
    <section className="my-10 md:my-14">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold mb-3">
          🇮🇳 Indian Traveller Companion
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Everything you need after landing in Singapore</h2>
        <p className="text-slate-600 text-sm md:text-base">
          From airport pickup and transport to SIM cards, Indian restaurants, payments and travel tips — all in one place.
        </p>
        <p className="mt-2 text-xs md:text-sm text-slate-500 italic">
          We've created this guide so you don't need to search multiple websites after landing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {cards.map(({ icon: Icon, title, tint, body }) => (
          <article
            key={title}
            className={cn(
              "group relative rounded-2xl border border-slate-200/70 bg-gradient-to-br p-5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300",
              tint,
            )}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center">
                <Icon className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-slate-900 leading-tight">{title}</h3>
            </div>
            <div className="text-slate-700">{body}</div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default IndianTravellerCompanion;
