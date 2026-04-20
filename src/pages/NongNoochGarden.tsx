import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import { NongNoochGardenSEO } from "@/components/activity-detail/PattayaActivitySEO";
import { nongNoochGardenFaqs } from "@/data/pattayaActivityFaqs";

const NongNoochGarden = () => {
  const tourData = { ...toursData["nong-nooch-garden"], faqs: nongNoochGardenFaqs };
  return <TourBooking tourData={tourData} extraContentBeforeReviews={<NongNoochGardenSEO />} />;
};

export default NongNoochGarden;
