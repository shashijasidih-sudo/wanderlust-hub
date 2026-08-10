import PhuketActivityTemplate from "@/components/activity-detail/PhuketActivityTemplate";
import PhuketTourItinerary from "@/components/activity-detail/PhuketTourItinerary";
import { phuketSheetContent } from "@/data/phuketSheetContent";
import { PhuketCityTourSEO } from "@/components/activity-detail/PhuketActivitySEO";
import { phuketCityTourFaqs } from "@/data/phuketActivityFaqs";
import { toursData } from "@/data/tourData";
import phuketNightMarket from "@/assets/phuket-night-market-1.webp";
import phuketIslandView from "@/assets/phuket-island-viewpoint-1.jpg";
import phuketWatChalong from "@/assets/phuket-wat-chalong-1.webp";
import phuketBigBuddha from "@/assets/phuket-big-buddha-1.webp";

const PhuketCityNightMarket = () => {
  const baseTourData = toursData["phuket-city-night-market"];
  if (!baseTourData) return null;
  const tourData = {
    ...baseTourData,
    faqs: phuketCityTourFaqs,
    heroImages: [
      { src: phuketNightMarket, title: "Phuket City & Night Market Tour" },
      { src: phuketIslandView, title: "Big Buddha Sunset Views" },
      { src: phuketWatChalong, title: "Chalong Temple" },
      { src: phuketBigBuddha, title: "Big Buddha Phuket" },
    ],
    galleryImages: [
      { src: phuketNightMarket, alt: "Night market stalls and lanterns" },
      { src: phuketWatChalong, alt: "Chalong Temple in Phuket" },
      { src: phuketIslandView, alt: "Big Buddha landmark" },
      { src: phuketBigBuddha, alt: "Big Buddha viewpoint" },
    ],
  };
  const sheet = phuketSheetContent["phuket-city-night-market"];
  const pageTourData = {
    ...tourData,
    description: { ...tourData.description, whatToExpect: sheet.whatToExpect },
    inclusions: sheet.inclusions,
  };
  return (
    <PhuketActivityTemplate
      tourData={pageTourData}
      contentAfterOverview={<PhuketTourItinerary tourKey="phuket-city-night-market" />}
      config={{
        path: "/thailand/phuket/phuket-night-market-tour-with-transfer/",
        seoTitle: "Phuket City & Night Market Tour with Transfers | Book in INR",
        seoDescription: "Book the Phuket city tour with night market and hotel transfers. Big Buddha, Old Town and street food. Instant confirmation with INR pricing.",
        whatsappTopic: "the Phuket city and night market tour",
        audience: "Great for Couples & Food Lovers",
        area: "city",
        ctaHeadline: "Big Buddha, Old Town & Phuket's Best Night Market",
        companionIntro: "The best value evening in Phuket — where to eat veg, what to buy and how to bargain at the market.",
        tips: [
          "Carry small THB notes — most stalls are cash only.",
          "Bargain politely; 20–30% off is normal at night markets.",
          "Ask for “mangsawirat” for vegetarian street food.",
          "Wear a sarong or long skirt/pants for the Big Buddha stop.",
        ],
      }}
      extraContentBeforeReviews={<PhuketCityTourSEO />}
    />
  );
};

export default PhuketCityNightMarket;
