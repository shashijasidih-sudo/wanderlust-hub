import ThaiCityActivityTemplate, { ThaiActivityConfig } from "@/components/activity-detail/ThaiCityActivityTemplate";
import { toursData } from "@/data/tourData";
import PattayaTourItinerary from "@/components/activity-detail/PattayaTourItinerary";
import { pattayaSheetContent } from "@/data/pattayaSheetContent";
import { AlcazarShowPattayaSEO } from "@/components/activity-detail/PattayaActivitySEO";
import { alcazarShowPattayaFaqs } from "@/data/pattayaActivityFaqs";

const config: ThaiActivityConfig = {
  path: "/thailand/pattaya/alcazar-cabaret-show-with-transfer/",
  city: "pattaya",
  area: "show",
  seoTitle: "Alcazar Cabaret Show Pattaya Tickets with Transfer | Yellodae",
  seoDescription: "Book Alcazar Show Pattaya cabaret tickets with round-trip hotel transfers. VIP and standard seats, instant confirmation, INR pricing, Indian support.",
  whatsappTopic: "Alcazar Show Pattaya tickets",
  audience: "Perfect for Families & Couples",
  companionIntro: "Alcazar is Pattaya's most famous cabaret and is completely family friendly. Here is what Indian travellers should know about seats, timings and transfers.",
  ctaHeadline: "Book Your Alcazar Cabaret Show Tickets",
};

const AlcazarShowPattaya = () => {
  const base = toursData["alcazar-show-pattaya"];
  if (!base) return null;
  const sheet = pattayaSheetContent["alcazar-show-pattaya"];
  const tourData = {
    ...base,
    faqs: alcazarShowPattayaFaqs,
    description: { ...base.description, whatToExpect: sheet.whatToExpect },
    ...(sheet.inclusions.length ? { inclusions: sheet.inclusions } : {}),
  };
  return <ThaiCityActivityTemplate tourData={tourData} config={config} contentAfterOverview={<PattayaTourItinerary tourKey="alcazar-show-pattaya" />} extraContentBeforeReviews={<AlcazarShowPattayaSEO />} />;
};

export default AlcazarShowPattaya;
