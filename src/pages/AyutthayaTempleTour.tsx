import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const AyutthayaTempleTour = () => {
  const tourData = {
    ...toursData["ayutthaya-temple-tour"],
    heroImages: [
      { src: "/placeholder.svg", title: "Ayutthaya Temple Tour" },
      { src: "/placeholder.svg", title: "Ancient Temple Ruins" },
      { src: "/placeholder.svg", title: "UNESCO World Heritage" }
    ],
    galleryImages: [
      { src: "/placeholder.svg", alt: "Wat Mahathat" },
      { src: "/placeholder.svg", alt: "Buddha head in tree" },
      { src: "/placeholder.svg", alt: "Ayutthaya ruins" },
      { src: "/placeholder.svg", alt: "Bang Pa-In Palace" }
    ]
  };
  return <TourBooking tourData={tourData} />;
};

export default AyutthayaTempleTour;
