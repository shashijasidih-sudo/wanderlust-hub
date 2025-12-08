import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const DubaiAquariumPenguin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["dubai-aquarium-penguin"];

  return <TourBooking tourData={tourData} />;
};

export default DubaiAquariumPenguin;
