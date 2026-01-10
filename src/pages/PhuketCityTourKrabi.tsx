import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const PhuketCityTourKrabi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["phuket-city-tour-krabi"];

  return <TransferBooking transferData={transferData} />;
};

export default PhuketCityTourKrabi;
