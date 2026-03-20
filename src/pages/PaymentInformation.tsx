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

      const totalAmountPaise = Math.round(getCartTotal() * 100);

      const res = await fetch(
        "https://cymzgmfnhtnqledwwojt.supabase.co/functions/v1/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: totalAmountPaise,
          }),
        }
      );

      const data = await res.json();
      if (!res.ok) {
        console.error(data);
        toast.error("Order creation failed");
        setIsProcessing(false);
        return;
      }

      const options = {
        key: "rzp_live_STVnS52vFJiowF",
        amount: data.amount,
        currency: "INR",
        order_id: data.id,
        name: "Yellodae Tours",
        description: `Booking for ${cartItems.length} item(s)`,
        prefill: {
          name: customerInfo?.customerName || "",
          email: customerInfo?.email || "",
          contact: customerInfo?.phone || "",
        },
        theme: { color: "#f97316" },
        handler: async function (response: any) {
          try {
            const firstItem = cartItems[0];
            const bookingDate = firstItem?.itemType === 'activity' ? firstItem.selectedDate || "" : firstItem?.pickupDate || "";
            const city = firstItem?.slug?.split("/")[0] || "";
            const pickupTime = firstItem?.itemType === 'activity' ? firstItem.selectedTime || "" : firstItem?.pickupTime || "";

            await saveBooking({
              user_id: user!.id,
              customer_name: customerInfo?.customerName || user!.full_name || "Guest",
              customer_email: customerInfo?.email || user!.email || "",
              customer_phone: customerInfo?.phone || "",
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id || data.id,
              amount: getCartTotal(),
              currency: "INR",
              status: "confirmed",
              items: cartItems.map(item => ({
                title: item.title, price: item.price, slug: item.slug,
                itemType: item.itemType, quantity: item.quantity || 1,
                adults: item.adults, children: item.children,
                selectedDate: item.selectedDate, selectedTime: item.selectedTime,
                pickupDate: item.pickupDate, pickupTime: item.pickupTime,
                pickupLocation: item.pickupLocation, vehicleName: item.vehicleName,
              })),
              booking_date: bookingDate, city, pickup_time: pickupTime,
            });
          } catch (err) {
            console.error("Failed to save booking:", err);
          }
          clearCart();
          sessionStorage.removeItem("customerInfo");
          toast.success("Payment successful!");
          navigate("/booking-confirmed");
        },
        modal: { ondismiss: () => setIsProcessing(false) },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
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
