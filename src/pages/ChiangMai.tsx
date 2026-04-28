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

import doiSuthep from "@/assets/chiang-mai-doi-suthep-1.jpg";
import goldenTriangle from "@/assets/chiang-mai-chiang-rai-golden-triangle-1.jpg";
import inthanon from "@/assets/chiang-mai-doi-inthanon-1.jpg";
import van from "@/assets/chiang-mai-transfer-van-1.jpg";

const activities = [
  {
    title: "Chiang Mai City Temple Tour: Doi Suthep, Chedi Luang & Pha Lat with Transfer",
    price: 3900,
    image: doiSuthep,
    slug: "/thailand/chiang-mai/city-temple-tour-doi-suthep-chedi-luang-pha-lat-with-transfer",
  },
  {
    title: "Doi Inthanon National Park Full Day Tour from Chiang Mai",
    price: 4900,
    image: inthanon,
    slug: "/thailand/chiang-mai/doi-inthanon-national-park-full-day-tour",
  },
  {
    title: "Chiang Rai Day Trip: Golden Triangle with Long Neck Tribe",
    price: 6000,
    image: goldenTriangle,
    slug: "/thailand/chiang-mai/chiang-rai-golden-triangle-long-neck-tribe-day-trip",
  },
];

const categories = [
  "City Tours", "Culture & Attractions", "Adventure Tours", "Sightseeing Tours",
  "Nature & Mountains", "Tribal Village Tours", "Transfers", "Special Experiences",
];

const ChiangMai = () => {
  const { formatPrice } = useCurrency();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('price-low');
  const [priceRange, setPriceRange] = useState([2000, 10000]);

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
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">Chiang Mai Tours & Activities</h1>
            <p className="text-lg md:text-xl text-muted-foreground">{activities.length} Things to do in Chiang Mai</p>
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
            <SearchInput placeholder="Search Chiang Mai activities..." className="flex-1" cityFilter="Chiang Mai" />
            <Button variant={viewMode === 'grid' ? 'default' : 'outline'} size="icon" onClick={() => setViewMode('grid')}>
              <Grid className="h-5 w-5" />
            </Button>
            <Button variant={viewMode === 'list' ? 'default' : 'outline'} size="icon" onClick={() => setViewMode('list')} className="hidden md:flex">
              <List className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <CityNavigation currentCity="Chiang Mai" />

        <MobileFilters
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
          minPrice={2000}
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
                <Slider value={priceRange} onValueChange={setPriceRange} min={2000} max={10000} step={100} className="mb-2" />
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

      <CityExploreLinks city="chiang-mai" />

      <BookTransfersSection
        city="Chiang Mai"
        transfers={[
          {
            title: "Chiang Mai Town to Chiang Mai Airport (Mini Van, 3–9 Pax)",
            desc: "Private mini-van transfer from your Chiang Mai hotel to Chiang Mai airport (CNX).",
            price: 2600,
            img: van,
            slug: "/thailand/chiang-mai/chiang-mai-town-to-airport-mini-van",
          },
          {
            title: "Chiang Mai Town to Chiang Mai Airport (Sedan, 1–2 Pax)",
            desc: "Comfortable sedan car transfer from your Chiang Mai hotel to Chiang Mai airport.",
            price: 3000,
            img: van,
            slug: "/thailand/chiang-mai/chiang-mai-town-to-airport-sedan",
          },
          {
            title: "Chiang Mai Airport to Chiang Mai Town (Mini Van, 3–9 Pax)",
            desc: "Hassle-free CNX airport pickup with meet & greet, straight to your Chiang Mai hotel.",
            price: 2900,
            img: van,
            slug: "/thailand/chiang-mai/chiang-mai-airport-to-town-mini-van",
          },
          {
            title: "Chiang Mai Airport to Chiang Mai Town (Sedan, 1–2 Pax)",
            desc: "Private sedan CNX airport pickup straight to your Chiang Mai hotel.",
            price: 3000,
            img: van,
            slug: "/thailand/chiang-mai/chiang-mai-airport-to-town-sedan",
          },
        ]}
      />

      <Footer />
    </div>
  );
};

export default ChiangMai;
