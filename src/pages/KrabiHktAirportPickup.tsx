import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const KrabiHktAirportPickup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["krabi-hkt-airport-pickup"];

  return <TransferBooking transferData={transferData} />;
};

export default KrabiHktAirportPickup;
