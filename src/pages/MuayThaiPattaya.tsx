import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import { MuayThaiPattayaSEO } from "@/components/activity-detail/PattayaActivitySEO";
import { muayThaiPattayaFaqs } from "@/data/pattayaActivityFaqs";

const MuayThaiPattaya = () => {
  const tourData = { ...toursData["muay-thai-pattaya"], faqs: muayThaiPattayaFaqs };
  return <TourBooking tourData={tourData} extraContentBeforeReviews={<MuayThaiPattayaSEO />} />;
};

export default MuayThaiPattaya;
