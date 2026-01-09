import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const PattayaDmkAirportDropoff = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["pattaya-dmk-airport-dropoff"];

  return <TransferBooking transferData={transferData} />;
};

export default PattayaDmkAirportDropoff;
