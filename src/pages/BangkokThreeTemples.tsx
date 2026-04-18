import TourBooking from "@/components/TourBooking";
import { ThreeTemplesGrandPalaceSEO } from "@/components/activity-detail/BangkokActivitySEO";
import { threeTemplesGrandPalaceFaqs } from "@/data/bangkokActivityFaqs";
import { toursData } from "@/data/tourData";
import bangkokTemple2 from "@/assets/bangkok-temple-2.jpg";
import bangkokTemple3 from "@/assets/bangkok-temple-3.jpg";
import bangkokBuddha1 from "@/assets/bangkok-buddha-1.jpg";

const BangkokThreeTemples = () => {
  const baseTourData = toursData["bangkok-three-temples"];

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
      { src: bangkokTemple2, title: "Wat Arun Temple at Night" },
      { src: bangkokTemple3, title: "Wat Arun at Twilight" },
      { src: bangkokBuddha1, title: "Golden Buddha Statues" }
    ],
    galleryImages: [
      { src: bangkokTemple2, alt: "Wat Arun temple illuminated" },
      { src: bangkokTemple3, alt: "Wat Arun at sunset" },
      { src: bangkokBuddha1, alt: "Row of Buddha statues" }
    ],
    faqs: threeTemplesGrandPalaceFaqs,
  };

  return <TourBooking tourData={tourData} extraContentBeforeReviews={<ThreeTemplesGrandPalaceSEO />} />;
};

export default BangkokThreeTemples;
