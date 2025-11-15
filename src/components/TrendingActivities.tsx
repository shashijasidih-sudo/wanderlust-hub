import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin } from "lucide-react";

const activities = [
  {
    title: "Phi Phi Island, Maya bay & Khai Island in Speed boat",
    location: "Phuket",
    rating: 4.8,
    reviews: 2341,
    price: 89,
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&auto=format&fit=crop"
  },
  {
    title: "Dubai Aquarium & Underwater Zoo with Penguin Cove",
    location: "Dubai",
    rating: 4.9,
    reviews: 1876,
    price: 65,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop"
  },
  {
    title: "Emerald pool, Hot Spring & Tiger Cave",
    location: "Krabi",
    rating: 4.7,
    reviews: 1523,
    price: 45,
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&auto=format&fit=crop"
  },
  {
    title: "Ferrari World",
    location: "Abu Dhabi",
    rating: 4.9,
    reviews: 3102,
    price: 95,
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&auto=format&fit=crop"
  }
];

const TrendingActivities = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
          Traveler's Trending Activities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
          {activities.map((activity) => (
            <Card 
              key={activity.title}
              className="group overflow-hidden cursor-pointer hover:shadow-card-hover transition-all duration-300"
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

                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-muted-foreground">From</span>
                    <span className="text-xl font-bold text-primary">${activity.price}</span>
                    <span className="text-xs text-muted-foreground">/person</span>
                  </div>
                  <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
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
