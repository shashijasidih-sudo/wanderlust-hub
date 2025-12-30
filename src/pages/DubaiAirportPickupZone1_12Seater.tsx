import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const DubaiAirportPickupZone1_12Seater = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["dubai-airport-pickup-zone1-12-seater"];

  return <TourBooking tourData={tourData} />;
};

export default DubaiAirportPickupZone1_12Seater;
