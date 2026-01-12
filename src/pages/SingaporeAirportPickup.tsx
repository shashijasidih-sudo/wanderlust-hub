import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TransferBooking from "@/components/TransferBooking";
import { singaporeTransfersData } from "@/data/singaporeTransferData";

const SingaporeAirportPickup = () => {
  const transferData = singaporeTransfersData["singapore-airport-pickup"];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <TransferBooking transferData={transferData} />
      </main>
      <Footer />
    </div>
  );
};

export default SingaporeAirportPickup;
