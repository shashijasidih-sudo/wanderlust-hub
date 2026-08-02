import ThaiCityActivityTemplate, { ThaiActivityConfig } from "@/components/activity-detail/ThaiCityActivityTemplate";
import { toursData } from "@/data/tourData";
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
  const tourData = { ...toursData["pattaya-big-buddha-gems"], faqs: pattayaBigBuddhaGemsFaqs };
  return <ThaiCityActivityTemplate tourData={tourData} config={config} extraContentBeforeReviews={<PattayaBigBuddhaGemsSEO />} />;
};

export default PattayaBigBuddhaGems;
