import TourBooking from "@/components/TourBooking";
import { GoldenBuddhaMarbleTempleSEO } from "@/components/activity-detail/BangkokActivitySEO";
import { goldenBuddhaMarbleTempleFaqs } from "@/data/bangkokActivityFaqs";
import { toursData } from "@/data/tourData";
import bangkokBuddha1 from "@/assets/bangkok-buddha-1.jpg";
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
  return <TourBooking tourData={tourData} extraContentBeforeReviews={<GoldenBuddhaMarbleTempleSEO />} />;
};

export default BangkokGoldenMarbleBuddha;
