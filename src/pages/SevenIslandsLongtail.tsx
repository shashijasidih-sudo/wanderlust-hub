import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const SevenIslandsLongtail = () => {
  const tourData = toursData["seven-islands-longtail"];
  
  return <TourBooking tourData={tourData} />;
};

export default SevenIslandsLongtail;
