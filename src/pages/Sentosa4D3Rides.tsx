import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import { Sentosa4D3RidesSEO } from "@/components/activity-detail/SingaporeActivitySEO";
import { sentosa4D3RidesFaqs } from "@/data/singaporeActivityFaqs";

const Sentosa4D3Rides = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const tourData = { ...toursData["sentosa-4d-3rides"], faqs: sentosa4D3RidesFaqs };
  return <TourBooking tourData={tourData} extraContentBeforeReviews={<Sentosa4D3RidesSEO />} />;
};

export default Sentosa4D3Rides;
