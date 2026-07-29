import { Link } from "react-router-dom";
import { Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import SafeImage from "@/components/SafeImage";
import { useCurrency } from "@/contexts/CurrencyContext";
import { cityTransfers } from "@/data/cityTransfersData";
import type { BookTransferItem } from "@/components/BookTransfersSection";
import RecoSection from "./RecoSection";
import { DestinationKey, pickExactly } from "./recoUtils";

interface Props {
  destination: DestinationKey | null;
  exclude: Set<string>;
}

const POPULAR_ORDER: DestinationKey[] = ["singapore", "bangkok", "phuket", "krabi", "pattaya"];

const poolFor = (key: DestinationKey | null): BookTransferItem[] =>
  (key && cityTransfers[key]) || [];

const RecommendedTransfers = ({ destination, exclude }: Props) => {
  const { formatPrice } = useCurrency();

  const picks = pickExactly<BookTransferItem>(
    [poolFor(destination), ...POPULAR_ORDER.map(poolFor)],
    exclude,
    4
  );
  if (picks.length === 0) return null;

  return (
    <RecoSection
      heading="Recommended Airport & City Transfers"
      subtitle="Travel comfortably from airport to hotel."
    >
      {picks.map((t) => (
        <article
          key={t.slug}
          className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md"
        >
          <Link to={t.slug} className="block aspect-[4/3] overflow-hidden bg-muted">
            <SafeImage
              src={t.img}
              alt={t.title}
              className="h-full w-full object-cover transition group-hover:scale-105"
            />
          </Link>
          <div className="flex flex-1 flex-col gap-2 p-4">
            <span className="inline-flex w-fit items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
              <Car className="h-3 w-3" /> Private Transfer
            </span>
            <h3 className="line-clamp-2 text-sm font-semibold leading-snug md:text-base">
              <Link to={t.slug} className="hover:text-primary">
                {t.title}
              </Link>
            </h3>
            <p className="line-clamp-2 text-xs text-muted-foreground md:text-sm">{t.desc}</p>
            <div className="mt-auto flex items-center justify-between gap-2 pt-2">
              <span className="text-sm font-bold text-primary md:text-base">{formatPrice(t.price)}</span>
              <Button asChild size="sm">
                <Link to={t.slug}>View Details</Link>
              </Button>
            </div>
          </div>
        </article>
      ))}
    </RecoSection>
  );
};

export default RecommendedTransfers;
