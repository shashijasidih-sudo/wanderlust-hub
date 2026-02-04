import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import cruiseNight2 from "@/assets/cruise-night-2.jpg";
import cruiseShip1 from "@/assets/cruise-ship-1.jpg";
import watArunTwilight1 from "@/assets/wat-arun-twilight-1.jpg";

const ChaoPhrayaPrincessNoTransfer = () => {
  const tourData = {
    ...toursData["chao-phraya-princess-no-transfer"],
    heroImages: [
      { src: cruiseShip1, title: "Chao Phraya Princess Dinner Cruise" },
      { src: cruiseNight2, title: "River Cruise Experience" },
      { src: watArunTwilight1, title: "Bangkok River Views" }
    ],
    galleryImages: [
      { src: cruiseShip1, alt: "Luxury cruise ship" },
      { src: cruiseNight2, alt: "Princess cruise at night" },
      { src: watArunTwilight1, alt: "Wat Arun at twilight" }
    ]
  };
  return <TourBooking tourData={tourData} />;
};

export default ChaoPhrayaPrincessNoTransfer;
