import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import gemsTemple1 from "@/assets/gems-gallery-temple-1.jpg";
import gemsBuddha from "@/assets/gems-gallery-buddha.jpg";
import gemsPagoda from "@/assets/gems-gallery-pagoda.jpg";

const BangkokCityGemsGallery = () => {
  const tourData = {
    ...toursData["bangkok-city-gems-gallery"],
    heroImages: [
      { src: gemsTemple1, title: "Bangkok City and Temple Tours with Gems Gallery" },
      { src: gemsBuddha, title: "Golden Buddha Statues" },
      { src: gemsPagoda, title: "Golden Pagoda Temple" }
    ],
    galleryImages: [
      { src: gemsTemple1, alt: "Thai temple with tourist" },
      { src: gemsBuddha, alt: "Golden Buddha statues" },
      { src: gemsPagoda, alt: "Golden pagoda temple" }
    ]
  };
  return <TourBooking tourData={tourData} />;
};

export default BangkokCityGemsGallery;
