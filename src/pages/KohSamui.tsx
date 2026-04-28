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

import beach from "@/assets/koh-samui-beach-1.jpg";
import fullMoon from "@/assets/koh-samui-full-moon-party-1.jpg";
import cruise from "@/assets/koh-samui-loy-krathong-cruise-1.jpg";

const activities = [
  {
    title: "Full Moon Party with Transfer, Koh Samui",
    price: 3800,
    image: fullMoon,
    slug: "/thailand/koh-samui/full-moon-party-koh-phangan-with-transfer",
  },
  {
    title: "White Orchid River Cruise – Loy Krathong Festival",
    price: 5000,
    image: cruise,
    slug: "/thailand/koh-samui/white-orchid-river-cruise-loy-krathong-festival",
  },
];

const categories = [
  "Beach & Islands", "Boat & Cruise Tours", "Nightlife", "Shows & Entertainment",
  "Adventure Tours", "Sightseeing Tours", "Special Experiences", "Transfers",
];

const KohSamui = () => {
  const { formatPrice } = useCurrency();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('price-low');
  const [priceRange, setPriceRange] = useState([1000, 10000]);

  const sortedActivities = [...activities].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  const filteredActivities = sortedActivities.filter(
    a => a.price >= priceRange[0] && a.price <= priceRange[1]
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="bg-card shadow-card rounded-lg p-4 md:p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">Koh Samui Tours & Activities</h1>
            <p className="text-lg md:text-xl text-muted-foreground">{activities.length} Things to do in Koh Samui</p>
            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 md:w-48"><SelectValue /></SelectTrigger>
                <SelectContent className="bg-card z-50">
                  <SelectItem value="price-low">Price (Low → High)</SelectItem>
                  <SelectItem value="price-high">Price (High → Low)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <SearchInput placeholder="Search Koh Samui activities..." className="flex-1" cityFilter="Koh Samui" />
            <Button variant={viewMode === 'grid' ? 'default' : 'outline'} size="icon" onClick={() => setViewMode('grid')}>
              <Grid className="h-5 w-5" />
            </Button>
            <Button variant={viewMode === 'list' ? 'default' : 'outline'} size="icon" onClick={() => setViewMode('list')} className="hidden md:flex">
              <List className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <CityNavigation currentCity="Koh Samui" />

        <MobileFilters
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
          minPrice={1000}
          maxPrice={10000}
          categories={categories}
        />

        <div className="flex gap-8">
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
                <Slider value={priceRange} onValueChange={setPriceRange} min={1000} max={10000} step={100} className="mb-2" />
                <p className="text-sm text-muted-foreground">{formatPrice(priceRange[0])} – {formatPrice(priceRange[1])}</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Tour Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center gap-2">
                      <Checkbox id={category} />
                      <label htmlFor={category} className="text-sm cursor-pointer">{category}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <div className={viewMode === 'grid' ? 'grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6' : 'space-y-6'}>
              {filteredActivities.map((activity, index) => (
                <ActivityCard key={index} {...activity} isRecommended={index < 3} viewMode={viewMode} />
              ))}
            </div>
          </main>
        </div>
      </div>

      <CityExploreLinks city="koh-samui" />

      <BookTransfersSection
        city="Koh Samui"
        transfers={[
          {
            title: "Koh Samui Airport (USM) to Hotel Transfer",
            desc: "Private USM airport pickup with meet & greet, straight to your Koh Samui hotel.",
            price: 1800,
            img: beach,
            slug: "/thailand/koh-samui/full-moon-party-koh-phangan-with-transfer",
          },
          {
            title: "Koh Samui Hotel to Koh Phangan Pier",
            desc: "Private transfer with onward boat to Koh Phangan for the Full Moon Party.",
            price: 2200,
            img: fullMoon,
            slug: "/thailand/koh-samui/full-moon-party-koh-phangan-with-transfer",
          },
        ]}
      />

      <Footer />
    </div>
  );
};

export default KohSamui;
