import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import { SentosaWingsTimeSEO } from "@/components/activity-detail/SingaporeActivitySEO";
import { sentosaWingsTimeFaqs } from "@/data/singaporeActivityFaqs";
import wt1 from "@/assets/singapore-doc/wings-time-1.jpg";
import wt2 from "@/assets/singapore-doc/wings-time-2.jpg";
import wt3 from "@/assets/singapore-doc/wings-time-3.jpg";

const SentosaWingsTime = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const base = toursData["sentosa-wings-time"];
  const tourData = {
    ...base,
    heroImages: [
      { src: wt1, title: base.title, subtitle: "Award-winning night show at Siloso Beach" },
      { src: wt2, title: base.title, subtitle: "Lasers, water screens & projections" },
      { src: wt3, title: base.title, subtitle: "Spectacular fireworks finale" },
      ...base.heroImages,
    ],
    galleryImages: [
      { src: wt1, alt: "Wings of Time stage with lasers and orange phoenix" },
      { src: wt2, alt: "Wings of Time water and light show on the ocean" },
      { src: wt3, alt: "Wings of Time fireworks display over water" },
      ...base.galleryImages,
    ],
    faqs: sentosaWingsTimeFaqs,
  };
  return <TourBooking tourData={tourData} extraContentBeforeReviews={<SentosaWingsTimeSEO />} />;
};

export default SentosaWingsTime;
