import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import { supabase } from "@/lib/supabaseClient";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, CalendarDays, Search, User as UserIcon, Settings, XCircle, Eye } from "lucide-react";
import Header from "@/components/Header";
import ViewBookingModal from "@/components/ViewBookingModal";
import Footer from "@/components/Footer";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { useCurrency } from "@/contexts/CurrencyContext";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface Booking {
  id: string;
  tour_name: string;
  tour_slug: string;
  tour_date: string;
  adults: number;
  children: number;
  total_price: number;
  currency: string;
  status: "pending" | "confirmed" | "cancelled" | "completed";
  contact_name: string;
  contact_email: string;
  created_at: string;
}

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
  confirmed: "bg-green-100 text-green-800 border-green-200",
  cancelled: "bg-red-100 text-red-800 border-red-200",
  completed: "bg-blue-100 text-blue-800 border-blue-200",
};

type StatusFilter = "all" | "pending" | "confirmed" | "cancelled" | "completed";

const UserBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cancellingId, setCancellingId] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, isLoading: isAuthLoading } = useAuth();
  const { formatPrice } = useCurrency();

  useEffect(() => {
    if (isAuthLoading) return;
    if (!user) {
      navigate("/auth");
      return;
    }
    fetchBookings();
  }, [user, isAuthLoading, navigate]);

  const fetchBookings = async () => {
    if (!user) return;
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
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelBooking = async (bookingId: string, tourName: string) => {
    setCancellingId(bookingId);
    try {
      const booking = bookings.find(b => b.id === bookingId);
      const { error } = await supabase
        .from("bookings")
        .update({ status: "cancelled" })
        .eq("id", bookingId)
        .eq("user_id", user!.id);
      if (error) throw error;
      setBookings(prev => prev.map(b => b.id === bookingId ? { ...b, status: "cancelled" } : b));
      toast({ title: "Booking Cancelled", description: `Your booking for ${tourName} has been cancelled. Refund will be processed within 3–5 days.` });

      // Send cancellation email to customer and admin
      if (booking?.contact_email) {
        const cancellationHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
        <tr><td style="background:linear-gradient(135deg,#f59e0b,#d97706);padding:32px;text-align:center;">
          <h1 style="color:#ffffff;margin:0;font-size:28px;font-weight:bold;">Yellodae</h1>
          <p style="color:#fef3c7;margin:8px 0 0;font-size:14px;">Your Travel Partner</p>
        </td></tr>
        <tr><td style="padding:32px 32px 16px;text-align:center;">
          <div style="display:inline-block;background:#fee2e2;border:1px solid #fca5a5;border-radius:50%;width:64px;height:64px;line-height:64px;font-size:32px;margin-bottom:16px;">✕</div>
          <h2 style="color:#dc2626;margin:0 0 8px;font-size:22px;">Booking Cancelled</h2>
          <p style="color:#6b7280;margin:0;font-size:14px;">Hi ${booking.contact_name || "Valued Customer"}, your booking has been cancelled.</p>
        </td></tr>
        <tr><td style="padding:16px 32px;">
          <table width="100%" style="background:#f9fafb;border-radius:8px;border:1px solid #e5e7eb;">
            <tr><td style="padding:20px;">
              <h3 style="color:#1f2937;margin:0 0 16px;font-size:16px;border-bottom:2px solid #dc2626;padding-bottom:8px;">📋 Cancellation Details</h3>
              <table width="100%" cellpadding="4" cellspacing="0">
                <tr><td style="color:#6b7280;font-size:13px;padding:4px 0;">Booking ID</td><td style="color:#1f2937;font-size:13px;font-weight:bold;text-align:right;padding:4px 0;">${bookingId.slice(0, 8)}</td></tr>
                <tr><td style="color:#6b7280;font-size:13px;padding:4px 0;">Tour / Service</td><td style="color:#1f2937;font-size:13px;font-weight:bold;text-align:right;padding:4px 0;">${booking.tour_name}</td></tr>
                <tr><td style="color:#6b7280;font-size:13px;padding:4px 0;">Tour Date</td><td style="color:#1f2937;font-size:13px;text-align:right;padding:4px 0;">${booking.tour_date}</td></tr>
                <tr><td style="color:#6b7280;font-size:13px;padding:4px 0;">Guests</td><td style="color:#1f2937;font-size:13px;text-align:right;padding:4px 0;">${booking.adults} Adult${booking.adults > 1 ? 's' : ''}${booking.children > 0 ? `, ${booking.children} Child${booking.children > 1 ? 'ren' : ''}` : ''}</td></tr>
                <tr><td colspan="2" style="border-top:1px solid #e5e7eb;padding-top:8px;"></td></tr>
                <tr><td style="color:#1f2937;font-size:15px;font-weight:bold;padding:4px 0;">Amount Paid</td><td style="color:#dc2626;font-size:18px;font-weight:bold;text-align:right;padding:4px 0;">${booking.currency === "INR" ? "₹" : booking.currency === "USD" ? "$" : booking.currency === "AED" ? "AED " : booking.currency + " "}${Number(booking.total_price).toLocaleString()}</td></tr>
              </table>
            </td></tr>
          </table>
        </td></tr>
        <tr><td style="padding:16px 32px;">
          <table width="100%" style="background:#fef3c7;border-radius:8px;border:1px solid #fbbf24;">
            <tr><td style="padding:20px;">
              <h3 style="color:#92400e;margin:0 0 8px;font-size:15px;">💰 Refund Information</h3>
              <p style="color:#78350f;font-size:13px;margin:0;">Your refund will be processed by our team within <strong>3–5 business days</strong>. The amount will be credited back to your original payment method.</p>
            </td></tr>
          </table>
        </td></tr>
        <tr><td style="padding:16px 32px;">
          <p style="color:#6b7280;font-size:13px;margin:0;">If you have any questions, please reach out to us at <a href="mailto:support@yellodae.com" style="color:#f59e0b;">support@yellodae.com</a></p>
        </td></tr>
        <tr><td style="background:#1f2937;padding:24px 32px;text-align:center;">
          <p style="color:#9ca3af;font-size:12px;margin:0 0 8px;">Yellodae Tours & Travels</p>
          <p style="color:#6b7280;font-size:11px;margin:0;">This is an automated notification. Please do not reply to this email.</p>
          <p style="color:#6b7280;font-size:11px;margin:8px 0 0;">
            <a href="https://yellodae.com" style="color:#f59e0b;text-decoration:none;">yellodae.com</a> |
            <a href="mailto:support@yellodae.com" style="color:#f59e0b;text-decoration:none;">support@yellodae.com</a>
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

        // Send to customer
        fetch("https://cymzgmfnhtnqledwwojt.supabase.co/functions/v1/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to: booking.contact_email,
            subject: `Booking Cancelled - ${booking.tour_name} | Yellodae`,
            html: cancellationHtml,
          }),
        }).catch(err => console.error("Cancellation email to customer failed:", err));

        // Send to admin
        fetch("https://cymzgmfnhtnqledwwojt.supabase.co/functions/v1/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to: "support@yellodae.com",
            subject: `Booking Cancelled - ${booking.tour_name} | ${booking.contact_name}`,
            html: cancellationHtml,
            replyTo: booking.contact_email,
          }),
        }).catch(err => console.error("Cancellation email to admin failed:", err));
      }
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    } finally {
      setCancellingId(null);
    }
  };


  const filteredBookings = statusFilter === "all" ? bookings : bookings.filter(b => b.status === statusFilter);
  const getStatusCount = (status: StatusFilter) => status === "all" ? bookings.length : bookings.filter(b => b.status === status).length;

  if (isAuthLoading || isLoading) {
    return <div className="min-h-screen flex items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 md:px-6 py-8 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">My Account</h1>

          {/* Quick Navigation */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            <Link to="/user-profile">
              <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                  <UserIcon className="h-6 w-6 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">Profile</span>
                </CardContent>
              </Card>
            </Link>
            <Card className="bg-primary/5 border-primary/20 cursor-default">
              <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                <CalendarDays className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-primary">Bookings</span>
              </CardContent>
            </Card>
            <Link to="/settings">
              <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                  <Settings className="h-6 w-6 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">Settings</span>
                </CardContent>
              </Card>
            </Link>
          </div>

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
                <Card key={booking.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">
                      <div className="flex-1 p-5">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-lg">{booking.tour_name}</h3>
                            <p className="text-sm text-muted-foreground">
                              Booked on {format(new Date(booking.created_at), "MMM dd, yyyy")}
                            </p>
                          </div>
                          <Badge variant="outline" className={statusColors[booking.status]}>
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                          <div>
                            <p className="text-muted-foreground">Tour Date</p>
                            <p className="font-medium">{format(new Date(booking.tour_date), "MMM dd, yyyy")}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Guests</p>
                            <p className="font-medium">{booking.adults} Adults{booking.children > 0 ? `, ${booking.children} Children` : ""}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Amount</p>
                            <p className="font-semibold text-primary">{formatPrice(booking.total_price)}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Booking ID</p>
                            <p className="font-mono text-xs">{booking.id.slice(0, 8)}</p>
                          </div>
                        </div>
                      </div>
                      {(booking.status === "pending" || booking.status === "confirmed") && (
                        <div className="border-t sm:border-t-0 sm:border-l p-4 flex items-center justify-center">
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="destructive" size="sm" disabled={cancellingId === booking.id}>
                                {cancellingId === booking.id ? (
                                  <Loader2 className="h-4 w-4 animate-spin mr-1" />
                                ) : (
                                  <XCircle className="h-4 w-4 mr-1" />
                                )}
                                Cancel
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Cancel Booking?</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Are you sure you want to cancel your booking for <strong>{booking.tour_name}</strong>?
                                  <br /><br />
                                  Refund will be processed by admin within 3–5 days.
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
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-muted p-6 mb-4"><CalendarDays className="h-12 w-12 text-muted-foreground" /></div>
                <h3 className="text-lg font-semibold mb-2">
                  {statusFilter === "all" ? "No Bookings Yet" : `No ${statusFilter} bookings`}
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  {statusFilter === "all" ? "You haven't made any bookings yet. Start exploring our tours!" : `You don't have any ${statusFilter} bookings.`}
                </p>
                {statusFilter === "all" && (
                  <Link to="/thailand"><Button><Search className="mr-2 h-4 w-4" />Explore Tours</Button></Link>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserBookings;
