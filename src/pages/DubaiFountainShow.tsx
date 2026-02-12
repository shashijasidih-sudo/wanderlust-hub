import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const DubaiFountainShow = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["dubai-fountain-show"];

  return <TourBooking tourData={tourData} />;
};

export default DubaiFountainShow;
