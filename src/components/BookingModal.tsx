import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { CalendarIcon, Loader2, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { z } from "zod";


const RAZORPAY_KEY_ID = "rzp_live_STVnS52vFJiowF";
const SUPABASE_FUNCTIONS_URL = "https://cymzgmfnhtnqledwwojt.supabase.co/functions/v1";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5bXpnbWZuaHRucWxlZHd3b2p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczNzE5MzQsImV4cCI6MjA4Mjk0NzkzNH0.-qkr1VSNdsLnFHfqH6P-HOlYtJG69PNHB2WAgxtVlso";

declare global {
  interface Window { Razorpay: any; }
}

const bookingSchema = z.object({
  contactName: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  contactEmail: z.string().trim().email("Invalid email address").max(255),
  contactPhone: z.string().trim().max(20).optional(),
  specialRequests: z.string().trim().max(500).optional(),
});

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tourName: string;
  tourSlug: string;
  pricePerAdult: number;
  pricePerChild: number;
  currency?: string;
}

const BookingModal = ({ isOpen, onClose, tourName, tourSlug, pricePerAdult, pricePerChild, currency = "INR" }: BookingModalProps) => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState<Date>();
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [contactName, setContactName] = useState(user?.full_name || "");
  const [contactEmail, setContactEmail] = useState(user?.email || "");
  const [contactPhone, setContactPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();
  const { toast } = useToast();

  const totalPrice = (adults * pricePerAdult) + (children * pricePerChild);

  // Load Razorpay script
  useEffect(() => {
    if (!document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]')) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!user) {
      toast({ title: "Login Required", description: "Please log in to make a booking.", variant: "destructive" });
      navigate("/auth");
      return;
    }

    if (!date) { setErrors({ date: "Please select a tour date" }); return; }

    const result = bookingSchema.safeParse({ contactName, contactEmail, contactPhone: contactPhone || undefined, specialRequests: specialRequests || undefined });
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => { if (err.path[0]) fieldErrors[err.path[0] as string] = err.message; });
      setErrors(fieldErrors);
      return;
    }

    if (!window.Razorpay) {
      toast({ title: "Payment gateway loading", description: "Please try again in a moment.", variant: "destructive" });
      return;
    }

    setIsLoading(true);
    try {
      const totalAmountPaise = Math.round(totalPrice * 100);

      // Save booking data to localStorage BEFORE payment
      const bookingData = {
        customer_name: contactName,
        customer_email: contactEmail,
        customer_phone: contactPhone,
        tour_name: tourName,
        tour_slug: tourSlug,
        tour_date: format(date, "yyyy-MM-dd"),
        adults,
        children,
        special_requests: specialRequests,
        amount: totalAmountPaise,
        currency,
        total_price: totalPrice,
      };
      localStorage.setItem("booking_data", JSON.stringify(bookingData));
      console.log("Booking data saved to localStorage before payment:", bookingData);

      // Create Razorpay order
      const orderRes = await fetch(`${SUPABASE_FUNCTIONS_URL}/create-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": SUPABASE_ANON_KEY,
          "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          amount: totalAmountPaise,
          currency,
          customer_name: contactName,
          customer_email: contactEmail,
          services: tourName,
          booking_date: format(date, "yyyy-MM-dd"),
        }),
      });

      if (!orderRes.ok) throw new Error("Failed to create order");
      const order = await orderRes.json();

      // Open Razorpay checkout
      const options = {
        key: RAZORPAY_KEY_ID,
        amount: totalAmountPaise,
        currency,
        order_id: order.id,
        name: "Yellodae Tours",
        description: tourName,
        prefill: { name: contactName, email: contactEmail, contact: contactPhone },
        handler: async (response: any) => {
          try {
            // Retrieve saved booking data
            const savedData = JSON.parse(localStorage.getItem("booking_data") || "{}");
            const finalData = {
              payment_id: response.razorpay_payment_id,
              order_id: response.razorpay_order_id,
              user_id: user.id,
              contact_name: savedData.customer_name || contactName,
              contact_email: savedData.customer_email || contactEmail,
              contact_phone: savedData.customer_phone || contactPhone || null,
              tour_name: savedData.tour_name || tourName,
              tour_slug: savedData.tour_slug || tourSlug,
              tour_date: savedData.tour_date || (date ? format(date, "yyyy-MM-dd") : ""),
              total_price: savedData.total_price || totalPrice,
              currency: savedData.currency || currency,
              adults: savedData.adults || adults,
              children: savedData.children || children,
              special_requests: savedData.special_requests || specialRequests || null,
            };
            console.log("FINAL DATA to save:", finalData);

            // Save booking to Supabase
            let booking: { id?: string } | null = null;
            let bookingId = "";
            const saveRes = await fetch(`${SUPABASE_FUNCTIONS_URL}/save-booking`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(finalData),
            });

            if (!saveRes.ok) {
              const errBody = await saveRes.text();
              console.error("Save booking failed:", saveRes.status, errBody);
              toast({ title: "Booking saved with issues", description: "Payment was successful but booking record may not have saved. Please contact support.", variant: "destructive" });
            } else {
              const saveResult = await saveRes.json();
              const extracted = extractBookingId(saveResult);
              booking = extracted.booking;
              bookingId = extracted.bookingId;
            }

            localStorage.removeItem("booking_data");

            await sendBookingConfirmation(bookingId);
          } catch (err) {
            console.error("Failed to save booking:", err);
            toast({ title: "Booking save error", description: "Payment was successful but booking record failed to save. Please contact support with your Payment ID.", variant: "destructive" });
          }

          toast({ title: "Payment Successful!", description: `Payment ID: ${response.razorpay_payment_id}` });
          onClose();
          navigate("/user-bookings");
        },
        modal: { ondismiss: () => setIsLoading(false) },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
      setIsLoading(false);
    } catch (error) {
      console.error("Payment error:", error);
      toast({ title: "Payment Failed", description: "Could not initiate payment. Please try again.", variant: "destructive" });
      setIsLoading(false);
    }
  };

  const handleLoginRedirect = () => { onClose(); navigate("/auth"); };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Book Tour</DialogTitle>
          <DialogDescription>{tourName}</DialogDescription>
        </DialogHeader>

        {!user ? (
          <div className="flex flex-col items-center py-8 text-center">
            <p className="text-muted-foreground mb-4">Please log in to make a booking</p>
            <Button onClick={handleLoginRedirect}>Sign Up / Login</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label>Tour Date *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}>
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-background" align="start">
                  <Calendar mode="single" selected={date} onSelect={setDate} disabled={(date) => date < new Date()} initialFocus />
                </PopoverContent>
              </Popover>
              {errors.date && <p className="text-sm text-destructive">{errors.date}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Adults</Label>
                <div className="flex items-center gap-2">
                  <Button type="button" variant="outline" size="icon" onClick={() => setAdults(Math.max(1, adults - 1))} disabled={adults <= 1}><Minus className="h-4 w-4" /></Button>
                  <span className="w-8 text-center font-medium">{adults}</span>
                  <Button type="button" variant="outline" size="icon" onClick={() => setAdults(adults + 1)}><Plus className="h-4 w-4" /></Button>
                </div>
                <p className="text-xs text-muted-foreground">₹{pricePerAdult.toLocaleString()} each</p>
              </div>
              <div className="space-y-2">
                <Label>Children</Label>
                <div className="flex items-center gap-2">
                  <Button type="button" variant="outline" size="icon" onClick={() => setChildren(Math.max(0, children - 1))} disabled={children <= 0}><Minus className="h-4 w-4" /></Button>
                  <span className="w-8 text-center font-medium">{children}</span>
                  <Button type="button" variant="outline" size="icon" onClick={() => setChildren(children + 1)}><Plus className="h-4 w-4" /></Button>
                </div>
                <p className="text-xs text-muted-foreground">₹{pricePerChild.toLocaleString()} each</p>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactName">Full Name *</Label>
              <Input id="contactName" value={contactName} onChange={(e) => setContactName(e.target.value)} placeholder="Enter your full name" />
              {errors.contactName && <p className="text-sm text-destructive">{errors.contactName}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactEmail">Email *</Label>
              <Input id="contactEmail" type="email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} placeholder="Enter your email" />
              {errors.contactEmail && <p className="text-sm text-destructive">{errors.contactEmail}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactPhone">Phone (Optional)</Label>
              <Input id="contactPhone" type="tel" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} placeholder="Enter your phone number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
              <Textarea id="specialRequests" value={specialRequests} onChange={(e) => setSpecialRequests(e.target.value)} placeholder="Any special requests or requirements..." rows={3} />
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total Price:</span>
                <span className="text-primary">₹{totalPrice.toLocaleString()}</span>
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Processing...</> : "Confirm Booking"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
