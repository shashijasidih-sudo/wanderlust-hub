import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const GlobalVillageDubai = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["global-village-dubai"];

  return <TourBooking tourData={tourData} />;
};

export default GlobalVillageDubai;
