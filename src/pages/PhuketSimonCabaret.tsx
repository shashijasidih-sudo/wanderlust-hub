import PhuketActivityTemplate from "@/components/activity-detail/PhuketActivityTemplate";
import { SimonCabaretSEO } from "@/components/activity-detail/PhuketActivitySEO";
import { simonCabaretFaqs } from "@/data/phuketActivityFaqs";
import { toursData } from "@/data/tourData";
import phuketNightMarket from "@/assets/phuket-night-market-1.jpg";
import phuketIslandView from "@/assets/phuket-island-viewpoint-1.jpg";
import phuketBoatTour from "@/assets/phuket-boat-tour-1.jpg";
import phuketCarnival1 from "@/assets/phuket-carnival-1.jpg";

const PhuketSimonCabaret = () => {
  const baseTourData = toursData["phuket-simon-cabaret"];
  if (!baseTourData) return null;
  const tourData = {
    ...baseTourData,
    faqs: simonCabaretFaqs,
    heroImages: [
      { src: phuketCarnival1, title: "Simon Cabaret Show Phuket" },
      { src: phuketNightMarket, title: "Spectacular Costumes" },
      { src: phuketIslandView, title: "World-Class Performance" },
      { src: phuketBoatTour, title: "A Night Out in Patong" },
    ],
    galleryImages: [
      { src: phuketCarnival1, alt: "Cabaret stage production" },
      { src: phuketNightMarket, alt: "Elaborate costumes" },
      { src: phuketIslandView, alt: "Photo with performers" },
      { src: phuketBoatTour, alt: "Patong nightlife" },
    ],
  };
  return (
    <PhuketActivityTemplate
      tourData={tourData}
      config={{
        path: "/thailand/phuket/simon-cabaret-show-with-transfer/",
        seoTitle: "Simon Cabaret Show Phuket Tickets with Transfers | Book in INR",
        seoDescription: "Book Simon Cabaret Phuket show tickets with hotel transfers. Patong's famous cabaret with instant confirmation and INR pricing for Indian travellers.",
        whatsappTopic: "Simon Cabaret Phuket show tickets",
        audience: "Great for Couples & Groups",
        area: "beach",
        ctaHeadline: "Phuket's Most Famous Cabaret, Transfers Included",
        companionIntro: "A 60-minute glitzy show in Patong — which seats to pick, dress code and photo etiquette.",
        tips: [
          "VIP seats are worth it for the centre-stage view.",
          "Photos with performers after the show cost about THB 100–200.",
          "Show runs roughly 60 minutes with no interval.",
          "The theatre is strongly air-conditioned — carry a light shrug.",
        ],
      }}
      extraContentBeforeReviews={<SimonCabaretSEO />}
    />
  );
};

export default PhuketSimonCabaret;
