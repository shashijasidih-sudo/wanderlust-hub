import BangkokActivityTemplate from "@/components/activity-detail/BangkokActivityTemplate";
import { GrandPalaceEmeraldSEO } from "@/components/activity-detail/BangkokActivitySEO";
import { grandPalaceEmeraldFaqs } from "@/data/bangkokActivityFaqs";
import { toursData } from "@/data/tourData";
import grandPalaceBridge from "@/assets/grand-palace-bridge.jpg";
import grandPalaceWatArun from "@/assets/grand-palace-wat-arun.jpg";
import grandPalaceWatArunTwilight from "@/assets/grand-palace-wat-arun-twilight.jpg";

const BangkokGrandPalaceEmerald = () => {
  const tourData = {
    ...toursData["bangkok-grand-palace-emerald"],
    heroImages: [
      { src: grandPalaceWatArunTwilight, title: "Royal Grand Palace" },
      { src: grandPalaceWatArun, title: "Emerald Buddha" },
      { src: grandPalaceBridge, title: "Bangkok City View" }
    ],
    galleryImages: [
      { src: grandPalaceWatArunTwilight, alt: "Wat Arun temple at twilight" },
      { src: grandPalaceWatArun, alt: "Wat Arun temple at night" },
      { src: grandPalaceBridge, alt: "Chao Phraya River bridge" }
    ],
    faqs: grandPalaceEmeraldFaqs,
  };
  return <BangkokActivityTemplate
      tourData={tourData}
      config={{
        path: "/thailand/bangkok/grand-palace-wat-phra-kaew-tour/",
        seoTitle: "Grand Palace & Wat Phra Kaew Tour Bangkok | Book Tickets in INR",
        seoDescription:
          "Book the Grand Palace, Emerald Buddha and Reclining Buddha tour in Bangkok with transfers. Guided half-day royal heritage tour with instant confirmation in INR.",
        whatsappTopic: "the Grand Palace & Emerald Buddha tour",
        audience: "Ideal for First-Time Visitors",
        area: "riverside",
        ctaHeadline: "Walk Through Bangkok's Royal Grand Palace",
        companionIntro:
          "Bangkok's single most important sight \u2014 here's the dress code, best entry time and nearby Indian food options for Indian travellers.",
        tips: [
          "Strict dress code: no shorts, sleeveless tops or ripped jeans.",
          "Arrive at opening (8:30 AM) \u2014 the courtyards get very hot by 11 AM.",
          "Ignore touts claiming the palace is closed; it opens daily.",
          "Wat Pho is a 10-minute walk away and pairs perfectly with this visit.",
        ],
      }}
      extraContentBeforeReviews={<GrandPalaceEmeraldSEO />}
    />;
};

export default BangkokGrandPalaceEmerald;
