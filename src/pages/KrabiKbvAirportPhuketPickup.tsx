import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const KrabiKbvAirportPhuketPickup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["krabi-kbv-airport-phuket-pickup"];

  return <TransferBooking transferData={transferData} />;
};

export default KrabiKbvAirportPhuketPickup;
