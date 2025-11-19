import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const BaiyokeBuffet = () => {
  const tourData = {
    ...toursData["baiyoke-buffet"],
    heroImages: [
      { src: "/placeholder.svg", title: "Baiyoke Tower Buffet" },
      { src: "/placeholder.svg", title: "Panoramic Bangkok Views" },
      { src: "/placeholder.svg", title: "International Cuisine" }
    ],
    galleryImages: [
      { src: "/placeholder.svg", alt: "City views from 75th floor" },
      { src: "/placeholder.svg", alt: "Buffet spread" },
      { src: "/placeholder.svg", alt: "Rotating observation deck" },
      { src: "/placeholder.svg", alt: "Fine dining" }
    ]
  };
  return <TourBooking tourData={tourData} />;
};

export default BaiyokeBuffet;
