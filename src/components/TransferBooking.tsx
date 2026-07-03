import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import BreadcrumbJsonLd from "./seo/BreadcrumbJsonLd";
import Seo from "./seo/Seo";

import { ChevronRight, ArrowRight } from "lucide-react";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";
import BookTransfersSection from "./BookTransfersSection";
import RecommendedActivitiesSection from "./RecommendedActivitiesSection";
import { getCityTransfers } from "@/data/cityTransfersData";
import { getCityActivities } from "@/data/cityActivitiesData";
import RelatedArticles from "./RelatedArticles";
import TransferHeroBadges from "./TransferHeroBadges";

import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Clock, MapPin, Phone, ChevronDown, ChevronUp, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

// Vehicle images - using placeholder URLs
const vehicleImages = {
  sedan: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&auto=format&fit=crop",
  suv: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&auto=format&fit=crop",
  van: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&auto=format&fit=crop"
};

export interface VehicleOption {
  id: string;
  name: string;
  capacity: string;
  bigBags: number;
  handBags: number;
  price: number;
  image: string;
}

export interface TransferData {
  id: string;
  title: string;
  shortDescription: string;
  location: string;
  city: string;
  duration: string;
  rating: number;
  reviews: number;
  vehicles: VehicleOption[];
  highlights: string[];
  description: string;
  about: string;
  cancellationPolicy: string[];
  termsConditions: string[];
  baggagePolicy: string[];
}

export interface TransferFAQ {
  question: string;
  answer: string;
}

export interface TransferGalleryImage {
  src: string;
  alt: string;
}

interface TransferBookingProps {
  transferData: TransferData;
  galleryImages?: TransferGalleryImage[];
  seoContent?: React.ReactNode;
  faqs?: TransferFAQ[];
  relatedLinks?: { title: string; url: string; description?: string }[];
}

