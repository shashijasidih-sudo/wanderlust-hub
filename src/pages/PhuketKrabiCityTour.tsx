import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const PhuketKrabiCityTour = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["phuket-krabi-city-tour"];

  return <TransferBooking transferData={transferData} />;
};

export default PhuketKrabiCityTour;
