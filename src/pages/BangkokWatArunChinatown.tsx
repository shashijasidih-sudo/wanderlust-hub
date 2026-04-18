import TourBooking from "@/components/TourBooking";
import { WatArunChinatownSEO } from "@/components/activity-detail/BangkokActivitySEO";
import { watArunChinatownFaqs } from "@/data/bangkokActivityFaqs";
import { toursData } from "@/data/tourData";
import bangkokTemple2 from "@/assets/bangkok-temple-2.jpg";
import bangkokCity2 from "@/assets/bangkok-city-2.jpg";
import bangkokTemple4 from "@/assets/bangkok-temple-4.jpg";

const BangkokWatArunChinatown = () => {
  const tourData = {
    ...toursData["bangkok-wat-arun-chinatown"],
    heroImages: [
      { src: bangkokTemple2, title: "Sunset at Wat Arun" },
      { src: bangkokCity2, title: "Bangkok Cityscape" },
      { src: bangkokTemple4, title: "Bangkok Evening Tour" }
    ],
    galleryImages: [
      { src: bangkokTemple2, alt: "Wat Arun at night" },
      { src: bangkokCity2, alt: "Bangkok highway bridge" },
      { src: bangkokTemple4, alt: "Temple exploration" }
    ],
    faqs: watArunChinatownFaqs,
  };
  return <TourBooking tourData={tourData} extraContentBeforeReviews={<WatArunChinatownSEO />} />;
};

export default BangkokWatArunChinatown;
