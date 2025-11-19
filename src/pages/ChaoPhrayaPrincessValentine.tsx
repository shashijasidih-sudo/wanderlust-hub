import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const ChaoPhrayaPrincessValentine = () => {
  const tourData = {
    ...toursData["chao-phraya-princess-valentine"],
    heroImages: [
      { src: "/placeholder.svg", title: "Valentine's Day Dinner Cruise" },
      { src: "/placeholder.svg", title: "Romantic Evening" },
      { src: "/placeholder.svg", title: "Special Celebration" }
    ],
    galleryImages: [
      { src: "/placeholder.svg", alt: "Romantic table setting" },
      { src: "/placeholder.svg", alt: "Valentine's menu" },
      { src: "/placeholder.svg", alt: "Couple dining" },
      { src: "/placeholder.svg", alt: "River at night" }
    ]
  };
  return <TourBooking tourData={tourData} />;
};

export default ChaoPhrayaPrincessValentine;
