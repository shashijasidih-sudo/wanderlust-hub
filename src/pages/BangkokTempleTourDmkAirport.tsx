import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const BangkokTempleTourDmkAirport = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["bangkok-temple-tour-dmk-airport"];

  return <TransferBooking transferData={transferData} />;
};

export default BangkokTempleTourDmkAirport;
