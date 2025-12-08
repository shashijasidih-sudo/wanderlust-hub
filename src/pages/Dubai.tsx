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
  { title: "Dhow Cruise Dinner - Lower Deck with Transfers", price: 1900, image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop", slug: "dhow-cruise-creek-lower" },
  { title: "Dhow Cruise Dinner - Upper Deck with Transfers", price: 2100, image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&auto=format&fit=crop", slug: "dhow-cruise-creek-upper" },
  { title: "Desert Safari with Shisha on Table", price: 4600, image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800&auto=format&fit=crop", slug: "desert-safari-shisha" },
  { title: "Desert Safari with Sharing Transfer", price: 2900, image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800&auto=format&fit=crop", slug: "desert-safari-sharing" },
  { title: "Dubai City Tour", price: 1600, image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop", slug: "dubai-city-tour" },
  { title: "Dubai City Tour with Dubai Mall", price: 2000, image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&auto=format&fit=crop", slug: "dubai-city-tour-mall" },
  { title: "Dhow Dinner Cruise Marina - Lower Deck", price: 3000, image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&auto=format&fit=crop", slug: "dhow-cruise-marina-lower" },
  { title: "Dhow Dinner Cruise Marina - Upper Deck", price: 3600, image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&auto=format&fit=crop", slug: "dhow-cruise-marina-upper" },
  { title: "Global Village Dubai", price: 2700, image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop", slug: "global-village-dubai" },
  { title: "Abu Dhabi City Tour", price: 3000, image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop", slug: "abu-dhabi-city-tour" },
  { title: "Abu Dhabi City Tour + Ferrari World", price: 8400, image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&auto=format&fit=crop", slug: "abu-dhabi-ferrari-world" },
  { title: "Dubai Aquarium + Penguin Cove", price: 3800, image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop", slug: "dubai-aquarium-penguin" },
  { title: "Burj Khalifa 124/125 Non-Prime", price: 5000, image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&auto=format&fit=crop", slug: "burj-khalifa-non-prime" },
  { title: "Burj Khalifa 124/125 Prime", price: 6000, image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800&auto=format&fit=crop", slug: "burj-khalifa-prime" },
  { title: "Dubai Dolphin & Seal Show", price: 3200, image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop", slug: "dubai-dolphin-show" },
  { title: "Miracle Garden Dubai", price: 2700, image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop", slug: "miracle-garden-dubai" },
];

const categories = [
  "City Tours", "Culture & Attractions", "Adventure Tours", "Sightseeing Tours",
  "Boat & Cruise Tours", "Theme Parks", "Wildlife & Zoo", "Nightlife",
  "Shows & Entertainment", "Water Activities", "Transfers", "Special Experiences"
];

const Dubai = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState([1600, 8500]);
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
            <h1 className="text-3xl font-bold text-foreground">Dubai Tours & Activities</h1>
            <p className="text-xl text-muted-foreground">{activities.length} Things to do in Dubai</p>
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

export default Dubai;