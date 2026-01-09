import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const PattayaBkkTigerTopiaPickup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["pattaya-bkk-tiger-topia-pickup"];

  return <TransferBooking transferData={transferData} />;
};

export default PattayaBkkTigerTopiaPickup;
