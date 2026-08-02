import ThaiCityActivityTemplate, { ThaiActivityConfig } from "@/components/activity-detail/ThaiCityActivityTemplate";
import { toursData } from "@/data/tourData";

const config: ThaiActivityConfig = {
  path: "/thailand/pattaya/79-show-pattaya-with-transfer/",
  city: "pattaya",
  area: "show",
  seoTitle: "Imagine 79 Show Pattaya Tickets with Transfer | Yellodae",
  seoDescription: "Book Imagine 79 Show Pattaya adult cabaret tickets with hotel transfers. 18+ only, instant confirmation, INR pricing and Indian traveller support.",
  whatsappTopic: "Imagine 79 Show Pattaya tickets",
  audience: "Adults Only (18+)",
  companionIntro: "This is an adults-only (18+) Pattaya show. Here is the practical Indian traveller guide to timings, dress code, transfers and etiquette.",
  ctaHeadline: "Book Your Imagine 79 Show Tickets",
};

const Imagine79Show = () => {
  const tourData = toursData["imagine79-show-pattaya"];
  return <ThaiCityActivityTemplate tourData={tourData} config={config} />;
};

export default Imagine79Show;
