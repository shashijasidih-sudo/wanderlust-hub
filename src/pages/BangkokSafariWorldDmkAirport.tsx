import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const BangkokSafariWorldDmkAirport = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["bangkok-safari-world-dmk-airport"];

  return <TransferBooking transferData={transferData} />;
};

export default BangkokSafariWorldDmkAirport;
