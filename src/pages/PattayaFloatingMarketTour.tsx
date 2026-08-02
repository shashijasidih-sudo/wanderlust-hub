import ThaiCityActivityTemplate, { ThaiActivityConfig } from "@/components/activity-detail/ThaiCityActivityTemplate";
import { toursData } from "@/data/tourData";
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
  const tourData = { ...toursData["pattaya-floating-market-tour"], faqs: pattayaFloatingMarketFaqs };
  return <ThaiCityActivityTemplate tourData={tourData} config={config} extraContentBeforeReviews={<PattayaFloatingMarketSEO />} />;
};

export default PattayaFloatingMarketTour;
