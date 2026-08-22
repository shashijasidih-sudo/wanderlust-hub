import ThaiCityActivityTemplate, { ThaiActivityConfig } from "@/components/activity-detail/ThaiCityActivityTemplate";
import { toursData } from "@/data/tourData";
import PattayaTourItinerary from "@/components/activity-detail/PattayaTourItinerary";
import { pattayaSheetContent } from "@/data/pattayaSheetContent";
import { PattayaDolphinariumSEO } from "@/components/activity-detail/PattayaActivitySEO";
import { pattayaDolphinariumFaqs } from "@/data/pattayaActivityFaqs";

const config: ThaiActivityConfig = {
  path: "/thailand/pattaya/pattaya-dolphinarium-show-tickets/",
  city: "pattaya",
  area: "city",
  seoTitle: "Pattaya Dolphinarium Show Tickets with Transfer | Yellodae",
  seoDescription: "Book Pattaya Dolphinarium dolphin and seal show tickets with hotel transfers. Great for kids — instant confirmation, INR pricing and Indian support.",
  whatsappTopic: "Pattaya Dolphinarium show tickets",
  audience: "Perfect for Families & Couples",
  companionIntro: "The Dolphinarium is an indoor, air-conditioned show that works well with kids. Here is what Indian families should know before booking.",
  ctaHeadline: "Book Your Pattaya Dolphinarium Tickets",
};

const PattayaDolphinarium = () => {
  const base = toursData["pattaya-dolphinarium"];
  if (!base) return null;
  const sheet = pattayaSheetContent["pattaya-dolphinarium"];
  const tourData = {
    ...base,
    faqs: pattayaDolphinariumFaqs,
    description: { ...base.description, whatToExpect: sheet.whatToExpect },
    ...(sheet.inclusions.length ? { inclusions: sheet.inclusions } : {}),
  };
  return <ThaiCityActivityTemplate tourData={tourData} config={config} contentAfterOverview={<PattayaTourItinerary tourKey="pattaya-dolphinarium" />} extraContentBeforeReviews={<PattayaDolphinariumSEO />} />;
};

export default PattayaDolphinarium;
