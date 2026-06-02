import { ExternalLink, Sun, Sparkles, Heart, Compass, Backpack, ShieldCheck, Package, Radar, Luggage, Lock, Briefcase, Wallet } from "lucide-react";

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
    image: U("photo-1537996194471-e657df975ab4"),
    alt: "Bali rice terraces and tropical landscape",
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
    title: "Best Travel Backpacks",
    href: "https://barnip.com/travel-bags/backpacks/best-travel-backpacks",
    icon: Backpack,
    tag: "Backpacks",
    image: U("photo-1553062407-98eeb64c6a62"),
    alt: "Premium travel backpack on wooden surface",
  },
  {
    title: "Best Travel Safety Essentials",
    href: "https://barnip.com/packing-lists/by-traveler/women-travelers/women-travel-safety-essentials",
    icon: ShieldCheck,
    tag: "Safety",
    image: U("photo-1581553680321-4fffae59fccd"),
    alt: "Travel safety essentials and personal protection items",
  },
  {
    title: "Best Packing Organizers",
    href: "https://barnip.com/travel-bags/organizers/packing-cubes",
    icon: Package,
    tag: "Organizers",
    image: U("photo-1763380064985-6c99cbb9955d"),
    alt: "Neatly arranged packing cubes inside a suitcase",
  },
  {
    title: "Best Travel Gadgets",
    href: "https://barnip.com/travel-gadgets/smart-travel-gear/luggage-trackers",
    icon: Radar,
    tag: "Gadgets",
    image: U("photo-1491637639811-60e2756cc1c7"),
    alt: "Smart travel gadgets and luggage trackers",
  },
  {
    title: "Best Cabin Luggage",
    href: "https://barnip.com/buying-guides/best-products/best-cabin-luggage",
    icon: Luggage,
    tag: "Luggage",
    image: "/__l5e/assets-v1/258d450d-9311-483c-a954-4db4ed076e5e/cabin-luggage.jpg",
    alt: "Sleek modern cabin luggage at the airport terminal",
  },
  {
    title: "Best Anti-Theft Gears",
    href: "https://barnip.com/travel-accessories/safety-products/anti-theft-gear",
    icon: Lock,
    tag: "Anti-Theft",
    image: "/__l5e/assets-v1/91856846-e6bc-4834-a5e6-2d1c917bb0cf/anti-theft-gear.jpg",
    alt: "Secure anti-theft travel backpack with hidden zipper",
  },
  {
    title: "Best Bags for Men Travelers",
    href: "https://barnip.com/packing-lists/by-traveler/men-travelers/best-bags-for-men-travelers",
    icon: Briefcase,
    tag: "Men's Bags",
    image: "/__l5e/assets-v1/21368f85-ff6b-4367-ba2d-1ee6e052f737/men-travel-bags.jpg",
    alt: "Stylish leather travel duffel bag and backpack for men",
  },
  {
    title: "Best Money Belts",
    href: "https://barnip.com/travel-accessories/safety-products/money-belts",
    icon: Wallet,
    tag: "Money Belts",
    image: "/__l5e/assets-v1/3073e79a-c0f0-4409-bd57-f606f5c2d51b/money-belt.jpg",
    alt: "Brown leather money belt and travel wallet with cash",
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
        <img
          src={item.image}
          alt={item.alt}
          loading="lazy"
          decoding="async"
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
  <section className="mt-10" aria-label={heading}>
    <div className="mb-4">
      <h3 className="text-xl md:text-2xl font-bold text-foreground">{heading}</h3>
      <p className="text-sm text-muted-foreground mt-1">{subheading}</p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
      {items.map((item) => (
        <Card key={item.href} item={item} />
      ))}
    </div>
  </section>
);

const TravelEssentials = () => {
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
