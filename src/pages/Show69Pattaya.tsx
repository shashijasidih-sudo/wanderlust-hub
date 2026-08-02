import ThaiCityActivityTemplate, { ThaiActivityConfig } from "@/components/activity-detail/ThaiCityActivityTemplate";
import { toursData } from "@/data/tourData";
import { adultShowPattayaFaqs } from "@/data/pattayaActivityFaqs";

const config: ThaiActivityConfig = {
  path: "/thailand/pattaya/69-show-pattaya-with-transfer/",
  city: "pattaya",
  area: "show",
  seoTitle: "69 Show Pattaya Tickets with Transfer | Yellodae",
  seoDescription: "Book 69 Show Pattaya adult cabaret tickets with round-trip hotel transfers. 18+ only, instant confirmation, INR pricing and Indian traveller support.",
  whatsappTopic: "69 Show Pattaya tickets",
  audience: "Adults Only (18+)",
  companionIntro: "This is an adults-only (18+) Pattaya show. Here is the practical Indian traveller guide to timings, dress code, transfers and etiquette.",
  ctaHeadline: "Book Your 69 Show Pattaya Tickets",
};

const Show69Pattaya = () => {
  const tourData = { ...toursData["show-69-pattaya"], faqs: adultShowPattayaFaqs("69 Show Pattaya") };
  return <ThaiCityActivityTemplate tourData={tourData} config={config} />;
};

export default Show69Pattaya;
