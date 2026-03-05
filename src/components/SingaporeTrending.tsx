import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import gardensBay from "@/assets/singapore-gardens-bay-night-1.jpg";
import marinaBay from "@/assets/singapore-marina-bay-sands-night-1.jpg";
import universalStudios from "@/assets/singapore-universal-studios.jpg";
import nightSafari from "@/assets/singapore-night-safari.jpg";

const trendingItems = [
  {
    title: "Best Singapore Attraction Tickets for Indian Travelers",
    image: gardensBay,
    slug: "/singapore/smart-guides",
  },
  {
    title: "Top Things to Do in Singapore",
    image: marinaBay,
    slug: "/singapore",
  },
  {
    title: "Universal Studios Singapore Ticket Guide",
    image: universalStudios,
    slug: "/universal-studios-weekday",
  },
  {
    title: "Singapore Night Safari Booking Guide",
    image: nightSafari,
    slug: "/night-safari-tickets",
  },
];

const SingaporeTrending = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Singapore Trending Activities
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-7xl mx-auto">
          {trendingItems.map((item) => (
            <Card
              key={item.title}
              className="group overflow-hidden cursor-pointer hover:shadow-card-hover transition-all duration-300"
              onClick={() => navigate(item.slug)}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="p-4 flex flex-col gap-3">
                <h3 className="font-semibold text-base line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <Button
                  size="sm"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(item.slug);
                  }}
                >
                  Explore Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SingaporeTrending;
