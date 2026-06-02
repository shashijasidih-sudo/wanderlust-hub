import { ExternalLink, Sun, Sparkles, Heart, Compass, Backpack, ShieldCheck, Package, Radar, Luggage, Lock } from "lucide-react";

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
    image: U("photo-1581553680321-4fffae59fccd"),
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
    image: U("photo-1556122071-e404cb6f31c0"),
    alt: "Cabin luggage at the airport terminal",
  },
  {
    title: "Best Anti-Theft Gears",
    href: "https://barnip.com/travel-accessories/safety-products/anti-theft-gear",
    icon: Lock,
    tag: "Anti-Theft",
    image: U("photo-1606293459188-2d9cf91a7be3"),
    alt: "Anti-theft travel bag with secure lock",
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
