import KrabiActivityTemplate from "@/components/activity-detail/KrabiActivityTemplate";
import { toursData } from "@/data/tourData";
import { FourIslandsLongtailSEO } from "@/components/activity-detail/KrabiActivitySEO";
import { fourIslandsLongtailFaqs } from "@/data/krabiActivityFaqs";
import four2 from "@/assets/krabi-doc/four-islands-2.jpg";
import four3 from "@/assets/krabi-doc/four-islands-3.jpg";
import four1 from "@/assets/krabi-doc/four-islands-1.jpg";
import krabiBeach from "@/assets/krabi-beach-woman-1.jpg";

const FourIslandsLongtailNoParkFee = () => {
  const base = toursData["four-islands-longtail-no-park-fee"];
  if (!base) return null;
  const tourData = {
    ...base,
    heroImages: [
      { src: four2, title: "Tub Island Sandbar" },
      { src: four1, title: "Phra Nang Cave Beach" },
      { src: four3, title: "Poda Island Paradise" },
      { src: krabiBeach, title: "Krabi Island Beach Day" },
    ],
    faqs: fourIslandsLongtailFaqs,
  };

  return (
    <KrabiActivityTemplate
      tourData={tourData}
      config={{
        path: "/thailand/krabi/4-island-tour-longtail-boat-no-park-fee-with-transfer/",
        seoTitle: "4 Island Tour Krabi Longtail (No Park Fee) with Transfers | Yellodae",
        seoDescription:
          "Budget-friendly Krabi 4 Island longtail tour excluding national park fees — Poda, Chicken, Tub Island and Phra Nang with hotel transfers and INR pricing.",
        seoImage: four2,
        whatsappTopic: "the 4 Island longtail tour in Krabi (no park fee option)",
        area: "island",
        companionIntro:
          "Same classic 4 Island route at a lower upfront price — you simply pay the national park fee at the pier.",
        ctaHeadline: "Krabi 4 Islands — Lower Upfront Price, Same Route",
        ctaImage: four3,
        tips: [
          "Carry THB cash for the national park fee at the pier (adults ~THB 400).",
          "Morning departures get the Tub Island sandbar at low tide.",
          "Aqua shoes help on rocky snorkelling entries.",
        ],
      }}
      extraContentBeforeReviews={<FourIslandsLongtailSEO />}
    />
  );
};

export default FourIslandsLongtailNoParkFee;
