import TourBooking from "@/components/TourBooking";
import ChaoPhrayaPrincessPrivateSEO from "@/components/activity-detail/ChaoPhrayaPrincessPrivateSEO";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import { toursData } from "@/data/tourData";
import { chaoPhrayaPrincessFaqs } from "@/data/chaoPhrayaPrincessFaqs";
import cruiseNight1 from "@/assets/cruise-night-1.jpg";
import cruiseNight2 from "@/assets/cruise-night-2.jpg";
import watArunTwilight1 from "@/assets/wat-arun-twilight-1.jpg";

const ChaoPhrayaPrincessPrivate = () => {
  const tourData = {
    ...toursData["chao-phraya-princess-private"],
    heroImages: [
      { src: cruiseNight2, title: "Chao Phraya Princess Cruise" },
      { src: cruiseNight1, title: "Private Transfer Service" },
      { src: watArunTwilight1, title: "Bangkok River Views" }
    ],
    galleryImages: [
      { src: cruiseNight2, alt: "Princess cruise ship at night" },
      { src: cruiseNight1, alt: "Cruise evening experience" },
      { src: watArunTwilight1, alt: "Bangkok skyline at twilight" }
    ],
    faqs: chaoPhrayaPrincessFaqs
  };
  return (
    <TourBooking
      tourData={tourData}
      extraContentBeforeReviews={<ChaoPhrayaPrincessPrivateSEO />}
    />
  );
};

export default ChaoPhrayaPrincessPrivate;
