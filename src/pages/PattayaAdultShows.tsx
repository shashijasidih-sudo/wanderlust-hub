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
import FAQSection from "@/components/activity-detail/FAQSection";
import { adultShowActivities } from "@/data/pattayaActivitiesData";
import { pattayaAdultShowsPageFaqs } from "@/data/pattayaActivityFaqs";

const SITE = "https://yellodae.com";
const PAGE_PATH = "/thailand/pattaya/adultshows/";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pattayaAdultShowsPageFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "Thailand", item: `${SITE}/thailand/` },
    { "@type": "ListItem", position: 3, name: "Pattaya", item: `${SITE}/thailand/pattaya/` },
    { "@type": "ListItem", position: 4, name: "Adult Shows (18+)", item: `${SITE}${PAGE_PATH}` },
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Pattaya Adult Shows (18+)",
  numberOfItems: adultShowActivities.length,
  itemListElement: adultShowActivities.map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: a.title,
    url: `${SITE}${a.slug}`,
  })),
};

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
        title="Pattaya Adult Shows 18+ | Alcazar, 79, 69, 89 & Big Eye Tickets"
        description="Book Pattaya adult shows (18+) online — Alcazar, Imagine 79, 69, 89 and Big Eye 99 Show tickets with hotel transfers. INR pricing, instant confirmation, Indian support."
        path={PAGE_PATH}
        jsonLd={[faqJsonLd, breadcrumbJsonLd, itemListJsonLd]}
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

        <div className="mt-10">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
            Pattaya Adult Shows — Frequently Asked Questions
          </h2>
          <FAQSection faqs={pattayaAdultShowsPageFaqs} />
        </div>
      </div>

      <CityExploreLinks city="pattaya" />
      <Footer />
    </div>
  );
};

export default PattayaAdultShows;
