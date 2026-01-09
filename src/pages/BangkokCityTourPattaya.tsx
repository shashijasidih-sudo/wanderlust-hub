import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const BangkokCityTourPattaya = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["bangkok-city-tour-pattaya"];

  return <TransferBooking transferData={transferData} />;
};

export default BangkokCityTourPattaya;
