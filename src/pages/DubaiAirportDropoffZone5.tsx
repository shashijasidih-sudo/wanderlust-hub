import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { dubaiTransfersData } from "@/data/dubaiTransferData";

const DubaiAirportDropoffZone5 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = dubaiTransfersData["dubai-airport-dropoff-zone5"];

  return <TransferBooking transferData={transferData} />;
};

export default DubaiAirportDropoffZone5;
