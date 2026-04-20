import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import { PattayaDolphinariumSEO } from "@/components/activity-detail/PattayaActivitySEO";
import { pattayaDolphinariumFaqs } from "@/data/pattayaActivityFaqs";

const PattayaDolphinarium = () => {
  const tourData = { ...toursData["pattaya-dolphinarium"], faqs: pattayaDolphinariumFaqs };
  return <TourBooking tourData={tourData} extraContentBeforeReviews={<PattayaDolphinariumSEO />} />;
};

export default PattayaDolphinarium;
