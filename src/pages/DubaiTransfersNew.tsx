import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Plane, Building2, Car, MapPin } from "lucide-react";
import { dubaiZones } from "@/data/dubaiTransferData";
import TransferCard from "@/components/TransferCard";
import { dubaiZones } from "@/data/dubaiTransferData";

const transfers = [
  // Zone 1
  { 
    id: 1, 
    title: "Airport Pickup to Zone 1", 
    subtitle: "Deira / Bur Dubai / Al Nahda / Qusais", 
    price: 3000, 
    priceLabel: "From", 
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop", 
    rating: 4.9, 
    reviews: 856, 
    duration: "Transfer", 
    capacity: "4 / 7 / 12 Seater", 
    slug: "/dubai/airport-pickup-zone1", 
    type: "pickup", 
    zone: "zone1",
    vehicles: ["4 Seater", "7 Seater", "12 Seater"] 
  },
  { 
    id: 2, 
    title: "Zone 1 Hotel to Airport Drop", 
    subtitle: "Deira / Bur Dubai / Al Nahda / Qusais", 
    price: 3000, 
    priceLabel: "From", 
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&auto=format&fit=crop", 
    rating: 4.8, 
    reviews: 623, 
    duration: "Transfer", 
    capacity: "4 / 7 / 12 Seater", 
    slug: "/dubai/airport-dropoff-zone1", 
    type: "dropoff", 
    zone: "zone1",
    vehicles: ["4 Seater", "7 Seater", "12 Seater"] 
  },
  // Zone 2
  { 
    id: 3, 
    title: "Airport Pickup to Zone 2", 
    subtitle: "Downtown / DIFC / Business Bay / Jumeirah", 
    price: 3400, 
    priceLabel: "From", 
    image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&auto=format&fit=crop", 
    rating: 4.9, 
    reviews: 745, 
    duration: "Transfer", 
    capacity: "4 / 7 / 12 Seater", 
    slug: "/dubai/airport-pickup-zone2", 
    type: "pickup", 
    zone: "zone2",
    vehicles: ["4 Seater", "7 Seater", "12 Seater"] 
  },
  { 
    id: 4, 
    title: "Zone 2 Hotel to Airport Drop", 
    subtitle: "Downtown / DIFC / Business Bay / Jumeirah", 
    price: 3400, 
    priceLabel: "From", 
    image: "https://images.unsplash.com/photo-1546412414-e1885259563a?w=800&auto=format&fit=crop", 
    rating: 4.8, 
    reviews: 534, 
    duration: "Transfer", 
    capacity: "4 / 7 / 12 Seater", 
    slug: "/dubai/airport-dropoff-zone2", 
    type: "dropoff", 
    zone: "zone2",
    vehicles: ["4 Seater", "7 Seater", "12 Seater"] 
  },
  // Zone 3
  { 
    id: 5, 
    title: "Airport Pickup to Zone 3", 
    subtitle: "Marina / JBR / JLT / The Palm / Media City", 
    price: 3900, 
    priceLabel: "From", 
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&auto=format&fit=crop", 
    rating: 4.9, 
    reviews: 678, 
    duration: "Transfer", 
    capacity: "4 / 7 / 12 Seater", 
    slug: "/dubai/airport-pickup-zone3", 
    type: "pickup", 
    zone: "zone3",
    vehicles: ["4 Seater", "7 Seater", "12 Seater"] 
  },
  { 
    id: 6, 
    title: "Zone 3 Hotel to Airport Drop", 
    subtitle: "Marina / JBR / JLT / The Palm / Media City", 
    price: 3900, 
    priceLabel: "From", 
    image: "https://images.unsplash.com/photo-1533395427226-788cee25cc7b?w=800&auto=format&fit=crop", 
    rating: 4.8, 
    reviews: 489, 
    duration: "Transfer", 
    capacity: "4 / 7 / 12 Seater", 
    slug: "/dubai/airport-dropoff-zone3", 
    type: "dropoff", 
    zone: "zone3",
    vehicles: ["4 Seater", "7 Seater", "12 Seater"] 
  },
  // Zone 4
  { 
    id: 7, 
    title: "Airport Pickup to Zone 4", 
    subtitle: "Dubai Parks / Expo / Jebel Ali / LAPITA", 
    price: 5500, 
    priceLabel: "From", 
    image: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=800&auto=format&fit=crop", 
    rating: 4.9, 
    reviews: 345, 
    duration: "Transfer", 
    capacity: "4 / 7 / 12 Seater", 
    slug: "/dubai/airport-pickup-zone4", 
    type: "pickup", 
    zone: "zone4",
    vehicles: ["4 Seater", "7 Seater", "12 Seater"] 
  },
  { 
    id: 8, 
    title: "Zone 4 Hotel to Airport Drop", 
    subtitle: "Dubai Parks / Expo / Jebel Ali / LAPITA", 
    price: 5500, 
    priceLabel: "From", 
    image: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=800&auto=format&fit=crop", 
    rating: 4.8, 
    reviews: 256, 
    duration: "Transfer", 
    capacity: "4 / 7 / 12 Seater", 
    slug: "/dubai/airport-dropoff-zone4", 
    type: "dropoff", 
    zone: "zone4",
    vehicles: ["4 Seater", "7 Seater", "12 Seater"] 
  },
  // Zone 5
  { 
    id: 9, 
    title: "Airport Pickup to Zone 5", 
    subtitle: "Bab Al Shams / Al Maha Desert Resorts", 
    price: 7200, 
    priceLabel: "From", 
    image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800&auto=format&fit=crop", 
    rating: 4.9, 
    reviews: 189, 
    duration: "Transfer", 
    capacity: "4 / 7 / 12 Seater", 
    slug: "/dubai/airport-pickup-zone5", 
    type: "pickup", 
    zone: "zone5",
    vehicles: ["4 Seater", "7 Seater", "12 Seater"] 
  },
  { 
    id: 10, 
    title: "Zone 5 Hotel to Airport Drop", 
    subtitle: "Bab Al Shams / Al Maha Desert Resorts", 
    price: 7200, 
    priceLabel: "From", 
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop", 
    rating: 4.8, 
    reviews: 145, 
    duration: "Transfer", 
    capacity: "4 / 7 / 12 Seater", 
    slug: "/dubai/airport-dropoff-zone5", 
    type: "dropoff", 
    zone: "zone5",
    vehicles: ["4 Seater", "7 Seater", "12 Seater"] 
  }
];

