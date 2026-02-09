import { useState } from "react";
import { Grid, List, ShoppingCart, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ActivityCard from "@/components/ActivityCard";
import MobileFilters from "@/components/MobileFilters";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SearchInput from "@/components/SearchInput";

// Singapore-specific images
import singaporeCityTour from "@/assets/singapore-city-tour.jpg";
import singaporeNightSafari from "@/assets/singapore-night-safari.jpg";
import singaporeSentosa4d from "@/assets/singapore-sentosa-4d.jpg";
import singaporeCableCar from "@/assets/singapore-cable-car.jpg";
import singaporeWingsTime from "@/assets/singapore-wings-time.jpg";
import singaporeSkyHelix from "@/assets/singapore-sky-helix.jpg";
import singaporeRiverCruise from "@/assets/singapore-river-cruise.jpg";
import singaporeGardensBay from "@/assets/singapore-gardens-bay.jpg";
import singaporeAdventureCove from "@/assets/singapore-adventure-cove.jpg";
import singaporeFlyer from "@/assets/singapore-flyer.jpg";
import singaporeRiverSafari from "@/assets/singapore-river-safari.jpg";
import singaporeUniversalStudios from "@/assets/singapore-universal-studios.jpg";
import singaporeZoo from "@/assets/singapore-zoo.jpg";
import singaporeBigBus from "@/assets/singapore-big-bus.jpg";

const activities = [
  { title: "Singapore City Tour with Guide", price: 1815, image: singaporeCityTour, slug: "singapore/singapore-city-tour" },
  { title: "Night Safari Singapore Tickets Only", price: 4470, image: singaporeNightSafari, slug: "singapore/night-safari-tickets" },
  { title: "Night Safari Singapore with Transfer", price: 4955, image: singaporeNightSafari, slug: "singapore/night-safari-transfer" },
  { title: "Night Safari with Indian Dinner & Transfer", price: 6415, image: singaporeNightSafari, slug: "singapore/night-safari-dinner" },
  { title: "Sentosa 4D Adventureland - 2 Rides", price: 2060, image: singaporeSentosa4d, slug: "singapore/sentosa-4d-2rides" },
  { title: "Sentosa 4D Adventureland - 3 Rides", price: 2900, image: singaporeSentosa4d, slug: "singapore/sentosa-4d-3rides" },
  { title: "Sentosa Cable Car Roundtrip Pass", price: 2180, image: singaporeCableCar, slug: "singapore/sentosa-cable-car" },
  { title: "Sentosa Wings of Time with Transfers", price: 2656.5, image: singaporeWingsTime, slug: "singapore/sentosa-wings-time" },
  { title: "Sentosa Sky Helix", price: 1811.25, image: singaporeSkyHelix, slug: "singapore/sentosa-sky-helix" },
  { title: "Singapore River Cruise Tickets", price: 2173.5, image: singaporeRiverCruise, slug: "singapore/singapore-river-cruise" },
  { title: "Gardens by the Bay + Flower Dome + Cloud Forest", price: 2660, image: singaporeGardensBay, slug: "singapore/gardens-by-the-bay" },
  { title: "Adventure Cove Water Park Tickets", price: 2656.5, image: singaporeAdventureCove, slug: "singapore/adventure-cove" },
  { title: "Singapore Flyer Ticket", price: 3381, image: singaporeFlyer, slug: "singapore/singapore-flyer" },
  { title: "Singapore River Safari Tickets", price: 4467.75, image: singaporeRiverSafari, slug: "singapore/river-safari" },
  { title: "Universal Studios Weekday Ticket", price: 6762, image: singaporeUniversalStudios, slug: "singapore/universal-studios-weekday" },
  { title: "Universal Studios Weekend Ticket", price: 7872.9, image: singaporeUniversalStudios, slug: "singapore/universal-studios-weekend" },
  { title: "Singapore Zoo + Tram Ride", price: 3743.25, image: singaporeZoo, slug: "singapore/singapore-zoo" },
  { title: "Rainforest Wild Asia with Transfer", price: 3441.375, image: singaporeZoo, slug: "singapore/rainforest-wild-asia" },
  { title: "Big Bus Singapore - Discover Ticket", price: 4709.25, image: singaporeBigBus, slug: "singapore/big-bus-discover" },
  { title: "Big Bus Singapore Night City Tour", price: 4709.25, image: singaporeBigBus, slug: "singapore/big-bus-night" },
];

const categories = [
  "City Tours", "Theme Parks", "Wildlife & Safari", "Sightseeing Tours",
  "Boat & Cruise Tours", "Adventure", "Nature & Gardens", "Nightlife",
  "Shows & Entertainment", "Water Activities", "Transfers", "Combo Packages"
];

const Singapore = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('price-low');
  const [priceRange, setPriceRange] = useState([1500, 15000]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const sortedActivities = [...activities].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return Math.random() - 0.5;
    return 0;
  });

  const filteredActivities = sortedActivities.filter(
    activity => activity.price >= priceRange[0] && activity.price <= priceRange[1]
  );

  const totalPages = Math.ceil(filteredActivities.length / itemsPerPage);
  const paginatedActivities = filteredActivities.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-card shadow-card rounded-lg p-4 md:p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">Singapore Tours & Activities</h1>
            <p className="text-lg md:text-xl text-muted-foreground">{activities.length} Things to do in Singapore</p>
            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 md:w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card z-50">
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="price-low">Price (Low → High)</SelectItem>
                  <SelectItem value="price-high">Price (High → Low)</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <SearchInput placeholder="Search Singapore activities..." className="flex-1" cityFilter="Singapore" />
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="h-5 w-5" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setViewMode('list')}
              className="hidden md:flex"
            >
              <List className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Filters */}
           <MobileFilters
           priceRange={priceRange}
           onPriceRangeChange={setPriceRange}
           minPrice={1500}
           maxPrice={15000}
           categories={categories}
         />

        <div className="flex gap-8">
          {/* Desktop Sidebar - Hidden on mobile */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="bg-card shadow-card rounded-lg p-6 space-y-6 sticky top-4">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <ShoppingCart className="h-5 w-5 text-muted-foreground" />
                  <h3 className="font-semibold text-foreground">My Cart</h3>
                </div>
                <p className="text-sm text-muted-foreground">Shopping Cart is Empty</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <h3 className="font-semibold text-foreground">My Email Flyers</h3>
                </div>
                <p className="text-sm text-muted-foreground">Email Flyer is Empty</p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">Price Filter</h3>
            <Slider
                   value={priceRange}
                   onValueChange={setPriceRange}
                   min={1500}
                   max={15000}
                   step={100}
                   className="mb-2"
                 />
                <p className="text-sm text-muted-foreground">
                  INR {priceRange[0].toLocaleString('en-IN')} – INR {priceRange[1].toLocaleString('en-IN')}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">Tour Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center gap-2">
                      <Checkbox id={category} />
                      <label htmlFor={category} className="text-sm cursor-pointer">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <div className={viewMode === 'grid' ? 'grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6' : 'space-y-6'}>
              {paginatedActivities.map((activity, index) => (
                <ActivityCard
                  key={index}
                  {...activity}
                  isRecommended={index < 3}
                  viewMode={viewMode}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? 'default' : 'outline'}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                ))}
                {currentPage < totalPages && (
                  <Button variant="outline" onClick={() => setCurrentPage(currentPage + 1)}>
                    Next →
                  </Button>
                )}
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Singapore;
