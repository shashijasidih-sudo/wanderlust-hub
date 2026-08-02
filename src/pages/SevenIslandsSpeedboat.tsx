import KrabiActivityTemplate from "@/components/activity-detail/KrabiActivityTemplate";
import { toursData } from "@/data/tourData";
import { sevenIslandsLongtailFaqs } from "@/data/krabiActivityFaqs";
import seven2 from "@/assets/krabi-doc/seven-2.jpg";
import seven3 from "@/assets/krabi-doc/seven-3.jpg";
import seven1 from "@/assets/krabi-doc/seven-1.jpg";
import krabiBoatTour from "@/assets/krabi-boat-tour-1.jpg";

const SevenIslandsSpeedboat = () => {
  const base = toursData["seven-islands-speedboat"];
  if (!base) return null;
  const tourData = {
    ...base,
    heroImages: [
      { src: krabiBoatTour, title: "7 Islands Speedboat Tour" },
      { src: seven2, title: "Krabi Limestone Islands" },
      { src: seven1, title: "Sunset Over the Andaman" },
      { src: seven3, title: "BBQ Beach Dinner" },
    ],
    faqs: base.faqs?.length ? base.faqs : sevenIslandsLongtailFaqs,
  };

  return (
    <KrabiActivityTemplate
      tourData={tourData}
      config={{
        path: "/thailand/krabi/7-islands-tour-speedboat-with-transfer/",
        seoTitle: "7 Islands Sunset Speedboat Tour Krabi with Transfers | Yellodae",
        seoDescription:
          "Book the Krabi 7 Islands sunset speedboat tour — snorkelling, beach BBQ and plankton swim with hotel transfers, INR pricing and Indian support.",
        seoImage: krabiBoatTour,
        whatsappTopic: "the 7 Islands sunset speedboat tour in Krabi",
        area: "island",
        audience: "Perfect for Couples & Families",
        companionIntro:
          "Seven islands, snorkelling stops and a sunset BBQ — the speedboat version fits it all into one evening.",
        ctaHeadline: "7 Islands by Speedboat — Snorkel, Sunset & Beach BBQ",
        ctaImage: seven2,
        tips: [
          "Bring a change of clothes; you'll be wet before dinner.",
          "Waterproof pouch recommended for phones on the speedboat.",
          "Let us know about veg or Jain meals when you book.",
        ],
      }}
    />
  );
};

export default SevenIslandsSpeedboat;
