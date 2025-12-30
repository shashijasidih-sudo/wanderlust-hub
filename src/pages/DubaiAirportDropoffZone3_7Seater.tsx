import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const DubaiAirportDropoffZone3_7Seater = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["dubai-airport-dropoff-zone3-7-seater"];

  return <TourBooking tourData={tourData} />;
};

export default DubaiAirportDropoffZone3_7Seater;
