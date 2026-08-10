import PhuketActivityTemplate from "@/components/activity-detail/PhuketActivityTemplate";
import PhuketTourItinerary from "@/components/activity-detail/PhuketTourItinerary";
import { phuketSheetContent } from "@/data/phuketSheetContent";
import { toursData } from "@/data/tourData";
import phuketSpeedboat from "@/assets/phuket-speedboat-1.jpg";
import phuketMayaBay from "@/assets/phuket-maya-bay-1.webp";
import phuketBoatTour from "@/assets/phuket-boat-tour-1.webp";
import phiPhi1 from "@/assets/phi-phi-1.jpg";
import phiPhi2 from "@/assets/phi-phi-2.jpg";
import phiPhi3 from "@/assets/phi-phi-3.webp";
import phiPhi4 from "@/assets/phi-phi-4.jpg";
import phiPhi5 from "@/assets/phi-phi-5.jpg";
import phiPhi6 from "@/assets/phi-phi-6.jpg";

const PhiPhiIsland = () => {
  const baseTourData = toursData["phi-phi-island"];
  if (!baseTourData) return null;
  const tourData = {
    ...baseTourData,
    heroImages: [
      { src: phuketSpeedboat, title: "Phi Phi Island Speedboat Tour" },
      { src: phuketMayaBay, title: "Maya Bay Paradise" },
      { src: phuketBoatTour, title: "Island Hopping Adventure" },
      { src: phiPhi1, title: "Turquoise Waters of Phi Phi" },
    ],
    galleryImages: [
      { src: phiPhi1, alt: "Aerial view of Phi Phi Islands" },
      { src: phiPhi2, alt: "Maya Bay limestone cliffs" },
      { src: phiPhi3, alt: "Snorkelling with coral fish" },
      { src: phiPhi4, alt: "Sunset over Phi Phi" },
      { src: phiPhi5, alt: "Viking Cave emerald waters" },
      { src: phiPhi6, alt: "Twin bays viewpoint" },
    ],
  };
  const sheet = phuketSheetContent["phi-phi-island"];
  const pageTourData = {
    ...tourData,
    description: { ...tourData.description, whatToExpect: sheet.whatToExpect },
    inclusions: sheet.inclusions,
  };
  return (
    <PhuketActivityTemplate
      tourData={pageTourData}
      contentAfterOverview={<PhuketTourItinerary tourKey="phi-phi-island" />}
      config={{
        path: "/thailand/phuket/full-day-phi-phi-island-tour-with-transfer/",
        seoTitle: "Phi Phi Island Tour from Phuket with Transfers | Book in INR",
        seoDescription: "Book the full-day Phi Phi Island speedboat tour from Phuket with hotel transfers, Maya Bay, snorkelling and lunch. Instant confirmation and INR pricing.",
        whatsappTopic: "the Phi Phi Island tour from Phuket",
        audience: "Great for Families & Couples",
        area: "island",
        ctaHeadline: "Maya Bay, Snorkelling & Island Hopping in One Day",
        companionIntro: "Phuket's most popular day trip — here's how Indian families should plan the boat day, food and seasickness.",
        tips: [
          "Take a motion-sickness tablet 30 minutes before boarding.",
          "Carry a dry bag for phones — speedboats get very wet.",
          "Reef-safe sunscreen only; Maya Bay is a protected park.",
          "Pickups start early (07:00–08:00) — pre-book breakfast.",
        ],
      }}
    />
  );
};

export default PhiPhiIsland;
