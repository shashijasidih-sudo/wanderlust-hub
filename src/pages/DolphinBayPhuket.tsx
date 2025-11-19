import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const DolphinBayPhuket = () => {
  const tourData = toursData["dolphin-bay-phuket"];
  
  return <TourBooking tourData={tourData} />;
};

export default DolphinBayPhuket;
