import KrabiActivityTemplate from "@/components/activity-detail/KrabiActivityTemplate";
import { toursData } from "@/data/tourData";
import { JamesBondIslandKrabiSEO } from "@/components/activity-detail/KrabiActivitySEO";
import { jamesBondIslandKrabiFaqs } from "@/data/krabiActivityFaqs";
import jb1 from "@/assets/krabi-doc/james-bond-1.jpg";
import jb2 from "@/assets/krabi-doc/james-bond-2.jpg";
import jb3 from "@/assets/krabi-doc/james-bond-3.jpg";
import krabiTourBoat from "@/assets/krabi-tour-boat-1.jpg";

const JamesBondIslandKrabi = () => {
  const base = toursData["james-bond-island-krabi"];
  if (!base) return null;
  const tourData = {
    ...base,
    heroImages: [
      { src: jb1, title: "Phang Nga Bay Limestone Karsts" },
      { src: jb2, title: "James Bond Island" },
      { src: jb3, title: "Koh Panyee Floating Village" },
      { src: krabiTourBoat, title: "Krabi Day Tour Boat" },
    ],
    faqs: jamesBondIslandKrabiFaqs,
  };

  return (
    <KrabiActivityTemplate
      tourData={tourData}
      config={{
        path: "/thailand/krabi/james-bond-island/",
        seoTitle: "James Bond Island Tour from Krabi with Hotel Transfers | Yellodae",
        seoDescription:
          "Book the James Bond Island tour from Krabi — Phang Nga Bay karsts, Koh Panyee floating village, canoeing, hotel transfers and INR pricing.",
        seoImage: jb1,
        whatsappTopic: "the James Bond Island tour from Krabi",
        area: "island",
        companionIntro:
          "Phang Nga Bay's karsts, sea-cave canoeing and lunch at the Koh Panyee floating village — a long but rewarding day from Krabi.",
        ctaHeadline: "See Phang Nga Bay & James Bond Island from Krabi",
        ctaImage: jb2,
        tips: [
          "It's a long day — pickups start early, so plan a light night before.",
          "Koh Panyee is a Muslim village; dress modestly for the lunch stop.",
          "Canoe guides expect a small tip (THB 100–200 per canoe).",
        ],
      }}
      extraContentBeforeReviews={<JamesBondIslandKrabiSEO />}
    />
  );
};

export default JamesBondIslandKrabi;
