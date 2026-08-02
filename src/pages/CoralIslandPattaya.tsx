import ThaiCityActivityTemplate, { ThaiActivityConfig } from "@/components/activity-detail/ThaiCityActivityTemplate";
import { toursData } from "@/data/tourData";
import { CoralIslandPattayaSEO } from "@/components/activity-detail/PattayaActivitySEO";
import { coralIslandPattayaFaqs } from "@/data/pattayaActivityFaqs";

const config: ThaiActivityConfig = {
  path: "/thailand/pattaya/coral-island-tour-with-transfer-and-indian-lunch/",
  city: "pattaya",
  area: "island",
  seoTitle: "Coral Island Pattaya Tour with Indian Lunch & Transfer | Yellodae",
  seoDescription: "Book Coral Island (Koh Larn) Pattaya speedboat tour with Indian lunch and hotel transfers. Water sports add-ons, instant confirmation and INR pricing.",
  whatsappTopic: "the Coral Island Pattaya tour with Indian lunch",
  audience: "Perfect for Families & Couples",
  companionIntro: "Coral Island is Pattaya's most booked day trip. Here is what Indian families should carry, eat and expect on the speedboat and at Koh Larn.",
  ctaHeadline: "Book Your Coral Island Day Trip",
};

const CoralIslandPattaya = () => {
  const tourData = { ...toursData["coral-island-pattaya"], faqs: coralIslandPattayaFaqs };
  return <ThaiCityActivityTemplate tourData={tourData} config={config} extraContentBeforeReviews={<CoralIslandPattayaSEO />} />;
};

export default CoralIslandPattaya;
