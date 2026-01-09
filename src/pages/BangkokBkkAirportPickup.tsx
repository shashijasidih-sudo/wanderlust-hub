import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const BangkokBkkAirportPickup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["bangkok-bkk-airport-pickup"];

  return <TransferBooking transferData={transferData} />;
};

export default BangkokBkkAirportPickup;
