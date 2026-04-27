import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";

import bangkokCity1 from "@/assets/bangkok-city-1.jpg";
import bangkokSkywalk from "@/assets/bangkok-skywalk-1.jpg";
import bangkokTemple1 from "@/assets/bangkok-temple-1.jpg";
import bangkokRiverside from "@/assets/bangkok-riverside-temple-1.jpg";
import grandPalaceWatArun from "@/assets/grand-palace-wat-arun.jpg";
import cruiseNight1 from "@/assets/cruise-night-1.jpg";
import floatingMarket1 from "@/assets/floating-market-daylight-1.jpg";
import bangkokPagodaSunset from "@/assets/bangkok-pagoda-sunset-1.jpg";

interface BangkokGuide {
  title: string;
  description: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  link: string;
}

const bangkokGuides: BangkokGuide[] = [
  {
    title: "Bangkok Activities Booking Guide",
    description:
      "Plan the perfect Bangkok itinerary — temples, cruises, markets and night tours with insider tips.",
    category: "Bangkok Guide",
    image: bangkokCity1,
    date: "Mar 1, 2026",
    readTime: "9 min read",
    link: "/blog/bangkok-activities-guide",
  },
  {
    title: "Airport Transfer Booking Guide Thailand",
    description:
      "BKK & DMK airport transfers — routes, vehicle types, INR pricing and meet-and-greet tips.",
    category: "Transfers",
    image: bangkokSkywalk,
    date: "Feb 19, 2026",
    readTime: "8 min read",
    link: "/blog/airport-transfer-booking-thailand",
  },
  {
    title: "Best Thailand Activities to Book Online",
    description:
      "Top-rated tours across Bangkok, Phuket, Krabi and Pattaya — what's worth booking before you fly.",
    category: "Top Picks",
    image: grandPalaceWatArun,
    date: "Feb 25, 2026",
    readTime: "10 min read",
    link: "/blog/best-thailand-activities",
  },
  {
    title: "Complete Guide to Thailand Food Experiences",
    description:
      "Bangkok street food, riverside dining, floating markets and rooftop restaurants — all in one guide.",
    category: "Food Tours",
    image: floatingMarket1,
    date: "Mar 5, 2026",
    readTime: "11 min read",
    link: "/blog/thailand-food-experiences",
  },
  {
    title: "Bangkok's Iconic Temple Trail",
    description:
      "Wat Arun, Wat Pho, Wat Traimit and the Grand Palace — what to see and how to plan the day.",
    category: "Culture",
    image: bangkokTemple1,
    date: "Feb 28, 2026",
    readTime: "9 min read",
    link: "/thailand/bangkok/wat-arun-pho-traimit",
  },
  {
    title: "Chao Phraya Dinner Cruise Experience",
    description:
      "Compare Princess, Viva Alangka and Valentine cruises — pricing, menus and best seats.",
    category: "Cruises",
    image: cruiseNight1,
    date: "Mar 2, 2026",
    readTime: "7 min read",
    link: "/thailand/bangkok/chao-phraya-princess-private",
  },
  {
    title: "Ayutthaya & Sunset Cruise from Bangkok",
    description:
      "UNESCO temples by day and a Chao Phraya sunset cruise to round off the trip.",
    category: "Day Trips",
    image: bangkokPagodaSunset,
    date: "Feb 18, 2026",
    readTime: "10 min read",
    link: "/thailand/bangkok/ayutthaya-sunset-cruise",
  },
  {
    title: "Riverside Bangkok: Where to Stay & What to Do",
    description:
      "From Asiatique to IconSiam — the best riverside spots, hotels and easy transfer tips.",
    category: "Bangkok Guide",
    image: bangkokRiverside,
    date: "Feb 12, 2026",
    readTime: "8 min read",
    link: "/blog/bangkok-activities-guide",
  },
];

const BangkokSmartGuides = () => {
  // Pick 4 random Bangkok guides per render
  const featured = useMemo(() => {
    const shuffled = [...bangkokGuides].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
  }, []);

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-background to-secondary/10">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Bangkok Smart Guides
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Insider blogs, itineraries and booking tips for an effortless Bangkok trip
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
          {featured.map((guide) => (
            <Link
              key={guide.title}
              to={guide.link}
              className="group bg-card rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-border"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={guide.image}
                  alt={guide.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
                  {guide.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-base text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {guide.description}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {guide.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {guide.readTime}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mt-3 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  Read Guide <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/thailand/destination-guides"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            View all Thailand Smart Guides <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BangkokSmartGuides;
