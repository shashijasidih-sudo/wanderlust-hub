import { useEffect } from "react";
import TourBooking from "@/components/TourBooking";
import { toursData } from "@/data/tourData";
import { NightSafariTransferSEO } from "@/components/activity-detail/SingaporeActivitySEO";
import { nightSafariTransferFaqs } from "@/data/singaporeActivityFaqs";
import ns1 from "@/assets/singapore-doc/night-safari-1.jpg";
import ns2 from "@/assets/singapore-doc/night-safari-2.jpg";
import ns3 from "@/assets/singapore-doc/night-safari-3.jpg";

const NightSafariTransfer = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const base = toursData["night-safari-transfer"];
  const tourData = {
    ...base,
    heroImages: [
      { src: ns2, title: base.title, subtitle: "With round-trip hotel transfers" },
      { src: ns1, title: base.title, subtitle: "World's first nocturnal zoo" },
      { src: ns3, title: base.title, subtitle: "Live wildlife performances" },
      ...base.heroImages,
    ],
    galleryImages: [
      { src: ns2, alt: "Night Safari rhino statue welcome" },
      { src: ns1, alt: "Night Safari Singapore entrance at night" },
      { src: ns3, alt: "Creatures of the Night live show" },
      ...base.galleryImages,
    ],
    faqs: nightSafariTransferFaqs,
  };
  return <TourBooking tourData={tourData} extraContentBeforeReviews={<NightSafariTransferSEO />} />;
};

export default NightSafariTransfer;
