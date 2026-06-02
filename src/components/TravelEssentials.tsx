import { ExternalLink, Sun, Sparkles, Heart, Compass, Backpack, ShieldCheck, Package, Radar, Luggage, Lock } from "lucide-react";

type Item = { title: string; href: string; icon: React.ComponentType<{ className?: string }>; tag: string };

const destinationEssentials: Item[] = [
  { title: "Thailand Beach Vacation Essentials", href: "https://barnip.com/packing-lists/by-destination/thailand/thailand-beach-vacation-essentials", icon: Sun, tag: "Thailand" },
  { title: "Dubai Travel Essentials", href: "https://barnip.com/packing-lists/by-destination/dubai/dubai-summer-essentials", icon: Sparkles, tag: "Dubai" },
  { title: "Bali Honeymoon Essentials", href: "https://barnip.com/packing-lists/by-destination/bali/bali-honeymoon-packing-guide", icon: Heart, tag: "Bali" },
  { title: "Europe Packing Essentials", href: "https://barnip.com/packing-lists/by-destination/europe/europe-packing-list", icon: Compass, tag: "Europe" },
];

const bestEssentials: Item[] = [
  { title: "Best Travel Backpacks", href: "https://barnip.com/travel-bags/backpacks/best-travel-backpacks", icon: Backpack, tag: "Backpacks" },
  { title: "Best Travel Safety Essentials", href: "https://barnip.com/packing-lists/by-traveler/women-travelers/women-travel-safety-essentials", icon: ShieldCheck, tag: "Safety" },
  { title: "Best Packing Organizers", href: "https://barnip.com/travel-bags/organizers/packing-cubes", icon: Package, tag: "Organizers" },
  { title: "Best Travel Gadgets", href: "https://barnip.com/travel-gadgets/smart-travel-gear/luggage-trackers", icon: Radar, tag: "Gadgets" },
  { title: "Best Cabin Luggage", href: "https://barnip.com/buying-guides/best-products/best-cabin-luggage", icon: Luggage, tag: "Luggage" },
  { title: "Best Anti-Theft Gears", href: "https://barnip.com/travel-accessories/safety-products/anti-theft-gear", icon: Lock, tag: "Anti-Theft" },
];

const Card = ({ item }: { item: Item }) => {
  const Icon = item.icon;
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="group flex flex-col gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary hover:shadow-md transition-all"
      itemScope
      itemType="https://schema.org/Product"
    >
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
          <Icon className="w-5 h-5" />
        </div>
        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
      <div>
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{item.tag}</span>
        <h4 className="text-sm font-semibold text-foreground leading-snug mt-1" itemProp="name">{item.title}</h4>
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
