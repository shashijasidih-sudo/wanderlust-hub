import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const PattayaFloatingMarketGuided = () => {
  const tourData = toursData["pattaya-floating-market-guided"];
  
  return <TourBooking tourData={tourData} />;
};

export default PattayaFloatingMarketGuided;
