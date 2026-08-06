import PhuketActivityTemplate from "@/components/activity-detail/PhuketActivityTemplate";
import { toursData } from "@/data/tourData";
import phuketBoatTour from "@/assets/phuket-boat-tour-1.webp";
import phiPhi1 from "@/assets/phi-phi-1.webp";
import phiPhi2 from "@/assets/phi-phi-2.webp";
import phiPhi3 from "@/assets/phi-phi-3.webp";
import phiPhi4 from "@/assets/phi-phi-4.jpg";
import phiPhi5 from "@/assets/phi-phi-5.jpg";

const PhiPhiRoyalJet = () => {
  const baseTourData = toursData["phi-phi-royal-jet"];
  if (!baseTourData) return null;
  const tourData = {
    ...baseTourData,
    heroImages: [
      { src: phuketBoatTour, title: "Premium Speedboat to Phi Phi" },
      { src: phiPhi1, title: "First-Class Island Experience" },
      { src: phiPhi2, title: "Phi Phi Islands" },
      { src: phiPhi3, title: "Maya Bay Access" },
    ],
    galleryImages: [
      { src: phiPhi3, alt: "Luxury cruiser" },
      { src: phiPhi4, alt: "Premium seating" },
      { src: phiPhi5, alt: "Gourmet lunch" },
      { src: phiPhi1, alt: "VIP island experience" },
    ],
  };
  return (
    <PhuketActivityTemplate
      tourData={tourData}
      config={{
        path: "/thailand/phuket/phi-phi-island-premium-speedboat-tour-with-transfer/",
        seoTitle: "Phi Phi Premium Speedboat Tour from Phuket | Book in INR",
        seoDescription: "Book the premium Phi Phi Island speedboat tour from Phuket with private transfers, smaller groups and gourmet lunch. Instant confirmation in INR.",
        whatsappTopic: "the premium Phi Phi speedboat tour",
        audience: "Great for Honeymooners & Small Groups",
        area: "island",
        ctaHeadline: "A Premium, Less-Crowded Way to See Phi Phi",
        companionIntro: "Smaller groups, better boats and earlier Maya Bay access — for travellers who want the upgrade.",
        tips: [
          "Smaller group sizes mean faster stops and less waiting.",
          "Early departure gets you to Maya Bay before the crowds.",
          "Vegetarian and Jain meals can be pre-arranged.",
          "Carry a dry bag and change of clothes.",
        ],
      }}
    />
  );
};

export default PhiPhiRoyalJet;
