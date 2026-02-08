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
import pattayaBoatTour from "@/assets/pattaya-boat-tour-1.jpg";
import pattayaSailboat from "@/assets/pattaya-sailboat-1.jpg";
import pattayaBoatsBeach from "@/assets/pattaya-boats-beach-1.jpg";
import pattayaTropicalBeach from "@/assets/pattaya-tropical-beach-1.jpg";
import pattayaLongtailBoats from "@/assets/pattaya-longtail-boats-1.jpg";
import pattayaWomanSea from "@/assets/pattaya-woman-sea-1.jpg";
import pattayaSpeedboat from "@/assets/pattaya-speedboat-1.jpg";
import pattayaIslandsBoats from "@/assets/pattaya-islands-boats-1.jpg";

const activities = [
  { title: "Discovery Pattaya City Tours with Floating Market and Lunch", price: 2175, image: pattayaBoatTour, slug: "pattaya-floating-market-tour" },
  { title: "Pattaya City Tour: Big Buddha Hill, Gems Museum and Gallery with Round Trip Transfer", price: 1207.5, image: pattayaSailboat, slug: "pattaya-big-buddha-gems" },
  { title: "Coral Island Join Tour with Indian Lunch", price: 603.75, image: pattayaBoatsBeach, slug: "coral-island-pattaya" },
  { title: "Nong Nooch Admission Fees with Show, Lunch and Round Trip Transfer from Pattaya", price: 3622.5, image: pattayaTropicalBeach, slug: "nong-nooch-garden" },
  { title: "Pattaya Dolphinarium Admission Ticket with Transfer", price: 3650, image: pattayaSpeedboat, slug: "pattaya-dolphinarium" },
  { title: "Muay Thai Pattaya Admission Ticket", price: 4830, image: pattayaLongtailBoats, slug: "muay-thai-pattaya" },
  { title: "Alcazar Show Pattaya Ticket with Transfer", price: 2420, image: pattayaWomanSea, slug: "alcazar-show-pattaya" },
  { title: "Pattaya Floating Market Guided Tour with Transfer", price: 3140, image: pattayaIslandsBoats, slug: "pattaya-floating-market-guided" },
  { title: "Lost in Nightlight - A Walking, Drinking, and Food Tasting Experience at Pattaya's Red Light District", price: 3745, image: pattayaBoatTour, slug: "pattaya-nightlife-walking" },
  { title: "Sunset Club and Pub Crawling Experience at Drinking Street in Pattaya", price: 6280, image: pattayaTropicalBeach, slug: "pattaya-pub-crawl" },
];

const categories = [
  "City Tours", "Culture & Attractions", "Adventure Tours", "Sightseeing Tours",
  "Boat & Cruise Tours", "Theme Parks", "Wildlife & Zoo", "Nightlife",
  "Shows & Entertainment", "Water Activities", "Transfers", "Special Experiences"
];

const Pattaya = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('price-low');
  const [priceRange, setPriceRange] = useState([603.75, 6280]);
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
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">Pattaya Tours & Activities</h1>
            <p className="text-lg md:text-xl text-muted-foreground">{activities.length} Things to do in Pattaya</p>
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
            <SearchInput placeholder="Search Pattaya activities..." className="flex-1" cityFilter="Pattaya" />
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

        <CityNavigation currentCity="Pattaya" />

        {/* Mobile Filters */}
        <MobileFilters
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
          minPrice={603.75}
          maxPrice={6280}
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
                  min={603.75}
                  max={6280}
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

export default Pattaya;
