import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import { supabase } from "@/lib/supabaseClient";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, CalendarDays, Search, Users, XCircle, Eye, MapPin, Phone, Mail, CreditCard, Clock } from "lucide-react";
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

interface Booking {
  id: string; tour_name: string; tour_slug: string; tour_date: string;
  adults: number; children: number; total_price: number; currency: string;
  status: string; contact_name: string; created_at: string;
  contact_email: string; contact_phone: string; payment_id: string;
  special_requests?: string;
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
                        <Button variant="outline" size="sm" onClick={() => setViewBooking(booking)}>
                          <Eye className="h-4 w-4 mr-1" /> View
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
        <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
          {viewBooking && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-xl">
                  <MapPin className="h-5 w-5 text-primary" />
                  {viewBooking.tour_name}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-4 mt-2">
                {/* Status */}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground">Status:</span>
                  <Badge variant="outline" className={statusColors[viewBooking.status || "confirmed"]}>
                    {(viewBooking.status || "confirmed").charAt(0).toUpperCase() + (viewBooking.status || "confirmed").slice(1)}
                  </Badge>
                </div>

                <Separator />

                {/* Booking Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground font-medium flex items-center gap-1"><CalendarDays className="h-3 w-3" /> Tour Date</p>
                    <p className="text-sm font-semibold">
                      {viewBooking.tour_date ? format(new Date(viewBooking.tour_date), "EEEE, MMM dd, yyyy") : "N/A"}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground font-medium flex items-center gap-1"><Clock className="h-3 w-3" /> Booked On</p>
                    <p className="text-sm font-semibold">{format(new Date(viewBooking.created_at), "MMM dd, yyyy, hh:mm a")}</p>
                  </div>
                </div>

                <Separator />

                {/* Guests */}
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground font-medium flex items-center gap-1"><Users className="h-3 w-3" /> Guests</p>
                  <p className="text-sm font-semibold">
                    {viewBooking.adults || 0} Adult{(viewBooking.adults || 0) !== 1 ? "s" : ""}
                    {viewBooking.children > 0 && `, ${viewBooking.children} Child${viewBooking.children !== 1 ? "ren" : ""}`}
                  </p>
                </div>

                <Separator />

                {/* Contact Details */}
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground font-medium">Contact Details</p>
                  {viewBooking.contact_name && (
                    <p className="text-sm flex items-center gap-2">
                      <Users className="h-3.5 w-3.5 text-muted-foreground" /> {viewBooking.contact_name}
                    </p>
                  )}
                  {viewBooking.contact_email && (
                    <p className="text-sm flex items-center gap-2">
                      <Mail className="h-3.5 w-3.5 text-muted-foreground" /> {viewBooking.contact_email}
                    </p>
                  )}
                  {viewBooking.contact_phone && (
                    <p className="text-sm flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5 text-muted-foreground" /> {viewBooking.contact_phone}
                    </p>
                  )}
                </div>

                <Separator />

                {/* Payment */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground font-medium flex items-center gap-1"><CreditCard className="h-3 w-3" /> Total Paid</p>
                    <p className="text-lg font-bold text-primary">₹{Number(viewBooking.total_price || 0).toLocaleString()}</p>
                  </div>
                  {viewBooking.payment_id && (
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground font-medium">Payment ID</p>
                      <p className="text-sm font-mono break-all">{viewBooking.payment_id}</p>
                    </div>
                  )}
                </div>

                {/* Special Requests */}
                {viewBooking.special_requests && (
                  <>
                    <Separator />
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground font-medium">Special Requests</p>
                      <p className="text-sm bg-muted p-3 rounded-md">{viewBooking.special_requests}</p>
                    </div>
                  </>
                )}

                {/* Booking ID */}
                <Separator />
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground font-medium">Booking Reference</p>
                  <p className="text-xs font-mono text-muted-foreground">{viewBooking.id}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MyBookings;
