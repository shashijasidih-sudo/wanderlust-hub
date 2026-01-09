import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const BangkokTigerTopiaPattaya = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["bangkok-tiger-topia-pattaya"];

  return <TransferBooking transferData={transferData} />;
};

export default BangkokTigerTopiaPattaya;
