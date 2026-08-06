import ThaiCityActivityTemplate, { ThaiActivityConfig } from "@/components/activity-detail/ThaiCityActivityTemplate";
import { toursData } from "@/data/tourData";
import { chiangMaiDoiInthanonFaqs } from "@/data/chiangMaiActivityFaqs";
import doiInthanon from "@/assets/chiang-mai-doi-inthanon-1.webp";
import cityImg from "@/assets/city-chiang-mai.webp";
import doiSuthep from "@/assets/chiang-mai-doi-suthep-1.webp";
import vanImg from "@/assets/chiang-mai-transfer-van-1.webp";

const config: ThaiActivityConfig = {
  path: "/thailand/chiang-mai/doi-inthanon-national-park-full-day-tour/",
  city: "chiang-mai",
  area: "mountain",
  seoTitle: "Doi Inthanon National Park Full Day Tour from Chiang Mai | Yellodae",
  seoDescription: "Book the Doi Inthanon full day tour from Chiang Mai — Thailand's highest peak, royal twin pagodas, waterfalls and Karen village with transfers and INR pricing.",
  whatsappTopic: "the Doi Inthanon National Park full day tour",
  audience: "Perfect for Families & Nature Lovers",
  companionIntro:
    "Doi Inthanon is Thailand's highest peak and noticeably colder than Chiang Mai city. Here is the Indian traveller guide to layers, fees, walking and food.",
  ctaHeadline: "Book Your Doi Inthanon Full Day Tour",
  tips: [
    "Carry a jacket — the summit can drop below 10°C even in the day.",
    "National park entry fees are usually paid on site in baht cash.",
    "The nature trail is easy but involves 30–45 minutes of walking.",
    "Waterfall viewpoints get slippery — wear grippy shoes.",
  ],
};

const ChiangMaiDoiInthanon = () => {
  const tourData = {
    ...toursData["chiang-mai-doi-inthanon-national-park-full-day-tour"],
    heroImages: [
      { src: doiInthanon, title: "Doi Inthanon Royal Twin Pagodas" },
      { src: cityImg, title: "Northern Thailand Highlands" },
      { src: doiSuthep, title: "Chiang Mai Temples" },
      { src: vanImg, title: "Comfortable Join Tour Transfers" },
    ],
    galleryImages: [
      { src: doiInthanon, alt: "Doi Inthanon national park pagodas" },
      { src: cityImg, alt: "Chiang Mai highlands" },
      { src: doiSuthep, alt: "Northern Thai temple" },
    ],
    faqs: chiangMaiDoiInthanonFaqs,
  };
  return <ThaiCityActivityTemplate tourData={tourData} config={config} />;
};

export default ChiangMaiDoiInthanon;
