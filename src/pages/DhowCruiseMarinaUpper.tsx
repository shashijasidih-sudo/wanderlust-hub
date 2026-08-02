import DubaiActivityTemplate, { DubaiActivityConfig } from "@/components/activity-detail/DubaiActivityTemplate";
import { toursData } from "@/data/tourData";
import { dhowCruiseFaqs } from "@/data/dubaiActivityFaqs";

const config: DubaiActivityConfig = {
  path: "/dubai/dhow-cruise-marina-upper-deck/",
  area: "marina",
  seoTitle: "Dhow Dinner Cruise Marina Upper Deck with Transfers | Yellodae",
  seoDescription: "Book Dubai Marina dhow dinner cruise upper deck open-air seating with buffet dinner, tanoura show and hotel transfers. INR pricing and Indian support.",
  whatsappTopic: "the Dubai Marina dhow cruise upper deck",
  audience: "Perfect for Families & Couples",
  companionIntro: "An open-air upper-deck cruise with skyscrapers on both sides — the best Marina photos. Here is the Indian traveller guide before you sail.",
  ctaHeadline: "Book Your Dubai Marina Upper Deck Cruise",
};

const DhowCruiseMarinaUpper = () => {
  const tourData = { ...toursData["dhow-cruise-marina-upper"], faqs: dhowCruiseFaqs };
  return <DubaiActivityTemplate tourData={tourData} config={config} />;
};

export default DhowCruiseMarinaUpper;
