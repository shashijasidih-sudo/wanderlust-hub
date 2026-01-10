import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const KrabiPhuketCityTourKrabi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["krabi-phuket-city-tour-krabi"];

  return <TransferBooking transferData={transferData} />;
};

export default KrabiPhuketCityTourKrabi;
