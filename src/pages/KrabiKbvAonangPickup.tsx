import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const KrabiKbvAonangPickup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["krabi-kbv-aonang-pickup"];

  return <TransferBooking transferData={transferData} />;
};

export default KrabiKbvAonangPickup;
