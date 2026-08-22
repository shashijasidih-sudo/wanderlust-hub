import ThaiCityActivityTemplate, { ThaiActivityConfig } from "@/components/activity-detail/ThaiCityActivityTemplate";
import { toursData } from "@/data/tourData";
import PattayaTourItinerary from "@/components/activity-detail/PattayaTourItinerary";
import { pattayaSheetContent } from "@/data/pattayaSheetContent";
import { PattayaNightlifeWalkingSEO } from "@/components/activity-detail/PattayaActivitySEO";
import { lostInNightlightFaqs } from "@/data/pattayaActivityFaqs";

const config: ThaiActivityConfig = {
  path: "/thailand/pattaya/pattaya-nightlife-walking-tour/",
  city: "pattaya",
  area: "show",
  seoTitle: "Pattaya Nightlife Walking Tour with Food Tasting | Yellodae",
  seoDescription: "Book the Pattaya nightlife walking, drinking and food tasting tour with a local guide. 18+ only, instant confirmation, INR pricing and Indian support.",
  whatsappTopic: "the Pattaya nightlife walking tour",
  audience: "Adults Only (18+)",
  companionIntro: "An 18+ guided night walk through Pattaya's nightlife district. Here is what Indian travellers should carry, wear and budget for.",
  ctaHeadline: "Book Your Pattaya Nightlife Walking Tour",
};

const PattayaNightlifeWalking = () => {
  const base = toursData["pattaya-nightlife-walking"];
  if (!base) return null;
  const sheet = pattayaSheetContent["pattaya-nightlife-walking"];
  const tourData = {
    ...base,
    faqs: lostInNightlightFaqs,
    description: { ...base.description, whatToExpect: sheet.whatToExpect },
    ...(sheet.inclusions.length ? { inclusions: sheet.inclusions } : {}),
  };
  return <ThaiCityActivityTemplate tourData={tourData} config={config} contentAfterOverview={<PattayaTourItinerary tourKey="pattaya-nightlife-walking" />} extraContentBeforeReviews={<PattayaNightlifeWalkingSEO />} />;
};

export default PattayaNightlifeWalking;
