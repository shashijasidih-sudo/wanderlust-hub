import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const DhowCruiseMarinaLower = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["dhow-cruise-marina-lower"];

  return <TourBooking tourData={tourData} />;
};

export default DhowCruiseMarinaLower;
