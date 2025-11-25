import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Droplet, MapPin, Clock, IndianRupee } from "lucide-react";

const HotSpringEmeralPool = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="relative h-[400px] bg-gradient-to-r from-primary to-primary/80">
          <div className="absolute inset-0 bg-black/30" />
          <div className="container relative h-full flex items-center justify-center text-center px-4">
            <div className="text-white">
              <Droplet className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Hot Spring & Emerald Pool</h1>
              <p className="text-xl md:text-2xl">Relax in natural thermal waters surrounded by rainforest</p>
            </div>
          </div>
        </div>

        <div className="container px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">About This Tour</h2>
              <p className="text-muted-foreground mb-4">
                Discover the stunning Emerald Pool (Sa Morakot), a natural crystal-clear pool in the heart of 
                the tropical rainforest. Relax in the warm waters of natural hot springs surrounded by lush vegetation.
              </p>
              <p className="text-muted-foreground mb-4">
                Take a nature walk through the rainforest, swim in the magical blue-green waters of the Emerald Pool, 
                and soak in therapeutic hot spring pools. Perfect for nature lovers seeking relaxation and adventure.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span><strong>Duration:</strong> Half Day (5-6 hours)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span><strong>Pickup Location:</strong> Krabi hotels</span>
                </div>
                <div className="flex items-center gap-3">
                  <IndianRupee className="w-5 h-5 text-primary" />
                  <span><strong>Price:</strong> Starting from ₹50 per person</span>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-2xl font-bold mb-4">What's Included</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Hotel pickup and drop-off</li>
                <li>✓ Professional guide</li>
                <li>✓ Emerald Pool entrance</li>
                <li>✓ Hot spring access</li>
                <li>✓ Rainforest nature walk</li>
                <li>✓ Lunch at local restaurant</li>
                <li>✓ Towels and lockers</li>
                <li>✓ Travel insurance</li>
              </ul>
              
              <Button className="w-full mt-6" size="lg">
                Book Now
              </Button>
            </div>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Tour Highlights</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Emerald Pool</h4>
                <p className="text-sm text-muted-foreground">Swim in crystal-clear natural waters</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Hot Springs</h4>
                <p className="text-sm text-muted-foreground">Relax in therapeutic thermal waters</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Nature Walk</h4>
                <p className="text-sm text-muted-foreground">Explore pristine rainforest trails</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HotSpringEmeralPool;
