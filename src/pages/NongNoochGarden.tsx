import ThaiCityActivityTemplate, { ThaiActivityConfig } from "@/components/activity-detail/ThaiCityActivityTemplate";
import { toursData } from "@/data/tourData";
import PattayaTourItinerary from "@/components/activity-detail/PattayaTourItinerary";
import { pattayaSheetContent } from "@/data/pattayaSheetContent";
import { NongNoochGardenSEO } from "@/components/activity-detail/PattayaActivitySEO";
import { nongNoochGardenFaqs } from "@/data/pattayaActivityFaqs";

const config: ThaiActivityConfig = {
  path: "/thailand/pattaya/nong-nooch-tropical-garden-tickets/",
  city: "pattaya",
  area: "city",
  seoTitle: "Nong Nooch Tropical Garden Tickets with Show, Lunch & Transfer | Yellodae",
  seoDescription: "Book Nong Nooch Tropical Garden Pattaya tickets with cultural show, lunch and round-trip transfers. Instant confirmation, INR pricing, Indian support.",
  whatsappTopic: "Nong Nooch Tropical Garden tickets",
  audience: "Perfect for Families & Couples",
  companionIntro: "Nong Nooch is a full-day, family-friendly garden park. Here is the Indian traveller guide to shows, lunch, walking distances and transfers.",
  ctaHeadline: "Book Your Nong Nooch Garden Tickets",
};

const NongNoochGarden = () => {
  const base = toursData["nong-nooch-garden"];
  if (!base) return null;
  const sheet = pattayaSheetContent["nong-nooch-garden"];
  const tourData = {
    ...base,
    faqs: nongNoochGardenFaqs,
    description: { ...base.description, whatToExpect: sheet.whatToExpect },
    ...(sheet.inclusions.length ? { inclusions: sheet.inclusions } : {}),
  };
  return <ThaiCityActivityTemplate tourData={tourData} config={config} contentAfterOverview={<PattayaTourItinerary tourKey="nong-nooch-garden" />} extraContentBeforeReviews={<NongNoochGardenSEO />} />;
};

export default NongNoochGarden;
