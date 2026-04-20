import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import { PattayaFloatingMarketGuidedSEO } from "@/components/activity-detail/PattayaActivitySEO";
import { pattayaFloatingMarketFaqs } from "@/data/pattayaActivityFaqs";

const PattayaFloatingMarketGuided = () => {
  const tourData = { ...toursData["pattaya-floating-market-guided"], faqs: pattayaFloatingMarketFaqs };
  return <TourBooking tourData={tourData} extraContentBeforeReviews={<PattayaFloatingMarketGuidedSEO />} />;
};

export default PattayaFloatingMarketGuided;
