import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import goldenTriangle from "@/assets/chiang-mai-chiang-rai-golden-triangle-1.jpg";
import cityImg from "@/assets/city-chiang-mai.jpg";
import doiSuthep from "@/assets/chiang-mai-doi-suthep-1.jpg";

const ChiangMaiChiangRaiGoldenTriangle = () => {
  const tourData = {
    ...toursData["chiang-mai-chiang-rai-golden-triangle-long-neck-tribe-day-trip"],
    heroImages: [
      { src: goldenTriangle, title: "Golden Triangle on the Mekong" },
      { src: doiSuthep, title: "Northern Thai Temples" },
      { src: cityImg, title: "Chiang Mai Region" },
    ],
    galleryImages: [
      { src: goldenTriangle, alt: "Golden Triangle Mekong River view" },
      { src: doiSuthep, alt: "Northern Thai temple architecture" },
      { src: cityImg, alt: "Chiang Mai cityscape" },
    ],
  };
  return <TourBooking tourData={tourData} />;
};

export default ChiangMaiChiangRaiGoldenTriangle;
