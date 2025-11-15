import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const destinations = [
  {
    name: "Phuket",
    image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&auto=format&fit=crop"
  },
  {
    name: "Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop"
  },
  {
    name: "Singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&auto=format&fit=crop"
  },
  {
    name: "Bangkok",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop"
  }
];

const QuickDestinations = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
          Things to do wherever you're going
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-slide-up">
          {destinations.map((destination) => (
            <Card 
              key={destination.name}
              className="group overflow-hidden cursor-pointer hover:shadow-card-hover transition-all duration-300"
            >
              <div className="relative h-40 md:h-48 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white">
                    <MapPin className="h-4 w-4" />
                    <h3 className="font-bold text-lg">{destination.name}</h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickDestinations;
