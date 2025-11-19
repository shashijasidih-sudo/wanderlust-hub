import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const BangkokGoldenMarbleBuddha = () => {
  const tourData = {
    ...toursData["bangkok-golden-marble-buddha"],
    heroImages: [
      { src: "/placeholder.svg", title: "Golden Buddha Temple Tour" },
      { src: "/placeholder.svg", title: "Marble Temple" },
      { src: "/placeholder.svg", title: "Bangkok Temples" }
    ],
    galleryImages: [
      { src: "/placeholder.svg", alt: "Golden Buddha" },
      { src: "/placeholder.svg", alt: "Marble Temple" },
      { src: "/placeholder.svg", alt: "Temple architecture" },
      { src: "/placeholder.svg", alt: "Buddhist statues" }
    ]
  };
  return <TourBooking tourData={tourData} />;
};

export default BangkokGoldenMarbleBuddha;
