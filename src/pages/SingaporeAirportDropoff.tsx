import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import CanonicalUrl from "@/components/seo/CanonicalUrl";
import { singaporeTransfersData } from "@/data/singaporeTransferData";
import { singaporeTransferSEO } from "@/data/singaporeTransferSEO";

const SingaporeAirportDropoff = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const id = "singapore-airport-dropoff";
  const seo = singaporeTransferSEO[id];
  return (
    <>
      <CanonicalUrl path={seo.newSlug} />
      <TransferBooking
        transferData={singaporeTransfersData[id]}
        galleryImages={seo.gallery}
        seoContent={seo.seoContent}
        faqs={seo.faqs}
        relatedLinks={[
          {
            title: "Singapore Changi Airport Pick Up to Hotel",
            url: "/singapore/singapore-airport-pickup",
            description: "Private door-to-door transfer from Changi Airport to your Singapore hotel with meet-and-greet service.",
          },
          {
            title: "Singapore Changi Airport Night Pick Up to Hotel",
            url: "/singapore/singapore-airport-night-pickup",
            description: "Safe late-night and early-morning airport transfers from 10:00 PM to 6:30 AM with guaranteed driver availability.",
          },
        ]}
      />
    </>
  );
};

export default SingaporeAirportDropoff;
