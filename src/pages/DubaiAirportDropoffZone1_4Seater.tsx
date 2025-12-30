import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const DubaiAirportDropoffZone1_4Seater = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["dubai-airport-dropoff-zone1-4-seater"];

  return <TourBooking tourData={tourData} />;
};

export default DubaiAirportDropoffZone1_4Seater;
