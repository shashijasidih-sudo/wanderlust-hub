import ThaiCityActivityTemplate, { ThaiActivityConfig } from "@/components/activity-detail/ThaiCityActivityTemplate";
import { toursData } from "@/data/tourData";
import PattayaTourItinerary from "@/components/activity-detail/PattayaTourItinerary";
import { pattayaSheetContent } from "@/data/pattayaSheetContent";
import { PattayaBigBuddhaGemsSEO } from "@/components/activity-detail/PattayaActivitySEO";
import { pattayaBigBuddhaGemsFaqs } from "@/data/pattayaActivityFaqs";

const config: ThaiActivityConfig = {
  path: "/thailand/pattaya/big-buddha-gems-gallery-tour/",
  city: "pattaya",
  area: "city",
  seoTitle: "Pattaya Big Buddha Hill & Gems Gallery Tour with Transfer | Yellodae",
  seoDescription: "Book the Pattaya Big Buddha Hill and Gems Gallery city tour with round-trip hotel transfers. Instant confirmation, INR pricing, Indian traveller support.",
  whatsappTopic: "the Pattaya Big Buddha & Gems Gallery tour",
  audience: "Perfect for Families & Couples",
  companionIntro: "Visiting Big Buddha Hill and the Gems Gallery? Here is the practical Indian traveller guide — dress code, timings, transfers and nearby veg food.",
  ctaHeadline: "Book Your Pattaya City & Big Buddha Tour",
};

const PattayaBigBuddhaGems = () => {
  const base = toursData["pattaya-big-buddha-gems"];
  if (!base) return null;
  const sheet = pattayaSheetContent["pattaya-big-buddha-gems"];
  const tourData = {
    ...base,
    faqs: pattayaBigBuddhaGemsFaqs,
    description: { ...base.description, whatToExpect: sheet.whatToExpect },
    ...(sheet.inclusions.length ? { inclusions: sheet.inclusions } : {}),
  };
  return <ThaiCityActivityTemplate tourData={tourData} config={config} contentAfterOverview={<PattayaTourItinerary tourKey="pattaya-big-buddha-gems" />} extraContentBeforeReviews={<PattayaBigBuddhaGemsSEO />} />;
};

export default PattayaBigBuddhaGems;
