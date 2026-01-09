import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const BangkokSafariWorldBkkAirport = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["bangkok-safari-world-bkk-airport"];

  return <TransferBooking transferData={transferData} />;
};

export default BangkokSafariWorldBkkAirport;
