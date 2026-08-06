import KrabiActivityTemplate from "@/components/activity-detail/KrabiActivityTemplate";
import { toursData } from "@/data/tourData";
import { SevenIslandsLongtailSEO } from "@/components/activity-detail/KrabiActivitySEO";
import { sevenIslandsLongtailFaqs } from "@/data/krabiActivityFaqs";
import seven1 from "@/assets/krabi-doc/seven-1.webp";
import seven2 from "@/assets/krabi-doc/seven-2.webp";
import seven3 from "@/assets/krabi-doc/seven-3.webp";
import krabiSailboat from "@/assets/krabi-sailboat-1.jpg";

const SevenIslandsLongtail = () => {
  const base = toursData["seven-islands-longtail"];
  if (!base) return null;
  const tourData = {
    ...base,
    heroImages: [
      { src: seven1, title: "Sunset Long-tailed Boat" },
      { src: seven2, title: "Krabi Limestone Islands" },
      { src: seven3, title: "BBQ Beach Dinner" },
      { src: krabiSailboat, title: "Andaman Sunset Cruise" },
    ],
    faqs: sevenIslandsLongtailFaqs,
  };

  return (
    <KrabiActivityTemplate
      tourData={tourData}
      config={{
        path: "/thailand/krabi/7-islands-tour-longtail-boat-with-transfer/",
        seoTitle: "7 Islands Sunset Tour Krabi by Longtail Boat with Transfers | Yellodae",
        seoDescription:
          "Book the Krabi 7 Islands sunset longtail tour with BBQ dinner, plankton swim, hotel transfers, INR pricing and Indian traveller support.",
        seoImage: seven1,
        whatsappTopic: "the 7 Islands sunset longtail boat tour in Krabi",
        area: "island",
        audience: "Perfect for Couples & Families",
        companionIntro:
          "A sunset cruise across seven islands with a beach BBQ — the most romantic evening in Krabi. Here's what to plan for.",
        ctaHeadline: "Watch the Andaman Sunset Across 7 Krabi Islands",
        ctaImage: seven3,
        tips: [
          "Carry a light jacket — it gets breezy on the water after sunset.",
          "The plankton swim is best on darker, moonless nights.",
          "Tell us in advance for pure-veg or Jain BBQ plates.",
        ],
      }}
      extraContentBeforeReviews={<SevenIslandsLongtailSEO />}
    />
  );
};

export default SevenIslandsLongtail;
