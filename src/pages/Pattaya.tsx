import { useState } from "react";
import { useCurrency } from "@/contexts/CurrencyContext";
import { Grid, List, ShoppingCart, Mail, Eye } from "lucide-react";
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
import pattayaBoatTour from "@/assets/floating-market-daylight-1.jpg";
import pattayaSailboat from "@/assets/pattaya-sailboat-1.jpg";
import pattayaBoatsBeach from "@/assets/pattaya-boats-beach-1.jpg";
import pattayaTropicalBeach from "@/assets/pattaya-tropical-beach-1.jpg";
import pattayaLongtailBoats from "@/assets/pattaya-longtail-boats-1.jpg";
import pattayaWomanSea from "@/assets/pattaya-woman-sea-1.jpg";
import pattayaSpeedboat from "@/assets/pattaya-speedboat-1.jpg";
import pattayaIslandsBoats from "@/assets/floating-market-daylight-2.jpg";
import alcazarShow1 from "@/assets/alcazar-show-1.jpg";
import pattayaNightlife1 from "@/assets/pattaya-nightlife-1.jpg";
import pattayaNightlife2 from "@/assets/pattaya-nightlife-2.jpg";
import muayThai1 from "@/assets/muay-thai-1.jpg";
import imagine79Show1 from "@/assets/imagine79-show-1.jpg";
import show69Pattaya1 from "@/assets/show69-pattaya-1.jpg";
import show89Pattaya1 from "@/assets/show89-pattaya-1.jpg";
import bigeyeShowPattaya1 from "@/assets/bigeye-show-pattaya-1.jpg";

const regularActivities = [
  { title: "Discovery Pattaya City Tours with Floating Market and Lunch", price: 2175, image: pattayaBoatTour, slug: "/thailand/pattaya/pattaya-floating-market-tour" },
  { title: "Pattaya City Tour: Big Buddha Hill, Gems Museum and Gallery with Round Trip Transfer", price: 1208, image: pattayaSailboat, slug: "/thailand/pattaya/big-buddha-gems-gallery-tour" },
  { title: "Coral Island Join Tour with Indian Lunch", price: 603.75, image: pattayaBoatsBeach, slug: "/thailand/pattaya/coral-island-tour-with-transfer-and-indian-lunch" },
  { title: "Nong Nooch Admission Fees with Show, Lunch and Round Trip Transfer from Pattaya", price: 3622.5, image: pattayaTropicalBeach, slug: "/thailand/pattaya/nong-nooch-tropical-garden-tickets" },
  { title: "Pattaya Dolphinarium Admission Ticket with Transfer", price: 3650, image: pattayaSpeedboat, slug: "/thailand/pattaya/pattaya-dolphinarium-show-tickets" },
  { title: "Muay Thai Pattaya Admission Ticket", price: 4830, image: muayThai1, slug: "/thailand/pattaya/muay-thai-boxing-show-pattaya" },
  { title: "Pattaya Floating Market Guided Tour with Transfer", price: 3140, image: pattayaIslandsBoats, slug: "/thailand/pattaya/pattaya-floating-market-guided-tour" },
  { title: "Lost in Nightlight - A Walking, Drinking, and Food Tasting Experience at Pattaya's Red Light District", price: 3745, image: pattayaNightlife1, slug: "/thailand/pattaya/pattaya-nightlife-walking-tour" },
  { title: "Sunset Club and Pub Crawling Experience at Drinking Street in Pattaya", price: 6280, image: pattayaNightlife2, slug: "/thailand/pattaya/pattaya-pub-crawl-night-tour" },
];

const adultShowActivities = [
  { title: "Alcazar Show Pattaya Ticket with Transfer", price: 2420, image: alcazarShow1, slug: "/thailand/pattaya/alcazar-cabaret-show-with-transfer" },
  { title: "Imagine 79 Show Pattaya with Transfer", price: 4000, image: imagine79Show1, slug: "/thailand/pattaya/79-show-pattaya-with-transfer" },
  { title: "Show 69 in Pattaya with Transfer", price: 3800, image: show69Pattaya1, slug: "/thailand/pattaya/69-show-pattaya-with-transfer" },
  { title: "Show 89 in Pattaya with Transfer", price: 6000, image: show89Pattaya1, slug: "/thailand/pattaya/89-show-pattaya-with-transfer" },
  { title: "Big Eye Show in Pattaya with Transfer", price: 6000, image: bigeyeShowPattaya1, slug: "/thailand/pattaya/99-show-pattaya-big-eye-with-transfer" },
];

