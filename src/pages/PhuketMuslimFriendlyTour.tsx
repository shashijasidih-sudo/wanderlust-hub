import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const PhuketMuslimFriendlyTour = () => {
  const tourData = toursData["phuket-muslim-friendly-tour"];
  
  return <TourBooking tourData={tourData} />;
};

export default PhuketMuslimFriendlyTour;
