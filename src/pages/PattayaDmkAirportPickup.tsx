import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const PattayaDmkAirportPickup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["pattaya-dmk-airport-pickup"];

  return <TransferBooking transferData={transferData} />;
};

export default PattayaDmkAirportPickup;
