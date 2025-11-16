import { Search, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-beach.jpg";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase();
    
    // Navigate based on search query
    if (query.includes('bangkok')) navigate('/bangkok');
    else if (query.includes('pattaya')) navigate('/pattaya');
    else if (query.includes('phuket')) navigate('/phuket');
    else if (query.includes('krabi')) navigate('/krabi');
    else if (query.includes('dubai')) navigate('/dubai');
    else if (query.includes('thailand')) navigate('/thailand');
  };
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
        <form onSubmit={handleSearch} className="w-full max-w-4xl bg-white rounded-2xl shadow-card-hover p-4 md:p-6 animate-scale-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex items-center gap-2 border rounded-lg px-4 py-3">
              <Search className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              <Input 
                placeholder="Search destination (Bangkok, Phuket, Dubai...)" 
                className="border-0 p-0 focus-visible:ring-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 border rounded-lg px-4 py-3">
              <Calendar className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              <Input type="date" className="border-0 p-0 focus-visible:ring-0" />
            </div>
          </div>
          <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 text-lg">
            Start Your Adventure
          </Button>
        </form>

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