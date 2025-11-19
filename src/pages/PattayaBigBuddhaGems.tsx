import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const PattayaBigBuddhaGems = () => {
  const tourData = toursData["pattaya-big-buddha-gems"];
  
  return <TourBooking tourData={tourData} />;
};

export default PattayaBigBuddhaGems;
