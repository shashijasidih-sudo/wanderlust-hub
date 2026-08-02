import DubaiActivityTemplate, { DubaiActivityConfig } from "@/components/activity-detail/DubaiActivityTemplate";
import { toursData } from "@/data/tourData";
import { abuDhabiCityTourFaqs } from "@/data/dubaiActivityFaqs";

const config: DubaiActivityConfig = {
  path: "/dubai/abu-dhabi-city-tour/",
  area: "abu-dhabi",
  seoTitle: "Abu Dhabi City Tour from Dubai with Transfers | Yellodae",
  seoDescription: "Book the Abu Dhabi day tour from Dubai covering Sheikh Zayed Grand Mosque, Corniche and Emirates Palace. Hotel transfers, INR pricing, Indian support.",
  whatsappTopic: "the Abu Dhabi city tour from Dubai",
  audience: "Perfect for Families & Couples",
  companionIntro: "A full-day trip from Dubai to Abu Dhabi's landmarks. Here is the Indian traveller guide to the mosque dress code, timings and meals.",
  ctaHeadline: "Book Your Abu Dhabi City Tour",
};

const AbuDhabiCityTour = () => {
  const tourData = { ...toursData["abu-dhabi-city-tour"], faqs: abuDhabiCityTourFaqs };
  return <DubaiActivityTemplate tourData={tourData} config={config} />;
};

export default AbuDhabiCityTour;
