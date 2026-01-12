import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { dubaiTransfersData } from "@/data/dubaiTransferData";

const DubaiAirportDropoffZone4 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = dubaiTransfersData["dubai-airport-dropoff-zone4"];

  return <TransferBooking transferData={transferData} />;
};

export default DubaiAirportDropoffZone4;
