import BangkokActivityTemplate from "@/components/activity-detail/BangkokActivityTemplate";
import ChaoPhrayaPrincessPrivateSEO from "@/components/activity-detail/ChaoPhrayaPrincessPrivateSEO";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import { toursData } from "@/data/tourData";
import { chaoPhrayaPrincessFaqs } from "@/data/chaoPhrayaPrincessFaqs";
import cruiseNight1 from "@/assets/cruise-night-1.jpg";
import cruiseNight2 from "@/assets/cruise-night-2.jpg";
import watArunTwilight1 from "@/assets/wat-arun-twilight-1.jpg";

const ChaoPhrayaPrincessPrivate = () => {
  const tourData = {
    ...toursData["chao-phraya-princess-private"],
    heroImages: [
      { src: cruiseNight2, title: "Chao Phraya Princess Cruise" },
      { src: cruiseNight1, title: "Private Transfer Service" },
      { src: watArunTwilight1, title: "Bangkok River Views" }
    ],
    galleryImages: [
      { src: cruiseNight2, alt: "Princess cruise ship at night" },
      { src: cruiseNight1, alt: "Cruise evening experience" },
      { src: watArunTwilight1, alt: "Bangkok skyline at twilight" }
    ],
    faqs: chaoPhrayaPrincessFaqs
  };
  return (
    <>
      <FaqJsonLd faqs={chaoPhrayaPrincessFaqs} id="faq-jsonld-cpp-private" />
      <BangkokActivityTemplate
      tourData={tourData}
      config={{
        path: "/thailand/bangkok/chao-phraya-princess-dinner-cruise-with-private-transfer/",
        seoTitle: "Chao Phraya Princess Dinner Cruise with Private Transfer | Book in INR",
        seoDescription:
          "Book the Chao Phraya Princess dinner cruise in Bangkok with private hotel transfers. Buffet dinner, live music and riverside landmarks. Instant confirmation in INR.",
        whatsappTopic: "the Chao Phraya Princess cruise with private transfer",
        audience: "Great for Families & Couples",
        area: "riverside",
        ctaHeadline: "Chao Phraya Princess Cruise with Private Transfers",
        companionIntro:
          "The most popular Bangkok dinner cruise, with door-to-door private transfers \u2014 planned for Indian families who don't want to chase taxis at night.",
        tips: [
          "Your driver will confirm pickup on WhatsApp on the day of travel.",
          "Boarding closes 20 minutes before departure \u2014 do not be late.",
          "Indian and vegetarian buffet options can be requested in advance.",
          "The best skyline views come in the first 30 minutes after boarding.",
        ],
      }}
      extraContentBeforeReviews={<ChaoPhrayaPrincessPrivateSEO />}
    />
    </>
  );
};

export default ChaoPhrayaPrincessPrivate;
