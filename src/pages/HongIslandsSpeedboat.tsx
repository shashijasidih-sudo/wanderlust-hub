import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const HongIslandsSpeedboat = () => {
  const tourData = toursData["hong-islands-speedboat"];
  
  return <TourBooking tourData={tourData} />;
};

export default HongIslandsSpeedboat;
