import BangkokActivityTemplate from "@/components/activity-detail/BangkokActivityTemplate";
import { VivaAlangkaCruiseSEO } from "@/components/activity-detail/BangkokActivitySEO";
import { vivaAlangkaCruiseFaqs } from "@/data/bangkokActivityFaqs";
import { toursData } from "@/data/tourData";
import cruiseDock1 from "@/assets/cruise-dock-1.jpg";
import cruiseNight1 from "@/assets/cruise-night-1.jpg";
import cruiseShip1 from "@/assets/cruise-ship-1.jpg";

const VivaAlangkaCruise = () => {
  const tourData = {
    ...toursData["viva-alangka-cruise"],
    heroImages: [
      { src: cruiseShip1, title: "Viva Alangka Dinner Cruise" },
      { src: cruiseNight1, title: "Chao Phraya River Evening" },
      { src: cruiseDock1, title: "Bangkok River Pier" }
    ],
    galleryImages: [
      { src: cruiseShip1, alt: "Cruise boat at night" },
      { src: cruiseNight1, alt: "Evening cruise experience" },
      { src: cruiseDock1, alt: "River pier dock" }
    ],
    faqs: vivaAlangkaCruiseFaqs,
  };
  return <BangkokActivityTemplate
      tourData={tourData}
      config={{
        path: "/thailand/bangkok/viva-alangka-dinner-cruise/",
        seoTitle: "Viva Alangka Dinner Cruise Bangkok with Transfers | Book in INR",
        seoDescription:
          "Book the Viva Alangka dinner cruise from Asiatique with hotel transfers. Buffet dinner, live music and illuminated Chao Phraya views. Instant confirmation in INR.",
        whatsappTopic: "the Viva Alangka dinner cruise",
        audience: "Perfect for Couples & Families",
        area: "riverside",
        ctaHeadline: "A Romantic Evening on the Chao Phraya",
        companionIntro:
          "A relaxed buffet cruise from Asiatique \u2014 here's the boarding plan, dress code and veg-food guidance for Indian travellers.",
        tips: [
          "Reach Asiatique 45 minutes before departure for boarding formalities.",
          "Request vegetarian or Jain meals while booking, not on board.",
          "Upper-deck seats give the best Wat Arun and Rama VIII bridge views.",
          "Smart casual dress; carry a light shrug for the river breeze.",
        ],
      }}
      extraContentBeforeReviews={<VivaAlangkaCruiseSEO />}
    />;
};

export default VivaAlangkaCruise;
