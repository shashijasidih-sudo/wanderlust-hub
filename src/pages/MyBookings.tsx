import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import { supabase } from "@/lib/supabaseClient";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, CalendarDays, Search, Users, XCircle, Eye, MapPin, Phone, Mail, FileText, Globe, Info, CheckCircle, XOctagon, ShieldCheck, Baby, AlertTriangle, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { toursData } from "@/data/tourData";

interface BookingItemDetail {
  itemId?: string; title: string; slug?: string;
  hotelName: string; pickupLocation: string; country: string;
}

interface Booking {
  id: string; tour_name: string; tour_slug: string; tour_date: string;
  adults: number; children: number; total_price: number; currency: string;
  status: string; contact_name: string; created_at: string;
  contact_email: string; contact_phone: string; payment_id: string;
  special_requests?: string;
  item_details?: BookingItemDetail[] | null;
}

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
  confirmed: "bg-green-100 text-green-800 border-green-200",
  cancelled: "bg-red-100 text-red-800 border-red-200",
  completed: "bg-blue-100 text-blue-800 border-blue-200",
};

type StatusFilter = "all" | "pending" | "confirmed" | "cancelled" | "completed";

const MyBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cancellingId, setCancellingId] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [viewBooking, setViewBooking] = useState<Booking | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, isLoading: authLoading } = useAuth();

  useEffect(() => {
    if (authLoading) return;
    if (!user) { navigate("/auth"); return; }

    const fetchBookings = async () => {
      try {
        const { data, error } = await supabase
          .from("bookings")
          .select("*")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false });
        if (error) throw error;
        setBookings(data || []);
      } catch (err) {
        console.error("Failed to fetch bookings:", err);
        toast({ title: "Error", description: "Failed to load bookings.", variant: "destructive" });
      } finally {
        setIsLoading(false);
      }
    };
    fetchBookings();
  }, [user, authLoading, navigate]);

  const filteredBookings = statusFilter === "all" ? bookings : bookings.filter(b => b.status === statusFilter);
  const getStatusCount = (status: StatusFilter) => status === "all" ? bookings.length : bookings.filter(b => b.status === status).length;

  const handleCancelBooking = async (bookingId: string, tourName: string) => {
    setCancellingId(bookingId);
    try {
      const { error } = await supabase
        .from("bookings")
        .update({ status: "cancelled" })
        .eq("id", bookingId)
        .eq("user_id", user!.id);
      if (error) throw error;
      setBookings(prev => prev.map(b => b.id === bookingId ? { ...b, status: "cancelled" } : b));
      toast({ title: "Booking Cancelled", description: `Your booking for ${tourName} has been cancelled.` });
    } catch (err) {
      console.error("Cancel failed:", err);
      toast({ title: "Error", description: "Failed to cancel booking.", variant: "destructive" });
    } finally {
      setCancellingId(null);
    }
  };

  if (authLoading || isLoading) {
    return <div className="min-h-screen flex items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 md:px-6 py-8 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CalendarDays className="h-8 w-8 text-primary" /> My Bookings
          </h1>
          <Tabs value={statusFilter} onValueChange={(v) => setStatusFilter(v as StatusFilter)} className="mb-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all" className="text-xs sm:text-sm">All ({getStatusCount("all")})</TabsTrigger>
              <TabsTrigger value="pending" className="text-xs sm:text-sm">Pending ({getStatusCount("pending")})</TabsTrigger>
              <TabsTrigger value="confirmed" className="text-xs sm:text-sm">Confirmed ({getStatusCount("confirmed")})</TabsTrigger>
              <TabsTrigger value="cancelled" className="text-xs sm:text-sm">Cancelled ({getStatusCount("cancelled")})</TabsTrigger>
              <TabsTrigger value="completed" className="text-xs sm:text-sm">Completed ({getStatusCount("completed")})</TabsTrigger>
            </TabsList>
          </Tabs>

          {filteredBookings.length > 0 ? (
            <div className="space-y-4">
              {filteredBookings.map((booking) => (
                <Card key={booking.id}>
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-lg">{booking.tour_name}</h3>
                          <Badge variant="outline" className={statusColors[booking.status || "confirmed"]}>
                            {(booking.status || "confirmed").charAt(0).toUpperCase() + (booking.status || "confirmed").slice(1)}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                          <span className="flex items-center gap-1">
                            <CalendarDays className="h-3.5 w-3.5" />
                            {booking.tour_date ? format(new Date(booking.tour_date), "MMM dd, yyyy") : "N/A"}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-3.5 w-3.5" />
                            {booking.adults || 0} Adult{(booking.adults || 0) !== 1 ? "s" : ""}
                            {booking.children > 0 && `, ${booking.children} Child${booking.children !== 1 ? "ren" : ""}`}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Booked on {format(new Date(booking.created_at), "MMM dd, yyyy")}
                          {booking.contact_name && ` · ${booking.contact_name}`}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="font-bold text-lg">₹{Number(booking.total_price || 0).toLocaleString()}</span>
                        <Button size="sm" onClick={() => setViewBooking(booking)}>
                          <Eye className="h-4 w-4 mr-1" /> View Booking
                        </Button>
                        {booking.status !== "cancelled" && booking.status !== "completed" && (
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="outline" size="sm" disabled={cancellingId === booking.id}>
                                {cancellingId === booking.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <XCircle className="h-4 w-4 mr-1" />}
                                Cancel
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Cancel Booking?</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Are you sure you want to cancel your booking for <strong>{booking.tour_name}</strong>?
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Keep Booking</AlertDialogCancel>
                                <AlertDialogAction onClick={() => handleCancelBooking(booking.id, booking.tour_name)}>
                                  Yes, Cancel
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Your Bookings</CardTitle>
                <CardDescription>View and manage all your tour bookings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="rounded-full bg-muted p-6 mb-4"><CalendarDays className="h-12 w-12 text-muted-foreground" /></div>
                  <h3 className="text-lg font-semibold mb-2">No Bookings Yet</h3>
                  <p className="text-muted-foreground mb-6 max-w-md">You haven't made any bookings yet. Start exploring our amazing tours and activities!</p>
                  <Link to="/thailand"><Button><Search className="mr-2 h-4 w-4" />Explore Tours</Button></Link>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />

      {/* Booking Details Dialog */}
      <Dialog open={!!viewBooking} onOpenChange={(open) => !open && setViewBooking(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {viewBooking && (() => {
            const tourInfo = toursData[viewBooking.tour_slug] || null;
            return (
              <>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2 text-xl">
                    <MapPin className="h-5 w-5 text-primary" />
                    Booking Details
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-5 mt-2">
                  {/* Section: Booking Information */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary flex items-center gap-1.5 mb-3">
                      <FileText className="h-4 w-4" /> Booking Information
                    </h4>
                    <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                      <div className="flex justify-between items-start">
                        <span className="text-xs text-muted-foreground">Booking ID</span>
                        <span className="text-xs font-mono text-right break-all max-w-[60%]">{viewBooking.id}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Booking Status</span>
                        <Badge variant="outline" className={statusColors[viewBooking.status || "confirmed"]}>
                          {(viewBooking.status || "confirmed").charAt(0).toUpperCase() + (viewBooking.status || "confirmed").slice(1)}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Booking Date</span>
                        <span className="text-sm">{format(new Date(viewBooking.created_at), "MMM dd, yyyy, hh:mm a")}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-start">
                        <span className="text-xs text-muted-foreground">Tour / Activity</span>
                        <span className="text-sm font-semibold text-right max-w-[60%]">{viewBooking.tour_name}</span>
                      </div>
                      {tourInfo && (
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">Location</span>
                          <span className="text-sm">{tourInfo.location}</span>
                        </div>
                      )}
                      {tourInfo && (
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">Duration</span>
                          <span className="text-sm">{tourInfo.duration}</span>
                        </div>
                      )}
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Travel Date</span>
                        <span className="text-sm">{viewBooking.tour_date ? format(new Date(viewBooking.tour_date), "EEEE, MMM dd, yyyy") : "N/A"}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Guests</span>
                        <span className="text-sm">
                          {viewBooking.adults || 0} Adult{(viewBooking.adults || 0) !== 1 ? "s" : ""}
                          {viewBooking.children > 0 && `, ${viewBooking.children} Child${viewBooking.children !== 1 ? "ren" : ""}`}
                        </span>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Total Amount Paid</span>
                        <span className="text-lg font-bold text-primary">₹{Number(viewBooking.total_price || 0).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Payment Status</span>
                        <Badge variant="outline" className={viewBooking.status === "cancelled" ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}>
                          {viewBooking.status === "cancelled" ? "Refund Initiated" : "Paid"}
                        </Badge>
                      </div>
                      {viewBooking.payment_id && (
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">Payment Method</span>
                          <span className="text-sm">Razorpay</span>
                        </div>
                      )}
                      {viewBooking.payment_id && (
                        <div className="flex justify-between items-start">
                          <span className="text-xs text-muted-foreground">Payment ID</span>
                          <span className="text-xs font-mono text-right break-all max-w-[60%]">{viewBooking.payment_id}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Section: Customer Information */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary flex items-center gap-1.5 mb-3">
                      <Users className="h-4 w-4" /> Customer Information
                    </h4>
                    <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                      {viewBooking.contact_name && (
                        <div className="flex items-center gap-2">
                          <Users className="h-3.5 w-3.5 text-muted-foreground" />
                          <span className="text-sm">{viewBooking.contact_name}</span>
                        </div>
                      )}
                      {viewBooking.contact_email && (
                        <div className="flex items-center gap-2">
                          <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                          <span className="text-sm">{viewBooking.contact_email}</span>
                        </div>
                      )}
                      {viewBooking.contact_phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                          <span className="text-sm">{viewBooking.contact_phone}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Globe className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Country not specified</span>
                      </div>
                    </div>
                  </div>

                  {/* Section: Additional Details */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary flex items-center gap-1.5 mb-3">
                      <Info className="h-4 w-4" /> Additional Details
                    </h4>
                    <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                      <div className="flex justify-between items-start">
                        <span className="text-xs text-muted-foreground">Special Requests</span>
                        <span className="text-sm text-right max-w-[60%]">{viewBooking.special_requests || "None"}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Booking Source</span>
                        <span className="text-sm">Website</span>
                      </div>
                    </div>
                  </div>

                  {/* Section: Item-Level Pickup Details */}
                  {viewBooking.item_details && viewBooking.item_details.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-primary flex items-center gap-1.5 mb-3">
                        <MapPin className="h-4 w-4" /> Pickup & Hotel Details
                      </h4>
                      <div className="space-y-3">
                        {viewBooking.item_details.map((detail, idx) => (
                          <div key={idx} className="bg-muted/50 rounded-lg p-4 space-y-2">
                            <p className="text-sm font-semibold flex items-center gap-2">
                              <span className="flex items-center justify-center h-5 w-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold">{idx + 1}</span>
                              {detail.title}
                            </p>
                            <Separator />
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                              <div>
                                <span className="text-[10px] text-muted-foreground uppercase tracking-wide">Hotel Name</span>
                                <p className="text-sm">{detail.hotelName || "Not specified"}</p>
                              </div>
                              <div>
                                <span className="text-[10px] text-muted-foreground uppercase tracking-wide">Pickup Location</span>
                                <p className="text-sm">{detail.pickupLocation || "Not specified"}</p>
                              </div>
                              <div>
                                <span className="text-[10px] text-muted-foreground uppercase tracking-wide">Country</span>
                                <p className="text-sm">{detail.country || "Not specified"}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Section: Activity / Transfer Details (from tourData) */}
                  {tourInfo && (
                    <div>
                      <h4 className="text-sm font-semibold text-primary flex items-center gap-1.5 mb-3">
                        <BookOpen className="h-4 w-4" /> Activity / Transfer Details
                      </h4>

                      {/* Description */}
                      <div className="bg-muted/50 rounded-lg p-4 mb-3">
                        <p className="text-xs font-semibold text-foreground mb-1">Description</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{tourInfo.description.overview}</p>
                      </div>

                      {/* Highlights */}
                      {tourInfo.highlights.length > 0 && (
                        <div className="bg-muted/50 rounded-lg p-4 mb-3">
                          <p className="text-xs font-semibold text-foreground mb-2">Highlights</p>
                          <ul className="space-y-1">
                            {tourInfo.highlights.map((h, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <CheckCircle className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Inclusions & Exclusions */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                        {tourInfo.inclusions.length > 0 && (
                          <div className="bg-green-50 rounded-lg p-4">
                            <p className="text-xs font-semibold text-green-800 mb-2 flex items-center gap-1"><CheckCircle className="h-3.5 w-3.5" /> Inclusions</p>
                            <ul className="space-y-1">
                              {tourInfo.inclusions.map((item, i) => (
                                <li key={i} className="text-xs text-green-700">• {item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {tourInfo.exclusions.length > 0 && (
                          <div className="bg-red-50 rounded-lg p-4">
                            <p className="text-xs font-semibold text-red-800 mb-2 flex items-center gap-1"><XOctagon className="h-3.5 w-3.5" /> Exclusions</p>
                            <ul className="space-y-1">
                              {tourInfo.exclusions.map((item, i) => (
                                <li key={i} className="text-xs text-red-700">• {item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Policies Accordion */}
                      <Accordion type="multiple" className="w-full">
                        {tourInfo.bookingPolicy.length > 0 && (
                          <AccordionItem value="booking-policy">
                            <AccordionTrigger className="text-sm py-3">
                              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Booking & Information Policy</span>
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-1.5 pl-1">
                                {tourInfo.bookingPolicy.map((p, i) => (
                                  <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                                    <span className="text-primary mt-0.5">•</span> {p}
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        )}

                        {tourInfo.cancellationPolicy.length > 0 && (
                          <AccordionItem value="cancellation-policy">
                            <AccordionTrigger className="text-sm py-3">
                              <span className="flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-amber-500" /> Cancellation & Refund Policy</span>
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-1.5 pl-1">
                                {tourInfo.cancellationPolicy.map((p, i) => (
                                  <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                                    <span className="text-amber-500 mt-0.5">•</span> {p}
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        )}

                        {tourInfo.childPolicy.length > 0 && (
                          <AccordionItem value="child-policy">
                            <AccordionTrigger className="text-sm py-3">
                              <span className="flex items-center gap-2"><Baby className="h-4 w-4 text-blue-500" /> Child Policy</span>
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-1.5 pl-1">
                                {tourInfo.childPolicy.map((p, i) => (
                                  <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                                    <span className="text-blue-500 mt-0.5">•</span> {p}
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        )}
                      </Accordion>
                    </div>
                  )}

                  {!tourInfo && (
                    <div className="bg-muted/50 rounded-lg p-4 text-center">
                      <p className="text-sm text-muted-foreground">Detailed activity/transfer information is not available for this booking.</p>
                    </div>
                  )}
                </div>
              </>
            );
          })()}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MyBookings;
