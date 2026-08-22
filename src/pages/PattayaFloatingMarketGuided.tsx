import ThaiCityActivityTemplate, { ThaiActivityConfig } from "@/components/activity-detail/ThaiCityActivityTemplate";
import { toursData } from "@/data/tourData";
import PattayaTourItinerary from "@/components/activity-detail/PattayaTourItinerary";
import { pattayaSheetContent } from "@/data/pattayaSheetContent";
import { PattayaFloatingMarketGuidedSEO } from "@/components/activity-detail/PattayaActivitySEO";
import { pattayaFloatingMarketFaqs } from "@/data/pattayaActivityFaqs";

const config: ThaiActivityConfig = {
  path: "/thailand/pattaya/pattaya-floating-market-guided-tour/",
  city: "pattaya",
  area: "city",
  seoTitle: "Pattaya Floating Market Guided Tour with Transfer | Yellodae",
  seoDescription: "Book the guided Pattaya Floating Market tour with hotel pickup, English-speaking guide and boat ride. Instant confirmation, INR pricing, Indian support.",
  whatsappTopic: "the guided Pattaya Floating Market tour",
  audience: "Perfect for Families & Couples",
  companionIntro: "A guided walk makes the floating market far easier for first-timers. Here is the Indian traveller guide to food, bargaining, cash and transfers.",
  ctaHeadline: "Book Your Guided Floating Market Tour",
};

const PattayaFloatingMarketGuided = () => {
  const base = toursData["pattaya-floating-market-guided"];
  if (!base) return null;
  const sheet = pattayaSheetContent["pattaya-floating-market-guided"];
  const tourData = {
    ...base,
    faqs: pattayaFloatingMarketFaqs,
    description: { ...base.description, whatToExpect: sheet.whatToExpect },
    ...(sheet.inclusions.length ? { inclusions: sheet.inclusions } : {}),
  };
  return <ThaiCityActivityTemplate tourData={tourData} config={config} contentAfterOverview={<PattayaTourItinerary tourKey="pattaya-floating-market-guided" />} extraContentBeforeReviews={<PattayaFloatingMarketGuidedSEO />} />;
};

export default PattayaFloatingMarketGuided;
