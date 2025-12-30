import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, Users, Plane, Car, MapPin } from "lucide-react";

const transfers = [
  {
    id: 1,
    title: "Dubai Airport Pick Up to Zone 1 - 7 Seater",
    price: 3000,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 856,
    duration: "Transfer",
    capacity: "Up to 7 passengers",
    slug: "/dubai/airport-pickup-zone1-7-seater",
    category: "zone1"
  },
  {
    id: 2,
    title: "Dubai Airport Pick Up to Zone 1 - 12 Seater",
    price: 4000,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 654,
    duration: "Transfer",
    capacity: "Up to 12 passengers",
    slug: "/dubai/airport-pickup-zone1-12-seater",
    category: "zone1"
  },
  {
    id: 3,
    title: "Dubai Airport Pick Up to Zone 1 - 4 Seater",
    price: 3300,
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 432,
    duration: "Transfer",
    capacity: "Up to 4 passengers",
    slug: "/dubai/airport-pickup-zone1-4-seater",
    category: "zone1"
  },
  {
    id: 4,
    title: "Dubai Airport Pick Up to Zone 2 - 7 Seater",
    price: 3500,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 723,
    duration: "Transfer",
    capacity: "Up to 7 passengers",
    slug: "/dubai/airport-pickup-zone2-7-seater",
    category: "zone2"
  },
  {
    id: 5,
    title: "Dubai Airport Pick Up to Zone 2 - 12 Seater",
    price: 4200,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 512,
    duration: "Transfer",
    capacity: "Up to 12 passengers",
    slug: "/dubai/airport-pickup-zone2-12-seater",
    category: "zone2"
  },
  {
    id: 6,
    title: "Dubai Airport Pick Up to Zone 3 - 7 Seater",
    price: 4000,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 389,
    duration: "Transfer",
    capacity: "Up to 7 passengers",
    slug: "/dubai/airport-pickup-zone3-7-seater",
    category: "zone3"
  },
  {
    id: 7,
    title: "Dubai Airport Pick Up to Zone 3 - 12 Seater",
    price: 4200,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 298,
    duration: "Transfer",
    capacity: "Up to 12 passengers",
    slug: "/dubai/airport-pickup-zone3-12-seater",
    category: "zone3"
  },
  {
    id: 8,
    title: "Dubai Airport Pick Up to Zone 5 - 7 Seater",
    price: 7200,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 267,
    duration: "Transfer",
    capacity: "Up to 7 passengers",
    slug: "/dubai/airport-pickup-zone5-7-seater",
    category: "zone5"
  },
  {
    id: 9,
    title: "Dubai Airport Pick Up to Zone 5 - 12 Seater",
    price: 8900,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 198,
    duration: "Transfer",
    capacity: "Up to 12 passengers",
    slug: "/dubai/airport-pickup-zone5-12-seater",
    category: "zone5"
  }
];

const DubaiTransfers = () => {
  const [filterType, setFilterType] = useState<string>("all");

  const filteredTransfers = transfers.filter(transfer => {
    if (filterType === "all") return true;
    return transfer.category === filterType;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[350px] md:h-[450px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary/20 rounded-full blur-2xl" />
        
        <div className="container relative z-10 h-full flex flex-col justify-center px-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm mb-4">
              <Car className="h-4 w-4" />
              <span>Premium Transfer Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Dubai<br />
              <span className="text-amber-400">Airport Transfers</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl mb-6">
              Hassle-free airport pickups with professional drivers across all Dubai zones
            </p>
            <div className="flex flex-wrap gap-4 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Meet & Greet Service</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>All Zones Covered</span>
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
            All Zones
          </Button>
          <Button 
            variant={filterType === "zone1" ? "default" : "outline"}
            onClick={() => setFilterType("zone1")}
          >
            <MapPin className="h-4 w-4 mr-2" />
            Zone 1
          </Button>
          <Button 
            variant={filterType === "zone2" ? "default" : "outline"}
            onClick={() => setFilterType("zone2")}
          >
            <MapPin className="h-4 w-4 mr-2" />
            Zone 2
          </Button>
          <Button 
            variant={filterType === "zone3" ? "default" : "outline"}
            onClick={() => setFilterType("zone3")}
          >
            <MapPin className="h-4 w-4 mr-2" />
            Zone 3
          </Button>
          <Button 
            variant={filterType === "zone5" ? "default" : "outline"}
            onClick={() => setFilterType("zone5")}
          >
            <MapPin className="h-4 w-4 mr-2" />
            Zone 5
          </Button>
        </div>

        {/* Transfer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTransfers.map((transfer) => (
            <Link key={transfer.id} to={transfer.slug}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={transfer.image}
                    alt={transfer.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {transfer.category.replace('zone', 'Zone ')}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {transfer.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{transfer.capacity}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{transfer.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{transfer.rating}</span>
                    <span className="text-muted-foreground">({transfer.reviews} reviews)</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-muted-foreground">From</span>
                      <p className="text-xl font-bold text-primary">₹{transfer.price.toLocaleString()}</p>
                      <span className="text-xs text-muted-foreground">per vehicle</span>
                    </div>
                    <Button size="sm">Book Now</Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-muted/50 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">About Dubai Airport Transfers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Zone Information</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>• Zone 1: Deira, Bur Dubai, Downtown</li>
                <li>• Zone 2: JBR, Marina, Palm Jumeirah</li>
                <li>• Zone 3: JVC, Sports City, Motor City</li>
                <li>• Zone 5: Abu Dhabi, Al Ain</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Important Notes</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>• Keep 3 hours difference between arrival and pickup</li>
                <li>• Valid ID/Passport required during transfer</li>
                <li>• No eating, drinking, or smoking in vehicle</li>
                <li>• Limousine transfers available at extra charges</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DubaiTransfers;
