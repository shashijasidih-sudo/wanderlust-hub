import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const KrabiHktAirportDropoff = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["krabi-hkt-airport-dropoff"];

  return <TransferBooking transferData={transferData} />;
};

export default KrabiHktAirportDropoff;
