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
import phuketMayaBay from "@/assets/phuket-maya-bay-1.jpg";
import phuketSpeedboat from "@/assets/phuket-speedboat-1.jpg";
import phuketBoatTour from "@/assets/phuket-boat-tour-1.jpg";

const PhiPhiIsland = () => {
  console.log("PhiPhiIsland: toursData available?", !!toursData);
  console.log("PhiPhiIsland: phi-phi-island exists?", !!toursData["phi-phi-island"]);
  console.log("PhiPhiIsland: toursData keys:", Object.keys(toursData || {}));
  
  const baseTourData = toursData["phi-phi-island"];
  
  if (!baseTourData) {
    console.error("PhiPhiIsland: Base tour data not found for phi-phi-island");
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Tour Configuration Error</h1>
          <p className="text-muted-foreground">Tour data not found in database.</p>
        </div>
      </div>
    );
  }
  
  const tourData = {
    ...baseTourData,
    heroImages: [
      { src: phuketSpeedboat, title: "Phi Phi Island Speedboat Tour" },
      { src: phuketMayaBay, title: "Maya Bay Paradise" },
      { src: phuketBoatTour, title: "Island Hopping Adventure" }
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
  
  console.log("PhiPhiIsland: Final tourData created", {
    id: tourData.id,
    title: tourData.title,
    hasHeroImages: !!tourData.heroImages
  });

  return <TourBooking tourData={tourData} />;
};

export default PhiPhiIsland;
