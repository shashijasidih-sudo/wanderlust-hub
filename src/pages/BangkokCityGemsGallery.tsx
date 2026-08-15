import BangkokActivityTemplate from "@/components/activity-detail/BangkokActivityTemplate";
import BangkokTourItinerary from "@/components/activity-detail/BangkokTourItinerary";
import { bangkokSheetContent } from "@/data/bangkokSheetContent";
import { CityGemsGallerySEO } from "@/components/activity-detail/BangkokActivitySEO";
import { cityGemsGalleryFaqs } from "@/data/bangkokActivityFaqs";
import { toursData } from "@/data/tourData";
import bangkokTemple1 from "@/assets/bangkok-temple-1.jpg";
import bangkokBuddha1 from "@/assets/bangkok-buddha-1.webp";
import bangkokTemple4 from "@/assets/bangkok-temple-4.jpg";

const BangkokCityGemsGallery = () => {
  const tourData = {
    ...toursData["bangkok-city-gems-gallery"],
    heroImages: [
      { src: bangkokTemple1, title: "Bangkok City and Temple Tours with Gems Gallery" },
      { src: bangkokBuddha1, title: "Golden Buddha Statues" },
      { src: bangkokTemple4, title: "Beautiful Thai Temple" }
    ],
    galleryImages: [
      { src: bangkokTemple1, alt: "Golden Pagoda at sunset" },
      { src: bangkokBuddha1, alt: "Golden Buddha statues" },
      { src: bangkokTemple4, alt: "Woman at Thai temple" }
    ],
    faqs: cityGemsGalleryFaqs,
  };
  const sheet = bangkokSheetContent["bangkok-city-gems-gallery"];
  const pageTourData = {
    ...tourData,
    description: { ...tourData.description, whatToExpect: sheet.whatToExpect },
    inclusions: sheet.inclusions,
  };
  return <BangkokActivityTemplate
      tourData={pageTourData}
      contentAfterOverview={<BangkokTourItinerary tourKey="bangkok-city-gems-gallery" />}
      config={{
        path: "/thailand/bangkok/gems-gallery-bangkok-tickets/",
        seoTitle: "Bangkok City & Temple Tour with Gems Gallery | Book in INR",
        seoDescription:
          "Book the Bangkok city and temple tour with a Gems Gallery visit. Air-conditioned half-day sightseeing with transfers, instant confirmation and INR pricing.",
        whatsappTopic: "the Bangkok city tour with Gems Gallery",
        audience: "Easy Half-Day Option",
        area: "city",
        ctaHeadline: "Temples, City Sights and Gems in One Easy Half Day",
        companionIntro:
          "A comfortable, air-conditioned introduction to Bangkok \u2014 good for Indian travellers with a short layover or a half-free day.",
        tips: [
          "The gallery stop is browse-only; there is no purchase obligation.",
          "Wear temple-appropriate clothing for the shrine stops.",
          "Book the morning slot if you have afternoon shopping planned.",
          "Silom and Sukhumvit Indian restaurants are close to the drop-off points.",
        ],
      }}
      extraContentBeforeReviews={<CityGemsGallerySEO />}
    />;
};

export default BangkokCityGemsGallery;
