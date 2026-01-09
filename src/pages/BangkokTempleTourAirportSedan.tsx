import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const BangkokTempleTourAirportSedan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["bangkok-temple-tour-airport-sedan"];

  return <TourBooking tourData={tourData} />;
};

export default BangkokTempleTourAirportSedan;
