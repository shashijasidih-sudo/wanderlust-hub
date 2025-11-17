import { useState } from "react";
import { Grid, List, ShoppingCart, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ActivityCard from "@/components/ActivityCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const activities = [
  { title: "Bangkok Temple Walking Tour: Grand Palace & Reclining Buddha", price: 2300, image: "https://images.unsplash.com/photo-1563492065567-7a0b2e7d1a3e?w=800&auto=format&fit=crop", slug: "" },
  { title: "Bangkok Walking Tour: Wat Arun, Wat Pho, Wat Traimit", price: 2400, image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop", slug: "" },
  { title: "Bangkok City Tour by Boat", price: 3700, image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop", slug: "" },
  { title: "Bangkok City & Temple Tour + Gems Gallery", price: 1800, image: "https://images.unsplash.com/photo-1563492065567-7a0b2e7d1a3e?w=800&auto=format&fit=crop", slug: "" },
  { title: "Double World Heritage Sunset Tour + Chinatown Food", price: 5900, image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop", slug: "" },
  { title: "Bangkok City & Temple Tour (Golden Buddha, Marble Temple)", price: 2000, image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop", slug: "" },
  { title: "Ayutthiya Day Tour", price: 5000, image: "https://images.unsplash.com/photo-1563492065567-7a0b2e7d1a3e?w=800&auto=format&fit=crop", slug: "" },
  { title: "Best of Bangkok: Grand Palace + Emerald Buddha + Reclining Buddha", price: 2300, image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop", slug: "" },
  { title: "Bangkok By Boat: Grand Palace + Emerald Buddha", price: 2200, image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop", slug: "" },
  { title: "Baiyoke Floating Market Buffet", price: 1600, image: "https://images.unsplash.com/photo-1563492065567-7a0b2e7d1a3e?w=800&auto=format&fit=crop", slug: "" },
  { title: "Sea Life Aquarium Bangkok", price: 3300, image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop", slug: "" },
  { title: "Viva Alangka Dinner Cruise + Transfer", price: 4000, image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop", slug: "" },
  { title: "Health Land Thai Massage (120 mins)", price: 2600, image: "https://images.unsplash.com/photo-1563492065567-7a0b2e7d1a3e?w=800&auto=format&fit=crop", slug: "" },
  { title: "Health Land 500 THB Voucher", price: 2000, image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop", slug: "" },
  { title: "Foot Reflexology (60 mins)", price: 1600, image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop", slug: "" },
  { title: "Ayutthaya Glittering Tour + Sunset Cruise", price: 4000, image: "https://images.unsplash.com/photo-1563492065567-7a0b2e7d1a3e?w=800&auto=format&fit=crop", slug: "" },
  { title: "Chao Phraya Princess Dinner Cruise (Private Transfer)", price: 4500, image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop", slug: "" },
  { title: "Princess Dinner Cruise: Valentine's", price: 4300, image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop", slug: "" },
  { title: "Chaophraya River Dinner Cruise (Join Transfer)", price: 3500, image: "https://images.unsplash.com/photo-1563492065567-7a0b2e7d1a3e?w=800&auto=format&fit=crop", slug: "" },
  { title: "Safari World & Marine Park (Join Transfer)", price: 4100, image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop", slug: "/safari-world" },
  { title: "Mahanakhon SkyWalk", price: 3000, image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop", slug: "" },
  { title: "Maeklong Market + Floating Market", price: 2800, image: "https://images.unsplash.com/photo-1563492065567-7a0b2e7d1a3e?w=800&auto=format&fit=crop" },
  { title: "Bangkok Night Tuk-Tuk Tour", price: 4000, image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop" },
  { title: "Dream World Bangkok Super Visa + Transfer", price: 3600, image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop" },
  { title: "Don Mueang Airport → Pattaya", price: 5100, image: "https://images.unsplash.com/photo-1563492065567-7a0b2e7d1a3e?w=800&auto=format&fit=crop" },
  { title: "Don Mueang Airport → Bangkok", price: 3000, image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop" },
  { title: "Suvarnabhumi Airport → Bangkok", price: 3100, image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop" },
  { title: "Suvarnabhumi Airport → Pattaya", price: 4000, image: "https://images.unsplash.com/photo-1563492065567-7a0b2e7d1a3e?w=800&auto=format&fit=crop" },
  { title: "Suvarnabhumi → Tiger Topia → Pattaya", price: 5600, image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop" },
  { title: "Bangkok Hotel → Pattaya Hotel", price: 4200, image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop" },
  { title: "Pattaya Hotel → Bangkok Hotel", price: 4200, image: "https://images.unsplash.com/photo-1563492065567-7a0b2e7d1a3e?w=800&auto=format&fit=crop" },
];

const categories = [
  "City Tours", "Culture & Attractions", "Adventure Tours", "Sightseeing Tours",
  "Boat & Cruise Tours", "Theme Parks", "Wildlife & Zoo", "Nightlife",
  "Shows & Entertainment", "Water Activities", "Transfers", "Special Experiences"
];

const Bangkok = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState([1600, 5900]);
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
            <Input placeholder="Search activities..." className="flex-1" />
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
                  max={5900}
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