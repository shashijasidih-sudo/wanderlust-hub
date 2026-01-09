import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const PattayaCityHourlyRental = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["pattaya-city-hourly-rental"];

  return <TransferBooking transferData={transferData} />;
};

export default PattayaCityHourlyRental;
