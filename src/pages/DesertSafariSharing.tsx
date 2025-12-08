import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const DesertSafariSharing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["desert-safari-sharing"];

  return <TourBooking tourData={tourData} />;
};

export default DesertSafariSharing;
