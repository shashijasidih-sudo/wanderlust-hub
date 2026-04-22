import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { CurrencyProvider } from "@/contexts/CurrencyContext";
import ApprovalBadge from "@/components/ApprovalBadge";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RoutesHealthCheck from "./pages/RoutesHealthCheck";
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
import ChaoPhrayaPrincessNoTransfer from "./pages/ChaoPhrayaPrincessNoTransfer";
import MaeklongFloatingMarket from "./pages/MaeklongFloatingMarket";
import BangkokTukTukNight from "./pages/BangkokTukTukNight";
import DreamWorldBangkok from "./pages/DreamWorldBangkok";
import DolphinBayPhuket from "./pages/DolphinBayPhuket";
import PhuketCityNightMarket from "./pages/PhuketCityNightMarket";
import PhuketSimonCabaret from "./pages/PhuketSimonCabaret";
import PhuketCarnivalMagic from "./pages/PhuketCarnivalMagic";
import PhuketMuslimFriendlyTour from "./pages/PhuketMuslimFriendlyTour";
import SelfieWithTigerATV from "./pages/SelfieWithTigerATV";
import JamesBondIslandSeaCanoe from "./pages/JamesBondIslandSeaCanoe";
import PhiPhiBigBoat from "./pages/PhiPhiBigBoat";
import PhiPhiRoyalJet from "./pages/PhiPhiRoyalJet";
import PhiPhiMayaKhaiSpeedboat from "./pages/PhiPhiMayaKhaiSpeedboat";
import PattayaFloatingMarketTour from "./pages/PattayaFloatingMarketTour";
import PattayaBigBuddhaGems from "./pages/PattayaBigBuddhaGems";
import CoralIslandPattaya from "./pages/CoralIslandPattaya";
import NongNoochGarden from "./pages/NongNoochGarden";
import PattayaDolphinarium from "./pages/PattayaDolphinarium";
import MuayThaiPattaya from "./pages/MuayThaiPattaya";
import AlcazarShowPattaya from "./pages/AlcazarShowPattaya";
import Imagine79Show from "./pages/Imagine79Show";
import Show69Pattaya from "./pages/Show69Pattaya";
import Show89Pattaya from "./pages/Show89Pattaya";
import BigEyeShowPattaya from "./pages/BigEyeShowPattaya";
import PattayaFloatingMarketGuided from "./pages/PattayaFloatingMarketGuided";
import PattayaNightlifeWalking from "./pages/PattayaNightlifeWalking";
import PattayaPubCrawl from "./pages/PattayaPubCrawl";
import HongIslandsLongtail from "./pages/HongIslandsLongtail";
import HongIslandsSpeedboat from "./pages/HongIslandsSpeedboat";
import SevenIslandsLongtail from "./pages/SevenIslandsLongtail";
import SevenIslandsSpeedboat from "./pages/SevenIslandsSpeedboat";
import FourIslandsLongtail from "./pages/FourIslandsLongtail";
import FourIslandsLongtailNoParkFee from "./pages/FourIslandsLongtailNoParkFee";
import FourIslandsSpeedboat from "./pages/FourIslandsSpeedboat";
import JamesBondIslandKrabi from "./pages/JamesBondIslandKrabi";
import EsimThailandAis from "./pages/EsimThailandAis";
import TourPackages from "./pages/TourPackages";
import ThailandSmartGuides from "./pages/ThailandSmartGuides";
import BlogAirportTransferThailand from "./pages/BlogAirportTransferThailand";
import BlogPhiPhiIslandTours from "./pages/BlogPhiPhiIslandTours";
import BlogBestThailandActivities from "./pages/BlogBestThailandActivities";
import BlogTopPhuketTours from "./pages/BlogTopPhuketTours";
import BlogBangkokActivitiesGuide from "./pages/BlogBangkokActivitiesGuide";
import BlogBestPattayaActivities from "./pages/BlogBestPattayaActivities";
import DubaiSmartGuides from "./pages/DubaiSmartGuides";
import BlogDubaiAirportTransfer from "./pages/BlogDubaiAirportTransfer";
import BlogDubaiDesertSafari from "./pages/BlogDubaiDesertSafari";
import BlogDubaiMarinaCruise from "./pages/BlogDubaiMarinaCruise";
import BlogBurjKhalifaTickets from "./pages/BlogBurjKhalifaTickets";
import BlogBestDubaiActivities from "./pages/BlogBestDubaiActivities";
import SingaporeSmartGuides from "./pages/SingaporeSmartGuides";
import BlogSingaporeAirportTransfer from "./pages/BlogSingaporeAirportTransfer";
import BlogSentosaActivities from "./pages/BlogSentosaActivities";
import BlogBestSingaporeAttractions from "./pages/BlogBestSingaporeAttractions";
import BlogTopThingsSingapore from "./pages/BlogTopThingsSingapore";
import BlogUniversalStudiosSingapore from "./pages/BlogUniversalStudiosSingapore";
import BlogNightSafariSingapore from "./pages/BlogNightSafariSingapore";
import BlogSingaporeComboPass from "./pages/BlogSingaporeComboPass";
import BlogSingaporeFoodExperiences from "./pages/BlogSingaporeFoodExperiences";
import BlogThailandIslandCombos from "./pages/BlogThailandIslandCombos";
import BlogThailandFoodExperiences from "./pages/BlogThailandFoodExperiences";
import BlogDubaiShoppingTours from "./pages/BlogDubaiShoppingTours";
import BlogDubaiFoodExperiences from "./pages/BlogDubaiFoodExperiences";
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
import DubaiFountainShow from "./pages/DubaiFountainShow";
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
import SingaporeTransfersNew from "./pages/SingaporeTransfersNew";
import SingaporeAirportPickup from "./pages/SingaporeAirportPickup";
import SingaporeAirportDropoff from "./pages/SingaporeAirportDropoff";
import SingaporeAirportNightPickup from "./pages/SingaporeAirportNightPickup";
import DubaiTransfersNew from "./pages/DubaiTransfersNew";
import DubaiAirportPickupZone1 from "./pages/DubaiAirportPickupZone1";
import DubaiAirportDropoffZone1 from "./pages/DubaiAirportDropoffZone1";
import DubaiAirportPickupZone2 from "./pages/DubaiAirportPickupZone2";
import DubaiAirportDropoffZone2 from "./pages/DubaiAirportDropoffZone2";
import DubaiAirportPickupZone3 from "./pages/DubaiAirportPickupZone3";
import DubaiAirportDropoffZone3 from "./pages/DubaiAirportDropoffZone3";
import DubaiAirportPickupZone4 from "./pages/DubaiAirportPickupZone4";
import DubaiAirportDropoffZone4 from "./pages/DubaiAirportDropoffZone4";
import DubaiAirportPickupZone5 from "./pages/DubaiAirportPickupZone5";
import DubaiAirportDropoffZone5 from "./pages/DubaiAirportDropoffZone5";
import Auth from "./pages/Auth";
import AuthCallback from "./pages/AuthCallback";
import Profile from "./pages/Profile";
import MyBookings from "./pages/MyBookings";
import UserProfile from "./pages/UserProfile";
import UserBookings from "./pages/UserBookings";
import BookingDetail from "./pages/BookingDetail";
import UserSettings from "./pages/UserSettings";
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
import KrabiTransfers from "./pages/KrabiTransfers";
import KrabiKbvAirportPhuketPickup from "./pages/KrabiKbvAirportPhuketPickup";
import KrabiPhuketKbvAirportDropoff from "./pages/KrabiPhuketKbvAirportDropoff";
import KrabiHotelKbvAirport from "./pages/KrabiHotelKbvAirport";
import KrabiToPhuket from "./pages/KrabiToPhuket";
import KrabiPhuketCityTour from "./pages/KrabiPhuketCityTour";
import KrabiHktAirportPickup from "./pages/KrabiHktAirportPickup";
import KrabiHktAirportDropoff from "./pages/KrabiHktAirportDropoff";
import KrabiKbvAonangPickup from "./pages/KrabiKbvAonangPickup";
import KrabiPhuketToKrabi from "./pages/KrabiPhuketToKrabi";
import KrabiPhuketCityTourKrabi from "./pages/KrabiPhuketCityTourKrabi";
import KrabiPhuketKrabiCityTour from "./pages/KrabiPhuketKrabiCityTour";
import PhuketTransfers from "./pages/PhuketTransfers";
import PhuketHktAirportPickup from "./pages/PhuketHktAirportPickup";
import PhuketHktAirportCityTour from "./pages/PhuketHktAirportCityTour";
import PhuketHktAirportDropoff from "./pages/PhuketHktAirportDropoff";
import PhuketCityTourHktAirport from "./pages/PhuketCityTourHktAirport";
import PhuketCityHourlyRental from "./pages/PhuketCityHourlyRental";
import PhuketToKrabi from "./pages/PhuketToKrabi";
import PhuketCityTourKrabi from "./pages/PhuketCityTourKrabi";
import PhuketKrabiCityTour from "./pages/PhuketKrabiCityTour";
import ThailandTransfers from "./pages/ThailandTransfers";
import CustomerInformation from "./pages/CustomerInformation";
import PaymentInformation from "./pages/PaymentInformation";
import BookingConfirmed from "./pages/BookingConfirmed";
import Cart from "./pages/Cart";
import BookingHistory from "./pages/BookingHistory";
import QuickPay from "./pages/QuickPay";
import AdminDashboard from "./pages/AdminDashboard";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CurrencyProvider>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ApprovalBadge />
          <Routes>
          <Route path="/" element={<Index />} />
          {/* Thailand routes */}
            <Route path="/thailand" element={<Thailand />} />
            <Route path="/bangkok" element={<Bangkok />} />
            <Route path="/pattaya" element={<Pattaya />} />
            <Route path="/phuket" element={<Phuket />} />
            <Route path="/krabi" element={<Krabi />} />
            <Route path="/bangkok/safari-world" element={<SafariWorld />} />
            <Route path="/phuket/phi-phi-island-tour" element={<PhiPhiIsland />} />
            <Route path="/phuket/james-bond-island-tour" element={<JamesBondIsland />} />
            <Route path="/bangkok/dolphin-show" element={<DolphinShow />} />
            <Route path="/phuket/selfie-with-tigers" element={<SelfieWithTigers />} />
            <Route path="/phuket/elephant-safari" element={<ElephantSafari />} />
            <Route path="/phuket/hot-spring-emerald-pool" element={<HotSpringEmeralPool />} />
            <Route path="/bangkok/skywalk" element={<BangkokSkywalk />} />
            <Route path="/bangkok/massage-coupons" element={<MassageCoupons />} />
            <Route path="/bangkok/three-temples-tour" element={<BangkokThreeTemples />} />
            <Route path="/bangkok/wat-arun-pho-traimit" element={<BangkokWatArunPhoTraimit />} />
            <Route path="/bangkok/city-boat-tour" element={<BangkokCityBoatTour />} />
            <Route path="/bangkok/city-gems-gallery" element={<BangkokCityGemsGallery />} />
            <Route path="/bangkok/wat-arun-chinatown" element={<BangkokWatArunChinatown />} />
            <Route path="/bangkok/golden-marble-buddha" element={<BangkokGoldenMarbleBuddha />} />
            <Route path="/bangkok/ayutthaya-temple-tour" element={<AyutthayaTempleTour />} />
            <Route path="/bangkok/grand-palace-emerald" element={<BangkokGrandPalaceEmerald />} />
            <Route path="/bangkok/baiyoke-buffet" element={<BaiyokeBuffet />} />
            <Route path="/bangkok/sea-life-madame-tussauds" element={<SeaLifeMadameTussauds />} />
            <Route path="/bangkok/viva-alangka-cruise" element={<VivaAlangkaCruise />} />
            <Route path="/bangkok/ayutthaya-sunset-cruise" element={<AyutthayaSunsetCruise />} />
            <Route path="/bangkok/chao-phraya-princess-private" element={<ChaoPhrayaPrincessPrivate />} />
            <Route path="/bangkok/chao-phraya-princess-valentine" element={<ChaoPhrayaPrincessValentine />} />
            <Route path="/bangkok/chao-phraya-princess-with-transfer" element={<ChaoPhrayaPrincessJoin />} />
            <Route path="/bangkok/chao-phraya-princess-dinner" element={<ChaoPhrayaPrincessNoTransfer />} />
            <Route path="/bangkok/maeklong-floating-market" element={<MaeklongFloatingMarket />} />
            <Route path="/bangkok/tuk-tuk-night-tour" element={<BangkokTukTukNight />} />
            <Route path="/bangkok/dream-world" element={<DreamWorldBangkok />} />
            <Route path="/phuket/dolphin-bay" element={<DolphinBayPhuket />} />
            <Route path="/phuket/city-night-market" element={<PhuketCityNightMarket />} />
            <Route path="/phuket/simon-cabaret" element={<PhuketSimonCabaret />} />
            <Route path="/phuket/carnival-magic" element={<PhuketCarnivalMagic />} />
            <Route path="/phuket/muslim-friendly-tour" element={<PhuketMuslimFriendlyTour />} />
            <Route path="/phuket/selfie-with-tigers-atv" element={<SelfieWithTigerATV />} />
            <Route path="/phuket/james-bond-island-sea-canoe" element={<JamesBondIslandSeaCanoe />} />
            <Route path="/phuket/phi-phi-big-boat" element={<PhiPhiBigBoat />} />
            <Route path="/phuket/phi-phi-royal-jet" element={<PhiPhiRoyalJet />} />
            <Route path="/phuket/phi-phi-maya-khai-speedboat" element={<PhiPhiMayaKhaiSpeedboat />} />
            <Route path="/pattaya/floating-market-tour" element={<PattayaFloatingMarketTour />} />
            <Route path="/pattaya/big-buddha-gems" element={<PattayaBigBuddhaGems />} />
            <Route path="/pattaya/coral-island" element={<CoralIslandPattaya />} />
            <Route path="/pattaya/nong-nooch-garden" element={<NongNoochGarden />} />
            <Route path="/pattaya/dolphinarium" element={<PattayaDolphinarium />} />
            <Route path="/pattaya/muay-thai" element={<MuayThaiPattaya />} />
            <Route path="/pattaya/alcazar-show" element={<AlcazarShowPattaya />} />
            <Route path="/pattaya/imagine79-show" element={<Imagine79Show />} />
            <Route path="/pattaya/show-69" element={<Show69Pattaya />} />
            <Route path="/pattaya/show-89" element={<Show89Pattaya />} />
            <Route path="/pattaya/big-eye-show" element={<BigEyeShowPattaya />} />
            <Route path="/pattaya/floating-market-guided" element={<PattayaFloatingMarketGuided />} />
            <Route path="/pattaya/nightlife-walking-tour" element={<PattayaNightlifeWalking />} />
            <Route path="/pattaya/pub-crawl" element={<PattayaPubCrawl />} />
            <Route path="/krabi/hong-islands-longtail" element={<HongIslandsLongtail />} />
            <Route path="/krabi/hong-islands-speedboat" element={<HongIslandsSpeedboat />} />
            <Route path="/krabi/seven-islands-longtail" element={<SevenIslandsLongtail />} />
            <Route path="/krabi/seven-islands-speedboat" element={<SevenIslandsSpeedboat />} />
            <Route path="/krabi/four-islands-longtail" element={<FourIslandsLongtail />} />
            <Route path="/krabi/four-islands-longtail-no-park-fee" element={<FourIslandsLongtailNoParkFee />} />
            <Route path="/krabi/four-islands-speedboat" element={<FourIslandsSpeedboat />} />
            <Route path="/krabi/james-bond-island" element={<JamesBondIslandKrabi />} />
            <Route path="/thailand/esim-ais" element={<EsimThailandAis />} />
            <Route path="/thailand/destination-guides" element={<ThailandSmartGuides />} />
            <Route path="/blog/airport-transfer-booking-thailand" element={<BlogAirportTransferThailand />} />
            <Route path="/blog/phi-phi-island-tours-thailand" element={<BlogPhiPhiIslandTours />} />
            <Route path="/blog/best-thailand-activities" element={<BlogBestThailandActivities />} />
            <Route path="/blog/top-phuket-island-tours" element={<BlogTopPhuketTours />} />
            <Route path="/blog/bangkok-activities-guide" element={<BlogBangkokActivitiesGuide />} />
            <Route path="/blog/best-pattaya-activities" element={<BlogBestPattayaActivities />} />
            <Route path="/blog/best-singapore-attractions" element={<BlogBestSingaporeAttractions />} />
            <Route path="/blog/top-things-singapore" element={<BlogTopThingsSingapore />} />
            <Route path="/blog/universal-studios-singapore-guide" element={<BlogUniversalStudiosSingapore />} />
            <Route path="/blog/night-safari-singapore-guide" element={<BlogNightSafariSingapore />} />
            <Route path="/blog/thailand-island-combos" element={<BlogThailandIslandCombos />} />
            <Route path="/blog/thailand-food-experiences" element={<BlogThailandFoodExperiences />} />
            <Route path="/netherlands-smart-guides" element={<NetherlandsSmartGuides />} />
           <Route path="/bangkok/budget-airport-transfers" element={<BangkokTransfers />} />
           {/* New SEO-friendly Bangkok Transfer slugs */}
           <Route path="/bangkok/suvarnabhumi-airport-to-bangkok-hotel-transfer" element={<BangkokBkkAirportPickup />} />
           <Route path="/bangkok/don-mueang-airport-to-bangkok-hotel-transfer" element={<BangkokDmkAirportPickup />} />
           <Route path="/bangkok/bangkok-hotel-to-suvarnabhumi-airport-transfer" element={<BangkokBkkAirportDropoff />} />
           <Route path="/bangkok/bangkok-hotel-to-don-mueang-airport-transfer" element={<BangkokDmkAirportDropoff />} />
           <Route path="/bangkok/bangkok-hotel-two-temple-tour-to-suvarnabhumi-airport-transfer" element={<BangkokTempleTourAirport />} />
           <Route path="/bangkok/bangkok-hotel-two-temple-tour-to-don-mueang-airport-transfer" element={<BangkokTempleTourDmkAirport />} />
           <Route path="/bangkok/bangkok-hotel-safari-world-to-suvarnabhumi-airport-transfer" element={<BangkokSafariWorldBkkAirport />} />
           <Route path="/bangkok/bangkok-hotel-safari-world-to-don-mueang-airport-transfer" element={<BangkokSafariWorldDmkAirport />} />
           <Route path="/bangkok/bangkok-hotel-to-hotel-transfer-4-hours" element={<BangkokCityHourlyRental />} />
           <Route path="/bangkok/bangkok-hotel-to-pattaya-hotel-transfer" element={<BangkokToPattaya />} />
           <Route path="/bangkok/bangkok-city-tour-to-pattaya-hotel-transfer" element={<BangkokCityTourPattaya />} />
           <Route path="/bangkok/tiger-topia-sriracha-zoo-to-pattaya-hotel-transfer" element={<BangkokTigerTopiaPattaya />} />
           {/* Legacy Bangkok transfer slugs → redirect to new SEO slugs */}
           <Route path="/bangkok/bkk-airport-pickup" element={<Navigate to="/bangkok/suvarnabhumi-airport-to-bangkok-hotel-transfer" replace />} />
           <Route path="/bangkok/dmk-airport-pickup" element={<Navigate to="/bangkok/don-mueang-airport-to-bangkok-hotel-transfer" replace />} />
           <Route path="/bangkok/bkk-airport-dropoff" element={<Navigate to="/bangkok/bangkok-hotel-to-suvarnabhumi-airport-transfer" replace />} />
           <Route path="/bangkok/dmk-airport-dropoff" element={<Navigate to="/bangkok/bangkok-hotel-to-don-mueang-airport-transfer" replace />} />
           <Route path="/bangkok/airport-transfers/temple-tour-bkk" element={<Navigate to="/bangkok/bangkok-hotel-two-temple-tour-to-suvarnabhumi-airport-transfer" replace />} />
           <Route path="/bangkok/airport-transfers/temple-tour-dmk" element={<Navigate to="/bangkok/bangkok-hotel-two-temple-tour-to-don-mueang-airport-transfer" replace />} />
           <Route path="/bangkok/airport-transfers/safari-world-bkk" element={<Navigate to="/bangkok/bangkok-hotel-safari-world-to-suvarnabhumi-airport-transfer" replace />} />
           <Route path="/bangkok/airport-transfers/safari-world-dmk" element={<Navigate to="/bangkok/bangkok-hotel-safari-world-to-don-mueang-airport-transfer" replace />} />
           <Route path="/bangkok/city-hourly-rental" element={<Navigate to="/bangkok/bangkok-hotel-to-hotel-transfer-4-hours" replace />} />
           <Route path="/bangkok/to-pattaya" element={<Navigate to="/bangkok/bangkok-hotel-to-pattaya-hotel-transfer" replace />} />
           <Route path="/bangkok/city-tour-pattaya" element={<Navigate to="/bangkok/bangkok-city-tour-to-pattaya-hotel-transfer" replace />} />
           <Route path="/bangkok/tiger-topia-pattaya" element={<Navigate to="/bangkok/tiger-topia-sriracha-zoo-to-pattaya-hotel-transfer" replace />} />
            <Route path="/pattaya/budget-airport-transfers" element={<PattayaTransfers />} />
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
            <Route path="/krabi/budget-airport-transfers" element={<KrabiTransfers />} />
            <Route path="/krabi/kbv-airport-phuket-pickup" element={<KrabiKbvAirportPhuketPickup />} />
            <Route path="/krabi/phuket-kbv-airport-dropoff" element={<KrabiPhuketKbvAirportDropoff />} />
            <Route path="/krabi/krabi-hotel-kbv-airport" element={<KrabiHotelKbvAirport />} />
            <Route path="/krabi/krabi-to-phuket" element={<KrabiToPhuket />} />
            <Route path="/krabi/krabi-phuket-city-tour" element={<KrabiPhuketCityTour />} />
            <Route path="/krabi/hkt-airport-krabi-pickup" element={<KrabiHktAirportPickup />} />
            <Route path="/krabi/krabi-hkt-airport-dropoff" element={<KrabiHktAirportDropoff />} />
            <Route path="/krabi/kbv-aonang-pickup" element={<KrabiKbvAonangPickup />} />
            <Route path="/krabi/phuket-to-krabi" element={<KrabiPhuketToKrabi />} />
            <Route path="/krabi/phuket-city-tour-krabi" element={<KrabiPhuketCityTourKrabi />} />
            <Route path="/krabi/phuket-krabi-city-tour" element={<KrabiPhuketKrabiCityTour />} />
            <Route path="/phuket/budget-airport-transfers" element={<PhuketTransfers />} />
            <Route path="/phuket/hkt-airport-pickup" element={<PhuketHktAirportPickup />} />
            <Route path="/phuket/hkt-airport-city-tour" element={<PhuketHktAirportCityTour />} />
            <Route path="/phuket/hkt-airport-dropoff" element={<PhuketHktAirportDropoff />} />
            <Route path="/phuket/city-tour-hkt-airport" element={<PhuketCityTourHktAirport />} />
            <Route path="/phuket/city-hourly-rental" element={<PhuketCityHourlyRental />} />
            <Route path="/phuket/phuket-to-krabi" element={<PhuketToKrabi />} />
            <Route path="/phuket/city-tour-krabi" element={<PhuketCityTourKrabi />} />
            <Route path="/phuket/krabi-city-tour" element={<PhuketKrabiCityTour />} />
            <Route path="/thailand/budget-airport-transfers" element={<ThailandTransfers />} />
          {/* Dubai routes */}
            <Route path="/blog/best-dubai-activities" element={<BlogBestDubaiActivities />} />
            <Route path="/dubai/destination-guides" element={<DubaiSmartGuides />} />
            <Route path="/blog/airport-transfer-booking-dubai" element={<BlogDubaiAirportTransfer />} />
            <Route path="/blog/desert-safari-deals-dubai" element={<BlogDubaiDesertSafari />} />
            <Route path="/blog/dubai-marina-cruise" element={<BlogDubaiMarinaCruise />} />
            <Route path="/blog/burj-khalifa-tickets-dubai" element={<BlogBurjKhalifaTickets />} />
            <Route path="/blog/dubai-shopping-tours" element={<BlogDubaiShoppingTours />} />
            <Route path="/blog/dubai-food-experiences" element={<BlogDubaiFoodExperiences />} />
            <Route path="/dubai" element={<Dubai />} />
            <Route path="/dubai/desert-safari" element={<DesertSafari />} />
            <Route path="/dubai/desert-safari-shisha" element={<DesertSafariShisha />} />
            <Route path="/dubai/desert-safari-sharing" element={<DesertSafariSharing />} />
            <Route path="/dubai/dhow-cruise" element={<DhowCruise />} />
            <Route path="/dubai/dhow-cruise-creek-lower-deck" element={<DhowCruiseCreekLower />} />
            <Route path="/dubai/dhow-cruise-creek-upper-deck" element={<DhowCruiseCreekUpper />} />
            <Route path="/dubai/dhow-cruise-marina-lower-deck" element={<DhowCruiseMarinaLower />} />
            <Route path="/dubai/dhow-cruise-marina-upper-deck" element={<DhowCruiseMarinaUpper />} />
            <Route path="/dubai/atlantis-aquaventure" element={<AtlantisPalm />} />
            <Route path="/dubai/city-tour" element={<DubaiCityTour />} />
            <Route path="/dubai/city-tour-mall" element={<DubaiCityTourMall />} />
            <Route path="/dubai/global-village" element={<GlobalVillageDubai />} />
            <Route path="/dubai/abu-dhabi-city-tour" element={<AbuDhabiCityTour />} />
            <Route path="/dubai/abu-dhabi-ferrari-world" element={<AbuDhabiFerrariWorld />} />
            <Route path="/dubai/aquarium-penguin" element={<DubaiAquariumPenguin />} />
            <Route path="/dubai/burj-khalifa-non-prime" element={<BurjKhalifaNonPrime />} />
            <Route path="/dubai/burj-khalifa-prime" element={<BurjKhalifaPrime />} />
            <Route path="/dubai/dolphin-show" element={<DubaiDolphinShow />} />
            <Route path="/dubai/miracle-garden" element={<MiracleGardenDubai />} />
            <Route path="/dubai/fountain-show" element={<DubaiFountainShow />} />
            <Route path="/dubai/budget-airport-transfers" element={<DubaiTransfersNew />} />
            <Route path="/dubai/airport-pickup-zone1" element={<DubaiAirportPickupZone1 />} />
            <Route path="/dubai/airport-dropoff-zone1" element={<DubaiAirportDropoffZone1 />} />
            <Route path="/dubai/airport-pickup-zone2" element={<DubaiAirportPickupZone2 />} />
            <Route path="/dubai/airport-dropoff-zone2" element={<DubaiAirportDropoffZone2 />} />
            <Route path="/dubai/airport-pickup-zone3" element={<DubaiAirportPickupZone3 />} />
            <Route path="/dubai/airport-dropoff-zone3" element={<DubaiAirportDropoffZone3 />} />
            <Route path="/dubai/airport-pickup-zone4" element={<DubaiAirportPickupZone4 />} />
            <Route path="/dubai/airport-dropoff-zone4" element={<DubaiAirportDropoffZone4 />} />
            <Route path="/dubai/airport-pickup-zone5" element={<DubaiAirportPickupZone5 />} />
            <Route path="/dubai/airport-dropoff-zone5" element={<DubaiAirportDropoffZone5 />} />
          {/* Singapore routes */}
            <Route path="/singapore/destination-guides" element={<SingaporeSmartGuides />} />
            <Route path="/blog/airport-transfer-booking-singapore" element={<BlogSingaporeAirportTransfer />} />
            <Route path="/blog/sentosa-activities-singapore" element={<BlogSentosaActivities />} />
            <Route path="/blog/singapore-combo-pass" element={<BlogSingaporeComboPass />} />
            <Route path="/blog/singapore-food-experiences" element={<BlogSingaporeFoodExperiences />} />
            <Route path="/singapore" element={<Singapore />} />
            <Route path="/singapore/city-tour" element={<SingaporeCityTour />} />
            <Route path="/singapore/night-safari" element={<NightSafariTickets />} />
            <Route path="/singapore/night-safari-transfer" element={<NightSafariTransfer />} />
            <Route path="/singapore/night-safari-dinner" element={<NightSafariDinner />} />
            <Route path="/singapore/sentosa-4d-2-rides" element={<Sentosa4D2Rides />} />
            <Route path="/singapore/sentosa-4d-3-rides" element={<Sentosa4D3Rides />} />
            <Route path="/singapore/sentosa-cable-car" element={<SentosaCableCar />} />
            <Route path="/singapore/sentosa-wings-time" element={<SentosaWingsTime />} />
            <Route path="/singapore/sentosa-sky-helix" element={<SentosaSkyHelix />} />
            <Route path="/singapore/river-cruise" element={<SingaporeRiverCruise />} />
            <Route path="/singapore/gardens-by-the-bay" element={<GardensByTheBay />} />
            <Route path="/singapore/adventure-cove" element={<AdventureCove />} />
            <Route path="/singapore/flyer" element={<SingaporeFlyer />} />
            <Route path="/singapore/river-safari" element={<RiverSafari />} />
            <Route path="/singapore/universal-studios-weekday" element={<UniversalStudiosWeekday />} />
            <Route path="/singapore/universal-studios-weekend" element={<UniversalStudiosWeekend />} />
            <Route path="/singapore/zoo" element={<SingaporeZoo />} />
            <Route path="/singapore/rainforest-wild-asia" element={<RainforestWildAsia />} />
            <Route path="/singapore/big-bus-discover" element={<BigBusDiscover />} />
            <Route path="/singapore/big-bus-night" element={<BigBusNight />} />
            <Route path="/singapore/sentosa-island" element={<SentosaIsland />} />
            <Route path="/singapore/budget-airport-transfers" element={<SingaporeTransfersNew />} />
            <Route path="/singapore/airport-pickup" element={<SingaporeAirportPickup />} />
            <Route path="/singapore/airport-dropoff" element={<SingaporeAirportDropoff />} />
            <Route path="/singapore/airport-night-pickup" element={<SingaporeAirportNightPickup />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/user-bookings" element={<UserBookings />} />
          <Route path="/booking/:id" element={<BookingDetail />} />
          <Route path="/settings" element={<UserSettings />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/customer-information" element={<CustomerInformation />} />
          <Route path="/payment-information" element={<PaymentInformation />} />
          <Route path="/booking-confirmed" element={<BookingConfirmed />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/booking-history" element={<BookingHistory />} />
          <Route path="/quick-pay" element={<QuickPay />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/tour-packages" element={<TourPackages />} />
          <Route path="/routes-health-check" element={<RoutesHealthCheck />} />
          <Route path="/admin" element={<AdminDashboard />} />
          {/* 301 Redirects: Old URLs → New SEO-friendly URLs */}
            <Route path="/safari-world" element={<Navigate to="/bangkok/safari-world" replace />} />
            <Route path="/dolphin-show" element={<Navigate to="/bangkok/dolphin-show" replace />} />
            <Route path="/bangkok-skywalk" element={<Navigate to="/bangkok/skywalk" replace />} />
            <Route path="/massage-coupons" element={<Navigate to="/bangkok/massage-coupons" replace />} />
            <Route path="/bangkok-three-temples" element={<Navigate to="/bangkok/three-temples-tour" replace />} />
            <Route path="/bangkok-wat-arun-pho-traimit" element={<Navigate to="/bangkok/wat-arun-pho-traimit" replace />} />
            <Route path="/bangkok-city-boat-tour" element={<Navigate to="/bangkok/city-boat-tour" replace />} />
            <Route path="/bangkok-city-gems-gallery" element={<Navigate to="/bangkok/city-gems-gallery" replace />} />
            <Route path="/bangkok-wat-arun-chinatown" element={<Navigate to="/bangkok/wat-arun-chinatown" replace />} />
            <Route path="/bangkok-golden-marble-buddha" element={<Navigate to="/bangkok/golden-marble-buddha" replace />} />
            <Route path="/ayutthaya-temple-tour" element={<Navigate to="/bangkok/ayutthaya-temple-tour" replace />} />
            <Route path="/bangkok-grand-palace-emerald" element={<Navigate to="/bangkok/grand-palace-emerald" replace />} />
            <Route path="/baiyoke-buffet" element={<Navigate to="/bangkok/baiyoke-buffet" replace />} />
            <Route path="/sea-life-madame-tussauds" element={<Navigate to="/bangkok/sea-life-madame-tussauds" replace />} />
            <Route path="/viva-alangka-cruise" element={<Navigate to="/bangkok/viva-alangka-cruise" replace />} />
            <Route path="/ayutthaya-sunset-cruise" element={<Navigate to="/bangkok/ayutthaya-sunset-cruise" replace />} />
            <Route path="/chao-phraya-princess-private" element={<Navigate to="/bangkok/chao-phraya-princess-private" replace />} />
            <Route path="/chao-phraya-princess-valentine" element={<Navigate to="/bangkok/chao-phraya-princess-valentine" replace />} />
            <Route path="/chao-phraya-princess-join" element={<Navigate to="/bangkok/chao-phraya-princess-with-transfer" replace />} />
            <Route path="/chao-phraya-princess-no-transfer" element={<Navigate to="/bangkok/chao-phraya-princess-dinner" replace />} />
            <Route path="/maeklong-floating-market" element={<Navigate to="/bangkok/maeklong-floating-market" replace />} />
            <Route path="/bangkok-tuk-tuk-night" element={<Navigate to="/bangkok/tuk-tuk-night-tour" replace />} />
            <Route path="/dream-world-bangkok" element={<Navigate to="/bangkok/dream-world" replace />} />
            <Route path="/phi-phi-island" element={<Navigate to="/phuket/phi-phi-island-tour" replace />} />
            <Route path="/james-bond-island" element={<Navigate to="/phuket/james-bond-island-tour" replace />} />
            <Route path="/james-bond-island-sea-canoe" element={<Navigate to="/phuket/james-bond-island-sea-canoe" replace />} />
            <Route path="/elephant-safari" element={<Navigate to="/phuket/elephant-safari" replace />} />
            <Route path="/hot-spring-emerald-pool" element={<Navigate to="/phuket/hot-spring-emerald-pool" replace />} />
            <Route path="/hot-spring" element={<Navigate to="/phuket/hot-spring-emerald-pool" replace />} />
            <Route path="/dolphin-bay-phuket" element={<Navigate to="/phuket/dolphin-bay" replace />} />
            <Route path="/phuket-city-night-market" element={<Navigate to="/phuket/city-night-market" replace />} />
            <Route path="/phuket-simon-cabaret" element={<Navigate to="/phuket/simon-cabaret" replace />} />
            <Route path="/phuket-carnival-magic" element={<Navigate to="/phuket/carnival-magic" replace />} />
            <Route path="/phuket-muslim-friendly-tour" element={<Navigate to="/phuket/muslim-friendly-tour" replace />} />
            <Route path="/selfie-tigers-atv" element={<Navigate to="/phuket/selfie-with-tigers-atv" replace />} />
            <Route path="/selfie-tigers" element={<Navigate to="/phuket/selfie-with-tigers" replace />} />
            <Route path="/phi-phi-big-boat" element={<Navigate to="/phuket/phi-phi-big-boat" replace />} />
            <Route path="/phi-phi-royal-jet" element={<Navigate to="/phuket/phi-phi-royal-jet" replace />} />
            <Route path="/phi-phi-maya-khai-speedboat" element={<Navigate to="/phuket/phi-phi-maya-khai-speedboat" replace />} />
            <Route path="/pattaya-floating-market-tour" element={<Navigate to="/pattaya/floating-market-tour" replace />} />
            <Route path="/pattaya-big-buddha-gems" element={<Navigate to="/pattaya/big-buddha-gems" replace />} />
            <Route path="/coral-island-pattaya" element={<Navigate to="/pattaya/coral-island" replace />} />
            <Route path="/nong-nooch-garden" element={<Navigate to="/pattaya/nong-nooch-garden" replace />} />
            <Route path="/pattaya-dolphinarium" element={<Navigate to="/pattaya/dolphinarium" replace />} />
            <Route path="/muay-thai-pattaya" element={<Navigate to="/pattaya/muay-thai" replace />} />
            <Route path="/alcazar-show-pattaya" element={<Navigate to="/pattaya/alcazar-show" replace />} />
            <Route path="/imagine79-show-pattaya" element={<Navigate to="/pattaya/imagine79-show" replace />} />
            <Route path="/show-69-pattaya" element={<Navigate to="/pattaya/show-69" replace />} />
            <Route path="/show-89-pattaya" element={<Navigate to="/pattaya/show-89" replace />} />
            <Route path="/big-eye-show-pattaya" element={<Navigate to="/pattaya/big-eye-show" replace />} />
            <Route path="/pattaya-floating-market-guided" element={<Navigate to="/pattaya/floating-market-guided" replace />} />
            <Route path="/pattaya-nightlife-walking" element={<Navigate to="/pattaya/nightlife-walking-tour" replace />} />
            <Route path="/pattaya-pub-crawl" element={<Navigate to="/pattaya/pub-crawl" replace />} />
            <Route path="/hong-islands-longtail" element={<Navigate to="/krabi/hong-islands-longtail" replace />} />
            <Route path="/hong-islands-speedboat" element={<Navigate to="/krabi/hong-islands-speedboat" replace />} />
            <Route path="/seven-islands-longtail" element={<Navigate to="/krabi/seven-islands-longtail" replace />} />
            <Route path="/seven-islands-speedboat" element={<Navigate to="/krabi/seven-islands-speedboat" replace />} />
            <Route path="/four-islands-longtail-no-park-fee" element={<Navigate to="/krabi/four-islands-longtail-no-park-fee" replace />} />
            <Route path="/four-islands-longtail" element={<Navigate to="/krabi/four-islands-longtail" replace />} />
            <Route path="/four-islands-speedboat" element={<Navigate to="/krabi/four-islands-speedboat" replace />} />
            <Route path="/james-bond-island-krabi" element={<Navigate to="/krabi/james-bond-island" replace />} />
            <Route path="/esim-thailand-ais" element={<Navigate to="/thailand/esim-ais" replace />} />
            <Route path="/thailand-smart-guides" element={<Navigate to="/thailand/destination-guides" replace />} />
            <Route path="/desert-safari-shisha" element={<Navigate to="/dubai/desert-safari-shisha" replace />} />
            <Route path="/desert-safari-sharing" element={<Navigate to="/dubai/desert-safari-sharing" replace />} />
            <Route path="/desert-safari" element={<Navigate to="/dubai/desert-safari" replace />} />
            <Route path="/dhow-cruise-creek-lower" element={<Navigate to="/dubai/dhow-cruise-creek-lower-deck" replace />} />
            <Route path="/dhow-cruise-creek-upper" element={<Navigate to="/dubai/dhow-cruise-creek-upper-deck" replace />} />
            <Route path="/dhow-cruise-marina-lower" element={<Navigate to="/dubai/dhow-cruise-marina-lower-deck" replace />} />
            <Route path="/dhow-cruise-marina-upper" element={<Navigate to="/dubai/dhow-cruise-marina-upper-deck" replace />} />
            <Route path="/dhow-cruise" element={<Navigate to="/dubai/dhow-cruise" replace />} />
            <Route path="/atlantis-palm" element={<Navigate to="/dubai/atlantis-aquaventure" replace />} />
            <Route path="/dubai-city-tour-mall" element={<Navigate to="/dubai/city-tour-mall" replace />} />
            <Route path="/dubai-city-tour" element={<Navigate to="/dubai/city-tour" replace />} />
            <Route path="/global-village-dubai" element={<Navigate to="/dubai/global-village" replace />} />
            <Route path="/abu-dhabi-city-tour" element={<Navigate to="/dubai/abu-dhabi-city-tour" replace />} />
            <Route path="/abu-dhabi-ferrari-world" element={<Navigate to="/dubai/abu-dhabi-ferrari-world" replace />} />
            <Route path="/dubai-aquarium-penguin" element={<Navigate to="/dubai/aquarium-penguin" replace />} />
            <Route path="/burj-khalifa-non-prime" element={<Navigate to="/dubai/burj-khalifa-non-prime" replace />} />
            <Route path="/burj-khalifa-prime" element={<Navigate to="/dubai/burj-khalifa-prime" replace />} />
            <Route path="/dubai-dolphin-show" element={<Navigate to="/dubai/dolphin-show" replace />} />
            <Route path="/miracle-garden-dubai" element={<Navigate to="/dubai/miracle-garden" replace />} />
            <Route path="/dubai-fountain-show" element={<Navigate to="/dubai/fountain-show" replace />} />
            <Route path="/dubai-smart-guides" element={<Navigate to="/dubai/destination-guides" replace />} />
            <Route path="/singapore-city-tour" element={<Navigate to="/singapore/city-tour" replace />} />
            <Route path="/night-safari-tickets" element={<Navigate to="/singapore/night-safari" replace />} />
            <Route path="/night-safari-transfer" element={<Navigate to="/singapore/night-safari-transfer" replace />} />
            <Route path="/night-safari-dinner" element={<Navigate to="/singapore/night-safari-dinner" replace />} />
            <Route path="/sentosa-4d-2-rides" element={<Navigate to="/singapore/sentosa-4d-2-rides" replace />} />
            <Route path="/sentosa-4d-3-rides" element={<Navigate to="/singapore/sentosa-4d-3-rides" replace />} />
            <Route path="/sentosa-cable-car" element={<Navigate to="/singapore/sentosa-cable-car" replace />} />
            <Route path="/sentosa-wings-time" element={<Navigate to="/singapore/sentosa-wings-time" replace />} />
            <Route path="/sentosa-sky-helix" element={<Navigate to="/singapore/sentosa-sky-helix" replace />} />
            <Route path="/singapore-river-cruise" element={<Navigate to="/singapore/river-cruise" replace />} />
            <Route path="/gardens-by-the-bay" element={<Navigate to="/singapore/gardens-by-the-bay" replace />} />
            <Route path="/adventure-cove" element={<Navigate to="/singapore/adventure-cove" replace />} />
            <Route path="/singapore-flyer" element={<Navigate to="/singapore/flyer" replace />} />
            <Route path="/river-safari" element={<Navigate to="/singapore/river-safari" replace />} />
            <Route path="/universal-studios-weekday" element={<Navigate to="/singapore/universal-studios-weekday" replace />} />
            <Route path="/universal-studios-weekend" element={<Navigate to="/singapore/universal-studios-weekend" replace />} />
            <Route path="/singapore-zoo" element={<Navigate to="/singapore/zoo" replace />} />
            <Route path="/rainforest-wild-asia" element={<Navigate to="/singapore/rainforest-wild-asia" replace />} />
            <Route path="/big-bus-discover" element={<Navigate to="/singapore/big-bus-discover" replace />} />
            <Route path="/big-bus-night" element={<Navigate to="/singapore/big-bus-night" replace />} />
            <Route path="/sentosa-island" element={<Navigate to="/singapore/sentosa-island" replace />} />
            <Route path="/singapore-smart-guides" element={<Navigate to="/singapore/destination-guides" replace />} />
            <Route path="/bangkok/safari-world-bkk-airport" element={<Navigate to="/bangkok/airport-transfers/safari-world-bkk" replace />} />
            <Route path="/bangkok/safari-world-dmk-airport" element={<Navigate to="/bangkok/airport-transfers/safari-world-dmk" replace />} />
            <Route path="/bangkok/temple-tour-airport" element={<Navigate to="/bangkok/airport-transfers/temple-tour-bkk" replace />} />
            <Route path="/bangkok/temple-tour-dmk-airport" element={<Navigate to="/bangkok/airport-transfers/temple-tour-dmk" replace />} />
            <Route path="/bangkok/transfers" element={<Navigate to="/bangkok/budget-airport-transfers" replace />} />
            <Route path="/pattaya/transfers" element={<Navigate to="/pattaya/budget-airport-transfers" replace />} />
            <Route path="/phuket/transfers" element={<Navigate to="/phuket/budget-airport-transfers" replace />} />
            <Route path="/krabi/transfers" element={<Navigate to="/krabi/budget-airport-transfers" replace />} />
            <Route path="/thailand/transfers" element={<Navigate to="/thailand/budget-airport-transfers" replace />} />
            <Route path="/dubai/transfers" element={<Navigate to="/dubai/budget-airport-transfers" replace />} />
            <Route path="/singapore/transfers" element={<Navigate to="/singapore/budget-airport-transfers" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
          <FloatingWhatsApp />
      </BrowserRouter>
    </TooltipProvider>
    </CartProvider>
    </CurrencyProvider>
  </QueryClientProvider>
);

export default App;
