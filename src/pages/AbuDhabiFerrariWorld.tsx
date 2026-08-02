import DubaiActivityTemplate, { DubaiActivityConfig } from "@/components/activity-detail/DubaiActivityTemplate";
import { toursData } from "@/data/tourData";
import { abuDhabiFerrariWorldFaqs } from "@/data/dubaiActivityFaqs";

const config: DubaiActivityConfig = {
  path: "/dubai/abu-dhabi-ferrari-world/",
  area: "abu-dhabi",
  seoTitle: "Abu Dhabi City Tour + Ferrari World Ticket | Yellodae",
  seoDescription: "Book the Abu Dhabi city tour with Ferrari World Yas Island tickets and hotel transfers from Dubai. Instant confirmation, INR pricing and Indian support.",
  whatsappTopic: "the Abu Dhabi tour with Ferrari World",
  audience: "Perfect for Families & Thrill Seekers",
  companionIntro: "Abu Dhabi sightseeing plus Ferrari World in one day. Here is what Indian travellers should know about ride limits, food and the mosque dress code.",
  ctaHeadline: "Book Your Abu Dhabi + Ferrari World Tour",
};

const AbuDhabiFerrariWorld = () => {
  const tourData = { ...toursData["abu-dhabi-ferrari-world"], faqs: abuDhabiFerrariWorldFaqs };
  return <DubaiActivityTemplate tourData={tourData} config={config} />;
};

export default AbuDhabiFerrariWorld;
