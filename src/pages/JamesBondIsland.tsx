import PhuketActivityTemplate from "@/components/activity-detail/PhuketActivityTemplate";
import { toursData } from "@/data/tourData";
import jamesBond1 from "@/assets/james-bond-1.webp";
import jamesBond2 from "@/assets/james-bond-2.webp";
import jamesBond3 from "@/assets/james-bond-3.webp";
import phuketLongtailBoat from "@/assets/phuket-longtail-boat-1.jpg";
import phuketKayaks from "@/assets/phuket-kayaks-beach-1.jpg";
import phuketBoatTour from "@/assets/phuket-boat-tour-1.webp";

const JamesBondIsland = () => {
  const baseTourData = toursData["james-bond-island"];
  if (!baseTourData) return null;
  const tourData = {
    ...baseTourData,
    heroImages: [
      { src: jamesBond1, title: "James Bond Island, Phang Nga Bay" },
      { src: phuketLongtailBoat, title: "Long-tail Boat Adventure" },
      { src: jamesBond2, title: "Sea Canoeing Experience" },
      { src: jamesBond3, title: "Limestone Karst Scenery" },
    ],
    galleryImages: [
      { src: jamesBond3, alt: "Famous James Bond Island rock" },
      { src: phuketKayaks, alt: "Canoeing through sea caves" },
      { src: phuketLongtailBoat, alt: "Traditional Thai long-tail boat" },
      { src: phuketBoatTour, alt: "Koh Panyee floating village" },
    ],
  };
  return (
    <PhuketActivityTemplate
      tourData={tourData}
      config={{
        path: "/thailand/phuket/james-bond-island-speed-boat-tour-with-transfer/",
        seoTitle: "James Bond Island Speedboat Tour from Phuket | Book in INR",
        seoDescription: "Book the James Bond Island speedboat tour from Phuket with hotel transfers, Phang Nga Bay canoeing, Koh Panyee lunch and instant confirmation in INR.",
        whatsappTopic: "the James Bond Island speedboat tour",
        audience: "Great for Families & First-Timers",
        area: "island",
        ctaHeadline: "Phang Nga Bay & James Bond Island by Speedboat",
        companionIntro: "Limestone karsts, sea caves and a floating Muslim village — planned for Indian travellers, with veg lunch options.",
        tips: [
          "Halal and vegetarian lunch can be arranged at Koh Panyee on request.",
          "Wear quick-dry clothes — canoe seats stay wet.",
          "Keep cash for souvenirs at the floating village.",
          "Morning departures have the calmest water.",
        ],
      }}
    />
  );
};

export default JamesBondIsland;
