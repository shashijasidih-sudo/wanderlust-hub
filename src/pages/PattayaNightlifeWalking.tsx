import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import { PattayaNightlifeWalkingSEO } from "@/components/activity-detail/PattayaActivitySEO";
import { lostInNightlightFaqs } from "@/data/pattayaActivityFaqs";

const PattayaNightlifeWalking = () => {
  const tourData = { ...toursData["pattaya-nightlife-walking"], faqs: lostInNightlightFaqs };
  return <TourBooking tourData={tourData} extraContentBeforeReviews={<PattayaNightlifeWalkingSEO />} />;
};

export default PattayaNightlifeWalking;
