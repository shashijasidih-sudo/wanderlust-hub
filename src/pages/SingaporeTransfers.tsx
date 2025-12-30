import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, Users, Plane, Car, Building2, MapPin } from "lucide-react";

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
    category: "airport"
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
    category: "airport"
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
    category: "airport"
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
    category: "airport"
  },
  {
    id: 5,
    title: "Private Airport Night Pick Up - 5 Seater",
    price: 5000,
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 432,
    duration: "Night Transfer",
    capacity: "Up to 5 passengers",
    slug: "/singapore/airport-night-pickup-5-seater",
    type: "night",
    category: "airport"
  },
  {
    id: 6,
    title: "Private Airport Night Pick Up - 10 Seater",
    price: 10000,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 321,
    duration: "Night Transfer",
    capacity: "Up to 10 passengers",
    slug: "/singapore/airport-night-pickup-10-seater",
    type: "night",
    category: "airport"
  },
  {
    id: 7,
    title: "Hotel to Hotel Transfer - 5 Seater",
    price: 3500,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 289,
    duration: "1-2 Hours",
    capacity: "Up to 5 passengers",
    slug: "/singapore/hotel-transfer-5-seater",
    type: "hotel",
    category: "hotel"
  },
  {
    id: 8,
    title: "Hotel to Hotel Transfer - 10 Seater",
    price: 6500,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 198,
    duration: "1-2 Hours",
    capacity: "Up to 10 passengers",
    slug: "/singapore/hotel-transfer-10-seater",
    type: "hotel",
    category: "hotel"
  },
  {
    id: 9,
    title: "Private City Tour Transfer - 4 Hours",
    price: 8500,
    image: "https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 456,
    duration: "4 Hours",
    capacity: "Up to 5 passengers",
    slug: "/singapore/city-tour-4-hours",
    type: "citytour",
    category: "citytour"
  },
  {
    id: 10,
    title: "Private City Tour Transfer - 8 Hours",
    price: 15000,
    image: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 342,
    duration: "8 Hours",
    capacity: "Up to 5 passengers",
    slug: "/singapore/city-tour-8-hours",
    type: "citytour",
    category: "citytour"
  },
  {
    id: 11,
    title: "Sentosa Island Transfer - Round Trip",
    price: 4500,
    image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&auto=format&fit=crop",
    rating: 4.7,
    reviews: 267,
    duration: "Round Trip",
    capacity: "Up to 5 passengers",
    slug: "/singapore/sentosa-transfer",
    type: "attraction",
    category: "attraction"
  },
  {
    id: 12,
    title: "Marina Bay Sands & Gardens Transfer",
    price: 3800,
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 312,
    duration: "One Way",
    capacity: "Up to 5 passengers",
    slug: "/singapore/marina-bay-transfer",
    type: "attraction",
    category: "attraction"
  }
];

const SingaporeTransfers = () => {
  const [filterType, setFilterType] = useState<string>("all");

  const filteredTransfers = transfers.filter(transfer => {
    if (filterType === "all") return true;
    if (filterType === "airport") return transfer.category === "airport";
    if (filterType === "hotel") return transfer.category === "hotel";
    if (filterType === "citytour") return transfer.category === "citytour";
    if (filterType === "attraction") return transfer.category === "attraction";
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Hero Section - Enhanced */}
      <div className="relative h-[350px] md:h-[450px] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1920&auto=format&fit=crop')" }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-yellow-500/20 rounded-full blur-2xl" />
        
        <div className="container relative z-10 h-full flex flex-col justify-center px-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm mb-4">
              <Car className="h-4 w-4" />
              <span>Premium Transfer Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Singapore<br />
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
            variant={filterType === "airport" ? "default" : "outline"}
            onClick={() => setFilterType("airport")}
          >
            <Plane className="h-4 w-4 mr-2" />
            Airport Transfers
          </Button>
          <Button 
            variant={filterType === "hotel" ? "default" : "outline"}
            onClick={() => setFilterType("hotel")}
          >
            <Building2 className="h-4 w-4 mr-2" />
            Hotel to Hotel
          </Button>
          <Button 
            variant={filterType === "citytour" ? "default" : "outline"}
            onClick={() => setFilterType("citytour")}
          >
            <Car className="h-4 w-4 mr-2" />
            City Tours
          </Button>
          <Button 
            variant={filterType === "attraction" ? "default" : "outline"}
            onClick={() => setFilterType("attraction")}
          >
            <MapPin className="h-4 w-4 mr-2" />
            Attractions
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
                  {transfer.type === "night" && (
                    <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Night Transfer
                    </div>
                  )}
                  {transfer.category === "hotel" && (
                    <div className="absolute top-3 left-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Hotel Transfer
                    </div>
                  )}
                  {transfer.category === "citytour" && (
                    <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      City Tour
                    </div>
                  )}
                  {transfer.category === "attraction" && (
                    <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Attraction
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