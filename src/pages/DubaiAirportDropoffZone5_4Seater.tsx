import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const DubaiAirportDropoffZone5_4Seater = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["dubai-airport-dropoff-zone5-4-seater"];

  return <TourBooking tourData={tourData} />;
};

export default DubaiAirportDropoffZone5_4Seater;
