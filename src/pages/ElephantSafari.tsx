import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { TreePine, MapPin, Clock, IndianRupee } from "lucide-react";

const ElephantSafari = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="relative h-[400px] bg-gradient-to-r from-primary to-primary/80">
          <div className="absolute inset-0 bg-black/30" />
          <div className="container relative h-full flex items-center justify-center text-center px-4">
            <div className="text-white">
              <TreePine className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Elephant Safari</h1>
              <p className="text-xl md:text-2xl">Ethical elephant experience in the jungle</p>
            </div>
          </div>
        </div>

        <div className="container px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">About This Experience</h2>
              <p className="text-muted-foreground mb-4">
                Enjoy an ethical elephant sanctuary experience where you can interact with rescued elephants 
                in their natural habitat. Learn about elephant care and conservation while supporting responsible tourism.
              </p>
              <p className="text-muted-foreground mb-4">
                Feed, bathe, and walk alongside these gentle giants. Our sanctuary provides a retirement home 
                for elephants rescued from harsh working conditions, offering them a peaceful life in the jungle.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span><strong>Duration:</strong> Half Day (4-5 hours)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span><strong>Pickup Location:</strong> Hotel pickups available</span>
                </div>
                <div className="flex items-center gap-3">
                  <IndianRupee className="w-5 h-5 text-primary" />
                  <span><strong>Price:</strong> Starting from ₹70 per person</span>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-2xl font-bold mb-4">What's Included</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Hotel pickup and drop-off</li>
                <li>✓ Elephant feeding session</li>
                <li>✓ Mud bath with elephants</li>
                <li>✓ River bathing experience</li>
                <li>✓ Traditional Thai lunch</li>
                <li>✓ Professional guide</li>
                <li>✓ Conservation talk</li>
                <li>✓ Donation to sanctuary</li>
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
                <h4 className="font-semibold mb-2">Feed Elephants</h4>
                <p className="text-sm text-muted-foreground">Hand-feed bananas and sugarcane</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Bathing Time</h4>
                <p className="text-sm text-muted-foreground">Help wash elephants in the river</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Ethical Tourism</h4>
                <p className="text-sm text-muted-foreground">Support elephant welfare and conservation</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ElephantSafari;
