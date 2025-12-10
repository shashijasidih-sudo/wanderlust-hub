import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const UniversalStudiosWeekend = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["universal-studios-weekend"];

  return <TourBooking tourData={tourData} />;
};

export default UniversalStudiosWeekend;