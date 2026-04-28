import { Link } from "react-router-dom";
import { Compass, Plane, MapPin, BookOpen } from "lucide-react";

interface CityExploreLinksProps {
  city: "bangkok" | "pattaya" | "phuket" | "krabi" | "singapore" | "koh-samui" | "chiang-mai";
}

const cityConfig: Record<
  CityExploreLinksProps["city"],
  {
    name: string;
    thingsToDo: string;
    transfers: string;
    cityHome: string;
    guideLabel: string;
    guideHref: string;
  }
> = {
  bangkok: {
    name: "Bangkok",
    thingsToDo: "/thailand/bangkok/things-to-do",
    transfers: "/thailand/budget-airport-transfers",
    cityHome: "/thailand/bangkok",
    guideLabel: "Bangkok Smart Guides",
    guideHref: "/thailand/destination-guides",
  },
  pattaya: {
    name: "Pattaya",
    thingsToDo: "/thailand/pattaya/things-to-do",
    transfers: "/thailand/budget-airport-transfers",
    cityHome: "/thailand/pattaya",
    guideLabel: "Pattaya Travel Guide",
    guideHref: "/thailand/destination-guides",
  },
  phuket: {
    name: "Phuket",
    thingsToDo: "/thailand/phuket/things-to-do",
    transfers: "/thailand/budget-airport-transfers",
    cityHome: "/thailand/phuket",
    guideLabel: "Phuket Travel Guide",
    guideHref: "/thailand/destination-guides",
  },
  krabi: {
    name: "Krabi",
    thingsToDo: "/thailand/krabi/things-to-do",
    transfers: "/thailand/budget-airport-transfers",
    cityHome: "/thailand/krabi",
    guideLabel: "Krabi Travel Guide",
    guideHref: "/thailand/destination-guides",
  },
  singapore: {
    name: "Singapore",
    thingsToDo: "/singapore/things-to-do",
    transfers: "/singapore/budget-airport-transfers",
    cityHome: "/singapore",
    guideLabel: "Singapore Smart Guides",
    guideHref: "/singapore",
  },
  "koh-samui": {
    name: "Koh Samui",
    thingsToDo: "/thailand/koh-samui/things-to-do",
    transfers: "/thailand/budget-airport-transfers",
    cityHome: "/thailand/koh-samui",
    guideLabel: "Thailand Smart Guides",
    guideHref: "/thailand/destination-guides",
  },
  "chiang-mai": {
    name: "Chiang Mai",
    thingsToDo: "/thailand/chiang-mai/things-to-do",
    transfers: "/thailand/chiang-mai/budget-airport-transfers",
    cityHome: "/thailand/chiang-mai",
    guideLabel: "Thailand Smart Guides",
    guideHref: "/thailand/destination-guides",
  },
};

const CityExploreLinks = ({ city }: CityExploreLinksProps) => {
  const c = cityConfig[city];
  if (!c) return null;

  const items = [
    {
      icon: Compass,
      label: `Top Things to Do in ${c.name}`,
      href: c.thingsToDo,
    },
    {
      icon: Plane,
      label: `${c.name} Airport Transfers`,
      href: c.transfers,
    },
    {
      icon: MapPin,
      label: `Explore ${c.name}`,
      href: c.cityHome,
    },
    {
      icon: BookOpen,
      label: c.guideLabel,
      href: c.guideHref,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {items.map(({ icon: Icon, label, href }) => (
          <Link
            key={href + label}
            to={href}
            className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium shadow-sm transition hover:border-primary hover:shadow-md hover:text-primary"
          >
            <Icon className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="line-clamp-2">{label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CityExploreLinks;
