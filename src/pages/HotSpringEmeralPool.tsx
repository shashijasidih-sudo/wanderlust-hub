import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import { HotSpringEmeraldPoolSEO } from "@/components/activity-detail/KrabiActivitySEO";
import { hotSpringEmeraldPoolFaqs } from "@/data/krabiActivityFaqs";
import emerald1 from "@/assets/krabi-doc/emerald-1.jpg";
import emerald2 from "@/assets/krabi-doc/emerald-2.jpg";

const HotSpringEmeralPool = () => {
  const base = toursData["hot-spring-emerald-pool"];
  const heroImages = [
    { src: emerald1, title: "Tiger Cave Temple Viewpoint" },
    { src: emerald2, title: "Emerald Pool & Hot Springs" },
    ...(base?.heroImages || []),
  ];
  const galleryImages = [
    { src: emerald1, alt: "Tiger Cave Temple panoramic view" },
    { src: emerald2, alt: "Emerald Pool nature reserve" },
    ...(base?.galleryImages || []),
  ];
  const tourData = { ...base, heroImages, galleryImages, faqs: hotSpringEmeraldPoolFaqs };

  return <TourBooking tourData={tourData} extraContentBeforeReviews={<HotSpringEmeraldPoolSEO />} />;
};

export default HotSpringEmeralPool;
