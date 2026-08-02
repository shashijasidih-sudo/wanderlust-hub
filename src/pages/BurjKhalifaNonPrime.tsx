import DubaiActivityTemplate, { DubaiActivityConfig } from "@/components/activity-detail/DubaiActivityTemplate";
import { toursData } from "@/data/tourData";
import { burjKhalifaFaqs } from "@/data/dubaiActivityFaqs";

const config: DubaiActivityConfig = {
  path: "/dubai/burj-khalifa-non-prime/",
  area: "downtown",
  seoTitle: "Burj Khalifa 124th & 125th Floor Non-Prime Tickets | Yellodae",
  seoDescription: "Book Burj Khalifa 124th and 125th floor non-prime hour tickets at the best price. Timed slots, instant confirmation, INR pricing and Indian support.",
  whatsappTopic: "Burj Khalifa non-prime hour tickets",
  audience: "Perfect for Families & Couples",
  companionIntro: "Non-prime slots give the same 124th and 125th floor access for less. Here is the Indian traveller guide to slots, entry and photos.",
  ctaHeadline: "Book Your Burj Khalifa Tickets",
};

const BurjKhalifaNonPrime = () => {
  const tourData = { ...toursData["burj-khalifa-non-prime"], faqs: burjKhalifaFaqs };
  return <DubaiActivityTemplate tourData={tourData} config={config} />;
};

export default BurjKhalifaNonPrime;
