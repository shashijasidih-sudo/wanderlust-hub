import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const PattayaNightlifeWalking = () => {
  const tourData = toursData["pattaya-nightlife-walking"];
  
  return <TourBooking tourData={tourData} />;
};

export default PattayaNightlifeWalking;
