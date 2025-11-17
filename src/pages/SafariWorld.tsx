import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/activity-detail/HeroSlider";
import PricingCalculator from "@/components/activity-detail/PricingCalculator";
import TourDetails from "@/components/activity-detail/TourDetails";
import ShowTimetable from "@/components/activity-detail/ShowTimetable";
import PolicyAccordion from "@/components/activity-detail/PolicyAccordion";
import CustomerSupport from "@/components/activity-detail/CustomerSupport";
import SuggestedTours from "@/components/activity-detail/SuggestedTours";
import { Button } from "@/components/ui/button";

const SafariWorld = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToItinerary = () => {
    const element = document.getElementById("itinerary");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-4 hover:bg-accent"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Activities
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <HeroSlider onExplore={scrollToItinerary} />
            
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-foreground">
                Safari World & Marine Park (Join Transfer)
              </h1>
              <p className="text-lg text-muted-foreground">
                Experience the ultimate adventure at Bangkok's largest open zoo and marine park. 
                Witness amazing animal shows, explore safari zones, and enjoy a day filled with 
                wildlife encounters and entertainment.
              </p>
            </div>

            <ShowTimetable />
            
            <div id="itinerary">
              <TourDetails />
            </div>

            <PolicyAccordion />
            
            <CustomerSupport />
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <PricingCalculator 
                basePrice={4100}
                activityName="Safari World & Marine Park"
              />
            </div>
          </div>
        </div>

        <SuggestedTours currentCity="bangkok" />
      </div>

      <Footer />
    </div>
  );
};

export default SafariWorld;
