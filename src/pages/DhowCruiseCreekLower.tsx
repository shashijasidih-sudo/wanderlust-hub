import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const DhowCruiseCreekLower = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["dhow-cruise-creek-lower"];

  return <TourBooking tourData={tourData} />;
};

export default DhowCruiseCreekLower;
