import { useState } from "react";
import { Calendar, Users, Minus, Plus, Clock, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import BookingModal from "@/components/BookingModal";
import { useCart } from "@/contexts/CartContext";
import { useCurrency } from "@/contexts/CurrencyContext";

export interface TourOption {
  label: string;
  adultPrice: number;
  childPrice?: number;
}

export interface TourAddOn {
  label: string;
  adultPrice: number;
  childPrice?: number;
}

interface PricingCalculatorProps {
  basePrice: number;
  childPrice: number;
  activityName: string;
  tourTimings: string[];
  pricePerVehicle?: boolean;
  vehicleCapacity?: number;
  tourSlug?: string;
  singleAdultPrice?: number;
  twoAdultPrice?: number;
  minAdults?: number;
  tourOptions?: TourOption[];
  tourAddOns?: TourAddOn[];
  hideChildren?: boolean;
}

const PricingCalculator = ({ 
  basePrice, 
  childPrice, 
  activityName, 
  tourTimings,
  pricePerVehicle = false,
  vehicleCapacity = 5,
  tourSlug = "",
  singleAdultPrice,
  twoAdultPrice,
  minAdults = 1,
  tourOptions,
  tourAddOns,
  hideChildren = false
}: PricingCalculatorProps) => {
  const { addToCart } = useCart();
  const effectiveMin = pricePerVehicle ? 1 : Math.max(minAdults, 1);
  const [adults, setAdults] = useState(pricePerVehicle ? 1 : Math.max(effectiveMin, 2));
  const [children, setChildren] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [vehicles, setVehicles] = useState(1);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(tourOptions?.[0]?.label || "");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  // Calculate adult price based on tiered pricing
  const getAdultPrice = () => {
    if (tourOptions && selectedOption) {
      const option = tourOptions.find(o => o.label === selectedOption);
      if (option) return option.adultPrice;
    }
    if (pricePerVehicle) return basePrice;
    if (adults === 1 && singleAdultPrice) return singleAdultPrice;
    if (adults === 2 && twoAdultPrice) return twoAdultPrice;
    return basePrice;
  };

  // Calculate child price (may vary by tour option)
  const getChildPrice = () => {
    if (tourOptions && selectedOption) {
      const option = tourOptions.find(o => o.label === selectedOption);
      if (option?.childPrice !== undefined) return option.childPrice;
    }
    return childPrice;
  };
  
  const currentAdultPrice = getAdultPrice();
  const currentChildPrice = getChildPrice();

  // Calculate add-on total
  const addOnTotal = tourAddOns
    ? tourAddOns
        .filter(a => selectedAddOns.includes(a.label))
        .reduce((sum, a) => sum + (adults * a.adultPrice) + (children * (a.childPrice ?? 0)), 0)
    : 0;
  
  const totalPrice = pricePerVehicle 
    ? vehicles * basePrice 
    : adults * currentAdultPrice + children * currentChildPrice + addOnTotal;

  const handleBookNow = () => {
    if (!selectedDate) {
      toast.error("Please select a date");
      return;
    }
    if (!selectedTime) {
      toast.error("Please select a tour timing");
      return;
    }
    setIsBookingModalOpen(true);
  };

  const handleAddToCart = async () => {
    if (!selectedDate) {
      toast.error("Please select a date");
      return;
    }
    if (!selectedTime) {
      toast.error("Please select a tour timing");
      return;
    }

    await addToCart({
      itemType: 'activity',
      title: activityName,
      price: totalPrice,
      slug: tourSlug,
      adults: pricePerVehicle ? adults : adults,
      children: children,
      childPrice: childPrice,
      selectedDate: selectedDate,
      selectedTime: selectedTime,
      numberOfPersons: adults + children,
    });
    
    toast.success("Added to cart successfully!");
  };

  return (
    <Card className="border-2 border-primary/20 shadow-lg">
      <CardHeader className="bg-primary/5">
        <CardTitle className="text-2xl">Book Your Experience</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            Select Date
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            {pricePerVehicle ? "Pickup Time" : "Tour Timing"}
          </label>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
          >
            <option value="">Select timing</option>
            {tourTimings.map((timing, idx) => (
              <option key={idx} value={timing}>{timing}</option>
            ))}
          </select>
        </div>

        {pricePerVehicle ? (
          <div className="space-y-4">
            <label className="text-sm font-medium flex items-center gap-2">
              <Car className="h-4 w-4 text-primary" />
              Number of Vehicles
            </label>
            
            <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg border-2 border-primary/30">
              <div className="flex-1">
                <p className="font-medium">Private Vehicle ({vehicleCapacity} Seater)</p>
                <p className="text-sm text-muted-foreground">{formatPrice(basePrice)} per vehicle</p>
                <p className="text-xs text-primary mt-1">Fits up to {vehicleCapacity} passengers (adults + children)</p>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setVehicles(Math.max(1, vehicles - 1))}
                  className="h-8 w-8"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center font-semibold">{vehicles}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setVehicles(Math.min(5, vehicles + 1))}
                  className="h-8 w-8"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="bg-accent/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> Price is per vehicle, not per person. Each {vehicleCapacity}-seater vehicle can accommodate up to {vehicleCapacity} passengers including children.
              </p>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                Passenger Details (for information only)
              </label>
              
              <div className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-sm">No. of Adults (≥12 yrs)</p>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setAdults(Math.max(0, adults - 1))}
                    className="h-8 w-8"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center font-semibold">{adults}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      const maxAllowed = vehicles * vehicleCapacity - children;
                      setAdults(Math.min(maxAllowed, adults + 1));
                    }}
                    className="h-8 w-8"
                    disabled={adults + children >= vehicles * vehicleCapacity}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-sm">No. of Children (2-11 yrs)</p>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    className="h-8 w-8"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center font-semibold">{children}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      const maxAllowed = vehicles * vehicleCapacity - adults;
                      setChildren(Math.min(maxAllowed, children + 1));
                    }}
                    className="h-8 w-8"
                    disabled={adults + children >= vehicles * vehicleCapacity}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                Total passengers: {adults + children} / {vehicles * vehicleCapacity}
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
          {tourOptions && tourOptions.length > 0 && (
              <div className="space-y-3 mb-4">
                <label className="text-sm font-medium flex items-center gap-2">
                  🎫 Tour Options
                </label>
                <div className="space-y-2">
                  {tourOptions.map((option, idx) => (
                    <label
                      key={idx}
                      className={`flex items-start gap-3 p-3 rounded-lg border-2 cursor-pointer transition-colors ${
                        selectedOption === option.label
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="tourOption"
                        value={option.label}
                        checked={selectedOption === option.label}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="mt-1 accent-primary"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{option.label}</p>
                        <p className="text-sm text-primary font-semibold">₹{option.adultPrice.toLocaleString()} / per adult</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {tourAddOns && tourAddOns.length > 0 && (
              <div className="space-y-3 mb-4">
                <label className="text-sm font-medium flex items-center gap-2">
                  ➕ Add-Ons
                </label>
                <div className="space-y-2">
                  {tourAddOns.map((addOn, idx) => (
                    <label
                      key={idx}
                      className={`flex items-start gap-3 p-3 rounded-lg border-2 cursor-pointer transition-colors ${
                        selectedAddOns.includes(addOn.label)
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedAddOns.includes(addOn.label)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedAddOns([...selectedAddOns, addOn.label]);
                          } else {
                            setSelectedAddOns(selectedAddOns.filter(a => a !== addOn.label));
                          }
                        }}
                        className="mt-1 accent-primary"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{addOn.label}</p>
                        <p className="text-sm text-primary font-semibold">₹{addOn.adultPrice.toLocaleString()} / per adult</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            <label className="text-sm font-medium flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              Number of Guests
            </label>
            <div className="flex items-center justify-between p-4 bg-accent/50 rounded-lg">
              <div className="flex-1">
                <p className="font-medium">No. of Adults (≥12 yrs)</p>
                <p className="text-sm text-muted-foreground">
                  ₹{currentAdultPrice.toLocaleString()} per person
                  {!tourOptions && twoAdultPrice && adults === 2 && (
                    <span className="text-xs ml-1">(2 adults rate)</span>
                  )}
                  {!tourOptions && singleAdultPrice && adults === 1 && (
                    <span className="text-xs ml-1">(single adult rate)</span>
                  )}
                  {!tourOptions && !twoAdultPrice && singleAdultPrice && adults > 1 && (
                    <span className="text-xs ml-1">(min. 2 adults rate)</span>
                  )}
                  {!tourOptions && twoAdultPrice && adults > 2 && (
                    <span className="text-xs ml-1">(3+ adults rate)</span>
                  )}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setAdults(Math.max(effectiveMin, adults - 1))}
                  className="h-8 w-8"
                  disabled={adults <= effectiveMin}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center font-semibold">{adults}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setAdults(Math.min(10, adults + 1))}
                  className="h-8 w-8"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {!hideChildren && (
            <div className="flex items-center justify-between p-4 bg-accent/50 rounded-lg">
              <div className="flex-1">
                <p className="font-medium">No. of Child (2-11 yrs)</p>
                <p className="text-sm text-muted-foreground">₹{currentChildPrice.toLocaleString()} per child</p>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setChildren(Math.max(0, children - 1))}
                  className="h-8 w-8"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center font-semibold">{children}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setChildren(Math.min(10, children + 1))}
                  className="h-8 w-8"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            )}
          </div>
        )}

        <div className="border-t border-border pt-4 space-y-2">
          {pricePerVehicle ? (
            <div className="flex justify-between text-sm">
              <span>Vehicle ({vehicles} × INR {basePrice.toLocaleString()})</span>
              <span>INR {(vehicles * basePrice).toLocaleString()}</span>
            </div>
          ) : (
            <>
              <div className="flex justify-between text-sm">
                <span>Adults ({adults} × INR {currentAdultPrice.toLocaleString()})</span>
                <span>INR {(adults * currentAdultPrice).toLocaleString()}</span>
              </div>
              {children > 0 && (
                <div className="flex justify-between text-sm">
                  <span>Children ({children} × INR {currentChildPrice.toLocaleString()})</span>
                  <span>INR {(children * currentChildPrice).toLocaleString()}</span>
                </div>
              )}
              {addOnTotal > 0 && (
                <div className="flex justify-between text-sm">
                  <span>Add-Ons</span>
                  <span>INR {addOnTotal.toLocaleString()}</span>
                </div>
              )}
            </>
          )}
          <div className="flex justify-between text-xl font-bold pt-2 border-t border-border">
            <div className="flex flex-col">
              <span>Total</span>
              <span className="text-xs font-normal text-muted-foreground">GST Inclusive</span>
            </div>
            <span className="text-primary">INR {totalPrice.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex gap-3">
          <Button 
            onClick={handleAddToCart}
            variant="outline"
            className="flex-1 text-lg py-6 border-2 border-primary hover:bg-primary/10"
          >
            Add to Cart
          </Button>
          <Button 
            onClick={handleBookNow}
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
          >
            Book Now
          </Button>
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="flex items-center gap-2">
            ✓ Instant Confirmation
          </p>
          <p className="flex items-center gap-2">
            ✓ Free Cancellation up to 24 hours
          </p>
          <p className="flex items-center gap-2">
            ✓ Mobile Voucher Accepted
          </p>
        </div>
      </CardContent>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        tourName={activityName}
        tourSlug={tourSlug}
        pricePerAdult={basePrice}
        pricePerChild={childPrice}
      />
    </Card>
  );
};

export default PricingCalculator;
