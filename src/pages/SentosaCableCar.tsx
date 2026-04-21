import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import { SentosaCableCarSEO } from "@/components/activity-detail/SingaporeActivitySEO";
import { sentosaCableCarFaqs } from "@/data/singaporeActivityFaqs";
import cable1 from "@/assets/singapore-doc/cable-car-1.jpg";

const SentosaCableCar = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const base = toursData["sentosa-cable-car"];
  const tourData = {
    ...base,
    heroImages: [
      { src: cable1, title: base.title, subtitle: "Mount Faber Line panoramic ride" },
      ...base.heroImages,
    ],
    galleryImages: [
      { src: cable1, alt: "Singapore Cable Car gondolas above Keppel Harbour" },
      ...base.galleryImages,
    ],
    faqs: sentosaCableCarFaqs,
  };
  return <TourBooking tourData={tourData} extraContentBeforeReviews={<SentosaCableCarSEO />} />;
};

export default SentosaCableCar;
