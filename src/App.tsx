import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Thailand from "./pages/Thailand";
import Bangkok from "./pages/Bangkok";
import Pattaya from "./pages/Pattaya";
import Phuket from "./pages/Phuket";
import Krabi from "./pages/Krabi";
import Dubai from "./pages/Dubai";
import PhiPhiIsland from "./pages/PhiPhiIsland";
import JamesBondIsland from "./pages/JamesBondIsland";
import SentosaIsland from "./pages/SentosaIsland";
import DesertSafari from "./pages/DesertSafari";
import DolphinShow from "./pages/DolphinShow";
import SelfieWithTigers from "./pages/SelfieWithTigers";
import ElephantSafari from "./pages/ElephantSafari";
import HotSpringEmeralPool from "./pages/HotSpringEmeralPool";
import BangkokSkywalk from "./pages/BangkokSkywalk";
import DhowCruise from "./pages/DhowCruise";
import AtlantisPalm from "./pages/AtlantisPalm";
import MassageCoupons from "./pages/MassageCoupons";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/thailand" element={<Thailand />} />
          <Route path="/bangkok" element={<Bangkok />} />
          <Route path="/pattaya" element={<Pattaya />} />
          <Route path="/phuket" element={<Phuket />} />
          <Route path="/krabi" element={<Krabi />} />
          <Route path="/dubai" element={<Dubai />} />
          <Route path="/phi-phi-island" element={<PhiPhiIsland />} />
          <Route path="/james-bond-island" element={<JamesBondIsland />} />
          <Route path="/sentosa-island" element={<SentosaIsland />} />
          <Route path="/desert-safari" element={<DesertSafari />} />
          <Route path="/dolphin-show" element={<DolphinShow />} />
          <Route path="/selfie-tigers" element={<SelfieWithTigers />} />
          <Route path="/elephant-safari" element={<ElephantSafari />} />
          <Route path="/hot-spring" element={<HotSpringEmeralPool />} />
          <Route path="/bangkok-skywalk" element={<BangkokSkywalk />} />
          <Route path="/dhow-cruise" element={<DhowCruise />} />
          <Route path="/atlantis-palm" element={<AtlantisPalm />} />
          <Route path="/massage-coupons" element={<MassageCoupons />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
