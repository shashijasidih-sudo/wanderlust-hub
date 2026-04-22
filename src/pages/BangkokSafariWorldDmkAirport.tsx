import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import CanonicalUrl from "@/components/seo/CanonicalUrl";
import { transfersData } from "@/data/transferData";
import { bangkokTransferSEO } from "@/data/bangkokTransferSEO";

const BangkokSafariWorldDmkAirport = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const id = "bangkok-safari-world-dmk-airport";
  const seo = bangkokTransferSEO[id];
  return (
    <>
      <CanonicalUrl path="/bangkok/bangkok-hotel-safari-world-to-don-mueang-airport-transfer" />
      <TransferBooking
        transferData={transfersData[id]}
        galleryImages={seo.gallery}
        seoContent={seo.seoContent}
        faqs={seo.faqs}
      />
    </>
  );
};

export default BangkokSafariWorldDmkAirport;
