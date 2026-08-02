import DubaiActivityTemplate, { DubaiActivityConfig } from "@/components/activity-detail/DubaiActivityTemplate";
import { toursData } from "@/data/tourData";
import { dhowCruiseFaqs } from "@/data/dubaiActivityFaqs";

const config: DubaiActivityConfig = {
  path: "/dubai/dhow-cruise-marina-lower-deck/",
  area: "marina",
  seoTitle: "Dhow Dinner Cruise Marina Lower Deck with Transfers | Yellodae",
  seoDescription: "Book Dubai Marina dhow dinner cruise lower deck with air-conditioned seating, international buffet and hotel transfers. Instant confirmation, INR pricing.",
  whatsappTopic: "the Dubai Marina dhow cruise lower deck",
  audience: "Perfect for Families & Couples",
  companionIntro: "An air-conditioned lower-deck cruise through the Dubai Marina skyline. Here is what Indian travellers should know before boarding.",
  ctaHeadline: "Book Your Dubai Marina Dhow Cruise",
};

const DhowCruiseMarinaLower = () => {
  const tourData = { ...toursData["dhow-cruise-marina-lower"], faqs: dhowCruiseFaqs };
  return <DubaiActivityTemplate tourData={tourData} config={config} />;
};

export default DhowCruiseMarinaLower;
