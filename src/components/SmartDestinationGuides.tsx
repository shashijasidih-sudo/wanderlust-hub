import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import thailandImage from "@/assets/destination-tokyo.jpg";
import dubaiImage from "@/assets/destination-newyork.jpg";
import singaporeImage from "@/assets/destination-maldives.jpg";
import netherlandsImage from "@/assets/destination-paris.jpg";

const guides = [
  {
    name: "Thailand",
    description: "Beaches, Temples & Street Food",
    image: thailandImage,
    link: "/thailand"
  },
  {
    name: "Dubai",
    description: "Luxury, Desert & Modern Marvels",
    image: dubaiImage,
    link: "/dubai"
  },
  {
    name: "Singapore",
    description: "Gardens, Culture & Urban Delights",
    image: singaporeImage,
    link: "#singapore"
  },
  {
    name: "Netherlands",
    description: "Canals, Tulips & Art",
    image: netherlandsImage,
    link: "#netherlands"
  },
];

const SmartDestinationGuides = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-background to-secondary/10">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Smart Destination Guides
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover curated travel guides with insider tips and must-see attractions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
          {guides.map((guide) => (
            <Link
              key={guide.name}
              to={guide.link}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={guide.image}
                  alt={guide.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-white font-bold text-2xl mb-2 group-hover:text-primary transition-colors">
                    {guide.name}
                  </h3>
                  <p className="text-white/90 text-sm mb-3">{guide.description}</p>
                  <div className="flex items-center gap-2 text-white/90 group-hover:text-white transition-colors">
                    <span className="text-sm font-medium">Explore Guide</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartDestinationGuides;
