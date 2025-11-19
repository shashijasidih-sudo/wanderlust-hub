import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const BangkokCityGemsGallery = () => {
  const tourData = {
    ...toursData["bangkok-city-gems-gallery"],
    heroImages: [
      { src: "/placeholder.svg", title: "Bangkok City and Temple Tours with Gems Gallery" },
      { src: "/placeholder.svg", title: "Temple Visit" },
      { src: "/placeholder.svg", title: "Gems Gallery Tour" }
    ],
    galleryImages: [
      { src: "/placeholder.svg", alt: "Bangkok temples" },
      { src: "/placeholder.svg", alt: "Gems Gallery" },
      { src: "/placeholder.svg", alt: "Thai jewelry" },
      { src: "/placeholder.svg", alt: "City tour" }
    ]
  };
  return <TourBooking tourData={tourData} />;
};

export default BangkokCityGemsGallery;
