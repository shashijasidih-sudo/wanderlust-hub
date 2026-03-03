import { useState } from "react";
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

    setIsLoading(true);
    // Placeholder — POST /api/bookings
    await new Promise(r => setTimeout(r, 800));
    setIsLoading(false);

    toast({ title: "Booking Successful!", description: "Your booking has been confirmed. Check My Bookings for details." });
    onClose();
    navigate("/my-bookings");
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
