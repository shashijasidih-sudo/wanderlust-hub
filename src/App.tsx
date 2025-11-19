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
import SafariWorld from "./pages/SafariWorld";
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
import BangkokThreeTemples from "./pages/BangkokThreeTemples";
import BangkokWatArunPhoTraimit from "./pages/BangkokWatArunPhoTraimit";
import BangkokCityBoatTour from "./pages/BangkokCityBoatTour";
import BangkokCityGemsGallery from "./pages/BangkokCityGemsGallery";
import BangkokWatArunChinatown from "./pages/BangkokWatArunChinatown";
import BangkokGoldenMarbleBuddha from "./pages/BangkokGoldenMarbleBuddha";
import AyutthayaTempleTour from "./pages/AyutthayaTempleTour";
import BangkokGrandPalaceEmerald from "./pages/BangkokGrandPalaceEmerald";
import BaiyokeBuffet from "./pages/BaiyokeBuffet";
import SeaLifeMadameTussauds from "./pages/SeaLifeMadameTussauds";
import VivaAlangkaCruise from "./pages/VivaAlangkaCruise";
import AyutthayaSunsetCruise from "./pages/AyutthayaSunsetCruise";
import ChaoPhrayaPrincessPrivate from "./pages/ChaoPhrayaPrincessPrivate";
import ChaoPhrayaPrincessValentine from "./pages/ChaoPhrayaPrincessValentine";
import ChaoPhrayaPrincessJoin from "./pages/ChaoPhrayaPrincessJoin";
import MaeklongFloatingMarket from "./pages/MaeklongFloatingMarket";
import BangkokTukTukNight from "./pages/BangkokTukTukNight";
import DreamWorldBangkok from "./pages/DreamWorldBangkok";

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
          <Route path="/safari-world" element={<SafariWorld />} />
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
          <Route path="/bangkok-three-temples" element={<BangkokThreeTemples />} />
          <Route path="/bangkok-wat-arun-pho-traimit" element={<BangkokWatArunPhoTraimit />} />
          <Route path="/bangkok-city-boat-tour" element={<BangkokCityBoatTour />} />
          <Route path="/bangkok-city-gems-gallery" element={<BangkokCityGemsGallery />} />
          <Route path="/bangkok-wat-arun-chinatown" element={<BangkokWatArunChinatown />} />
          <Route path="/bangkok-golden-marble-buddha" element={<BangkokGoldenMarbleBuddha />} />
          <Route path="/ayutthaya-temple-tour" element={<AyutthayaTempleTour />} />
          <Route path="/bangkok-grand-palace-emerald" element={<BangkokGrandPalaceEmerald />} />
          <Route path="/baiyoke-buffet" element={<BaiyokeBuffet />} />
          <Route path="/sea-life-madame-tussauds" element={<SeaLifeMadameTussauds />} />
          <Route path="/viva-alangka-cruise" element={<VivaAlangkaCruise />} />
          <Route path="/ayutthaya-sunset-cruise" element={<AyutthayaSunsetCruise />} />
          <Route path="/chao-phraya-princess-private" element={<ChaoPhrayaPrincessPrivate />} />
          <Route path="/chao-phraya-princess-valentine" element={<ChaoPhrayaPrincessValentine />} />
          <Route path="/chao-phraya-princess-join" element={<ChaoPhrayaPrincessJoin />} />
          <Route path="/maeklong-floating-market" element={<MaeklongFloatingMarket />} />
          <Route path="/bangkok-tuk-tuk-night" element={<BangkokTukTukNight />} />
          <Route path="/dream-world-bangkok" element={<DreamWorldBangkok />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
