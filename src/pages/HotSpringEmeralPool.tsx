import KrabiActivityTemplate from "@/components/activity-detail/KrabiActivityTemplate";
import KrabiTourItinerary from "@/components/activity-detail/KrabiTourItinerary";
import { krabiSheetContent } from "@/data/krabiSheetContent";
import { toursData } from "@/data/tourData";
import { HotSpringEmeraldPoolSEO } from "@/components/activity-detail/KrabiActivitySEO";
import { hotSpringEmeraldPoolFaqs } from "@/data/krabiActivityFaqs";
import emerald1 from "@/assets/krabi-doc/emerald-1.webp";
import emerald2 from "@/assets/krabi-doc/emerald-2.webp";
import krabiTemple from "@/assets/krabi-temple-woman-1.jpg";
import krabiIsland from "@/assets/krabi-island-viewpoint-1.jpg";

const HotSpringEmeralPool = () => {
  const base = toursData["hot-spring-emerald-pool"];
  if (!base) return null;
  const sheet = krabiSheetContent["hot-spring-emerald-pool"];
  const tourData = {
    ...base,
    heroImages: [
      { src: emerald1, title: "Tiger Cave Temple Viewpoint" },
      { src: emerald2, title: "Emerald Pool & Hot Springs" },
      { src: krabiTemple, title: "Temple Visit in Krabi" },
      { src: krabiIsland, title: "Krabi Jungle & Viewpoints" },
    ],
    faqs: hotSpringEmeraldPoolFaqs,
    description: { ...base.description, whatToExpect: sheet.whatToExpect },
    inclusions: sheet.inclusions,
  };

  return (
    <KrabiActivityTemplate
      tourData={tourData}
      contentAfterOverview={<KrabiTourItinerary tourKey="hot-spring-emerald-pool" />}
      config={{
        path: "/thailand/krabi/full-day-emerald-pool-hot-springs-tiger-temple-tour-with-transfer/",
        seoTitle: "Emerald Pool, Hot Springs & Tiger Cave Temple Tour Krabi | Yellodae",
        seoDescription:
          "Book the full-day Emerald Pool, Klong Thom Hot Springs and Tiger Cave Temple tour in Krabi with hotel transfers, INR pricing and Indian support.",
        seoImage: emerald1,
        whatsappTopic: "the Emerald Pool, Hot Springs & Tiger Cave Temple tour in Krabi",
        area: "jungle",
        audience: "Perfect for Families & Nature Lovers",
        companionIntro:
          "A full day inland Krabi — jungle pools, warm mineral springs and a temple climb. Here's everything Indian travellers usually ask before booking.",
        ctaHeadline: "Emerald Pool, Hot Springs & Tiger Cave Temple — One Easy Day",
        ctaImage: emerald2,
        tips: [
          "Wear quick-dry clothes — you'll swim at both the Emerald Pool and the hot springs.",
          "The Tiger Cave Temple summit is 1,237 steps; skip it if you have knee trouble.",
          "Carry a small towel and a dry bag for wet clothes on the ride back.",
        ],
      }}
      extraContentBeforeReviews={<HotSpringEmeraldPoolSEO />}
    />
  );
};

export default HotSpringEmeralPool;
