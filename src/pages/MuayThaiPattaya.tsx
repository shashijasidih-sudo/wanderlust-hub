import ThaiCityActivityTemplate, { ThaiActivityConfig } from "@/components/activity-detail/ThaiCityActivityTemplate";
import { toursData } from "@/data/tourData";
import { MuayThaiPattayaSEO } from "@/components/activity-detail/PattayaActivitySEO";
import { muayThaiPattayaFaqs } from "@/data/pattayaActivityFaqs";

const config: ThaiActivityConfig = {
  path: "/thailand/pattaya/muay-thai-boxing-show-pattaya/",
  city: "pattaya",
  area: "show",
  seoTitle: "Muay Thai Pattaya Boxing Show Tickets with Transfer | Yellodae",
  seoDescription: "Book Muay Thai Pattaya live boxing show tickets with hotel transfers. Ringside seats, instant confirmation, INR pricing and Indian traveller support.",
  whatsappTopic: "Muay Thai Pattaya show tickets",
  audience: "Perfect for Families & Couples",
  companionIntro: "Watching Muay Thai live in Pattaya? Here is the Indian traveller guide to seating, timings, transfers and food near the stadium.",
  ctaHeadline: "Book Your Muay Thai Pattaya Tickets",
};

const MuayThaiPattaya = () => {
  const tourData = { ...toursData["muay-thai-pattaya"], faqs: muayThaiPattayaFaqs };
  return <ThaiCityActivityTemplate tourData={tourData} config={config} extraContentBeforeReviews={<MuayThaiPattayaSEO />} />;
};

export default MuayThaiPattaya;
