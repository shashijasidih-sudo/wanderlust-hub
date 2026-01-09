import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const BangkokBkkAirportDropoffVan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["bangkok-bkk-airport-dropoff-van"];

  return <TourBooking tourData={tourData} />;
};

export default BangkokBkkAirportDropoffVan;
