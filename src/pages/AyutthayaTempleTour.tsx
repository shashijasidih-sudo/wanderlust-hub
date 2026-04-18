import TourBooking from "@/components/TourBooking";
import { AyutthayaTempleTourSEO } from "@/components/activity-detail/BangkokActivitySEO";
import { ayutthayaTempleTourFaqs } from "@/data/bangkokActivityFaqs";
import { toursData } from "@/data/tourData";
import bangkokTemple1 from "@/assets/bangkok-temple-1.jpg";
import bangkokTemple3 from "@/assets/bangkok-temple-3.jpg";
import ayutthayaRiverside1 from "@/assets/ayutthaya-riverside-1.jpg";
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
  return <TourBooking tourData={tourData} extraContentBeforeReviews={<AyutthayaTempleTourSEO />} />;
};

export default AyutthayaTempleTour;