const categories = [
  "City Tours", "Culture & Attractions", "Adventure Tours", "Sightseeing Tours",
  "Boat & Cruise Tours", "Theme Parks", "Wildlife & Zoo", "Nightlife",
  "Shows & Entertainment", "Water Activities", "Transfers", "Special Experiences"
];

const Pattaya = () => {
  const { formatPrice } = useCurrency();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('price-low');
  const [showAdultShows, setShowAdultShows] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const activities = showAdultShows ? adultShowActivities : regularActivities;
  const minPrice = Math.min(...activities.map(a => a.price));
  const maxPrice = Math.max(...activities.map(a => a.price));
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

  const handleToggleAdultShows = () => {
    setShowAdultShows(prev => {
      const next = !prev;
      const nextActivities = next ? adultShowActivities : regularActivities;
      const newMin = Math.min(...nextActivities.map(a => a.price));
      const newMax = Math.max(...nextActivities.map(a => a.price));
      setPriceRange([newMin, newMax]);
      setCurrentPage(1);
      return next;
    });
  };

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
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              {showAdultShows ? "Pattaya Adult Shows" : "Pattaya Tours & Activities"}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">{activities.length} {showAdultShows ? "Adult Shows" : "Things to do"} in Pattaya</p>
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
        <div className="flex gap-2 lg:hidden mb-4">
          <MobileFilters
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
            minPrice={minPrice}
            maxPrice={maxPrice}
            categories={categories}
          />
          <Button
            variant={showAdultShows ? 'default' : 'outline'}
            size="sm"
            className="flex items-center gap-2"
            onClick={handleToggleAdultShows}
          >
            <Eye className="h-4 w-4" />
            Adult Shows
          </Button>
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
                  min={minPrice}
                  max={maxPrice}
                  step={100}
                  className="mb-2"
                />
                <p className="text-sm text-muted-foreground">
                  {formatPrice(priceRange[0])} – {formatPrice(priceRange[1])}
                </p>
              </div>

              {/* Adult Shows Toggle */}
              <div>
                <Button
                  variant={showAdultShows ? 'default' : 'outline'}
                  className="w-full flex items-center gap-2"
                  onClick={handleToggleAdultShows}
                >
                  <Eye className="h-5 w-5" />
                  {showAdultShows ? "Show All Activities" : "Adult Shows"}
                </Button>
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

      <CityExploreLinks city="pattaya" />

      <BookTransfersSection
        city="Pattaya"
        transfers={[
          {
            title: "Suvarnabhumi Airport to Pattaya Hotel",
            desc: "Private BKK airport pickup straight to your Pattaya hotel — meet & greet, fixed pricing, 24/7.",
            price: 3800,
            img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop",
            slug: "/thailand/bangkok/suvarnabhumi-airport-to-pattaya-hotel-transfer",
          },
          {
            title: "Don Mueang Airport to Pattaya Hotel",
            desc: "Hassle-free DMK airport pickup with comfortable sedan or minivan to your Pattaya hotel.",
            price: 3800,
            img: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&auto=format&fit=crop",
            slug: "/thailand/bangkok/don-mueang-airport-to-pattaya-hotel-transfer",
          },
          {
            title: "Pattaya Hotel to Suvarnabhumi Airport",
            desc: "Punctual departure transfer from Pattaya to BKK airport — never miss your flight.",
            price: 3800,
            img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop",
            slug: "/thailand/pattaya/pattaya-hotel-to-suvarnabhumi-airport-transfer",
          },
          {
            title: "U-Tapao Airport to Pattaya Hotel",
            desc: "Quick private transfer from UTP airport to your Pattaya hotel with meet & greet service.",
            price: 2200,
            img: "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?w=800&auto=format&fit=crop",
            slug: "/thailand/pattaya/u-tapao-airport-to-pattaya-hotel-transfer",
          },
        ]}
      />

      <Footer />
    </div>
  );
};

export default Pattaya;
