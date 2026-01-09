import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const BangkokDmkAirportPickupSuv = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["bangkok-dmk-airport-pickup-suv"];

  return <TourBooking tourData={tourData} />;
};

export default BangkokDmkAirportPickupSuv;
