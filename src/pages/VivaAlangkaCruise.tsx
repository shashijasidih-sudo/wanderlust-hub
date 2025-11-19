import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const VivaAlangkaCruise = () => {
  const tourData = {
    ...toursData["viva-alangka-cruise"],
    heroImages: [
      { src: "/placeholder.svg", title: "Viva Alangka Dinner Cruise" },
      { src: "/placeholder.svg", title: "Chao Phraya River Evening" },
      { src: "/placeholder.svg", title: "Romantic Dining Experience" }
    ],
    galleryImages: [
      { src: "/placeholder.svg", alt: "Cruise boat at night" },
      { src: "/placeholder.svg", alt: "Dinner buffet" },
      { src: "/placeholder.svg", alt: "Live entertainment" },
      { src: "/placeholder.svg", alt: "River views" }
    ]
  };
  return <TourBooking tourData={tourData} />;
};

export default VivaAlangkaCruise;
