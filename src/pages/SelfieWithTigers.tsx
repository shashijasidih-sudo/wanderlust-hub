import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Camera, MapPin, Clock, IndianRupee } from "lucide-react";

const SelfieWithTigers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="relative h-[400px] bg-gradient-to-r from-primary to-primary/80">
          <div className="absolute inset-0 bg-black/30" />
          <div className="container relative h-full flex items-center justify-center text-center px-4">
            <div className="text-white">
              <Camera className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Selfie with Tigers</h1>
              <p className="text-xl md:text-2xl">Get up close with majestic tigers in a safe environment</p>
            </div>
          </div>
        </div>

        <div className="container px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">About This Experience</h2>
              <p className="text-muted-foreground mb-4">
                Experience a once-in-a-lifetime opportunity to interact with tigers in a controlled and safe environment. 
                Our tiger sanctuary provides a unique chance to photograph these magnificent creatures up close.
              </p>
              <p className="text-muted-foreground mb-4">
                Professional trainers ensure your safety while you capture unforgettable memories. 
                Learn about tiger conservation efforts and the importance of protecting these endangered animals.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span><strong>Duration:</strong> 1-2 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span><strong>Location:</strong> Tiger Kingdom</span>
                </div>
                <div className="flex items-center gap-3">
                  <IndianRupee className="w-5 h-5 text-primary" />
                  <span><strong>Price:</strong> Starting from ₹55 per person</span>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-2xl font-bold mb-4">What's Included</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Entry to tiger sanctuary</li>
                <li>✓ Professional guide supervision</li>
                <li>✓ Photo session with tigers</li>
                <li>✓ Safety briefing</li>
                <li>✓ Digital photo package</li>
                <li>✓ Educational tour</li>
                <li>✓ Conservation certificate</li>
                <li>✓ Souvenir photo frame</li>
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
                <h4 className="font-semibold mb-2">Photo Opportunities</h4>
                <p className="text-sm text-muted-foreground">Professional photos with tigers of all ages</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Safe Environment</h4>
                <p className="text-sm text-muted-foreground">Experienced handlers ensure your safety</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Conservation Education</h4>
                <p className="text-sm text-muted-foreground">Learn about tiger preservation efforts</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SelfieWithTigers;
