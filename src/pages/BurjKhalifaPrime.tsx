import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const BurjKhalifaPrime = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["burj-khalifa-prime"];

  return <TourBooking tourData={tourData} />;
};

export default BurjKhalifaPrime;
