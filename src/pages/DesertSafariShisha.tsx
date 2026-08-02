import DubaiActivityTemplate, { DubaiActivityConfig } from "@/components/activity-detail/DubaiActivityTemplate";
import { toursData } from "@/data/tourData";
import { desertSafariFaqs } from "@/data/dubaiActivityFaqs";

const config: DubaiActivityConfig = {
  path: "/dubai/desert-safari-shisha/",
  area: "desert",
  seoTitle: "Dubai Desert Safari with Shisha & BBQ Dinner | Yellodae",
  seoDescription: "Book Dubai desert safari with shisha, dune bashing, camel ride, live shows and BBQ dinner. Sharing hotel transfers, INR pricing and Indian support.",
  whatsappTopic: "the Dubai desert safari with shisha",
  audience: "Perfect for Families & Couples",
  companionIntro: "An evening desert safari with dune bashing, a Bedouin camp and shisha on the table. Here is what Indian travellers should know before booking.",
  ctaHeadline: "Book Your Dubai Desert Safari with Shisha",
};

const DesertSafariShisha = () => {
  const tourData = { ...toursData["desert-safari-shisha"], faqs: desertSafariFaqs };
  return <DubaiActivityTemplate tourData={tourData} config={config} />;
};

export default DesertSafariShisha;
