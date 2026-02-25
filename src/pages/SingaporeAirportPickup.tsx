import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { singaporeTransfersData } from "@/data/singaporeTransferData";

const SingaporeAirportPickup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = singaporeTransfersData["singapore-airport-pickup"];

  return <TransferBooking transferData={transferData} />;
};

export default SingaporeAirportPickup;
