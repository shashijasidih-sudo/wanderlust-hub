import { useState } from "react";
import { Grid, List, ShoppingCart, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ActivityCard from "@/components/ActivityCard";
import CityNavigation from "@/components/CityNavigation";
import MobileFilters from "@/components/MobileFilters";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SearchInput from "@/components/SearchInput";

import phuketLongtailBoat from "@/assets/phuket-longtail-boat-1.jpg";
import phuketBigBoat from "@/assets/phuket-big-boat-1.jpg";
import phuketSpeedboat from "@/assets/phuket-speedboat-1.jpg";
import phuketKayaks from "@/assets/phuket-kayaks-beach-1.jpg";
import phuketIslandView from "@/assets/phuket-island-viewpoint-1.jpg";
import phuketMayaBay from "@/assets/phuket-maya-bay-1.jpg";
import phuketBoatTour from "@/assets/phuket-boat-tour-1.jpg";

const activities = [
  { title: "Full Day Tour from Phuket to Phi Phi Island, Maya Bay and Khai Island by Speedboat with National Park Fee", price: 4951, image: phuketSpeedboat, slug: "phi-phi-island" },
  { title: "From Phuket: Phi Phi Island Guided Tour by Big Boat with Normal Transfer", price: 3985, image: phuketBigBoat, slug: "phi-phi-island" },
  { title: "Phi Phi Island Tour by Big Boat By Royal Jet Cruiser (First Class)", price: 5555, image: phuketBoatTour, slug: "phi-phi-island" },
  { title: "Phi Phi-Maya Bay-Khai Full day Tour by Speedboat (Excluded national marine fee)", price: 4347, image: phuketMayaBay, slug: "phi-phi-island" },
  { title: "Dolphin Bay Phuket Admission Ticket with Transfer", price: 3410, image: phuketIslandView, slug: "dolphin-bay-phuket" },
  { title: "Phang Nga Bay (James Bond Island) Sea Canoe Tour by Long tail Boat", price: 4468, image: phuketLongtailBoat, slug: "james-bond-island" },
  { title: "Phang Nga Bay (James Bond Island) Tour with Lunch By Long Tail Boat", price: 3985, image: phuketKayaks, slug: "james-bond-island" },
  { title: "Phuket City Tour and Tiger Experience: Tiger Only", price: 4589, image: phuketIslandView, slug: "selfie-tigers" },
  { title: "Phuket City Tour: Sightseeing and Night Market Everyday", price: 2053, image: phuketMayaBay, slug: "phuket-city-night-market" },
  { title: "Phuket City Tour and Tiger Experience: Tiger + ATV (30 Mins)", price: 5434, image: phuketBoatTour, slug: "selfie-tigers" },
  { title: "5 km Rafting Adventure + Monkey Caves +ATV Ride + Elephant Trekking + Flying Fox + Lunch", price: 7245, image: phuketLongtailBoat, slug: "elephant-safari" },
  { title: "Phuket Simon Cabaret Show Ticket with Join Roundtrip Transfer", price: 2268, image: phuketSpeedboat, slug: "phuket-simon-cabaret" },
  { title: "Phuket Carnival Magic Admission Ticket with Hotel Transfer", price: 6426, image: phuketIslandView, slug: "phuket-carnival-magic" },
  { title: "Muslim-Friendly Phuket Tour: A Halal Travel Experience", price: 8820, image: phuketBoatTour, slug: "phuket-muslim-friendly-tour" },
];

const categories = [
  "City Tours", "Culture & Attractions", "Adventure Tours", "Sightseeing Tours",
  "Boat & Cruise Tours", "Theme Parks", "Wildlife & Zoo", "Nightlife",
  "Shows & Entertainment", "Water Activities", "Transfers", "Special Experiences"
];

const Phuket = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState([1800, 8500]);
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
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">Phuket Tours & Activities</h1>
            <p className="text-lg md:text-xl text-muted-foreground">{activities.length} Things to do in Phuket</p>
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
            <SearchInput placeholder="Search Phuket activities..." className="flex-1" cityFilter="Phuket" />
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

        <CityNavigation currentCity="Phuket" />

        {/* Mobile Filters */}
        <MobileFilters
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
          minPrice={1800}
          maxPrice={8500}
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
                  min={1800}
                  max={8500}
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

export default Phuket;
