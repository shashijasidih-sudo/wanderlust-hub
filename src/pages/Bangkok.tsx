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

// Import local assets
import bangkokSkywalkHero from "@/assets/bangkok-skywalk-hero.jpg";
import massageHero from "@/assets/massage-coupon-hero.jpg";
import floatingMarket1 from "@/assets/floating-market-daylight-1.jpg";
import bangkokTemple1 from "@/assets/bangkok-temple-1.jpg";
import ayutthayaSunset1 from "@/assets/ayutthaya-sunset-1.jpg";
import cruiseNight1 from "@/assets/cruise-night-1.jpg";
import cruiseNight2 from "@/assets/cruise-night-2.jpg";

const activities = [
  // Temple & City Tours
  { title: "Bangkok's Iconic Three Temple Tour with Grand Palace and Canal Tour", price: 10845, image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop", slug: "/thailand/bangkok/wat-arun-wat-pho-golden-buddha-tour" },
  { title: "Bangkok's Famous Three Temple Wat Arun, Wat Pho, and Wat Traimit Private City and Cultural Tour", price: 4915, image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&auto=format&fit=crop", slug: "/thailand/bangkok/three-temples-bangkok-city-tour-with-transfer" },
  { title: "Bangkok City Tour by Boat from Meeting Point", price: 3570, image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop", slug: "/thailand/bangkok/chao-phraya-river-boat-bangkok-city-tour" },
  { title: "Bangkok City and Temple Tours with Gems Gallery", price: 1960, image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&auto=format&fit=crop", slug: "/thailand/bangkok/gems-gallery-bangkok-tickets" },
  { title: "Double World Heritage Bangkok City Tour: Sunset at Wat Arun and Chinatown Street Food Experience (Join-In)", price: 5044, image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&auto=format&fit=crop", slug: "/thailand/bangkok/wat-arun-chinatown-tour" },
  { title: "Bangkok City and Temple Tour with Golden Buddha, Marble Temple, Mini Reclining Buddha, and Gems Gallery", price: 3642, image: bangkokTemple1, slug: "/thailand/bangkok/golden-buddha-marble-temple-bangkok-city-tour" },
  { title: "Ayutthaya Temple Join Tour from Bangkok by Road with Transfer", price: 5922, image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=800&auto=format&fit=crop", slug: "/thailand/bangkok/ayutthaya-day-tour-from-bangkok" },
  { title: "The Best of Bangkok: Royal Grand Palace, Emerald Buddha and Reclining Buddha", price: 2646, image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&auto=format&fit=crop", slug: "/thailand/bangkok/grand-palace-wat-phra-kaew-tour" },
  
  // Other Activities
  { title: "Baiyoke Sky Restaurant Admission Ticket", price: 1478, image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop", slug: "/thailand/bangkok/baiyoke-buffet" },
  { title: "Bangkok Sea Life Aquarium and Madame Tussauds Admission Ticket", price: 4215, image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop", slug: "/thailand/bangkok/sea-life-madame-tussauds-tickets" },
  
  // Cruise Activities
  { title: "Viva Alangka Dinner Cruise from Asiatique with Transfer", price: 4915, image: cruiseNight1, slug: "/thailand/bangkok/viva-alangka-dinner-cruise" },
  { title: "Ayutthaya Glittering Tours from Bangkok with Sunset Cruise Experience with transfers", price: 5245, image: ayutthayaSunset1, slug: "/thailand/bangkok/ayutthaya-sunset-river-cruise" },
  { title: "Chao Phraya Princess Dinner Cruise in Bangkok with Private Transfer", price: 5545, image: cruiseNight2, slug: "/thailand/bangkok/chao-phraya-princess-dinner-cruise-with-private-transfer" },
  { title: "Chao Phraya Princess Dinner Cruise: Valentine's Day Celebration", price: 3150, image: cruiseNight1, slug: "/thailand/bangkok/chao-phraya-princess-valentine-dinner-cruise" },
  { title: "Chaophraya Princess River Dinner Cruise Over Chaophraya River with Join Transfer", price: 4410, image: cruiseNight2, slug: "/thailand/bangkok/chao-phraya-princess-dinner-cruise-with-transfer" },
  { title: "River Cruise by Chao Phraya Princess Admission Ticket With Indian or International Dinner (No Transfer)", price: 3150, image: cruiseNight1, slug: "/thailand/bangkok/chao-phraya-princess-dinner-cruise" },
  
  // Other Activities
  { title: "Health Land Gift Voucher: Traditional Thai Massage (120 Min)", price: 2775, image: massageHero, slug: "/thailand/bangkok/thai-massage-spa-deals-bangkok" },
  { title: "Bangkok Mahanakhon Sky Walk Admission Ticket", price: 4536, image: bangkokSkywalkHero, slug: "/thailand/bangkok/mahanakhon-skywalk-tickets" },
  
  // Railway and Floating Market
  { title: "Maeklong Railway Market and Damnoensaduak Floating Market Tour in Bangkok (Join Tour)", price: 3405, image: floatingMarket1, slug: "/thailand/bangkok/maeklong-floating-market-tour" },
  
  // Other Activities
  { title: "Bangkok Night Tour on TUK-TUK Minimum 2 PAX", price: 5040, image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?w=800&auto=format&fit=crop", slug: "/thailand/bangkok/tuk-tuk-night-tour-bangkok" },
  { title: "Dream World Bangkok Super Visa Admission Ticket with Lunch + Transfer", price: 4285, image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&auto=format&fit=crop", slug: "/thailand/bangkok/dream-world-bangkok-tickets" },
];

const categories = [
  "City Tours", "Culture & Attractions", "Adventure Tours", "Sightseeing Tours",
  "Boat & Cruise Tours", "Theme Parks", "Wildlife & Zoo", "Nightlife",
  "Shows & Entertainment", "Water Activities", "Transfers", "Special Experiences"
];

const Bangkok = () => {
  const { formatPrice } = useCurrency();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('price-low');
  const [priceRange, setPriceRange] = useState([1600, 11000]);
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
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">Bangkok Tours & Activities</h1>
            <p className="text-lg md:text-xl text-muted-foreground">{activities.length} Things to do in Bangkok</p>
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
            <SearchInput placeholder="Search Bangkok activities..." className="flex-1" cityFilter="Bangkok" />
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

        <CityNavigation currentCity="Bangkok" />

        {/* Mobile Filters */}
        <MobileFilters
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
          minPrice={1600}
          maxPrice={11000}
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
                  min={1600}
                  max={11000}
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
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mb-6">
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

      <BookTransfersSection
        city="Bangkok"
        transfers={[
          {
            title: "Suvarnabhumi Airport to Bangkok Hotel",
            desc: "Private, air-conditioned transfer from BKK airport straight to your Bangkok hotel. 24/7 service with meet & greet.",
            price: 2700,
            img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop",
            slug: "/thailand/bangkok/suvarnabhumi-airport-to-bangkok-hotel-transfer",
          },
          {
            title: "Don Mueang Airport to Bangkok Hotel",
            desc: "Hassle-free DMK airport pickup with professional driver and comfortable sedan or minivan.",
            price: 2600,
            img: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&auto=format&fit=crop",
            slug: "/thailand/bangkok/don-mueang-airport-to-bangkok-hotel-transfer",
          },
          {
            title: "Bangkok Hotel to Suvarnabhumi Airport",
            desc: "Timed departure transfer from your hotel to BKK airport. Punctual pick-up so you never miss your flight.",
            price: 2700,
            img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop",
            slug: "/thailand/bangkok/bangkok-hotel-to-suvarnabhumi-airport-transfer",
          },
          {
            title: "Bangkok Hotel to Pattaya Hotel Transfer",
            desc: "Comfortable private transfer from Bangkok to Pattaya — door-to-door, with luggage assistance.",
            price: 4200,
            img: "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?w=800&auto=format&fit=crop",
            slug: "/thailand/bangkok/bangkok-hotel-to-pattaya-hotel-transfer",
          },
        ]}
      />

      <Footer />
    </div>
  );
};

export default Bangkok;
