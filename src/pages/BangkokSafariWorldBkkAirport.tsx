import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import CanonicalUrl from "@/components/seo/CanonicalUrl";
import { transfersData } from "@/data/transferData";
import { bangkokTransferSEO } from "@/data/bangkokTransferSEO";

const BangkokSafariWorldBkkAirport = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const id = "bangkok-safari-world-bkk-airport";
  const seo = bangkokTransferSEO[id];
  return (
    <>
      <CanonicalUrl path="/thailand/bangkok/bangkok-hotel-safari-world-to-suvarnabhumi-airport-transfer" />
      <TransferBooking
        transferData={transfersData[id]}
        galleryImages={seo.gallery}
        seoContent={seo.seoContent}
        faqs={seo.faqs}
      />
    </>
  );
};

export default BangkokSafariWorldBkkAirport;
