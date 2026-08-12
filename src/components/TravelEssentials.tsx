import { ExternalLink, Sun, Sparkles, Heart, Compass, Backpack, ShieldCheck, Package, Radar, Luggage, Lock, Briefcase, Wallet } from "lucide-react";
import SafeImage from "@/components/SafeImage";
import antiTheftImg from "@/assets/ess-anti-theft.jpg";
import menTravelBagsImg from "@/assets/ess-men-bags.jpg";
import moneyBeltImg from "@/assets/ess-money-belt.jpg";
import honeymoonCoupleImg from "@/assets/ess-honeymoon-couple.jpg";
import toiletryKitAsset from "@/assets/ess-toiletry-kit.png.asset.json";
import womenSafetyAsset from "@/assets/ess-women-safety.png.asset.json";
import romanceKitAsset from "@/assets/ess-romance-kit.png.asset.json";

type Item = {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  image: string;
  alt: string;
};

const U = (id: string, w = 600) =>
  `https://images.unsplash.com/${id}?w=${w}&auto=format&fit=crop&q=70`;

const destinationEssentials: Item[] = [
  {
    title: "Thailand Beach Vacation Essentials",
    href: "https://barnip.com/packing-lists/by-destination/thailand/thailand-beach-vacation-essentials",
    icon: Sun,
    tag: "Thailand",
    image: U("photo-1552465011-b4e21bf6e79a"),
    alt: "Thailand beach with longtail boats and turquoise water",
  },
  {
    title: "Dubai Travel Essentials",
    href: "https://barnip.com/packing-lists/by-destination/dubai/dubai-summer-essentials",
    icon: Sparkles,
    tag: "Dubai",
    image: U("photo-1512453979798-5ea266f8880c"),
    alt: "Dubai skyline with Burj Khalifa at dusk",
  },
  {
    title: "Bali Honeymoon Essentials",
    href: "https://barnip.com/packing-lists/by-destination/bali/bali-honeymoon-packing-guide",
    icon: Heart,
    tag: "Bali",
    image: honeymoonCoupleImg,
    alt: "Romantic couple walking on a tropical beach at sunset",
  },
  {
    title: "Europe Packing Essentials",
    href: "https://barnip.com/packing-lists/by-destination/europe/europe-packing-list",
    icon: Compass,
    tag: "Europe",
    image: U("photo-1502602898657-3e91760cbb34"),
    alt: "Paris Eiffel Tower European cityscape",
  },
];

const bestEssentials: Item[] = [
  {
    title: "Thailand Beach Essentials",
    href: "https://barnip.com/packing-lists/by-destination/thailand/thailand-beach-vacation-essentials",
    icon: Sun,
    tag: "Thailand",
    image: U("photo-1552465011-b4e21bf6e79a"),
    alt: "Thailand beach with longtail boats and turquoise water",
  },
  {
    title: "Anti-theft Backpacks",
    href: "https://barnip.com/travel-bags/backpacks/anti-theft-backpacks",
    icon: Lock,
    tag: "Anti-Theft",
    image: antiTheftImg,
    alt: "Secure anti-theft travel backpack with hidden zipper",
  },
  {
    title: "Honeymoon Essentials",
    href: "https://barnip.com/packing-lists/by-trip-type/honeymoon-packing-list",
    icon: Heart,
    tag: "Honeymoon",
    image: honeymoonCoupleImg,
    alt: "Romantic couple walking on a tropical beach at sunset",
  },
  {
    title: "Must Have Airtags",
    href: "https://barnip.com/travel-gadgets/smart-travel-gear/airtags",
    icon: Radar,
    tag: "Gadgets",
    image: romanceKitAsset.url,
    alt: "Must-have travel gadgets and essentials kit",
  },
  {
    title: "Passport and Money-Bag",
    href: "https://barnip.com/airport-essentials/cabin-essentials/passport-holders",
    icon: Wallet,
    tag: "Cabin",
    image: moneyBeltImg,
    alt: "Passport holder and travel money wallet",
  },
  {
    title: "Travel Toiletry Kit",
    href: "https://barnip.com/airport-essentials/cabin-essentials/travel-toiletry-kits",
    icon: Package,
    tag: "Toiletries",
    image: toiletryKitAsset.url,
    alt: "Compact travel toiletry kit with refillable bottles and pouch",
  },
  {
    title: "Women Safety Essentials",
    href: "https://barnip.com/packing-lists/by-traveler/women-travelers/women-travel-safety-essentials",
    icon: ShieldCheck,
    tag: "Safety",
    image: womenSafetyAsset.url,
    alt: "Personal safety keychain set with alarm for women travellers",
  },
  {
    title: "Packing List for Men",
    href: "https://barnip.com/packing-lists/by-traveler/men-travelers/packing-list-for-men",
    icon: Briefcase,
    tag: "Men",
    image: menTravelBagsImg,
    alt: "Men's travel duffel bag and packing essentials",
  },
];

const Card = ({ item }: { item: Item }) => {
  const Icon = item.icon;
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="group flex flex-col rounded-xl border border-border bg-card hover:border-primary hover:shadow-lg transition-all overflow-hidden"
      itemScope
      itemType="https://schema.org/Product"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <SafeImage
          src={item.image}
          alt={item.alt}
          width={600}
          height={450}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          itemProp="image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute top-2 left-2 w-8 h-8 rounded-lg bg-white/95 backdrop-blur text-primary flex items-center justify-center shadow-sm">
          <Icon className="w-4 h-4" />
        </div>
        <ExternalLink className="absolute top-2 right-2 w-4 h-4 text-white drop-shadow" />
        <span className="absolute bottom-2 left-2 text-[10px] uppercase tracking-wider text-white font-semibold drop-shadow">
          {item.tag}
        </span>
      </div>
      <div className="p-3">
        <h4 className="text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition-colors" itemProp="name">
          {item.title}
        </h4>
      </div>
    </a>
  );
};

const Section = ({ heading, subheading, items }: { heading: string; subheading: string; items: Item[] }) => (
  <section className="mt-10 -mx-4 sm:mx-0" aria-label={heading}>
    <div className="mb-4 px-4 sm:px-0">
      <h3 className="text-xl md:text-2xl font-bold text-foreground">{heading}</h3>
      <p className="text-sm text-muted-foreground mt-1">{subheading}</p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 px-3 sm:px-0">
      {items.map((item) => (
        <Card key={item.href} item={item} />
      ))}
    </div>
  </section>
);

const TravelEssentials = ({ compact = false }: { compact?: boolean }) => {
  if (compact) {
    return (
      <div className="mt-10">
        <Section
          heading="Travel Essentials"
          subheading="Top-rated gear every traveller should pack — curated picks."
          items={bestEssentials.slice(0, 8)}
        />
      </div>
    );
  }
  return (
    <div className="mt-10">
      <Section
        heading="Travel Essentials You Would Be Needing"
        subheading="Hand-picked packing guides by destination — curated by Barnip."
        items={destinationEssentials}
      />
      <Section
        heading="Best Travel Essentials"
        subheading="Top-rated gear and accessories every traveler should consider."
        items={bestEssentials}
      />
    </div>
  );
};


export default TravelEssentials;
