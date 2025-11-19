import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const PattayaFloatingMarketTour = () => {
  const tourData = toursData["pattaya-floating-market-tour"];
  
  return <TourBooking tourData={tourData} />;
};

export default PattayaFloatingMarketTour;
