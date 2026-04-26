import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Car, Plane, Moon } from "lucide-react";
import { singaporeTransfersData } from "@/data/singaporeTransferData";
import TransferCard from "@/components/TransferCard";

const transfers = [
  {
    id: 1,
    title: "Singapore Airport Pick Up",
    subtitle: "Changi Airport to Hotel",
    price: 4000,
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 567,
    duration: "Transfer",
    capacity: "Up to 10 pax",
    slug: "/singapore/singapore-airport-pickup",
    type: "pickup",
    category: "airport",
    icon: Plane
  },
  {
    id: 2,
    title: "Singapore Airport Drop Off",
    subtitle: "Hotel to Changi Airport",
    price: 4000,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 489,
    duration: "Transfer",
    capacity: "Up to 10 pax",
    slug: "/singapore/singapore-airport-dropoff",
    type: "dropoff",
    category: "airport",
    icon: Plane
  },
  {
    id: 3,
    title: "Singapore Airport Night Pick Up",
    subtitle: "Late Night/Early Morning Transfer",
    price: 5000,
    image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 234,
    duration: "Night Transfer",
    capacity: "Up to 10 pax",
    slug: "/singapore/singapore-airport-night-pickup",
    type: "pickup",
    category: "night",
    icon: Moon
  }
];

const SingaporeTransfersNew = () => {
  const filterTypes = [
    { id: "all", label: "All Transfers" },
    { id: "pickup", label: "Pickups" },
    { id: "dropoff", label: "Dropoffs" },
    { id: "night", label: "Night Transfers" }
  ];

  const [filterType, setFilterType] = useState<string>("all");

  const filteredTransfers = transfers.filter(transfer => {
    if (filterType === "all") return true;
    if (filterType === "night") return transfer.category === "night";
    return transfer.type === filterType;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1920&auto=format&fit=crop)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="relative container h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Singapore Private Transfers
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Comfortable and reliable private transfers in Singapore with professional drivers
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {filterTypes.map((type) => (
              <Button
                key={type.id}
                variant={filterType === type.id ? "default" : "outline"}
                onClick={() => setFilterType(type.id)}
                className="min-w-[120px]"
              >
                {type.label}
              </Button>
            ))}
          </div>

          {/* Transfers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredTransfers.map((transfer) => {
              const IconComponent = transfer.icon;
              return (
                <TransferCard
                  key={transfer.id}
                  transfer={transfer}
                  badges={
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                      <IconComponent className="h-3 w-3 mr-1" />
                      {transfer.category === "night" ? "Night" : transfer.type === "pickup" ? "Pickup" : "Dropoff"}
                    </Badge>
                  }
                />
              );
            })}
          </div>

          {/* Info Section */}
          <div className="bg-muted rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Singapore Transfer Information</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Service Areas
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Geylang lor 1-22</li>
                  <li>• Little India</li>
                  <li>• Orchard</li>
                  <li>• Tanjong Pagar</li>
                  <li>• Chinatown</li>
                  <li>• Village Hotel Bugis</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Car className="h-5 w-5 text-primary" />
                  Vehicle Options
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>5 Seater:</strong> Perfect for small groups (1-5 passengers)</li>
                  <li>• <strong>10 Seater:</strong> Ideal for larger groups (6-10 passengers)</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Important Notes</h4>
              <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                <li>• Please be ready 15 minutes before your scheduled pickup time</li>
                <li>• For airport pickups, select timing 2.5 hours after flight landing</li>
                <li>• Night transfers available from 10:00 PM to 6:30 AM</li>
                <li>• Free cancellation up to 72-96 hours before departure</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

// Add missing import
import { useState } from "react";

export default SingaporeTransfersNew;
