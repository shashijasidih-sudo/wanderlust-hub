import DubaiActivityTemplate, { DubaiActivityConfig } from "@/components/activity-detail/DubaiActivityTemplate";
import { toursData } from "@/data/tourData";
import { dubaiAquariumFaqs } from "@/data/dubaiActivityFaqs";

const config: DubaiActivityConfig = {
  path: "/dubai/aquarium-penguin/",
  area: "downtown",
  seoTitle: "Dubai Aquarium & Underwater Zoo with Penguin Cove | Yellodae",
  seoDescription: "Book Dubai Aquarium and Underwater Zoo tickets with Penguin Cove inside Dubai Mall. Instant confirmation, INR pricing and Indian traveller support.",
  whatsappTopic: "Dubai Aquarium and Penguin Cove tickets",
  audience: "Perfect for Families & Kids",
  companionIntro: "An indoor, air-conditioned attraction inside Dubai Mall that works well with kids. Here is what Indian families should know before booking.",
  ctaHeadline: "Book Your Dubai Aquarium Tickets",
};

const DubaiAquariumPenguin = () => {
  const tourData = { ...toursData["dubai-aquarium-penguin"], faqs: dubaiAquariumFaqs };
  return <DubaiActivityTemplate tourData={tourData} config={config} />;
};

export default DubaiAquariumPenguin;
