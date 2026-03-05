import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const activities = [
  {
    title: "Phi Phi Island, Maya bay & Khai Island in Speed boat",
    location: "Phuket",
    rating: 4.8,
    reviews: 2341,
    price: 3500,
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&auto=format&fit=crop",
    slug: "/phi-phi-island"
  },
  {
    title: "James Bond Island & Phang Nga Bay by Speed boat",
    location: "Phuket",
    rating: 4.7,
    reviews: 1987,
    price: 2800,
    image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&auto=format&fit=crop",
    slug: "/james-bond-island"
  },
  {
    title: "Grand Palace & Emerald Buddha Temple Tour",
    location: "Bangkok",
    rating: 4.9,
    reviews: 3421,
    price: 1200,
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop",
    slug: "/bangkok-grand-palace-emerald"
  },
  {
    title: "Floating Market & Railway Market with River Cruise",
    location: "Bangkok",
    rating: 4.6,
    reviews: 1654,
    price: 1800,
    image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&auto=format&fit=crop",
    slug: "/maeklong-floating-market"
  },
  {
    title: "Coral Island & Water Sports in Pattaya",
    location: "Pattaya",
    rating: 4.5,
    reviews: 2103,
    price: 1500,
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&auto=format&fit=crop",
    slug: "/coral-island-pattaya"
  },
  {
    title: "Alcazar Cabaret Show Pattaya",
    location: "Pattaya",
    rating: 4.8,
    reviews: 2876,
    price: 900,
    image: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=800&auto=format&fit=crop",
    slug: "/alcazar-show-pattaya"
  },
  {
    title: "Four Islands Tour by Longtail Boat",
    location: "Krabi",
    rating: 4.7,
    reviews: 1876,
    price: 1400,
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&auto=format&fit=crop",
    slug: "/four-islands-longtail"
  },
  {
    title: "Emerald Pool & Hot Springs with Tiger Cave Temple",
    location: "Krabi",
    rating: 4.6,
    reviews: 1523,
    price: 1100,
    image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800&auto=format&fit=crop",
    slug: "/hot-spring-emerald-pool"
  }
];

const TrendingActivities = () => {
  const navigate = useNavigate();

  const handleActivityClick = (slug: string) => {
    navigate(slug);
  };

  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
          Traveler's Trending Activities
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 animate-slide-up max-w-7xl mx-auto">
          {activities.map((activity) => (
            <Card 
              key={activity.title}
              className="group overflow-hidden cursor-pointer hover:shadow-card-hover transition-all duration-300"
              onClick={() => handleActivityClick(activity.slug)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm font-medium">{activity.location}</span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-base mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {activity.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="font-medium text-sm">{activity.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ({activity.reviews} reviews)
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-muted-foreground">Adult Price:</span>
                    <span className="text-xl font-bold text-primary">₹{activity.price}</span>
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleActivityClick(activity.slug);
                    }}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingActivities;
