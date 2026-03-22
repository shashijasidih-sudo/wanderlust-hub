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
      const response = await fetch(
        "https://cymzgmfnhtnqledwwojt.supabase.co/functions/v1/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5bXpnbWZuaHRucWxlZHd3b2p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczNzE5MzQsImV4cCI6MjA4Mjk0NzkzNH0.-qkr1VSNdsLnFHfqH6P-HOlYtJG69PNHB2WAgxtVlso",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5bXpnbWZuaHRucWxlZHd3b2p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczNzE5MzQsImV4cCI6MjA4Mjk0NzkzNH0.-qkr1VSNdsLnFHfqH6P-HOlYtJG69PNHB2WAgxtVlso",
          },
          body: JSON.stringify({
            amount: Math.round(getCartTotal() * 100),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error("Order error:", data);
        toast.error("Failed to create payment order");
        setIsProcessing(false);
        return;
      }

      console.log("Order created:", data);

      const options = {
        key: "rzp_live_STVnS52vFJiowF",
        amount: data.amount,
        currency: "INR",
        name: "Yellodae",
        description: "Booking Payment",
        order_id: data.id,

        handler: async function (response: any) {
          console.log("Payment success:", response);

          try {
            await fetch(
              "https://cymzgmfnhtnqledwwojt.supabase.co/functions/v1/save-booking",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5bXpnbWZuaHRucWxlZHd3b2p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczNzE5MzQsImV4cCI6MjA4Mjk0NzkzNH0.-qkr1VSNdsLnFHfqH6P-HOlYtJG69PNHB2WAgxtVlso",
                  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5bXpnbWZuaHRucWxlZHd3b2p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczNzE5MzQsImV4cCI6MjA4Mjk0NzkzNH0.-qkr1VSNdsLnFHfqH6P-HOlYtJG69PNHB2WAgxtVlso",
                },
                body: JSON.stringify({
                  payment_id: response.razorpay_payment_id,
                  order_id: response.razorpay_order_id,
                  amount: Math.round(getCartTotal() * 100),
                }),
              }
            );
          } catch (err) {
            console.error("Failed to save booking:", err);
          }

          clearCart();
          sessionStorage.removeItem("customerInfo");
          toast.success("Payment successful!");
          navigate("/booking-confirmed");
        },

        prefill: {
          name: customerInfo?.customerName || "",
          email: customerInfo?.email || "",
          contact: customerInfo?.phone || "",
        },

        theme: {
          color: "#3399cc",
        },

        modal: { ondismiss: () => setIsProcessing(false) },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Something went wrong");
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
