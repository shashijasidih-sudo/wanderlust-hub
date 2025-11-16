import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Palmtree, MapPin, Clock, DollarSign } from "lucide-react";

const SentosaIsland = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="relative h-[400px] bg-gradient-to-r from-primary to-primary/80">
          <div className="absolute inset-0 bg-black/30" />
          <div className="container relative h-full flex items-center justify-center text-center px-4">
            <div className="text-white">
              <Palmtree className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Sentosa Island Tours</h1>
              <p className="text-xl md:text-2xl">Singapore's premier island resort getaway</p>
            </div>
          </div>
        </div>

        <div className="container px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">About This Tour</h2>
              <p className="text-muted-foreground mb-4">
                Discover Sentosa Island, Singapore's ultimate entertainment destination. From pristine beaches to 
                world-class attractions, this island paradise offers something for everyone.
              </p>
              <p className="text-muted-foreground mb-4">
                Visit Universal Studios Singapore, S.E.A. Aquarium, Adventure Cove Waterpark, and more. 
                Enjoy beautiful beaches, exciting rides, and spectacular shows all in one place.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span><strong>Duration:</strong> Full Day (8-10 hours)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span><strong>Meeting Point:</strong> Sentosa Gateway</span>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <span><strong>Price:</strong> Starting from $95 per person</span>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-2xl font-bold mb-4">What's Included</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Cable car ride tickets</li>
                <li>✓ Sentosa Island entrance</li>
                <li>✓ Beach access</li>
                <li>✓ Professional guide</li>
                <li>✓ Complimentary refreshments</li>
                <li>✓ Photo opportunities</li>
                <li>✓ Beach activities</li>
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
                <h4 className="font-semibold mb-2">Universal Studios</h4>
                <p className="text-sm text-muted-foreground">Experience thrilling rides and shows</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">S.E.A. Aquarium</h4>
                <p className="text-sm text-muted-foreground">Explore the underwater world</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Beach Activities</h4>
                <p className="text-sm text-muted-foreground">Relax on pristine sandy beaches</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SentosaIsland;
