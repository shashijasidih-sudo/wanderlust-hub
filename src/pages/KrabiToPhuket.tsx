import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const KrabiToPhuket = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["krabi-to-phuket"];

  return <TransferBooking transferData={transferData} />;
};

export default KrabiToPhuket;
