import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const BangkokBkkAirportPickupSedan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["bangkok-bkk-airport-pickup-sedan"];

  return <TourBooking tourData={tourData} />;
};

export default BangkokBkkAirportPickupSedan;
