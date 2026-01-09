import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingSteps from "@/components/BookingSteps";
import BookingSummary from "@/components/BookingSummary";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/contexts/CartContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { CreditCard, Building2, Wallet, QrCode } from "lucide-react";

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
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const savedInfo = sessionStorage.getItem("customerInfo");
    if (savedInfo) {
      setCustomerInfo(JSON.parse(savedInfo));
    } else {
      navigate("/customer-information");
    }
  }, [navigate]);

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

  const handlePayment = async () => {
    if (paymentMethod === "credit-card") {
      if (!cardNumber || !cardName || !expiryDate || !cvv) {
        toast.error("Please fill in all card details");
        return;
      }
    }

    setIsProcessing(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast.error("Please login to complete booking");
        navigate("/auth");
        return;
      }

      // Create bookings for each cart item
      for (const item of cartItems) {
        const { error } = await supabase.from("bookings").insert({
          user_id: user.id,
          tour_slug: item.slug,
          tour_name: `${item.title} - ${item.vehicleName}`,
          tour_date: item.pickupDate,
          adults: item.numberOfPersons,
          children: 0,
          total_price: item.price,
          contact_name: customerInfo?.customerName || "",
          contact_email: customerInfo?.email || "",
          contact_phone: customerInfo?.phone || "",
          special_requests: `Pickup: ${item.pickupLocation}, Drop: ${item.dropLocation || "N/A"}, Room: ${item.roomNo || "N/A"}, Time: ${item.pickupTime}`,
          currency: "INR"
        });

        if (error) throw error;
      }

      // Clear cart and session storage
      clearCart();
      sessionStorage.removeItem("customerInfo");
      
      navigate("/booking-confirmed");
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Failed to process booking. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4);
    }
    return v;
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
                        <p className="text-sm text-muted-foreground">Visa, Mastercard, American Express</p>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                    <RadioGroupItem value="net-banking" id="net-banking" />
                    <Label htmlFor="net-banking" className="flex items-center gap-3 cursor-pointer flex-1">
                      <Building2 className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold">Net Banking</p>
                        <p className="text-sm text-muted-foreground">All major banks supported</p>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                    <RadioGroupItem value="upi" id="upi" />
                    <Label htmlFor="upi" className="flex items-center gap-3 cursor-pointer flex-1">
                      <QrCode className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold">UPI</p>
                        <p className="text-sm text-muted-foreground">Google Pay, PhonePe, Paytm</p>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                    <RadioGroupItem value="wallet" id="wallet" />
                    <Label htmlFor="wallet" className="flex items-center gap-3 cursor-pointer flex-1">
                      <Wallet className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold">Digital Wallet</p>
                        <p className="text-sm text-muted-foreground">Paytm Wallet, Amazon Pay</p>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>

                {paymentMethod === "credit-card" && (
                  <div className="mt-6 p-4 border rounded-lg space-y-4">
                    <h3 className="font-semibold">Card Details</h3>
                    
                    <div>
                      <Label>Card Number</Label>
                      <Input
                        value={cardNumber}
                        onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label>Name on Card</Label>
                      <Input
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        placeholder="John Doe"
                        className="mt-1"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Expiry Date</Label>
                        <Input
                          value={expiryDate}
                          onChange={(e) => setExpiryDate(formatExpiry(e.target.value))}
                          placeholder="MM/YY"
                          maxLength={5}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label>CVV</Label>
                        <Input
                          type="password"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
                          placeholder="***"
                          maxLength={4}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>
                )}

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
