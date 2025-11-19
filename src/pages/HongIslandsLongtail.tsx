import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const HongIslandsLongtail = () => {
  const tourData = toursData["hong-islands-longtail"];
  
  return <TourBooking tourData={tourData} />;
};

export default HongIslandsLongtail;
