import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import dolphinShow1 from "@/assets/dolphin-show-1.jpg";
import dolphinShow2 from "@/assets/dolphin-show-2.jpg";
import dolphinShow3 from "@/assets/dolphin-show-3.jpg";

const DolphinBayPhuket = () => {
  const baseTourData = toursData["dolphin-bay-phuket"];
  
  const tourData = {
    ...baseTourData,
    heroImages: [
      { src: dolphinShow1, title: "Dolphin Bay Phuket - Marine Show" },
      { src: dolphinShow2, title: "Interactive Dolphin Performance" },
      { src: dolphinShow3, title: "Seal Show Entertainment" }
    ],
    galleryImages: [
      { src: dolphinShow1, alt: "Dolphin jumping performance" },
      { src: dolphinShow2, alt: "Dolphins swimming underwater" },
      { src: dolphinShow3, alt: "Seal show entertainment" },
      { src: dolphinShow1, alt: "Family enjoying dolphin show" }
    ]
  };
  
  return <TourBooking tourData={tourData} />;
};

export default DolphinBayPhuket;
