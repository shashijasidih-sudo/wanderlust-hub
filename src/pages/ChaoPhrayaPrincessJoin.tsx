import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const ChaoPhrayaPrincessJoin = () => {
  const tourData = {
    ...toursData["chao-phraya-princess-join"],
    heroImages: [
      { src: "/placeholder.svg", title: "Chao Phraya Princess Join Tour" },
      { src: "/placeholder.svg", title: "Group Dinner Cruise" },
      { src: "/placeholder.svg", title: "Shared Transfer Service" }
    ],
    galleryImages: [
      { src: "/placeholder.svg", alt: "Cruise boat exterior" },
      { src: "/placeholder.svg", alt: "Buffet selection" },
      { src: "/placeholder.svg", alt: "Cultural show" },
      { src: "/placeholder.svg", alt: "Passengers enjoying views" }
    ]
  };
  return <TourBooking tourData={tourData} />;
};

export default ChaoPhrayaPrincessJoin;
