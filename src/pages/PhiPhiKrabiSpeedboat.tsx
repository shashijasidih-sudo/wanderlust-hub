import KrabiActivityTemplate from "@/components/activity-detail/KrabiActivityTemplate";
import KrabiTourItinerary from "@/components/activity-detail/KrabiTourItinerary";
import { krabiSheetContent } from "@/data/krabiSheetContent";
import { toursData } from "@/data/tourData";
import phiPhiBoat from "@/assets/phi-phi-boat.jpeg";
import phiPhi2 from "@/assets/phi-phi-2.jpg";
import phiPhi3 from "@/assets/phi-phi-3.jpg";
import phiPhi5 from "@/assets/phi-phi-5.jpg";

const PhiPhiKrabiSpeedboat = () => {
  const base = toursData["phi-phi-krabi-speedboat"];
  if (!base) return null;
  const sheet = krabiSheetContent["phi-phi-krabi-speedboat"];
  const tourData = {
    ...base,
    heroImages: [
      { src: phiPhiBoat, title: "Phi Phi Longtail Boats" },
      { src: phiPhi2, title: "Maya Bay Paradise" },
      { src: phiPhi3, title: "Phi Leh Lagoon" },
      { src: phiPhi5, title: "Snorkelling at Phi Phi" },
    ],
    description: { ...base.description, whatToExpect: sheet.whatToExpect },
    inclusions: sheet.inclusions,
  };

  return (
    <KrabiActivityTemplate
      tourData={tourData}
      contentAfterOverview={<KrabiTourItinerary tourKey="phi-phi-krabi-speedboat" />}
      config={{
        path: "/thailand/krabi/phi-phi-island-tour-from-krabi-with-transfer/",
        seoTitle: "Phi Phi Island Tour from Krabi by Speedboat with Transfers | Yellodae",
        seoDescription:
          "Book the Phi Phi Island speedboat tour from Krabi — Maya Bay, Phi Leh Lagoon, Bamboo Island snorkelling, buffet lunch, hotel transfers and INR pricing.",
        seoImage: phiPhiBoat,
        whatsappTopic: "the Phi Phi Island speedboat tour from Krabi",
        area: "island",
        audience: "Perfect for Couples & Families",
        companionIntro:
          "Maya Bay, Phi Leh Lagoon and snorkelling at Bamboo Island — the classic Phi Phi day out, departing straight from Krabi.",
        ctaHeadline: "Phi Phi by Speedboat from Krabi — Maya Bay & Snorkelling",
        ctaImage: phiPhi2,
        tips: [
          "Carry THB cash for the national park fee collected at the pier.",
          "Motion-sickness tablets help — the speedboat ride can be bumpy.",
          "Veg, non-veg and halal lunch options are available; tell us when you book.",
        ],
      }}
    />
  );
};

export default PhiPhiKrabiSpeedboat;
