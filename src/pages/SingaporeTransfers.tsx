import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, Users, Plane, Car } from "lucide-react";

const transfers = [
  {
    id: 1,
    title: "Private Airport Pick Up - 5 Seater",
    price: 4000,
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 856,
    duration: "Transfer",
    capacity: "Up to 5 passengers",
    slug: "/singapore/airport-pickup-5-seater",
    type: "pickup",
    time: "Day"
  },
  {
    id: 2,
    title: "Private Airport Pick Up - 10 Seater",
    price: 8000,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 654,
    duration: "Transfer",
    capacity: "Up to 10 passengers",
    slug: "/singapore/airport-pickup-10-seater",
    type: "pickup",
    time: "Day"
  },
  {
    id: 3,
    title: "Private Airport Drop Off - 5 Seater",
    price: 4000,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 723,
    duration: "Transfer",
    capacity: "Up to 5 passengers",
    slug: "/singapore/airport-dropoff-5-seater",
    type: "dropoff",
    time: "Day"
  },
  {
    id: 4,
    title: "Private Airport Drop Off - 10 Seater",
    price: 8000,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 512,
    duration: "Transfer",
    capacity: "Up to 10 passengers",
    slug: "/singapore/airport-dropoff-10-seater",
    type: "dropoff",
    time: "Day"
  },
  {
    id: 5,
    title: "Private Airport Night Pick Up - 5 Seater",
    price: 5000,
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 432,
    duration: "Transfer",
    capacity: "Up to 5 passengers",
    slug: "/singapore/airport-night-pickup-5-seater",
    type: "pickup",
    time: "Night"
  },
  {
    id: 6,
    title: "Private Airport Night Pick Up - 10 Seater",
    price: 10000,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 321,
    duration: "Transfer",
    capacity: "Up to 10 passengers",
    slug: "/singapore/airport-night-pickup-10-seater",
    type: "pickup",
    time: "Night"
  }
];

const SingaporeTransfers = () => {
  const [filterType, setFilterType] = useState<string>("all");

  const filteredTransfers = transfers.filter(transfer => {
    if (filterType === "all") return true;
    if (filterType === "pickup") return transfer.type === "pickup";
    if (filterType === "dropoff") return transfer.type === "dropoff";
    if (filterType === "night") return transfer.time === "Night";
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] bg-gradient-to-r from-primary/90 to-primary overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1920&auto=format&fit=crop')" }}
        />
        <div className="container relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Singapore Airport Transfers
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Reliable private transfers to and from Changi Airport
          </p>
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
            Airport Pick Up
          </Button>
          <Button 
            variant={filterType === "dropoff" ? "default" : "outline"}
            onClick={() => setFilterType("dropoff")}
          >
            <Car className="h-4 w-4 mr-2" />
            Airport Drop Off
          </Button>
          <Button 
            variant={filterType === "night" ? "default" : "outline"}
            onClick={() => setFilterType("night")}
          >
            Night Transfers
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
                  {transfer.time === "Night" && (
                    <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Night Transfer
                    </div>
                  )}
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
          <h2 className="text-2xl font-bold mb-4">About Singapore Airport Transfers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Service Areas</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>• Geylang Lorong 1-22</li>
                <li>• Little India</li>
                <li>• Orchard Road</li>
                <li>• Tanjong Pagar</li>
                <li>• Chinatown</li>
                <li>• Village Hotel Bugis</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Important Notes</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>• Select pickup time 2.5 hours after flight landing</li>
                <li>• Be ready 15 minutes before pickup time</li>
                <li>• Private transfer waiting time: 15 minutes</li>
                <li>• Valid photo ID/passport required</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SingaporeTransfers;