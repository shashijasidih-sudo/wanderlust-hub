import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const DubaiAirportPickupZone5_4Seater = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["dubai-airport-pickup-zone5-4-seater"];

  return <TourBooking tourData={tourData} />;
};

export default DubaiAirportPickupZone5_4Seater;
