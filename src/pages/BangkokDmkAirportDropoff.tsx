import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const BangkokDmkAirportDropoff = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["bangkok-dmk-airport-dropoff"];

  return <TransferBooking transferData={transferData} />;
};

export default BangkokDmkAirportDropoff;
