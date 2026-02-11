import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import phiPhi1 from "@/assets/phi-phi-1.jpg";
import phiPhi2 from "@/assets/phi-phi-2.jpg";
import phiPhi3 from "@/assets/phi-phi-3.jpg";
import phiPhi4 from "@/assets/phi-phi-4.jpg";
import phiPhi5 from "@/assets/phi-phi-5.jpg";
import phuketBoatTour from "@/assets/phuket-boat-tour-1.jpg";

const PhiPhiRoyalJet = () => {
  const baseTourData = toursData["phi-phi-royal-jet"];
  
  const tourData = {
    ...baseTourData,
    heroImages: [
      { src: phuketBoatTour, title: "Royal Jet Cruiser" },
      { src: phiPhi1, title: "First Class Experience" },
      { src: phiPhi2, title: "Phi Phi Islands" }
    ],
    galleryImages: [
      { src: phiPhi3, alt: "Luxury cruiser" },
      { src: phiPhi4, alt: "Premium seating" },
      { src: phiPhi5, alt: "Gourmet lunch" },
      { src: phiPhi1, alt: "VIP experience" }
    ]
  };
  
  return <TourBooking tourData={tourData} />;
};

export default PhiPhiRoyalJet;
