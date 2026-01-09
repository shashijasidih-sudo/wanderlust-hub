import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const BangkokCityHourlyRental = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["bangkok-city-hourly-rental"];

  return <TransferBooking transferData={transferData} />;
};

export default BangkokCityHourlyRental;
