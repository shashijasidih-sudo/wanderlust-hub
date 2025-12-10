import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const AdventureCove = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["adventure-cove"];

  return <TourBooking tourData={tourData} />;
};

export default AdventureCove;