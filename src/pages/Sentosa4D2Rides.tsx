import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const Sentosa4D2Rides = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["sentosa-4d-2rides"];

  return <TourBooking tourData={tourData} />;
};

export default Sentosa4D2Rides;