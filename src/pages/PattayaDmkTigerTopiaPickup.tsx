import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const PattayaDmkTigerTopiaPickup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["pattaya-dmk-tiger-topia-pickup"];

  return <TransferBooking transferData={transferData} />;
};

export default PattayaDmkTigerTopiaPickup;
