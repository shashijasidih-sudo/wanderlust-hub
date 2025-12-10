import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const RainforestWildAsia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["rainforest-wild-asia"];

  return <TourBooking tourData={tourData} />;
};

export default RainforestWildAsia;