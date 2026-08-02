import ThaiCityActivityTemplate, { ThaiActivityConfig } from "@/components/activity-detail/ThaiCityActivityTemplate";
import { toursData } from "@/data/tourData";
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
  const tourData = { ...toursData["nong-nooch-garden"], faqs: nongNoochGardenFaqs };
  return <ThaiCityActivityTemplate tourData={tourData} config={config} extraContentBeforeReviews={<NongNoochGardenSEO />} />;
};

export default NongNoochGarden;
