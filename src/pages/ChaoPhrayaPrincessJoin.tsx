import TourBooking from "@/components/TourBooking";
import ChaoPhrayaPrincessSEOContent from "@/components/activity-detail/ChaoPhrayaPrincessSEOContent";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import { toursData } from "@/data/tourData";
import { chaoPhrayaPrincessFaqs } from "@/data/chaoPhrayaPrincessFaqs";
import cruiseNight1 from "@/assets/cruise-night-1.jpg";
import cruiseNight2 from "@/assets/cruise-night-2.jpg";
import cruiseShip1 from "@/assets/cruise-ship-1.jpg";

const ChaoPhrayaPrincessJoin = () => {
  const tourData = {
    ...toursData["chao-phraya-princess-join"],
    heroImages: [
      { src: cruiseNight1, title: "Chao Phraya Princess Dinner Cruise" },
      { src: cruiseNight2, title: "Evening River Experience" },
      { src: cruiseShip1, title: "Luxury Cruise Ship" }
    ],
    galleryImages: [
      { src: cruiseNight1, alt: "Princess cruise at night" },
      { src: cruiseNight2, alt: "Chao Phraya Princess cruise" },
      { src: cruiseShip1, alt: "Luxury cruise ship" }
    ],
    faqs: chaoPhrayaPrincessFaqs
  };
  return (
    <>
      <FaqJsonLd faqs={chaoPhrayaPrincessFaqs} id="faq-jsonld-cpp-join" />
      <TourBooking
        tourData={tourData}
        extraContentBeforeReviews={<ChaoPhrayaPrincessSEOContent />}
      />
    </>
  );
};

export default ChaoPhrayaPrincessJoin;
