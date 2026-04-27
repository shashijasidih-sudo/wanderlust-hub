import { useState } from "react";
import { useCurrency } from "@/contexts/CurrencyContext";
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
import BookTransfersSection from "@/components/BookTransfersSection";
import CityExploreLinks from "@/components/CityExploreLinks";

// Import Krabi images
import krabiTourBoat from "@/assets/krabi-tour-boat-1.jpg";
import krabiSailboat from "@/assets/krabi-sailboat-1.jpg";
import krabiKayaks from "@/assets/krabi-kayaks-beach-1.jpg";
import krabiIslandView from "@/assets/krabi-island-viewpoint-1.jpg";
import krabiLongtailBoats from "@/assets/krabi-longtail-boats-1.jpg";
import krabiBeachWoman from "@/assets/krabi-beach-woman-1.jpg";
import krabiSpeedboat from "@/assets/krabi-speedboat-1.jpg";
import krabiBoatTour from "@/assets/krabi-boat-tour-1.jpg";
import krabiTempleWoman from "@/assets/krabi-temple-woman-1.jpg";

const activities = [
  { title: "4 Islands by Longtail Boat (No National Park Fee)", price: 2415, image: krabiLongtailBoats, slug: "/thailand/krabi/4-island-tour-longtail-boat-no-park-fee-with-transfer" },
  { title: "4 Islands by Longtail Boat (With National Park Fee)", price: 4589, image: krabiKayaks, slug: "/thailand/krabi/4-island-tour-longtail-boat-with-transfer" },
  { title: "Emerald Pool + Hot Springs + Tiger Cave with Lunch", price: 3140, image: krabiTempleWoman, slug: "/thailand/krabi/full-day-emerald-pool-hot-springs-tiger-temple-tour-with-transfer" },
  { title: "Hong Islands by Longtail Boat", price: 3381, image: krabiIslandView, slug: "/thailand/krabi/hong-island-tour-longtail-boat-with-transfer" },
  { title: "7 Islands Sunset Tour BBQ with Longtail boat", price: 3743, image: krabiSailboat, slug: "/thailand/krabi/7-islands-tour-longtail-boat-with-transfer" },
  { title: "Hong Island Tour (By Speed Boat)", price: 4347, image: krabiSpeedboat, slug: "/thailand/krabi/hong-island-tour-speedboat-with-transfer" },
  { title: "4 Islands by Speedboat (With National Park Fee)", price: 4589, image: krabiTourBoat, slug: "/thailand/krabi/4-island-tour-speedboat-with-transfer" },
  { title: "Phi Phi Island by Speedboat with Transfer from Krabi", price: 4830, image: krabiBeachWoman, slug: "/thailand/phuket/full-day-phi-phi-island-tour-with-transfer" },
  { title: "7 Islands Sunset Tour BBQ with Speedboat", price: 4830, image: krabiBoatTour, slug: "/thailand/krabi/7-islands-tour-speedboat-with-transfer" },
  { title: "James Bond Island (Phang Nga Bay) Tour with Lunch By Long Tail Boat", price: 4951, image: krabiLongtailBoats, slug: "/thailand/krabi/james-bond-island" },
];

const categories = [
  "City Tours", "Culture & Attractions", "Adventure Tours", "Sightseeing Tours",
  "Boat & Cruise Tours", "Theme Parks", "Wildlife & Zoo", "Nightlife",
  "Shows & Entertainment", "Water Activities", "Transfers", "Special Experiences"
];

const Krabi = () => {
  const { formatPrice } = useCurrency();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('price-low');
  const [priceRange, setPriceRange] = useState([2000, 7500]);
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

  const PaginationControls = () => (
    totalPages > 1 ? (
      <div className="flex items-center justify-center gap-2">
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
    ) : null
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-card shadow-card rounded-lg p-4 md:p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">Krabi Tours & Activities</h1>
            <p className="text-lg md:text-xl text-muted-foreground">{activities.length} Things to do in Krabi</p>
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
            <SearchInput placeholder="Search Krabi activities..." className="flex-1" cityFilter="Krabi" />
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

        <CityNavigation currentCity="Krabi" />

        {/* Mobile Filters */}
        <MobileFilters
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
          minPrice={2000}
          maxPrice={7500}
          categories={categories}
        />

        {/* Top Pagination */}
        <div className="mb-6">
          <PaginationControls />
        </div>

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
                  min={2000}
                  max={7500}
                  step={100}
                  className="mb-2"
                />
                <p className="text-sm text-muted-foreground">
                  {formatPrice(priceRange[0])} – {formatPrice(priceRange[1])}
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
              <PaginationControls />
            </div>
          </main>
        </div>
      </div>

      <CityExploreLinks city="krabi" />

      <BookTransfersSection
        city="Krabi"
        transfers={[
          {
            title: "Krabi Airport to Ao Nang Hotel",
            desc: "Private KBV airport pickup with meet & greet, straight to your Ao Nang hotel.",
            price: 1800,
            img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop",
            slug: "/thailand/krabi/krabi-airport-to-ao-nang-hotel-transfer",
          },
          {
            title: "Krabi Hotel to Krabi Airport",
            desc: "Punctual departure transfer from your Krabi hotel to KBV airport — comfortable and on time.",
            price: 1800,
            img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop",
            slug: "/thailand/krabi/krabi-hotel-to-krabi-airport-transfer",
          },
          {
            title: "Krabi Airport to Phuket Hotel",
            desc: "Long-distance private transfer from KBV airport to your Phuket hotel — door-to-door comfort.",
            price: 4200,
            img: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&auto=format&fit=crop",
            slug: "/thailand/krabi/krabi-airport-to-phuket-hotel-transfer",
          },
          {
            title: "Krabi Hotel to Phuket Airport",
            desc: "Private transfer from Krabi to Phuket airport (HKT) for your onward flight.",
            price: 4200,
            img: "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?w=800&auto=format&fit=crop",
            slug: "/thailand/krabi/krabi-hotel-to-phuket-airport-transfer",
          },
        ]}
      />

      <Footer />
    </div>
  );
};

export default Krabi;
