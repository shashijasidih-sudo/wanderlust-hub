import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import CanonicalUrl from "@/components/seo/CanonicalUrl";
import { singaporeTransfersData } from "@/data/singaporeTransferData";
import { singaporeTransferSEO } from "@/data/singaporeTransferSEO";

const SingaporeAirportNightPickup = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const id = "singapore-airport-night-pickup";
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
            title: "Singapore Hotel to Changi Airport Drop Off",
            url: "/singapore/singapore-airport-dropoff",
            description: "Private transfer from your Singapore hotel to Changi Airport with fixed INR pricing and on-time pickups.",
          },
        ]}
      />
    </>
  );
};

export default SingaporeAirportNightPickup;
