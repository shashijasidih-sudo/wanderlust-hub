import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const BigEyeShowPattaya = () => {
  const tourData = toursData["big-eye-show-pattaya"];
  
  return <TourBooking tourData={tourData} />;
};

export default BigEyeShowPattaya;
