import BangkokActivityTemplate from "@/components/activity-detail/BangkokActivityTemplate";
import BangkokTourItinerary from "@/components/activity-detail/BangkokTourItinerary";
import { bangkokSheetContent } from "@/data/bangkokSheetContent";
import { DreamWorldSEO } from "@/components/activity-detail/BangkokActivitySEO";
import { dreamWorldFaqs } from "@/data/bangkokActivityFaqs";
import { toursData } from "@/data/tourData";
import bangkokTempleWoman1 from "@/assets/bangkok-temple-woman-1.jpg";
import bangkokBridgeDay1 from "@/assets/bangkok-bridge-day-1.jpg";
import bangkokPagodaSunset1 from "@/assets/bangkok-pagoda-sunset-1.jpg";

const DreamWorldBangkok = () => {
  const tourData = {
    ...toursData["dream-world-bangkok"],
    heroImages: [
      { src: bangkokTempleWoman1, title: "Dream World Bangkok" },
      { src: bangkokBridgeDay1, title: "Theme Park Adventure" },
      { src: bangkokPagodaSunset1, title: "Family Fun Day" }
    ],
    galleryImages: [
      { src: bangkokTempleWoman1, alt: "Dream World entrance" },
      { src: bangkokBridgeDay1, alt: "Bangkok cityscape" },
      { src: bangkokPagodaSunset1, alt: "Golden pagoda at sunset" }
    ],
    faqs: dreamWorldFaqs,
  };
  const sheet = bangkokSheetContent["dream-world-bangkok"];
  const pageTourData = {
    ...tourData,
    description: { ...tourData.description, whatToExpect: sheet.whatToExpect },
    inclusions: sheet.inclusions,
  };
  return <BangkokActivityTemplate
      tourData={pageTourData}
      contentAfterOverview={<BangkokTourItinerary tourKey="dream-world-bangkok" />}
      config={{
        path: "/thailand/bangkok/dream-world-bangkok-tickets/",
        seoTitle: "Dream World Bangkok Tickets with Lunch & Transfers | Book in INR",
        seoDescription:
          "Book Dream World Bangkok Super Visa tickets with lunch and hotel transfers. Rides, Snow Town and shows for families. Instant confirmation and INR pricing.",
        whatsappTopic: "Dream World Bangkok tickets",
        audience: "Best for Families & Kids",
        area: "outskirts",
        ctaHeadline: "A Full Day of Rides at Dream World Bangkok",
        companionIntro:
          "Bangkok's favourite family theme park \u2014 here's how Indian families should plan Snow Town, lunch and the ride order.",
        tips: [
          "Do Snow Town in the afternoon when the outdoor heat peaks.",
          "Jackets are provided at Snow Town, but carry socks for the kids.",
          "The Super Visa pass covers rides \u2014 check inclusions before adding extras.",
          "Vegetarian meals are available at the park food court on request.",
        ],
      }}
      extraContentBeforeReviews={<DreamWorldSEO />}
    />;
};

export default DreamWorldBangkok;