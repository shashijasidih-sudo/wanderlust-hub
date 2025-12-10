import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const SentosaWingsTime = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["sentosa-wings-time"];

  return <TourBooking tourData={tourData} />;
};

export default SentosaWingsTime;