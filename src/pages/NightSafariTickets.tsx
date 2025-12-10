import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const NightSafariTickets = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["night-safari-tickets"];

  return <TourBooking tourData={tourData} />;
};

export default NightSafariTickets;