import DubaiActivityTemplate, { DubaiActivityConfig } from "@/components/activity-detail/DubaiActivityTemplate";
import { toursData } from "@/data/tourData";
import { dhowCruiseFaqs } from "@/data/dubaiActivityFaqs";

const config: DubaiActivityConfig = {
  path: "/dubai/dhow-cruise-creek-lower-deck/",
  area: "creek",
  seoTitle: "Dhow Creek Cruise Dinner Lower Deck with Transfers | Yellodae",
  seoDescription: "Book Dubai Creek dhow dinner cruise lower deck with air-conditioned seating, buffet dinner and hotel transfers. INR pricing and Indian support.",
  whatsappTopic: "the Dubai Creek dhow cruise lower deck",
  audience: "Perfect for Families & Couples",
  companionIntro: "An air-conditioned lower-deck dinner cruise along historic Dubai Creek. Here is what Indian travellers should know about food, timings and transfers.",
  ctaHeadline: "Book Your Dubai Creek Dhow Cruise",
};

const DhowCruiseCreekLower = () => {
  const tourData = { ...toursData["dhow-cruise-creek-lower"], faqs: dhowCruiseFaqs };
  return <DubaiActivityTemplate tourData={tourData} config={config} />;
};

export default DhowCruiseCreekLower;
