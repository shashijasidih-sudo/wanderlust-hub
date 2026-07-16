import { useRef, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useCurrency } from "@/contexts/CurrencyContext";
import Header from "./Header";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";
import HeroSlider from "./activity-detail/HeroSlider";
import HeroCollage from "./activity-detail/HeroCollage";
import PhotoGallery from "./activity-detail/PhotoGallery";
import CustomerReviews from "./activity-detail/CustomerReviews";
import PricingCalculator from "./activity-detail/PricingCalculator";
import TourPolicies from "./activity-detail/TourPolicies";
import TourDescription from "./activity-detail/TourDescription";
import FAQSection from "./activity-detail/FAQSection";
import { getSeoFaqsForCity } from "@/data/cityseoFaqs";
import CustomerSupport from "./activity-detail/CustomerSupport";
import SuggestedTours from "./activity-detail/SuggestedTours";
import TravelGuidesSection from "./activity-detail/TravelGuidesSection";
import BookTransfersSection from "./BookTransfersSection";
import CityExploreLinks from "./CityExploreLinks";
import { getCityTransfers } from "@/data/cityTransfersData";
import RelatedArticles from "./RelatedArticles";
import Seo from "./seo/Seo";
import { trackViewItem, destinationFromSlug } from "@/lib/analytics";

import { Button } from "./ui/button";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { ChevronDown, Star, MapPin } from "lucide-react";
import WishlistButton from "./WishlistButton";
import { TourData } from "@/data/tourData";

interface TourBookingProps {
  tourData: TourData;
  extraContentBeforeReviews?: React.ReactNode;
  extraContentBeforeSuggested?: React.ReactNode;
  extraContentAfterPolicies?: React.ReactNode;
  extraDescriptionBeforeHighlights?: React.ReactNode;
  hideItinerary?: boolean;
  heroVariant?: "slider" | "collage";
  hidePhotoGallery?: boolean;
  forceBlackText?: boolean;
}

