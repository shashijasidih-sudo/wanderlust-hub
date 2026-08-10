import PhuketActivityTemplate from "@/components/activity-detail/PhuketActivityTemplate";
import PhuketTourItinerary from "@/components/activity-detail/PhuketTourItinerary";
import { phuketSheetContent } from "@/data/phuketSheetContent";
import { toursData } from "@/data/tourData";
import dolphinShow1 from "@/assets/dolphin-show-1.webp";
import dolphinShow2 from "@/assets/dolphin-show-2.jpg";
import dolphinShow3 from "@/assets/dolphin-show-3.webp";
import phuketNightMarket from "@/assets/phuket-night-market-1.webp";

const DolphinBayPhuket = () => {
  const baseTourData = toursData["dolphin-bay-phuket"];
  if (!baseTourData) return null;
  const tourData = {
    ...baseTourData,
    heroImages: [
      { src: dolphinShow1, title: "Dolphin Show Phuket" },
      { src: dolphinShow2, title: "Interactive Dolphin Performance" },
      { src: dolphinShow3, title: "Seal Show Entertainment" },
      { src: phuketNightMarket, title: "Evening in Phuket" },
    ],
    galleryImages: [
      { src: dolphinShow1, alt: "Dolphin jumping performance" },
      { src: dolphinShow2, alt: "Dolphins swimming underwater" },
      { src: dolphinShow3, alt: "Seal show entertainment" },
      { src: phuketNightMarket, alt: "Family evening out in Phuket" },
    ],
  };
  const sheet = phuketSheetContent["dolphin-bay-phuket"];
  const pageTourData = {
    ...tourData,
    description: { ...tourData.description, whatToExpect: sheet.whatToExpect },
    inclusions: sheet.inclusions,
  };
  return (
    <PhuketActivityTemplate
      tourData={pageTourData}
      contentAfterOverview={<PhuketTourItinerary tourKey="dolphin-bay-phuket" />}
      config={
        path: "/thailand/phuket/dolphin-show-phuket-with-transfer/",
        seoTitle: "Dolphin Show Phuket Tickets with Transfers | Book in INR",
        seoDescription: "Book Dolphin Show Phuket tickets with hotel transfers. Dolphin and seal performances loved by Indian families. Instant confirmation and INR pricing.",
        whatsappTopic: "Dolphin Show Phuket tickets",
        audience: "Great for Families with Kids",
        area: "city",
        ctaHeadline: "Phuket's Favourite Family Show, Transfers Included",
        companionIntro: "An easy, air-conditioned evening for families — seating, timings and food tips for Indian travellers.",
        tips: [
          "Arrive 30 minutes early for the best central seats.",
          "Front rows can get splashed — fun for kids, plan accordingly.",
          "Show duration is about 60 minutes.",
          "Veg snacks are limited inside — eat before or after.",
        ],
      }}
    />
  );
};

export default DolphinBayPhuket;
