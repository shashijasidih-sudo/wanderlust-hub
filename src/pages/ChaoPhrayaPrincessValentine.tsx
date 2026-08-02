import BangkokActivityTemplate from "@/components/activity-detail/BangkokActivityTemplate";
import ChaoPhrayaPrincessValentineSEO from "@/components/activity-detail/ChaoPhrayaPrincessValentineSEO";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import { toursData } from "@/data/tourData";
import { chaoPhrayaPrincessFaqs } from "@/data/chaoPhrayaPrincessFaqs";
import valentineCruise1 from "@/assets/valentine-cruise-1.jpg";
import valentineCruise2 from "@/assets/valentine-cruise-2.jpg";
import valentineCruise3 from "@/assets/valentine-cruise-3.jpg";

const ChaoPhrayaPrincessValentine = () => {
  const tourData = {
    ...toursData["chao-phraya-princess-valentine"],
    heroImages: [
      { src: valentineCruise1, title: "Valentine's Day Dinner Cruise" },
      { src: valentineCruise2, title: "Romantic Evening on Chao Phraya" },
      { src: valentineCruise3, title: "Special Celebration" }
    ],
    galleryImages: [
      { src: valentineCruise1, alt: "Luxury cruise ship at night" },
      { src: valentineCruise2, alt: "Chao Phraya Princess cruise" },
      { src: valentineCruise3, alt: "Night cruise experience" }
    ],
    faqs: chaoPhrayaPrincessFaqs
  };
  return (
    <>
      <FaqJsonLd faqs={chaoPhrayaPrincessFaqs} id="faq-jsonld-cpp-valentine" />
      <BangkokActivityTemplate
      tourData={tourData}
      config={{
        path: "/thailand/bangkok/chao-phraya-princess-valentine-dinner-cruise/",
        seoTitle: "Chao Phraya Princess Valentine's Dinner Cruise Bangkok | Book in INR",
        seoDescription:
          "Book the Chao Phraya Princess Valentine's Day dinner cruise in Bangkok \u2014 premium menu, romantic setting and live entertainment. Instant confirmation and INR pricing.",
        whatsappTopic: "the Chao Phraya Princess Valentine's cruise",
        audience: "Made for Couples & Honeymooners",
        area: "riverside",
        ctaHeadline: "A Valentine's Night on the Chao Phraya",
        companionIntro:
          "A special-occasion cruise for couples and honeymooners from India \u2014 premium menu, decorated deck and the full Bangkok skyline after dark.",
        tips: [
          "Valentine's slots sell out weeks ahead \u2014 book early.",
          "Mention anniversary or honeymoon celebrations while booking.",
          "Smart formal dressing suits the evening.",
          "Vegetarian and Jain menus are available on prior request.",
        ],
      }}
      extraContentBeforeReviews={<ChaoPhrayaPrincessValentineSEO />}
    />
    </>
  );
};

export default ChaoPhrayaPrincessValentine;
