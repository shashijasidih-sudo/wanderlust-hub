import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const BangkokTukTukNight = () => {
  const tourData = {
    ...toursData["bangkok-tuk-tuk-night"],
    heroImages: [
      { src: "/placeholder.svg", title: "Bangkok Night Tour by Tuk-Tuk" },
      { src: "/placeholder.svg", title: "Night Market Adventure" },
      { src: "/placeholder.svg", title: "Street Food Experience" }
    ],
    galleryImages: [
      { src: "/placeholder.svg", alt: "Tuk-tuk at night" },
      { src: "/placeholder.svg", alt: "Illuminated temples" },
      { src: "/placeholder.svg", alt: "Night market" },
      { src: "/placeholder.svg", alt: "Street food stalls" }
    ]
  };
  return <TourBooking tourData={tourData} />;
};

export default BangkokTukTukNight;
