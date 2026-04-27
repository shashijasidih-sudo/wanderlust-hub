import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import CanonicalUrl from "@/components/seo/CanonicalUrl";
import { transfersData } from "@/data/transferData";
import { bangkokTransferSEO } from "@/data/bangkokTransferSEO";

const BangkokDmkAirportPickup = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const id = "bangkok-dmk-airport-pickup";
  const seo = bangkokTransferSEO[id];
  return (
    <>
      <CanonicalUrl path="/thailand/bangkok/don-mueang-airport-to-bangkok-hotel-transfer" />
      <TransferBooking
        transferData={transfersData[id]}
        galleryImages={seo.gallery}
        seoContent={seo.seoContent}
        faqs={seo.faqs}
      />
    </>
  );
};

export default BangkokDmkAirportPickup;
