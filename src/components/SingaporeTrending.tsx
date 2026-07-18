import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import SafeImage from "./SafeImage";
import gardensBay from "@/assets/singapore-gardens-bay-night-1.jpg";
import marinaBay from "@/assets/singapore-marina-bay-sands-night-1.jpg";
import universalStudios from "@/assets/singapore-universal-studios.jpg";
import nightSafari from "@/assets/singapore-night-safari.jpg";

const trendingItems = [
  {
    title: "Best Things to Do in Singapore (2026 Guide)",
    image: marinaBay,
    slug: "/singapore/things-to-do/",
  },
  {
    title: "Best Singapore Attraction Tickets for Indian Travelers",
    image: gardensBay,
    slug: "/blog/best-singapore-attractions/",
  },
  {
    title: "Top Things to Do in Singapore",
    image: universalStudios,
    slug: "/blog/top-things-singapore/",
  },
  {
    title: "Singapore Night Safari Booking Guide",
    image: nightSafari,
    slug: "/blog/night-safari-singapore-guide/",
  },
];

const SingaporeTrending = () => {
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
              className="group overflow-hidden hover:shadow-card-hover transition-all duration-300"
            >
              <Link to={item.slug} aria-label={item.title} className="block">
                <div className="relative h-52 overflow-hidden">
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={416}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
              </Link>
              <div className="p-4 flex flex-col gap-3">
                <h3 className="font-semibold text-base line-clamp-2 group-hover:text-primary transition-colors">
                  <Link to={item.slug} className="hover:text-primary">
                    {item.title}
                  </Link>
                </h3>
                <Button
                  asChild
                  size="sm"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <Link to={item.slug}>Explore Now</Link>
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
