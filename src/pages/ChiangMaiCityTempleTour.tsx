import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import doiSuthep from "@/assets/chiang-mai-doi-suthep-1.jpg";
import chediLuang from "@/assets/chiang-mai-wat-chedi-luang-1.jpg";
import cityImg from "@/assets/city-chiang-mai.jpg";

const ChiangMaiCityTempleTour = () => {
  const tourData = {
    ...toursData["chiang-mai-city-temple-tour-doi-suthep-chedi-luang-pha-lat-with-transfer"],
    heroImages: [
      { src: doiSuthep, title: "Wat Phra That Doi Suthep" },
      { src: chediLuang, title: "Wat Chedi Luang" },
      { src: cityImg, title: "Chiang Mai Old City" },
    ],
    galleryImages: [
      { src: doiSuthep, alt: "Doi Suthep golden temple" },
      { src: chediLuang, alt: "Wat Chedi Luang ancient brick chedi" },
      { src: cityImg, alt: "Chiang Mai cityscape" },
    ],
  };
  return <TourBooking tourData={tourData} />;
};

export default ChiangMaiCityTempleTour;
