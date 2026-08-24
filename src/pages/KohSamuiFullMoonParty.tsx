import ThaiCityActivityTemplate, { ThaiActivityConfig } from "@/components/activity-detail/ThaiCityActivityTemplate";
import { toursData } from "@/data/tourData";
import KohSamuiTourItinerary from "@/components/activity-detail/KohSamuiTourItinerary";
import { kohSamuiSheetContent } from "@/data/kohSamuiSheetContent";
import { kohSamuiFullMoonPartyFaqs } from "@/data/kohSamuiActivityFaqs";
import fullMoon from "@/assets/koh-samui-full-moon-party-1.jpg";
import beach from "@/assets/koh-samui-beach-1.webp";
import nightlife from "@/assets/pattaya-nightlife-1.webp";
import cityImg from "@/assets/city-kohsamui.jpg";

const config: ThaiActivityConfig = {
  path: "/thailand/koh-samui/full-moon-party-koh-phangan-with-transfer/",
  city: "koh-samui",
  area: "party",
  seoTitle: "Full Moon Party Koh Phangan Tickets with Transfer from Koh Samui | Yellodae",
  seoDescription: "Book the Full Moon Party Koh Phangan with return boat and hotel transfers from Koh Samui. 18+ only, instant confirmation, INR pricing and Indian support.",
  whatsappTopic: "the Full Moon Party Koh Phangan package with transfers",
  audience: "Adults Only (18+)",
  companionIntro:
    "The Full Moon Party is an all-night beach party on Koh Phangan with a boat transfer from Koh Samui. Here is the practical Indian traveller guide to timings, cash, safety and getting back.",
  ctaHeadline: "Book Your Full Moon Party Package Today",
  tips: [
    "Carry cash — most Haad Rin bars and beach stalls do not accept cards.",
    "Wear closed or sturdy sandals; the sand has broken glass late at night.",
    "Keep your phone in a waterproof pouch and stay with your group.",
    "The party peaks between 1 AM and 4 AM; return boats run at sunrise.",
  ],
};

const TOUR_KEY = "koh-samui-full-moon-party-with-transfer";

const KohSamuiFullMoonParty = () => {
  const base = toursData[TOUR_KEY];
  const sheet = kohSamuiSheetContent[TOUR_KEY];
  const tourData = {
    ...base,
    heroImages: [
      { src: fullMoon, title: "Full Moon Party Haad Rin Beach" },
      { src: beach, title: "Koh Samui Beach" },
      { src: nightlife, title: "Beach Party Vibes" },
      { src: cityImg, title: "Koh Samui Island" },
    ],
    galleryImages: [
      { src: fullMoon, alt: "Full Moon Party crowd dancing under the moon" },
      { src: beach, alt: "Koh Samui beach scene" },
      { src: nightlife, alt: "Beach nightlife party" },
    ],
    faqs: kohSamuiFullMoonPartyFaqs,
    description: { ...base.description, whatToExpect: sheet.whatToExpect },
    ...(sheet.inclusions.length ? { inclusions: sheet.inclusions } : {}),
  };
  return (
    <ThaiCityActivityTemplate
      tourData={tourData}
      config={config}
      contentAfterOverview={<KohSamuiTourItinerary tourKey={TOUR_KEY} />}
    />
  );
};

export default KohSamuiFullMoonParty;
