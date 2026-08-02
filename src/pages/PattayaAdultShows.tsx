import { useEffect, useState } from "react";
import { useCurrency } from "@/contexts/CurrencyContext";
import { Link } from "react-router-dom";
import { Grid, List, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ActivityCard from "@/components/ActivityCard";
import CityNavigation from "@/components/CityNavigation";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import CityExploreLinks from "@/components/CityExploreLinks";
import Seo from "@/components/seo/Seo";
import { adultShowActivities } from "@/data/pattayaActivitiesData";

const PattayaAdultShows = () => {
  const { formatPrice } = useCurrency();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('price-low');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sorted = [...adultShowActivities].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Pattaya Adult Shows (18+) Tickets with Transfer | Yellodae"
        description="Book Pattaya adult shows online — Alcazar, Imagine 79, 69 Show, 89 Show and Big Eye Show with hotel transfers. 18+ only, instant confirmation, INR pricing."
        canonical="https://yellodae.com/thailand/pattaya/adultshows/"
      />
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="bg-card shadow-card rounded-lg p-4 md:p-6 mb-8">
          <Link to="/thailand/pattaya/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-3">
            <ArrowLeft className="h-4 w-4" /> Back to all Pattaya activities
          </Link>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">Pattaya Adult Shows (18+)</h1>
            <p className="text-lg md:text-xl text-muted-foreground">{adultShowActivities.length} Adult Shows in Pattaya</p>
            <div className="flex items-center gap-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 md:w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card z-50">
                  <SelectItem value="price-low">Price (Low → High)</SelectItem>
                  <SelectItem value="price-high">Price (High → Low)</SelectItem>
                </SelectContent>
              </Select>
              <Button variant={viewMode === 'grid' ? 'default' : 'outline'} size="icon" onClick={() => setViewMode('grid')}>
                <Grid className="h-5 w-5" />
              </Button>
              <Button variant={viewMode === 'list' ? 'default' : 'outline'} size="icon" className="hidden md:flex" onClick={() => setViewMode('list')}>
                <List className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            These shows are strictly for guests aged 18 and above. Prices start from {formatPrice(Math.min(...adultShowActivities.map(a => a.price)))} and include round-trip hotel transfers where mentioned.
          </p>
        </div>

        <CityNavigation currentCity="Pattaya" />

        <div className={viewMode === 'grid' ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6' : 'space-y-6'}>
          {sorted.map((activity, index) => (
            <ActivityCard key={activity.slug} {...activity} isRecommended={index < 2} viewMode={viewMode} />
          ))}
        </div>
      </div>

      <CityExploreLinks city="pattaya" />
      <Footer />
    </div>
  );
};

export default PattayaAdultShows;
