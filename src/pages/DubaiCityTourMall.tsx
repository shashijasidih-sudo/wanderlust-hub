import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const DubaiCityTourMall = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["dubai-city-tour-mall"];

  return <TourBooking tourData={tourData} />;
};

export default DubaiCityTourMall;
