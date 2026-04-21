import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import { JamesBondIslandKrabiSEO } from "@/components/activity-detail/KrabiActivitySEO";
import { jamesBondIslandKrabiFaqs } from "@/data/krabiActivityFaqs";
import jb1 from "@/assets/krabi-doc/james-bond-1.jpg";
import jb2 from "@/assets/krabi-doc/james-bond-2.jpg";
import jb3 from "@/assets/krabi-doc/james-bond-3.jpg";

const JamesBondIslandKrabi = () => {
  const base = toursData["james-bond-island-krabi"];
  const heroImages = [
    { src: jb1, title: "Phang Nga Bay Limestone Karsts" },
    { src: jb2, title: "James Bond Island" },
    { src: jb3, title: "Koh Panyee Floating Village" },
    ...(base?.heroImages || []),
  ];
  const galleryImages = [
    { src: jb1, alt: "Aerial view of Phang Nga Bay" },
    { src: jb2, alt: "James Bond Island rock pinnacle" },
    { src: jb3, alt: "Koh Panyee Muslim floating village" },
    ...(base?.galleryImages || []),
  ];
  const tourData = { ...base, heroImages, galleryImages, faqs: jamesBondIslandKrabiFaqs };

  return <TourBooking tourData={tourData} extraContentBeforeReviews={<JamesBondIslandKrabiSEO />} />;
};

export default JamesBondIslandKrabi;
