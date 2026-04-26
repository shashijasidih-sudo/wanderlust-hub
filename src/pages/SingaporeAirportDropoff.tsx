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
      <TransferBooking transferData={singaporeTransfersData[id]} galleryImages={seo.gallery} seoContent={seo.seoContent} faqs={seo.faqs} />
    </>
  );
};

export default SingaporeAirportDropoff;
