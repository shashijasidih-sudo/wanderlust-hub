import PhuketActivityTemplate from "@/components/activity-detail/PhuketActivityTemplate";
import PhuketTourItinerary from "@/components/activity-detail/PhuketTourItinerary";
import { phuketSheetContent } from "@/data/phuketSheetContent";
import { PhuketFantaSeaSEO } from "@/components/activity-detail/PhuketActivitySEO";
import { phuketFantaSeaFaqs } from "@/data/phuketActivityFaqs";
import { toursData } from "@/data/tourData";
import phuketCarnival1 from "@/assets/phuket-carnival-1.webp";
import phuketCarnival2 from "@/assets/phuket-carnival-2.jpg";
import phuketCarnival3 from "@/assets/phuket-carnival-3.jpg";
import phuketNightMarket from "@/assets/phuket-night-market-1.webp";

const PhuketCarnivalMagic = () => {
  const baseTourData = toursData["phuket-carnival-magic"];
  if (!baseTourData) return null;
  const tourData = {
    ...baseTourData,
    faqs: phuketFantaSeaFaqs,
    heroImages: [
      { src: phuketCarnival1, title: "Carnival Magic Theme Park" },
      { src: phuketCarnival2, title: "Carnival Parade Show" },
      { src: phuketCarnival3, title: "Kingdom of Lights" },
      { src: phuketNightMarket, title: "Evening Entertainment" },
    ],
    galleryImages: [
      { src: phuketCarnival1, alt: "Carnival parade floats" },
      { src: phuketCarnival2, alt: "Night carnival rides" },
      { src: phuketCarnival3, alt: "Grand parade lights" },
      { src: phuketNightMarket, alt: "Food and stalls" },
    ],
  };
  const sheet = phuketSheetContent["phuket-carnival-magic"];
  const pageTourData = {
    ...tourData,
    description: { ...tourData.description, whatToExpect: sheet.whatToExpect },
    inclusions: sheet.inclusions,
  };
  return (
    <PhuketActivityTemplate
      tourData={pageTourData}
      contentAfterOverview={<PhuketTourItinerary tourKey="phuket-carnival-magic" />}
      config={{
        path: "/thailand/phuket/carnival-magic-show-tickets-with-transfer/",
        seoTitle: "Carnival Magic Phuket Tickets with Transfers | Book in INR",
        seoDescription: "Book Carnival Magic Phuket tickets with hotel transfers and buffet options. Thailand's biggest night carnival with instant confirmation in INR.",
        whatsappTopic: "Carnival Magic Phuket tickets",
        audience: "Great for Families & Kids",
        area: "beach",
        ctaHeadline: "Thailand's Biggest Night Carnival, Booked in INR",
        companionIntro: "A full evening out for families — buffet choices, veg food and how long you actually need there.",
        tips: [
          "Plan 4–5 hours — the park is huge.",
          "Buffet includes Indian-friendly veg options on request.",
          "Cameras are restricted inside the main show theatre.",
          "Wear comfortable walking shoes.",
        ],
      }}
      extraContentBeforeReviews={<PhuketFantaSeaSEO />}
    />
  );
};

export default PhuketCarnivalMagic;
