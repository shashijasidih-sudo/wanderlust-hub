import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import bangkokTemple1 from "@/assets/bangkok-temple-1.jpg";
import bangkokTemple3 from "@/assets/bangkok-temple-3.jpg";
import bangkokCity2 from "@/assets/bangkok-city-2.jpg";

const AyutthayaTempleTour = () => {
  const tourData = {
    ...toursData["ayutthaya-temple-tour"],
    heroImages: [
      { src: bangkokTemple1, title: "Ayutthaya Temple Tour" },
      { src: bangkokTemple3, title: "Ancient Temple Ruins" },
      { src: bangkokCity2, title: "UNESCO World Heritage" }
    ],
    galleryImages: [
      { src: bangkokTemple1, alt: "Golden Pagoda temple" },
      { src: bangkokTemple3, alt: "Temple at twilight" },
      { src: bangkokCity2, alt: "Bangkok to Ayutthaya journey" }
    ]
  };
  return <TourBooking tourData={tourData} />;
};

export default AyutthayaTempleTour;
