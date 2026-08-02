import DubaiActivityTemplate, { DubaiActivityConfig } from "@/components/activity-detail/DubaiActivityTemplate";
import { toursData } from "@/data/tourData";
import { desertSafariFaqs } from "@/data/dubaiActivityFaqs";

const config: DubaiActivityConfig = {
  path: "/dubai/desert-safari-sharing/",
  area: "desert",
  seoTitle: "Dubai Desert Safari with Sharing Transfer & BBQ | Yellodae",
  seoDescription: "Book Dubai desert safari with sharing hotel transfers, dune bashing, camel rides, tanoura show and BBQ dinner. Instant confirmation and INR pricing.",
  whatsappTopic: "the Dubai desert safari with sharing transfer",
  audience: "Perfect for Families & Couples",
  companionIntro: "Dubai's classic evening desert safari with sharing hotel transfers. Here is the practical Indian traveller guide to timings, food and what to carry.",
  ctaHeadline: "Book Your Dubai Desert Safari",
};

const DesertSafariSharing = () => {
  const tourData = { ...toursData["desert-safari-sharing"], faqs: desertSafariFaqs };
  return <DubaiActivityTemplate tourData={tourData} config={config} />;
};

export default DesertSafariSharing;
