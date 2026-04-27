import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCurrency } from "@/contexts/CurrencyContext";
import cruiseNight1 from "@/assets/cruise-night-1.jpg";
import floatingMarket1 from "@/assets/floating-market-daylight-1.jpg";

interface SuggestedToursProps {
  currentCity: string;
}

const SuggestedTours = ({ currentCity }: SuggestedToursProps) => {
  const navigate = useNavigate();
  const { formatPrice } = useCurrency();

  const suggestions = {
    bangkok: [
      {
        title: "Bangkok Temple Walking Tour",
        price: 2300,
        image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=400&h=300&fit=crop",
        link: "/thailand/bangkok"
      },
      {
        title: "Ayutthiya Day Tour",
        price: 5000,
        image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400&h=300&fit=crop",
        link: "/thailand/bangkok"
      },
      {
        title: "Floating Market Experience",
        price: 2800,
        image: floatingMarket1,
        link: "/thailand/bangkok"
      },
      {
        title: "Chaophraya Dinner Cruise",
        price: 3500,
        image: cruiseNight1,
        link: "/thailand/bangkok"
      },
    ]
  };

  const tours = suggestions[currentCity as keyof typeof suggestions] || suggestions.bangkok;

  return (
    <div className="mt-12 space-y-6">
      <h2 className="text-3xl font-bold">You Might Also Like</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tours.map((tour, index) => (
          <Card
            key={index}
            className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden"
            onClick={() => navigate(tour.link)}
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-4 space-y-3">
              <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                {tour.title}
              </h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">from</p>
                  <p className="text-lg font-bold text-primary">
                    {formatPrice(tour.price)}
                  </p>
                </div>
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90"
                >
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SuggestedTours;
