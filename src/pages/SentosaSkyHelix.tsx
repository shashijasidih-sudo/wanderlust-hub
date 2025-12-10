import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const SentosaSkyHelix = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["sentosa-sky-helix"];

  return <TourBooking tourData={tourData} />;
};

export default SentosaSkyHelix;