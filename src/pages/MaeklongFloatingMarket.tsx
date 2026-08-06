import BangkokActivityTemplate from "@/components/activity-detail/BangkokActivityTemplate";
import { MaeklongFloatingMarketSEO } from "@/components/activity-detail/BangkokActivitySEO";
import { maeklongFloatingMarketFaqs } from "@/data/bangkokActivityFaqs";
import { toursData } from "@/data/tourData";
import floatingMarket1 from "@/assets/floating-market-1.jpg";
import bangkokRiversideTemple1 from "@/assets/bangkok-riverside-temple-1.webp";
import bangkokBridgeDay1 from "@/assets/bangkok-bridge-day-1.jpg";

const MaeklongFloatingMarket = () => {
  const tourData = {
    ...toursData["maeklong-floating-market"],
    heroImages: [
      { src: floatingMarket1, title: "Maeklong Railway Market" },
      { src: bangkokRiversideTemple1, title: "Damnoen Saduak Floating Market" },
      { src: bangkokBridgeDay1, title: "Traditional Thai Markets" }
    ],
    galleryImages: [
      { src: floatingMarket1, alt: "Floating market boats" },
      { src: bangkokRiversideTemple1, alt: "Riverside temple" },
      { src: bangkokBridgeDay1, alt: "Bangkok cityscape" }
    ],
    faqs: maeklongFloatingMarketFaqs,
  };
  return <BangkokActivityTemplate
      tourData={tourData}
      config={{
        path: "/thailand/bangkok/maeklong-floating-market-tour/",
        seoTitle: "Maeklong Railway & Damnoen Saduak Floating Market Tour | Book in INR",
        seoDescription:
          "Book the Maeklong Railway Market and Damnoen Saduak Floating Market tour from Bangkok with transfers. Full-day trip, instant confirmation and INR pricing.",
        whatsappTopic: "the Maeklong & Damnoen Saduak market tour",
        audience: "Popular with Families & Photographers",
        area: "outskirts",
        ctaHeadline: "Train Market and Floating Market in One Day",
        companionIntro:
          "Two of Thailand's most photographed markets in a single day trip \u2014 with the early-start plan Indian families need to avoid the crowds.",
        tips: [
          "Pickups start early (around 6:30 AM) \u2014 sleep early the night before.",
          "Check the train timings with your guide to catch the market fold-away moment.",
          "Boat rides at Damnoen Saduak are paid separately unless included.",
          "Bargain politely at the market; start at about half the quoted price.",
        ],
      }}
      extraContentBeforeReviews={<MaeklongFloatingMarketSEO />}
    />;
};

export default MaeklongFloatingMarket;
