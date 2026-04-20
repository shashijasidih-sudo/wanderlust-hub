import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import { PattayaPubCrawlSEO } from "@/components/activity-detail/PattayaActivitySEO";
import { pubCrawlPattayaFaqs } from "@/data/pattayaActivityFaqs";

const PattayaPubCrawl = () => {
  const tourData = { ...toursData["pattaya-pub-crawl"], faqs: pubCrawlPattayaFaqs };
  return <TourBooking tourData={tourData} extraContentBeforeReviews={<PattayaPubCrawlSEO />} />;
};

export default PattayaPubCrawl;
