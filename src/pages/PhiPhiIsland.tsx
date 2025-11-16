import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Ship, MapPin, Clock, DollarSign } from "lucide-react";

const PhiPhiIsland = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="relative h-[400px] bg-gradient-to-r from-primary to-primary/80">
          <div className="absolute inset-0 bg-black/30" />
          <div className="container relative h-full flex items-center justify-center text-center px-4">
            <div className="text-white">
              <Ship className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Phi Phi Island Tours</h1>
              <p className="text-xl md:text-2xl">Experience paradise with crystal-clear waters and stunning limestone cliffs</p>
            </div>
          </div>
        </div>

        <div className="container px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">About This Tour</h2>
              <p className="text-muted-foreground mb-4">
                Discover the breathtaking beauty of Phi Phi Islands, one of Thailand's most iconic destinations. 
                This full-day tour takes you to pristine beaches, crystal-clear waters, and spectacular viewpoints.
              </p>
              <p className="text-muted-foreground mb-4">
                Visit Maya Bay, made famous by the movie "The Beach," snorkel in vibrant coral reefs, 
                and enjoy a delicious lunch on the beach. Perfect for families, couples, and adventure seekers alike.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span><strong>Duration:</strong> Full Day (8-10 hours)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span><strong>Pickup Location:</strong> Hotel pickups available</span>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <span><strong>Price:</strong> Starting from $85 per person</span>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-2xl font-bold mb-4">What's Included</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Hotel pickup and drop-off</li>
                <li>✓ Speedboat transportation</li>
                <li>✓ Professional English-speaking guide</li>
                <li>✓ Buffet lunch on the beach</li>
                <li>✓ Snorkeling equipment</li>
                <li>✓ Life jackets</li>
                <li>✓ National park fees</li>
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
                <h4 className="font-semibold mb-2">Maya Bay</h4>
                <p className="text-sm text-muted-foreground">Visit the iconic beach from "The Beach" movie</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Pileh Lagoon</h4>
                <p className="text-sm text-muted-foreground">Swim in the emerald green lagoon surrounded by cliffs</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Monkey Beach</h4>
                <p className="text-sm text-muted-foreground">Meet the playful monkeys in their natural habitat</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PhiPhiIsland;
