import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const DubaiAirportPickupZone2_7Seater = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["dubai-airport-pickup-zone2-7-seater"];

  return <TourBooking tourData={tourData} />;
};

export default DubaiAirportPickupZone2_7Seater;
