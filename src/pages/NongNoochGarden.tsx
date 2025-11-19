import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const NongNoochGarden = () => {
  const tourData = toursData["nong-nooch-garden"];
  
  return <TourBooking tourData={tourData} />;
};

export default NongNoochGarden;
