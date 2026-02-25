import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { singaporeTransfersData } from "@/data/singaporeTransferData";

const SingaporeAirportDropoff = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = singaporeTransfersData["singapore-airport-dropoff"];

  return <TransferBooking transferData={transferData} />;
};

export default SingaporeAirportDropoff;
