import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import phiPhi1 from "@/assets/phi-phi-1.jpg";
import phiPhi2 from "@/assets/phi-phi-2.jpg";
import phiPhi3 from "@/assets/phi-phi-3.jpg";
import phiPhi4 from "@/assets/phi-phi-4.jpg";
import phiPhi5 from "@/assets/phi-phi-5.jpg";
import phiPhi6 from "@/assets/phi-phi-6.jpg";
import phuketBigBoat from "@/assets/phuket-big-boat-1.jpg";

const PhiPhiBigBoat = () => {
  const baseTourData = toursData["phi-phi-big-boat"];
  
  const tourData = {
    ...baseTourData,
    heroImages: [
      { src: phuketBigBoat, title: "Phi Phi Islands Big Boat Tour" },
      { src: phiPhi1, title: "Maya Bay Beach" },
      { src: phiPhi2, title: "Snorkeling Adventure" }
    ],
    galleryImages: [
      { src: phiPhi3, alt: "Big boat cruise" },
      { src: phiPhi4, alt: "Phi Phi Islands panorama" },
      { src: phiPhi5, alt: "Beach relaxation" },
      { src: phiPhi6, alt: "Lunch on the island" }
    ]
  };
  
  return <TourBooking tourData={tourData} />;
};

export default PhiPhiBigBoat;
