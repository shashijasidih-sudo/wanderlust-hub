import ThaiCityActivityTemplate, { ThaiActivityConfig } from "@/components/activity-detail/ThaiCityActivityTemplate";
import { toursData } from "@/data/tourData";
import { chiangMaiChiangRaiGoldenTriangleFaqs } from "@/data/chiangMaiActivityFaqs";
import goldenTriangle from "@/assets/chiang-mai-chiang-rai-golden-triangle-1.jpg";
import cityImg from "@/assets/city-chiang-mai.jpg";
import doiSuthep from "@/assets/chiang-mai-doi-suthep-1.jpg";
import vanImg from "@/assets/chiang-mai-transfer-van-1.jpg";

const config: ThaiActivityConfig = {
  path: "/thailand/chiang-mai/chiang-rai-golden-triangle-long-neck-tribe-day-trip/",
  city: "chiang-mai",
  area: "daytrip",
  seoTitle: "Chiang Rai Day Trip: White Temple, Golden Triangle & Long Neck Tribe | Yellodae",
  seoDescription: "Book the Chiang Rai day trip from Chiang Mai — White Temple, Blue Temple, Golden Triangle and Long Neck village with transfers. Instant confirmation, INR pricing.",
  whatsappTopic: "the Chiang Rai Golden Triangle day trip from Chiang Mai",
  audience: "Perfect for Families & Couples",
  companionIntro:
    "A long but rewarding full-day trip from Chiang Mai. Here is the Indian traveller guide to timings, food stops, dress code and what is included.",
  ctaHeadline: "Book Your Chiang Rai Golden Triangle Day Trip",
  tips: [
    "Pickup is around 6:30 AM and return is late evening — plan a light day after.",
    "The White Temple has a strict dress code; cover shoulders and knees.",
    "Carry baht cash for the Long Neck village entry and snacks en route.",
    "Ask for permission before photographing villagers.",
  ],
};

const ChiangMaiChiangRaiGoldenTriangle = () => {
  const tourData = {
    ...toursData["chiang-mai-chiang-rai-golden-triangle-long-neck-tribe-day-trip"],
    heroImages: [
      { src: goldenTriangle, title: "Golden Triangle Viewpoint" },
      { src: cityImg, title: "Chiang Rai & Chiang Mai" },
      { src: doiSuthep, title: "Northern Thailand Temples" },
      { src: vanImg, title: "Comfortable Join Tour Transfers" },
    ],
    galleryImages: [
      { src: goldenTriangle, alt: "Golden Triangle where Thailand, Laos and Myanmar meet" },
      { src: cityImg, alt: "Northern Thailand landscape" },
      { src: doiSuthep, alt: "Northern Thai temple" },
    ],
    faqs: chiangMaiChiangRaiGoldenTriangleFaqs,
  };
  return <ThaiCityActivityTemplate tourData={tourData} config={config} />;
};

export default ChiangMaiChiangRaiGoldenTriangle;
