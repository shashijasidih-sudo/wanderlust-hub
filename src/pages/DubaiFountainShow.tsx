import DubaiActivityTemplate, { DubaiActivityConfig } from "@/components/activity-detail/DubaiActivityTemplate";
import { toursData } from "@/data/tourData";
import { dubaiFountainShowFaqs } from "@/data/dubaiActivityFaqs";

const config: DubaiActivityConfig = {
  path: "/dubai/fountain-show/",
  area: "downtown",
  seoTitle: "Dubai Fountain Show with Lake Ride Tickets | Yellodae",
  seoDescription: "Book Dubai Fountain show tickets with the Burj Lake abra ride for the closest view. Instant confirmation, INR pricing and Indian traveller support.",
  whatsappTopic: "Dubai Fountain show and lake ride tickets",
  audience: "Perfect for Families & Couples",
  companionIntro: "The lake ride puts you right beside the fountain jets. Here is what Indian travellers should know about show timings and the best spots.",
  ctaHeadline: "Book Your Dubai Fountain Lake Ride",
};

const DubaiFountainShow = () => {
  const tourData = { ...toursData["dubai-fountain-show"], faqs: dubaiFountainShowFaqs };
  return <DubaiActivityTemplate tourData={tourData} config={config} />;
};

export default DubaiFountainShow;
