import BangkokActivityTemplate from "@/components/activity-detail/BangkokActivityTemplate";
import BangkokTourItinerary from "@/components/activity-detail/BangkokTourItinerary";
import { bangkokSheetContent } from "@/data/bangkokSheetContent";
import { GoldenBuddhaMarbleTempleSEO } from "@/components/activity-detail/BangkokActivitySEO";
import { goldenBuddhaMarbleTempleFaqs } from "@/data/bangkokActivityFaqs";
import { toursData } from "@/data/tourData";
import bangkokBuddha1 from "@/assets/bangkok-buddha-1.webp";
import bangkokTemple1 from "@/assets/bangkok-temple-1.jpg";
import bangkokTemple4 from "@/assets/bangkok-temple-4.jpg";

const BangkokGoldenMarbleBuddha = () => {
  const tourData = {
    ...toursData["bangkok-golden-marble-buddha"],
    heroImages: [
      { src: bangkokBuddha1, title: "Golden Buddha Temple Tour" },
      { src: bangkokTemple1, title: "Marble Temple" },
      { src: bangkokTemple4, title: "Bangkok Temples" }
    ],
    galleryImages: [
      { src: bangkokBuddha1, alt: "Golden Buddha" },
      { src: bangkokTemple1, alt: "Marble Temple" },
      { src: bangkokTemple4, alt: "Temple architecture" }
    ],
    faqs: goldenBuddhaMarbleTempleFaqs,
  };
  const sheet = bangkokSheetContent["bangkok-golden-marble-buddha"];
  const pageTourData = {
    ...tourData,
    description: { ...tourData.description, whatToExpect: sheet.whatToExpect },
    inclusions: sheet.inclusions,
  };
  return <BangkokActivityTemplate
      tourData={pageTourData}
      contentAfterOverview={<BangkokTourItinerary tourKey="bangkok-golden-marble-buddha" />}
      config={{
        path: "/thailand/bangkok/golden-buddha-marble-temple-bangkok-city-tour/",
        seoTitle: "Golden Buddha & Marble Temple Bangkok City Tour | Book in INR",
        seoDescription:
          "Half-day Bangkok city tour covering the Golden Buddha, Marble Temple, Reclining Buddha and Gems Gallery with transfers. Instant confirmation and INR pricing.",
        whatsappTopic: "the Golden Buddha & Marble Temple city tour",
        audience: "Best for Half-Day Sightseeing",
        area: "city",
        ctaHeadline: "Bangkok's Golden Buddha & Marble Temple in Half a Day",
        companionIntro:
          "A compact half-day city loop that suits Indian families with a tight itinerary \u2014 temples first, air-conditioned gallery stop after.",
        tips: [
          "Morning departures are cooler and far less crowded.",
          "Modest clothing is mandatory at all three temples.",
          "The Gems Gallery stop is optional \u2014 you are never obliged to buy.",
          "Keep 90 minutes free afterwards for lunch in Silom or Sukhumvit.",
        ],
      }}
      extraContentBeforeReviews={<GoldenBuddhaMarbleTempleSEO />}
    />;
};

export default BangkokGoldenMarbleBuddha;
