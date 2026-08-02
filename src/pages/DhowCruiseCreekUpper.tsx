import DubaiActivityTemplate, { DubaiActivityConfig } from "@/components/activity-detail/DubaiActivityTemplate";
import { toursData } from "@/data/tourData";
import { dhowCruiseFaqs } from "@/data/dubaiActivityFaqs";

const config: DubaiActivityConfig = {
  path: "/dubai/dhow-cruise-creek-upper-deck/",
  area: "creek",
  seoTitle: "Dhow Creek Cruise Dinner Upper Deck with Transfers | Yellodae",
  seoDescription: "Book Dubai Creek dhow dinner cruise upper deck open-air seating with buffet dinner, live shows and hotel transfers. INR pricing and Indian support.",
  whatsappTopic: "the Dubai Creek dhow cruise upper deck",
  audience: "Perfect for Families & Couples",
  companionIntro: "An open-air upper-deck dinner cruise with the best Creek views and photos. Here is the Indian traveller guide to timings, food and dress code.",
  ctaHeadline: "Book Your Dubai Creek Upper Deck Cruise",
};

const DhowCruiseCreekUpper = () => {
  const tourData = { ...toursData["dhow-cruise-creek-upper"], faqs: dhowCruiseFaqs };
  return <DubaiActivityTemplate tourData={tourData} config={config} />;
};

export default DhowCruiseCreekUpper;
