import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import phuketIslandView from "@/assets/phuket-island-viewpoint-1.jpg";
import phuketMayaBay from "@/assets/phuket-maya-bay-1.jpg";
import phuketBoatTour from "@/assets/phuket-boat-tour-1.jpg";
import phuketKayaks from "@/assets/phuket-kayaks-beach-1.jpg";
import phuketSpeedboat from "@/assets/phuket-speedboat-1.jpg";

const PhuketCarnivalMagic = () => {
  const baseTourData = toursData["phuket-carnival-magic"];
  
  const tourData = {
    ...baseTourData,
    heroImages: [
      { src: phuketIslandView, title: "Carnival Magic Theme Park" },
      { src: phuketMayaBay, title: "Carnival Parade Show" },
      { src: phuketBoatTour, title: "Kingdom of Lights" }
    ],
    galleryImages: [
      { src: phuketKayaks, alt: "Carnival parade floats" },
      { src: phuketSpeedboat, alt: "Bird Paradise zone" },
      { src: phuketIslandView, alt: "Fun fair attractions" },
      { src: phuketMayaBay, alt: "Evening carnival lights" }
    ]
  };
  
  return <TourBooking tourData={tourData} />;
};

export default PhuketCarnivalMagic;
