import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import { AlcazarShowPattayaSEO } from "@/components/activity-detail/PattayaActivitySEO";
import { alcazarShowPattayaFaqs } from "@/data/pattayaActivityFaqs";

const AlcazarShowPattaya = () => {
  const tourData = { ...toursData["alcazar-show-pattaya"], faqs: alcazarShowPattayaFaqs };
  return <TourBooking tourData={tourData} extraContentBeforeReviews={<AlcazarShowPattayaSEO />} />;
};

export default AlcazarShowPattaya;
