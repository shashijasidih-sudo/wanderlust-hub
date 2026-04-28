import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import cruiseImg from "@/assets/koh-samui-loy-krathong-cruise-1.jpg";
import bangkokCruise from "@/assets/bangkok-cruise-night-3.jpg";
import valentineCruise from "@/assets/valentine-cruise-1.jpg";

const KohSamuiWhiteOrchidLoyKrathongCruise = () => {
  const tourData = {
    ...toursData["koh-samui-white-orchid-loy-krathong-cruise"],
    heroImages: [
      { src: cruiseImg, title: "Loy Krathong River Cruise" },
      { src: bangkokCruise, title: "Chao Phraya River Cruise" },
      { src: valentineCruise, title: "Live Cabaret Show On Board" },
    ],
    galleryImages: [
      { src: cruiseImg, alt: "White Orchid Loy Krathong river cruise" },
      { src: bangkokCruise, alt: "Bangkok river cruise at night" },
      { src: valentineCruise, alt: "On-board entertainment" },
    ],
  };
  return <TourBooking tourData={tourData} />;
};

export default KohSamuiWhiteOrchidLoyKrathongCruise;
