import { useState, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import HeroSlider from "./activity-detail/HeroSlider";
import ShowTimetable from "./activity-detail/ShowTimetable";
import TourDetails from "./activity-detail/TourDetails";
import PricingCalculator from "./activity-detail/PricingCalculator";
import PolicyAccordion from "./activity-detail/PolicyAccordion";
import CustomerSupport from "./activity-detail/CustomerSupport";
import SuggestedTours from "./activity-detail/SuggestedTours";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

const TourBooking = () => {
  const itineraryRef = useRef<HTMLDivElement>(null);

  const scrollToItinerary = () => {
    itineraryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section with Sticky Sidebar */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-6">
            <HeroSlider onExplore={scrollToItinerary} />
            
            <div className="text-center">
              <Button
                size="lg"
                onClick={scrollToItinerary}
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
              >
                Explore Your Adventure Now
                <ChevronDown className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div>
              <h1 className="text-4xl font-bold mb-4">
                Phi Phi Island Guided Tour by Big Boat with Normal Transfer
              </h1>
              <p className="text-lg text-muted-foreground">
                Experience the breathtaking beauty of Phi Phi Islands on a comfortable big boat journey. 
                Explore Maya Bay, snorkel in crystal-clear waters, and enjoy a delicious lunch on this 
                unforgettable full-day adventure.
              </p>
            </div>
          </div>

          {/* Sticky Pricing Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <PricingCalculator 
                basePrice={3300}
                activityName="Phi Phi Island Guided Tour by Big Boat with Normal Transfer"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div ref={itineraryRef}>
              <ShowTimetable />
            </div>
            
            <TourDetails />
            
            <PolicyAccordion />
          </div>

          <div className="lg:col-span-1">
            <CustomerSupport />
          </div>
        </div>

        {/* Suggested Tours */}
        <SuggestedTours currentCity="phuket" />
      </main>

      <Footer />
    </div>
  );
};

export default TourBooking;
