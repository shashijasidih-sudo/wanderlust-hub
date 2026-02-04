import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import bangkokCityNight1 from "@/assets/bangkok-city-night-1.jpg";
import bangkokPagodaSunset1 from "@/assets/bangkok-pagoda-sunset-1.jpg";
import bangkokCityPurple1 from "@/assets/bangkok-city-purple-1.jpg";

const BaiyokeBuffet = () => {
  const tourData = {
    ...toursData["baiyoke-buffet"],
    heroImages: [
      { src: bangkokCityNight1, title: "Baiyoke Tower Buffet" },
      { src: bangkokPagodaSunset1, title: "Panoramic Bangkok Views" },
      { src: bangkokCityPurple1, title: "International Cuisine" }
    ],
    galleryImages: [
      { src: bangkokCityNight1, alt: "City views from 75th floor" },
      { src: bangkokPagodaSunset1, alt: "Bangkok at sunset" },
      { src: bangkokCityPurple1, alt: "Illuminated city at night" }
    ]
  };
  return <TourBooking tourData={tourData} />;
};

export default BaiyokeBuffet;