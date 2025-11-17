import { Button } from "@/components/ui/button";
import { Star, CheckCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

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

  const handleCardClick = () => {
    if (slug) {
      navigate(slug);
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
          <button className="absolute top-2 right-2 bg-[#F15A24] text-white font-bold px-4 py-1.5 rounded-tl-none rounded-tr-lg rounded-bl-lg rounded-br-none shadow-md hover:bg-[#d94d1c] transition-colors">
            BOOK NOW
          </button>
        </div>
        
        <div className="flex-1 p-4 flex flex-col">
          <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
          
          <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white w-fit mb-3">
            Add to Email Flyer
          </Button>

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
      <div className="relative h-56">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {isRecommended && (
          <div className="absolute top-2 left-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
            Recommended
          </div>
        )}
        <button className="absolute top-2 right-2 bg-[#F15A24] text-white font-bold px-4 py-1.5 rounded-tl-none rounded-tr-lg rounded-bl-lg rounded-br-none shadow-md hover:bg-[#d94d1c] transition-colors">
          BOOK NOW
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="text-base font-bold text-foreground mb-2 line-clamp-2 h-12">{title}</h3>
        
        <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white w-full mb-3">
          Add to Email Flyer
        </Button>

        <div className="space-y-2 mb-3">
          <div className="flex items-center gap-1 text-xs">
            <CheckCircle className="h-3 w-3 text-green-600" />
            <span>Instant Confirmation</span>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <CheckCircle className="h-3 w-3 text-green-600" />
            <span>Free Cancellation</span>
          </div>
        </div>

        <Tabs defaultValue="about" className="mb-3">
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

        <div className="flex items-center gap-1 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({reviews})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">from</p>
            <p className="text-lg font-bold text-foreground">INR {price.toLocaleString('en-IN')}</p>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-sm">
            SELECT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;