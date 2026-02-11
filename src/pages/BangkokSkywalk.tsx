import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import bangkokSkywalk1 from "@/assets/bangkok-skywalk-1.jpg";
import bangkokSkywalk2 from "@/assets/bangkok-skywalk-2.jpg";
import bangkokSkywalk3 from "@/assets/bangkok-skywalk-3.jpg";
import bangkokSkywalk4 from "@/assets/bangkok-skywalk-4.jpg";
import bangkokSkywalk5 from "@/assets/bangkok-skywalk-5.jpg";
import bangkokSkywalkHero from "@/assets/bangkok-skywalk-hero.jpg";

const BangkokSkywalk = () => {
  const tourData = {
    ...toursData["bangkok-skywalk"],
    heroImages: [
      { src: bangkokSkywalkHero, title: "Bangkok Mahanakhon Sky Walk" },
      { src: bangkokSkywalk1, title: "Glass Floor Experience" },
      { src: bangkokSkywalk2, title: "Panoramic City Views" },
      { src: bangkokSkywalk3, title: "Sunset at Skywalk" }
    ],
    galleryImages: [
      { src: bangkokSkywalkHero, alt: "Mahanakhon Skywalk entrance" },
      { src: bangkokSkywalk1, alt: "Glass floor walkway" },
      { src: bangkokSkywalk2, alt: "Bangkok panoramic view" },
      { src: bangkokSkywalk3, alt: "Sunset views from rooftop" },
      { src: bangkokSkywalk4, alt: "Observation deck" },
      { src: bangkokSkywalk5, alt: "City skyline at dusk" }
    ]
  };
  return <TourBooking tourData={tourData} />;
};

export default BangkokSkywalk;
