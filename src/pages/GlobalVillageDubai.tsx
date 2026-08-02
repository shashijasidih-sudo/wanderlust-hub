import DubaiActivityTemplate, { DubaiActivityConfig } from "@/components/activity-detail/DubaiActivityTemplate";
import { toursData } from "@/data/tourData";
import { globalVillageFaqs } from "@/data/dubaiActivityFaqs";

const config: DubaiActivityConfig = {
  path: "/dubai/global-village/",
  area: "garden",
  seoTitle: "Global Village Dubai Tickets with Transfer | Yellodae",
  seoDescription: "Book Global Village Dubai entry tickets with hotel transfers. 90+ pavilions, street food, shows and fireworks. INR pricing and Indian traveller support.",
  whatsappTopic: "Global Village Dubai tickets",
  audience: "Perfect for Families & Groups",
  companionIntro: "Global Village is Dubai's biggest seasonal cultural festival park. Here is what Indian families should know about season dates, food and shopping.",
  ctaHeadline: "Book Your Global Village Tickets",
};

const GlobalVillageDubai = () => {
  const tourData = { ...toursData["global-village-dubai"], faqs: globalVillageFaqs };
  return <DubaiActivityTemplate tourData={tourData} config={config} />;
};

export default GlobalVillageDubai;
