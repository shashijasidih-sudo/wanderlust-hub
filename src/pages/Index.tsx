import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
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
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
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
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
