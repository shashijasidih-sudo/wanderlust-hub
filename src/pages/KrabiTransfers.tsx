import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Plane, Car, Building2, MapPin } from "lucide-react";
import TransferCard from "@/components/TransferCard";

const transfers = [
  { id: 1, title: "KBV Airport to Phuket Hotel", subtitle: "Krabi International Airport to Phuket", price: 6600, priceLabel: "From", image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop", rating: 4.9, reviews: 356, duration: "3.75 Hrs", capacity: "Sedan / SUV / Van", slug: "/krabi/krabi-airport-to-phuket-hotel-transfer", type: "pickup", category: "airport", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
  { id: 2, title: "Phuket Hotel to KBV Airport", subtitle: "Phuket Hotel to Krabi Airport Drop", price: 6800, priceLabel: "From", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop", rating: 4.8, reviews: 234, duration: "3 Hrs", capacity: "Sedan / SUV / Van", slug: "/phuket/phuket-hotel-to-krabi-airport-transfer", type: "dropoff", category: "airport", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
  { id: 3, title: "Krabi Hotel to KBV Airport", subtitle: "Krabi Hotel to Krabi Airport Drop", price: 2400, priceLabel: "From", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop", rating: 4.9, reviews: 445, duration: "45 Mins", capacity: "Sedan / SUV / Van", slug: "/krabi/krabi-hotel-to-krabi-airport-transfer", type: "dropoff", category: "airport", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
  { id: 4, title: "Krabi Hotel to Phuket Hotel", subtitle: "Direct Private Transfer Krabi to Phuket", price: 6800, priceLabel: "From", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&auto=format&fit=crop", rating: 4.9, reviews: 312, duration: "3 Hrs", capacity: "Sedan / SUV / Van", slug: "/krabi/krabi-hotel-to-phuket-hotel-transfer", type: "intercity", category: "intercity", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
  { id: 5, title: "Krabi to Phuket City Tour + Drop", subtitle: "4 Hour Phuket City Tour + Hotel Drop", price: 9500, priceLabel: "From", image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&auto=format&fit=crop", rating: 4.9, reviews: 189, duration: "7 Hrs Total", capacity: "Sedan / SUV / Van", slug: "/krabi/phuket-city-tour-to-phuket-hotel-transfer", type: "citytour", category: "citytour", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
  { id: 6, title: "HKT Airport to Krabi Hotel", subtitle: "Phuket Airport to Krabi Hotel Pickup", price: 6500, priceLabel: "From", image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop", rating: 4.8, reviews: 278, duration: "2.5 Hrs", capacity: "Sedan / SUV / Van", slug: "/phuket/phuket-airport-to-krabi-hotel-transfer", type: "pickup", category: "airport", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
  { id: 7, title: "Krabi Hotel to HKT Airport", subtitle: "Krabi Hotel to Phuket Airport Drop", price: 6500, priceLabel: "From", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop", rating: 4.8, reviews: 198, duration: "2.5 Hrs", capacity: "Sedan / SUV / Van", slug: "/krabi/krabi-hotel-to-phuket-airport-transfer", type: "dropoff", category: "airport", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
  { id: 8, title: "KBV Airport to Ao Nang Hotel", subtitle: "Krabi Airport to Ao Nang Krabi", price: 2400, priceLabel: "From", image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop", rating: 4.9, reviews: 567, duration: "45 Mins", capacity: "Sedan / SUV / Van", slug: "/krabi/krabi-airport-to-ao-nang-hotel-transfer", type: "pickup", category: "airport", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
  { id: 9, title: "Phuket Hotel to Krabi Hotel", subtitle: "Direct Private Transfer Phuket to Krabi", price: 6800, priceLabel: "From", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&auto=format&fit=crop", rating: 4.9, reviews: 423, duration: "3 Hrs", capacity: "Sedan / SUV / Van", slug: "/phuket/phuket-hotel-to-krabi-hotel-transfer", type: "intercity", category: "intercity", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
  { id: 10, title: "Phuket City Tour + Krabi Drop", subtitle: "4 Hour Phuket Tour + Krabi Hotel Drop", price: 9500, priceLabel: "From", image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&auto=format&fit=crop", rating: 4.9, reviews: 156, duration: "7 Hrs Total", capacity: "Sedan / SUV / Van", slug: "/phuket/phuket-city-tour-to-krabi-hotel-transfer", type: "citytour", category: "citytour", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
  { id: 11, title: "Phuket to Krabi City Tour + Drop", subtitle: "6 Hour Krabi Tour + Krabi Hotel Drop", price: 13600, priceLabel: "From", image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&auto=format&fit=crop", rating: 4.9, reviews: 98, duration: "9 Hrs Total", capacity: "Sedan / SUV / Van", slug: "/phuket/krabi-city-tour-to-krabi-hotel-transfer", type: "citytour", category: "citytour", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] }
];

const KrabiTransfers = () => {
  const [filterType, setFilterType] = useState<string>("all");

  const filteredTransfers = transfers.filter(transfer => {
    if (filterType === "all") return true;
    if (filterType === "pickup") return transfer.type === "pickup";
    if (filterType === "dropoff") return transfer.type === "dropoff";
    if (filterType === "citytour") return transfer.category === "citytour";
    if (filterType === "intercity") return transfer.category === "intercity";
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[350px] md:h-[450px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1920&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-emerald-500/20 rounded-full blur-2xl" />
        
        <div className="container relative z-10 h-full flex flex-col justify-center px-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm mb-4">
              <Car className="h-4 w-4" />
              <span>Premium Transfer Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Krabi<br />
              <span className="text-primary">Private Transfers</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl mb-6">
              Airport pickups, hotel transfers & city tours with professional drivers
            </p>
            <div className="flex flex-wrap gap-4 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Meet & Greet Service</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Licensed Drivers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 container px-4 py-8">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Button 
            variant={filterType === "all" ? "default" : "outline"}
            onClick={() => setFilterType("all")}
          >
            All Transfers
          </Button>
          <Button 
            variant={filterType === "pickup" ? "default" : "outline"}
            onClick={() => setFilterType("pickup")}
          >
            <Plane className="h-4 w-4 mr-2" />
            Airport Pickups
          </Button>
          <Button 
            variant={filterType === "dropoff" ? "default" : "outline"}
            onClick={() => setFilterType("dropoff")}
          >
            <Building2 className="h-4 w-4 mr-2" />
            Airport Dropoffs
          </Button>
          <Button 
            variant={filterType === "citytour" ? "default" : "outline"}
            onClick={() => setFilterType("citytour")}
          >
            <MapPin className="h-4 w-4 mr-2" />
            City Tours + Transfer
          </Button>
          <Button 
            variant={filterType === "intercity" ? "default" : "outline"}
            onClick={() => setFilterType("intercity")}
          >
            <Car className="h-4 w-4 mr-2" />
            Intercity Transfers
          </Button>
        </div>

        {/* Transfer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTransfers.map((transfer) => (
            <TransferCard
              key={transfer.id}
              transfer={transfer}
              badges={
                <>
                  {transfer.type === "pickup" && (
                    <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">Airport Pickup</div>
                  )}
                  {transfer.type === "dropoff" && (
                    <div className="absolute top-3 left-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">Airport Dropoff</div>
                  )}
                  {transfer.category === "citytour" && (
                    <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">City Tour + Transfer</div>
                  )}
                  {transfer.category === "intercity" && transfer.type !== "citytour" && (
                    <div className="absolute top-3 left-3 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">Intercity Transfer</div>
                  )}
                </>
              }
            />
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-muted/50 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">About Krabi Airport Transfers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Airports Served</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>• Krabi International Airport (KBV) - 25 km from Ao Nang</li>
                <li>• Phuket International Airport (HKT) - 149 km from Krabi</li>
              </ul>
              <h3 className="font-semibold mt-4 mb-2">Vehicle Options</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>• Sedan Car: 1-3 passengers (2 big bags, 3 hand bags)</li>
                <li>• Mini SUV: 1-4 passengers (4 big bags, 4 hand bags)</li>
                <li>• Mini Van: 1-10 passengers (10 big bags, 10 hand bags)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Important Notes</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>• Driver waits at Exit Gate 15-16 (KBV) with your name card</li>
                <li>• Night pickup (12:00 AM - 6:00 AM): 300 THB surcharge</li>
                <li>• Driver waiting time: Up to 3 hours after flight arrival</li>
                <li>• Free cancellation up to 72 hours before pickup</li>
                <li>• Extra baggage charge: 500 THB per bag if exceeding limit</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default KrabiTransfers;
