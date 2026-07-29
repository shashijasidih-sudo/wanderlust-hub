import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TripRecommendations from "@/components/recommendations/TripRecommendations";
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
import { Hotel, MapPin, Globe, Plane, Wifi, Ticket, Clock } from "lucide-react";
import { detectProductType, pickupTypeFor, emptyItemForm, type BookingItemForm } from "@/lib/bookingItems";

const countries = [
  "India", "United States", "United Kingdom", "Canada", "Australia",
  "Germany", "France", "Singapore", "Thailand", "UAE", "Malaysia",
  "Japan", "China", "South Korea", "Indonesia", "Philippines",
  "Vietnam", "New Zealand", "South Africa", "Brazil"
];

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
  const [itemDetails, setItemDetails] = useState<Record<string, BookingItemForm>>({});

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
            ...emptyItemForm(),
            pickupLocation: item.pickupLocation || "",
            dropLocation: item.dropLocation || "",
            pickupTime: item.pickupTime || item.selectedTime || "",
            country: "",
          };
        }
      });
      return updated;
    });
  }, [cartItems]);

  const updateItemDetail = (itemId: string, field: keyof BookingItemForm, value: string) => {
    setItemDetails(prev => ({
      ...prev,
      [itemId]: { ...(prev[itemId] || emptyItemForm()), [field]: value },
    }));
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">No items in cart</h1>
          <p className="text-muted-foreground mb-6">Please add a transfer to your cart first.</p>
          <Button onClick={() => navigate("/thailand/bangkok/budget-airport-transfers/")}>Browse Transfers</Button>
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

    // Save per-item details keyed by cart item id (full form state)
    sessionStorage.setItem("itemDetails", JSON.stringify(itemDetails));

    navigate("/payment-information/");
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
                  {cartItems.map((item, index) => {
                    const pt = detectProductType(item);
                    const pType = pickupTypeFor(pt);
                    const form = itemDetails[item.id] || emptyItemForm();
                    const typeIcon = pt === "esim" ? <Wifi className="h-3 w-3" /> : pt === "ticket" ? <Ticket className="h-3 w-3" /> : pt === "airport_transfer" ? <Plane className="h-3 w-3" /> : <MapPin className="h-3 w-3" />;
                    const typeLabel = ({ airport_transfer: "Airport Transfer", transfer: "Hotel Transfer", esim: "eSIM", ticket: "Attraction Ticket", activity: "Activity" } as any)[pt] || pt;
                    return (
                      <Card key={item.id} className="border border-border">
                        <CardContent className="p-4 md:p-5">
                          <p className="font-semibold text-sm mb-4 flex items-center gap-2 flex-wrap">
                            <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">{index + 1}</span>
                            <span className="flex-1 min-w-0 truncate">{item.title}</span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground flex items-center gap-1">{typeIcon}{typeLabel}</span>
                          </p>

                          {pt === "esim" && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div>
                                <Label className="text-primary font-semibold text-xs">Delivery Email</Label>
                                <Input value={form.activationEmail} onChange={(e) => updateItemDetail(item.id, "activationEmail", e.target.value)} placeholder="Where should we send the QR?" className="mt-1.5" />
                              </div>
                              <div>
                                <Label className="text-primary font-semibold text-xs">Activation Date</Label>
                                <Input type="date" value={form.activationDate} onChange={(e) => updateItemDetail(item.id, "activationDate", e.target.value)} className="mt-1.5" />
                              </div>
                              <div>
                                <Label className="text-primary font-semibold text-xs flex items-center gap-1.5"><Globe className="h-3.5 w-3.5" /> Country of Use</Label>
                                <Select value={form.country} onValueChange={(v) => updateItemDetail(item.id, "country", v)}>
                                  <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select country" /></SelectTrigger>
                                  <SelectContent>{countries.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                                </Select>
                              </div>
                            </div>
                          )}

                          {pt === "ticket" && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div>
                                <Label className="text-primary font-semibold text-xs">Lead Visitor Name</Label>
                                <Input value={form.visitorName} onChange={(e) => updateItemDetail(item.id, "visitorName", e.target.value)} placeholder="As per ID" className="mt-1.5" />
                              </div>
                              <div>
                                <Label className="text-primary font-semibold text-xs flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Preferred Entry Time</Label>
                                <Input value={form.entryTime} onChange={(e) => updateItemDetail(item.id, "entryTime", e.target.value)} placeholder="e.g. 10:00 AM" className="mt-1.5" />
                              </div>
                              <div>
                                <Label className="text-primary font-semibold text-xs flex items-center gap-1.5"><Hotel className="h-3.5 w-3.5" /> Hotel (optional)</Label>
                                <Input value={form.hotelName} onChange={(e) => updateItemDetail(item.id, "hotelName", e.target.value)} placeholder="For transfer add-on" className="mt-1.5" />
                              </div>
                            </div>
                          )}

                          {pType === "airport" && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div>
                                <Label className="text-primary font-semibold text-xs flex items-center gap-1.5"><Plane className="h-3.5 w-3.5" /> Airline</Label>
                                <Input value={form.airline} onChange={(e) => updateItemDetail(item.id, "airline", e.target.value)} placeholder="e.g. Air India" className="mt-1.5" />
                              </div>
                              <div>
                                <Label className="text-primary font-semibold text-xs">Flight Number</Label>
                                <Input value={form.flightNumber} onChange={(e) => updateItemDetail(item.id, "flightNumber", e.target.value)} placeholder="e.g. AI 342" className="mt-1.5" />
                              </div>
                              <div>
                                <Label className="text-primary font-semibold text-xs">Terminal</Label>
                                <Input value={form.terminal} onChange={(e) => updateItemDetail(item.id, "terminal", e.target.value)} placeholder="e.g. T3" className="mt-1.5" />
                              </div>
                              <div>
                                <Label className="text-primary font-semibold text-xs flex items-center gap-1.5"><Hotel className="h-3.5 w-3.5" /> Hotel / Drop Location</Label>
                                <Input value={form.dropLocation} onChange={(e) => updateItemDetail(item.id, "dropLocation", e.target.value)} placeholder="Hotel or address" className="mt-1.5" />
                              </div>
                              <div>
                                <Label className="text-primary font-semibold text-xs flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Pickup Time</Label>
                                <Input value={form.pickupTime} onChange={(e) => updateItemDetail(item.id, "pickupTime", e.target.value)} placeholder="e.g. 09:30" className="mt-1.5" />
                              </div>
                              <div>
                                <Label className="text-primary font-semibold text-xs flex items-center gap-1.5"><Globe className="h-3.5 w-3.5" /> Country</Label>
                                <Select value={form.country} onValueChange={(v) => updateItemDetail(item.id, "country", v)}>
                                  <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select country" /></SelectTrigger>
                                  <SelectContent>{countries.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                                </Select>
                              </div>
                            </div>
                          )}

                          {pType === "hotel" && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div>
                                <Label className="text-primary font-semibold text-xs flex items-center gap-1.5"><Hotel className="h-3.5 w-3.5" /> Hotel Name</Label>
                                <Input value={form.hotelName} onChange={(e) => updateItemDetail(item.id, "hotelName", e.target.value)} placeholder="Enter hotel name" className="mt-1.5" />
                              </div>
                              <div>
                                <Label className="text-primary font-semibold text-xs flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Pickup Location</Label>
                                <Input value={form.pickupLocation} onChange={(e) => updateItemDetail(item.id, "pickupLocation", e.target.value)} placeholder="Enter pickup address" className="mt-1.5" />
                              </div>
                              <div>
                                <Label className="text-primary font-semibold text-xs flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Pickup Time</Label>
                                <Input value={form.pickupTime} onChange={(e) => updateItemDetail(item.id, "pickupTime", e.target.value)} placeholder="e.g. 09:30" className="mt-1.5" />
                              </div>
                              <div>
                                <Label className="text-primary font-semibold text-xs flex items-center gap-1.5"><Globe className="h-3.5 w-3.5" /> Country</Label>
                                <Select value={form.country} onValueChange={(v) => updateItemDetail(item.id, "country", v)}>
                                  <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select country" /></SelectTrigger>
                                  <SelectContent>{countries.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                                </Select>
                              </div>
                            </div>
                          )}

                          <div className="mt-3">
                            <Label className="text-primary font-semibold text-xs">Special Requests (optional)</Label>
                            <Input value={form.specialRequests} onChange={(e) => updateItemDetail(item.id, "specialRequests", e.target.value)} placeholder="Allergies, wheelchair, child seat, etc." className="mt-1.5" />
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                <div className="flex items-start gap-2 mt-6">
                  <Checkbox id="terms" checked={agreeTerms} onCheckedChange={(checked) => setAgreeTerms(checked === true)} />
                  <label htmlFor="terms" className="text-sm leading-relaxed">
                    I acknowledge and agree to abide by all cancellation and refund policies, as outlined in their <Link to="/privacy-policy/" className="text-primary hover:underline">Privacy Policy</Link>.<span className="text-destructive">*</span>
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
      <TripRecommendations />
      <Footer />
    </div>
  );
};

export default CustomerInformation;
