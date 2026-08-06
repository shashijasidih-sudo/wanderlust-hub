import PhuketActivityTemplate from "@/components/activity-detail/PhuketActivityTemplate";
import { toursData } from "@/data/tourData";
import phuketSpeedboat from "@/assets/phuket-speedboat-1.jpg";
import phuketMayaBay from "@/assets/phuket-maya-bay-1.webp";
import phiPhi1 from "@/assets/phi-phi-1.jpg";
import phiPhi2 from "@/assets/phi-phi-2.jpg";
import phiPhi3 from "@/assets/phi-phi-3.webp";
import phiPhi4 from "@/assets/phi-phi-4.jpg";

const PhiPhiMayaKhaiSpeedboat = () => {
  const baseTourData = toursData["phi-phi-maya-khai-speedboat"];
  if (!baseTourData) return null;
  const tourData = {
    ...baseTourData,
    heroImages: [
      { src: phuketSpeedboat, title: "Phi Phi, Maya Bay & Khai Island" },
      { src: phuketMayaBay, title: "Maya Bay" },
      { src: phiPhi1, title: "Khai Island" },
      { src: phiPhi2, title: "Snorkelling Stops" },
    ],
    galleryImages: [
      { src: phiPhi2, alt: "Speedboat ride" },
      { src: phiPhi3, alt: "Maya Bay beach" },
      { src: phiPhi4, alt: "Khai Island shallows" },
      { src: phiPhi1, alt: "Snorkelling with fish" },
    ],
  };
  return (
    <PhuketActivityTemplate
      tourData={tourData}
      config={{
        path: "/thailand/phuket/phi-phi-maya-bay-khai-island-speedboat-tour-with-transfer/",
        seoTitle: "Phi Phi, Maya Bay & Khai Island Speedboat Tour | Book in INR",
        seoDescription: "Book the Phi Phi, Maya Bay and Khai Island speedboat tour from Phuket with hotel transfers, snorkelling and lunch. Instant confirmation and INR pricing.",
        whatsappTopic: "the Phi Phi, Maya Bay and Khai Island speedboat tour",
        audience: "Great for Families & Groups",
        area: "island",
        ctaHeadline: "Three Islands, One Speedboat Day from Phuket",
        companionIntro: "The most-covered island itinerary from Phuket — timings, seasickness tips and what to pack.",
        tips: [
          "Khai Island shallows are perfect for kids and non-swimmers.",
          "National park fees may be collected separately at the pier.",
          "Carry a waterproof phone pouch.",
          "Take motion-sickness tablets before boarding.",
        ],
      }}
    />
  );
};

export default PhiPhiMayaKhaiSpeedboat;
