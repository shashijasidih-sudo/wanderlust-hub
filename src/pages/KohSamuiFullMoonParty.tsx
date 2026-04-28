import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import fullMoon from "@/assets/koh-samui-full-moon-party-1.jpg";
import beach from "@/assets/koh-samui-beach-1.jpg";
import nightlife from "@/assets/pattaya-nightlife-1.jpg";

const KohSamuiFullMoonParty = () => {
  const tourData = {
    ...toursData["koh-samui-full-moon-party-with-transfer"],
    heroImages: [
      { src: fullMoon, title: "Full Moon Party Haad Rin Beach" },
      { src: beach, title: "Koh Samui Beach" },
      { src: nightlife, title: "Beach Party Vibes" },
    ],
    galleryImages: [
      { src: fullMoon, alt: "Full Moon Party crowd dancing under the moon" },
      { src: beach, alt: "Koh Samui beach scene" },
      { src: nightlife, alt: "Beach nightlife party" },
    ],
  };
  return <TourBooking tourData={tourData} />;
};

export default KohSamuiFullMoonParty;
