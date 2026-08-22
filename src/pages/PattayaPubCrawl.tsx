import ThaiCityActivityTemplate, { ThaiActivityConfig } from "@/components/activity-detail/ThaiCityActivityTemplate";
import { toursData } from "@/data/tourData";
import PattayaTourItinerary from "@/components/activity-detail/PattayaTourItinerary";
import { pattayaSheetContent } from "@/data/pattayaSheetContent";
import { PattayaPubCrawlSEO } from "@/components/activity-detail/PattayaActivitySEO";
import { pubCrawlPattayaFaqs } from "@/data/pattayaActivityFaqs";

const config: ThaiActivityConfig = {
  path: "/thailand/pattaya/pattaya-pub-crawl-night-tour/",
  city: "pattaya",
  area: "show",
  seoTitle: "Pattaya Pub Crawl Night Tour Tickets | Yellodae",
  seoDescription: "Book the Pattaya sunset club and pub crawl experience on Drinking Street. 18+ only, instant confirmation, INR pricing and Indian traveller support.",
  whatsappTopic: "the Pattaya pub crawl night tour",
  audience: "Adults Only (18+)",
  companionIntro: "An 18+ social night out across Pattaya's best bars. Here is the Indian traveller guide to cash, safety, dress code and getting back to your hotel.",
  ctaHeadline: "Book Your Pattaya Pub Crawl",
};

const PattayaPubCrawl = () => {
  const base = toursData["pattaya-pub-crawl"];
  if (!base) return null;
  const sheet = pattayaSheetContent["pattaya-pub-crawl"];
  const tourData = {
    ...base,
    faqs: pubCrawlPattayaFaqs,
    description: { ...base.description, whatToExpect: sheet.whatToExpect },
    ...(sheet.inclusions.length ? { inclusions: sheet.inclusions } : {}),
  };
  return <ThaiCityActivityTemplate tourData={tourData} config={config} contentAfterOverview={<PattayaTourItinerary tourKey="pattaya-pub-crawl" />} extraContentBeforeReviews={<PattayaPubCrawlSEO />} />;
};

export default PattayaPubCrawl;
