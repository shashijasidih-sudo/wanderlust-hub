import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const PattayaBkkAirportDropoff = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["pattaya-bkk-airport-dropoff"];

  return <TransferBooking transferData={transferData} />;
};

export default PattayaBkkAirportDropoff;
