import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Ticket, MapPin, Clock, DollarSign } from "lucide-react";

const MassageCoupons = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="relative h-[400px] bg-gradient-to-r from-primary to-primary/80">
          <div className="absolute inset-0 bg-black/30" />
          <div className="container relative h-full flex items-center justify-center text-center px-4">
            <div className="text-white">
              <Ticket className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Massage Coupons</h1>
              <p className="text-xl md:text-2xl">Save on premium spa and massage treatments</p>
            </div>
          </div>
        </div>

        <div className="container px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">About These Coupons</h2>
              <p className="text-muted-foreground mb-4">
                Discover exclusive deals on premium massage and spa treatments across top-rated wellness centers. 
                Choose from traditional Thai massage, aromatherapy, hot stone therapy, and more.
              </p>
              <p className="text-muted-foreground mb-4">
                Our massage coupons offer significant savings on rejuvenating treatments at certified spas. 
                Perfect for unwinding after a day of sightseeing or simply pampering yourself during your vacation.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span><strong>Duration:</strong> 60-120 minutes per session</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span><strong>Location:</strong> Multiple spa locations</span>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <span><strong>Price:</strong> Up to 50% off regular prices</span>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-2xl font-bold mb-4">Available Packages</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Traditional Thai Massage (60-90 min)</li>
                <li>✓ Oil Aromatherapy Massage</li>
                <li>✓ Hot Stone Therapy</li>
                <li>✓ Foot Reflexology</li>
                <li>✓ Deep Tissue Massage</li>
                <li>✓ Herbal Compress Treatment</li>
                <li>✓ Couple's Massage Sessions</li>
                <li>✓ Full Day Spa Packages</li>
              </ul>
              
              <Button className="w-full mt-6" size="lg">
                View Deals
              </Button>
            </div>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Why Choose Our Coupons</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Big Savings</h4>
                <p className="text-sm text-muted-foreground">Save up to 50% on premium treatments</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Certified Spas</h4>
                <p className="text-sm text-muted-foreground">Partner with top-rated wellness centers</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Flexible Booking</h4>
                <p className="text-sm text-muted-foreground">Book at your convenience with easy redemption</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MassageCoupons;
