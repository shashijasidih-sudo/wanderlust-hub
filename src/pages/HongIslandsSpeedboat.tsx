import KrabiActivityTemplate from "@/components/activity-detail/KrabiActivityTemplate";
import KrabiTourItinerary from "@/components/activity-detail/KrabiTourItinerary";
import { krabiSheetContent } from "@/data/krabiSheetContent";
import { toursData } from "@/data/tourData";
import { hongIslandsLongtailFaqs } from "@/data/krabiActivityFaqs";
import hong2 from "@/assets/krabi-doc/hong-2.webp";
import hong3 from "@/assets/krabi-doc/hong-3.webp";
import hong1 from "@/assets/krabi-doc/hong-1.jpg";
import krabiSpeedboat from "@/assets/krabi-speedboat-1.jpg";

const HongIslandsSpeedboat = () => {
  const base = toursData["hong-islands-speedboat"];
  if (!base) return null;
  const sheet = krabiSheetContent["hong-islands-speedboat"];
  const tourData = {
    ...base,
    heroImages: [
      { src: krabiSpeedboat, title: "Hong Island Speedboat Tour" },
      { src: hong2, title: "Pakbia Island Beach" },
      { src: hong1, title: "Hong Island Lagoon" },
      { src: hong3, title: "Lao Lading Paradise" },
    ],
    faqs: base.faqs?.length ? base.faqs : hongIslandsLongtailFaqs,
    description: { ...base.description, whatToExpect: sheet.whatToExpect },
    inclusions: sheet.inclusions,
  };

  return (
    <KrabiActivityTemplate
      tourData={tourData}
      contentAfterOverview={<KrabiTourItinerary tourKey="hong-islands-speedboat" />}
      config={{
        path: "/thailand/krabi/hong-island-tour-speedboat-with-transfer/",
        seoTitle: "Hong Island Speedboat Tour Krabi with Hotel Transfers | Yellodae",
        seoDescription:
          "Book the Hong Island speedboat tour from Krabi — lagoon, viewpoint and Lao Lading beach with hotel transfers, INR pricing and Indian support.",
        seoImage: krabiSpeedboat,
        whatsappTopic: "the Hong Island speedboat tour in Krabi",
        area: "island",
        companionIntro:
          "The speedboat version covers more islands in less time — ideal if you have only one full day in Krabi.",
        ctaHeadline: "Hong Island by Speedboat — More Islands, More Beach Time",
        ctaImage: hong3,
        tips: [
          "Speedboats bounce in choppy seas — take motion-sickness tablets 30 minutes before.",
          "Sit mid-boat if you prefer a smoother ride.",
          "Bring cash for the Hong Island viewpoint climb and drinks on the beach.",
        ],
      }}
    />
  );
};

export default HongIslandsSpeedboat;
