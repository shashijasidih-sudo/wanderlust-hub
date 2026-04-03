import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const Show89Pattaya = () => {
  const tourData = toursData["show-89-pattaya"];
  
  return <TourBooking tourData={tourData} />;
};

export default Show89Pattaya;
