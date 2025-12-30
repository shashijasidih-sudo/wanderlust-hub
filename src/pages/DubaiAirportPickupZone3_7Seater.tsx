import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const DubaiAirportPickupZone3_7Seater = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["dubai-airport-pickup-zone3-7-seater"];

  return <TourBooking tourData={tourData} />;
};

export default DubaiAirportPickupZone3_7Seater;
