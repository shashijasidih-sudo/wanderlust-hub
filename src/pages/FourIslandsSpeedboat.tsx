import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const FourIslandsSpeedboat = () => {
  const tourData = toursData["four-islands-speedboat"];
  
  return <TourBooking tourData={tourData} />;
};

export default FourIslandsSpeedboat;
