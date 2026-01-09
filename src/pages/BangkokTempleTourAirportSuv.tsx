import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const BangkokTempleTourAirportSuv = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["bangkok-temple-tour-airport-suv"];

  return <TourBooking tourData={tourData} />;
};

export default BangkokTempleTourAirportSuv;
