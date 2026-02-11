import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";

const PattayaPubCrawl = () => {
  const tourData = toursData["pattaya-pub-crawl"];
  
  return <TourBooking tourData={tourData} />;
};

export default PattayaPubCrawl;
