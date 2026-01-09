import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const PattayaTempleTourBkkAirport = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["pattaya-temple-tour-bkk-airport"];

  return <TransferBooking transferData={transferData} />;
};

export default PattayaTempleTourBkkAirport;
