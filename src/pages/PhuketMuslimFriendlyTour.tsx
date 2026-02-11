import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import phuketMuslimWoman from "@/assets/phuket-muslim-woman-hijab.jpg";
import phuketWaterfall from "@/assets/phuket-bang-pae-waterfall.jpg";
import phuketMosque from "@/assets/phuket-mosque-bangTao.jpg";
import phuketPlaneBeach from "@/assets/phuket-mai-khao-beach-plane.jpg";

const PhuketMuslimFriendlyTour = () => {
  const baseTourData = toursData["phuket-muslim-friendly-tour"];
  
  const tourData = {
    ...baseTourData,
    heroImages: [
      { src: phuketMuslimWoman, title: "Muslim-Friendly Phuket Tour" },
      { src: phuketWaterfall, title: "Bang Pae Waterfall" },
      { src: phuketMosque, title: "Bang Tao Mukaram Mosque" }
    ],
    galleryImages: [
      { src: phuketMuslimWoman, alt: "Muslim traveler in Phuket" },
      { src: phuketWaterfall, alt: "Bang Pae Waterfall" },
      { src: phuketMosque, alt: "Bang Tao Mukaram Mosque" },
      { src: phuketPlaneBeach, alt: "Mai Khao Beach with airplane" }
    ]
  };
  
  return <TourBooking tourData={tourData} />;
};

export default PhuketMuslimFriendlyTour;
