import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const BangkokWatArunChinatown = () => {
  const tourData = {
    ...toursData["bangkok-wat-arun-chinatown"],
    heroImages: [
      { src: "/placeholder.svg", title: "Sunset at Wat Arun" },
      { src: "/placeholder.svg", title: "Chinatown Street Food" },
      { src: "/placeholder.svg", title: "Bangkok Evening Tour" }
    ],
    galleryImages: [
      { src: "/placeholder.svg", alt: "Wat Arun at sunset" },
      { src: "/placeholder.svg", alt: "Chinatown food stalls" },
      { src: "/placeholder.svg", alt: "Street food" },
      { src: "/placeholder.svg", alt: "Night market" }
    ]
  };
  return <TourBooking tourData={tourData} />;
};

export default BangkokWatArunChinatown;
