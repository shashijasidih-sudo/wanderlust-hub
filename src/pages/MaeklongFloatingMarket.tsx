import TourBooking from "@/components/TourBooking";
import { MaeklongFloatingMarketSEO } from "@/components/activity-detail/BangkokActivitySEO";
import { maeklongFloatingMarketFaqs } from "@/data/bangkokActivityFaqs";
import { toursData } from "@/data/tourData";
import floatingMarket1 from "@/assets/floating-market-1.jpg";
import bangkokRiversideTemple1 from "@/assets/bangkok-riverside-temple-1.jpg";
import bangkokBridgeDay1 from "@/assets/bangkok-bridge-day-1.jpg";

const MaeklongFloatingMarket = () => {
  const tourData = {
    ...toursData["maeklong-floating-market"],
    heroImages: [
      { src: floatingMarket1, title: "Maeklong Railway Market" },
      { src: bangkokRiversideTemple1, title: "Damnoen Saduak Floating Market" },
      { src: bangkokBridgeDay1, title: "Traditional Thai Markets" }
    ],
    galleryImages: [
      { src: floatingMarket1, alt: "Floating market boats" },
      { src: bangkokRiversideTemple1, alt: "Riverside temple" },
      { src: bangkokBridgeDay1, alt: "Bangkok cityscape" }
    ],
    faqs: maeklongFloatingMarketFaqs,
  };
  return <TourBooking tourData={tourData} extraContentBeforeReviews={<MaeklongFloatingMarketSEO />} />;
};

export default MaeklongFloatingMarket;
