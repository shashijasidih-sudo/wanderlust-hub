import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const PattayaSafariWorldBkkAirport = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["pattaya-safari-world-bkk-airport"];

  return <TransferBooking transferData={transferData} />;
};

export default PattayaSafariWorldBkkAirport;
