import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const PhuketCarnivalMagic = () => {
  const tourData = toursData["phuket-carnival-magic"];
  
  return <TourBooking tourData={tourData} />;
};

export default PhuketCarnivalMagic;
