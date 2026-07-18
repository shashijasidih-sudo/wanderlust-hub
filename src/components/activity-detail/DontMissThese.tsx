import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

import gardensByTheBayImg from "@/assets/singapore-gardens-bay-night-1.jpg";
import nightSafariImg from "@/assets/singapore-night-safari.jpg";
import wingsOfTimeImg from "@/assets/singapore-wings-time.jpg";
import airportTransferImg from "@/assets/singapore-city-tour.jpg";

interface DontMissItem {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}

const items: DontMissItem[] = [
  {
    id: "gardens-by-the-bay",
    title: "Gardens by the Bay",
    description: "Explore the iconic Cloud Forest, Flower Dome and Supertree Grove.",
    image: gardensByTheBayImg,
    slug: "/singapore/gardens-by-the-bay-tickets-and-transfers/",
  },
  {
    id: "night-safari",
    title: "Night Safari",
    description: "World's first nocturnal wildlife park with tram safari after dark.",
    image: nightSafariImg,
    slug: "/singapore/night-safari-singapore-tickets-and-transfers/",
  },
  {
    id: "wings-of-time",
    title: "Wings of Time",
    description: "Sentosa's spectacular outdoor night show with water, lasers and fire.",
    image: wingsOfTimeImg,
    slug: "/singapore/wings-of-time-show-sentosa-tickets/",
  },
  {
    id: "singapore-airport-transfer",
    title: "Singapore Airport Transfer",
    description: "Reliable Changi airport pickup and drop-off for a hassle-free trip.",
    image: airportTransferImg,
    slug: "/singapore/singapore-airport-pickup/",
  },
];

const DontMissThese = () => {
  return (
    <section className="mt-12">
      <div className="flex items-end justify-between mb-4 md:mb-6">
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">Don't Miss These</h2>
          <p className="text-muted-foreground mt-1 text-sm md:text-base">
            Top Singapore experiences to pair with your Universal Studios visit
          </p>
        </div>
        <Link
          to="/singapore/things-to-do/"
          className="hidden sm:inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all"
        >
          View all <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {items.map((item) => (
          <Card
            key={item.id}
            className="group cursor-pointer hover:shadow-card-hover transition-all overflow-hidden"
          >
            <Link to={item.slug}>
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-3 md:p-4">
                <h3 className="font-bold text-sm md:text-base text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm mt-1 line-clamp-2">
                  {item.description}
                </p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>

      <div className="mt-4 sm:hidden">
        <Link
          to="/singapore/things-to-do/"
          className="inline-flex items-center gap-1 text-primary text-sm font-medium"
        >
          View all Singapore activities <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default DontMissThese;
