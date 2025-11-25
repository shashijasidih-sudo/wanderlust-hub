import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Fish, MapPin, Clock, IndianRupee } from "lucide-react";

const DolphinShow = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="relative h-[400px] bg-gradient-to-r from-primary to-primary/80">
          <div className="absolute inset-0 bg-black/30" />
          <div className="container relative h-full flex items-center justify-center text-center px-4">
            <div className="text-white">
              <Fish className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Dolphin Show</h1>
              <p className="text-xl md:text-2xl">Watch these intelligent creatures perform amazing tricks</p>
            </div>
          </div>
        </div>

        <div className="container px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">About This Show</h2>
              <p className="text-muted-foreground mb-4">
                Witness the incredible intelligence and playful nature of dolphins in this spectacular show. 
                Watch as these magnificent marine mammals perform breathtaking jumps, spins, and synchronized swimming.
              </p>
              <p className="text-muted-foreground mb-4">
                Perfect for families and animal lovers, this educational and entertaining show showcases 
                the special bond between dolphins and their trainers while promoting marine conservation awareness.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span><strong>Duration:</strong> 45 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span><strong>Location:</strong> Marine Park Theater</span>
                </div>
                <div className="flex items-center gap-3">
                  <IndianRupee className="w-5 h-5 text-primary" />
                  <span><strong>Price:</strong> Starting from ₹35 per person</span>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-2xl font-bold mb-4">What's Included</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Reserved seating</li>
                <li>✓ 45-minute dolphin show</li>
                <li>✓ Educational commentary</li>
                <li>✓ Photo opportunities</li>
                <li>✓ Complimentary show program</li>
                <li>✓ Access to marine park</li>
                <li>✓ Meet & greet option available</li>
                <li>✓ Gift shop discounts</li>
              </ul>
              
              <Button className="w-full mt-6" size="lg">
                Book Now
              </Button>
            </div>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Show Highlights</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Acrobatic Jumps</h4>
                <p className="text-sm text-muted-foreground">Watch dolphins leap high out of the water</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Synchronized Swimming</h4>
                <p className="text-sm text-muted-foreground">Marvel at perfectly coordinated routines</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Interactive Segments</h4>
                <p className="text-sm text-muted-foreground">Educational and entertaining experiences</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DolphinShow;
