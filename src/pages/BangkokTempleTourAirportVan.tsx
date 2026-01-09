import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const BangkokTempleTourAirportVan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["bangkok-temple-tour-airport-van"];

  return <TourBooking tourData={tourData} />;
};

export default BangkokTempleTourAirportVan;
