import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const FourIslandsLongtailNoParkFee = () => {
  const tourData = toursData["four-islands-longtail-no-park-fee"];
  
  return <TourBooking tourData={tourData} />;
};

export default FourIslandsLongtailNoParkFee;
