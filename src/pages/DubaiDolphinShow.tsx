import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const DubaiDolphinShow = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = toursData["dubai-dolphin-show"];

  return <TourBooking tourData={tourData} />;
};

export default DubaiDolphinShow;
