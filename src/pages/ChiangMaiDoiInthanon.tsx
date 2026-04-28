import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import inthanon from "@/assets/chiang-mai-doi-inthanon-1.jpg";
import doiSuthep from "@/assets/chiang-mai-doi-suthep-1.jpg";
import cityImg from "@/assets/city-chiang-mai.jpg";

const ChiangMaiDoiInthanon = () => {
  const tourData = {
    ...toursData["chiang-mai-doi-inthanon-national-park-full-day-tour"],
    heroImages: [
      { src: inthanon, title: "Doi Inthanon National Park" },
      { src: doiSuthep, title: "Northern Thai Temples" },
      { src: cityImg, title: "Chiang Mai Highlands" },
    ],
    galleryImages: [
      { src: inthanon, alt: "Doi Inthanon twin pagodas and waterfall" },
      { src: doiSuthep, alt: "Doi Suthep temple" },
      { src: cityImg, alt: "Chiang Mai cityscape" },
    ],
  };
  return <TourBooking tourData={tourData} />;
};

export default ChiangMaiDoiInthanon;
