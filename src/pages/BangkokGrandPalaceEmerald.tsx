import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const BangkokGrandPalaceEmerald = () => {
  const tourData = {
    ...toursData["bangkok-grand-palace-emerald"],
    heroImages: [
      { src: "/placeholder.svg", title: "Royal Grand Palace" },
      { src: "/placeholder.svg", title: "Emerald Buddha" },
      { src: "/placeholder.svg", title: "Reclining Buddha" }
    ],
    galleryImages: [
      { src: "/placeholder.svg", alt: "Grand Palace golden spires" },
      { src: "/placeholder.svg", alt: "Emerald Buddha temple" },
      { src: "/placeholder.svg", alt: "Reclining Buddha" },
      { src: "/placeholder.svg", alt: "Palace architecture" }
    ]
  };
  return <TourBooking tourData={tourData} />;
};

export default BangkokGrandPalaceEmerald;
