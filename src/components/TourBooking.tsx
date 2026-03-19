import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
import { Button } from "./ui/button";
import { ChevronDown, Star, MapPin } from "lucide-react";
import { TourData } from "@/data/tourData";

interface TourBookingProps {
  tourData: TourData;
}

const TourBooking = ({ tourData }: TourBookingProps) => {
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
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
              
              <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                {tourData.title}
              </h1>
              
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
