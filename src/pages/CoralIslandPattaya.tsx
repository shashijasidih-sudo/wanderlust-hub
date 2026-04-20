import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import { CoralIslandPattayaSEO } from "@/components/activity-detail/PattayaActivitySEO";
import { coralIslandPattayaFaqs } from "@/data/pattayaActivityFaqs";

const CoralIslandPattaya = () => {
  const tourData = { ...toursData["coral-island-pattaya"], faqs: coralIslandPattayaFaqs };
  return <TourBooking tourData={tourData} extraContentBeforeReviews={<CoralIslandPattayaSEO />} />;
};

export default CoralIslandPattaya;
