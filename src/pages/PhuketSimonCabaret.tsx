import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import { SimonCabaretSEO } from "@/components/activity-detail/PhuketActivitySEO";
import { simonCabaretFaqs } from "@/data/phuketActivityFaqs";
import phuketBoatTour from "@/assets/phuket-boat-tour-1.jpg";
import phuketIslandView from "@/assets/phuket-island-viewpoint-1.jpg";
import phuketMayaBay from "@/assets/phuket-maya-bay-1.jpg";
import phuketSpeedboat from "@/assets/phuket-speedboat-1.jpg";
import phuketLongtailBoat from "@/assets/phuket-longtail-boat-1.jpg";

const PhuketSimonCabaret = () => {
  const baseTourData = toursData["phuket-simon-cabaret"];
  
  const tourData = {
    ...baseTourData,
    faqs: simonCabaretFaqs,
    heroImages: [
      { src: phuketBoatTour, title: "Simon Cabaret Show" },
      { src: phuketIslandView, title: "Spectacular Costumes" },
      { src: phuketMayaBay, title: "World-Class Performance" }
    ],
    galleryImages: [
      { src: phuketSpeedboat, alt: "Cabaret performers" },
      { src: phuketLongtailBoat, alt: "Elaborate stage production" },
      { src: phuketBoatTour, alt: "Costume showcase" },
      { src: phuketIslandView, alt: "Photo with performers" }
    ]
  };
  
  return <TourBooking tourData={tourData} extraContentBeforeReviews={<SimonCabaretSEO />} />;
};

export default PhuketSimonCabaret;
