import DubaiActivityTemplate, { DubaiActivityConfig } from "@/components/activity-detail/DubaiActivityTemplate";
import { toursData } from "@/data/tourData";
import { miracleGardenFaqs } from "@/data/dubaiActivityFaqs";

const config: DubaiActivityConfig = {
  path: "/dubai/miracle-garden/",
  area: "garden",
  seoTitle: "Dubai Miracle Garden Tickets with Transfer | Yellodae",
  seoDescription: "Book Dubai Miracle Garden entry tickets with hotel transfers. 150 million blooms, Emirates A380 floral display. INR pricing and Indian traveller support.",
  whatsappTopic: "Dubai Miracle Garden tickets",
  audience: "Perfect for Families & Couples",
  companionIntro: "The world's largest natural flower garden — seasonal and highly photogenic. Here is what Indian travellers should know before visiting.",
  ctaHeadline: "Book Your Miracle Garden Tickets",
};

const MiracleGardenDubai = () => {
  const tourData = { ...toursData["miracle-garden-dubai"], faqs: miracleGardenFaqs };
  return <DubaiActivityTemplate tourData={tourData} config={config} />;
};

export default MiracleGardenDubai;
