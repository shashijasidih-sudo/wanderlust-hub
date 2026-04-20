import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import { PattayaFloatingMarketSEO } from "@/components/activity-detail/PattayaActivitySEO";
import { pattayaFloatingMarketFaqs } from "@/data/pattayaActivityFaqs";

const PattayaFloatingMarketTour = () => {
  const tourData = { ...toursData["pattaya-floating-market-tour"], faqs: pattayaFloatingMarketFaqs };
  return <TourBooking tourData={tourData} extraContentBeforeReviews={<PattayaFloatingMarketSEO />} />;
};

export default PattayaFloatingMarketTour;
