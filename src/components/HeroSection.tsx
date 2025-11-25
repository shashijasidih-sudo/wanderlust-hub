import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-beach.jpg";
import SearchInput from "./SearchInput";

const HeroSection = () => {
  return <section className="relative h-[600px] md:h-[700px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative container h-full flex flex-col items-center justify-center text-center px-4 md:px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in">
          Explore your Destination Activities
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl animate-slide-up">
          Find exclusive tours, activities, and transfer deals all in one place
        </p>

        {/* Search Box */}
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-card-hover p-4 md:p-6 animate-scale-in">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="w-full md:w-[60%]">
              <SearchInput 
                placeholder="Search destination, activity, city..." 
                className="w-full"
              />
            </div>
            <div className="w-full md:w-[40%] flex items-center gap-2 border rounded-lg px-4 py-3">
              <Calendar className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              <Input type="date" className="border-0 p-0 focus-visible:ring-0" />
            </div>
          </div>
          <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 text-lg">
            Start Your Adventure
          </Button>
        </div>

        {/* Categories */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center animate-fade-in">
          {["Popular Destinations", "Hot Deals", "Trending Activities", "Tours & Packages"].map(category => <Button key={category} variant="secondary" className="bg-white/90 hover:bg-white backdrop-blur-sm">
              {category}
            </Button>)}
        </div>
      </div>
    </section>;
};
export default HeroSection;