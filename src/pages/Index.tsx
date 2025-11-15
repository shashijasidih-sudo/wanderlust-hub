import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import DealsSection from "@/components/DealsSection";
import ActivityCategories from "@/components/ActivityCategories";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedDestinations />
        <DealsSection />
        <ActivityCategories />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
