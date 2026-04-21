import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import { HongIslandsLongtailSEO } from "@/components/activity-detail/KrabiActivitySEO";
import { hongIslandsLongtailFaqs } from "@/data/krabiActivityFaqs";
import hong1 from "@/assets/krabi-doc/hong-1.jpg";
import hong2 from "@/assets/krabi-doc/hong-2.jpg";
import hong3 from "@/assets/krabi-doc/hong-3.jpg";

const HongIslandsLongtail = () => {
  const base = toursData["hong-islands-longtail"];
  const heroImages = [
    { src: hong1, title: "Hong Island Lagoon" },
    { src: hong2, title: "Pakbia Island Beach" },
    { src: hong3, title: "Lao Lading Paradise" },
    ...(base?.heroImages || []),
  ];
  const galleryImages = [
    { src: hong1, alt: "Hidden Hong Lagoon" },
    { src: hong2, alt: "Pakbia Island white sand" },
    { src: hong3, alt: "Lao Lading Island view" },
    ...(base?.galleryImages || []),
  ];
  const tourData = { ...base, heroImages, galleryImages, faqs: hongIslandsLongtailFaqs };

  return <TourBooking tourData={tourData} extraContentBeforeReviews={<HongIslandsLongtailSEO />} />;
};

export default HongIslandsLongtail;
