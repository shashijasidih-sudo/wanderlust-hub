import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const DubaiAirportPickupZone4_7Seater = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["dubai-airport-pickup-zone4-7-seater"];

  return <TourBooking tourData={tourData} />;
};

export default DubaiAirportPickupZone4_7Seater;