const TourBooking = ({ tourData, extraContentBeforeReviews, extraContentBeforeSuggested, extraContentAfterPolicies, extraDescriptionBeforeHighlights, hideItinerary, heroVariant = "slider", hidePhotoGallery = false, forceBlackText = false }: TourBookingProps) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const itineraryRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { formatPrice } = useCurrency();

  // Get the current path as the tour slug (remove leading slash)
  const tourSlug = location.pathname.slice(1);

  // Fire GA4 view_item once per activity page open
  useEffect(() => {
    if (!tourData) return;
    trackViewItem({
      item_id: tourSlug || tourData.title,
      item_name: tourData.title,
      item_category: destinationFromSlug(tourSlug),
      price: tourData.basePrice,
    });
  }, [tourSlug, tourData]);

  const scrollToItinerary = () => {
    itineraryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Add safety check for tourData
  if (!tourData) {
    console.error("TourBooking: tourData is undefined");
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Tour Not Found</h1>
          <p className="text-muted-foreground">Unable to load tour information.</p>
        </div>
      </div>
    );
  }

  console.log("TourBooking received tourData:", {
    id: tourData.id,
    title: tourData.title,
    hasHeroImages: !!tourData.heroImages,
    heroImagesLength: tourData.heroImages?.length,
    hasGalleryImages: !!tourData.galleryImages,
    galleryImagesLength: tourData.galleryImages?.length
  });

  // Ensure arrays exist
  const safeHeroImages = tourData.heroImages || [];
  const safeGalleryImages = tourData.galleryImages || [];

  // Build breadcrumbs: Home > City > Things to Do > Tour
  const cityName = tourData.city || tourData.location || "";
  const cityKey = cityName.toLowerCase().trim();
  const citySlug = cityKey.replace(/\s+/g, "-");
  const cityDisplay = cityName ? cityName.charAt(0).toUpperCase() + cityName.slice(1) : "";
  // Per-city Things-to-Do hub URLs (only cities with a published hub page)
  const thingsToDoHubs: Record<string, string> = {
    bangkok: "/thailand/bangkok/things-to-do",
    pattaya: "/thailand/pattaya/things-to-do",
    phuket: "/thailand/phuket/things-to-do",
    krabi: "/thailand/krabi/things-to-do",
    singapore: "/singapore/things-to-do",
  };
  // Per-city landing page URLs
  const cityHomeUrls: Record<string, string> = {
    bangkok: "/thailand/bangkok",
    pattaya: "/thailand/pattaya",
    phuket: "/thailand/phuket",
    krabi: "/thailand/krabi",
    singapore: "/singapore",
  };
  const cityHomeUrl = cityHomeUrls[cityKey] || `/${citySlug}`;
  const thingsToDoUrl = thingsToDoHubs[cityKey];
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    ...(cityName ? [{ name: cityDisplay, url: cityHomeUrl }] : []),
    ...(thingsToDoUrl ? [{ name: "Things to Do", url: thingsToDoUrl }] : []),
    { name: tourData.title, url: `/${tourSlug}` },
  ];

  const origin = typeof window !== "undefined" ? window.location.origin : "https://yellodae.com";
  const productSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: tourData.title,
        description: tourData.shortDescription,
        image: safeHeroImages.map((i) => {
          try { return new URL(i.src, origin).href; } catch { return i.src; }
        }),
        url: `${origin}${location.pathname}`,
        brand: { "@type": "Brand", name: "Yellodae" },
        ...(tourData.basePrice
          ? {
              offers: {
                "@type": "Offer",
                price: tourData.basePrice,
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
                url: `${origin}${location.pathname}`,
              },
            }
          : {}),
        ...(tourData.rating && tourData.reviews
          ? {
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: tourData.rating,
                reviewCount: tourData.reviews,
                bestRating: 5,
                worstRating: 1,
              },
            }
          : {}),
      },
      {
        "@type": "TouristTrip",
        name: tourData.title,
        description: tourData.shortDescription,
        url: `${origin}${location.pathname}`,
        provider: { "@type": "Organization", name: "Yellodae" },
        ...(tourData.location ? { subjectOf: { "@type": "Place", name: tourData.location } } : {}),
      },
    ],
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((b, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: b.name,
      item: `${origin}${b.url}`,
    })),
  };

  return (
    <div className={`min-h-screen bg-background ${forceBlackText ? "[&_main_.lg\\:col-span-2_*]:!text-black" : ""}`}>

      <Seo
        title={`${tourData.title} | Yellodae Trails`}
        description={tourData.shortDescription}
        path={location.pathname}
        type="product"
        image={safeHeroImages[0]?.src}
        jsonLd={[productSchema, breadcrumbSchema]}
      />

      <Header />
      
      {/* Visible Breadcrumb Trail */}
      <div className="container mx-auto px-4 pt-4 pb-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            {cityName && (
              <>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to={cityHomeUrl}>{cityDisplay}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            )}
            {thingsToDoUrl && (
              <>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to={thingsToDoUrl}>Things to Do</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            )}
            <BreadcrumbItem>
              <BreadcrumbPage>{tourData.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      <main className="container mx-auto px-4 py-8">
        {/* Mobile order: title/hero -> booking -> tour details. Desktop: sticky sidebar spans full left content height. */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Top left: title, hero, rating, gallery */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title above images (collage variant) */}
            {heroVariant === "collage" && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{tourData.location}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                    {tourData.title}
                  </h1>
                  <WishlistButton
                    tourSlug={tourSlug}
                    tourName={tourData.title}
                    tourImage={safeHeroImages[0]?.src}
                    tourPrice={tourData.basePrice}
                    size="default"
                  />
                </div>
              </div>
            )}

            {/* Hero Image */}
            {heroVariant === "collage" ? (
              <HeroCollage images={safeHeroImages} />
            ) : (
              <HeroSlider images={safeHeroImages} onExplore={scrollToItinerary} />
            )}

            {/* Title, Location, Rating (slider variant only) */}
            <div className="space-y-4">
              {heroVariant !== "collage" && (
                <>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{tourData.location}</span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                      {tourData.title}
                    </h1>
                    <WishlistButton
                      tourSlug={tourSlug}
                      tourName={tourData.title}
                      tourImage={safeHeroImages[0]?.src}
                      tourPrice={tourData.basePrice}
                      size="default"
                    />
                  </div>
                </>
              )}

              <p className="text-base md:text-lg text-muted-foreground">
                {tourData.shortDescription}
              </p>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="font-semibold text-base md:text-lg">{tourData.rating}</span>
                  <span className="text-muted-foreground">({tourData.reviews.toLocaleString()} reviews)</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div>
                    <span className="font-semibold">Duration:</span>
                    <span className="text-muted-foreground ml-2">{tourData.duration}</span>
                  </div>
                  <div>
                    <span className="font-semibold">From:</span>
                    <span className="text-primary ml-2 text-lg font-bold">
                      {formatPrice(tourData.basePrice)}
                      {tourData.pricePerVehicle && <span className="text-sm font-normal text-muted-foreground"> /vehicle</span>}
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="lg:hidden">
                <Button
                  size="lg"
                  onClick={scrollToItinerary}
                  className="w-full bg-primary hover:bg-primary/90 text-base md:text-lg py-5 md:py-6"
                >
                  Explore Your Adventure
                  <ChevronDown className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Photo Gallery */}
            {!hidePhotoGallery && <PhotoGallery images={safeGalleryImages} />}
          </div>

          {/* Sticky Right Sidebar: Pricing on top, Support below. On mobile it sits between hero and tour details. */}
          <div className="lg:col-span-1 lg:row-span-2">
            <div className="sticky top-4 space-y-6">
              <PricingCalculator
                basePrice={tourData.basePrice}
                childPrice={tourData.childPrice}
                activityName={tourData.title}
                tourTimings={tourData.tourTimings}
                pricePerVehicle={tourData.pricePerVehicle}
                vehicleCapacity={tourData.vehicleCapacity}
                tourSlug={tourSlug}
                singleAdultPrice={tourData.singleAdultPrice}
                twoAdultPrice={tourData.twoAdultPrice}
                minAdults={tourData.minAdults}
                tourOptions={tourData.tourOptions}
                tourAddOns={tourData.tourAddOns}
                hideChildren={tourData.hideChildren}
              />
              <CustomerSupport />
            </div>
          </div>

          {/* Bottom left: tour description, policies, reviews, FAQ */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tour Description */}
            <div ref={itineraryRef}>
              <TourDescription tourData={tourData} extraBeforeHighlights={extraDescriptionBeforeHighlights} hideItinerary={hideItinerary} />
            </div>

            {/* Tour Policies */}
            <TourPolicies tourData={tourData} />

            {/* Optional extra content after policies */}
            {extraContentAfterPolicies}

            {/* Optional extra SEO content before reviews */}
            {extraContentBeforeReviews}

            {/* Customer Reviews */}
            <CustomerReviews
              reviews={tourData.customerReviews}
              averageRating={tourData.rating}
              totalReviews={tourData.reviews}
            />

            {/* FAQ Section */}
            <FAQSection
              faqs={tourData.faqs}
              seoFaqs={getSeoFaqsForCity(tourData.city)}
            />
          </div>
        </div>


        {/* Travel Guides — auto-rendered by city, or overridden via extraContentBeforeSuggested */}
        {extraContentBeforeSuggested ?? (() => {
          const city = (tourData.city || "").toLowerCase();
          const thaiCities = ["bangkok", "phuket", "pattaya", "krabi", "thailand"];
          if (thaiCities.includes(city)) return <TravelGuidesSection region="thailand" />;
          if (city === "singapore") return <TravelGuidesSection region="singapore" />;
          if (city === "dubai" || city === "abu dhabi") return <TravelGuidesSection region="dubai" />;
          return null;
        })()}

        {/* Book Transfers in this city */}
        {(() => {
          const cityTransfers = getCityTransfers(tourData.city);
          if (!cityTransfers) return null;
          return (
            <BookTransfersSection city={cityTransfers.city} transfers={cityTransfers.transfers} />
          );
        })()}

        {/* Suggested Tours */}
        <div className="mt-12">
          <SuggestedTours currentCity={tourData.city} />
        </div>

        {/* Compact internal-link strip — guarantees keyword-rich navigation to hubs */}
        {(() => {
          const key = (tourData.city || "").toLowerCase().trim() as
            | "bangkok" | "pattaya" | "phuket" | "krabi" | "singapore";
          if (!["bangkok", "pattaya", "phuket", "krabi", "singapore"].includes(key)) return null;
          return <CityExploreLinks city={key} />;
        })()}
        <div className="mt-12">
          <RelatedArticles city={tourData.city} />
        </div>
      </main>


      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default TourBooking;
