import BangkokActivityTemplate from "@/components/activity-detail/BangkokActivityTemplate";
import BangkokTourItinerary from "@/components/activity-detail/BangkokTourItinerary";
import { bangkokSheetContent } from "@/data/bangkokSheetContent";
import { AyutthayaTempleTourSEO } from "@/components/activity-detail/BangkokActivitySEO";
import { ayutthayaTempleTourFaqs } from "@/data/bangkokActivityFaqs";
import { toursData } from "@/data/tourData";
import bangkokTemple1 from "@/assets/bangkok-temple-1.jpg";
import bangkokTemple3 from "@/assets/bangkok-temple-3.jpg";
import ayutthayaRiverside1 from "@/assets/ayutthaya-riverside-1.webp";
import ayutthayaSunset1 from "@/assets/ayutthaya-sunset-1.jpg";

const AyutthayaTempleTour = () => {
  const tourData = {
    ...toursData["ayutthaya-temple-tour"],
    heroImages: [
      { src: ayutthayaRiverside1, title: "Ayutthaya Temple Tour" },
      { src: ayutthayaSunset1, title: "Ancient Temple Ruins" },
      { src: bangkokTemple1, title: "UNESCO World Heritage" }
    ],
    galleryImages: [
      { src: ayutthayaRiverside1, alt: "Ayutthaya riverside temple" },
      { src: ayutthayaSunset1, alt: "Golden pagoda at sunset" },
      { src: bangkokTemple1, alt: "Golden Pagoda temple" },
      { src: bangkokTemple3, alt: "Temple at twilight" }
    ],
    faqs: ayutthayaTempleTourFaqs,
  };
  const sheet = bangkokSheetContent["ayutthaya-temple-tour"];
  const pageTourData = {
    ...tourData,
    description: { ...tourData.description, whatToExpect: sheet.whatToExpect },
    inclusions: sheet.inclusions,
  };
  return <BangkokActivityTemplate
      tourData={pageTourData}
      contentAfterOverview={<BangkokTourItinerary tourKey="ayutthaya-temple-tour" />}
      config={{
        path: "/thailand/bangkok/ayutthaya-day-tour-from-bangkok/",
        seoTitle: "Ayutthaya Day Tour from Bangkok with Transfers | Book in INR",
        seoDescription:
          "Full-day Ayutthaya temple tour from Bangkok with hotel transfers. Visit UNESCO World Heritage ruins with a guide. Instant confirmation and INR pricing for Indians.",
        whatsappTopic: "the Ayutthaya day tour from Bangkok",
        audience: "Best for History Lovers & Families",
        area: "ayutthaya",
        ctaHeadline: "Step Into Siam's Ancient Capital, Ayutthaya",
        companionIntro:
          "A full day among UNESCO ruins 80 km from Bangkok \u2014 here's how Indian travellers should plan food, heat and clothing for the day.",
        tips: [
          "Leave by 7:30 AM; ruins are unshaded and brutal after noon.",
          "Carry two litres of water per person and electrolyte sachets.",
          "Do not climb on or pose in front of Buddha images \u2014 it is an offence.",
          "Pack an Indian snack box; veg options en route are limited.",
        ],
      }}
      extraContentBeforeReviews={<AyutthayaTempleTourSEO />}
    />;
};

export default AyutthayaTempleTour;
