import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const PattayaBkkAirportPickup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["pattaya-bkk-airport-pickup"];

  return <TransferBooking transferData={transferData} />;
};

export default PattayaBkkAirportPickup;
