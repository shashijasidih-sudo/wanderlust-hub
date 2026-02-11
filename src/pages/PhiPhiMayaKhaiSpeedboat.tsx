import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import phiPhi1 from "@/assets/phi-phi-1.jpg";
import phiPhi2 from "@/assets/phi-phi-2.jpg";
import phiPhi3 from "@/assets/phi-phi-3.jpg";
import phiPhi4 from "@/assets/phi-phi-4.jpg";
import phuketMayaBay from "@/assets/phuket-maya-bay-1.jpg";
import phuketSpeedboat from "@/assets/phuket-speedboat-1.jpg";

const PhiPhiMayaKhaiSpeedboat = () => {
  const baseTourData = toursData["phi-phi-maya-khai-speedboat"];
  
  const tourData = {
    ...baseTourData,
    heroImages: [
      { src: phuketSpeedboat, title: "Speedboat Adventure" },
      { src: phuketMayaBay, title: "Maya Bay" },
      { src: phiPhi1, title: "Khai Island" }
    ],
    galleryImages: [
      { src: phiPhi2, alt: "Speedboat ride" },
      { src: phiPhi3, alt: "Maya Bay beach" },
      { src: phiPhi4, alt: "Khai Island" },
      { src: phiPhi1, alt: "Snorkeling" }
    ]
  };
  
  return <TourBooking tourData={tourData} />;
};

export default PhiPhiMayaKhaiSpeedboat;
