import { useState } from "react";
import { Grid, List, ShoppingCart, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ActivityCard from "@/components/ActivityCard";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SearchInput from "@/components/SearchInput";

const activities = [
  { title: "Bangkok's Iconic Three Temple Tour with Grand Palace and Canal Tour", price: 10020, image: "https://images.unsplash.com/photo-1563492065567-7a0b2e7d1a3e?w=800&auto=format&fit=crop", slug: "/bangkok-three-temples" },
  { title: "Bangkok's Famous Three Temple Wat Arun, Wat Pho, and Wat Traimit Private City and Cultural Tour", price: 10020, image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop", slug: "/bangkok-wat-arun-pho-traimit" },
  { title: "Bangkok City Tour by Boat from Meeting Point", price: 3700, image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop", slug: "/bangkok-city-boat-tour" },
  { title: "Bangkok City and Temple Tours with Gems Gallery", price: 1800, image: "https://images.unsplash.com/photo-1563492065567-7a0b2e7d1a3e?w=800&auto=format&fit=crop", slug: "/bangkok-city-gems-gallery" },
  { title: "Double World Heritage Bangkok City Tour: Sunset at Wat Arun and Chinatown Street Food Experience (Join-In)", price: 5900, image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop", slug: "/bangkok-wat-arun-chinatown" },
  { title: "Bangkok City and Temple Tour with Golden Buddha, Marble Temple, Mini Reclining Buddha, and Gems Gallery", price: 2000, image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop", slug: "/bangkok-golden-marble-buddha" },
  { title: "Ayutthaya Temple Join Tour from Bangkok by Road with Transfer", price: 5000, image: "https://images.unsplash.com/photo-1563492065567-7a0b2e7d1a3e?w=800&auto=format&fit=crop", slug: "/ayutthaya-temple-tour" },
  { title: "The Best of Bangkok: Royal Grand Palace, Emerald Buddha and Reclining Buddha", price: 2300, image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop", slug: "/bangkok-grand-palace-emerald" },
  { title: "All Day Buffet at Baiyoke Floating Market on 75th floor", price: 2200, image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop", slug: "/baiyoke-buffet" },
  { title: "Bangkok Sea Life Aquarium and Madame Tussauds Admission Ticket (Off Peak Day Timing)", price: 1600, image: "https://images.unsplash.com/photo-1563492065567-7a0b2e7d1a3e?w=800&auto=format&fit=crop", slug: "/sea-life-madame-tussauds" },
  { title: "Viva Alangka Dinner Cruise from Asiatique with Transfer", price: 3300, image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop", slug: "/viva-alangka-cruise" },
  { title: "Health Land Gift Voucher: Traditional Thai Massage (120 Min)", price: 4000, image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop", slug: "/massage-coupons" },
  { title: "Ayutthaya Glittering Tours from Bangkok with Sunset Cruise Experience with transfers", price: 2600, image: "https://images.unsplash.com/photo-1563492065567-7a0b2e7d1a3e?w=800&auto=format&fit=crop", slug: "/ayutthaya-sunset-cruise" },
  { title: "Chao Phraya Princess Dinner Cruise in Bangkok with Private Transfer", price: 2000, image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop", slug: "/chao-phraya-princess-private" },
  { title: "Chao Phraya Princess Dinner Cruise: Valentine's Day Celebration", price: 1600, image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop", slug: "/chao-phraya-princess-valentine" },
  { title: "Chaophraya Princess River Dinner Cruise Over Chaophraya River with Join Transfer", price: 4000, image: "https://images.unsplash.com/photo-1563492065567-7a0b2e7d1a3e?w=800&auto=format&fit=crop", slug: "/chao-phraya-princess-join" },
  { title: "Bangkok Mahanakhon Sky Walk Admission Ticket", price: 4500, image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop", slug: "/bangkok-skywalk" },
  { title: "Maeklong Railway Market and Damnoensaduak Floating Market Tour in Bangkok", price: 4300, image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop", slug: "/maeklong-floating-market" },
  { title: "Bangkok Night Tour on TUK-TUK Minimum 2 PAX", price: 3500, image: "https://images.unsplash.com/photo-1563492065567-7a0b2e7d1a3e?w=800&auto=format&fit=crop", slug: "/bangkok-tuk-tuk-night" },
  { title: "Dream World Bangkok Super Visa Admission Ticket with Transfer", price: 4100, image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop", slug: "/dream-world-bangkok" },
];

const categories = [
  "City Tours", "Culture & Attractions", "Adventure Tours", "Sightseeing Tours",
  "Boat & Cruise Tours", "Theme Parks", "Wildlife & Zoo", "Nightlife",
  "Shows & Entertainment", "Water Activities", "Transfers", "Special Experiences"
];

const Bangkok = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popular');
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
        <div className="bg-card shadow-card rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-foreground">Bangkok Tours & Activities</h1>
            <p className="text-xl text-muted-foreground">{activities.length} Things to do in Bangkok</p>
            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="price-low">Price (Low → High)</SelectItem>
                  <SelectItem value="price-high">Price (High → Low)</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <SearchInput placeholder="Search Bangkok activities..." className="flex-1" />
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
            >
              <List className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="flex gap-8">
          <aside className="w-80 flex-shrink-0">
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
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-6'}>
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

export default Bangkok;