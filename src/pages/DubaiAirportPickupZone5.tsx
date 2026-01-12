import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { dubaiTransfersData } from "@/data/dubaiTransferData";

const DubaiAirportPickupZone5 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = dubaiTransfersData["dubai-airport-pickup-zone5"];

  return <TransferBooking transferData={transferData} />;
};

export default DubaiAirportPickupZone5;
