import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Anchor, MapPin, Clock, IndianRupee } from "lucide-react";

const JamesBondIsland = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="relative h-[400px] bg-gradient-to-r from-primary to-primary/80">
          <div className="absolute inset-0 bg-black/30" />
          <div className="container relative h-full flex items-center justify-center text-center px-4">
            <div className="text-white">
              <Anchor className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-6xl font-bold mb-4">James Bond Island Tours</h1>
              <p className="text-xl md:text-2xl">Explore the famous limestone karst from "The Man with the Golden Gun"</p>
            </div>
          </div>
        </div>

        <div className="container px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">About This Tour</h2>
              <p className="text-muted-foreground mb-4">
                Visit Khao Phing Kan, better known as James Bond Island, made famous by the 1974 James Bond movie 
                "The Man with the Golden Gun." Marvel at the iconic limestone rock that rises vertically from the sea.
              </p>
              <p className="text-muted-foreground mb-4">
                Explore Phang Nga Bay's stunning limestone cliffs, hidden caves, and emerald waters. 
                Enjoy canoeing through sea caves and visit the Muslim fishing village built on stilts.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span><strong>Duration:</strong> Full Day (7-9 hours)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span><strong>Pickup Location:</strong> Phuket hotels</span>
                </div>
                <div className="flex items-center gap-3">
                  <IndianRupee className="w-5 h-5 text-primary" />
                  <span><strong>Price:</strong> Starting from ₹75 per person</span>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-2xl font-bold mb-4">What's Included</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Hotel pickup and drop-off</li>
                <li>✓ Long-tail boat ride</li>
                <li>✓ Professional guide</li>
                <li>✓ Lunch at local restaurant</li>
                <li>✓ Canoeing equipment</li>
                <li>✓ National park entrance fees</li>
                <li>✓ Life jackets</li>
                <li>✓ Insurance</li>
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
                <h4 className="font-semibold mb-2">James Bond Island</h4>
                <p className="text-sm text-muted-foreground">See the iconic limestone rock pillar</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Sea Canoeing</h4>
                <p className="text-sm text-muted-foreground">Paddle through caves and lagoons</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Koh Panyee</h4>
                <p className="text-sm text-muted-foreground">Visit the floating Muslim village</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JamesBondIsland;
