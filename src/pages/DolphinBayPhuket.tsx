import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import phuketIslandView from "@/assets/phuket-island-viewpoint-1.jpg";
import phuketMayaBay from "@/assets/phuket-maya-bay-1.jpg";
import phuketBoatTour from "@/assets/phuket-boat-tour-1.jpg";
import phuketKayaks from "@/assets/phuket-kayaks-beach-1.jpg";
import phuketLongtailBoat from "@/assets/phuket-longtail-boat-1.jpg";

const DolphinBayPhuket = () => {
  const baseTourData = toursData["dolphin-bay-phuket"];
  
  const tourData = {
    ...baseTourData,
    heroImages: [
      { src: phuketIslandView, title: "Dolphin Bay Phuket - Marine Show" },
      { src: phuketMayaBay, title: "Interactive Dolphin Performance" },
      { src: phuketBoatTour, title: "Seal Show Entertainment" }
    ],
    galleryImages: [
      { src: phuketKayaks, alt: "Dolphin jumping performance" },
      { src: phuketLongtailBoat, alt: "Seal show entertainment" },
      { src: phuketIslandView, alt: "Meet and greet with dolphins" },
      { src: phuketMayaBay, alt: "Family enjoying dolphin show" }
    ]
  };
  
  return <TourBooking tourData={tourData} />;
};

export default DolphinBayPhuket;
