import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import { supabase } from "@/lib/supabaseClient";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, CalendarDays, Search, UserIcon, Settings, XCircle } from "lucide-react";
import Header from "@/components/Header";
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
  const { user } = useAuth();
  const { formatPrice } = useCurrency();

  useEffect(() => {
    if (!user) { navigate("/auth"); return; }
    fetchBookings();
  }, [user, navigate]);

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
      const { error } = await supabase
        .from("bookings")
        .update({ status: "cancelled" })
        .eq("id", bookingId)
        .eq("user_id", user!.id);
      if (error) throw error;
      setBookings(prev => prev.map(b => b.id === bookingId ? { ...b, status: "cancelled" } : b));
      toast({ title: "Booking Cancelled", description: `Your booking for ${tourName} has been cancelled.` });
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    } finally {
      setCancellingId(null);
    }
  };

  const filteredBookings = statusFilter === "all" ? bookings : bookings.filter(b => b.status === statusFilter);
  const getStatusCount = (status: StatusFilter) => status === "all" ? bookings.length : bookings.filter(b => b.status === status).length;

  if (isLoading) {
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
                                  Are you sure you want to cancel your booking for <strong>{booking.tour_name}</strong>? This action cannot be undone.
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
