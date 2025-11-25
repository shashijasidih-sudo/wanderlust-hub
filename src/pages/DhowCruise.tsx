import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Ship, MapPin, Clock, IndianRupee } from "lucide-react";

const DhowCruise = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="relative h-[400px] bg-gradient-to-r from-primary to-primary/80">
          <div className="absolute inset-0 bg-black/30" />
          <div className="container relative h-full flex items-center justify-center text-center px-4">
            <div className="text-white">
              <Ship className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Dhow Night Cruise</h1>
              <p className="text-xl md:text-2xl">Romantic dinner cruise on traditional Arabian dhow</p>
            </div>
          </div>
        </div>

        <div className="container px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">About This Cruise</h2>
              <p className="text-muted-foreground mb-4">
                Experience the magic of Dubai Creek aboard a traditional wooden dhow. Enjoy a romantic dinner cruise 
                with stunning views of the illuminated city skyline as you glide along the historic waterway.
              </p>
              <p className="text-muted-foreground mb-4">
                Feast on an international buffet dinner featuring Arabic and continental cuisine while enjoying 
                live entertainment. The perfect evening for couples, families, or anyone wanting to see Dubai from a unique perspective.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span><strong>Duration:</strong> 2 hours (Evening cruise)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span><strong>Pickup Location:</strong> Dubai hotel pickups</span>
                </div>
                <div className="flex items-center gap-3">
                  <IndianRupee className="w-5 h-5 text-primary" />
                  <span><strong>Price:</strong> Starting from ₹45 per person</span>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-2xl font-bold mb-4">What's Included</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Hotel pickup and drop-off</li>
                <li>✓ 2-hour dhow cruise</li>
                <li>✓ International buffet dinner</li>
                <li>✓ Welcome drinks</li>
                <li>✓ Unlimited soft drinks & water</li>
                <li>✓ Live entertainment (Tanoura show)</li>
                <li>✓ Traditional music</li>
                <li>✓ Air-conditioned lower deck</li>
              </ul>
              
              <Button className="w-full mt-6" size="lg">
                Book Now
              </Button>
            </div>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Cruise Highlights</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Buffet Dinner</h4>
                <p className="text-sm text-muted-foreground">Arabic and international cuisine</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Live Entertainment</h4>
                <p className="text-sm text-muted-foreground">Traditional Tanoura dance performance</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">City Views</h4>
                <p className="text-sm text-muted-foreground">See Dubai's skyline illuminated at night</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DhowCruise;
