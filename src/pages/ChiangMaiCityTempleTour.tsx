import ThaiCityActivityTemplate, { ThaiActivityConfig } from "@/components/activity-detail/ThaiCityActivityTemplate";
import { toursData } from "@/data/tourData";
import { chiangMaiCityTempleTourFaqs } from "@/data/chiangMaiActivityFaqs";
import doiSuthep from "@/assets/chiang-mai-doi-suthep-1.jpg";
import chediLuang from "@/assets/chiang-mai-wat-chedi-luang-1.jpg";
import cityImg from "@/assets/city-chiang-mai.jpg";
import vanImg from "@/assets/chiang-mai-transfer-van-1.jpg";

const config: ThaiActivityConfig = {
  path: "/thailand/chiang-mai/city-temple-tour-doi-suthep-chedi-luang-pha-lat-with-transfer/",
  city: "chiang-mai",
  area: "city",
  seoTitle: "Chiang Mai City Temple Tour: Doi Suthep, Chedi Luang & Pha Lat | Yellodae",
  seoDescription: "Book the Chiang Mai temple tour covering Doi Suthep, Wat Chedi Luang and Wat Pha Lat with hotel transfers. Instant confirmation, INR pricing, Indian support.",
  whatsappTopic: "the Chiang Mai city temple tour with transfers",
  audience: "Perfect for Families & Couples",
  companionIntro:
    "Three of Chiang Mai's most important temples in one guided half day. Here is the Indian traveller guide to dress code, steps, fees and food nearby.",
  ctaHeadline: "Book Your Chiang Mai Temple Tour",
  tips: [
    "Doi Suthep has 306 steps — a cable car is available for a small extra fee.",
    "Carry a scarf or sarong; shoulders and knees must be covered at all three temples.",
    "Temple entry fees are usually paid on site in Thai baht cash.",
    "Mornings are cooler and far less crowded than afternoons.",
  ],
};

const ChiangMaiCityTempleTour = () => {
  const tourData = {
    ...toursData["chiang-mai-city-temple-tour-doi-suthep-chedi-luang-pha-lat-with-transfer"],
    heroImages: [
      { src: doiSuthep, title: "Wat Phra That Doi Suthep" },
      { src: chediLuang, title: "Wat Chedi Luang" },
      { src: cityImg, title: "Chiang Mai Old City" },
      { src: vanImg, title: "Private Hotel Transfers" },
    ],
    galleryImages: [
      { src: doiSuthep, alt: "Doi Suthep golden temple" },
      { src: chediLuang, alt: "Wat Chedi Luang ancient brick chedi" },
      { src: cityImg, alt: "Chiang Mai cityscape" },
    ],
    faqs: chiangMaiCityTempleTourFaqs,
  };
  return <ThaiCityActivityTemplate tourData={tourData} config={config} />;
};

export default ChiangMaiCityTempleTour;
