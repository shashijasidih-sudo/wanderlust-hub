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
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { CreditCard, QrCode } from "lucide-react";

const RAZORPAY_KEY_ID = "rzp_live_S3jB95uYSfEaEf";

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface CustomerInfo {
  customerName: string;
  email: string;
  phone: string;
  country: string;
  address: string;
  zipCode: string;
}

const PaymentInformation = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const savedInfo = sessionStorage.getItem("customerInfo");
    if (savedInfo) {
      setCustomerInfo(JSON.parse(savedInfo));
    } else {
      navigate("/customer-information");
    }
  }, [navigate]);

  // Realtime listener for payment status (handles QR/webhook-based payments)
  useEffect(() => {
    let channel: ReturnType<typeof supabase.channel> | null = null;

    const setupListener = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      channel = supabase
        .channel("payment-status")
        .on(
          "postgres_changes",
          {
            event: "UPDATE",
            schema: "public",
            table: "payments",
            filter: `user_id=eq.${user.id}`,
          },
          (payload: any) => {
            if (payload.new.status === "paid") {
              clearCart();
              sessionStorage.removeItem("customerInfo");
              toast.success("✅ Payment Successful!");
              navigate("/booking-confirmed");
            }
          }
        )
        .subscribe();
    };

    setupListener();

    return () => {
      if (channel) {
        supabase.removeChannel(channel);
      }
    };
  }, [navigate, clearCart]);

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">No items in cart</h1>
          <p className="text-muted-foreground mb-6">Please add a transfer to your cart first.</p>
          <Button onClick={() => navigate("/bangkok/transfers")}>
            Browse Transfers
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const saveBookingsToDatabase = async (userId: string, paymentId: string) => {
    for (const item of cartItems) {
      const isActivity = item.itemType === 'activity';
      const { error } = await supabase.from("bookings").insert({
        user_id: userId,
        tour_slug: item.slug,
        tour_name: isActivity ? item.title : `${item.title} - ${item.vehicleName}`,
        tour_date: isActivity ? item.selectedDate : item.pickupDate,
        adults: isActivity ? (item.adults || 1) : item.numberOfPersons,
        children: isActivity ? (item.children || 0) : 0,
        total_price: item.price * item.quantity,
        contact_name: customerInfo?.customerName || "",
        contact_email: customerInfo?.email || "",
        contact_phone: customerInfo?.phone || "",
        special_requests: isActivity 
          ? `Time: ${item.selectedTime || "N/A"}, Qty: ${item.quantity}, Payment ID: ${paymentId}`
          : `Pickup: ${item.pickupLocation}, Drop: ${item.dropLocation || "N/A"}, Room: ${item.roomNo || "N/A"}, Time: ${item.pickupTime}, Qty: ${item.quantity}, Payment ID: ${paymentId}`,
        currency: "INR"
      });

      if (error) throw error;
    }
  };

  const handlePayment = async () => {
    setIsProcessing(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast.error("Please login to complete booking");
        navigate("/auth");
        setIsProcessing(false);
        return;
      }

      if (!window.Razorpay) {
        toast.error("Payment gateway is loading. Please try again.");
        setIsProcessing(false);
        return;
      }

      const totalAmountPaise = getCartTotal() * 100; // Razorpay expects amount in paise

      // 1️⃣ Insert payment row in Supabase
      const { data: paymentRow, error: paymentError } = await supabase
        .from("payments")
        .insert({
          user_id: user.id,
          amount: totalAmountPaise,
          status: "created",
          currency: "INR",
        })
        .select()
        .single();

      if (paymentError || !paymentRow) {
        console.error("Payment row insert error:", paymentError);
        toast.error("Unable to start payment. Please try again.");
        setIsProcessing(false);
        return;
      }

      // 2️⃣ Create Razorpay order via edge function
      const orderRes = await fetch(
        `https://cymzgmfnhtnqledwwojt.supabase.co/functions/v1/create-razorpay-order`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: totalAmountPaise, currency: "INR" }),
        }
      );

      const order = await orderRes.json();

      if (!orderRes.ok || !order.id) {
        console.error("Razorpay order creation failed:", order);
        toast.error("Failed to create payment order. Please try again.");
        setIsProcessing(false);
        return;
      }

      // 3️⃣ Save Razorpay order ID into the payment row
      await supabase
        .from("payments")
        .update({ razorpay_order_id: order.id })
        .eq("id", paymentRow.id);

      // 4️⃣ Open Razorpay checkout
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
        theme: {
          color: "#f97316",
        },
        handler: async function (response: { razorpay_payment_id: string }) {
          try {
            // Update payment row with razorpay_payment_id
            await supabase
              .from("payments")
              .update({
                razorpay_payment_id: response.razorpay_payment_id,
                status: "paid",
              })
              .eq("id", paymentRow.id);

            // Save bookings after successful payment
            await saveBookingsToDatabase(user.id, response.razorpay_payment_id);
            
            // Clear cart and session storage
            clearCart();
            sessionStorage.removeItem("customerInfo");
            
            toast.success("Payment successful!");
            navigate("/booking-confirmed");
          } catch (error) {
            console.error("Booking save error:", error);
            toast.error("Payment received but failed to save booking. Please contact support.");
          }
        },
        modal: {
          ondismiss: function () {
            setIsProcessing(false);
          },
        },
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
              {/* Left Column - Payment Form */}
              <div className="lg:col-span-2">
                <h2 className="text-xl font-bold mb-6">Select Payment Method</h2>
                
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                  <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card" className="flex items-center gap-3 cursor-pointer flex-1">
                      <CreditCard className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold">Credit / Debit Card</p>
                        <p className="text-sm text-muted-foreground">Visa, Mastercard, American Express, RuPay</p>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                    <RadioGroupItem value="upi" id="upi" />
                    <Label htmlFor="upi" className="flex items-center gap-3 cursor-pointer flex-1">
                      <QrCode className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold">UPI</p>
                        <p className="text-sm text-muted-foreground">Google Pay, PhonePe, Paytm, BHIM</p>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>

                <p className="text-sm text-muted-foreground mt-4 p-4 bg-muted/50 rounded-lg">
                  You will be redirected to Razorpay's secure payment gateway to complete your payment.
                </p>

                <div className="flex justify-center mt-8">
                  <Button
                    size="lg"
                    className="px-12 py-6 text-lg rounded-full"
                    onClick={handlePayment}
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing..." : "CONFIRM & PAY"}
                  </Button>
                </div>
              </div>

              {/* Right Column - Summary */}
              <div className="lg:col-span-1">
                <BookingSummary />
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentInformation;
