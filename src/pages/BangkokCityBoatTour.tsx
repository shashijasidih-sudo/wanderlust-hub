import BangkokActivityTemplate from "@/components/activity-detail/BangkokActivityTemplate";
import BangkokTourItinerary from "@/components/activity-detail/BangkokTourItinerary";
import { bangkokSheetContent } from "@/data/bangkokSheetContent";
import { BangkokCityBoatTourSEO } from "@/components/activity-detail/BangkokActivitySEO";
import { bangkokCityBoatTourFaqs } from "@/data/bangkokActivityFaqs";
import { toursData } from "@/data/tourData";
import bangkokCity1 from "@/assets/bangkok-city-1.jpg";
import bangkokTemple2 from "@/assets/bangkok-temple-2.jpg";
import bangkokCity2 from "@/assets/bangkok-city-2.jpg";

const BangkokCityBoatTour = () => {
  const baseTourData = toursData["bangkok-city-boat-tour"];

  if (!baseTourData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Tour Configuration Error</h1>
          <p className="text-muted-foreground">Tour data not found.</p>
        </div>
      </div>
    );
  }

  const tourData = {
    ...baseTourData,
    heroImages: [
      { src: bangkokCity1, title: "Bangkok City Tour by Boat" },
      { src: bangkokTemple2, title: "Chao Phraya River Cruise" },
      { src: bangkokCity2, title: "Canal Exploration" }
    ],
    galleryImages: [
      { src: bangkokCity1, alt: "Bangkok cityscape with river" },
      { src: bangkokTemple2, alt: "Wat Arun temple at night" },
      { src: bangkokCity2, alt: "Bangkok highway and cityscape" }
    ],
    faqs: bangkokCityBoatTourFaqs,
  };

  const sheet = bangkokSheetContent["bangkok-city-boat-tour"];
  const pageTourData = {
    ...tourData,
    description: { ...tourData.description, whatToExpect: sheet.whatToExpect },
    inclusions: sheet.inclusions,
  };
  return <BangkokActivityTemplate
      tourData={pageTourData}
      contentAfterOverview={<BangkokTourItinerary tourKey="bangkok-city-boat-tour" />}
      config={{
        path: "/thailand/bangkok/chao-phraya-river-boat-bangkok-city-tour/",
        seoTitle: "Chao Phraya River Boat Bangkok City Tour | Book in INR",
        seoDescription:
          "Book the Chao Phraya river boat Bangkok city tour \u2014 canal cruise past riverside temples and local communities. Instant confirmation, Indian support, INR pricing.",
        whatsappTopic: "the Chao Phraya river boat city tour",
        audience: "Relaxed Sightseeing for All Ages",
        area: "riverside",
        ctaHeadline: "See Bangkok the Way Locals Do \u2014 From the River",
        companionIntro:
          "A slow, shaded look at Bangkok's riverside life \u2014 an easy option for Indian families travelling with elders or young children.",
        tips: [
          "Sit on the shaded side of the boat during midday departures.",
          "Carry a cap and sunscreen \u2014 reflection off the water is strong.",
          "Keep phones secured with a strap while shooting from the deck.",
          "Combine with a Wat Arun stop for the best photos.",
        ],
      }}
      extraContentBeforeReviews={<BangkokCityBoatTourSEO />}
    />;
};

export default BangkokCityBoatTour;
