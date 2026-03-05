import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import heroBeach from "@/assets/hero-thailand-beach.jpg";
import phiPhi from "@/assets/phi-phi-3.jpg";
import bangkokTemple from "@/assets/bangkok-temple-3.jpg";
import pattayaBeach from "@/assets/pattaya-tropical-beach-1.jpg";

const trendingItems = [
  {
    title: "Best Thailand Activities to Book Online",
    image: heroBeach,
    slug: "/thailand/smart-guides",
  },
  {
    title: "Top Phuket Island Tours for Indian Travelers",
    image: phiPhi,
    slug: "/phuket",
  },
  {
    title: "Bangkok Activities Booking Guide",
    image: bangkokTemple,
    slug: "/bangkok",
  },
  {
    title: "Best Pattaya Activities for First-Time Visitors",
    image: pattayaBeach,
    slug: "/pattaya",
  },
];

const ThailandTrending = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10 md:py-14 bg-muted/30">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Thailand Trending Activities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
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

export default ThailandTrending;
