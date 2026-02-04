import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import cruiseDock1 from "@/assets/cruise-dock-1.jpg";
import cruiseNight1 from "@/assets/cruise-night-1.jpg";
import cruiseShip1 from "@/assets/cruise-ship-1.jpg";

const VivaAlangkaCruise = () => {
  const tourData = {
    ...toursData["viva-alangka-cruise"],
    heroImages: [
      { src: cruiseShip1, title: "Viva Alangka Dinner Cruise" },
      { src: cruiseNight1, title: "Chao Phraya River Evening" },
      { src: cruiseDock1, title: "Bangkok River Pier" }
    ],
    galleryImages: [
      { src: cruiseShip1, alt: "Cruise boat at night" },
      { src: cruiseNight1, alt: "Evening cruise experience" },
      { src: cruiseDock1, alt: "River pier dock" }
    ]
  };
  return <TourBooking tourData={tourData} />;
};

export default VivaAlangkaCruise;
