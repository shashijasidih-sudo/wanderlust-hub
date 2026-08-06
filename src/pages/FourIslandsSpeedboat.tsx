import KrabiActivityTemplate from "@/components/activity-detail/KrabiActivityTemplate";
import { toursData } from "@/data/tourData";
import { fourIslandsLongtailFaqs } from "@/data/krabiActivityFaqs";
import four3 from "@/assets/krabi-doc/four-islands-3.webp";
import four1 from "@/assets/krabi-doc/four-islands-1.webp";
import four2 from "@/assets/krabi-doc/four-islands-2.webp";
import krabiSpeedboat from "@/assets/krabi-speedboat-1.jpg";

const FourIslandsSpeedboat = () => {
  const base = toursData["four-islands-speedboat"];
  if (!base) return null;
  const tourData = {
    ...base,
    heroImages: [
      { src: krabiSpeedboat, title: "4 Island Speedboat Tour" },
      { src: four3, title: "Poda Island Paradise" },
      { src: four1, title: "Phra Nang Cave Beach" },
      { src: four2, title: "Tub Island Sandbar" },
    ],
    faqs: base.faqs?.length ? base.faqs : fourIslandsLongtailFaqs,
  };

  return (
    <KrabiActivityTemplate
      tourData={tourData}
      config={{
        path: "/thailand/krabi/4-island-tour-speedboat-with-transfer/",
        seoTitle: "4 Island Speedboat Tour Krabi with Hotel Transfers | Yellodae",
        seoDescription:
          "Book the Krabi 4 Island speedboat tour — Poda, Chicken, Tub Island and Phra Nang Cave Beach with hotel transfers, INR pricing and Indian support.",
        seoImage: krabiSpeedboat,
        whatsappTopic: "the 4 Island speedboat tour in Krabi",
        area: "island",
        companionIntro:
          "The fastest way to cover Krabi's four signature islands — less travel time, more beach time.",
        ctaHeadline: "Krabi 4 Islands by Speedboat — Faster, More Beach Time",
        ctaImage: four1,
        tips: [
          "Speedboats are bumpy in choppy seas — motion-sickness tablets help.",
          "Waterproof pouch for phones; you board straight off the beach.",
          "Check whether your option includes the national park fee.",
        ],
      }}
    />
  );
};

export default FourIslandsSpeedboat;
