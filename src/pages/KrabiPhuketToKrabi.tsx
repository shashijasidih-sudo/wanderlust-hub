import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const KrabiPhuketToKrabi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["krabi-phuket-to-krabi"];

  return <TransferBooking transferData={transferData} />;
};

export default KrabiPhuketToKrabi;
