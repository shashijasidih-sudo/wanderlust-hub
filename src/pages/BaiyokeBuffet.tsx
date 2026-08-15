import BangkokActivityTemplate from "@/components/activity-detail/BangkokActivityTemplate";
import BangkokTourItinerary from "@/components/activity-detail/BangkokTourItinerary";
import { bangkokSheetContent } from "@/data/bangkokSheetContent";
import { BaiyokeBuffetSEO } from "@/components/activity-detail/BangkokActivitySEO";
import { baiyokeBuffetFaqs } from "@/data/bangkokActivityFaqs";
import { toursData } from "@/data/tourData";
import bangkokCityNight1 from "@/assets/bangkok-city-night-1.jpg";
import bangkokPagodaSunset1 from "@/assets/bangkok-pagoda-sunset-1.jpg";
import bangkokCityPurple1 from "@/assets/bangkok-city-purple-1.webp";

const BaiyokeBuffet = () => {
  const tourData = {
    ...toursData["baiyoke-buffet"],
    heroImages: [
      { src: bangkokCityNight1, title: "Baiyoke Tower Buffet" },
      { src: bangkokPagodaSunset1, title: "Panoramic Bangkok Views" },
      { src: bangkokCityPurple1, title: "International Cuisine" }
    ],
    galleryImages: [
      { src: bangkokCityNight1, alt: "City views from 75th floor" },
      { src: bangkokPagodaSunset1, alt: "Bangkok at sunset" },
      { src: bangkokCityPurple1, alt: "Illuminated city at night" }
    ],
    faqs: baiyokeBuffetFaqs,
  };
  const sheet = bangkokSheetContent["baiyoke-buffet"];
  const pageTourData = {
    ...tourData,
    description: { ...tourData.description, whatToExpect: sheet.whatToExpect },
    inclusions: sheet.inclusions,
  };
  return <BangkokActivityTemplate
      tourData={pageTourData}
      contentAfterOverview={<BangkokTourItinerary tourKey="baiyoke-buffet" />}
      config={{
        path: "/thailand/bangkok/baiyoke-buffet/",
        seoTitle: "Baiyoke Sky Buffet & Observation Deck Tickets Bangkok | Book in INR",
        seoDescription:
          "Book Baiyoke Sky Tower buffet and observation deck tickets in Bangkok. 360-degree revolving views with an international buffet. Instant confirmation and INR pricing.",
        whatsappTopic: "Baiyoke Sky buffet tickets",
        audience: "Great for Families & Couples",
        area: "city",
        ctaHeadline: "Dinner and 360\u00b0 Bangkok Views at Baiyoke Sky",
        companionIntro:
          "Bangkok's classic buffet-with-a-view \u2014 with clear guidance on veg spreads and the best time slot for Indian families.",
        tips: [
          "Book the sunset slot for both daylight and night skyline views.",
          "Smart casual dress is recommended for the buffet floors.",
          "The revolving deck is on the 84th floor \u2014 allow time for lifts.",
          "Vegetarian counters are available; Jain meals need advance notice.",
        ],
      }}
      extraContentBeforeReviews={<BaiyokeBuffetSEO />}
    />;
};

export default BaiyokeBuffet;
