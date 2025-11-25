import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Castle, MapPin, Clock, IndianRupee } from "lucide-react";

const AtlantisPalm = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="relative h-[400px] bg-gradient-to-r from-primary to-primary/80">
          <div className="absolute inset-0 bg-black/30" />
          <div className="container relative h-full flex items-center justify-center text-center px-4">
            <div className="text-white">
              <Castle className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Atlantis, The Palm</h1>
              <p className="text-xl md:text-2xl">Dubai's most iconic resort and waterpark destination</p>
            </div>
          </div>
        </div>

        <div className="container px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">About This Experience</h2>
              <p className="text-muted-foreground mb-4">
                Experience Atlantis, The Palm - Dubai's most spectacular resort featuring Aquaventure Waterpark, 
                The Lost Chambers Aquarium, and world-class dining. Perfect for families and thrill-seekers.
              </p>
              <p className="text-muted-foreground mb-4">
                Enjoy record-breaking water slides, interact with marine animals, explore underwater ruins, 
                and relax on the private beach. An unforgettable day of adventure and entertainment awaits.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span><strong>Duration:</strong> Full Day (flexible timing)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span><strong>Location:</strong> The Palm Jumeirah, Dubai</span>
                </div>
                <div className="flex items-center gap-3">
                  <IndianRupee className="w-5 h-5 text-primary" />
                  <span><strong>Price:</strong> Starting from ₹95 per person</span>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-2xl font-bold mb-4">What's Included</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Aquaventure Waterpark access</li>
                <li>✓ Lost Chambers Aquarium entry</li>
                <li>✓ Private beach access</li>
                <li>✓ All water slides & attractions</li>
                <li>✓ Wave pool and lazy river</li>
                <li>✓ Locker facilities</li>
                <li>✓ Life jackets included</li>
                <li>✓ Free WiFi access</li>
              </ul>
              
              <Button className="w-full mt-6" size="lg">
                Book Now
              </Button>
            </div>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Experience Highlights</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Aquaventure</h4>
                <p className="text-sm text-muted-foreground">30+ thrilling water slides and attractions</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Lost Chambers</h4>
                <p className="text-sm text-muted-foreground">65,000 marine animals in themed aquarium</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Private Beach</h4>
                <p className="text-sm text-muted-foreground">700 meters of pristine beachfront</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AtlantisPalm;
