import { Button } from "@/components/ui/button";
import { Star, CheckCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import WishlistButton from "./WishlistButton";
import { useCurrency } from "@/contexts/CurrencyContext";

interface ActivityCardProps {
  title: string;
  price: number;
  image: string;
  isRecommended?: boolean;
  viewMode: 'grid' | 'list';
  reviews?: number;
  slug?: string;
}

const ActivityCard = ({ 
  title, 
  price, 
  image, 
  isRecommended = false, 
  viewMode,
  reviews = Math.floor(Math.random() * 100) + 20,
  slug
}: ActivityCardProps) => {
  const rating = (Math.random() * 1 + 4).toFixed(1);
  const navigate = useNavigate();
  const { formatPrice } = useCurrency();

  const handleCardClick = () => {
    if (slug) {
      // Handle both cases: slugs with or without leading slash
      const path = slug.startsWith('/') ? slug : `/${slug}`;
      navigate(path);
    }
  };

  if (viewMode === 'list') {
    return (
      <div 
        className="flex gap-4 bg-card rounded-lg shadow-card hover:shadow-card-hover transition-all overflow-hidden cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="relative w-80 h-64 flex-shrink-0">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          {isRecommended && (
            <div className="absolute top-2 left-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
              Recommended
            </div>
          )}
          <div className="absolute top-2 right-2 flex gap-2">
            <WishlistButton
              tourSlug={slug || ''}
              tourName={title}
              tourImage={image}
              tourPrice={price}
              size="sm"
            />
            <button className="bg-[#F15A24] text-white font-bold px-4 py-1.5 rounded-tl-none rounded-tr-lg rounded-bl-lg rounded-br-none shadow-md hover:bg-[#d94d1c] transition-colors">
              BOOK NOW
            </button>
          </div>
        </div>
        
        <div className="flex-1 p-4 flex flex-col">
          <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>

          <div className="flex gap-4 mb-3">
            <div className="flex items-center gap-1 text-sm">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>Instant Confirmation</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>Free Cancellation</span>
            </div>
          </div>

          <Tabs defaultValue="about" className="flex-1">
            <TabsList>
              <TabsTrigger value="about">About The Experience</TabsTrigger>
              <TabsTrigger value="inclusion">Inclusion</TabsTrigger>
              <TabsTrigger value="info">Important Information</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="text-sm text-muted-foreground">
              Experience the best of what this destination has to offer with this carefully curated activity.
            </TabsContent>
            <TabsContent value="inclusion" className="text-sm text-muted-foreground">
              All necessary equipment and guidance included for your convenience.
            </TabsContent>
            <TabsContent value="info" className="text-sm text-muted-foreground">
              Please arrive 15 minutes before the scheduled time. Comfortable clothing recommended.
            </TabsContent>
          </Tabs>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({reviews} reviews)</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-xs text-muted-foreground">from</p>
                <p className="text-2xl font-bold text-foreground">INR {price.toLocaleString('en-IN')}</p>
                <p className="text-xs text-green-600 font-medium">GST Inclusive</p>
              </div>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                SELECT
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="bg-card rounded-lg shadow-card hover:shadow-card-hover transition-all overflow-hidden cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative h-32 md:h-56">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {isRecommended && (
          <div className="absolute top-1 left-1 md:top-2 md:left-2 bg-accent text-accent-foreground px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-semibold">
            Recommended
          </div>
        )}
        <div className="absolute top-1 right-1 md:top-2 md:right-2 flex gap-1 md:gap-2">
          <WishlistButton
            tourSlug={slug || ''}
            tourName={title}
            tourImage={image}
            tourPrice={price}
            size="sm"
          />
          <button className="bg-[#F15A24] text-white font-bold px-2 py-1 md:px-4 md:py-1.5 rounded-tl-none rounded-tr-lg rounded-bl-lg rounded-br-none shadow-md hover:bg-[#d94d1c] transition-colors text-[10px] md:text-sm">
            BOOK NOW
          </button>
        </div>
      </div>
      
      <div className="p-2 md:p-4">
        <h3 className="text-xs md:text-base font-bold text-foreground mb-1 md:mb-2 line-clamp-2 h-8 md:h-12">{title}</h3>

        <div className="space-y-1 md:space-y-2 mb-2 md:mb-3">
          <div className="flex items-center gap-1 text-[10px] md:text-xs">
            <CheckCircle className="h-2.5 w-2.5 md:h-3 md:w-3 text-green-600" />
            <span>Instant Confirmation</span>
          </div>
          <div className="flex items-center gap-1 text-[10px] md:text-xs">
            <CheckCircle className="h-2.5 w-2.5 md:h-3 md:w-3 text-green-600" />
            <span>Free Cancellation</span>
          </div>
        </div>

        <Tabs defaultValue="about" className="mb-2 md:mb-3 hidden md:block">
          <TabsList className="grid w-full grid-cols-3 h-8">
            <TabsTrigger value="about" className="text-xs">About</TabsTrigger>
            <TabsTrigger value="inclusion" className="text-xs">Inclusion</TabsTrigger>
            <TabsTrigger value="info" className="text-xs">Info</TabsTrigger>
          </TabsList>
          <TabsContent value="about" className="text-xs text-muted-foreground mt-2">
            Curated experience for you.
          </TabsContent>
          <TabsContent value="inclusion" className="text-xs text-muted-foreground mt-2">
            All equipment included.
          </TabsContent>
          <TabsContent value="info" className="text-xs text-muted-foreground mt-2">
            Arrive 15 mins early.
          </TabsContent>
        </Tabs>

        <div className="flex items-center gap-1 mb-1 md:mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-2.5 w-2.5 md:h-3 md:w-3 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-[10px] md:text-xs text-muted-foreground">({reviews})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] md:text-xs text-muted-foreground">from</p>
            <p className="text-sm md:text-lg font-bold text-foreground">₹{price.toLocaleString('en-IN')}</p>
            <p className="text-[8px] md:text-[10px] text-green-600 font-medium">GST Inclusive</p>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-[10px] md:text-sm h-7 md:h-9 px-2 md:px-4">
            SELECT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;