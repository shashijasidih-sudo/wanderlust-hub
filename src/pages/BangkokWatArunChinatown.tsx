import BangkokActivityTemplate from "@/components/activity-detail/BangkokActivityTemplate";
import BangkokTourItinerary from "@/components/activity-detail/BangkokTourItinerary";
import { bangkokSheetContent } from "@/data/bangkokSheetContent";
import { WatArunChinatownSEO } from "@/components/activity-detail/BangkokActivitySEO";
import { watArunChinatownFaqs } from "@/data/bangkokActivityFaqs";
import { toursData } from "@/data/tourData";
import bangkokTemple2 from "@/assets/bangkok-temple-2.jpg";
import bangkokCity2 from "@/assets/bangkok-city-2.jpg";
import bangkokTemple4 from "@/assets/bangkok-temple-4.jpg";

const BangkokWatArunChinatown = () => {
  const tourData = {
    ...toursData["bangkok-wat-arun-chinatown"],
    heroImages: [
      { src: bangkokTemple2, title: "Sunset at Wat Arun" },
      { src: bangkokCity2, title: "Bangkok Cityscape" },
      { src: bangkokTemple4, title: "Bangkok Evening Tour" }
    ],
    galleryImages: [
      { src: bangkokTemple2, alt: "Wat Arun at night" },
      { src: bangkokCity2, alt: "Bangkok highway bridge" },
      { src: bangkokTemple4, alt: "Temple exploration" }
    ],
    faqs: watArunChinatownFaqs,
  };
  const sheet = bangkokSheetContent["bangkok-wat-arun-chinatown"];
  const pageTourData = {
    ...tourData,
    description: { ...tourData.description, whatToExpect: sheet.whatToExpect },
    inclusions: sheet.inclusions,
  };
  return <BangkokActivityTemplate
      tourData={pageTourData}
      contentAfterOverview={<BangkokTourItinerary tourKey="bangkok-wat-arun-chinatown" />}
      config={{
        path: "/thailand/bangkok/wat-arun-chinatown-tour/",
        seoTitle: "Wat Arun Sunset & Chinatown Street Food Tour Bangkok | Book in INR",
        seoDescription:
          "Book the Wat Arun sunset and Yaowarat Chinatown street food tour in Bangkok. Double world heritage city tour with transfers, instant confirmation and INR pricing.",
        whatsappTopic: "the Wat Arun sunset & Chinatown food tour",
        audience: "Perfect for Couples & Foodies",
        area: "riverside",
        ctaHeadline: "Sunset at Wat Arun, Then Chinatown After Dark",
        companionIntro:
          "Golden-hour temple views followed by Yaowarat's food lanes \u2014 with clear vegetarian options flagged for Indian travellers.",
        tips: [
          "Reach the riverside viewpoint 30 minutes before sunset for the best photos.",
          "Yaowarat is busiest after 7 PM \u2014 carry a crossbody bag and keep it zipped.",
          "Ask for 'mangsawirat' and 'no fish sauce' for pure-veg street dishes.",
          "Pahurat (Little India) is a five-minute walk from Chinatown for Indian food.",
        ],
      }}
      extraContentBeforeReviews={<WatArunChinatownSEO />}
    />;
};

export default BangkokWatArunChinatown;
