import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const PhuketSimonCabaret = () => {
  const tourData = toursData["phuket-simon-cabaret"];
  
  return <TourBooking tourData={tourData} />;
};

export default PhuketSimonCabaret;
