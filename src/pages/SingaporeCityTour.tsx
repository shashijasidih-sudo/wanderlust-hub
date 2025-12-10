import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const SingaporeCityTour = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["singapore-city-tour"];

  return <TourBooking tourData={tourData} />;
};

export default SingaporeCityTour;