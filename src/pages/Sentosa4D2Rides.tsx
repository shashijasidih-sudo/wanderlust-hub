import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import { Sentosa4D2RidesSEO } from "@/components/activity-detail/SingaporeActivitySEO";
import { sentosa4D2RidesFaqs } from "@/data/singaporeActivityFaqs";

const Sentosa4D2Rides = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const tourData = { ...toursData["sentosa-4d-2rides"], faqs: sentosa4D2RidesFaqs };
  return <TourBooking tourData={tourData} extraContentBeforeReviews={<Sentosa4D2RidesSEO />} />;
};

export default Sentosa4D2Rides;
