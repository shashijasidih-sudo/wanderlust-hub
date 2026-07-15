import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import SafeImage from "./SafeImage";
import { useCurrency } from "@/contexts/CurrencyContext";

interface DestinationCardProps {
  image: string;
  name: string;
  duration: string;
  price: number;
  link?: string;
}

const DestinationCard = ({ image, name, duration, price, link }: DestinationCardProps) => {
  const { formatPrice } = useCurrency();
  const href = link && link.startsWith("/") ? link : undefined;

  const inner = (
    <>
      <div className="aspect-square overflow-hidden">
        <SafeImage
          src={image}
          alt={name}
          width={800}
          height={800}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
          <div className="flex items-center gap-2 text-white/80 mb-2">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{duration}</span>
          </div>
          <p className="text-lg font-semibold text-white mb-3">{formatPrice(price)}/- per person</p>
          <Button
            asChild={!!href}
            className="bg-primary hover:bg-primary/90 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {href ? <Link to={href}>Book Now</Link> : <span>Book Now</span>}
          </Button>
        </div>
      </div>
    </>
  );

  const className =
    "group relative block overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300";

  if (href) {
    return (
      <Link to={href} aria-label={`${name} — ${duration}`} className={className}>
        {inner}
      </Link>
    );
  }

  return <div className={className}>{inner}</div>;
};

export default DestinationCard;
