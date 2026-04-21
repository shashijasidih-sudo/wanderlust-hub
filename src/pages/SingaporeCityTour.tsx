import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import { SingaporeCityTourSEO } from "@/components/activity-detail/SingaporeActivitySEO";
import { singaporeCityTourFaqs } from "@/data/singaporeActivityFaqs";
import cityTour1 from "@/assets/singapore-doc/city-tour-1.jpg";
import cityTour2 from "@/assets/singapore-doc/city-tour-2.jpg";

const SingaporeCityTour = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const base = toursData["singapore-city-tour"];
  const tourData = {
    ...base,
    heroImages: [
      { src: cityTour1, title: base.title, subtitle: "Chinatown heritage streets" },
      { src: cityTour2, title: base.title, subtitle: "Little India temples & culture" },
      ...base.heroImages,
    ],
    galleryImages: [
      { src: cityTour1, alt: "Chinatown shophouses with lanterns" },
      { src: cityTour2, alt: "Sri Mariamman temple gopuram" },
      ...base.galleryImages,
    ],
    faqs: singaporeCityTourFaqs,
  };
  return <TourBooking tourData={tourData} extraContentBeforeReviews={<SingaporeCityTourSEO />} />;
};

export default SingaporeCityTour;
