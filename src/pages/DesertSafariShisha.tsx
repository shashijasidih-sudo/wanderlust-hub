import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const DesertSafariShisha = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["desert-safari-shisha"];

  return <TourBooking tourData={tourData} />;
};

export default DesertSafariShisha;
