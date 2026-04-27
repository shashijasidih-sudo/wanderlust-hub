import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCurrency } from "@/contexts/CurrencyContext";
import type { RecommendedActivity } from "@/data/cityActivitiesData";

interface RecommendedActivitiesSectionProps {
  city: string;
  activities: RecommendedActivity[];
}

const RecommendedActivitiesSection = ({ city, activities }: RecommendedActivitiesSectionProps) => {
  const { formatPrice } = useCurrency();

  if (!activities || activities.length === 0) return null;

  return (
    <section className="container mx-auto px-4 py-10">
      <header className="mb-6 max-w-3xl">
        <h2 className="text-2xl font-bold md:text-3xl">Recommended Activities in {city}</h2>
        <p className="mt-2 text-muted-foreground">
          Pair your transfer with these top-rated {city} tours and tickets — bundle to save time and money.
        </p>
      </header>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {activities.map((a) => (
          <article
            key={a.slug}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md"
          >
            <Link to={a.slug} className="block aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={a.img}
                alt={`${a.title} – ${city} activity`}
                loading="lazy"
                className="h-full w-full object-cover transition group-hover:scale-105"
              />
            </Link>
            <div className="flex flex-1 flex-col gap-3 p-4">
              <h3 className="line-clamp-2 text-base font-semibold leading-snug">
                <Link to={a.slug} className="hover:text-primary">
                  {a.title}
                </Link>
              </h3>
              <p className="line-clamp-2 text-sm text-muted-foreground">{a.desc}</p>
              <div className="mt-auto flex items-center justify-between gap-3 pt-2">
                <div className="text-sm">
                  <span className="text-muted-foreground">From </span>
                  <span className="text-base font-bold text-primary">{formatPrice(a.price)}</span>
                </div>
                <Button asChild size="sm">
                  <Link to={a.slug}>Book Now</Link>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecommendedActivitiesSection;
