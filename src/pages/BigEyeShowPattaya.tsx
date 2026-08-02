import ThaiCityActivityTemplate, { ThaiActivityConfig } from "@/components/activity-detail/ThaiCityActivityTemplate";
import { toursData } from "@/data/tourData";
import { adultShowPattayaFaqs } from "@/data/pattayaActivityFaqs";

const config: ThaiActivityConfig = {
  path: "/thailand/pattaya/99-show-pattaya-big-eye-with-transfer/",
  city: "pattaya",
  area: "show",
  seoTitle: "Big Eye 99 Show Pattaya Tickets with Transfer | Yellodae",
  seoDescription: "Book Big Eye 99 Show Pattaya adult cabaret tickets with hotel transfers. 18+ only, instant confirmation, INR pricing and Indian traveller support.",
  whatsappTopic: "Big Eye 99 Show Pattaya tickets",
  audience: "Adults Only (18+)",
  companionIntro: "This is an adults-only (18+) Pattaya show. Here is the practical Indian traveller guide to timings, dress code, transfers and etiquette.",
  ctaHeadline: "Book Your Big Eye 99 Show Tickets",
};

const BigEyeShowPattaya = () => {
  const tourData = { ...toursData["big-eye-show-pattaya"], faqs: adultShowPattayaFaqs("Big Eye 99 Show Pattaya") };
  return <ThaiCityActivityTemplate tourData={tourData} config={config} />;
};

export default BigEyeShowPattaya;
