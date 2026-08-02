import BangkokActivityTemplate from "@/components/activity-detail/BangkokActivityTemplate";
import { SkywalkSEO } from "@/components/activity-detail/BangkokActivitySEO";
import { bangkokSkywalkFaqs } from "@/data/bangkokActivityFaqs";
import { toursData } from "@/data/tourData";
import bangkokSkywalk1 from "@/assets/bangkok-skywalk-1.jpg";
import bangkokSkywalk2 from "@/assets/bangkok-skywalk-2.jpg";
import bangkokSkywalk3 from "@/assets/bangkok-skywalk-3.jpg";
import bangkokSkywalk4 from "@/assets/bangkok-skywalk-4.jpg";
import bangkokSkywalk5 from "@/assets/bangkok-skywalk-5.jpg";
import bangkokSkywalkHero from "@/assets/bangkok-skywalk-hero.jpg";

const BangkokSkywalk = () => {
  const tourData = {
    ...toursData["bangkok-skywalk"],
    heroImages: [
      { src: bangkokSkywalkHero, title: "Bangkok Mahanakhon Sky Walk" },
      { src: bangkokSkywalk1, title: "Glass Floor Experience" },
      { src: bangkokSkywalk2, title: "Panoramic City Views" },
      { src: bangkokSkywalk3, title: "Sunset at Skywalk" }
    ],
    galleryImages: [
      { src: bangkokSkywalkHero, alt: "Mahanakhon Skywalk entrance" },
      { src: bangkokSkywalk1, alt: "Glass floor walkway" },
      { src: bangkokSkywalk2, alt: "Bangkok panoramic view" },
      { src: bangkokSkywalk3, alt: "Sunset views from rooftop" },
      { src: bangkokSkywalk4, alt: "Observation deck" },
      { src: bangkokSkywalk5, alt: "City skyline at dusk" }
    ],
    faqs: bangkokSkywalkFaqs,
  };
  return <BangkokActivityTemplate
      tourData={tourData}
      config={{
        path: "/thailand/bangkok/mahanakhon-skywalk-tickets/",
        seoTitle: "Mahanakhon SkyWalk Bangkok Tickets | Glass Floor Deck | Book in INR",
        seoDescription:
          "Book Mahanakhon SkyWalk Bangkok tickets \u2014 Thailand's highest observation deck with a glass floor and 360-degree skyline views. Instant confirmation and INR pricing.",
        whatsappTopic: "Mahanakhon SkyWalk tickets",
        audience: "Great for Couples & Photographers",
        area: "city",
        ctaHeadline: "Stand on Glass, 314 Metres Above Bangkok",
        companionIntro:
          "Bangkok's highest viewpoint \u2014 here's the best time slot, what to wear and how Indian travellers should plan the glass-floor experience.",
        tips: [
          "Book the 5:30\u20136:30 PM slot for sunset plus night views.",
          "Skirts are not ideal on the glass floor; shoe covers are provided.",
          "BTS Chong Nonsi station connects directly to the tower.",
          "Allow around 90 minutes including lift queues.",
        ],
      }}
      extraContentBeforeReviews={<SkywalkSEO />}
    />;
};

export default BangkokSkywalk;
