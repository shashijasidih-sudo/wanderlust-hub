import KrabiActivityTemplate from "@/components/activity-detail/KrabiActivityTemplate";
import { toursData } from "@/data/tourData";
import { FourIslandsLongtailSEO } from "@/components/activity-detail/KrabiActivitySEO";
import { fourIslandsLongtailFaqs } from "@/data/krabiActivityFaqs";
import four1 from "@/assets/krabi-doc/four-islands-1.jpg";
import four2 from "@/assets/krabi-doc/four-islands-2.jpg";
import four3 from "@/assets/krabi-doc/four-islands-3.jpg";
import krabiKayaks from "@/assets/krabi-kayaks-beach-1.jpg";

const FourIslandsLongtail = () => {
  const base = toursData["four-islands-longtail"];
  if (!base) return null;
  const tourData = {
    ...base,
    heroImages: [
      { src: four1, title: "Phra Nang Cave Beach" },
      { src: four2, title: "Tub Island Sandbar" },
      { src: four3, title: "Poda Island Paradise" },
      { src: krabiKayaks, title: "Krabi Beach Day" },
    ],
    faqs: fourIslandsLongtailFaqs,
  };

  return (
    <KrabiActivityTemplate
      tourData={tourData}
      config={{
        path: "/thailand/krabi/4-island-tour-longtail-boat-with-transfer/",
        seoTitle: "4 Island Tour Krabi by Longtail Boat with Hotel Transfers | Yellodae",
        seoDescription:
          "Book the Krabi 4 Island longtail boat tour — Poda, Chicken, Tub Island and Phra Nang Cave Beach with transfers, INR pricing and Indian support.",
        seoImage: four1,
        whatsappTopic: "the 4 Island longtail boat tour in Krabi",
        area: "island",
        companionIntro:
          "Krabi's signature island day — four stops, snorkelling and the famous Tub Island sandbar. Here's the Indian traveller checklist.",
        ctaHeadline: "Poda, Chicken, Tub & Phra Nang — Krabi's Classic 4 Islands",
        ctaImage: four2,
        tips: [
          "The Tub Island sandbar only appears at low tide — morning departures see it best.",
          "National park fees are collected at the pier unless your option includes them.",
          "Aqua shoes help on the rocky entry at Chicken Island.",
        ],
      }}
      extraContentBeforeReviews={<FourIslandsLongtailSEO />}
    />
  );
};

export default FourIslandsLongtail;
