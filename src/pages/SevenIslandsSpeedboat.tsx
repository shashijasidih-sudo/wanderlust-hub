import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const SevenIslandsSpeedboat = () => {
  const tourData = toursData["seven-islands-speedboat"];
  
  return <TourBooking tourData={tourData} />;
};

export default SevenIslandsSpeedboat;
