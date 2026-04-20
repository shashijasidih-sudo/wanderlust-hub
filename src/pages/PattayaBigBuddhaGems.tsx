import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import { PattayaBigBuddhaGemsSEO } from "@/components/activity-detail/PattayaActivitySEO";
import { pattayaBigBuddhaGemsFaqs } from "@/data/pattayaActivityFaqs";

const PattayaBigBuddhaGems = () => {
  const tourData = { ...toursData["pattaya-big-buddha-gems"], faqs: pattayaBigBuddhaGemsFaqs };
  return <TourBooking tourData={tourData} extraContentBeforeReviews={<PattayaBigBuddhaGemsSEO />} />;
};

export default PattayaBigBuddhaGems;
