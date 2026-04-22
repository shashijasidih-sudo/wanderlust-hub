import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";
import { bangkokTransferSEO } from "@/data/bangkokTransferSEO";

const BangkokToPattaya = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const id = "bangkok-to-pattaya";
  const seo = bangkokTransferSEO[id];
  return (
    <TransferBooking
      transferData={transfersData[id]}
      galleryImages={seo.gallery}
      seoContent={seo.seoContent}
      faqs={seo.faqs}
    />
  );
};

export default BangkokToPattaya;
