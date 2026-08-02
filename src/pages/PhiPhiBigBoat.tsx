import PhuketActivityTemplate from "@/components/activity-detail/PhuketActivityTemplate";
import { PhiPhiBigBoatSEO } from "@/components/activity-detail/PhuketActivitySEO";
import { phiPhiBigBoatFaqs } from "@/data/phuketActivityFaqs";
import { toursData } from "@/data/tourData";
import phuketBigBoat from "@/assets/phuket-big-boat-1.jpg";
import phiPhi1 from "@/assets/phi-phi-1.jpg";
import phiPhi2 from "@/assets/phi-phi-2.jpg";
import phiPhi3 from "@/assets/phi-phi-3.jpg";
import phiPhi4 from "@/assets/phi-phi-4.jpg";
import phiPhi5 from "@/assets/phi-phi-5.jpg";
import phiPhi6 from "@/assets/phi-phi-6.jpg";

const PhiPhiBigBoat = () => {
  const baseTourData = toursData["phi-phi-big-boat"];
  if (!baseTourData) return null;
  const tourData = {
    ...baseTourData,
    faqs: phiPhiBigBoatFaqs,
    heroImages: [
      { src: phuketBigBoat, title: "Phi Phi Islands Big Boat Tour" },
      { src: phiPhi1, title: "Maya Bay Beach" },
      { src: phiPhi2, title: "Snorkelling Adventure" },
      { src: phiPhi3, title: "Cruising to Phi Phi" },
    ],
    galleryImages: [
      { src: phiPhi3, alt: "Big boat cruise" },
      { src: phiPhi4, alt: "Phi Phi Islands panorama" },
      { src: phiPhi5, alt: "Beach relaxation" },
      { src: phiPhi6, alt: "Buffet lunch on the island" },
    ],
  };
  return (
    <PhuketActivityTemplate
      tourData={tourData}
      config={{
        path: "/thailand/phuket/phi-phi-island-big-boat-tour-with-transfer/",
        seoTitle: "Phi Phi Island Big Boat Tour from Phuket | Book in INR",
        seoDescription: "Book the Phi Phi Island big boat tour from Phuket with hotel transfers, buffet lunch and snorkelling. Smooth ride, ideal for families. INR pricing.",
        whatsappTopic: "the Phi Phi Island big boat tour",
        audience: "Great for Families & Seniors",
        area: "island",
        ctaHeadline: "The Comfortable Way to See Phi Phi Islands",
        companionIntro: "Big boats are far smoother than speedboats — the right pick for seniors, kids and anyone prone to seasickness.",
        tips: [
          "Best option if anyone in your group gets seasick.",
          "Upper deck seats have the best views and breeze.",
          "Buffet lunch includes vegetarian dishes.",
          "The day runs longer than speedboat tours — plan 8–9 hours.",
        ],
      }}
      extraContentBeforeReviews={<PhiPhiBigBoatSEO />}
    />
  );
};

export default PhiPhiBigBoat;
