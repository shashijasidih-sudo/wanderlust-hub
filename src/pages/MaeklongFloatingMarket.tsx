import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const MaeklongFloatingMarket = () => {
  const tourData = {
    ...toursData["maeklong-floating-market"],
    heroImages: [
      { src: "/placeholder.svg", title: "Maeklong Railway Market" },
      { src: "/placeholder.svg", title: "Damnoen Saduak Floating Market" },
      { src: "/placeholder.svg", title: "Traditional Thai Markets" }
    ],
    galleryImages: [
      { src: "/placeholder.svg", alt: "Train passing through market" },
      { src: "/placeholder.svg", alt: "Vendors at railway market" },
      { src: "/placeholder.svg", alt: "Floating market boats" },
      { src: "/placeholder.svg", alt: "Market vendors" }
    ]
  };
  return <TourBooking tourData={tourData} />;
};

export default MaeklongFloatingMarket;
