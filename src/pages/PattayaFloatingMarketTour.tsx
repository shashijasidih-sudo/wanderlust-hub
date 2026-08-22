import ThaiCityActivityTemplate, { ThaiActivityConfig } from "@/components/activity-detail/ThaiCityActivityTemplate";
import { toursData } from "@/data/tourData";
import PattayaTourItinerary from "@/components/activity-detail/PattayaTourItinerary";
import { pattayaSheetContent } from "@/data/pattayaSheetContent";
import { PattayaFloatingMarketSEO } from "@/components/activity-detail/PattayaActivitySEO";
import { pattayaFloatingMarketFaqs } from "@/data/pattayaActivityFaqs";

const config: ThaiActivityConfig = {
  path: "/thailand/pattaya/pattaya-floating-market-tour/",
  city: "pattaya",
  area: "city",
  seoTitle: "Pattaya Floating Market Tour Tickets with Transfer | Yellodae",
  seoDescription: "Book Pattaya Floating Market tour with hotel transfers, boat rides and Thai street food. Instant confirmation, INR pricing and Indian traveller support.",
  whatsappTopic: "the Pattaya Floating Market tour",
  audience: "Perfect for Families & Couples",
  companionIntro: "Planning the Pattaya Floating Market with family? Here is everything Indian travellers ask us before booking — food, dress code, cash, transfers and timings.",
  ctaHeadline: "Book Your Pattaya Floating Market Tour Today",
};

const PattayaFloatingMarketTour = () => {
  const base = toursData["pattaya-floating-market-tour"];
  if (!base) return null;
  const sheet = pattayaSheetContent["pattaya-floating-market-tour"];
  const tourData = {
    ...base,
    faqs: pattayaFloatingMarketFaqs,
    description: { ...base.description, whatToExpect: sheet.whatToExpect },
    ...(sheet.inclusions.length ? { inclusions: sheet.inclusions } : {}),
  };
  return <ThaiCityActivityTemplate tourData={tourData} config={config} contentAfterOverview={<PattayaTourItinerary tourKey="pattaya-floating-market-tour" />} extraContentBeforeReviews={<PattayaFloatingMarketSEO />} />;
};

export default PattayaFloatingMarketTour;
