import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const KrabiHotelKbvAirport = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["krabi-hotel-kbv-airport"];

  return <TransferBooking transferData={transferData} />;
};

export default KrabiHotelKbvAirport;
