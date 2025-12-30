import motLogo from "@/assets/ministry-of-tourism-logo.jpg";
import nidhiLogo from "@/assets/nidhi-logo.jpg";
import { Shield } from "lucide-react";

const ApprovalBadge = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border-b border-amber-200/50 shadow-sm">
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
            <div className="text-xs md:text-sm text-gray-700 font-medium text-center">
              <div>
                <span className="text-green-700 font-semibold">Approved by NIDHI</span>
                <span className="hidden sm:inline"> – National Integrated Database of Hospitality Industry</span>
              </div>
              <div className="text-gray-600 text-[10px] md:text-xs">
                An initiative by the Ministry of Tourism, Government of India
              </div>
            </div>
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
      {/* Spacer to prevent content from going under the fixed badge */}
      <div className="h-14 md:h-16" />
    </>
  );
};

export default ApprovalBadge;
