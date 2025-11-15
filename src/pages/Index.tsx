import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrendingActivities from "@/components/TrendingActivities";
import QuickDestinations from "@/components/QuickDestinations";
import InstaStories from "@/components/InstaStories";
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
        <TrendingActivities />
        <QuickDestinations />
        <InstaStories />
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
