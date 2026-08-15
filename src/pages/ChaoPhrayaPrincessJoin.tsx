import TourBooking from "@/components/TourBooking";
import BangkokTourItinerary from "@/components/activity-detail/BangkokTourItinerary";
import { bangkokSheetContent } from "@/data/bangkokSheetContent";
import ChaoPhrayaPrincessSEOContent from "@/components/activity-detail/ChaoPhrayaPrincessSEOContent";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import { toursData } from "@/data/tourData";
import { chaoPhrayaPrincessFaqs } from "@/data/chaoPhrayaPrincessFaqs";
import cruiseNight1 from "@/assets/cruise-night-1.jpg";
import cruiseNight2 from "@/assets/cruise-night-2.webp";
import cruiseShip1 from "@/assets/cruise-ship-1.webp";

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
  const sheet = bangkokSheetContent["chao-phraya-princess-join"];
  const pageTourData = {
    ...tourData,
    description: { ...tourData.description, whatToExpect: sheet.whatToExpect },
    inclusions: sheet.inclusions,
  };
  return (
    <>
      <FaqJsonLd faqs={chaoPhrayaPrincessFaqs} id="faq-jsonld-cpp-join" />
      <TourBooking
        tourData={pageTourData}
        extraDescriptionBeforeHighlights={<BangkokTourItinerary tourKey="chao-phraya-princess-join" />}
        extraContentBeforeReviews={<ChaoPhrayaPrincessSEOContent />}
      />
    </>
  );
};

export default ChaoPhrayaPrincessJoin;
