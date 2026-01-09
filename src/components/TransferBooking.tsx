import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Clock, MapPin, Phone, ChevronDown, ChevronUp, Luggage, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
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

interface TransferBookingProps {
  transferData: TransferData;
}

const TransferBooking = ({ transferData }: TransferBookingProps) => {
  const location = useLocation();
  const tourSlug = location.pathname.slice(1);
  
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [numberOfPersons, setNumberOfPersons] = useState(0);
  const [pickupDate, setPickupDate] = useState<Date | undefined>(undefined);
  const [pickupTime, setPickupTime] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [roomNo, setRoomNo] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleBooking = async () => {
    if (!selectedVehicle) {
      toast.error("Please select a vehicle type");
      return;
    }
    if (numberOfPersons === 0) {
      toast.error("Please select number of persons");
      return;
    }
    if (!pickupDate) {
      toast.error("Please select pickup date");
      return;
    }
    if (!pickupTime) {
      toast.error("Please select pickup time");
      return;
    }
    if (!pickupLocation) {
      toast.error("Please enter pickup location");
      return;
    }
    if (!contactName || !contactEmail) {
      toast.error("Please fill in contact information");
      return;
    }

    setIsSubmitting(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast.error("Please login to make a booking");
        setIsSubmitting(false);
        return;
      }

      const { error } = await supabase.from("bookings").insert({
        user_id: user.id,
        tour_slug: tourSlug,
        tour_name: `${transferData.title} - ${selectedVehicleData?.name}`,
        tour_date: format(pickupDate, "yyyy-MM-dd"),
        adults: numberOfPersons,
        children: 0,
        total_price: totalPrice,
        contact_name: contactName,
        contact_email: contactEmail,
        contact_phone: contactPhone,
        special_requests: `Pickup: ${pickupLocation}, Drop: ${dropLocation || "N/A"}, Room: ${roomNo || "N/A"}, Time: ${pickupTime}`,
        currency: "INR"
      });

      if (error) throw error;

      toast.success("Booking submitted successfully!");
      // Reset form
      setSelectedVehicle(null);
      setNumberOfPersons(0);
      setPickupDate(undefined);
      setPickupTime("");
      setPickupLocation("");
      setDropLocation("");
      setRoomNo("");
      setContactName("");
      setContactEmail("");
      setContactPhone("");
    } catch (error) {
      console.error("Booking error:", error);
      toast.error("Failed to submit booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">{transferData.title}</h1>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Vehicle Selection */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="space-y-4">
                {transferData.vehicles.map((vehicle) => (
                  <div
                    key={vehicle.id}
                    className={cn(
                      "border rounded-lg p-4 cursor-pointer transition-all",
                      selectedVehicle === vehicle.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    )}
                    onClick={() => setSelectedVehicle(vehicle.id)}
                  >
                    <div className="flex items-center gap-4">
                      {/* Vehicle Image */}
                      <div className="w-32 h-20 flex-shrink-0">
                        <img
                          src={vehicle.image}
                          alt={vehicle.name}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Vehicle Info */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{vehicle.name}</h3>
                        <p className="text-sm text-muted-foreground">{vehicle.capacity} Persons</p>
                      </div>

                      {/* Baggage Info */}
                      <div className="text-sm">
                        <p className="font-semibold">Bag Allowed</p>
                        <p className="text-muted-foreground">{vehicle.bigBags} Big Bag</p>
                        <p className="text-muted-foreground">{vehicle.handBags} Hand Bag</p>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-xl font-bold">₹ {vehicle.price.toLocaleString()}</p>
                      </div>

                      {/* Checkbox */}
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
                  <Label className="text-primary font-semibold">Drop Hotel Name <span className="text-destructive">*</span></Label>
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

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
                <div>
                  <Label className="text-primary font-semibold">Contact Name <span className="text-destructive">*</span></Label>
                  <Input
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="mt-2"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <Label className="text-primary font-semibold">Email <span className="text-destructive">*</span></Label>
                  <Input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="mt-2"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <Label className="text-primary font-semibold">Phone</Label>
                  <div className="relative mt-2">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
                    <Input
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="pl-10"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Book Now Button */}
          <Button
            size="lg"
            className="w-full py-6 text-lg"
            onClick={handleBooking}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Book Now"}
          </Button>

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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TransferBooking;
