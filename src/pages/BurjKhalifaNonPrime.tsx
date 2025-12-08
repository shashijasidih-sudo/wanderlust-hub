import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const BurjKhalifaNonPrime = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["burj-khalifa-non-prime"];

  return <TourBooking tourData={tourData} />;
};

export default BurjKhalifaNonPrime;
