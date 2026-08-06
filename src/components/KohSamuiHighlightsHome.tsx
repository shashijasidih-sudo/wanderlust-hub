import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SafeImage from "@/components/SafeImage";
import { useCurrency } from "@/contexts/CurrencyContext";

import beach from "@/assets/koh-samui-beach-1.webp";
import fullMoon from "@/assets/koh-samui-full-moon-party-1.jpg";
import cruise from "@/assets/koh-samui-loy-krathong-cruise-1.webp";

type Item = {
  title: string;
  price: number;
  image: string;
  slug: string;
  tag: "Activity" | "Transfer";
};

const items: Item[] = [
  {
    title: "Full Moon Party with Transfer, Koh Samui",
    price: 3800,
    image: fullMoon,
    slug: "/thailand/koh-samui/full-moon-party-koh-phangan-with-transfer/",
    tag: "Activity",
  },
  {
    title: "White Orchid River Cruise – Loy Krathong Festival",
    price: 5000,
    image: cruise,
    slug: "/thailand/koh-samui/white-orchid-river-cruise-loy-krathong-festival/",
    tag: "Activity",
  },
  {
    title: "Koh Samui Airport (USM) to Hotel Transfer",
    price: 1800,
    image: beach,
    slug: "/thailand/koh-samui/full-moon-party-koh-phangan-with-transfer/",
    tag: "Transfer",
  },
  {
    title: "Koh Samui Hotel to Koh Phangan Pier",
    price: 2200,
    image: fullMoon,
    slug: "/thailand/koh-samui/full-moon-party-koh-phangan-with-transfer/",
    tag: "Transfer",
  },
];

const KohSamuiHighlightsHome = () => {
  const { formatPrice } = useCurrency();

  return (
    <section aria-labelledby="koh-samui-home-heading" className="py-8 md:py-12 bg-muted/30">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
          <div>
            <h2 id="koh-samui-home-heading" className="text-2xl md:text-3xl font-bold">
              Koh Samui Activities &amp; Transfers
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mt-1">
              Island parties, festival cruises and private airport transfers across Koh Samui.
            </p>
          </div>
          <Link
            to="/thailand/koh-samui/"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            View all Koh Samui <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {items.map((item) => (
            <Card
              key={item.title}
              className="group overflow-hidden hover:shadow-card-hover transition-all duration-300"
            >
              <Link to={item.slug} aria-label={item.title} className="block">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="absolute top-2 left-2 rounded-full bg-primary px-2 py-0.5 text-[11px] font-semibold text-primary-foreground">
                    {item.tag}
                  </span>
                </div>
              </Link>
              <div className="p-3 sm:p-4">
                <h3 className="font-semibold text-sm sm:text-base mb-2 line-clamp-2">
                  <Link to={item.slug} className="hover:text-primary transition-colors">
                    {item.title}
                  </Link>
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-xs text-muted-foreground">From</span>
                  <span className="text-lg font-bold text-primary">{formatPrice(item.price)}</span>
                </div>
                <Button asChild size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link to={item.slug}>Book Now</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KohSamuiHighlightsHome;
