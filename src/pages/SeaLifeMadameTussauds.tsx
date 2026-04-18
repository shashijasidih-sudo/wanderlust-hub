import TourBooking from "@/components/TourBooking";
import { SeaLifeMadameTussaudsSEO } from "@/components/activity-detail/BangkokActivitySEO";
import { toursData } from "@/data/tourData";
import bangkokBridgeTwilight1 from "@/assets/bangkok-bridge-twilight-1.jpg";
import bangkokCityNight1 from "@/assets/bangkok-city-night-1.jpg";
import bangkokCityPurple1 from "@/assets/bangkok-city-purple-1.jpg";

const SeaLifeMadameTussauds = () => {
  const tourData = {
    ...toursData["sea-life-madame-tussauds"],
    heroImages: [
      { src: bangkokBridgeTwilight1, title: "Sea Life Ocean World" },
      { src: bangkokCityNight1, title: "Madame Tussauds Bangkok" },
      { src: bangkokCityPurple1, title: "Double Attraction Pass" }
    ],
    galleryImages: [
      { src: bangkokBridgeTwilight1, alt: "Bangkok at twilight" },
      { src: bangkokCityNight1, alt: "City views at night" },
      { src: bangkokCityPurple1, alt: "Illuminated cityscape" }
    ]
  };
  return <TourBooking tourData={tourData} extraContentBeforeReviews={<SeaLifeMadameTussaudsSEO />} />;
};

export default SeaLifeMadameTussauds;
