import BangkokActivityTemplate from "@/components/activity-detail/BangkokActivityTemplate";
import { TukTukNightSEO } from "@/components/activity-detail/BangkokActivitySEO";
import { tukTukNightFaqs } from "@/data/bangkokActivityFaqs";
import { toursData } from "@/data/tourData";
import bangkokTemple2 from "@/assets/bangkok-temple-2.jpg";
import bangkokCity1 from "@/assets/bangkok-city-1.jpg";
import bangkokTemple3 from "@/assets/bangkok-temple-3.jpg";

const BangkokTukTukNight = () => {
  const tourData = {
    ...toursData["bangkok-tuk-tuk-night"],
    heroImages: [
      { src: bangkokTemple2, title: "Bangkok Night Tour by Tuk-Tuk" },
      { src: bangkokCity1, title: "Night Market Adventure" },
      { src: bangkokTemple3, title: "Street Food Experience" }
    ],
    galleryImages: [
      { src: bangkokTemple2, alt: "Illuminated temples at night" },
      { src: bangkokCity1, alt: "Bangkok cityscape" },
      { src: bangkokTemple3, alt: "Wat Arun at twilight" }
    ],
    faqs: tukTukNightFaqs,
  };
  return <BangkokActivityTemplate
      tourData={tourData}
      config={{
        path: "/thailand/bangkok/tuk-tuk-night-tour-bangkok/",
        seoTitle: "Bangkok Tuk-Tuk Night Tour Tickets | Book in INR",
        seoDescription:
          "Book the Bangkok tuk-tuk night tour \u2014 illuminated temples, flower market and street food after dark. Minimum 2 pax, instant confirmation and INR pricing.",
        whatsappTopic: "the Bangkok tuk-tuk night tour",
        audience: "Best for Couples & Young Travellers",
        area: "city",
        ctaHeadline: "Bangkok After Dark, by Tuk-Tuk",
        companionIntro:
          "The most fun way to see Bangkok at night \u2014 lit-up temples, the flower market and street food, with veg-friendly stops for Indian travellers.",
        tips: [
          "Carry a light jacket \u2014 open tuk-tuks get breezy at speed.",
          "Tell your guide in advance if you need pure-vegetarian food stops.",
          "Keep bags on your lap, not on the outer seat edge.",
          "Great for photos \u2014 set your phone to night mode before you start.",
        ],
      }}
      extraContentBeforeReviews={<TukTukNightSEO />}
    />;
};

export default BangkokTukTukNight;
