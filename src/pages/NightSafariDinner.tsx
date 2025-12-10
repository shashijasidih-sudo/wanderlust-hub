import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const NightSafariDinner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["night-safari-dinner"];

  return <TourBooking tourData={tourData} />;
};

export default NightSafariDinner;