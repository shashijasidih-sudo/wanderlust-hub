import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import phuketAtv from "@/assets/phuket-atv-1.jpg";
import phuketTiger from "@/assets/phuket-tiger-1.jpg";
import tiger1 from "@/assets/tiger-1.jpg";

const SelfieWithTigerATV = () => {
  const baseTourData = toursData["selfie-tigers-atv"];
  
  const tourData = {
    ...baseTourData,
    heroImages: [
      { src: phuketAtv, title: "ATV Adventure in Phuket" },
      { src: phuketTiger, title: "Tiger Experience" },
      { src: tiger1, title: "Big Buddha Viewpoint" }
    ],
    galleryImages: [
      { src: phuketAtv, alt: "ATV off-road adventure" },
      { src: phuketTiger, alt: "Tiger selfie experience" },
      { src: tiger1, alt: "Majestic tiger encounter" },
      { src: phuketAtv, alt: "Jungle ATV ride" }
    ]
  };
  
  return <TourBooking tourData={tourData} />;
};

export default SelfieWithTigerATV;
