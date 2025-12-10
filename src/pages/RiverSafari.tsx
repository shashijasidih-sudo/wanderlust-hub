import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const RiverSafari = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["river-safari"];

  return <TourBooking tourData={tourData} />;
};

export default RiverSafari;