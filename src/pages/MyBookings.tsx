import { useState, useEffect, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import { supabase } from "@/lib/supabaseClient";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, CalendarDays, Search, XCircle, MapPin, Mail, Phone, ChevronDown, Receipt, IndianRupee } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TripRecommendations from "@/components/recommendations/TripRecommendations";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import BookingItemCard, { BookingItemView } from "@/components/booking/BookingItemCard";
import BookingTimeline from "@/components/booking/BookingTimeline";
import { detectProductType } from "@/lib/bookingItems";

interface Booking {
  id: string; tour_name: string; tour_slug: string; tour_date: string;
  adults: number; children: number; total_price: number; currency: string;
  status: string; contact_name: string; created_at: string;
  contact_email: string; contact_phone: string; payment_id?: string;
  special_requests?: string;
  item_details?: any;
  booking_items?: BookingItemView[];
}

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
  confirmed: "bg-emerald-100 text-emerald-800 border-emerald-200",
  cancelled: "bg-red-100 text-red-800 border-red-200",
  completed: "bg-blue-100 text-blue-800 border-blue-200",
  refunded: "bg-purple-100 text-purple-800 border-purple-200",
};

type StatusFilter = "all" | "pending" | "confirmed" | "cancelled" | "completed";

const MyBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cancellingId, setCancellingId] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, isLoading: authLoading } = useAuth();

  useEffect(() => {
    if (authLoading) return;
    if (!user) { navigate("/auth/"); return; }

    const load = async () => {
      try {
        const { data: bkg, error } = await supabase
          .from("bookings")
          .select("*")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false });
        if (error) throw error;

        const ids = (bkg || []).map((b: any) => b.id);
        let itemsByBooking: Record<string, BookingItemView[]> = {};
        if (ids.length) {
          const { data: items } = await supabase
            .from("booking_items")
            .select("*")
            .in("booking_id", ids);
          (items || []).forEach((it: any) => {
            (itemsByBooking[it.booking_id] ||= []).push(it as BookingItemView);
          });
        }

        const withItems = (bkg || []).map((b: any) => {
          let list = itemsByBooking[b.id] || [];
          // Legacy fallback: synthesize a single item from parent when none exist
          if (list.length === 0) {
            const pt = detectProductType({ itemType: "activity", slug: b.tour_slug, title: b.tour_name });
            list = [{
              id: `legacy-${b.id}`,
              product_type: pt,
              activity_name: b.tour_name,
              activity_slug: b.tour_slug,
              destination: null,
              travel_date: b.tour_date,
              quantity: 1,
              adults: b.adults,
              children: b.children,
              price: Number(b.total_price || 0),
              currency: b.currency,
              status: b.status,
              pickup_required: pt === "transfer" || pt === "airport_transfer",
            }];
          }
          return { ...b, booking_items: list } as Booking;
        });
        setBookings(withItems);
      } catch (err) {
        console.error(err);
        toast({ title: "Error", description: "Failed to load bookings.", variant: "destructive" });
      } finally { setIsLoading(false); }
    };
    load();
  }, [user, authLoading, navigate, toast]);

  const filtered = useMemo(
    () => statusFilter === "all" ? bookings : bookings.filter(b => b.status === statusFilter),
    [statusFilter, bookings]
  );
  const getStatusCount = (s: StatusFilter) =>
    s === "all" ? bookings.length : bookings.filter(b => b.status === s).length;

  const handleCancel = async (id: string, name: string) => {
    setCancellingId(id);
    try {
      const { error } = await supabase.from("bookings").update({ status: "cancelled" }).eq("id", id).eq("user_id", user!.id);
      if (error) throw error;
      setBookings(prev => prev.map(b => b.id === id ? { ...b, status: "cancelled" } : b));
      toast({ title: "Booking Cancelled", description: `${name} has been cancelled.` });
    } catch (err) {
      toast({ title: "Error", description: "Failed to cancel booking.", variant: "destructive" });
    } finally { setCancellingId(null); }
  };

  if (authLoading || isLoading) {
    return <div className="min-h-screen flex items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 md:px-6 py-8 mt-16">
        <div className="max-w-5xl mx-auto">
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

          {filtered.length > 0 ? (
            <div className="space-y-6">
              {filtered.map((booking) => (
                <Card key={booking.id} className="overflow-hidden">
                  {/* Hero */}
                  <div className="bg-gradient-to-br from-primary/10 via-accent/40 to-background p-4 sm:p-6 border-b">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge variant="outline" className={statusColors[booking.status || "confirmed"]}>
                            {(booking.status || "confirmed").charAt(0).toUpperCase() + (booking.status || "confirmed").slice(1)}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            Booked {format(new Date(booking.created_at), "MMM dd, yyyy")}
                          </span>
                          {booking.contact_name && (
                            <span className="text-xs text-muted-foreground">· {booking.contact_name}</span>
                          )}
                        </div>
                        <h2 className="text-lg sm:text-xl font-bold mt-1 line-clamp-2">
                          {booking.booking_items && booking.booking_items.length > 1
                            ? `${booking.booking_items.length} experiences booked`
                            : booking.tour_name}
                        </h2>
                        <p className="text-xs font-mono text-muted-foreground mt-1">Booking ID: {booking.id.slice(0, 8).toUpperCase()}</p>
                        <BookingTimeline
                          status={booking.status}
                          travelDate={booking.tour_date}
                          hasVoucher={booking.booking_items?.some(i => i.voucher_url || i.voucher_number)}
                        />
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Total paid</p>
                        <p className="text-2xl font-bold text-primary flex items-center justify-end">
                          <IndianRupee className="h-5 w-5" />{Number(booking.total_price || 0).toLocaleString()}
                        </p>
                        {booking.status !== "cancelled" && booking.status !== "completed" && (
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="outline" size="sm" className="mt-2" disabled={cancellingId === booking.id}>
                                {cancellingId === booking.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <XCircle className="h-4 w-4 mr-1" />}
                                Cancel booking
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Cancel Booking?</AlertDialogTitle>
                                <AlertDialogDescription>
                                  This cancels all items in this booking. Refunds are processed per our policy.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Keep Booking</AlertDialogCancel>
                                <AlertDialogAction onClick={() => handleCancel(booking.id, booking.tour_name)}>Yes, Cancel</AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Items list */}
                  <CardContent className="p-4 sm:p-6 space-y-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      {(booking.booking_items?.length || 0)} item{(booking.booking_items?.length || 0) !== 1 ? "s" : ""} in this booking
                    </p>
                    <div className="space-y-3">
                      {booking.booking_items?.map((it) => (
                        <BookingItemCard key={it.id} item={it} />
                      ))}
                    </div>

                    {/* Contact + special requests */}
                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="w-full justify-between text-xs">
                          <span className="flex items-center gap-1.5"><Receipt className="h-3.5 w-3.5" /> Contact & payment details</span>
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm p-3 bg-muted/40 rounded-md">
                        {booking.contact_email && <p className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5 text-muted-foreground" /> {booking.contact_email}</p>}
                        {booking.contact_phone && <p className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5 text-muted-foreground" /> {booking.contact_phone}</p>}
                        {booking.payment_id && <p className="text-xs font-mono">Payment: {booking.payment_id}</p>}
                        {booking.special_requests && <p className="sm:col-span-3 text-xs italic text-muted-foreground">Note: {booking.special_requests}</p>}
                      </CollapsibleContent>
                    </Collapsible>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardHeader><CardTitle>Your Bookings</CardTitle><CardDescription>View and manage your bookings</CardDescription></CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="rounded-full bg-muted p-6 mb-4"><CalendarDays className="h-12 w-12 text-muted-foreground" /></div>
                  <h3 className="text-lg font-semibold mb-2">No Bookings Yet</h3>
                  <p className="text-muted-foreground mb-6 max-w-md">Start exploring amazing tours and activities.</p>
                  <Link to="/thailand/"><Button><Search className="mr-2 h-4 w-4" />Explore Tours</Button></Link>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <TripRecommendations
        showCompleteYourTrip
        hints={bookings.flatMap((b) => [b.tour_slug, b.tour_name])}
        excludeSlugs={bookings.map((b) => b.tour_slug)}
      />
      <Footer />
    </div>
  );
};

export default MyBookings;
