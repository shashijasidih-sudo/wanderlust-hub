import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import phiPhiBoat from "@/assets/phi-phi-boat.jpeg";
import phiPhi1 from "@/assets/phi-phi-1.jpg";
import phiPhi2 from "@/assets/phi-phi-2.jpg";
import phiPhi3 from "@/assets/phi-phi-3.jpg";
import phiPhi4 from "@/assets/phi-phi-4.jpg";
import phiPhi5 from "@/assets/phi-phi-5.jpg";
import phiPhi6 from "@/assets/phi-phi-6.jpg";
import phiPhi7 from "@/assets/phi-phi-7.jpg";
import phiPhi8 from "@/assets/phi-phi-8.jpg";
import phiPhi9 from "@/assets/phi-phi-9.jpg";
import phiPhi10 from "@/assets/phi-phi-10.jpg";

const PhiPhiIsland = () => {
  const tourData = {
    ...toursData["phi-phi-island"],
    heroImages: [
      { src: phiPhiBoat, title: "Phi Phi Island Guided Tour by Big Boat with Normal Transfer" },
      { src: phiPhi1, title: "Discover Paradise Islands" },
      { src: phiPhi2, title: "Maya Bay Crystal Waters" }
    ],
    galleryImages: [
      { src: phiPhi1, alt: "Aerial view of Phi Phi Islands with turquoise waters" },
      { src: phiPhi2, alt: "Maya Bay with limestone cliffs and crystal waters" },
      { src: phiPhi3, alt: "Underwater snorkeling with colorful coral and fish" },
      { src: phiPhi4, alt: "Sunset over Phi Phi Islands" },
      { src: phiPhi5, alt: "Viking Cave with emerald waters" },
      { src: phiPhi6, alt: "Viewpoint panorama of twin bays" },
      { src: phiPhi7, alt: "Monkey Beach with limestone cliffs" },
      { src: phiPhi8, alt: "Bamboo Island pristine beach" },
      { src: phiPhi9, alt: "Big boat ferry approaching Phi Phi" },
      { src: phiPhi10, alt: "Loh Samah Bay secluded lagoon" }
    ]
  };

  return <TourBooking tourData={tourData} />;
};

export default PhiPhiIsland;
