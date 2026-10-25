import DubaiActivityTemplate, { DubaiActivityConfig } from "@/components/activity-detail/DubaiActivityTemplate";
import { toursData } from "@/data/tourData";
import { burjKhalifaFaqs } from "@/data/dubaiActivityFaqs";

const config: DubaiActivityConfig = {
  path: "/dubai-activities/burj-khalifa-prime/",
  area: "downtown",
  seoTitle: "Burj Khalifa Silver Fast Track Access – Levels 124 & 125 | Yellodae",
  seoDescription: "Book Burj Khalifa Silver Fast Track Access to Levels 124 and 125. Choose ticket-only Fast Track or the separate Prime Hours with Transfers option, with INR pricing.",
  whatsappTopic: "Burj Khalifa Silver Fast Track tickets",
  audience: "Perfect for Families & Couples",
  companionIntro: "Choose Silver Fast Track Access for Levels 124 and 125, or the separate Prime Hours with Transfers option. Here is what Indian travellers should plan for.",
  ctaHeadline: "Book Your Burj Khalifa Silver Fast Track Tickets",
};

const BurjKhalifaPrime = () => {
  const tourData = { ...toursData["burj-khalifa-prime"], faqs: burjKhalifaFaqs };
  return <DubaiActivityTemplate tourData={tourData} config={config} />;
};

export default BurjKhalifaPrime;
