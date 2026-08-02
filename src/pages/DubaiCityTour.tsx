import DubaiActivityTemplate, { DubaiActivityConfig } from "@/components/activity-detail/DubaiActivityTemplate";
import { toursData } from "@/data/tourData";
import { dubaiCityTourFaqs } from "@/data/dubaiActivityFaqs";

const config: DubaiActivityConfig = {
  path: "/dubai/city-tour/",
  area: "creek",
  seoTitle: "Dubai City Tour with Hotel Transfers | Yellodae",
  seoDescription: "Book a guided Dubai city tour covering Burj Al Arab, Dubai Frame, Al Fahidi, Creek abra ride and the souks. Hotel transfers, INR pricing, Indian support.",
  whatsappTopic: "the Dubai city tour",
  audience: "Perfect for Families & Couples",
  companionIntro: "A guided half-day tour across old and new Dubai. Here is what Indian travellers should know about stops, timings and what is included.",
  ctaHeadline: "Book Your Dubai City Tour",
};

const DubaiCityTour = () => {
  const tourData = { ...toursData["dubai-city-tour"], faqs: dubaiCityTourFaqs };
  return <DubaiActivityTemplate tourData={tourData} config={config} />;
};

export default DubaiCityTour;
