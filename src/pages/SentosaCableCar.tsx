import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const SentosaCableCar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["sentosa-cable-car"];

  return <TourBooking tourData={tourData} />;
};

export default SentosaCableCar;