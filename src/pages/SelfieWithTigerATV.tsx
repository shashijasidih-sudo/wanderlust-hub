import PhuketActivityTemplate from "@/components/activity-detail/PhuketActivityTemplate";
import { toursData } from "@/data/tourData";
import phuketAtv from "@/assets/phuket-atv-1.jpg";
import phuketTiger from "@/assets/phuket-tiger-1.jpg";
import tiger1 from "@/assets/tiger-1.jpg";
import phuketIslandView from "@/assets/phuket-island-viewpoint-1.jpg";

const SelfieWithTigerATV = () => {
  const baseTourData = toursData["selfie-tigers-atv"];
  if (!baseTourData) return null;
  const tourData = {
    ...baseTourData,
    heroImages: [
      { src: phuketTiger, title: "Tiger Kingdom & ATV Experience" },
      { src: phuketAtv, title: "ATV Jungle Adventure" },
      { src: tiger1, title: "Tiger Photo Session" },
      { src: phuketIslandView, title: "Big Buddha Viewpoint" },
    ],
    galleryImages: [
      { src: phuketAtv, alt: "ATV off-road adventure" },
      { src: phuketTiger, alt: "Tiger selfie experience" },
      { src: tiger1, alt: "Majestic tiger encounter" },
      { src: phuketIslandView, alt: "Jungle trail views" },
    ],
  };
  return (
    <PhuketActivityTemplate
      tourData={tourData}
      config={{
        path: "/thailand/phuket/tiger-kingdom-atv-experience-phuket-with-transfer/",
        seoTitle: "Tiger Kingdom & ATV Experience Phuket with Transfers | INR",
        seoDescription: "Book Tiger Kingdom Phuket with an ATV jungle ride and hotel transfers. Tiger photo session plus off-road adventure. Instant confirmation in INR.",
        whatsappTopic: "Tiger Kingdom with ATV experience in Phuket",
        audience: "Great for Couples & Adventure Lovers",
        area: "jungle",
        ctaHeadline: "Tigers, ATVs & Jungle Trails in One Half Day",
        companionIntro: "Adventure plus photos in a single half day — age limits, clothing and safety notes for Indian travellers.",
        tips: [
          "Closed shoes are mandatory for the ATV ride.",
          "Carry sunglasses — the tracks get dusty.",
          "Follow handler instructions strictly inside tiger enclosures.",
          "Book the morning slot to avoid afternoon rain.",
        ],
      }}
    />
  );
};

export default SelfieWithTigerATV;
