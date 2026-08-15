import BangkokActivityTemplate from "@/components/activity-detail/BangkokActivityTemplate";
import BangkokTourItinerary from "@/components/activity-detail/BangkokTourItinerary";
import { bangkokSheetContent } from "@/data/bangkokSheetContent";
import { SeaLifeMadameTussaudsSEO } from "@/components/activity-detail/BangkokActivitySEO";
import { seaLifeMadameTussaudsFaqs } from "@/data/bangkokActivityFaqs";
import { toursData } from "@/data/tourData";
import bangkokBridgeTwilight1 from "@/assets/bangkok-bridge-twilight-1.jpg";
import bangkokCityNight1 from "@/assets/bangkok-city-night-1.jpg";
import bangkokCityPurple1 from "@/assets/bangkok-city-purple-1.webp";

const SeaLifeMadameTussauds = () => {
  const tourData = {
    ...toursData["sea-life-madame-tussauds"],
    heroImages: [
      { src: bangkokBridgeTwilight1, title: "Sea Life Ocean World" },
      { src: bangkokCityNight1, title: "Madame Tussauds Bangkok" },
      { src: bangkokCityPurple1, title: "Double Attraction Pass" }
    ],
    galleryImages: [
      { src: bangkokBridgeTwilight1, alt: "Bangkok at twilight" },
      { src: bangkokCityNight1, alt: "City views at night" },
      { src: bangkokCityPurple1, alt: "Illuminated cityscape" }
    ],
    faqs: seaLifeMadameTussaudsFaqs,
  };
  const sheet = bangkokSheetContent["sea-life-madame-tussauds"];
  const pageTourData = {
    ...tourData,
    description: { ...tourData.description, whatToExpect: sheet.whatToExpect },
    inclusions: sheet.inclusions,
  };
  return <BangkokActivityTemplate
      tourData={pageTourData}
      contentAfterOverview={<BangkokTourItinerary tourKey="sea-life-madame-tussauds" />}
      config={{
        path: "/thailand/bangkok/sea-life-madame-tussauds-tickets/",
        seoTitle: "Sea Life Bangkok & Madame Tussauds Combo Tickets | Book in INR",
        seoDescription:
          "Book the Sea Life Ocean World and Madame Tussauds Bangkok combo tickets at Siam Paragon. Indoor, air-conditioned fun for families. Instant confirmation in INR.",
        whatsappTopic: "the Sea Life & Madame Tussauds combo tickets",
        audience: "Best for Families with Kids",
        area: "city",
        ctaHeadline: "Two Indoor Bangkok Attractions, One Combo Ticket",
        companionIntro:
          "A fully air-conditioned combo at Siam Paragon \u2014 the best rainy-day or peak-heat plan for Indian families with children.",
        tips: [
          "Both attractions are inside Siam Paragon \u2014 no transfers needed between them.",
          "Allow around 2 hours for Sea Life and 1.5 hours for Madame Tussauds.",
          "BTS Siam station connects directly to the mall.",
          "Plenty of vegetarian food options in the Paragon food hall.",
        ],
      }}
      extraContentBeforeReviews={<SeaLifeMadameTussaudsSEO />}
    />;
};

export default SeaLifeMadameTussauds;
