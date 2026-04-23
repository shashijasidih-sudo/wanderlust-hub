import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import CanonicalUrl from "@/components/seo/CanonicalUrl";
import { transfersData } from "@/data/transferData";
import { pattayaTransferSEO } from "@/data/pattayaTransferSEO";

const PattayaCityHourlyRental = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const id = "pattaya-city-hourly-rental";
  const seo = pattayaTransferSEO[id];
  return (
    <>
      <CanonicalUrl path={seo.newSlug} />
      <TransferBooking transferData={transfersData[id]} galleryImages={seo.gallery} seoContent={seo.seoContent} faqs={seo.faqs} />
    </>
  );
};

export default PattayaCityHourlyRental;
