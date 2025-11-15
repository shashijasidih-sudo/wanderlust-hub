const reels = [
  {
    id: "DQoVXxIk2aW",
    embedUrl: "https://www.instagram.com/reel/DQoVXxIk2aW/embed/",
  },
  {
    id: "DQZZV-VDBXA",
    embedUrl: "https://www.instagram.com/reel/DQZZV-VDBXA/embed/",
  },
  {
    id: "DPYj5QqE0Mm",
    embedUrl: "https://www.instagram.com/reel/DPYj5QqE0Mm/embed/",
  },
  {
    id: "DQwbV7ck4j8",
    embedUrl: "https://www.instagram.com/reel/DQwbV7ck4j8/embed/",
  },
];

import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const InstaStories = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Insta Stories</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Follow our adventures and get inspired for your next journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up mb-8">
          {reels.map((reel) => (
            <div key={reel.id} className="relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="aspect-[9/16] bg-muted">
                <iframe
                  src={reel.embedUrl}
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency
                  allow="encrypted-media"
                  title={`Instagram Reel ${reel.id}`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Button 
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
          >
            <a 
              href="https://www.instagram.com/yellodaetrails/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Follow Us on Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstaStories;
