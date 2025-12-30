import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const SingaporeAirportNightPickup5 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["singapore-airport-night-pickup-5-seater"];

  return <TourBooking tourData={tourData} />;
};

export default SingaporeAirportNightPickup5;