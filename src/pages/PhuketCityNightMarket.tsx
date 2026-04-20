import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import { PhuketCityTourSEO } from "@/components/activity-detail/PhuketActivitySEO";
import { phuketCityTourFaqs } from "@/data/phuketActivityFaqs";
import phuketNightMarket from "@/assets/phuket-night-market-1.jpg";
import phuketIslandView from "@/assets/phuket-island-viewpoint-1.jpg";
import phuketMayaBay from "@/assets/phuket-maya-bay-1.jpg";
import phuketBoatTour from "@/assets/phuket-boat-tour-1.jpg";

const PhuketCityNightMarket = () => {
  const baseTourData = toursData["phuket-city-night-market"];
  
  const tourData = {
    ...baseTourData,
    faqs: phuketCityTourFaqs,
    heroImages: [
      { src: phuketNightMarket, title: "Phuket City Night Market Tour" },
      { src: phuketIslandView, title: "Big Buddha Sunset Views" },
      { src: phuketMayaBay, title: "Vibrant Night Market" }
    ],
    galleryImages: [
      { src: phuketNightMarket, alt: "Night market stalls and lanterns" },
      { src: phuketBoatTour, alt: "Phuket Old Town architecture" },
      { src: phuketIslandView, alt: "Big Buddha landmark" },
      { src: phuketMayaBay, alt: "Street food vendors" }
    ]
  };
  
  return <TourBooking tourData={tourData} extraContentBeforeReviews={<PhuketCityTourSEO />} />;
};

export default PhuketCityNightMarket;
