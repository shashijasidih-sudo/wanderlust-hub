import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import CanonicalUrl from "@/components/seo/CanonicalUrl";
import { transfersData } from "@/data/transferData";
import { bangkokTransferSEO } from "@/data/bangkokTransferSEO";

const BangkokBkkAirportPickup = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const id = "bangkok-bkk-airport-pickup";
  const seo = bangkokTransferSEO[id];
  return (
    <>
      <CanonicalUrl path="/bangkok/suvarnabhumi-airport-to-bangkok-hotel-transfer" />
      <TransferBooking
        transferData={transfersData[id]}
        galleryImages={seo.gallery}
        seoContent={seo.seoContent}
        faqs={seo.faqs}
      />
    </>
  );
};

export default BangkokBkkAirportPickup;
