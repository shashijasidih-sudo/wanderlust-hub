import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const DhowCruiseMarinaUpper = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["dhow-cruise-marina-upper"];

  return <TourBooking tourData={tourData} />;
};

export default DhowCruiseMarinaUpper;
