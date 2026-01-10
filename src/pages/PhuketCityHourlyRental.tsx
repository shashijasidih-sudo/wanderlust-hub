import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const PhuketCityHourlyRental = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["phuket-city-hourly-rental"];

  return <TransferBooking transferData={transferData} />;
};

export default PhuketCityHourlyRental;
