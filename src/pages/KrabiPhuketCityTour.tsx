import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const KrabiPhuketCityTour = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["krabi-phuket-city-tour"];

  return <TransferBooking transferData={transferData} />;
};

export default KrabiPhuketCityTour;
