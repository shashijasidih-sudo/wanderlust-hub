import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const BangkokBkkAirportDropoffSuv = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["bangkok-bkk-airport-dropoff-suv"];

  return <TourBooking tourData={tourData} />;
};

export default BangkokBkkAirportDropoffSuv;
