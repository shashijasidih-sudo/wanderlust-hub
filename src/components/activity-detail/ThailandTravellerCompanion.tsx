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
  ShoppingBag,
  Soup,
  ShieldAlert,
  Landmark,
  Sailboat,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Card = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  tint: string;
  body: React.ReactNode;
};

const Chip = ({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "veg" | "jain" | "north" | "south";
}) => {
  const tones: Record<string, string> = {
    default: "bg-slate-100 text-slate-700",
    veg: "bg-emerald-100 text-emerald-800",
    jain: "bg-amber-100 text-amber-800",
    north: "bg-rose-100 text-rose-800",
    south: "bg-sky-100 text-sky-800",
  };
  return (
    <span className={cn("inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium", tones[tone])}>
      {children}
    </span>
  );
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
        <p className="text-sm text-slate-600 mb-3">
          Buy a tourist SIM immediately after immigration for uninterrupted internet throughout your trip.
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          <Chip tone="veg">AIS ⭐ Best Coverage</Chip>
          <Chip>TrueMove H</Chip>
          <Chip>DTAC</Chip>
          <Chip tone="south">eSIM Supported</Chip>
        </div>
        <ul className="space-y-1.5">
          <Bullet>Available at Bangkok, Phuket &amp; Krabi airports</Bullet>
          <Bullet>Passport required</Bullet>
          <Bullet>Unlimited data plans available</Bullet>
          <Bullet>Google Maps &amp; Grab work immediately</Bullet>
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
              <tr>
                <td className="py-1.5 pr-2 font-medium text-teal-700">Private Airport Transfer</td>
                <td className="py-1.5">Families, luggage, hassle-free</td>
              </tr>
              <tr>
                <td className="py-1.5 pr-2">Grab</td>
                <td className="py-1.5">Solo travellers, city rides</td>
              </tr>
              <tr>
                <td className="py-1.5 pr-2">Taxi</td>
                <td className="py-1.5">Metered rides (ensure meter is ON)</td>
              </tr>
              <tr>
                <td className="py-1.5 pr-2">Airport Rail Link (Bangkok)</td>
                <td className="py-1.5">Fastest to city</td>
              </tr>
              <tr>
                <td className="py-1.5 pr-2">Shuttle Bus</td>
                <td className="py-1.5">Budget travellers</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-3 rounded-lg bg-white/70 border border-orange-100 px-3 py-2">
          <div className="text-xs font-semibold text-orange-700">Yellodae Recommendation</div>
          <p className="text-xs text-slate-600">Book private transfer before arrival to avoid queues and surge pricing.</p>
        </div>
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
          <Chip tone="veg">Vegetarian</Chip>
          <Chip tone="jain">Jain Friendly</Chip>
          <Chip tone="north">North Indian</Chip>
          <Chip tone="south">South Indian</Chip>
        </div>
        <ul className="space-y-1.5">
          <Bullet>
            <b>Bangkok</b> — Punjab Grill, Saras, Dosa King, Indus
          </Bullet>
          <Bullet>
            <b>Phuket</b> — Tandoori Flames, Bollywood Phuket
          </Bullet>
          <Bullet>
            <b>Pattaya</b> — Govindam, Madras Darbar
          </Bullet>
          <Bullet>
            <b>Krabi</b> — Taj Palace, Maharaja Restaurant
          </Bullet>
        </ul>
        <p className="text-xs text-slate-500 mt-3">More restaurants available on Google Maps.</p>
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
          <div className="rounded-lg bg-white/70 border border-amber-100 p-2">
            <div className="text-lg font-semibold text-amber-700">28–35°C</div>
            <div className="text-[11px] text-slate-500">Temperature</div>
          </div>
          <div className="rounded-lg bg-white/70 border border-amber-100 p-2">
            <div className="text-lg font-semibold text-amber-700">70–90%</div>
            <div className="text-[11px] text-slate-500">Humidity</div>
          </div>
          <div className="rounded-lg bg-white/70 border border-amber-100 p-2">
            <div className="text-lg font-semibold text-amber-700">Frequent</div>
            <div className="text-[11px] text-slate-500">Rain Showers</div>
          </div>
        </div>
        <ul className="space-y-1.5">
          <Bullet>Cotton clothing</Bullet>
          <Bullet>Comfortable walking shoes</Bullet>
          <Bullet>Umbrella during rainy season</Bullet>
          <Bullet>Sunscreen &amp; sunglasses</Bullet>
          <Bullet>Waterproof phone pouch (island tours)</Bullet>
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
        <p className="text-sm text-slate-600 mb-2">
          Currency: <b>Thai Baht (THB)</b>
        </p>
        <ul className="space-y-1.5">
          <Bullet>Cards accepted at malls &amp; hotels</Bullet>
          <Bullet>Carry ฿500–2000 cash</Bullet>
          <Bullet>Street markets prefer cash</Bullet>
          <Bullet>Exchange money at SuperRich or local exchange booths</Bullet>
          <Bullet>ATMs available at airports &amp; shopping malls</Bullet>
          <Bullet>International debit/credit cards work well</Bullet>
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
          ["Grab", "Taxi & food"],
          ["Google Maps", "Navigation"],
          ["Bolt", "Cheaper rides (Bangkok & Phuket)"],
          ["WhatsApp", "Contact driver"],
          ["Google Translate", "Thai translation"],
          ["Klook", "Attraction tickets"],
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
        <div className="flex justify-between rounded-md bg-red-100/60 px-3 py-2">
          <span>Police</span>
          <b>191</b>
        </div>
        <div className="flex justify-between rounded-md bg-red-100/60 px-3 py-2">
          <span>Tourist Police</span>
          <b>1155</b>
        </div>
        <div className="flex justify-between rounded-md bg-red-100/60 px-3 py-2">
          <span>Medical Emergency</span>
          <b>1669</b>
        </div>
        <div className="flex justify-between rounded-md bg-red-100/60 px-3 py-2">
          <span>Fire</span>
          <b>199</b>
        </div>
        <div className="rounded-md bg-white border border-red-100 px-3 py-2">
          <div className="font-semibold text-red-800">Embassy of India, Bangkok</div>
          <div className="text-xs text-slate-600">46 Prasarnmitr, Sukhumvit 23, Bangkok · ☎ +66 2 258 0300</div>
        </div>
        <div className="text-xs text-slate-500 flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          Nearest hospitals: Bangkok Hospital, Bumrungrad, Samitivej
        </div>
      </div>
    ),
  },
  {
    icon: Plane,
    title: "Airport Facilities",
    tint: "from-cyan-50 to-white",
    body: (
      <div className="flex flex-wrap gap-1.5">
        {[
          "Free Wi-Fi",
          "Currency Exchange",
          "ATM",
          "Luggage Storage",
          "Prayer Room",
          "Food Court",
          "SIM Cards",
          "Tourist Information",
          "Taxi Counter",
          "Airport Shuttle",
        ].map((f) => (
          <span key={f} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs bg-cyan-100 text-cyan-800">
            {f}
          </span>
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
        <Bullet>Book private airport transfers</Bullet>
        <Bullet>Carry medicines with prescription</Bullet>
        <Bullet>Keep drinking water handy</Bullet>
        <Bullet>Use stroller-friendly malls</Bullet>
        <Bullet>Avoid long outdoor walks during afternoon</Bullet>
        <Bullet>Save hotel address in Thai language</Bullet>
        <Bullet>Carry mosquito repellent</Bullet>
      </ul>
    ),
  },
  {
    icon: ClipboardCheck,
    title: "Arrival Checklist",
    tint: "from-teal-50 to-white",
    body: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
        {[
          "Passport",
          "Immigration completed",
          "Thai SIM activated",
          "Cash withdrawn",
          "Hotel address saved",
          "Driver contact saved",
          "Grab installed",
          "Attraction tickets downloaded",
          "Travel insurance",
        ].map((i) => (
          <label key={i} className="flex items-center gap-2 text-sm text-slate-700 rounded-md px-2 py-1.5 hover:bg-teal-50/60">
            <span className="w-4 h-4 rounded border-2 border-teal-500 flex items-center justify-center bg-white">
              <Check className="w-3 h-3 text-teal-600" />
            </span>
            {i}
          </label>
        ))}
      </div>
    ),
  },
  {
    icon: ShoppingBag,
    title: "Shopping Areas",
    tint: "from-fuchsia-50 to-white",
    body: (
      <ul className="space-y-1.5">
        <Bullet>
          <b>Bangkok</b> — MBK, Siam Paragon, ICONSIAM, Chatuchak
        </Bullet>
        <Bullet>
          <b>Phuket</b> — Jungceylon, Central Phuket
        </Bullet>
        <Bullet>
          <b>Pattaya</b> — Terminal 21, Central Festival
        </Bullet>
      </ul>
    ),
  },
  {
    icon: Soup,
    title: "Must Try Thai Foods",
    tint: "from-lime-50 to-white",
    body: (
      <div className="flex flex-wrap gap-1.5">
        {["Pad Thai", "Mango Sticky Rice", "Tom Yum", "Thai Green Curry", "Som Tam", "Thai Milk Tea"].map((f) => (
          <span key={f} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs bg-lime-100 text-lime-800">
            {f}
          </span>
        ))}
      </div>
    ),
  },
  {
    icon: ShieldAlert,
    title: "Tourist Scams to Avoid",
    tint: "from-yellow-50 to-white",
    body: (
      <ul className="space-y-1.5">
        <Bullet>Never use unmetered taxis</Bullet>
        <Bullet>Ignore "Temple Closed" scams</Bullet>
        <Bullet>Avoid jet ski damage scams</Bullet>
        <Bullet>Book island tours from trusted operators</Bullet>
        <Bullet>Don't exchange money at airports unless necessary</Bullet>
      </ul>
    ),
  },
  {
    icon: Landmark,
    title: "Temple Etiquette",
    tint: "from-orange-50 to-white",
    body: (
      <ul className="space-y-1.5">
        <Bullet>Cover shoulders</Bullet>
        <Bullet>Remove shoes</Bullet>
        <Bullet>Respect Buddha statues</Bullet>
        <Bullet>Speak quietly</Bullet>
        <Bullet>Avoid revealing clothes</Bullet>
      </ul>
    ),
  },
  {
    icon: Sailboat,
    title: "Island Tour Essentials",
    tint: "from-sky-50 to-white",
    body: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
        {["Waterproof bag", "Power bank", "Sunscreen", "Flip flops", "Motion sickness tablets", "Towel", "Dry clothes"].map(
          (i) => (
            <label key={i} className="flex items-center gap-2 text-sm text-slate-700 rounded-md px-2 py-1.5 hover:bg-sky-50/60">
              <span className="w-4 h-4 rounded border-2 border-teal-500 flex items-center justify-center bg-white">
                <Check className="w-3 h-3 text-teal-600" />
              </span>
              {i}
            </label>
          ),
        )}
      </div>
    ),
  },
];

const ThailandTravellerCompanion = () => {
  return (
    <section className="my-10 md:my-14">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold mb-3">
          🇹🇭 Indian Traveller Companion
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
          Everything You Need After Landing in Thailand
        </h2>
        <p className="text-slate-600 text-sm md:text-base">
          From airport pickup and SIM cards to transport, money, food and emergency contacts — all in one place.
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

export default ThailandTravellerCompanion;
