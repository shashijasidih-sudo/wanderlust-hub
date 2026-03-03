import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, CalendarDays, Search, Users, XCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Booking {
  id: string; tour_name: string; tour_slug: string; tour_date: string;
  adults: number; children: number; total_price: number; currency: string;
  status: "pending" | "confirmed" | "cancelled" | "completed";
  contact_name: string; created_at: string;
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
  const { user } = useAuth();

  useEffect(() => {
    if (!user) { navigate("/auth"); return; }
    // Placeholder — GET /api/bookings
    setBookings([]);
    setIsLoading(false);
  }, [user, navigate]);

  const filteredBookings = statusFilter === "all" ? bookings : bookings.filter(b => b.status === statusFilter);
  const getStatusCount = (status: StatusFilter) => status === "all" ? bookings.length : bookings.filter(b => b.status === status).length;

  const handleCancelBooking = async (bookingId: string, tourName: string) => {
    setCancellingId(bookingId);
    await new Promise(r => setTimeout(r, 500));
    setBookings(prev => prev.map(b => b.id === bookingId ? { ...b, status: "cancelled" as const } : b));
    toast({ title: "Booking Cancelled", description: `Your booking for ${tourName} has been cancelled.` });
    setCancellingId(null);
  };

  if (isLoading) {
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MyBookings;
