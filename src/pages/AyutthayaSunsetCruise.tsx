import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const AyutthayaSunsetCruise = () => {
  const tourData = {
    ...toursData["ayutthaya-sunset-cruise"],
    heroImages: [
      { src: "/placeholder.svg", title: "Ayutthaya Sunset Cruise" },
      { src: "/placeholder.svg", title: "Ancient Temples" },
      { src: "/placeholder.svg", title: "River Cruise Experience" }
    ],
    galleryImages: [
      { src: "/placeholder.svg", alt: "Ayutthaya temples" },
      { src: "/placeholder.svg", alt: "Sunset on river" },
      { src: "/placeholder.svg", alt: "Cruise boat" },
      { src: "/placeholder.svg", alt: "Ancient ruins" }
    ]
  };
  return <TourBooking tourData={tourData} />;
};

export default AyutthayaSunsetCruise;
