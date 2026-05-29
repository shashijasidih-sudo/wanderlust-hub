import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Seo from "@/components/seo/Seo";

// Lazy-load everything below the hero — improves FCP/LCP on mobile.
const SeoDestinationSections = lazy(() => import("@/components/SeoDestinationSections"));
const AboutYellodaeSection = lazy(() => import("@/components/AboutYellodaeSection"));
const ThailandTrending = lazy(() => import("@/components/ThailandTrending"));
const SingaporeTrending = lazy(() => import("@/components/SingaporeTrending"));
const TrendingActivities = lazy(() => import("@/components/TrendingActivities"));
const QuickDestinations = lazy(() => import("@/components/QuickDestinations"));
const InstaStories = lazy(() => import("@/components/InstaStories"));
const SmartDestinationGuides = lazy(() => import("@/components/SmartDestinationGuides"));
const TopThingsToDo = lazy(() => import("@/components/TopThingsToDo"));
const FeaturedDestinations = lazy(() => import("@/components/FeaturedDestinations"));
const ActivityCategories = lazy(() => import("@/components/ActivityCategories"));
const HomeFAQ = lazy(() => import("@/components/HomeFAQ"));
const HomeYouTubeSection = lazy(() => import("@/components/HomeYouTubeSection"));
const TravelerExperiences = lazy(() => import("@/components/TravelerExperiences"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Footer = lazy(() => import("@/components/Footer"));

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
        <Suspense fallback={null}>
          <SeoDestinationSections />
          <AboutYellodaeSection />
          <ThailandTrending />
          <SingaporeTrending />
          <TrendingActivities />
          <QuickDestinations />
          <InstaStories />
          <SmartDestinationGuides />
          <TopThingsToDo />
          <FeaturedDestinations />
          <ActivityCategories />
          <HomeFAQ />
          <HomeYouTubeSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
