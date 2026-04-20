import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import { JamesBondSeaCanoeSEO } from "@/components/activity-detail/PhuketActivitySEO";
import { jamesBondSeaCanoeFaqs } from "@/data/phuketActivityFaqs";
import jamesBond1 from "@/assets/james-bond-1.jpg";
import jamesBond2 from "@/assets/james-bond-2.jpg";
import jamesBond3 from "@/assets/james-bond-3.jpg";
import phuketLongtailBoat from "@/assets/phuket-longtail-boat-1.jpg";
import phuketKayaks from "@/assets/phuket-kayaks-beach-1.jpg";

const JamesBondIslandSeaCanoe = () => {
  const baseTourData = toursData["james-bond-island-sea-canoe"];
  
  const tourData = {
    ...baseTourData,
    faqs: jamesBondSeaCanoeFaqs,
    heroImages: [
      { src: jamesBond1, title: "James Bond Island Sea Canoe" },
      { src: jamesBond2, title: "Phang Nga Bay Canoeing" },
      { src: phuketLongtailBoat, title: "Long-tail Boat Adventure" }
    ],
    galleryImages: [
      { src: jamesBond3, alt: "Famous James Bond Island rock" },
      { src: phuketKayaks, alt: "Sea canoeing through caves" },
      { src: jamesBond1, alt: "Phang Nga Bay scenery" },
      { src: jamesBond2, alt: "Limestone karsts" }
    ]
  };
  
  return <TourBooking tourData={tourData} extraContentBeforeReviews={<JamesBondSeaCanoeSEO />} />;
};

export default JamesBondIslandSeaCanoe;
