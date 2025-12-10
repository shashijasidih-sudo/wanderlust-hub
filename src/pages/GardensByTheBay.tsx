import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const GardensByTheBay = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["gardens-by-the-bay"];

  return <TourBooking tourData={tourData} />;
};

export default GardensByTheBay;