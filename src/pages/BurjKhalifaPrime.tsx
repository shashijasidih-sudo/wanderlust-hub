import DubaiActivityTemplate, { DubaiActivityConfig } from "@/components/activity-detail/DubaiActivityTemplate";
import { toursData } from "@/data/tourData";
import { burjKhalifaFaqs } from "@/data/dubaiActivityFaqs";

const config: DubaiActivityConfig = {
  path: "/dubai/burj-khalifa-prime/",
  area: "downtown",
  seoTitle: "Burj Khalifa 124th & 125th Floor Prime Hour Tickets | Yellodae",
  seoDescription: "Book Burj Khalifa prime hour (sunset) tickets for the 124th and 125th floors. Timed slots, instant confirmation, INR pricing and Indian traveller support.",
  whatsappTopic: "Burj Khalifa prime hour tickets",
  audience: "Perfect for Families & Couples",
  companionIntro: "Prime hours cover the sunset window — the most photogenic slot at Burj Khalifa. Here is what Indian travellers should plan for.",
  ctaHeadline: "Book Your Burj Khalifa Prime Hour Tickets",
};

const BurjKhalifaPrime = () => {
  const tourData = { ...toursData["burj-khalifa-prime"], faqs: burjKhalifaFaqs };
  return <DubaiActivityTemplate tourData={tourData} config={config} />;
};

export default BurjKhalifaPrime;
