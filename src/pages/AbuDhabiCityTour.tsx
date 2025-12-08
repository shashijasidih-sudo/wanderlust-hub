import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const AbuDhabiCityTour = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["abu-dhabi-city-tour"];

  return <TourBooking tourData={tourData} />;
};

export default AbuDhabiCityTour;
