import ThaiCityActivityTemplate, { ThaiActivityConfig } from "@/components/activity-detail/ThaiCityActivityTemplate";
import { toursData } from "@/data/tourData";
import PattayaTourItinerary from "@/components/activity-detail/PattayaTourItinerary";
import { pattayaSheetContent } from "@/data/pattayaSheetContent";
import { adultShowPattayaFaqs } from "@/data/pattayaActivityFaqs";

const config: ThaiActivityConfig = {
  path: "/thailand/pattaya/89-show-pattaya-with-transfer/",
  city: "pattaya",
  area: "show",
  seoTitle: "89 Show Pattaya Tickets with Transfer | Yellodae",
  seoDescription: "Book 89 Show Pattaya adult cabaret tickets with round-trip hotel transfers. 18+ only, instant confirmation, INR pricing and Indian traveller support.",
  whatsappTopic: "89 Show Pattaya tickets",
  audience: "Adults Only (18+)",
  companionIntro: "This is an adults-only (18+) Pattaya show. Here is the practical Indian traveller guide to timings, dress code, transfers and etiquette.",
  ctaHeadline: "Book Your 89 Show Pattaya Tickets",
};

const Show89Pattaya = () => {
  const base = toursData["show-89-pattaya"];
  if (!base) return null;
  const sheet = pattayaSheetContent["show-89-pattaya"];
  const tourData = {
    ...base,
    faqs: adultShowPattayaFaqs("89 Show Pattaya"),
    description: { ...base.description, whatToExpect: sheet.whatToExpect },
    ...(sheet.inclusions.length ? { inclusions: sheet.inclusions } : {}),
  };
  return <ThaiCityActivityTemplate tourData={tourData} config={config} contentAfterOverview={<PattayaTourItinerary tourKey="show-89-pattaya" />} />;
};

export default Show89Pattaya;
