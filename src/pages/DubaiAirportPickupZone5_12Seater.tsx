import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const DubaiAirportPickupZone5_12Seater = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["dubai-airport-pickup-zone5-12-seater"];

  return <TourBooking tourData={tourData} />;
};

export default DubaiAirportPickupZone5_12Seater;
