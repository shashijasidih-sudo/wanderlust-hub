import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const PhuketCityNightMarket = () => {
  const tourData = toursData["phuket-city-night-market"];
  
  return <TourBooking tourData={tourData} />;
};

export default PhuketCityNightMarket;
