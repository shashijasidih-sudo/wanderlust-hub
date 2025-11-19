import { useState } from "react";
import { Calendar, Users, Minus, Plus, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

interface PricingCalculatorProps {
  basePrice: number;
  childPrice: number;
  activityName: string;
  tourTimings: string[];
}

const PricingCalculator = ({ basePrice, childPrice, activityName, tourTimings }: PricingCalculatorProps) => {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const totalPrice = adults * basePrice + children * childPrice;

  const handleBookNow = () => {
    if (!selectedDate) {
      toast.error("Please select a date");
      return;
    }
    if (!selectedTime) {
      toast.error("Please select a tour timing");
      return;
    }
    toast.success("Booking initiated! Redirecting to checkout...");
  };

  const handleAddToCart = () => {
    if (!selectedDate) {
      toast.error("Please select a date");
      return;
    }
    if (!selectedTime) {
      toast.error("Please select a tour timing");
      return;
    }
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
            Tour Timing
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

        <div className="space-y-4">
          <label className="text-sm font-medium flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            Number of Guests
          </label>
          
          <div className="flex items-center justify-between p-4 bg-accent/50 rounded-lg">
            <div className="flex-1">
              <p className="font-medium">No. of Adults (≥12 yrs)</p>
              <p className="text-sm text-muted-foreground">₹{basePrice.toLocaleString()} per person</p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setAdults(Math.max(1, adults - 1))}
                className="h-8 w-8"
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

          <div className="flex items-center justify-between p-4 bg-accent/50 rounded-lg">
            <div className="flex-1">
              <p className="font-medium">No. of Child (2-11 yrs)</p>
              <p className="text-sm text-muted-foreground">₹{childPrice.toLocaleString()} per child</p>
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
        </div>

        <div className="border-t border-border pt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Adults ({adults} × INR {basePrice.toLocaleString()})</span>
            <span>INR {(adults * basePrice).toLocaleString()}</span>
          </div>
          {children > 0 && (
            <div className="flex justify-between text-sm">
              <span>Children ({children} × INR {childPrice.toLocaleString()})</span>
              <span>INR {(children * childPrice).toLocaleString()}</span>
            </div>
          )}
          <div className="flex justify-between text-xl font-bold pt-2 border-t border-border">
            <span>Total</span>
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
    </Card>
  );
};

export default PricingCalculator;
