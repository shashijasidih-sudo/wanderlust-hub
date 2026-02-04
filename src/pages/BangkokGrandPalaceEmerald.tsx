import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import grandPalaceBridge from "@/assets/grand-palace-bridge.jpg";
import grandPalaceWatArun from "@/assets/grand-palace-wat-arun.jpg";
import grandPalaceWatArunTwilight from "@/assets/grand-palace-wat-arun-twilight.jpg";

const BangkokGrandPalaceEmerald = () => {
  const tourData = {
    ...toursData["bangkok-grand-palace-emerald"],
    heroImages: [
      { src: grandPalaceWatArunTwilight, title: "Royal Grand Palace" },
      { src: grandPalaceWatArun, title: "Emerald Buddha" },
      { src: grandPalaceBridge, title: "Bangkok City View" }
    ],
    galleryImages: [
      { src: grandPalaceWatArunTwilight, alt: "Wat Arun temple at twilight" },
      { src: grandPalaceWatArun, alt: "Wat Arun temple at night" },
      { src: grandPalaceBridge, alt: "Chao Phraya River bridge" }
    ]
  };
  return <TourBooking tourData={tourData} />;
};

export default BangkokGrandPalaceEmerald;
