import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Clock, Users, ShoppingCart } from "lucide-react";
import WishlistButton from "@/components/WishlistButton";
import { useCart } from "@/contexts/CartContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import { useToast } from "@/hooks/use-toast";

export interface TransferCardData {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  priceLabel?: string;
  image: string;
  rating: number;
  reviews: number;
  duration: string;
  capacity: string;
  slug: string;
  type: string;
  category?: string;
  zone?: string;
  vehicles?: string[];
  city?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface TransferCardProps {
  transfer: TransferCardData;
  badges?: React.ReactNode;
}

const TransferCard = ({ transfer, badges }: TransferCardProps) => {
  const { formatPrice } = useCurrency();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    await addToCart({
      itemType: 'transfer',
      title: transfer.title,
      price: transfer.price,
      slug: transfer.slug,
    });
    toast({
      title: "Added to cart",
      description: `${transfer.title} has been added to your cart.`,
    });
  };

  return (
    <Link to={transfer.slug}>
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
        <div className="relative h-48 overflow-hidden">
          <img
            src={transfer.image}
            alt={transfer.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {badges}
          {/* Wishlist & Cart Icons */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
            <WishlistButton
              tourSlug={transfer.slug}
              tourName={transfer.title}
              tourImage={transfer.image}
              tourPrice={transfer.price}
              size="sm"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={handleAddToCart}
              className="rounded-full bg-white/80 hover:bg-white transition-colors h-8 w-8"
            >
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </Button>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors line-clamp-2">
            {transfer.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">{transfer.subtitle}</p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{transfer.capacity}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{transfer.duration}</span>
            </div>
          </div>

          {/* Vehicle Options */}
          {transfer.vehicles && (
            <div className="flex flex-wrap gap-1 mb-3">
              {transfer.vehicles.map((vehicle, index) => (
                <span key={index} className="text-xs bg-muted px-2 py-1 rounded">
                  {vehicle}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center gap-1 mb-3">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{transfer.rating}</span>
            <span className="text-muted-foreground">({transfer.reviews} reviews)</span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs text-muted-foreground">{transfer.priceLabel || "From"}</span>
              <p className="text-xl font-bold text-primary">{formatPrice(transfer.price)}</p>
            </div>
            <Button size="sm">Book Now</Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default TransferCard;
