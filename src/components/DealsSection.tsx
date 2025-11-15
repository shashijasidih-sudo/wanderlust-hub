import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Star } from "lucide-react";

const deals = [
  {
    title: "Bali Adventure Package",
    location: "Bali, Indonesia",
    originalPrice: 599,
    salePrice: 399,
    discount: 33,
    rating: 4.8,
    reviews: 1234,
    timeLeft: "2 days left",
  },
  {
    title: "Dubai Desert Safari",
    location: "Dubai, UAE",
    originalPrice: 299,
    salePrice: 199,
    discount: 33,
    rating: 4.9,
    reviews: 856,
    timeLeft: "5 hours left",
  },
  {
    title: "Iceland Northern Lights Tour",
    location: "Reykjavik, Iceland",
    originalPrice: 899,
    salePrice: 649,
    discount: 28,
    rating: 4.7,
    reviews: 542,
    timeLeft: "1 day left",
  },
];

const DealsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex justify-between items-center mb-12 animate-fade-in">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Hot Deals & Promotions</h2>
            <p className="text-muted-foreground text-lg">
              Limited time offers - Book now and save big!
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            See All Deals
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {deals.map((deal) => (
            <div 
              key={deal.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary to-accent">
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground font-bold">
                  {deal.discount}% OFF
                </Badge>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-medium">{deal.timeLeft}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {deal.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{deal.location}</p>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="font-medium">{deal.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({deal.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-sm text-muted-foreground line-through">
                      ${deal.originalPrice}
                    </span>
                    <span className="text-2xl font-bold text-accent ml-2">
                      ${deal.salePrice}
                    </span>
                  </div>
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Button variant="outline">See All Deals</Button>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
