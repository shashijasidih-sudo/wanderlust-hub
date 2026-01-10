import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const PhuketCityTourHktAirport = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["phuket-city-tour-hkt-airport"];

  return <TransferBooking transferData={transferData} />;
};

export default PhuketCityTourHktAirport;
