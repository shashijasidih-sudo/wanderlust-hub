import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Plane, Car, Building2, MapPin } from "lucide-react";
import TransferCard from "@/components/TransferCard";

// Combined transfers from all cities
const allTransfers = [
  // Bangkok Transfers
  { id: 1, city: "Bangkok", title: "BKK Airport to Bangkok Hotel", subtitle: "Suvarnabhumi International Airport Pickup", price: 2700, priceLabel: "From", image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop", rating: 4.9, reviews: 856, duration: "Transfer", capacity: "Sedan / SUV / Van", slug: "/bangkok/bkk-airport-pickup", type: "pickup", category: "airport", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
  { id: 2, city: "Bangkok", title: "DMK Airport to Bangkok Hotel", subtitle: "Don Mueang International Airport Pickup", price: 2700, priceLabel: "From", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&auto=format&fit=crop", rating: 4.8, reviews: 445, duration: "Transfer", capacity: "Sedan / SUV / Van", slug: "/bangkok/dmk-airport-pickup", type: "pickup", category: "airport", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
  { id: 3, city: "Bangkok", title: "Bangkok Hotel to BKK Airport", subtitle: "Suvarnabhumi International Airport Dropoff", price: 2200, priceLabel: "From", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop", rating: 4.8, reviews: 723, duration: "Transfer", capacity: "Sedan / SUV / Van", slug: "/bangkok/bkk-airport-dropoff", type: "dropoff", category: "airport", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
  { id: 4, city: "Bangkok", title: "Bangkok Hotel to DMK Airport", subtitle: "Don Mueang International Airport Dropoff", price: 2700, priceLabel: "From", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop", rating: 4.8, reviews: 312, duration: "Transfer", capacity: "Sedan / SUV / Van", slug: "/bangkok/dmk-airport-dropoff", type: "dropoff", category: "airport", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
  { id: 5, city: "Bangkok", title: "2-Temple Tour + BKK Airport Drop", subtitle: "Temple Tour with BKK Airport Transfer", price: 5100, priceLabel: "From", image: "https://images.unsplash.com/photo-1563492065567-7a0b2e7d1a3e?w=800&auto=format&fit=crop", rating: 4.9, reviews: 289, duration: "3 Hrs + Transfer", capacity: "Sedan / SUV / Van", slug: "/bangkok/temple-tour-airport", type: "citytour", category: "citytour", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
  { id: 6, city: "Bangkok", title: "Bangkok to Pattaya Hotel", subtitle: "Direct Private Transfer to Pattaya", price: 3800, priceLabel: "From", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&auto=format&fit=crop", rating: 4.9, reviews: 567, duration: "2.5 Hrs", capacity: "Sedan / SUV / Van", slug: "/bangkok/to-pattaya", type: "intercity", category: "intercity", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
  
  // Pattaya Transfers
  { id: 7, city: "Pattaya", title: "BKK Airport to Pattaya Hotel", subtitle: "Suvarnabhumi International Airport to Pattaya", price: 3600, priceLabel: "From", image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop", rating: 4.9, reviews: 756, duration: "1.5 Hrs", capacity: "Sedan / SUV / Van", slug: "/pattaya/bkk-airport-pickup", type: "pickup", category: "airport", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
  { id: 8, city: "Pattaya", title: "DMK Airport to Pattaya Hotel", subtitle: "Don Mueang International Airport to Pattaya", price: 5100, priceLabel: "From", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&auto=format&fit=crop", rating: 4.8, reviews: 345, duration: "2.5 Hrs", capacity: "Sedan / SUV / Van", slug: "/pattaya/dmk-airport-pickup", type: "pickup", category: "airport", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
  { id: 9, city: "Pattaya", title: "Pattaya Hotel to BKK Airport", subtitle: "Private Transfer to Suvarnabhumi Airport", price: 3500, priceLabel: "From", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop", rating: 4.8, reviews: 623, duration: "1.5 Hrs", capacity: "Sedan / SUV / Van", slug: "/pattaya/bkk-airport-dropoff", type: "dropoff", category: "airport", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
  { id: 10, city: "Pattaya", title: "Pattaya Hotel to DMK Airport", subtitle: "Private Transfer to Don Mueang Airport", price: 5000, priceLabel: "From", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop", rating: 4.8, reviews: 312, duration: "2 Hrs", capacity: "Sedan / SUV / Van", slug: "/pattaya/dmk-airport-dropoff", type: "dropoff", category: "airport", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
  { id: 11, city: "Pattaya", title: "Pattaya City Hourly Rental (4 Hrs)", subtitle: "Private Car Hire within Pattaya City", price: 4500, priceLabel: "From", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&auto=format&fit=crop", rating: 4.9, reviews: 267, duration: "4 Hours", capacity: "Sedan / SUV / Van", slug: "/pattaya/city-hourly-rental", type: "citytour", category: "citytour", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
  
  // Krabi Transfers
  { id: 12, city: "Krabi", title: "KBV Airport to Phuket Hotel", subtitle: "Krabi International Airport to Phuket", price: 6600, priceLabel: "From", image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop", rating: 4.9, reviews: 356, duration: "3.75 Hrs", capacity: "Sedan / SUV / Van", slug: "/krabi/kbv-airport-phuket-pickup", type: "pickup", category: "airport", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
  { id: 13, city: "Krabi", title: "Phuket Hotel to KBV Airport", subtitle: "Phuket Hotel to Krabi Airport Drop", price: 6800, priceLabel: "From", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop", rating: 4.8, reviews: 234, duration: "3 Hrs", capacity: "Sedan / SUV / Van", slug: "/krabi/phuket-kbv-airport-dropoff", type: "dropoff", category: "airport", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
  { id: 14, city: "Krabi", title: "Krabi Hotel to KBV Airport", subtitle: "Krabi Hotel to Krabi Airport Drop", price: 2400, priceLabel: "From", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop", rating: 4.9, reviews: 445, duration: "45 Mins", capacity: "Sedan / SUV / Van", slug: "/krabi/krabi-hotel-kbv-airport", type: "dropoff", category: "airport", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
  { id: 15, city: "Krabi", title: "Krabi Hotel to Phuket Hotel", subtitle: "Direct Private Transfer Krabi to Phuket", price: 6800, priceLabel: "From", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&auto=format&fit=crop", rating: 4.9, reviews: 312, duration: "3 Hrs", capacity: "Sedan / SUV / Van", slug: "/krabi/krabi-to-phuket", type: "intercity", category: "intercity", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
  { id: 16, city: "Krabi", title: "Krabi to Phuket City Tour + Drop", subtitle: "4 Hour Phuket City Tour + Hotel Drop", price: 9500, priceLabel: "From", image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&auto=format&fit=crop", rating: 4.9, reviews: 189, duration: "7 Hrs Total", capacity: "Sedan / SUV / Van", slug: "/krabi/krabi-phuket-city-tour", type: "citytour", category: "citytour", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
  { id: 17, city: "Krabi", title: "KBV Airport to Ao Nang Hotel", subtitle: "Krabi Airport to Ao Nang Krabi", price: 2400, priceLabel: "From", image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop", rating: 4.9, reviews: 567, duration: "45 Mins", capacity: "Sedan / SUV / Van", slug: "/krabi/kbv-aonang-pickup", type: "pickup", category: "airport", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
  
  // Phuket Transfers
  { id: 18, city: "Phuket", title: "HKT Airport to Phuket Hotel", subtitle: "Phuket International Airport Pickup", price: 3000, priceLabel: "From", image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop", rating: 4.9, reviews: 567, duration: "1 Hr 10 Min", capacity: "Sedan / SUV / Van", slug: "/phuket/hkt-airport-pickup", type: "pickup", category: "airport", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
  { id: 19, city: "Phuket", title: "Phuket Hotel to HKT Airport", subtitle: "Phuket Hotel to Airport Drop", price: 2700, priceLabel: "From", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop", rating: 4.8, reviews: 456, duration: "45 Min", capacity: "Sedan / SUV / Van", slug: "/phuket/hkt-airport-dropoff", type: "dropoff", category: "airport", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
  { id: 20, city: "Phuket", title: "HKT Airport + City Tour → Hotel", subtitle: "4 Hour Phuket City Tour + Hotel Drop", price: 5900, priceLabel: "From", image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&auto=format&fit=crop", rating: 4.9, reviews: 345, duration: "5 Hrs Total", capacity: "Sedan / SUV / Van", slug: "/phuket/hkt-airport-city-tour", type: "citytour", category: "citytour", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
  { id: 21, city: "Phuket", title: "Phuket City Hourly Rental (4 Hrs)", subtitle: "Private Car Hire within Phuket City", price: 4300, priceLabel: "From", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&auto=format&fit=crop", rating: 4.9, reviews: 312, duration: "4 Hours", capacity: "Sedan / SUV / Van", slug: "/phuket/city-hourly-rental", type: "citytour", category: "citytour", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
  { id: 22, city: "Phuket", title: "Phuket Hotel to Krabi Hotel", subtitle: "Direct Private Transfer to Krabi", price: 6800, priceLabel: "From", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&auto=format&fit=crop", rating: 4.9, reviews: 423, duration: "3 Hrs", capacity: "Sedan / SUV / Van", slug: "/phuket/phuket-to-krabi", type: "intercity", category: "intercity", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
  { id: 23, city: "Phuket", title: "Phuket City Tour + Krabi Drop", subtitle: "4 Hour Phuket Tour + Krabi Hotel", price: 9500, priceLabel: "From", image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&auto=format&fit=crop", rating: 4.9, reviews: 189, duration: "7 Hrs Total", capacity: "Sedan / SUV / Van", slug: "/phuket/city-tour-krabi", type: "citytour", category: "citytour", vehicles: ["Sedan (3 Pax)", "SUV (4 Pax)", "Van (10 Pax)"] },
];

const cityColors: Record<string, string> = {
  Bangkok: "bg-orange-500",
  Pattaya: "bg-blue-500",
  Krabi: "bg-emerald-500",
  Phuket: "bg-cyan-500",
};

const ThailandTransfers = () => {
  const [filterType, setFilterType] = useState<string>("all");
  const [filterCity, setFilterCity] = useState<string>("all");

  const filteredTransfers = allTransfers.filter(transfer => {
    const typeMatch = filterType === "all" || 
      (filterType === "pickup" && transfer.type === "pickup") ||
      (filterType === "dropoff" && transfer.type === "dropoff") ||
      (filterType === "citytour" && transfer.category === "citytour") ||
      (filterType === "intercity" && transfer.category === "intercity");
    
    const cityMatch = filterCity === "all" || transfer.city === filterCity;
    
    return typeMatch && cityMatch;
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
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-amber-500/20 rounded-full blur-2xl" />
        
        <div className="container relative z-10 h-full flex flex-col justify-center px-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm mb-4">
              <Car className="h-4 w-4" />
              <span>Premium Transfer Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Thailand<br />
              <span className="text-primary">Private Transfers</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl mb-6">
              Airport pickups, hotel transfers & city tours across Bangkok, Pattaya, Krabi & Phuket
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
        {/* City Filter Buttons */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-3">Filter by City</h3>
          <div className="flex flex-wrap gap-3">
            <Button 
              variant={filterCity === "all" ? "default" : "outline"}
              onClick={() => setFilterCity("all")}
            >
              All Cities
            </Button>
            <Button 
              variant={filterCity === "Bangkok" ? "default" : "outline"}
              onClick={() => setFilterCity("Bangkok")}
              className={filterCity === "Bangkok" ? "" : "border-orange-500/50 text-orange-600 hover:bg-orange-50"}
            >
              Bangkok
            </Button>
            <Button 
              variant={filterCity === "Pattaya" ? "default" : "outline"}
              onClick={() => setFilterCity("Pattaya")}
              className={filterCity === "Pattaya" ? "" : "border-blue-500/50 text-blue-600 hover:bg-blue-50"}
            >
              Pattaya
            </Button>
            <Button 
              variant={filterCity === "Krabi" ? "default" : "outline"}
              onClick={() => setFilterCity("Krabi")}
              className={filterCity === "Krabi" ? "" : "border-emerald-500/50 text-emerald-600 hover:bg-emerald-50"}
            >
              Krabi
            </Button>
            <Button 
              variant={filterCity === "Phuket" ? "default" : "outline"}
              onClick={() => setFilterCity("Phuket")}
              className={filterCity === "Phuket" ? "" : "border-cyan-500/50 text-cyan-600 hover:bg-cyan-50"}
            >
              Phuket
            </Button>
          </div>
        </div>

        {/* Type Filter Buttons */}
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

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredTransfers.length}</span> transfers
            {filterCity !== "all" && <span> in <span className="font-semibold text-foreground">{filterCity}</span></span>}
          </p>
        </div>

        {/* Transfer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTransfers.map((transfer) => (
            <TransferCard
              key={transfer.id}
              transfer={transfer}
              badges={
                <>
                  <div className={`absolute top-12 right-3 ${cityColors[transfer.city]} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                    {transfer.city}
                  </div>
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
          <h2 className="text-2xl font-bold mb-4">About Thailand Airport Transfers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold mb-2 text-orange-600">Bangkok Airports</h3>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Suvarnabhumi (BKK) - 30 km from city</li>
                <li>• Don Mueang (DMK) - 25 km from city</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-blue-600">Pattaya Transfers</h3>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• BKK Airport - 120 km from Pattaya</li>
                <li>• DMK Airport - 166 km from Pattaya</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-emerald-600">Krabi Airport</h3>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Krabi (KBV) - 25 km from Ao Nang</li>
                <li>• Phuket (HKT) - 149 km from Krabi</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-cyan-600">Phuket Airport</h3>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Phuket (HKT) - 45 km from Patong</li>
                <li>• Exit Gate 2 for pickups</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t">
            <h3 className="font-semibold mb-2">Vehicle Options</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div>• Sedan Car: 1-3 passengers (2 big bags, 3 hand bags)</div>
              <div>• Mini SUV: 1-4 passengers (4 big bags, 4 hand bags)</div>
              <div>• Mini Van: 1-10 passengers (10 big bags, 10 hand bags)</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThailandTransfers;