const TransferBooking = ({ transferData, galleryImages, seoContent, faqs, relatedLinks }: TransferBookingProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const tourSlug = location.pathname.slice(1);
  const { addToCart, cartCount } = useCart();
  
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [numberOfPersons, setNumberOfPersons] = useState(0);
  const [pickupDate, setPickupDate] = useState<Date | undefined>(undefined);
  const [pickupTime, setPickupTime] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [roomNo, setRoomNo] = useState("");

  if (!transferData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Transfer Not Found</h1>
          <p className="text-muted-foreground">Unable to load transfer information.</p>
        </div>
      </div>
    );
  }

  const selectedVehicleData = transferData.vehicles.find(v => v.id === selectedVehicle);
  const totalPrice = selectedVehicleData ? selectedVehicleData.price : 0;

  const handlePersonsChange = (increment: boolean) => {
    if (increment && selectedVehicleData) {
      const maxCapacity = parseInt(selectedVehicleData.capacity.split("-")[1]) || 10;
      if (numberOfPersons < maxCapacity) {
        setNumberOfPersons(prev => prev + 1);
      }
    } else if (!increment && numberOfPersons > 0) {
      setNumberOfPersons(prev => prev - 1);
    }
  };

  const validateAndPrepareBooking = () => {
    if (!selectedVehicle) {
      toast.error("Please select a vehicle type");
      return null;
    }
    if (numberOfPersons === 0) {
      toast.error("Please select number of persons");
      return null;
    }
    if (!pickupDate) {
      toast.error("Please select pickup date");
      return null;
    }
    if (!pickupTime) {
      toast.error("Please select pickup time");
      return null;
    }
    if (!pickupLocation) {
      toast.error("Please enter pickup location");
      return null;
    }

    return {
      id: `${transferData.id}-${Date.now()}`,
      itemType: 'transfer' as const,
      transferId: transferData.id,
      title: transferData.title,
      vehicleId: selectedVehicle,
      vehicleName: selectedVehicleData?.name || "",
      capacity: selectedVehicleData?.capacity || "",
      price: totalPrice,
      numberOfPersons,
      pickupDate: format(pickupDate, "yyyy-MM-dd"),
      pickupTime,
      pickupLocation,
      dropLocation,
      roomNo,
      slug: tourSlug,
    };
  };

  const handleAddToCart = () => {
    const bookingData = validateAndPrepareBooking();
    if (bookingData) {
      addToCart(bookingData);
      toast.success("Added to cart successfully!");
    }
  };

  const handleBookNow = () => {
    const bookingData = validateAndPrepareBooking();
    if (bookingData) {
      addToCart(bookingData);
      navigate("/customer-information");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`${transferData.title} | Yellodae Trails`}
        description={transferData.shortDescription}
        path={location.pathname}
        type="product"
        image={galleryImages?.[0]?.src}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Private Airport Transfer",
          name: transferData.title,
          description: transferData.shortDescription,
          areaServed: transferData.city || transferData.location,
          provider: { "@type": "Organization", name: "Yellodae" },
          ...(transferData.vehicles?.[0]?.price
            ? {
                offers: {
                  "@type": "Offer",
                  price: transferData.vehicles[0].price,
                  priceCurrency: "INR",
                  availability: "https://schema.org/InStock",
                },
              }
            : {}),
        }}
      />
      <Header />

      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb Sitemap */}
        {(() => {
          const cityKey = transferData.city?.toLowerCase().trim() || "";
          const cityHomeMap: Record<string, { name: string; url: string }> = {
            bangkok: { name: "Bangkok", url: "/thailand/bangkok" },
            phuket: { name: "Phuket", url: "/thailand/phuket" },
            krabi: { name: "Krabi", url: "/thailand/krabi" },
            pattaya: { name: "Pattaya", url: "/thailand/pattaya" },
            "chiang mai": { name: "Chiang Mai", url: "/thailand/chiang-mai" },
            singapore: { name: "Singapore", url: "/singapore" },
          };
          const cityTransfersMap: Record<string, { name: string; url: string }> = {
            bangkok: { name: "Bangkok Transfers", url: "/thailand/bangkok-airport-transfers/" },
            phuket: { name: "Phuket Transfers", url: "/thailand/phuket-airport-transfers/" },
            krabi: { name: "Krabi Transfers", url: "/thailand/krabi-airport-transfers/" },
            pattaya: { name: "Pattaya Transfers", url: "/thailand/pattaya-transfers/" },
            "chiang mai": { name: "Chiang Mai Transfers", url: "/thailand/chiang-mai-airport-transfers/" },
            singapore: { name: "Singapore Transfers", url: "/singapore/budget-airport-transfers" },
          };
          const cityHome = cityHomeMap[cityKey];
          const cityTransfers = cityTransfersMap[cityKey];
          if (!cityHome || !cityTransfers) return null;
          return (
            <>
              <BreadcrumbJsonLd
                items={[
                  { name: "Home", url: "/" },
                  cityHome,
                  cityTransfers,
                  { name: transferData.title, url: location.pathname },
                ]}
              />
              <nav
                aria-label="Breadcrumb"
                className="max-w-4xl mx-auto mb-4 text-sm text-muted-foreground"
              >
                <ol className="flex flex-wrap items-center gap-1">
                  <li>
                    <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                  </li>
                  <li aria-hidden="true"><ChevronRight className="h-4 w-4 inline" /></li>
                  <li>
                    <Link to={cityHome.url} className="hover:text-primary transition-colors">{cityHome.name}</Link>
                  </li>
                  <li aria-hidden="true"><ChevronRight className="h-4 w-4 inline" /></li>
                  <li>
                    <Link to={cityTransfers.url} className="hover:text-primary transition-colors">{cityTransfers.name}</Link>
                  </li>
                  <li aria-hidden="true"><ChevronRight className="h-4 w-4 inline" /></li>
                  <li className="text-foreground font-medium line-clamp-1" aria-current="page">
                    {transferData.title}
                  </li>
                </ol>
              </nav>
            </>
          );
        })()}


        {/* Photo Gallery */}
        {galleryImages && galleryImages.length > 0 && (
          <div className="max-w-6xl mx-auto mb-6 md:mb-8">
            {/* Mobile: single hero image */}
            <div className="md:hidden overflow-hidden rounded-xl">
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                loading="lazy"
                className="w-full h-[240px] object-cover"
              />
            </div>
            {/* Desktop: 4-image collage */}
            <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-3 h-[420px]">
              {galleryImages.slice(0, 4).map((img, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "overflow-hidden rounded-xl",
                    idx === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
                  )}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Title */}
        <div className="max-w-6xl mx-auto text-center mb-5 md:mb-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">{transferData.title}</h1>
        </div>

        <div className="max-w-3xl mx-auto mb-6 md:mb-8">
          <TransferHeroBadges variant="light" />
        </div>


        <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
          {/* Vehicle Selection */}
          <Card className="mb-6">
            <CardContent className="p-4 md:p-6">
              <div className="space-y-4">
                {transferData.vehicles.map((vehicle) => (
                  <div
                    key={vehicle.id}
                    className={cn(
                      "border rounded-lg p-3 md:p-4 cursor-pointer transition-all",
                      selectedVehicle === vehicle.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    )}
                    onClick={() => setSelectedVehicle(vehicle.id)}
                  >
                    {/* Mobile layout */}
                    <div className="md:hidden">
                      <div className="flex items-start gap-3">
                        <div className="w-20 h-16 flex-shrink-0">
                          <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div className="min-w-0">
                              <h3 className="font-semibold text-base leading-tight truncate">{vehicle.name}</h3>
                              <p className="text-xs text-muted-foreground">{vehicle.capacity} Persons</p>
                            </div>
                            <Checkbox
                              checked={selectedVehicle === vehicle.id}
                              onCheckedChange={() => setSelectedVehicle(vehicle.id)}
                              className="h-5 w-5 flex-shrink-0"
                            />
                          </div>
                          <div className="flex items-center justify-between mt-2 gap-2">
                            <p className="text-xs text-muted-foreground">
                              {vehicle.bigBags} Big · {vehicle.handBags} Hand Bag
                            </p>
                            <p className="text-base font-bold text-primary whitespace-nowrap">
                              ₹{vehicle.price.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Desktop layout */}
                    <div className="hidden md:flex items-center gap-4">
                      <div className="w-32 h-20 flex-shrink-0">
                        <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{vehicle.name}</h3>
                        <p className="text-sm text-muted-foreground">{vehicle.capacity} Persons</p>
                      </div>
                      <div className="text-sm">
                        <p className="font-semibold">Bag Allowed</p>
                        <p className="text-muted-foreground">{vehicle.bigBags} Big Bag</p>
                        <p className="text-muted-foreground">{vehicle.handBags} Hand Bag</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold">₹ {vehicle.price.toLocaleString()}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <Checkbox
                          checked={selectedVehicle === vehicle.id}
                          onCheckedChange={() => setSelectedVehicle(vehicle.id)}
                          className="h-6 w-6"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Persons & Total Price Row */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t">
                <div>
                  <Label className="text-primary font-semibold">No. Of Person<span className="text-destructive">*</span></Label>
                  <div className="flex items-center gap-3 mt-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handlePersonsChange(false)}
                      disabled={numberOfPersons === 0}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                    <span className="text-lg font-semibold w-8 text-center">{numberOfPersons}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handlePersonsChange(true)}
                    >
                      <ChevronUp className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="border-2 border-muted rounded-lg px-6 py-3">
                  <div className="flex items-center gap-4">
                    <span className="font-semibold">Total Price</span>
                    <span className="text-xl font-bold text-primary">₹ {totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customer Information */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Customer Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Row 1: Pickup Date, Time, Location */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label className="text-primary font-semibold">Pick Up Date <span className="text-destructive">*</span></Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal mt-2",
                          !pickupDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                        {pickupDate ? format(pickupDate, "PPP") : "Select Date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={pickupDate}
                        onSelect={setPickupDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <Label className="text-primary font-semibold">Pick Up Time <span className="text-destructive">*</span></Label>
                  <div className="relative mt-2">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
                    <Input
                      type="time"
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      className="pl-10"
                      placeholder="Select Time"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-primary font-semibold">Pickup Hotel Name <span className="text-destructive">*</span></Label>
                  <div className="relative mt-2">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
                    <Input
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      className="pl-10"
                      placeholder="Select Pickup Hotel Name"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Room No, Drop Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground font-semibold">Room No</Label>
                  <div className="relative mt-2">
                    <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
                    <Input
                      value={roomNo}
                      onChange={(e) => setRoomNo(e.target.value)}
                      className="pl-10"
                      placeholder="Enter Room No."
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-primary font-semibold">Drop Hotel Name</Label>
                  <div className="relative mt-2">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
                    <Input
                      value={dropLocation}
                      onChange={(e) => setDropLocation(e.target.value)}
                      className="pl-10"
                      placeholder="Select Drop Hotel Name"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons — mobile/tablet inline */}
          <div className="flex flex-col sm:flex-row gap-3 lg:hidden">
            <Button
              size="lg"
              variant="outline"
              className="flex-1 py-6 text-base"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart {cartCount > 0 && `(${cartCount})`}
            </Button>
            <Button
              size="lg"
              className="flex-1 py-6 text-base"
              onClick={handleBookNow}
            >
              Book Now
            </Button>
          </div>
          </div>

          {/* Sticky Booking Summary — desktop */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <Card className="border-primary/20 shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start justify-between gap-3 pb-3 border-b">
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Vehicle</p>
                      <p className="font-semibold text-sm mt-0.5 truncate">
                        {selectedVehicleData?.name || "Not selected"}
                      </p>
                      {selectedVehicleData && (
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {selectedVehicleData.capacity} Persons
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 pb-3 border-b">
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Pickup</p>
                      <p className="text-sm mt-0.5">
                        {pickupDate ? format(pickupDate, "MMM d, yyyy") : "—"}
                        {pickupTime && ` · ${pickupTime}`}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Total Price</span>
                    <span className="text-2xl font-bold text-primary">
                      ₹{totalPrice.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 pt-1">
                    <Button size="lg" className="w-full" onClick={handleBookNow}>
                      Book Now
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full"
                      onClick={handleAddToCart}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart {cartCount > 0 && `(${cartCount})`}
                    </Button>
                  </div>

                  <p className="text-[11px] text-muted-foreground text-center pt-1">
                    Free cancellation up to 72 hours before pickup
                  </p>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Transfer Details Accordion */}
          <div className="mt-8">
            <Accordion type="multiple" className="space-y-4">
              <AccordionItem value="highlights" className="border rounded-lg px-4">
                <AccordionTrigger className="text-lg font-semibold">Highlights</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {transferData.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary">✅</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="description" className="border rounded-lg px-4">
                <AccordionTrigger className="text-lg font-semibold">Full Description</AccordionTrigger>
                <AccordionContent>
                  <div className="prose prose-sm max-w-none">
                    {transferData.description.split("\n").map((para, index) => (
                      <p key={index} className="mb-2">{para}</p>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="about" className="border rounded-lg px-4">
                <AccordionTrigger className="text-lg font-semibold">About</AccordionTrigger>
                <AccordionContent>
                  <div className="prose prose-sm max-w-none">
                    {transferData.about.split("\n").map((para, index) => (
                      <p key={index} className="mb-2">{para}</p>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="baggage" className="border rounded-lg px-4">
                <AccordionTrigger className="text-lg font-semibold">Baggage Allowance</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {transferData.baggagePolicy.map((policy, index) => (
                      <li key={index}>{policy}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cancellation" className="border rounded-lg px-4">
                <AccordionTrigger className="text-lg font-semibold">Cancellation Policy</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {transferData.cancellationPolicy.map((policy, index) => (
                      <li key={index}>{policy}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="terms" className="border rounded-lg px-4">
                <AccordionTrigger className="text-lg font-semibold">Terms & Conditions</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {transferData.termsConditions.map((term, index) => (
                      <li key={index}>{term}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* SEO Long-form Content */}
          {seoContent && (
            <Card className="mt-10">
              <CardContent className="p-6 md:p-8">
                <article
                  className="
                    max-w-none text-foreground
                    [&_h2]:text-2xl md:[&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mb-4 [&_h2]:mt-0 [&_h2]:leading-tight
                    [&_h3]:text-xl md:[&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-foreground [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:leading-snug
                    [&_h4]:text-lg md:[&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-foreground [&_h4]:mt-6 [&_h4]:mb-2
                    [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-muted-foreground [&_p]:mb-4
                    [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_ul]:space-y-2
                    [&_li]:text-base [&_li]:leading-relaxed [&_li]:text-muted-foreground [&_li]:marker:text-primary
                    [&_strong]:text-foreground [&_strong]:font-semibold
                  "
                >
                  {seoContent}
                </article>
              </CardContent>
            </Card>
          )}


          {/* FAQs */}
          {faqs && faqs.length > 0 && (
            <section className="mt-10">
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="border rounded-lg px-4">
                    <AccordionTrigger className="text-base font-semibold text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          )}

          {/* You may also like — Related internal links */}
          {relatedLinks && relatedLinks.length > 0 && (
            <section className="mt-10">
              <h2 className="text-2xl font-bold mb-4">You May Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.url}
                    className="group flex items-center gap-3 rounded-xl border bg-card p-4 transition-all hover:border-primary hover:shadow-md"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {link.title}
                      </h3>
                      {link.description && (
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                          {link.description}
                        </p>
                      )}
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary flex-shrink-0 transition-colors" />
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      {(() => {
        const cityActivities = getCityActivities(transferData.city);
        if (!cityActivities) return null;
        return (
          <RecommendedActivitiesSection city={cityActivities.city} activities={cityActivities.activities} />
        );
      })()}

      {(() => {
        const cityTransfers = getCityTransfers(transferData.city);
        if (!cityTransfers) return null;
        return (
          <BookTransfersSection city={cityTransfers.city} transfers={cityTransfers.transfers} />
        );
      })()}

      <div className="container mx-auto px-4">
        <RelatedArticles city={transferData.city} />
      </div>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default TransferBooking;
