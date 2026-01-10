import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const KrabiPhuketKrabiCityTour = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["krabi-phuket-krabi-city-tour"];

  return <TransferBooking transferData={transferData} />;
};

export default KrabiPhuketKrabiCityTour;
