import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const BangkokTempleTourAirport = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["bangkok-temple-tour-airport"];

  return <TransferBooking transferData={transferData} />;
};

export default BangkokTempleTourAirport;
