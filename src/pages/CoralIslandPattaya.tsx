import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const CoralIslandPattaya = () => {
  const tourData = toursData["coral-island-pattaya"];
  
  return <TourBooking tourData={tourData} />;
};

export default CoralIslandPattaya;
