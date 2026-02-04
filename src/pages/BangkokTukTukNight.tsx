import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import bangkokTemple2 from "@/assets/bangkok-temple-2.jpg";
import bangkokCity1 from "@/assets/bangkok-city-1.jpg";
import bangkokTemple3 from "@/assets/bangkok-temple-3.jpg";

const BangkokTukTukNight = () => {
  const tourData = {
    ...toursData["bangkok-tuk-tuk-night"],
    heroImages: [
      { src: bangkokTemple2, title: "Bangkok Night Tour by Tuk-Tuk" },
      { src: bangkokCity1, title: "Night Market Adventure" },
      { src: bangkokTemple3, title: "Street Food Experience" }
    ],
    galleryImages: [
      { src: bangkokTemple2, alt: "Illuminated temples at night" },
      { src: bangkokCity1, alt: "Bangkok cityscape" },
      { src: bangkokTemple3, alt: "Wat Arun at twilight" }
    ]
  };
  return <TourBooking tourData={tourData} />;
};

export default BangkokTukTukNight;
