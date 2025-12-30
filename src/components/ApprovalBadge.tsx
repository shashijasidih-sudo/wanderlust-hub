import motLogo from "@/assets/ministry-of-tourism-logo.jpg";
import nidhiLogo from "@/assets/nidhi-logo.jpg";
import { Shield } from "lucide-react";

const ApprovalBadge = () => {
  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border-b border-amber-200/50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 md:gap-6 py-2">
          {/* Ministry of Tourism Logo */}
          <img 
            src={motLogo} 
            alt="Ministry of Tourism, Government of India" 
            className="h-10 md:h-12 object-contain"
          />
          
          {/* Approval Text */}
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-green-600 hidden sm:block" />
            <p className="text-xs md:text-sm text-gray-700 font-medium text-center">
              <span className="text-green-700 font-semibold">Approved by NIDHI</span>
              <span className="hidden sm:inline"> – National Integrated Database of Hospitality Industry</span>
              <span className="block sm:inline sm:ml-1 text-gray-600 text-[10px] md:text-xs">
                An initiative by the Ministry of Tourism, Government of India
              </span>
            </p>
          </div>
          
          {/* NIDHI Logo */}
          <img 
            src={nidhiLogo} 
            alt="NIDHI - National Integrated Database of Hospitality Industry" 
            className="h-10 md:h-12 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ApprovalBadge;
