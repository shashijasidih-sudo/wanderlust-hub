import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingSteps from "@/components/BookingSteps";
import BookingSummary from "@/components/BookingSummary";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/lib/auth";
import { supabase } from "@/lib/supabaseClient";
import { toast } from "sonner";
import { CreditCard, QrCode } from "lucide-react";
import { saveBooking } from "@/services/bookings";

const RAZORPAY_KEY_ID = "rzp_live_STVnS52vFJiowF";

declare global {
  interface Window { Razorpay: any; }
}

interface CustomerInfo {
  customerName: string; email: string; phone: string;
  country: string; address: string; zipCode: string;
}

const PaymentInformation = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const savedInfo = sessionStorage.getItem("customerInfo");
    if (savedInfo) setCustomerInfo(JSON.parse(savedInfo));
    else navigate("/customer-information");
  }, [navigate]);

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">No items in cart</h1>
          <p className="text-muted-foreground mb-6">Please add a transfer to your cart first.</p>
          <Button onClick={() => navigate("/bangkok/transfers")}>Browse Transfers</Button>
        </main>
        <Footer />
      </div>
    );
  }

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      if (!user) {
        toast.error("Please login to complete booking");
        navigate("/auth"); setIsProcessing(false); return;
      }
      if (!window.Razorpay) {
        toast.error("Payment gateway is loading. Please try again.");
        setIsProcessing(false); return;
      }

      const totalAmountPaise = getCartTotal() * 100;
      const services = cartItems.map(item => item.title).join(", ");
      const firstItem = cartItems[0];
      const bookingDate = firstItem?.itemType === 'activity' ? firstItem.selectedDate || "" : firstItem?.pickupDate || "";
      const city = firstItem?.slug?.split("/")[0] || "";
      const pickupTime = firstItem?.itemType === 'activity' ? firstItem.selectedTime || "" : firstItem?.pickupTime || "";

      // Create Razorpay order via Edge Function
      let order: any;
      try {
        const { data, error } = await supabase.functions.invoke('create-razorpay-order', {
          body: {
            amount: totalAmountPaise, currency: "INR",
            customer_name: customerInfo?.customerName || user.full_name || "Guest",
            customer_email: customerInfo?.email || user.email || "",
            services, booking_date: bookingDate, city, pickup_time: pickupTime,
          },
        });
        if (error) throw error;
        order = data;
      } catch {
        toast.error("Failed to create payment order. Please try again.");
        setIsProcessing(false); return;
      }

      if (!order?.id) {
        toast.error("Failed to create payment order. Please try again.");
        setIsProcessing(false); return;
      }

      const options = {
        key: RAZORPAY_KEY_ID,
        amount: totalAmountPaise,
        currency: "INR",
        order_id: order.id,
        name: "Yellodae Tours",
        description: `Booking for ${cartItems.length} item(s)`,
        prefill: {
          name: customerInfo?.customerName || "",
          email: customerInfo?.email || "",
          contact: customerInfo?.phone || "",
        },
        theme: { color: "#f97316" },
        handler: async function (response: { razorpay_payment_id: string }) {
          clearCart();
          sessionStorage.removeItem("customerInfo");
          toast.success("Payment successful!");
          navigate("/booking-confirmed");
        },
        modal: { ondismiss: () => setIsProcessing(false) },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Failed to initiate payment. Please try again.");
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-5xl mx-auto">
          <CardContent className="p-6 md:p-8">
            <BookingSteps currentStep={2} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-xl font-bold mb-6">Select Payment Method</h2>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                  <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card" className="flex items-center gap-3 cursor-pointer flex-1">
                      <CreditCard className="h-5 w-5 text-primary" />
                      <div><p className="font-semibold">Credit / Debit Card</p><p className="text-sm text-muted-foreground">Visa, Mastercard, American Express, RuPay</p></div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                    <RadioGroupItem value="upi" id="upi" />
                    <Label htmlFor="upi" className="flex items-center gap-3 cursor-pointer flex-1">
                      <QrCode className="h-5 w-5 text-primary" />
                      <div><p className="font-semibold">UPI</p><p className="text-sm text-muted-foreground">Google Pay, PhonePe, Paytm, BHIM</p></div>
                    </Label>
                  </div>
                </RadioGroup>
                <p className="text-sm text-muted-foreground mt-4 p-4 bg-muted/50 rounded-lg">
                  You will be redirected to Razorpay's secure payment gateway to complete your payment.
                </p>
                <div className="flex justify-center mt-8">
                  <Button size="lg" className="px-12 py-6 text-lg rounded-full" onClick={handlePayment} disabled={isProcessing}>
                    {isProcessing ? "Processing..." : "CONFIRM & PAY"}
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-1"><BookingSummary /></div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentInformation;
