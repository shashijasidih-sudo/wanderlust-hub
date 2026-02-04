import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import bangkokTemple1 from "@/assets/bangkok-temple-1.jpg";
import bangkokBuddha1 from "@/assets/bangkok-buddha-1.jpg";
import bangkokTemple4 from "@/assets/bangkok-temple-4.jpg";

const BangkokCityGemsGallery = () => {
  const tourData = {
    ...toursData["bangkok-city-gems-gallery"],
    heroImages: [
      { src: bangkokTemple1, title: "Bangkok City and Temple Tours with Gems Gallery" },
      { src: bangkokBuddha1, title: "Golden Buddha Statues" },
      { src: bangkokTemple4, title: "Beautiful Thai Temple" }
    ],
    galleryImages: [
      { src: bangkokTemple1, alt: "Golden Pagoda at sunset" },
      { src: bangkokBuddha1, alt: "Golden Buddha statues" },
      { src: bangkokTemple4, alt: "Woman at Thai temple" }
    ]
  };
  return <TourBooking tourData={tourData} />;
};

export default BangkokCityGemsGallery;
