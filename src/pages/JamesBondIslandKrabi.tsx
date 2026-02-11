import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const JamesBondIslandKrabi = () => {
  const tourData = toursData["james-bond-island-krabi"];
  
  return <TourBooking tourData={tourData} />;
};

export default JamesBondIslandKrabi;
