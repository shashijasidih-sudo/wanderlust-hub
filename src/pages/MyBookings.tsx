import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, CalendarDays, Search, Users, XCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  created_at: string;
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
  const navigate = useNavigate();
  const { toast } = useToast();

  const filteredBookings = statusFilter === "all" 
    ? bookings 
    : bookings.filter(b => b.status === statusFilter);

  const getStatusCount = (status: StatusFilter) => {
    if (status === "all") return bookings.length;
    return bookings.filter(b => b.status === status).length;
  };

  const handleCancelBooking = async (bookingId: string, tourName: string) => {
    setCancellingId(bookingId);
    try {
      const { error } = await supabase
        .from("bookings")
        .update({ status: "cancelled" })
        .eq("id", bookingId);

      if (error) throw error;

      setBookings(prev =>
        prev.map(b => (b.id === bookingId ? { ...b, status: "cancelled" as const } : b))
      );

      toast({
        title: "Booking Cancelled",
        description: `Your booking for ${tourName} has been cancelled.`,
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to cancel booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setCancellingId(null);
    }
  };

  useEffect(() => {
    const checkAuthAndFetchBookings = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth");
        return;
      }

      const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .eq("user_id", session.user.id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching bookings:", error);
      } else {
        setBookings(data || []);
      }
      setIsLoading(false);
    };

    checkAuthAndFetchBookings();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 md:px-6 py-8 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CalendarDays className="h-8 w-8 text-primary" />
            My Bookings
          </h1>

          <Tabs value={statusFilter} onValueChange={(v) => setStatusFilter(v as StatusFilter)} className="mb-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all" className="text-xs sm:text-sm">
                All ({getStatusCount("all")})
              </TabsTrigger>
              <TabsTrigger value="pending" className="text-xs sm:text-sm">
                Pending ({getStatusCount("pending")})
              </TabsTrigger>
              <TabsTrigger value="confirmed" className="text-xs sm:text-sm">
                Confirmed ({getStatusCount("confirmed")})
              </TabsTrigger>
              <TabsTrigger value="cancelled" className="text-xs sm:text-sm">
                Cancelled ({getStatusCount("cancelled")})
              </TabsTrigger>
              <TabsTrigger value="completed" className="text-xs sm:text-sm">
                Completed ({getStatusCount("completed")})
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {filteredBookings.length === 0 ? (
            <Card>
              <CardHeader>
                <CardTitle>
                  {statusFilter === "all" ? "Your Upcoming & Past Bookings" : `${statusFilter.charAt(0).toUpperCase() + statusFilter.slice(1)} Bookings`}
                </CardTitle>
                <CardDescription>
                  {statusFilter === "all" 
                    ? "View and manage all your tour bookings" 
                    : `No ${statusFilter} bookings found`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="rounded-full bg-muted p-6 mb-4">
                    <CalendarDays className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {bookings.length === 0 ? "No Bookings Yet" : `No ${statusFilter} Bookings`}
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-md">
                    {bookings.length === 0 
                      ? "You haven't made any bookings yet. Start exploring our amazing tours and activities!"
                      : `You don't have any ${statusFilter} bookings at the moment.`}
                  </p>
                  {bookings.length === 0 && (
                    <Link to="/thailand">
                      <Button>
                        <Search className="mr-2 h-4 w-4" />
                        Explore Tours
                      </Button>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredBookings.map((booking) => (
                <Card key={booking.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="flex-1 p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <Link 
                              to={`/${booking.tour_slug}`}
                              className="text-lg font-semibold hover:text-primary transition-colors"
                            >
                              {booking.tour_name}
                            </Link>
                            <p className="text-sm text-muted-foreground">
                              Booked on {format(new Date(booking.created_at), "MMM dd, yyyy")}
                            </p>
                          </div>
                          <Badge className={statusColors[booking.status]}>
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <CalendarDays className="h-4 w-4 text-muted-foreground" />
                            <span>{format(new Date(booking.tour_date), "MMM dd, yyyy")}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>
                              {booking.adults} Adult{booking.adults > 1 ? "s" : ""}
                              {booking.children > 0 && `, ${booking.children} Child${booking.children > 1 ? "ren" : ""}`}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 font-semibold text-primary">
                            ₹{booking.total_price.toLocaleString()}
                          </div>
                        </div>

                        {booking.status === "pending" && (
                          <div className="mt-4 pt-4 border-t">
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button
                                  variant="destructive"
                                  size="sm"
                                  disabled={cancellingId === booking.id}
                                >
                                  {cancellingId === booking.id ? (
                                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                  ) : (
                                    <XCircle className="h-4 w-4 mr-2" />
                                  )}
                                  Cancel Booking
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Cancel Booking?</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Are you sure you want to cancel your booking for "{booking.tour_name}"? This action cannot be undone.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Keep Booking</AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={() => handleCancelBooking(booking.id, booking.tour_name)}
                                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                  >
                                    Yes, Cancel
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MyBookings;