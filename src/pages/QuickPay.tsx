import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { CreditCard, ShieldCheck } from "lucide-react";
import { extractBookingId, sendBookingConfirmation } from "@/lib/bookingUtils";

const RAZORPAY_KEY_ID = "rzp_live_STVnS52vFJiowF";

declare global {
  interface Window { Razorpay: any; }
}

const QuickPay = () => {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  const handlePayment = async () => {
    const amountNum = parseFloat(amount);
    if (!amountNum || amountNum < 1) { toast.error("Please enter a valid amount (minimum ₹1)"); return; }
    if (amountNum > 500000) { toast.error("Maximum amount is ₹5,00,000"); return; }
    if (!name.trim()) { toast.error("Please enter your name"); return; }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { toast.error("Please enter a valid email address"); return; }
    if (!phone.trim() || phone.trim().length < 10) { toast.error("Please enter a valid phone number"); return; }

    setIsProcessing(true);
    try {
      if (!window.Razorpay) { toast.error("Payment gateway is loading. Please try again."); setIsProcessing(false); return; }

      const totalAmountPaise = Math.round(amountNum * 100);

      // Save booking data to localStorage BEFORE payment
      const bookingData = {
        customer_name: name.trim(),
        customer_email: email.trim(),
        customer_phone: phone.trim(),
        tour_name: description.trim() || "Quick Payment",
        tour_slug: "quick-pay",
        tour_date: new Date().toISOString().split("T")[0],
        adults: 1,
        children: 0,
        amount: totalAmountPaise,
        currency: "INR",
        total_price: amountNum,
      };
      localStorage.setItem("booking_data", JSON.stringify(bookingData));
      console.log("Booking data saved to localStorage before payment:", bookingData);

      let order: any;
      try {
        const res = await fetch(
          "https://cymzgmfnhtnqledwwojt.supabase.co/functions/v1/create-order",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5bXpnbWZuaHRucWxlZHd3b2p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczNzE5MzQsImV4cCI6MjA4Mjk0NzkzNH0.-qkr1VSNdsLnFHfqH6P-HOlYtJG69PNHB2WAgxtVlso",
              "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5bXpnbWZuaHRucWxlZHd3b2p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczNzE5MzQsImV4cCI6MjA4Mjk0NzkzNH0.-qkr1VSNdsLnFHfqH6P-HOlYtJG69PNHB2WAgxtVlso",
            },
            body: JSON.stringify({ amount: totalAmountPaise }),
          }
        );
        const data = await res.json();
        if (!res.ok) throw new Error(data?.error || "Order creation failed");
        order = data;
      } catch {
        toast.error("Failed to create payment order. Please try again.");
        setIsProcessing(false); return;
      }

      if (!order?.id) { toast.error("Failed to create payment order. Please try again."); setIsProcessing(false); return; }

      const options = {
        key: RAZORPAY_KEY_ID, amount: totalAmountPaise, currency: "INR", order_id: order.id,
        name: "Yellodae Tours",
        description: description.trim() || `Payment of ₹${amountNum.toLocaleString("en-IN")}`,
        prefill: { name: name.trim(), email: email.trim(), contact: phone.trim() },
        theme: { color: "#f97316" },
        handler: async function (response: any) {
          console.log("Payment success:", response);
          try {
            // Retrieve saved booking data
            const savedData = JSON.parse(localStorage.getItem("booking_data") || "{}");
            const finalData = {
              payment_id: response.razorpay_payment_id,
              order_id: response.razorpay_order_id,
              user_id: savedData.user_id || "",
              contact_name: savedData.customer_name || name.trim(),
              contact_email: savedData.customer_email || email.trim(),
              contact_phone: savedData.customer_phone || "",
              tour_name: savedData.tour_name || description.trim() || "Quick Payment",
              tour_slug: savedData.tour_slug || "quick-pay",
              tour_date: savedData.tour_date || new Date().toISOString().split("T")[0],
              total_price: savedData.total_price || Number(amount),
              currency: savedData.currency || "INR",
              adults: savedData.adults || 1,
              children: savedData.children || 0,
              special_requests: savedData.special_requests || null,
            };
            console.log("FINAL DATA to save:", finalData);

            // Save booking
            let bookingId: string | null = null;
            const saveRes = await fetch(
              "https://cymzgmfnhtnqledwwojt.supabase.co/functions/v1/save-booking",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(finalData),
              }
            );

            if (saveRes.ok) {
              const saveResult = await saveRes.json();
              console.log("Booking saved, send-confirmation triggered server-side:", saveResult);
            } else {
              console.error("Save booking failed:", await saveRes.text());
            }

            localStorage.removeItem("booking_data");
          } catch (err) {
            console.error("Failed to save booking or send confirmation:", err);
          }
          toast.success(`Payment successful! ID: ${response.razorpay_payment_id}`);
          setAmount(""); setDescription(""); setName(""); setEmail(""); setPhone("");
        },
        modal: { ondismiss: () => setIsProcessing(false) },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Failed to initiate payment. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <CreditCard className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Quick Pay</h1>
            <p className="text-muted-foreground">Make a secure payment directly via Razorpay</p>
          </div>
          <Card>
            <CardContent className="p-6 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} maxLength={100} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={255} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" type="tel" placeholder="+91 XXXXXXXXXX" value={phone} onChange={(e) => setPhone(e.target.value)} maxLength={15} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Amount (₹) *</Label>
                <Input id="amount" type="number" placeholder="Enter amount in INR" value={amount} onChange={(e) => setAmount(e.target.value)} min="1" max="500000" className="text-lg font-semibold" />
                {amount && parseFloat(amount) >= 1 && (
                  <p className="text-sm text-muted-foreground">You will pay: ₹{parseFloat(amount).toLocaleString("en-IN", { minimumFractionDigits: 2 })}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description (optional)</Label>
                <Input id="description" placeholder="e.g. Tour booking, Transfer payment" value={description} onChange={(e) => setDescription(e.target.value)} maxLength={200} />
              </div>
              <Button size="lg" className="w-full py-6 text-lg rounded-full" onClick={handlePayment} disabled={isProcessing || !amount || !name || !email || !phone}>
                {isProcessing ? "Processing..." : `Pay${amount && parseFloat(amount) >= 1 ? ` ₹${parseFloat(amount).toLocaleString("en-IN")}` : ""}`}
              </Button>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-2">
                <ShieldCheck className="h-4 w-4" />
                <span>Secured by Razorpay • 256-bit SSL Encryption</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QuickPay;
