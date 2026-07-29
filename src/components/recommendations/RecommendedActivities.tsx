import { Link } from "react-router-dom";
import { Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import SafeImage from "@/components/SafeImage";
import { useCurrency } from "@/contexts/CurrencyContext";
import { cityActivities, RecommendedActivity } from "@/data/cityActivitiesData";
import RecoSection from "./RecoSection";
import { DestinationKey, pickExactly } from "./recoUtils";

interface Props {
  destination: DestinationKey | null;
  exclude: Set<string>;
}

const POPULAR_ORDER: DestinationKey[] = ["singapore", "bangkok", "phuket", "krabi", "pattaya"];

const poolFor = (key: DestinationKey | null): RecommendedActivity[] =>
  (key && cityActivities[key]) || [];

const RecommendedActivities = ({ destination, exclude }: Props) => {
  const { formatPrice } = useCurrency();

  const pools = [poolFor(destination), ...POPULAR_ORDER.map(poolFor)];
  const picks = pickExactly(pools, exclude, 4);
  if (picks.length === 0) return null;

  return (
    <RecoSection
      heading="Don't Miss These Experiences"
      subtitle="Popular experiences travellers book together."
    >
      {picks.map((a) => (
        <article
          key={a.slug}
          className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md"
        >
          <Link to={a.slug} className="block aspect-[4/3] overflow-hidden bg-muted">
            <SafeImage
              src={a.img}
              alt={a.title}
              className="h-full w-full object-cover transition group-hover:scale-105"
            />
          </Link>
          <div className="flex flex-1 flex-col gap-2 p-4">
            <h3 className="line-clamp-2 text-sm font-semibold leading-snug md:text-base">
              <Link to={a.slug} className="hover:text-primary">
                {a.title}
              </Link>
            </h3>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> 4.8
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> Full day
              </span>
            </div>
            <p className="line-clamp-2 text-xs text-muted-foreground md:text-sm">{a.desc}</p>
            <div className="mt-auto flex items-center justify-between gap-2 pt-2">
              <span className="text-sm font-bold text-primary md:text-base">{formatPrice(a.price)}</span>
              <Button asChild size="sm">
                <Link to={a.slug}>View Details</Link>
              </Button>
            </div>
          </div>
        </article>
      ))}
    </RecoSection>
  );
};

export default RecommendedActivities;
