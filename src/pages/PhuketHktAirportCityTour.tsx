import { useEffect } from "react";
import TransferBooking from "@/components/TransferBooking";
import { transfersData } from "@/data/transferData";

const PhuketHktAirportCityTour = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferData = transfersData["phuket-hkt-airport-city-tour"];

  return <TransferBooking transferData={transferData} />;
};

export default PhuketHktAirportCityTour;
