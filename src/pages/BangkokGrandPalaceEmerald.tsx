import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import grandPalaceTemple1 from "@/assets/grand-palace-temple-1.jpg";
import grandPalaceBuddha from "@/assets/grand-palace-buddha.jpg";
import grandPalacePagoda from "@/assets/grand-palace-pagoda.jpg";

const BangkokGrandPalaceEmerald = () => {
  const tourData = {
    ...toursData["bangkok-grand-palace-emerald"],
    heroImages: [
      { src: grandPalaceTemple1, title: "Royal Grand Palace" },
      { src: grandPalaceBuddha, title: "Emerald Buddha" },
      { src: grandPalacePagoda, title: "Reclining Buddha" }
    ],
    galleryImages: [
      { src: grandPalaceTemple1, alt: "Grand Palace golden spires" },
      { src: grandPalaceBuddha, alt: "Emerald Buddha temple" },
      { src: grandPalacePagoda, alt: "Reclining Buddha" }
    ]
  };
  return <TourBooking tourData={tourData} />;
};

export default BangkokGrandPalaceEmerald;