const DubaiTransfersNew = () => {
  const [filterType, setFilterType] = useState<string>("all");
  const [filterZone, setFilterZone] = useState<string>("all");

  const filteredTransfers = transfers.filter(transfer => {
    const typeMatch = filterType === "all" || transfer.type === filterType;
    const zoneMatch = filterZone === "all" || transfer.zone === filterZone;
    return typeMatch && zoneMatch;
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
        
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-yellow-500/20 rounded-full blur-2xl" />
        
        <div className="container relative z-10 h-full flex flex-col justify-center px-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm mb-4">
              <Car className="h-4 w-4" />
              <span>Premium Transfer Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Dubai Airport<br />
              <span className="text-primary">Private Transfers</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl mb-6">
              Zone-based airport transfers with meet & greet service
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
        {/* Filter Buttons - Type */}
        <div className="flex flex-wrap gap-3 mb-4">
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
        </div>

        {/* Filter Buttons - Zone */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Button 
            variant={filterZone === "all" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setFilterZone("all")}
          >
            All Zones
          </Button>
          <Button 
            variant={filterZone === "zone1" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setFilterZone("zone1")}
          >
            <MapPin className="h-3 w-3 mr-1" />
            Zone 1
          </Button>
          <Button 
            variant={filterZone === "zone2" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setFilterZone("zone2")}
          >
            <MapPin className="h-3 w-3 mr-1" />
            Zone 2
          </Button>
          <Button 
            variant={filterZone === "zone3" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setFilterZone("zone3")}
          >
            <MapPin className="h-3 w-3 mr-1" />
            Zone 3
          </Button>
          <Button 
            variant={filterZone === "zone4" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setFilterZone("zone4")}
          >
            <MapPin className="h-3 w-3 mr-1" />
            Zone 4
          </Button>
          <Button 
            variant={filterZone === "zone5" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setFilterZone("zone5")}
          >
            <MapPin className="h-3 w-3 mr-1" />
            Zone 5
          </Button>
        </div>

        <p className="text-muted-foreground mb-6">{filteredTransfers.length} transfers available</p>

        {/* Transfer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTransfers.map((transfer) => (
            <TransferCard
              key={transfer.id}
              transfer={transfer}
              badges={
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-medium">
                    {transfer.zone.replace('zone', 'Zone ')}
                  </span>
                  {transfer.type === "pickup" && (
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">Pickup</span>
                  )}
                  {transfer.type === "dropoff" && (
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">Dropoff</span>
                  )}
                </div>
              }
            />
          ))}
        </div>

        {/* Zone Info Section */}
        <div className="mt-12 bg-muted/50 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Dubai Airport Transfer Zones</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(dubaiZones).map(([key, zone]) => (
              <div key={key} className="bg-background rounded-lg p-4 border">
                <h3 className="font-semibold text-primary mb-2">{zone.name}</h3>
                <p className="text-sm text-muted-foreground">{zone.areas}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Vehicle Options</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>• 4 Seater Sedan: 1-4 passengers (2 big bags, 2 hand bags)</li>
                <li>• 7 Seater SUV: 1-7 passengers (4 big bags, 4 hand bags)</li>
                <li>• 12 Seater Mini Bus: 1-12 passengers (10 big bags, 10 hand bags)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Important Notes</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>• Meet & greet service at Dubai International Airport</li>
                <li>• Please keep 3 hours difference between arrival and pickup</li>
                <li>• Free cancellation up to 72 hours before pickup</li>
                <li>• 24/7 customer support available</li>
                <li>• All vehicles are air-conditioned and well-maintained</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DubaiTransfersNew;
