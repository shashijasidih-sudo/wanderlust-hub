import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const AlcazarShowPattaya = () => {
  const tourData = toursData["alcazar-show-pattaya"];
  
  return <TourBooking tourData={tourData} />;
};

export default AlcazarShowPattaya;
