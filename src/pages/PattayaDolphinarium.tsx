import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const PattayaDolphinarium = () => {
  const tourData = toursData["pattaya-dolphinarium"];
  
  return <TourBooking tourData={tourData} />;
};

export default PattayaDolphinarium;
