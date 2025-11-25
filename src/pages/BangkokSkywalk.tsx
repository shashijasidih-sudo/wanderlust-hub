import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Building2, MapPin, Clock, IndianRupee } from "lucide-react";

const BangkokSkywalk = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="relative h-[400px] bg-gradient-to-r from-primary to-primary/80">
          <div className="absolute inset-0 bg-black/30" />
          <div className="container relative h-full flex items-center justify-center text-center px-4">
            <div className="text-white">
              <Building2 className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Bangkok Mahanakhon Skywalk</h1>
              <p className="text-xl md:text-2xl">Thailand's highest observation deck with 360° views</p>
            </div>
          </div>
        </div>

        <div className="container px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">About This Experience</h2>
              <p className="text-muted-foreground mb-4">
                Stand 314 meters above Bangkok on Thailand's highest observation deck. Experience the thrilling 
                glass floor walkway and enjoy breathtaking 360-degree panoramic views of the city.
              </p>
              <p className="text-muted-foreground mb-4">
                King Power Mahanakhon offers three levels of stunning views, including an indoor observatory, 
                rooftop bar, and the famous glass tray that lets you see straight down to the ground below.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span><strong>Duration:</strong> 1-2 hours (flexible timing)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span><strong>Location:</strong> King Power Mahanakhon Building</span>
                </div>
                <div className="flex items-center gap-3">
                  <IndianRupee className="w-5 h-5 text-primary" />
                  <span><strong>Price:</strong> Starting from ₹28 per person</span>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-2xl font-bold mb-4">What's Included</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Fast-track entry ticket</li>
                <li>✓ 74th floor indoor observatory</li>
                <li>✓ 78th floor rooftop access</li>
                <li>✓ Glass tray experience</li>
                <li>✓ 360° panoramic views</li>
                <li>✓ Digital photo package</li>
                <li>✓ Souvenir shop access</li>
                <li>✓ Audio guide available</li>
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
                <h4 className="font-semibold mb-2">Glass Tray Walk</h4>
                <p className="text-sm text-muted-foreground">Walk on transparent glass 314m above ground</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Rooftop Bar</h4>
                <p className="text-sm text-muted-foreground">Enjoy drinks with spectacular city views</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Sunset Views</h4>
                <p className="text-sm text-muted-foreground">Perfect timing for golden hour photography</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BangkokSkywalk;
