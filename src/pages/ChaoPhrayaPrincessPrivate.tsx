import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const ChaoPhrayaPrincessPrivate = () => {
  const tourData = {
    ...toursData["chao-phraya-princess-private"],
    heroImages: [
      { src: "/placeholder.svg", title: "Chao Phraya Princess Cruise" },
      { src: "/placeholder.svg", title: "Private Transfer Service" },
      { src: "/placeholder.svg", title: "Luxury Dining Experience" }
    ],
    galleryImages: [
      { src: "/placeholder.svg", alt: "Princess cruise ship" },
      { src: "/placeholder.svg", alt: "Buffet dinner" },
      { src: "/placeholder.svg", alt: "Live music" },
      { src: "/placeholder.svg", alt: "Bangkok skyline" }
    ]
  };
  return <TourBooking tourData={tourData} />;
};

export default ChaoPhrayaPrincessPrivate;
