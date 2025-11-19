import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const DreamWorldBangkok = () => {
  const tourData = {
    ...toursData["dream-world-bangkok"],
    heroImages: [
      { src: "/placeholder.svg", title: "Dream World Bangkok" },
      { src: "/placeholder.svg", title: "Theme Park Adventure" },
      { src: "/placeholder.svg", title: "Family Fun Day" }
    ],
    galleryImages: [
      { src: "/placeholder.svg", alt: "Dream World entrance" },
      { src: "/placeholder.svg", alt: "Roller coaster rides" },
      { src: "/placeholder.svg", alt: "Snow Town" },
      { src: "/placeholder.svg", alt: "Park attractions" }
    ]
  };
  return <TourBooking tourData={tourData} />;
};

export default DreamWorldBangkok;
