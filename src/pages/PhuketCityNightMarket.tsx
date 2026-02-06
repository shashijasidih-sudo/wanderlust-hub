import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import phuketLongtailBoat from "@/assets/phuket-longtail-boat-1.jpg";
import phuketIslandView from "@/assets/phuket-island-viewpoint-1.jpg";
import phuketMayaBay from "@/assets/phuket-maya-bay-1.jpg";
import phuketBoatTour from "@/assets/phuket-boat-tour-1.jpg";
import phuketKayaks from "@/assets/phuket-kayaks-beach-1.jpg";

const PhuketCityNightMarket = () => {
  const baseTourData = toursData["phuket-city-night-market"];
  
  const tourData = {
    ...baseTourData,
    heroImages: [
      { src: phuketLongtailBoat, title: "Phuket City Night Market Tour" },
      { src: phuketIslandView, title: "Big Buddha Sunset Views" },
      { src: phuketMayaBay, title: "Vibrant Night Market" }
    ],
    galleryImages: [
      { src: phuketBoatTour, alt: "Phuket Old Town architecture" },
      { src: phuketKayaks, alt: "Big Buddha landmark" },
      { src: phuketLongtailBoat, alt: "Night market stalls" },
      { src: phuketIslandView, alt: "Street food vendors" }
    ]
  };
  
  return <TourBooking tourData={tourData} />;
};

export default PhuketCityNightMarket;
