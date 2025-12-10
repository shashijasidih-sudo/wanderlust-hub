import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const BigBusDiscover = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["big-bus-discover"];

  return <TourBooking tourData={tourData} />;
};

export default BigBusDiscover;