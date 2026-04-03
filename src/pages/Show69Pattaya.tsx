import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const Show69Pattaya = () => {
  const tourData = toursData["show-69-pattaya"];
  
  return <TourBooking tourData={tourData} />;
};

export default Show69Pattaya;
