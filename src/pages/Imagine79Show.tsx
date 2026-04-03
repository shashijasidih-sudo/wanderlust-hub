import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const Imagine79Show = () => {
  const tourData = toursData["imagine79-show-pattaya"];
  
  return <TourBooking tourData={tourData} />;
};

export default Imagine79Show;
