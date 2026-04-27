import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import CanonicalUrl from "@/components/seo/CanonicalUrl";
import { singaporeTransfersData } from "@/data/singaporeTransferData";
import { singaporeTransferSEO } from "@/data/singaporeTransferSEO";

const SingaporeAirportPickup = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const id = "singapore-airport-pickup";
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
            title: "Singapore Hotel to Changi Airport Drop Off",
            url: "/singapore/singapore-airport-dropoff",
            description: "Private transfer from your Singapore hotel to Changi Airport with fixed INR pricing and on-time pickups.",
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

export default SingaporeAirportPickup;
