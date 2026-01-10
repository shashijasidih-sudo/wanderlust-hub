import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const PhuketToKrabi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["phuket-to-krabi"];

  return <TransferBooking transferData={transferData} />;
};

export default PhuketToKrabi;
