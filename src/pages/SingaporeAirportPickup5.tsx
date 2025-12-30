import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const SingaporeAirportPickup5 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["singapore-airport-pickup-5-seater"];

  return <TourBooking tourData={tourData} />;
};

export default SingaporeAirportPickup5;