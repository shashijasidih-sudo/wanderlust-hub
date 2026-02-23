import { useState } from "react";
import { Grid, List, ShoppingCart, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ActivityCard from "@/components/ActivityCard";
import MobileFilters from "@/components/MobileFilters";
import QuickBookWidget from "@/components/QuickBookWidget";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SearchInput from "@/components/SearchInput";

import dubaiDhowCruise from "@/assets/dubai-dhow-cruise-1.jpg";
import dubaiDesertWoman from "@/assets/dubai-desert-woman-1.jpg";
import dubaiDesertCouple2 from "@/assets/dubai-desert-couple-2.jpg";
import dubaiSkylineSunset from "@/assets/dubai-skyline-sunset-1.jpg";
import dubaiSkylineNight from "@/assets/dubai-skyline-night-1.jpg";
import dubaiGlobalVillage from "@/assets/dubai-global-village-1.jpg";
import dubaiAquariumFish from "@/assets/dubai-aquarium-fish-1.jpg";
import dubaiCityNight from "@/assets/dubai-city-night-1.jpg";
import dubaiDesertCouple from "@/assets/dubai-desert-couple-1.jpg";
import dubaiFountainShow from "@/assets/dubai-fountain-show-1.jpg";

const activities = [
  { title: "Dhow Creek Cruise Dinner - Lower Deck with Transfers", price: 2070.6, image: dubaiDhowCruise, slug: "dubai/dhow-cruise-creek-lower" },
  { title: "Dhow Creek Cruise Dinner - Upper Deck with Transfers", price: 2436, image: dubaiDhowCruise, slug: "dubai/dhow-cruise-creek-upper" },
  { title: "Desert Safari with Sharing Transfer", price: 3532.2, image: dubaiDesertCouple2, slug: "dubai/desert-safari-sharing" },
  { title: "Desert Safari with Shisha on Table", price: 5115.6, image: dubaiDesertWoman, slug: "dubai/desert-safari-shisha" },
  { title: "Dubai City Tour", price: 1461.6, image: dubaiSkylineSunset, slug: "dubai/dubai-city-tour" },
  { title: "Dubai City Tour with Dubai Mall", price: 2070.6, image: dubaiSkylineNight, slug: "dubai/dubai-city-tour-mall" },
  { title: "Dhow Dinner Cruise Marina - Lower Deck", price: 3654, image: dubaiDhowCruise, slug: "dubai/dhow-cruise-marina-lower" },
  { title: "Dhow Dinner Cruise Marina - Upper Deck", price: 4384.8, image: dubaiDhowCruise, slug: "dubai/dhow-cruise-marina-upper" },
  { title: "Global Village Dubai", price: 3288.6, image: dubaiGlobalVillage, slug: "dubai/global-village-dubai" },
  { title: "Abu Dhabi City Tour", price: 3288.6, image: dubaiSkylineSunset, slug: "dubai/abu-dhabi-city-tour" },
  { title: "Abu Dhabi City Tour + Ferrari World", price: 9744, image: dubaiSkylineNight, slug: "dubai/abu-dhabi-ferrari-world" },
  { title: "Dubai Aquarium + Penguin Cove", price: 4019.4, image: dubaiAquariumFish, slug: "dubai/dubai-aquarium-penguin" },
  { title: "Burj Khalifa 124/125 Non-Prime", price: 6090, image: dubaiSkylineNight, slug: "dubai/burj-khalifa-non-prime" },
  { title: "Burj Khalifa 124/125 Prime", price: 8526, image: dubaiSkylineSunset, slug: "dubai/burj-khalifa-prime" },
  { title: "Dubai Dolphin & Seal Show", price: 3532.2, image: dubaiAquariumFish, slug: "dubai/dubai-dolphin-show" },
  { title: "Miracle Garden Dubai", price: 2557.8, image: dubaiGlobalVillage, slug: "dubai/miracle-garden-dubai" },
  { title: "Dubai Fountain Show with Lake Ride Tickets", price: 2071, image: dubaiFountainShow, slug: "dubai/dubai-fountain-show" },
];

const categories = [
  "City Tours", "Culture & Attractions", "Adventure Tours", "Sightseeing Tours",
  "Boat & Cruise Tours", "Theme Parks", "Wildlife & Zoo", "Nightlife",
  "Shows & Entertainment", "Water Activities", "Transfers", "Special Experiences"
];

const PaginationControls = ({ currentPage, totalPages, onPageChange }: { currentPage: number; totalPages: number; onPageChange: (page: number) => void }) => {
  if (totalPages <= 1) return null;
  return (
    <div className="flex items-center justify-center gap-2 mb-6">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Button
          key={page}
          variant={currentPage === page ? 'default' : 'outline'}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Button>
      ))}
      {currentPage < totalPages && (
        <Button variant="outline" onClick={() => onPageChange(currentPage + 1)}>
          Next →
        </Button>
      )}
    </div>
  );
};

const Dubai = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('price-low');
  const [priceRange, setPriceRange] = useState([1400, 10000]);
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
        {/* Quick Book Widget */}
        <QuickBookWidget
          title="⚡ Quick Book Top Dubai Activities"
          items={[
            { title: "Desert Safari with Sharing Transfer", price: 3532, image: dubaiDesertCouple2, slug: "/desert-safari-sharing", rating: 4.8, badge: "Bestseller" },
            { title: "Burj Khalifa 124/125 Non-Prime", price: 6090, image: dubaiSkylineNight, slug: "/burj-khalifa-non-prime", rating: 4.9, badge: "Iconic" },
            { title: "Dhow Creek Cruise Dinner", price: 2071, image: dubaiDhowCruise, slug: "/dhow-cruise-creek-lower", rating: 4.7 },
            { title: "Dubai City Tour", price: 1462, image: dubaiSkylineSunset, slug: "/dubai-city-tour", rating: 4.6 },
            { title: "Global Village Dubai", price: 3289, image: dubaiGlobalVillage, slug: "/global-village-dubai", rating: 4.5 },
            { title: "Dubai Fountain Show + Lake Ride", price: 2071, image: dubaiFountainShow, slug: "/dubai-fountain-show", rating: 4.8, badge: "Popular" },
          ]}
        />

        <div className="bg-card shadow-card rounded-lg p-4 md:p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">Dubai Tours & Activities</h1>
            <p className="text-lg md:text-xl text-muted-foreground">{activities.length} Things to do in Dubai</p>
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
            <SearchInput placeholder="Search Dubai activities..." className="flex-1" />
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
          minPrice={1400}
          maxPrice={10000}
          categories={categories}
        />

        {/* Top Pagination */}
        <PaginationControls currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />

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
                  min={1400}
                  max={10000}
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

            {/* Bottom Pagination */}
            <div className="mt-8">
              <PaginationControls currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dubai;
