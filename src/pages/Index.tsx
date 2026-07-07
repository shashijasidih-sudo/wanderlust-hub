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
const Footer = lazy(() => import("@/components/Footer"));

const HOMEPAGE_JSONLD = [
  {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": "https://yellodae.com/#organization",
    name: "Yellodae Trails",
    alternateName: ["Yellodae", "Yellodae Trails Pvt. Ltd."],
    legalName: "Yellodae Trails",
    url: "https://yellodae.com",
    logo: {
      "@type": "ImageObject",
      url: "https://yellodae.com/yellodae-logo.png",
      width: 796,
      height: 1125,
    },
    image: "https://yellodae.com/yellodae-logo.png",
    description:
      "Yellodae Trails (also known as Yellodae) is India's trusted online travel platform for booking tours, attraction tickets, airport transfers and curated holiday packages across Thailand, Singapore, Dubai and Japan.",
    telephone: "+917061710810",
    email: "info@yellodae.com",
    foundingDate: "2023",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "India",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-70617-10810",
        contactType: "customer support",
        email: "info@yellodae.com",
        areaServed: ["IN", "TH", "SG", "AE", "JP"],
        availableLanguage: ["English", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-70617-10810",
        contactType: "reservations",
        contactOption: "TollFree",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    sameAs: [
      "https://www.instagram.com/yellodaetrails/",
      "https://www.facebook.com/yellodaetrails",
      "https://www.youtube.com/@yellodaetrails",
      "https://in.pinterest.com/yellodaetrails/",
      "https://www.linkedin.com/company/yellodae-trails/",
    ],
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
      { "@type": "Country", name: "India" },
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
      "Attraction tickets and skip-the-line passes",
      "Budget travel guides for Indian travelers",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://yellodae.com/#website",
    name: "Yellodae Trails",
    alternateName: "Yellodae",
    url: "https://yellodae.com",
    publisher: { "@id": "https://yellodae.com/#organization" },
    inLanguage: "en-IN",
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
          <TravelerExperiences />
          <ThailandTrending />
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
