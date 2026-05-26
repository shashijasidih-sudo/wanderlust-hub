import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutYellodaeSection from "@/components/AboutYellodaeSection";
import ThailandTrending from "@/components/ThailandTrending";
import SingaporeTrending from "@/components/SingaporeTrending";
import DubaiTrending from "@/components/DubaiTrending";
import TrendingActivities from "@/components/TrendingActivities";
import QuickDestinations from "@/components/QuickDestinations";
import InstaStories from "@/components/InstaStories";
import SmartDestinationGuides from "@/components/SmartDestinationGuides";
import TopThingsToDo from "@/components/TopThingsToDo";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import ActivityCategories from "@/components/ActivityCategories";
import Footer from "@/components/Footer";
import Seo from "@/components/seo/Seo";

const HOMEPAGE_JSONLD = [
  {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Yellodae",
    alternateName: "Yellodae Trails",
    url: "https://yellodae.com",
    logo: "https://yellodae.com/favicon.png",
    description:
      "Yellodae Trails is India's trusted travel partner for booking Thailand, Singapore, Dubai and Japan tours, activities, itineraries and private airport transfers — curated for Indian travelers with 24/7 WhatsApp support.",
    telephone: "+917061710810",
    email: "info@yellodae.com",
    address: { "@type": "PostalAddress", addressCountry: "IN" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
    priceRange: "$$",
    areaServed: [
      { "@type": "Country", name: "Thailand" },
      { "@type": "Country", name: "Singapore" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Japan" },
    ],
    knowsAbout: [
      "Thailand travel packages for Indians",
      "Krabi tours and activities",
      "Phuket tours and activities",
      "Bangkok and Pattaya itineraries",
      "Singapore holiday packages",
      "Dubai tours and activities",
      "Japan travel itineraries",
      "International airport transfers",
      "Budget travel guides for Indian travelers",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Yellodae",
    url: "https://yellodae.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://yellodae.com/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title="Book Thailand, Singapore, Dubai & Japan Travel Activities & Transfers for Indians with Ease | Yellodae Trails"
        description="Plan your dream international trip with Yellodae Trails. Explore Thailand, Krabi, Phuket, Singapore, Dubai & Japan travel packages, travel activities, itineraries, airport transfers and budget guides curated for Indian travelers."
        path="/"
        jsonLd={HOMEPAGE_JSONLD}
      />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutYellodaeSection />
        <ThailandTrending />
        <SingaporeTrending />
        <DubaiTrending />
        <TrendingActivities />
        <QuickDestinations />
        <InstaStories />
        <SmartDestinationGuides />
        <TopThingsToDo />
        <FeaturedDestinations />
        <ActivityCategories />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

