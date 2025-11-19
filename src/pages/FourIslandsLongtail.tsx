import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const FourIslandsLongtail = () => {
  const tourData = toursData["four-islands-longtail"];
  
  return <TourBooking tourData={tourData} />;
};

export default FourIslandsLongtail;
