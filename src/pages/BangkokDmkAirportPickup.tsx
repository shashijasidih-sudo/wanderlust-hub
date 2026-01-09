import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const BangkokDmkAirportPickup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["bangkok-dmk-airport-pickup"];

  return <TransferBooking transferData={transferData} />;
};

export default BangkokDmkAirportPickup;
