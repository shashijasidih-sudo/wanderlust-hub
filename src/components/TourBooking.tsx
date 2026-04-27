import { useRef, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useCurrency } from "@/contexts/CurrencyContext";
import Header from "./Header";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";
import HeroSlider from "./activity-detail/HeroSlider";
import PhotoGallery from "./activity-detail/PhotoGallery";
import CustomerReviews from "./activity-detail/CustomerReviews";
import PricingCalculator from "./activity-detail/PricingCalculator";
import TourPolicies from "./activity-detail/TourPolicies";
import TourDescription from "./activity-detail/TourDescription";
import FAQSection from "./activity-detail/FAQSection";
import CustomerSupport from "./activity-detail/CustomerSupport";
import SuggestedTours from "./activity-detail/SuggestedTours";
import TravelGuidesSection from "./activity-detail/TravelGuidesSection";
import BookTransfersSection from "./BookTransfersSection";
import CityExploreLinks from "./CityExploreLinks";
import { getCityTransfers } from "@/data/cityTransfersData";
import TourJsonLd from "./seo/TourJsonLd";
import BreadcrumbJsonLd from "./seo/BreadcrumbJsonLd";
import CanonicalUrl from "./seo/CanonicalUrl";
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
}

const TourBooking = ({ tourData, extraContentBeforeReviews, extraContentBeforeSuggested }: TourBookingProps) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const itineraryRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { formatPrice } = useCurrency();
  
  // Get the current path as the tour slug (remove leading slash)
  const tourSlug = location.pathname.slice(1);

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

  return (
    <div className="min-h-screen bg-background">
      <CanonicalUrl path={location.pathname} />
      <TourJsonLd
        name={tourData.title}
        description={tourData.shortDescription}
        image={safeHeroImages.map((i) => i.src)}
        price={tourData.basePrice}
        priceCurrency="INR"
        rating={tourData.rating}
        reviewCount={tourData.reviews}
        location={tourData.location}
        duration={tourData.duration}
        id={`tour-jsonld-${tourData.id}`}
      />
      <BreadcrumbJsonLd items={breadcrumbItems} id={`breadcrumb-jsonld-${tourData.id}`} />
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
        {/* Hero Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Image Slider */}
            <HeroSlider images={safeHeroImages} onExplore={scrollToItinerary} />
            
            {/* Title, Location, Rating */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{tourData.location}</span>
              </div>
              
              <div className="flex items-center justify-between gap-4">
                <h1 className="text-2xl md:text-3xl font-bold leading-tight">
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
              
              <p className="text-lg text-muted-foreground">
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
                  <span className="font-semibold text-lg">{tourData.rating}</span>
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
                  className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                >
                  Explore Your Adventure
                  <ChevronDown className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Sticky Pricing Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
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
            </div>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Photo Gallery */}
            <PhotoGallery images={safeGalleryImages} />
            
            {/* Tour Description */}
            <div ref={itineraryRef}>
              <TourDescription tourData={tourData} />
            </div>
            
            {/* Tour Policies (Inclusion, Exclusion, Booking, Cancellation, Child Policy) */}
            <TourPolicies tourData={tourData} />
            
            {/* Optional extra SEO content before reviews */}
            {extraContentBeforeReviews}

            {/* Customer Reviews */}
            <CustomerReviews 
              reviews={tourData.customerReviews}
              averageRating={tourData.rating}
              totalReviews={tourData.reviews}
            />
            
            {/* FAQ Section */}
            <FAQSection faqs={tourData.faqs} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <CustomerSupport />
            </div>
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
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default TourBooking;
