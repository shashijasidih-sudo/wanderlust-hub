import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const SingaporeRiverCruise = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["singapore-river-cruise"];

  return <TourBooking tourData={tourData} />;
};

export default SingaporeRiverCruise;