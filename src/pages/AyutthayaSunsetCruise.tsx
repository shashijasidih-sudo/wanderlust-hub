import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import ayutthayaRiverside1 from "@/assets/ayutthaya-riverside-1.jpg";
import ayutthayaSunset1 from "@/assets/ayutthaya-sunset-1.jpg";
import watArunTwilight1 from "@/assets/wat-arun-twilight-1.jpg";

const AyutthayaSunsetCruise = () => {
  const tourData = {
    ...toursData["ayutthaya-sunset-cruise"],
    heroImages: [
      { src: ayutthayaRiverside1, title: "Ayutthaya Riverside Temple" },
      { src: ayutthayaSunset1, title: "Golden Pagoda at Sunset" },
      { src: watArunTwilight1, title: "Sunset Cruise Experience" }
    ],
    galleryImages: [
      { src: ayutthayaRiverside1, alt: "Ayutthaya riverside temple" },
      { src: ayutthayaSunset1, alt: "Golden pagoda sunset view" },
      { src: watArunTwilight1, alt: "Wat Arun twilight" }
    ]
  };
  return <TourBooking tourData={tourData} />;
};

export default AyutthayaSunsetCruise;
