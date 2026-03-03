import motLogo from "@/assets/ministry-of-tourism-logo-new.png";
import nidhiLogo from "@/assets/nidhi-logo.jpg";
import { Shield, BadgeCheck, Award } from "lucide-react";

const ApprovalBadge = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border-b border-amber-200/50 shadow-sm overflow-hidden">
        {/* Animated shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_3s_ease-in-out_infinite]" />
        
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-center gap-3 md:gap-6 py-2">
            {/* Ministry of Tourism Logo with glow */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-lg opacity-30 group-hover:opacity-50 blur transition-opacity duration-300" />
              <img 
                src={motLogo} 
                alt="Ministry of Tourism, Government of India" 
                className="relative h-10 md:h-12 object-contain rounded"
              />
            </div>
            
            {/* Animated Trust Seal */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-green-50 to-blue-50 rounded-full border border-green-200/50 shadow-sm relative overflow-hidden group">
              {/* Pulse ring animation */}
              <div className="absolute inset-0 rounded-full border-2 border-green-400/50 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-75" />
              
              {/* Verified badge with animation */}
              <div className="relative flex items-center gap-1.5">
                <div className="relative">
                  <Shield className="h-5 w-5 text-green-600 animate-[pulse_2s_ease-in-out_infinite]" />
                  <BadgeCheck className="absolute -top-1 -right-1 h-3 w-3 text-blue-500 animate-[bounce_1s_ease-in-out_infinite]" />
                </div>
                
                <div className="text-xs md:text-sm font-medium">
                  <div className="flex items-center gap-1.5 flex-wrap justify-center">
                    <span className="inline-flex items-center gap-1 text-green-700 font-semibold">
                      <span className="relative">
                        NIDHI Approved
                        <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-green-400/50 rounded" />
                      </span>
                    </span>
                    <span className="text-gray-400 hidden sm:inline">•</span>
                    <span className="inline-flex items-center gap-1 text-blue-700 font-semibold hidden sm:inline-flex">
                      <Award className="h-3.5 w-3.5 text-blue-500" />
                      <span className="relative">
                        UDYAM MSME
                        <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-blue-400/50 rounded" />
                      </span>
                    </span>
                  </div>
                  <div className="text-gray-600 text-[10px] md:text-xs text-center mt-0.5">
                    Ministry of Tourism, Govt. of India
                  </div>
                </div>
              </div>
            </div>
            
            {/* NIDHI Logo with glow */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg opacity-30 group-hover:opacity-50 blur transition-opacity duration-300" />
              <img 
                src={nidhiLogo} 
                alt="NIDHI - National Integrated Database of Hospitality Industry" 
                className="relative h-10 md:h-12 object-contain rounded"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Spacer to prevent content from going under the fixed badge */}
      <div className="h-14 md:h-16" />
      
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          50%, 100% { transform: translateX(100%); }
        }
      `}</style>
    </>
  );
};

export default ApprovalBadge;
