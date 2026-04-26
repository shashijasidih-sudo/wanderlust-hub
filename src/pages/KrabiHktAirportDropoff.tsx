import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import CanonicalUrl from "@/components/seo/CanonicalUrl";
import { transfersData } from "@/data/transferData";
import { krabiTransferSEO } from "@/data/krabiTransferSEO";

const KrabiHktAirportDropoff = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const id = "krabi-hkt-airport-dropoff";
  const seo = krabiTransferSEO[id];
  return (
    <>
      <CanonicalUrl path={seo.newSlug} />
      <TransferBooking transferData={transfersData[id]} galleryImages={seo.gallery} seoContent={seo.seoContent} faqs={seo.faqs} />
    </>
  );
};

export default KrabiHktAirportDropoff;
