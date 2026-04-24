import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import CanonicalUrl from "@/components/seo/CanonicalUrl";
import { transfersData } from "@/data/transferData";
import { phuketTransferSEO } from "@/data/phuketTransferSEO";

const PhuketCityTourKrabi = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const id = "phuket-city-tour-krabi";
  const seo = phuketTransferSEO[id];
  return (
    <>
      <CanonicalUrl path={seo.newSlug} />
      <TransferBooking transferData={transfersData[id]} galleryImages={seo.gallery} seoContent={seo.seoContent} faqs={seo.faqs} />
    </>
  );
};

export default PhuketCityTourKrabi;
