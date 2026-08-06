import BangkokActivityTemplate from "@/components/activity-detail/BangkokActivityTemplate";
import { ThreeTemplesGrandPalaceSEO } from "@/components/activity-detail/BangkokActivitySEO";
import { threeTemplesGrandPalaceFaqs } from "@/data/bangkokActivityFaqs";
import { toursData } from "@/data/tourData";
import bangkokTemple2 from "@/assets/bangkok-temple-2.jpg";
import bangkokTemple3 from "@/assets/bangkok-temple-3.jpg";
import bangkokBuddha1 from "@/assets/bangkok-buddha-1.webp";

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

  return <BangkokActivityTemplate
      tourData={tourData}
      config={{
        path: "/thailand/bangkok/three-temples-bangkok-city-tour-with-transfer/",
        seoTitle: "Three Temples Bangkok City Tour with Transfers | Book in INR",
        seoDescription:
          "Private Bangkok three-temple city tour covering Wat Traimit, Wat Pho and Wat Arun with hotel transfers. Instant confirmation, Indian support and INR pricing.",
        whatsappTopic: "the Bangkok three temples city tour",
        audience: "Great for Families & Culture Lovers",
        area: "riverside",
        ctaHeadline: "Bangkok's Famous Three Temples, Privately Guided",
        companionIntro:
          "A private, air-conditioned run through Wat Traimit, Wat Pho and Wat Arun \u2014 planned around Bangkok traffic so Indian families are not rushed.",
        tips: [
          "Ask your guide to start at Wat Traimit and finish at Wat Arun for the best light.",
          "Slip-on shoes make the repeated shrine entries far easier.",
          "Keep a bottle of water per person \u2014 shade is limited inside the complexes.",
          "Photography is allowed outdoors; avoid flash inside shrines.",
        ],
      }}
      extraContentBeforeReviews={<ThreeTemplesGrandPalaceSEO />}
    />;
};

export default BangkokThreeTemples;
