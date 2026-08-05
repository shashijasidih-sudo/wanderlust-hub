import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SafeImage from "@/components/SafeImage";
import { useCurrency } from "@/contexts/CurrencyContext";
import { adultShowActivities } from "@/data/pattayaActivitiesData";

const shows = [...adultShowActivities].sort((a, b) => a.price - b.price).slice(0, 4);

const PattayaAdultShowsHome = () => {
  const { formatPrice } = useCurrency();

  return (
    <section aria-labelledby="pattaya-adult-shows-heading" className="py-8 md:py-12 bg-background">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
          <div>
            <h2 id="pattaya-adult-shows-heading" className="text-2xl md:text-3xl font-bold">
              Pattaya Adult Shows (18+)
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mt-1">
              Pattaya's most popular 18+ cabaret and night shows with round-trip hotel transfers.
            </p>
          </div>
          <Link
            to="/thailand/pattaya/adultshows/"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            View all adult shows <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {shows.map((show) => (
            <Card key={show.slug} className="group overflow-hidden hover:shadow-card-hover transition-all duration-300">
              <Link to={show.slug} aria-label={show.title} className="block">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <SafeImage
                    src={show.image}
                    alt={show.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="absolute top-2 left-2 rounded-full bg-accent px-2 py-0.5 text-[11px] font-semibold text-accent-foreground">
                    18+
                  </span>
                </div>
              </Link>
              <div className="p-3 sm:p-4">
                <h3 className="font-semibold text-sm sm:text-base mb-2 line-clamp-2">
                  <Link to={show.slug} className="hover:text-primary transition-colors">
                    {show.title}
                  </Link>
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-xs text-muted-foreground">From</span>
                  <span className="text-lg font-bold text-primary">{formatPrice(show.price)}</span>
                </div>
                <Button asChild size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link to={show.slug}>Book Now</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PattayaAdultShowsHome;
