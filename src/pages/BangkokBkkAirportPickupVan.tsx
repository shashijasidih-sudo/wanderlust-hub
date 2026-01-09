import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const BangkokBkkAirportPickupVan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["bangkok-bkk-airport-pickup-van"];

  return <TourBooking tourData={tourData} />;
};

export default BangkokBkkAirportPickupVan;
