import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const MuayThaiPattaya = () => {
  const tourData = toursData["muay-thai-pattaya"];
  
  return <TourBooking tourData={tourData} />;
};

export default MuayThaiPattaya;
