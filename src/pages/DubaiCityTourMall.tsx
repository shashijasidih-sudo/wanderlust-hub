import DubaiActivityTemplate, { DubaiActivityConfig } from "@/components/activity-detail/DubaiActivityTemplate";
import { toursData } from "@/data/tourData";
import { dubaiMallCityTourFaqs } from "@/data/dubaiActivityFaqs";

const config: DubaiActivityConfig = {
  path: "/dubai/city-tour-mall/",
  area: "downtown",
  seoTitle: "Dubai City Tour with Dubai Mall & Transfers | Yellodae",
  seoDescription: "Book the Dubai city tour with Dubai Mall free time and the evening fountain show. Hotel transfers, instant confirmation, INR pricing and Indian support.",
  whatsappTopic: "the Dubai city tour with Dubai Mall",
  audience: "Perfect for Families & Couples",
  companionIntro: "A guided city tour that ends with free time at Dubai Mall and the fountain show. Here is the Indian traveller guide to timings and shopping.",
  ctaHeadline: "Book Your Dubai City Tour with Dubai Mall",
};

const DubaiCityTourMall = () => {
  const tourData = { ...toursData["dubai-city-tour-mall"], faqs: dubaiMallCityTourFaqs };
  return <DubaiActivityTemplate tourData={tourData} config={config} />;
};

export default DubaiCityTourMall;
