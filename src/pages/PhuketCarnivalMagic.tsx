import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import { PhuketFantaSeaSEO } from "@/components/activity-detail/PhuketActivitySEO";
import { phuketFantaSeaFaqs } from "@/data/phuketActivityFaqs";
import phuketCarnival1 from "@/assets/phuket-carnival-1.jpg";
import phuketCarnival2 from "@/assets/phuket-carnival-2.jpg";
import phuketCarnival3 from "@/assets/phuket-carnival-3.jpg";

const PhuketCarnivalMagic = () => {
  const baseTourData = toursData["phuket-carnival-magic"];
  
  const tourData = {
    ...baseTourData,
    faqs: phuketFantaSeaFaqs,
    heroImages: [
      { src: phuketCarnival1, title: "Carnival Magic Theme Park" },
      { src: phuketCarnival2, title: "Carnival Parade Show" },
      { src: phuketCarnival3, title: "Kingdom of Lights" }
    ],
    galleryImages: [
      { src: phuketCarnival1, alt: "Carnival parade floats" },
      { src: phuketCarnival2, alt: "Night carnival rides" },
      { src: phuketCarnival3, alt: "Grand carnival parade" },
      { src: phuketCarnival1, alt: "Evening carnival lights" }
    ]
  };
  
  return <TourBooking tourData={tourData} extraContentBeforeReviews={<PhuketFantaSeaSEO />} />;
};

export default PhuketCarnivalMagic;
