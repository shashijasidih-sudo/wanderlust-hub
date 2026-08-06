import PhuketActivityTemplate from "@/components/activity-detail/PhuketActivityTemplate";
import { JamesBondSeaCanoeSEO } from "@/components/activity-detail/PhuketActivitySEO";
import { jamesBondSeaCanoeFaqs } from "@/data/phuketActivityFaqs";
import { toursData } from "@/data/tourData";
import jamesBond1 from "@/assets/james-bond-1.webp";
import jamesBond2 from "@/assets/james-bond-2.jpg";
import jamesBond3 from "@/assets/james-bond-3.webp";
import phuketKayaks from "@/assets/phuket-kayaks-beach-1.jpg";
import phuketLongtailBoat from "@/assets/phuket-longtail-boat-1.jpg";

const JamesBondIslandSeaCanoe = () => {
  const baseTourData = toursData["james-bond-island-sea-canoe"];
  if (!baseTourData) return null;
  const tourData = {
    ...baseTourData,
    faqs: jamesBondSeaCanoeFaqs,
    heroImages: [
      { src: jamesBond1, title: "James Bond Island Sea Canoe Tour" },
      { src: jamesBond2, title: "Phang Nga Bay Canoeing" },
      { src: phuketLongtailBoat, title: "Long-tail Boat Cruise" },
      { src: jamesBond3, title: "Hidden Sea Caves" },
    ],
    galleryImages: [
      { src: jamesBond3, alt: "James Bond Island rock" },
      { src: phuketKayaks, alt: "Sea canoeing through caves" },
      { src: jamesBond1, alt: "Phang Nga Bay scenery" },
      { src: jamesBond2, alt: "Limestone karsts" },
    ],
  };
  return (
    <PhuketActivityTemplate
      tourData={tourData}
      config={{
        path: "/thailand/phuket/james-bond-island-sea-canoe-tour-with-transfer/",
        seoTitle: "James Bond Island Sea Canoe Tour from Phuket | Book in INR",
        seoDescription: "Book the James Bond Island sea canoe tour by long-tail boat from Phuket with hotel transfers, cave canoeing and lunch. Instant confirmation in INR.",
        whatsappTopic: "the James Bond Island sea canoe tour",
        audience: "Great for Families & Nature Lovers",
        area: "island",
        ctaHeadline: "Canoe Through Hidden Caves in Phang Nga Bay",
        companionIntro: "A slower, scenic version of the Phang Nga day trip — ideal for families and non-swimmers.",
        tips: [
          "Guides paddle the canoes — no experience needed.",
          "Non-swimmers are safe with life jackets on board.",
          "Long-tail boats are open — carry a hat and sunscreen.",
          "Cave entries depend on tide timings.",
        ],
      }}
      extraContentBeforeReviews={<JamesBondSeaCanoeSEO />}
    />
  );
};

export default JamesBondIslandSeaCanoe;
