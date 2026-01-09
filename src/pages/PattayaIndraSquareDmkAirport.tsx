import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const PattayaIndraSquareDmkAirport = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["pattaya-indra-square-dmk-airport"];

  return <TransferBooking transferData={transferData} />;
};

export default PattayaIndraSquareDmkAirport;
