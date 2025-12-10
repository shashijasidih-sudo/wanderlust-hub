import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const NightSafariTransfer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["night-safari-transfer"];

  return <TourBooking tourData={tourData} />;
};

export default NightSafariTransfer;