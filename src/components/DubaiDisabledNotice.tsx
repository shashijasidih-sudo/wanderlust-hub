import { AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DubaiDisabledNotice = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="bg-amber-50 border-2 border-amber-400 rounded-2xl p-8 md:p-12 max-w-2xl text-center shadow-lg">
          <AlertTriangle className="h-16 w-16 text-amber-500 mx-auto mb-6" />
          <h1 className="text-2xl md:text-3xl font-bold text-amber-800 mb-4">
            Dubai Activities Temporarily Unavailable
          </h1>
          <p className="text-lg text-amber-700 leading-relaxed">
            ⚠️ We will soon update the prices as per the ongoing War Situation
          </p>
          <p className="text-sm text-amber-600 mt-4">
            Please check back soon. We apologize for the inconvenience.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DubaiDisabledNotice;
