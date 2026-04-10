import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingSteps from "@/components/BookingSteps";
import BookingSummary from "@/components/BookingSummary";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/lib/auth";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { Hotel, MapPin, Globe } from "lucide-react";

const countries = [
  "India", "United States", "United Kingdom", "Canada", "Australia",
  "Germany", "France", "Singapore", "Thailand", "UAE", "Malaysia",
  "Japan", "China", "South Korea", "Indonesia", "Philippines",
  "Vietnam", "New Zealand", "South Africa", "Brazil"
];

interface ItemDetails {
  hotelName: string;
  pickupLocation: string;
  country: string;
}

const CustomerInformation = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const { user } = useAuth();
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [country, setCountry] = useState("India");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Per-item details keyed by cart item id
  const [itemDetails, setItemDetails] = useState<Record<string, ItemDetails>>({});

  useEffect(() => {
    if (user) {
      setEmail(user.email || "");
      setCustomerName(user.full_name || "");
    }
  }, [user]);

  // Initialize item details when cart items change
  useEffect(() => {
    setItemDetails(prev => {
      const updated = { ...prev };
      cartItems.forEach(item => {
        if (!updated[item.id]) {
          updated[item.id] = {
            hotelName: "",
            pickupLocation: item.pickupLocation || "",
            country: "",
          };
        }
      });
      return updated;
    });
  }, [cartItems]);

  const updateItemDetail = (itemId: string, field: keyof ItemDetails, value: string) => {
    setItemDetails(prev => ({
      ...prev,
      [itemId]: { ...prev[itemId], [field]: value },
    }));
  };

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

  const handleSubmit = () => {
    if (!customerName || !email || !phone || !country || !address || !zipCode) {
      toast.error("Please fill in all required fields"); return;
    }
    if (!agreeTerms) { toast.error("Please accept the terms and conditions"); return; }

    sessionStorage.setItem("customerInfo", JSON.stringify({
      customerName, email, phone: `${countryCode} ${phone}`, country, address, zipCode
    }));

    // Save per-item details mapped by item title for booking persistence
    const itemDetailsForBooking = cartItems.map(item => ({
      itemId: item.id,
      title: item.title,
      slug: item.slug,
      hotelName: itemDetails[item.id]?.hotelName || "",
      pickupLocation: itemDetails[item.id]?.pickupLocation || "",
      country: itemDetails[item.id]?.country || "",
    }));
    sessionStorage.setItem("itemDetails", JSON.stringify(itemDetailsForBooking));

    navigate("/payment-information");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-5xl mx-auto">
          <CardContent className="p-6 md:p-8">
            <BookingSteps currentStep={1} />
            <div className="text-center mb-6">
              <p className="text-muted-foreground">Your booking will be submitted once you go to payment.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-xl font-bold mb-6">Enter Billing Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-primary font-semibold">Customer Name<span className="text-destructive">*</span></Label>
                    <Input value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="Please enter your customer name" className="mt-2" />
                  </div>
                  <div>
                    <Label className="text-primary font-semibold">Customer Contact No.<span className="text-destructive">*</span></Label>
                    <div className="flex gap-2 mt-2">
                      <Select value={countryCode} onValueChange={setCountryCode}>
                        <SelectTrigger className="w-24"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="+91">🇮🇳 +91</SelectItem>
                          <SelectItem value="+1">🇺🇸 +1</SelectItem>
                          <SelectItem value="+44">🇬🇧 +44</SelectItem>
                          <SelectItem value="+65">🇸🇬 +65</SelectItem>
                          <SelectItem value="+66">🇹🇭 +66</SelectItem>
                          <SelectItem value="+971">🇦🇪 +971</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Phone Number" className="flex-1" />
                    </div>
                  </div>
                  <div>
                    <Label className="text-primary font-semibold">Email<span className="text-destructive">*</span></Label>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="mt-2" />
                  </div>
                  <div>
                    <Label className="text-primary font-semibold">Country<span className="text-destructive">*</span></Label>
                    <Select value={country} onValueChange={setCountry}>
                      <SelectTrigger className="mt-2"><SelectValue placeholder="Select Country" /></SelectTrigger>
                      <SelectContent>{countries.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-primary font-semibold">Address<span className="text-destructive">*</span></Label>
                    <Input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter your address" className="mt-2" />
                  </div>
                  <div>
                    <Label className="text-primary font-semibold">Zip Code<span className="text-destructive">*</span></Label>
                    <Input value={zipCode} onChange={(e) => setZipCode(e.target.value)} placeholder="Enter zip code" className="mt-2" />
                  </div>
                </div>

                {/* Per-item details section */}
                <Separator className="my-8" />
                <h2 className="text-xl font-bold mb-2">Activity / Transfer Details</h2>
                <p className="text-sm text-muted-foreground mb-6">Please provide pickup details for each item in your booking.</p>

                <div className="space-y-6">
                  {cartItems.map((item, index) => (
                    <Card key={item.id} className="border border-border">
                      <CardContent className="p-4 md:p-5">
                        <p className="font-semibold text-sm mb-4 flex items-center gap-2">
                          <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">{index + 1}</span>
                          {item.title}
                          <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground capitalize">{item.itemType}</span>
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <Label className="text-primary font-semibold text-xs flex items-center gap-1.5">
                              <Hotel className="h-3.5 w-3.5" /> Hotel Name
                            </Label>
                            <Input
                              value={itemDetails[item.id]?.hotelName || ""}
                              onChange={(e) => updateItemDetail(item.id, "hotelName", e.target.value)}
                              placeholder="Enter hotel name"
                              className="mt-1.5"
                            />
                          </div>
                          <div>
                            <Label className="text-primary font-semibold text-xs flex items-center gap-1.5">
                              <MapPin className="h-3.5 w-3.5" /> Pickup Location
                            </Label>
                            <Input
                              value={itemDetails[item.id]?.pickupLocation || ""}
                              onChange={(e) => updateItemDetail(item.id, "pickupLocation", e.target.value)}
                              placeholder="Enter pickup address"
                              className="mt-1.5"
                            />
                          </div>
                          <div>
                            <Label className="text-primary font-semibold text-xs flex items-center gap-1.5">
                              <Globe className="h-3.5 w-3.5" /> Country
                            </Label>
                            <Select
                              value={itemDetails[item.id]?.country || ""}
                              onValueChange={(val) => updateItemDetail(item.id, "country", val)}
                            >
                              <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select country" /></SelectTrigger>
                              <SelectContent>{countries.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                            </Select>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="flex items-start gap-2 mt-6">
                  <Checkbox id="terms" checked={agreeTerms} onCheckedChange={(checked) => setAgreeTerms(checked === true)} />
                  <label htmlFor="terms" className="text-sm leading-relaxed">
                    I acknowledge and agree to abide by all cancellation and refund policies, as outlined in their <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.<span className="text-destructive">*</span>
                  </label>
                </div>
                <div className="flex justify-center mt-8">
                  <Button size="lg" className="px-12 py-6 text-lg rounded-full" onClick={handleSubmit} disabled={isLoading}>
                    {isLoading ? "Processing..." : "GO TO PAYMENT"}
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

export default CustomerInformation;
