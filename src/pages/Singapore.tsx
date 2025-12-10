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
  { title: "Singapore City Tour with Guide", price: 1600, image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&auto=format&fit=crop", slug: "singapore/singapore-city-tour" },
  { title: "Night Safari Singapore Tickets Only", price: 5000, image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&auto=format&fit=crop", slug: "singapore/night-safari-tickets" },
  { title: "Night Safari Singapore with Transfer", price: 4900, image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&auto=format&fit=crop", slug: "singapore/night-safari-transfer" },
  { title: "Night Safari with Indian Dinner & Transfer", price: 6500, image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&auto=format&fit=crop", slug: "singapore/night-safari-dinner" },
  { title: "Sentosa 4D Adventureland - 2 Rides", price: 2100, image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&auto=format&fit=crop", slug: "singapore/sentosa-4d-2rides" },
  { title: "Sentosa 4D Adventureland - 3 Rides", price: 3000, image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&auto=format&fit=crop", slug: "singapore/sentosa-4d-3rides" },
  { title: "Sentosa Cable Car Roundtrip Pass", price: 2500, image: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=800&auto=format&fit=crop", slug: "singapore/sentosa-cable-car" },
  { title: "Sentosa Wings of Time with Transfers", price: 1900, image: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=800&auto=format&fit=crop", slug: "singapore/sentosa-wings-time" },
  { title: "Sentosa Sky Helix", price: 1500, image: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=800&auto=format&fit=crop", slug: "singapore/sentosa-sky-helix" },
  { title: "Singapore River Cruise Tickets", price: 2800, image: "https://images.unsplash.com/photo-1555217851-6141535bd771?w=800&auto=format&fit=crop", slug: "singapore/singapore-river-cruise" },
  { title: "Gardens by the Bay + Flower Dome + Cloud Forest", price: 3100, image: "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?w=800&auto=format&fit=crop", slug: "singapore/gardens-by-the-bay" },
  { title: "Adventure Cove Water Park Tickets", price: 3800, image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&auto=format&fit=crop", slug: "singapore/adventure-cove" },
  { title: "Singapore Flyer Ticket", price: 3600, image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&auto=format&fit=crop", slug: "singapore/singapore-flyer" },
  { title: "Singapore River Safari Tickets", price: 3700, image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&auto=format&fit=crop", slug: "singapore/river-safari" },
  { title: "Universal Studios Weekday Ticket", price: 7000, image: "https://images.unsplash.com/photo-1581351123004-757df051db8e?w=800&auto=format&fit=crop", slug: "singapore/universal-studios-weekday" },
  { title: "Universal Studios Weekend Ticket", price: 7200, image: "https://images.unsplash.com/photo-1581351123004-757df051db8e?w=800&auto=format&fit=crop", slug: "singapore/universal-studios-weekend" },
  { title: "Singapore Zoo + Tram Ride", price: 4000, image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&auto=format&fit=crop", slug: "singapore/singapore-zoo" },
  { title: "Rainforest Wild Asia with Transfer", price: 3800, image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&auto=format&fit=crop", slug: "singapore/rainforest-wild-asia" },
  { title: "Big Bus Singapore - Discover Ticket", price: 4800, image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&auto=format&fit=crop", slug: "singapore/big-bus-discover" },
  { title: "Big Bus Singapore Night City Tour", price: 5000, image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&auto=format&fit=crop", slug: "singapore/big-bus-night" },
];

const categories = [
  "City Tours", "Theme Parks", "Wildlife & Safari", "Sightseeing Tours",
  "Boat & Cruise Tours", "Adventure", "Nature & Gardens", "Nightlife",
  "Shows & Entertainment", "Water Activities", "Transfers", "Combo Packages"
];

const Singapore = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState([1500, 7500]);
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
            <h1 className="text-3xl font-bold text-foreground">Singapore Tours & Activities</h1>
            <p className="text-xl text-muted-foreground">{activities.length} Things to do in Singapore</p>
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
            <SearchInput placeholder="Search Singapore activities..." className="flex-1" />
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
                  min={1500}
                  max={7500}
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

export default Singapore;