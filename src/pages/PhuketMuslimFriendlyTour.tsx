import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import phuketBoatTour from "@/assets/phuket-boat-tour-1.jpg";
import phuketIslandView from "@/assets/phuket-island-viewpoint-1.jpg";
import phuketMayaBay from "@/assets/phuket-maya-bay-1.jpg";
import phuketLongtailBoat from "@/assets/phuket-longtail-boat-1.jpg";
import phuketKayaks from "@/assets/phuket-kayaks-beach-1.jpg";

const PhuketMuslimFriendlyTour = () => {
  const baseTourData = toursData["phuket-muslim-friendly-tour"];
  
  const tourData = {
    ...baseTourData,
    heroImages: [
      { src: phuketBoatTour, title: "Muslim-Friendly Phuket Tour" },
      { src: phuketIslandView, title: "Masjid Mukaram Mosque" },
      { src: phuketMayaBay, title: "Phuket Cultural Sites" }
    ],
    galleryImages: [
      { src: phuketLongtailBoat, alt: "Halal restaurant" },
      { src: phuketKayaks, alt: "Mosque visit" },
      { src: phuketBoatTour, alt: "Phuket attractions" },
      { src: phuketIslandView, alt: "Cultural experience" }
    ]
  };
  
  return <TourBooking tourData={tourData} />;
};

export default PhuketMuslimFriendlyTour;
