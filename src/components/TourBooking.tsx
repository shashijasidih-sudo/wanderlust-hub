import { useState, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import HeroSlider from "./activity-detail/HeroSlider";
import ShowTimetable from "./activity-detail/ShowTimetable";
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

const TourBooking = () => {
  const itineraryRef = useRef<HTMLDivElement>(null);

  const scrollToItinerary = () => {
    itineraryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Image Slider */}
            <HeroSlider onExplore={scrollToItinerary} />
            
            {/* Title, Location, Rating */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Phuket, Thailand</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                From Phuket: Phi Phi Island Guided Tour by Big Boat with Normal Transfer
              </h1>
              
              <p className="text-lg text-muted-foreground">
                Explore the stunning Phi Phi Islands on a comfortable big boat. Visit Maya Bay, snorkel 
                in crystal-clear waters, and enjoy a Thai buffet lunch on this unforgettable full-day adventure.
              </p>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="font-semibold text-lg">4.8</span>
                  <span className="text-muted-foreground">(1,247 reviews)</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div>
                    <span className="font-semibold">Duration:</span>
                    <span className="text-muted-foreground ml-2">Full Day</span>
                  </div>
                  <div>
                    <span className="font-semibold">From:</span>
                    <span className="text-primary ml-2 text-lg font-bold">₹2,900</span>
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
                basePrice={2900}
                activityName="From Phuket: Phi Phi Island Guided Tour by Big Boat with Normal Transfer"
              />
            </div>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Photo Gallery */}
            <PhotoGallery />
            
            {/* Customer Reviews */}
            <CustomerReviews />
            
            {/* Tour Description */}
            <div ref={itineraryRef}>
              <TourDescription />
            </div>
            
            {/* Tour Policies (Inclusion, Exclusion, Policies) */}
            <TourPolicies />
            
            {/* FAQ Section */}
            <FAQSection />
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
          <SuggestedTours currentCity="phuket" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TourBooking;
