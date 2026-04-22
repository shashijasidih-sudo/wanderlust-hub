import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import CanonicalUrl from "@/components/seo/CanonicalUrl";
import { transfersData } from "@/data/transferData";
import { bangkokTransferSEO } from "@/data/bangkokTransferSEO";

const BangkokTigerTopiaPattaya = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const id = "bangkok-tiger-topia-pattaya";
  const seo = bangkokTransferSEO[id];
  return (
    <>
      <CanonicalUrl path="/bangkok/tiger-topia-sriracha-zoo-to-pattaya-hotel-transfer" />
      <TransferBooking
        transferData={transfersData[id]}
        galleryImages={seo.gallery}
        seoContent={seo.seoContent}
        faqs={seo.faqs}
      />
    </>
  );
};

export default BangkokTigerTopiaPattaya;
