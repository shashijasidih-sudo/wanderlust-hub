import DubaiActivityTemplate, { DubaiActivityConfig } from "@/components/activity-detail/DubaiActivityTemplate";
import { toursData } from "@/data/tourData";
import { dubaiDolphinShowFaqs } from "@/data/dubaiActivityFaqs";

const config: DubaiActivityConfig = {
  path: "/dubai/dolphin-show/",
  area: "creek",
  seoTitle: "Dubai Dolphin & Seal Show Tickets with Transfer | Yellodae",
  seoDescription: "Book Dubai Dolphinarium dolphin and seal show tickets with hotel transfers at Creek Park. Great for kids, instant confirmation and INR pricing.",
  whatsappTopic: "Dubai Dolphin and Seal Show tickets",
  audience: "Perfect for Families & Kids",
  companionIntro: "An indoor air-conditioned dolphin and seal show at Creek Park. Here is what Indian families should know before booking.",
  ctaHeadline: "Book Your Dubai Dolphin Show Tickets",
};

const DubaiDolphinShow = () => {
  const tourData = { ...toursData["dubai-dolphin-show"], faqs: dubaiDolphinShowFaqs };
  return <DubaiActivityTemplate tourData={tourData} config={config} />;
};

export default DubaiDolphinShow;
