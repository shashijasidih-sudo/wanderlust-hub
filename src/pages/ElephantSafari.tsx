import PhuketActivityTemplate from "@/components/activity-detail/PhuketActivityTemplate";
import { toursData } from "@/data/tourData";
import elephant1 from "@/assets/elephant-1.jpg";
import phuketAtv from "@/assets/phuket-atv-1.jpg";
import phuketBoatTour from "@/assets/phuket-boat-tour-1.jpg";
import phuketIslandView from "@/assets/phuket-island-viewpoint-1.jpg";

const ElephantSafari = () => {
  const baseTourData = toursData["elephant-safari"];
  if (!baseTourData) return null;
  const tourData = {
    ...baseTourData,
    heroImages: [
      { src: elephant1, title: "Elephant Safari Phuket" },
      { src: phuketAtv, title: "ATV Jungle Ride" },
      { src: phuketBoatTour, title: "Rafting Adventure" },
      { src: phuketIslandView, title: "Jungle Viewpoints" },
    ],
    galleryImages: [
      { src: elephant1, alt: "Elephant safari experience" },
      { src: phuketAtv, alt: "ATV off-road jungle track" },
      { src: phuketBoatTour, alt: "White water rafting" },
      { src: phuketIslandView, alt: "Flying fox zipline area" },
    ],
  };
  return (
    <PhuketActivityTemplate
      tourData={tourData}
      config={{
        path: "/thailand/phuket/elephant-safari/",
        seoTitle: "Phuket Elephant Safari with ATV & Rafting | Book in INR",
        seoDescription: "Book the Phuket elephant safari adventure with ATV riding, rafting and hotel transfers. Family-friendly jungle day with instant confirmation in INR.",
        whatsappTopic: "the Phuket elephant safari adventure",
        audience: "Great for Families & Adventure Lovers",
        area: "jungle",
        ctaHeadline: "Jungle Safari, ATV & Rafting Near Phuket",
        companionIntro: "An adventure day inland from the beaches — what to wear, what kids can join and how muddy it really gets.",
        tips: [
          "Carry a full change of clothes — you will get muddy and wet.",
          "Closed shoes are mandatory for ATV sections.",
          "Minimum age limits apply for ATV — confirm before booking.",
          "Insect repellent helps in the jungle stretches.",
        ],
      }}
    />
  );
};

export default ElephantSafari;
