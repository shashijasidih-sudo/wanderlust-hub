import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCurrency } from "@/contexts/CurrencyContext";

export interface BookTransferItem {
  title: string;
  desc: string;
  price: number;
  img: string;
  slug: string;
}

interface BookTransfersSectionProps {
  city: string;
  intro?: string;
  transfers: BookTransferItem[];
}

const BookTransfersSection = ({ city, intro, transfers }: BookTransfersSectionProps) => {
  const { formatPrice } = useCurrency();

  return (
    <section className="container mx-auto px-4 py-10">
      <header className="mb-6 max-w-3xl">
        <h2 className="text-2xl font-bold md:text-3xl">Book Transfers in {city}</h2>
        <p className="mt-2 text-muted-foreground">
          {intro ||
            `Reliable ${city} airport and city transfers to pair with your activities — pre-book and skip the taxi queue.`}
        </p>
      </header>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {transfers.map((t) => (
          <article
            key={t.slug}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md"
          >
            <Link to={t.slug} className="block aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={t.img}
                alt={`${t.title} – ${city} transfer`}
                loading="lazy"
                className="h-full w-full object-cover transition group-hover:scale-105"
              />
            </Link>
            <div className="flex flex-1 flex-col gap-3 p-4">
              <h3 className="line-clamp-2 text-base font-semibold leading-snug">
                <Link to={t.slug} className="hover:text-primary">
                  {t.title}
                </Link>
              </h3>
              <p className="line-clamp-2 text-sm text-muted-foreground">{t.desc}</p>
              <div className="mt-auto flex items-center justify-between gap-3 pt-2">
                <div className="text-sm">
                  <span className="text-muted-foreground">From </span>
                  <span className="text-base font-bold text-primary">{formatPrice(t.price)}</span>
                </div>
                <Button asChild size="sm">
                  <Link to={t.slug}>Book Now</Link>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BookTransfersSection;
