import ThaiCityActivityTemplate, { ThaiActivityConfig } from "@/components/activity-detail/ThaiCityActivityTemplate";
import { toursData } from "@/data/tourData";
import { kohSamuiLoyKrathongCruiseFaqs } from "@/data/kohSamuiActivityFaqs";
import cruiseImg from "@/assets/koh-samui-loy-krathong-cruise-1.webp";
import bangkokCruise from "@/assets/bangkok-cruise-night-3.webp";
import valentineCruise from "@/assets/valentine-cruise-1.webp";
import cityImg from "@/assets/city-kohsamui.jpg";

const config: ThaiActivityConfig = {
  path: "/thailand/koh-samui/white-orchid-river-cruise-loy-krathong-festival/",
  city: "koh-samui",
  area: "cruise",
  seoTitle: "White Orchid Loy Krathong River Cruise Tickets | Yellodae",
  seoDescription: "Book the White Orchid river cruise for the Loy Krathong full moon festival — dinner, live show and krathong floating. Instant confirmation and INR pricing.",
  whatsappTopic: "the White Orchid Loy Krathong river cruise",
  audience: "Perfect for Families & Couples",
  companionIntro:
    "Loy Krathong is Thailand's festival of lights, and the White Orchid cruise is the easiest way to experience it with dinner on board. Here is what Indian travellers should know.",
  ctaHeadline: "Book Your Loy Krathong River Cruise",
  tips: [
    "Request vegetarian or Jain meals at least 24 hours before the cruise.",
    "Reach the pier 30 minutes early — boarding closes before departure.",
    "Carry a light shawl; it gets breezy on the open deck after sunset.",
    "Krathongs are provided on board — float yours at the ceremony point.",
  ],
};

const KohSamuiWhiteOrchidLoyKrathongCruise = () => {
  const tourData = {
    ...toursData["koh-samui-white-orchid-loy-krathong-cruise"],
    heroImages: [
      { src: cruiseImg, title: "Loy Krathong River Cruise" },
      { src: bangkokCruise, title: "Chao Phraya River Cruise" },
      { src: valentineCruise, title: "Live Cabaret Show On Board" },
      { src: cityImg, title: "Koh Samui Island" },
    ],
    galleryImages: [
      { src: cruiseImg, alt: "White Orchid Loy Krathong river cruise" },
      { src: bangkokCruise, alt: "Bangkok river cruise at night" },
      { src: valentineCruise, alt: "On-board entertainment" },
    ],
    faqs: kohSamuiLoyKrathongCruiseFaqs,
  };
  return <ThaiCityActivityTemplate tourData={tourData} config={config} />;
};

export default KohSamuiWhiteOrchidLoyKrathongCruise;
