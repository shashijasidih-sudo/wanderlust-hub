import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SafeImage from "@/components/SafeImage";
import { useCurrency } from "@/contexts/CurrencyContext";
import RecoSection from "./RecoSection";
import { DestinationKey, pickExactly } from "./recoUtils";
import { ADD_ONS, AddOnProduct } from "./recoData";

interface Props {
  destination: DestinationKey | null;
  exclude: Set<string>;
}

const POPULAR_ORDER: DestinationKey[] = ["singapore", "bangkok", "phuket", "krabi", "pattaya"];

const poolFor = (key: DestinationKey | null): AddOnProduct[] => (key && ADD_ONS[key]) || [];

const CompleteYourTrip = ({ destination, exclude }: Props) => {
  const { formatPrice } = useCurrency();

  const picks = pickExactly<AddOnProduct>(
    [poolFor(destination), ...POPULAR_ORDER.map(poolFor)],
    exclude,
    4
  );
  if (picks.length === 0) return null;

  return (
    <RecoSection
      heading="Complete Your Trip"
      subtitle="Enhance your trip with these popular add-ons."
    >
      {picks.map((p) => (
        <article
          key={p.slug}
          className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md"
        >
          <Link to={p.slug} className="block aspect-[4/3] overflow-hidden bg-muted">
            <SafeImage
              src={p.image}
              alt={p.title}
              className="h-full w-full object-cover transition group-hover:scale-105"
            />
          </Link>
          <div className="flex flex-1 flex-col gap-2 p-4">
            <span className="inline-flex w-fit rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
              {p.badge}
            </span>
            <h3 className="line-clamp-2 text-sm font-semibold leading-snug md:text-base">
              <Link to={p.slug} className="hover:text-primary">
                {p.title}
              </Link>
            </h3>
            <p className="line-clamp-2 text-xs text-muted-foreground md:text-sm">{p.description}</p>
            <div className="mt-auto flex items-center justify-between gap-2 pt-2">
              {p.price ? (
                <span className="text-sm font-bold text-primary md:text-base">{formatPrice(p.price)}</span>
              ) : (
                <span className="text-xs text-muted-foreground">View pricing</span>
              )}
              <Button asChild size="sm">
                <Link to={p.slug}>View Details</Link>
              </Button>
            </div>
          </div>
        </article>
      ))}
    </RecoSection>
  );
};

export default CompleteYourTrip;
