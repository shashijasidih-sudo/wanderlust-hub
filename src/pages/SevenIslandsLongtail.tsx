import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import { SevenIslandsLongtailSEO } from "@/components/activity-detail/KrabiActivitySEO";
import { sevenIslandsLongtailFaqs } from "@/data/krabiActivityFaqs";
import seven1 from "@/assets/krabi-doc/seven-1.jpg";
import seven2 from "@/assets/krabi-doc/seven-2.jpg";
import seven3 from "@/assets/krabi-doc/seven-3.jpg";

const SevenIslandsLongtail = () => {
  const base = toursData["seven-islands-longtail"];
  const heroImages = [
    { src: seven1, title: "Sunset Long-tailed Boat" },
    { src: seven2, title: "Krabi Limestone Islands" },
    { src: seven3, title: "BBQ Beach Dinner" },
    ...(base?.heroImages || []),
  ];
  const galleryImages = [
    { src: seven1, alt: "Long-tailed boat at sunset" },
    { src: seven2, alt: "Limestone island in Andaman Sea" },
    { src: seven3, alt: "Sunset beach BBQ" },
    ...(base?.galleryImages || []),
  ];
  const tourData = { ...base, heroImages, galleryImages, faqs: sevenIslandsLongtailFaqs };

  return <TourBooking tourData={tourData} extraContentBeforeReviews={<SevenIslandsLongtailSEO />} />;
};

export default SevenIslandsLongtail;
