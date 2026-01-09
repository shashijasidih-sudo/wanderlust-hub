import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import ApprovalBadge from "@/components/ApprovalBadge";
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
import Disclaimer from "./pages/Disclaimer";
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
import Singapore from "./pages/Singapore";
import SingaporeCityTour from "./pages/SingaporeCityTour";
import NightSafariTickets from "./pages/NightSafariTickets";
import NightSafariTransfer from "./pages/NightSafariTransfer";
import NightSafariDinner from "./pages/NightSafariDinner";
import Sentosa4D2Rides from "./pages/Sentosa4D2Rides";
import Sentosa4D3Rides from "./pages/Sentosa4D3Rides";
import SentosaCableCar from "./pages/SentosaCableCar";
import SentosaWingsTime from "./pages/SentosaWingsTime";
import SentosaSkyHelix from "./pages/SentosaSkyHelix";
import SingaporeRiverCruise from "./pages/SingaporeRiverCruise";
import GardensByTheBay from "./pages/GardensByTheBay";
import AdventureCove from "./pages/AdventureCove";
import SingaporeFlyer from "./pages/SingaporeFlyer";
import RiverSafari from "./pages/RiverSafari";
import UniversalStudiosWeekday from "./pages/UniversalStudiosWeekday";
import UniversalStudiosWeekend from "./pages/UniversalStudiosWeekend";
import SingaporeZoo from "./pages/SingaporeZoo";
import RainforestWildAsia from "./pages/RainforestWildAsia";
import BigBusDiscover from "./pages/BigBusDiscover";
import BigBusNight from "./pages/BigBusNight";
import SingaporeTransfers from "./pages/SingaporeTransfers";
import SingaporeAirportPickup5 from "./pages/SingaporeAirportPickup5";
import SingaporeAirportPickup10 from "./pages/SingaporeAirportPickup10";
import SingaporeAirportDropoff5 from "./pages/SingaporeAirportDropoff5";
import SingaporeAirportDropoff10 from "./pages/SingaporeAirportDropoff10";
import SingaporeAirportNightPickup5 from "./pages/SingaporeAirportNightPickup5";
import SingaporeAirportNightPickup10 from "./pages/SingaporeAirportNightPickup10";
import DubaiTransfers from "./pages/DubaiTransfers";
import DubaiAirportPickupZone1_4Seater from "./pages/DubaiAirportPickupZone1_4Seater";
import DubaiAirportPickupZone1_7Seater from "./pages/DubaiAirportPickupZone1_7Seater";
import DubaiAirportPickupZone1_12Seater from "./pages/DubaiAirportPickupZone1_12Seater";
import DubaiAirportPickupZone2_4Seater from "./pages/DubaiAirportPickupZone2_4Seater";
import DubaiAirportPickupZone2_7Seater from "./pages/DubaiAirportPickupZone2_7Seater";
import DubaiAirportPickupZone2_12Seater from "./pages/DubaiAirportPickupZone2_12Seater";
import DubaiAirportPickupZone3_4Seater from "./pages/DubaiAirportPickupZone3_4Seater";
import DubaiAirportPickupZone3_7Seater from "./pages/DubaiAirportPickupZone3_7Seater";
import DubaiAirportPickupZone3_12Seater from "./pages/DubaiAirportPickupZone3_12Seater";
import DubaiAirportPickupZone4_4Seater from "./pages/DubaiAirportPickupZone4_4Seater";
import DubaiAirportPickupZone4_7Seater from "./pages/DubaiAirportPickupZone4_7Seater";
import DubaiAirportPickupZone4_12Seater from "./pages/DubaiAirportPickupZone4_12Seater";
import DubaiAirportPickupZone5_4Seater from "./pages/DubaiAirportPickupZone5_4Seater";
import DubaiAirportPickupZone5_7Seater from "./pages/DubaiAirportPickupZone5_7Seater";
import DubaiAirportPickupZone5_12Seater from "./pages/DubaiAirportPickupZone5_12Seater";
import DubaiAirportDropoffZone1_4Seater from "./pages/DubaiAirportDropoffZone1_4Seater";
import DubaiAirportDropoffZone1_7Seater from "./pages/DubaiAirportDropoffZone1_7Seater";
import DubaiAirportDropoffZone1_12Seater from "./pages/DubaiAirportDropoffZone1_12Seater";
import DubaiAirportDropoffZone2_4Seater from "./pages/DubaiAirportDropoffZone2_4Seater";
import DubaiAirportDropoffZone2_7Seater from "./pages/DubaiAirportDropoffZone2_7Seater";
import DubaiAirportDropoffZone2_12Seater from "./pages/DubaiAirportDropoffZone2_12Seater";
import DubaiAirportDropoffZone3_4Seater from "./pages/DubaiAirportDropoffZone3_4Seater";
import DubaiAirportDropoffZone3_7Seater from "./pages/DubaiAirportDropoffZone3_7Seater";
import DubaiAirportDropoffZone3_12Seater from "./pages/DubaiAirportDropoffZone3_12Seater";
import DubaiAirportDropoffZone4_4Seater from "./pages/DubaiAirportDropoffZone4_4Seater";
import DubaiAirportDropoffZone4_7Seater from "./pages/DubaiAirportDropoffZone4_7Seater";
import DubaiAirportDropoffZone4_12Seater from "./pages/DubaiAirportDropoffZone4_12Seater";
import DubaiAirportDropoffZone5_4Seater from "./pages/DubaiAirportDropoffZone5_4Seater";
import DubaiAirportDropoffZone5_7Seater from "./pages/DubaiAirportDropoffZone5_7Seater";
import DubaiAirportDropoffZone5_12Seater from "./pages/DubaiAirportDropoffZone5_12Seater";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import MyBookings from "./pages/MyBookings";
import Wishlist from "./pages/Wishlist";
import BangkokTransfers from "./pages/BangkokTransfers";
import BangkokBkkAirportPickup from "./pages/BangkokBkkAirportPickup";
import BangkokDmkAirportPickup from "./pages/BangkokDmkAirportPickup";
import BangkokBkkAirportDropoff from "./pages/BangkokBkkAirportDropoff";
import BangkokTempleTourAirport from "./pages/BangkokTempleTourAirport";
import BangkokDmkAirportDropoff from "./pages/BangkokDmkAirportDropoff";
import BangkokTempleTourDmkAirport from "./pages/BangkokTempleTourDmkAirport";
import BangkokSafariWorldBkkAirport from "./pages/BangkokSafariWorldBkkAirport";
import BangkokSafariWorldDmkAirport from "./pages/BangkokSafariWorldDmkAirport";
import BangkokCityHourlyRental from "./pages/BangkokCityHourlyRental";
import BangkokToPattaya from "./pages/BangkokToPattaya";
import BangkokCityTourPattaya from "./pages/BangkokCityTourPattaya";
import BangkokTigerTopiaPattaya from "./pages/BangkokTigerTopiaPattaya";
import PattayaTransfers from "./pages/PattayaTransfers";
import PattayaBkkAirportPickup from "./pages/PattayaBkkAirportPickup";
import PattayaBkkTigerTopiaPickup from "./pages/PattayaBkkTigerTopiaPickup";
import PattayaDmkAirportPickup from "./pages/PattayaDmkAirportPickup";
import PattayaDmkTigerTopiaPickup from "./pages/PattayaDmkTigerTopiaPickup";
import PattayaBkkAirportDropoff from "./pages/PattayaBkkAirportDropoff";
import PattayaTempleTourBkkAirport from "./pages/PattayaTempleTourBkkAirport";
import PattayaSafariWorldBkkAirport from "./pages/PattayaSafariWorldBkkAirport";
import PattayaDmkAirportDropoff from "./pages/PattayaDmkAirportDropoff";
import PattayaTempleTourDmkAirport from "./pages/PattayaTempleTourDmkAirport";
import PattayaIndraSquareDmkAirport from "./pages/PattayaIndraSquareDmkAirport";
import PattayaCityHourlyRental from "./pages/PattayaCityHourlyRental";
import CustomerInformation from "./pages/CustomerInformation";
import PaymentInformation from "./pages/PaymentInformation";
import BookingConfirmed from "./pages/BookingConfirmed";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ApprovalBadge />
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
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/dubai/dhow-cruise-creek-lower" element={<DhowCruiseCreekLower />} />
          <Route path="/dubai/dhow-cruise-creek-upper" element={<DhowCruiseCreekUpper />} />
          <Route path="/dubai/desert-safari-shisha" element={<DesertSafariShisha />} />
          <Route path="/dubai/desert-safari-sharing" element={<DesertSafariSharing />} />
          <Route path="/dubai/dubai-city-tour" element={<DubaiCityTour />} />
          <Route path="/dubai/dubai-city-tour-mall" element={<DubaiCityTourMall />} />
          <Route path="/dubai/dhow-cruise-marina-lower" element={<DhowCruiseMarinaLower />} />
          <Route path="/dubai/dhow-cruise-marina-upper" element={<DhowCruiseMarinaUpper />} />
          <Route path="/dubai/global-village-dubai" element={<GlobalVillageDubai />} />
          <Route path="/dubai/abu-dhabi-city-tour" element={<AbuDhabiCityTour />} />
          <Route path="/dubai/abu-dhabi-ferrari-world" element={<AbuDhabiFerrariWorld />} />
          <Route path="/dubai/dubai-aquarium-penguin" element={<DubaiAquariumPenguin />} />
          <Route path="/dubai/burj-khalifa-non-prime" element={<BurjKhalifaNonPrime />} />
          <Route path="/dubai/burj-khalifa-prime" element={<BurjKhalifaPrime />} />
          <Route path="/dubai/dubai-dolphin-show" element={<DubaiDolphinShow />} />
          <Route path="/dubai/miracle-garden-dubai" element={<MiracleGardenDubai />} />
          <Route path="/singapore" element={<Singapore />} />
          <Route path="/singapore/singapore-city-tour" element={<SingaporeCityTour />} />
          <Route path="/singapore/night-safari-tickets" element={<NightSafariTickets />} />
          <Route path="/singapore/night-safari-transfer" element={<NightSafariTransfer />} />
          <Route path="/singapore/night-safari-dinner" element={<NightSafariDinner />} />
          <Route path="/singapore/sentosa-4d-2rides" element={<Sentosa4D2Rides />} />
          <Route path="/singapore/sentosa-4d-3rides" element={<Sentosa4D3Rides />} />
          <Route path="/singapore/sentosa-cable-car" element={<SentosaCableCar />} />
          <Route path="/singapore/sentosa-wings-time" element={<SentosaWingsTime />} />
          <Route path="/singapore/sentosa-sky-helix" element={<SentosaSkyHelix />} />
          <Route path="/singapore/singapore-river-cruise" element={<SingaporeRiverCruise />} />
          <Route path="/singapore/gardens-by-the-bay" element={<GardensByTheBay />} />
          <Route path="/singapore/adventure-cove" element={<AdventureCove />} />
          <Route path="/singapore/singapore-flyer" element={<SingaporeFlyer />} />
          <Route path="/singapore/river-safari" element={<RiverSafari />} />
          <Route path="/singapore/universal-studios-weekday" element={<UniversalStudiosWeekday />} />
          <Route path="/singapore/universal-studios-weekend" element={<UniversalStudiosWeekend />} />
          <Route path="/singapore/singapore-zoo" element={<SingaporeZoo />} />
          <Route path="/singapore/rainforest-wild-asia" element={<RainforestWildAsia />} />
          <Route path="/singapore/big-bus-discover" element={<BigBusDiscover />} />
          <Route path="/singapore/big-bus-night" element={<BigBusNight />} />
          <Route path="/singapore/transfers" element={<SingaporeTransfers />} />
          <Route path="/singapore/airport-pickup-5-seater" element={<SingaporeAirportPickup5 />} />
          <Route path="/singapore/airport-pickup-10-seater" element={<SingaporeAirportPickup10 />} />
          <Route path="/singapore/airport-dropoff-5-seater" element={<SingaporeAirportDropoff5 />} />
          <Route path="/singapore/airport-dropoff-10-seater" element={<SingaporeAirportDropoff10 />} />
          <Route path="/singapore/airport-night-pickup-5-seater" element={<SingaporeAirportNightPickup5 />} />
          <Route path="/singapore/airport-night-pickup-10-seater" element={<SingaporeAirportNightPickup10 />} />
          <Route path="/dubai/transfers" element={<DubaiTransfers />} />
          <Route path="/dubai/airport-pickup-zone1-4-seater" element={<DubaiAirportPickupZone1_4Seater />} />
          <Route path="/dubai/airport-pickup-zone1-7-seater" element={<DubaiAirportPickupZone1_7Seater />} />
          <Route path="/dubai/airport-pickup-zone1-12-seater" element={<DubaiAirportPickupZone1_12Seater />} />
          <Route path="/dubai/airport-pickup-zone2-4-seater" element={<DubaiAirportPickupZone2_4Seater />} />
          <Route path="/dubai/airport-pickup-zone2-7-seater" element={<DubaiAirportPickupZone2_7Seater />} />
          <Route path="/dubai/airport-pickup-zone2-12-seater" element={<DubaiAirportPickupZone2_12Seater />} />
          <Route path="/dubai/airport-pickup-zone3-4-seater" element={<DubaiAirportPickupZone3_4Seater />} />
          <Route path="/dubai/airport-pickup-zone3-7-seater" element={<DubaiAirportPickupZone3_7Seater />} />
          <Route path="/dubai/airport-pickup-zone3-12-seater" element={<DubaiAirportPickupZone3_12Seater />} />
          <Route path="/dubai/airport-pickup-zone4-4-seater" element={<DubaiAirportPickupZone4_4Seater />} />
          <Route path="/dubai/airport-pickup-zone4-7-seater" element={<DubaiAirportPickupZone4_7Seater />} />
          <Route path="/dubai/airport-pickup-zone4-12-seater" element={<DubaiAirportPickupZone4_12Seater />} />
          <Route path="/dubai/airport-pickup-zone5-4-seater" element={<DubaiAirportPickupZone5_4Seater />} />
          <Route path="/dubai/airport-pickup-zone5-7-seater" element={<DubaiAirportPickupZone5_7Seater />} />
          <Route path="/dubai/airport-pickup-zone5-12-seater" element={<DubaiAirportPickupZone5_12Seater />} />
          <Route path="/dubai/airport-dropoff-zone1-4-seater" element={<DubaiAirportDropoffZone1_4Seater />} />
          <Route path="/dubai/airport-dropoff-zone1-7-seater" element={<DubaiAirportDropoffZone1_7Seater />} />
          <Route path="/dubai/airport-dropoff-zone1-12-seater" element={<DubaiAirportDropoffZone1_12Seater />} />
          <Route path="/dubai/airport-dropoff-zone2-4-seater" element={<DubaiAirportDropoffZone2_4Seater />} />
          <Route path="/dubai/airport-dropoff-zone2-7-seater" element={<DubaiAirportDropoffZone2_7Seater />} />
          <Route path="/dubai/airport-dropoff-zone2-12-seater" element={<DubaiAirportDropoffZone2_12Seater />} />
          <Route path="/dubai/airport-dropoff-zone3-4-seater" element={<DubaiAirportDropoffZone3_4Seater />} />
          <Route path="/dubai/airport-dropoff-zone3-7-seater" element={<DubaiAirportDropoffZone3_7Seater />} />
          <Route path="/dubai/airport-dropoff-zone3-12-seater" element={<DubaiAirportDropoffZone3_12Seater />} />
          <Route path="/dubai/airport-dropoff-zone4-4-seater" element={<DubaiAirportDropoffZone4_4Seater />} />
          <Route path="/dubai/airport-dropoff-zone4-7-seater" element={<DubaiAirportDropoffZone4_7Seater />} />
          <Route path="/dubai/airport-dropoff-zone4-12-seater" element={<DubaiAirportDropoffZone4_12Seater />} />
          <Route path="/dubai/airport-dropoff-zone5-4-seater" element={<DubaiAirportDropoffZone5_4Seater />} />
          <Route path="/dubai/airport-dropoff-zone5-7-seater" element={<DubaiAirportDropoffZone5_7Seater />} />
          <Route path="/dubai/airport-dropoff-zone5-12-seater" element={<DubaiAirportDropoffZone5_12Seater />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/bangkok/transfers" element={<BangkokTransfers />} />
          <Route path="/bangkok/bkk-airport-pickup" element={<BangkokBkkAirportPickup />} />
          <Route path="/bangkok/dmk-airport-pickup" element={<BangkokDmkAirportPickup />} />
          <Route path="/bangkok/bkk-airport-dropoff" element={<BangkokBkkAirportDropoff />} />
          <Route path="/bangkok/dmk-airport-dropoff" element={<BangkokDmkAirportDropoff />} />
          <Route path="/bangkok/temple-tour-airport" element={<BangkokTempleTourAirport />} />
          <Route path="/bangkok/temple-tour-dmk-airport" element={<BangkokTempleTourDmkAirport />} />
          <Route path="/bangkok/safari-world-bkk-airport" element={<BangkokSafariWorldBkkAirport />} />
          <Route path="/bangkok/safari-world-dmk-airport" element={<BangkokSafariWorldDmkAirport />} />
          <Route path="/bangkok/city-hourly-rental" element={<BangkokCityHourlyRental />} />
          <Route path="/bangkok/to-pattaya" element={<BangkokToPattaya />} />
          <Route path="/bangkok/city-tour-pattaya" element={<BangkokCityTourPattaya />} />
          <Route path="/bangkok/tiger-topia-pattaya" element={<BangkokTigerTopiaPattaya />} />
          <Route path="/pattaya/transfers" element={<PattayaTransfers />} />
          <Route path="/pattaya/bkk-airport-pickup" element={<PattayaBkkAirportPickup />} />
          <Route path="/pattaya/bkk-tiger-topia-pickup" element={<PattayaBkkTigerTopiaPickup />} />
          <Route path="/pattaya/dmk-airport-pickup" element={<PattayaDmkAirportPickup />} />
          <Route path="/pattaya/dmk-tiger-topia-pickup" element={<PattayaDmkTigerTopiaPickup />} />
          <Route path="/pattaya/bkk-airport-dropoff" element={<PattayaBkkAirportDropoff />} />
          <Route path="/pattaya/temple-tour-bkk-airport" element={<PattayaTempleTourBkkAirport />} />
          <Route path="/pattaya/safari-world-bkk-airport" element={<PattayaSafariWorldBkkAirport />} />
          <Route path="/pattaya/dmk-airport-dropoff" element={<PattayaDmkAirportDropoff />} />
          <Route path="/pattaya/temple-tour-dmk-airport" element={<PattayaTempleTourDmkAirport />} />
          <Route path="/pattaya/indra-square-dmk-airport" element={<PattayaIndraSquareDmkAirport />} />
          <Route path="/pattaya/city-hourly-rental" element={<PattayaCityHourlyRental />} />
          <Route path="/customer-information" element={<CustomerInformation />} />
          <Route path="/payment-information" element={<PaymentInformation />} />
          <Route path="/booking-confirmed" element={<BookingConfirmed />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
