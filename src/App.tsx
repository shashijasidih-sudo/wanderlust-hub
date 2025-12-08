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
import DolphinBayPhuket from "./pages/DolphinBayPhuket";
import PhuketCityNightMarket from "./pages/PhuketCityNightMarket";
import PhuketSimonCabaret from "./pages/PhuketSimonCabaret";
import PhuketCarnivalMagic from "./pages/PhuketCarnivalMagic";
import PhuketMuslimFriendlyTour from "./pages/PhuketMuslimFriendlyTour";
import PattayaFloatingMarketTour from "./pages/PattayaFloatingMarketTour";
import PattayaBigBuddhaGems from "./pages/PattayaBigBuddhaGems";
import CoralIslandPattaya from "./pages/CoralIslandPattaya";
import NongNoochGarden from "./pages/NongNoochGarden";
import PattayaDolphinarium from "./pages/PattayaDolphinarium";
import MuayThaiPattaya from "./pages/MuayThaiPattaya";
import AlcazarShowPattaya from "./pages/AlcazarShowPattaya";
import PattayaFloatingMarketGuided from "./pages/PattayaFloatingMarketGuided";
import HongIslandsLongtail from "./pages/HongIslandsLongtail";
import HongIslandsSpeedboat from "./pages/HongIslandsSpeedboat";
import SevenIslandsLongtail from "./pages/SevenIslandsLongtail";
import SevenIslandsSpeedboat from "./pages/SevenIslandsSpeedboat";
import FourIslandsLongtail from "./pages/FourIslandsLongtail";
import FourIslandsSpeedboat from "./pages/FourIslandsSpeedboat";
import TourPackages from "./pages/TourPackages";
import ThailandSmartGuides from "./pages/ThailandSmartGuides";
import DubaiSmartGuides from "./pages/DubaiSmartGuides";
import SingaporeSmartGuides from "./pages/SingaporeSmartGuides";
import NetherlandsSmartGuides from "./pages/NetherlandsSmartGuides";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import DhowCruiseCreekLower from "./pages/DhowCruiseCreekLower";
import DhowCruiseCreekUpper from "./pages/DhowCruiseCreekUpper";
import DesertSafariShisha from "./pages/DesertSafariShisha";
import DesertSafariSharing from "./pages/DesertSafariSharing";
import DubaiCityTour from "./pages/DubaiCityTour";
import DubaiCityTourMall from "./pages/DubaiCityTourMall";
import DhowCruiseMarinaLower from "./pages/DhowCruiseMarinaLower";
import DhowCruiseMarinaUpper from "./pages/DhowCruiseMarinaUpper";
import GlobalVillageDubai from "./pages/GlobalVillageDubai";
import AbuDhabiCityTour from "./pages/AbuDhabiCityTour";
import AbuDhabiFerrariWorld from "./pages/AbuDhabiFerrariWorld";
import DubaiAquariumPenguin from "./pages/DubaiAquariumPenguin";
import BurjKhalifaNonPrime from "./pages/BurjKhalifaNonPrime";
import BurjKhalifaPrime from "./pages/BurjKhalifaPrime";
import DubaiDolphinShow from "./pages/DubaiDolphinShow";
import MiracleGardenDubai from "./pages/MiracleGardenDubai";

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
          <Route path="/dolphin-bay-phuket" element={<DolphinBayPhuket />} />
          <Route path="/phuket-city-night-market" element={<PhuketCityNightMarket />} />
          <Route path="/phuket-simon-cabaret" element={<PhuketSimonCabaret />} />
          <Route path="/phuket-carnival-magic" element={<PhuketCarnivalMagic />} />
          <Route path="/phuket-muslim-friendly-tour" element={<PhuketMuslimFriendlyTour />} />
          <Route path="/pattaya-floating-market-tour" element={<PattayaFloatingMarketTour />} />
          <Route path="/pattaya-big-buddha-gems" element={<PattayaBigBuddhaGems />} />
          <Route path="/coral-island-pattaya" element={<CoralIslandPattaya />} />
          <Route path="/nong-nooch-garden" element={<NongNoochGarden />} />
          <Route path="/pattaya-dolphinarium" element={<PattayaDolphinarium />} />
          <Route path="/muay-thai-pattaya" element={<MuayThaiPattaya />} />
          <Route path="/alcazar-show-pattaya" element={<AlcazarShowPattaya />} />
          <Route path="/pattaya-floating-market-guided" element={<PattayaFloatingMarketGuided />} />
          <Route path="/hong-islands-longtail" element={<HongIslandsLongtail />} />
          <Route path="/hong-islands-speedboat" element={<HongIslandsSpeedboat />} />
          <Route path="/seven-islands-longtail" element={<SevenIslandsLongtail />} />
          <Route path="/seven-islands-speedboat" element={<SevenIslandsSpeedboat />} />
          <Route path="/four-islands-longtail" element={<FourIslandsLongtail />} />
          <Route path="/four-islands-speedboat" element={<FourIslandsSpeedboat />} />
          <Route path="/tour-packages" element={<TourPackages />} />
          <Route path="/thailand-smart-guides" element={<ThailandSmartGuides />} />
          <Route path="/dubai-smart-guides" element={<DubaiSmartGuides />} />
          <Route path="/singapore-smart-guides" element={<SingaporeSmartGuides />} />
          <Route path="/netherlands-smart-guides" element={<NetherlandsSmartGuides />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
