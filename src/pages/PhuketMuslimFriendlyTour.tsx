import PhuketActivityTemplate from "@/components/activity-detail/PhuketActivityTemplate";
import { toursData } from "@/data/tourData";
import phuketMuslimWoman from "@/assets/phuket-muslim-woman-hijab.jpg";
import phuketWaterfall from "@/assets/phuket-bang-pae-waterfall.jpg";
import phuketMosque from "@/assets/phuket-mosque-bangTao.jpg";
import phuketPlaneBeach from "@/assets/phuket-mai-khao-beach-plane.jpg";

const PhuketMuslimFriendlyTour = () => {
  const baseTourData = toursData["phuket-muslim-friendly-tour"];
  if (!baseTourData) return null;
  const tourData = {
    ...baseTourData,
    heroImages: [
      { src: phuketMuslimWoman, title: "Muslim-Friendly Phuket Tour" },
      { src: phuketWaterfall, title: "Bang Pae Waterfall" },
      { src: phuketMosque, title: "Bang Tao Mukaram Mosque" },
      { src: phuketPlaneBeach, title: "Mai Khao Beach" },
    ],
    galleryImages: [
      { src: phuketMuslimWoman, alt: "Muslim traveller in Phuket" },
      { src: phuketWaterfall, alt: "Bang Pae Waterfall" },
      { src: phuketMosque, alt: "Bang Tao Mukaram Mosque" },
      { src: phuketPlaneBeach, alt: "Mai Khao Beach with airplane" },
    ],
  };
  return (
    <PhuketActivityTemplate
      tourData={tourData}
      config={{
        path: "/thailand/phuket/muslim-friendly-tour/",
        seoTitle: "Muslim-Friendly Phuket Tour with Halal Food & Transfers | INR",
        seoDescription: "Book a Muslim-friendly Phuket tour with mosque visits, halal food stops, waterfalls and hotel transfers. Instant confirmation and INR pricing.",
        whatsappTopic: "the Muslim-friendly Phuket tour",
        audience: "Great for Muslim Families",
        area: "beach",
        ctaHeadline: "A Halal-Friendly Day Around Phuket, Transfers Included",
        companionIntro: "Built for Muslim families from India — prayer stops, halal restaurants and modest-friendly sightseeing.",
        tips: [
          "Prayer breaks are built into the itinerary at local mosques.",
          "All food stops on this tour are halal-certified.",
          "Carry a scarf/modest wear for mosque visits.",
          "Mai Khao Beach is quieter and family-friendly.",
        ],
      }}
    />
  );
};

export default PhuketMuslimFriendlyTour;
