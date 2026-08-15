import BangkokActivityTemplate from "@/components/activity-detail/BangkokActivityTemplate";
import BangkokTourItinerary from "@/components/activity-detail/BangkokTourItinerary";
import { bangkokSheetContent } from "@/data/bangkokSheetContent";
import { AyutthayaSunsetCruiseSEO } from "@/components/activity-detail/BangkokActivitySEO";
import { ayutthayaSunsetCruiseFaqs } from "@/data/bangkokActivityFaqs";
import { toursData } from "@/data/tourData";
import ayutthayaRiverside1 from "@/assets/ayutthaya-riverside-1.webp";
import ayutthayaSunset1 from "@/assets/ayutthaya-sunset-1.jpg";
import watArunTwilight1 from "@/assets/wat-arun-twilight-1.jpg";

const AyutthayaSunsetCruise = () => {
  const tourData = {
    ...toursData["ayutthaya-sunset-cruise"],
    heroImages: [
      { src: ayutthayaRiverside1, title: "Ayutthaya Riverside Temple" },
      { src: ayutthayaSunset1, title: "Golden Pagoda at Sunset" },
      { src: watArunTwilight1, title: "Sunset Cruise Experience" }
    ],
    galleryImages: [
      { src: ayutthayaRiverside1, alt: "Ayutthaya riverside temple" },
      { src: ayutthayaSunset1, alt: "Golden pagoda sunset view" },
      { src: watArunTwilight1, alt: "Wat Arun twilight" }
    ],
    faqs: ayutthayaSunsetCruiseFaqs,
  };
  const sheet = bangkokSheetContent["ayutthaya-sunset-cruise"];
  const pageTourData = {
    ...tourData,
    description: { ...tourData.description, whatToExpect: sheet.whatToExpect },
    inclusions: sheet.inclusions,
  };
  return <BangkokActivityTemplate
      tourData={pageTourData}
      contentAfterOverview={<BangkokTourItinerary tourKey="ayutthaya-sunset-cruise" />}
      config={{
        path: "/thailand/bangkok/ayutthaya-sunset-river-cruise/",
        seoTitle: "Ayutthaya Tour with Sunset River Cruise from Bangkok | Book in INR",
        seoDescription:
          "Book the Ayutthaya day tour with a sunset Chao Phraya river cruise back to Bangkok. UNESCO temples, buffet cruise and transfers with instant confirmation in INR.",
        whatsappTopic: "the Ayutthaya tour with sunset river cruise",
        audience: "Great for Couples & Families",
        area: "ayutthaya",
        ctaHeadline: "Ancient Ayutthaya by Day, River Sunset by Evening",
        companionIntro:
          "Temples in the morning and a golden-hour cruise back to Bangkok \u2014 a full-day plan that Indian travellers consistently rate as the best value day trip.",
        tips: [
          "Carry a light shrug \u2014 the river breeze cools quickly after sunset.",
          "Confirm vegetarian or Jain meal preferences while booking the cruise.",
          "Keep your camera charged for the sunset stretch near Wat Arun.",
          "Expect a late return (around 9 PM) \u2014 plan a relaxed next morning.",
        ],
      }}
      extraContentBeforeReviews={<AyutthayaSunsetCruiseSEO />}
    />;
};

export default AyutthayaSunsetCruise;
