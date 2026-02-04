import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import bangkokTempleWoman1 from "@/assets/bangkok-temple-woman-1.jpg";
import bangkokBridgeDay1 from "@/assets/bangkok-bridge-day-1.jpg";
import bangkokPagodaSunset1 from "@/assets/bangkok-pagoda-sunset-1.jpg";

const DreamWorldBangkok = () => {
  const tourData = {
    ...toursData["dream-world-bangkok"],
    heroImages: [
      { src: bangkokTempleWoman1, title: "Dream World Bangkok" },
      { src: bangkokBridgeDay1, title: "Theme Park Adventure" },
      { src: bangkokPagodaSunset1, title: "Family Fun Day" }
    ],
    galleryImages: [
      { src: bangkokTempleWoman1, alt: "Dream World entrance" },
      { src: bangkokBridgeDay1, alt: "Bangkok cityscape" },
      { src: bangkokPagodaSunset1, alt: "Golden pagoda at sunset" }
    ]
  };
  return <TourBooking tourData={tourData} />;
};

export default DreamWorldBangkok;