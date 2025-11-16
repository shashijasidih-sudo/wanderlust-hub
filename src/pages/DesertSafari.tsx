import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tent, MapPin, Clock, DollarSign } from "lucide-react";

const DesertSafari = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="relative h-[400px] bg-gradient-to-r from-primary to-primary/80">
          <div className="absolute inset-0 bg-black/30" />
          <div className="container relative h-full flex items-center justify-center text-center px-4">
            <div className="text-white">
              <Tent className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Desert Safari</h1>
              <p className="text-xl md:text-2xl">An unforgettable Arabian adventure in the golden dunes</p>
            </div>
          </div>
        </div>

        <div className="container px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">About This Tour</h2>
              <p className="text-muted-foreground mb-4">
                Experience the thrill of dune bashing in 4x4 vehicles, enjoy a stunning desert sunset, 
                and immerse yourself in traditional Bedouin culture at a desert camp.
              </p>
              <p className="text-muted-foreground mb-4">
                Try sandboarding, camel riding, get a henna tattoo, and feast on a delicious BBQ dinner 
                under the stars while watching live entertainment including belly dancing and Tanoura shows.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span><strong>Duration:</strong> 6 hours (Afternoon to Evening)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span><strong>Pickup Location:</strong> Dubai hotels</span>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <span><strong>Price:</strong> Starting from $65 per person</span>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-2xl font-bold mb-4">What's Included</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Hotel pickup and drop-off in 4x4</li>
                <li>✓ Dune bashing experience</li>
                <li>✓ Camel riding</li>
                <li>✓ Sandboarding</li>
                <li>✓ BBQ dinner buffet</li>
                <li>✓ Unlimited soft drinks & water</li>
                <li>✓ Live entertainment shows</li>
                <li>✓ Henna painting</li>
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
                <h4 className="font-semibold mb-2">Dune Bashing</h4>
                <p className="text-sm text-muted-foreground">Thrilling 4x4 ride over sand dunes</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Desert Camp</h4>
                <p className="text-sm text-muted-foreground">Traditional Bedouin-style experience</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Live Shows</h4>
                <p className="text-sm text-muted-foreground">Belly dancing and Tanoura performances</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DesertSafari;
