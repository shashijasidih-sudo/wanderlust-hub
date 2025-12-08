import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const MiracleGardenDubai = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["miracle-garden-dubai"];

  return <TourBooking tourData={tourData} />;
};

export default MiracleGardenDubai;
