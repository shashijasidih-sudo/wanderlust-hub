import PhuketActivityTemplate from "@/components/activity-detail/PhuketActivityTemplate";
import { TigerKingdomSEO } from "@/components/activity-detail/PhuketActivitySEO";
import { tigerKingdomFaqs } from "@/data/phuketActivityFaqs";
import { toursData } from "@/data/tourData";
import tiger1 from "@/assets/tiger-1.jpg";
import phuketTiger from "@/assets/phuket-tiger-1.jpg";
import phuketIslandView from "@/assets/phuket-island-viewpoint-1.jpg";
import phuketNightMarket from "@/assets/phuket-night-market-1.jpg";

const SelfieWithTigers = () => {
  const baseTourData = toursData["selfie-tigers"];
  if (!baseTourData) return null;
  const tourData = {
    ...baseTourData,
    faqs: tigerKingdomFaqs,
    heroImages: [
      { src: tiger1, title: "Tiger Kingdom Phuket Experience" },
      { src: phuketTiger, title: "Close-up Tiger Encounter" },
      { src: phuketIslandView, title: "Phuket City Viewpoints" },
      { src: phuketNightMarket, title: "Phuket Old Town" },
    ],
    galleryImages: [
      { src: tiger1, alt: "Majestic tiger at Tiger Kingdom" },
      { src: phuketTiger, alt: "Tiger photo session" },
      { src: phuketIslandView, alt: "Karon viewpoint" },
      { src: phuketNightMarket, alt: "Phuket Old Town streets" },
    ],
  };
  return (
    <PhuketActivityTemplate
      tourData={tourData}
      config={{
        path: "/thailand/phuket/phuket-city-tour-with-tiger-kingdom-phuket-tickets-with-transfer/",
        seoTitle: "Tiger Kingdom Phuket Tickets with City Tour & Transfers | INR",
        seoDescription: "Book Tiger Kingdom Phuket tickets with a city tour and hotel transfers. Photo session with tigers, Big Buddha and Old Town. Instant confirmation in INR.",
        whatsappTopic: "Tiger Kingdom Phuket with city tour",
        audience: "Great for Couples & Photographers",
        area: "city",
        ctaHeadline: "Tiger Photos, Big Buddha & Phuket Old Town in One Day",
        companionIntro: "A photo-first half day — here's what to wear, which tiger size to pick and how the city stops are sequenced.",
        tips: [
          "Choose smallest/medium tigers for the best photos with kids over 12.",
          "Avoid bright red or loose flowing clothing inside enclosures.",
          "Bring a sarong for the Big Buddha stop.",
          "Morning slots are cooler and less crowded.",
        ],
      }}
      extraContentBeforeReviews={<TigerKingdomSEO />}
    />
  );
};

export default SelfieWithTigers;
