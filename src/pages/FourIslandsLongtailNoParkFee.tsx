import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import { FourIslandsLongtailSEO } from "@/components/activity-detail/KrabiActivitySEO";
import { fourIslandsLongtailFaqs } from "@/data/krabiActivityFaqs";
import four1 from "@/assets/krabi-doc/four-islands-1.jpg";
import four2 from "@/assets/krabi-doc/four-islands-2.jpg";
import four3 from "@/assets/krabi-doc/four-islands-3.jpg";

const FourIslandsLongtailNoParkFee = () => {
  const base = toursData["four-islands-longtail-no-park-fee"];
  const heroImages = [
    { src: four1, title: "Phra Nang Cave Beach" },
    { src: four2, title: "Tub Island Sandbar" },
    { src: four3, title: "Poda Island Paradise" },
    ...(base?.heroImages || []),
  ];
  const galleryImages = [
    { src: four1, alt: "Tropical beach with limestone cliffs" },
    { src: four2, alt: "Tub Island sandbar walk" },
    { src: four3, alt: "Chicken Island snorkeling" },
    ...(base?.galleryImages || []),
  ];
  const tourData = { ...base, heroImages, galleryImages, faqs: fourIslandsLongtailFaqs };

  return <TourBooking tourData={tourData} extraContentBeforeReviews={<FourIslandsLongtailSEO />} />;
};

export default FourIslandsLongtailNoParkFee;
