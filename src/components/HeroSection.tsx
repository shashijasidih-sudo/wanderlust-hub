import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import heroImage1 from "@/assets/hero-thailand-beach.webp";
import heroImage1Mobile from "@/assets/hero-thailand-beach-mobile.webp";
import heroImage2 from "@/assets/hero-thailand-temple.webp";
import heroImage2Mobile from "@/assets/hero-thailand-temple-mobile.webp";
import heroImage3 from "@/assets/hero-thailand-adventure.webp";
import heroImage3Mobile from "@/assets/hero-thailand-adventure-mobile.webp";
import heroImage4 from "@/assets/hero-thailand-island.webp";
import heroImage4Mobile from "@/assets/hero-thailand-island-mobile.webp";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const heroImages = [
  { full: heroImage1, mobile: heroImage1Mobile, alt: "Thailand beach hero" },
  { full: heroImage2, mobile: heroImage2Mobile, alt: "Thailand temple hero" },
  { full: heroImage3, mobile: heroImage3Mobile, alt: "Thailand adventure hero" },
  { full: heroImage4, mobile: heroImage4Mobile, alt: "Thailand island hero" },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [extraImagesReady, setExtraImagesReady] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [travelDate, setTravelDate] = useState<Date>();

  // Defer mounting non-LCP hero images until after first paint / idle so they
  // don't compete with the LCP image for bandwidth on mobile.
  useEffect(() => {
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout?: number }) => number;
    };
    let timer: number | undefined;
    if (w.requestIdleCallback) {
      w.requestIdleCallback(() => setExtraImagesReady(true), { timeout: 2500 });
    } else {
      timer = window.setTimeout(() => setExtraImagesReady(true), 1500);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!extraImagesReady) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [extraImagesReady]);

  const handleStartAdventure = () => {
    if (selectedCity) {
      navigate(selectedCity);
    }
  };

  return (
    <section className="relative h-[600px] md:h-[700px] w-full overflow-hidden">
      {/* Hero images with crossfade — <picture> for responsive WebP, LCP-discoverable */}
      {heroImages.map((image, index) => {
        if (index !== 0 && !extraImagesReady) return null;
        return (
          <picture key={index}>
            <source media="(max-width: 768px)" srcSet={image.mobile} />
            <img
              src={image.full}
              alt={image.alt}
              width={1920}
              height={1080}
              fetchPriority={index === 0 ? "high" : "low"}
              loading={index === 0 ? "eager" : "lazy"}
              decoding={index === 0 ? "sync" : "async"}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
              style={{ opacity: index === currentImageIndex ? 1 : 0 }}
            />
          </picture>
        );
      })}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      {/* Image Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
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
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="w-full h-[52px] text-base">
                  <SelectValue placeholder="Select a city to explore activities..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="/thailand">Thailand (All Cities)</SelectItem>
                  <SelectItem value="/thailand/bangkok">Bangkok</SelectItem>
                  <SelectItem value="/thailand/pattaya">Pattaya</SelectItem>
                  <SelectItem value="/thailand/phuket">Phuket</SelectItem>
                  <SelectItem value="/thailand/krabi">Krabi</SelectItem>
                  <SelectItem value="/singapore">Singapore</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full md:w-[40%]">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full h-[52px] justify-start text-left text-base font-normal",
                      !travelDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-5 w-5 text-muted-foreground flex-shrink-0" />
                    {travelDate ? format(travelDate, "PPP") : "Select travel date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={travelDate}
                    onSelect={setTravelDate}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <Button 
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold h-12 text-lg disabled:bg-orange-500 disabled:opacity-100 disabled:cursor-not-allowed"
            onClick={handleStartAdventure}
            disabled={!selectedCity}
          >
            Start Your Adventure
          </Button>
        </div>

        {/* Quick destination shortcuts */}
        <div className="mt-8 animate-fade-in">
          {/* Mobile-only label */}
          <p className="text-center text-xs uppercase tracking-widest text-white/80 mb-3 md:hidden">
            Things to do in
          </p>
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
            {[
              { mobile: "Bangkok", desktop: "Things to Do in Bangkok", to: "/thailand/bangkok/things-to-do" },
              { mobile: "Pattaya", desktop: "Things to Do in Pattaya", to: "/thailand/pattaya/things-to-do" },
              { mobile: "Phuket", desktop: "Things to Do in Phuket", to: "/thailand/phuket/things-to-do" },
              { mobile: "Krabi", desktop: "Things to Do in Krabi", to: "/thailand/krabi/things-to-do" },
              { mobile: "Singapore", desktop: "Things to Do in Singapore", to: "/singapore/things-to-do" },
            ].map((item) => (
              <Button
                key={item.to}
                variant="secondary"
                size="sm"
                className="bg-white/90 hover:bg-white active:bg-primary active:text-primary-foreground active:scale-95 hover:scale-105 hover:shadow-md backdrop-blur-sm rounded-full text-xs md:text-sm h-8 md:h-10 px-3 md:px-4 transition-all duration-200 touch-manipulation focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                onClick={() => navigate(item.to)}
              >
                <span className="md:hidden">{item.mobile}</span>
                <span className="hidden md:inline">{item.desktop}</span>
              </Button>
            ))}
            <Button
              variant="secondary"
              size="sm"
              className="bg-white/90 hover:bg-white active:bg-primary active:text-primary-foreground active:scale-95 hover:scale-105 hover:shadow-md backdrop-blur-sm rounded-full text-xs md:text-sm h-8 md:h-10 px-3 md:px-4 transition-all duration-200 touch-manipulation focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              onClick={() => navigate("/thailand/budget-airport-transfers")}
            >
              <span className="md:hidden">TH Transfers</span>
              <span className="hidden md:inline">Thailand Transfers</span>
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="bg-white/90 hover:bg-white active:bg-primary active:text-primary-foreground active:scale-95 hover:scale-105 hover:shadow-md backdrop-blur-sm rounded-full text-xs md:text-sm h-8 md:h-10 px-3 md:px-4 transition-all duration-200 touch-manipulation focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              onClick={() => navigate("/singapore/budget-airport-transfers")}
            >
              <span className="md:hidden">SG Transfers</span>
              <span className="hidden md:inline">Singapore Transfers</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;