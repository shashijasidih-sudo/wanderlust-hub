import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const AbuDhabiFerrariWorld = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["abu-dhabi-ferrari-world"];

  return <TourBooking tourData={tourData} />;
};

export default AbuDhabiFerrariWorld;
