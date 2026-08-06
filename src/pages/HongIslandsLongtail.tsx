import KrabiActivityTemplate from "@/components/activity-detail/KrabiActivityTemplate";
import { toursData } from "@/data/tourData";
import { HongIslandsLongtailSEO } from "@/components/activity-detail/KrabiActivitySEO";
import { hongIslandsLongtailFaqs } from "@/data/krabiActivityFaqs";
import hong1 from "@/assets/krabi-doc/hong-1.jpg";
import hong2 from "@/assets/krabi-doc/hong-2.webp";
import hong3 from "@/assets/krabi-doc/hong-3.webp";
import krabiLongtail from "@/assets/krabi-longtail-boats-1.jpg";

const HongIslandsLongtail = () => {
  const base = toursData["hong-islands-longtail"];
  if (!base) return null;
  const tourData = {
    ...base,
    heroImages: [
      { src: hong1, title: "Hong Island Lagoon" },
      { src: hong2, title: "Pakbia Island Beach" },
      { src: hong3, title: "Lao Lading Paradise" },
      { src: krabiLongtail, title: "Longtail Boat Island Hopping" },
    ],
    faqs: hongIslandsLongtailFaqs,
  };

  return (
    <KrabiActivityTemplate
      tourData={tourData}
      config={{
        path: "/thailand/krabi/hong-island-tour-longtail-boat-with-transfer/",
        seoTitle: "Hong Island Tour Krabi by Longtail Boat with Transfers | Yellodae",
        seoDescription:
          "Book the Hong Island longtail boat tour from Krabi — hidden lagoon, Pakbia and Lao Lading beaches, hotel transfers, INR pricing and Indian support.",
        seoImage: hong1,
        whatsappTopic: "the Hong Island longtail boat tour in Krabi",
        area: "island",
        companionIntro:
          "Hong Island's hidden lagoon is the highlight of any Krabi trip. Here's what Indian travellers should know before the boat leaves.",
        ctaHeadline: "Sail to Hong Island's Hidden Lagoon by Longtail Boat",
        ctaImage: hong2,
        tips: [
          "The lagoon is best at high tide — we book the departure that matches the tide chart.",
          "Carry reef-safe sunscreen; there is very little shade on the beaches.",
          "Keep phones in a waterproof pouch — boarding is off the beach.",
        ],
      }}
      extraContentBeforeReviews={<HongIslandsLongtailSEO />}
    />
  );
};

export default HongIslandsLongtail;
