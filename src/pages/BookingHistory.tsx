import { useState, useEffect, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Loader2, CalendarDays, Search, Users, XCircle, ArrowUpDown, Download } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { format, isWithinInterval, parseISO } from "date-fns";
import { supabase } from "@/lib/supabaseClient";
import { useToast } from "@/hooks/use-toast";
import { useCurrency } from "@/contexts/CurrencyContext";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

interface Booking {
  id: string;
  payment_id: string;
  order_id: string;
  amount: number;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  description: string;
  status: string;
  created_at: string;
}

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
  confirmed: "bg-green-100 text-green-800 border-green-200",
  cancelled: "bg-red-100 text-red-800 border-red-200",
  completed: "bg-blue-100 text-blue-800 border-blue-200",
};

type StatusFilter = "all" | "pending" | "confirmed" | "cancelled" | "completed";
type SortField = "created_at" | "amount" | "customer_name";
type SortDir = "asc" | "desc";

const BookingHistory = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cancellingId, setCancellingId] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<SortField>("created_at");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [dateFrom, setDateFrom] = useState<Date | undefined>();
  const [dateTo, setDateTo] = useState<Date | undefined>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { formatPrice } = useCurrency();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) { navigate("/auth"); return; }
    const fetchBookings = async () => {
      try {
        const { data, error } = await supabase
          .from("bookings")
          .select("*")
          .order("created_at", { ascending: false });
        if (error) throw error;
        setBookings(data || []);
      } catch (err) {
        console.error("Failed to fetch bookings:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBookings();
  }, [user, navigate]);

  const toggleSort = (field: SortField) => {
    if (sortField === field) setSortDir(d => d === "asc" ? "desc" : "asc");
    else { setSortField(field); setSortDir("desc"); }
  };

  const filteredBookings = useMemo(() => {
    let result = bookings;
    if (statusFilter !== "all") result = result.filter(b => b.status === statusFilter);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(b => b.customer_name?.toLowerCase().includes(q) || b.description?.toLowerCase().includes(q) || b.payment_id?.toLowerCase().includes(q));
    }
    if (dateFrom || dateTo) {
      result = result.filter(b => {
        const d = parseISO(b.created_at);
        if (dateFrom && dateTo) return isWithinInterval(d, { start: dateFrom, end: dateTo });
        if (dateFrom) return d >= dateFrom;
        if (dateTo) return d <= dateTo;
        return true;
      });
    }
    result.sort((a, b) => {
      let cmp = 0;
      if (sortField === "amount") cmp = a.amount - b.amount;
      else if (sortField === "customer_name") cmp = (a.customer_name || "").localeCompare(b.customer_name || "");
      else cmp = new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      return sortDir === "asc" ? cmp : -cmp;
    });
    return result;
  }, [bookings, statusFilter, searchQuery, dateFrom, dateTo, sortField, sortDir]);

  const getStatusCount = (status: StatusFilter) => {
    if (status === "all") return bookings.length;
    return bookings.filter(b => b.status === status).length;
  };

  const handleCancelBooking = async (bookingId: string, tourName: string) => {
    setCancellingId(bookingId);
    // Placeholder — PATCH /api/bookings/:id
    await new Promise(r => setTimeout(r, 500));
    setBookings(prev => prev.map(b => b.id === bookingId ? { ...b, status: "cancelled" as const } : b));
    toast({ title: "Booking Cancelled", description: `Your booking for ${tourName} has been cancelled.` });
    setCancellingId(null);
  };

  const handleDownloadReceipt = (booking: Booking) => {
    const receipt = [
      "YELLODAE TOURS - BOOKING RECEIPT", "================================",
      `Booking ID: ${booking.id}`, `Payment ID: ${booking.payment_id}`,
      `Description: ${booking.description || "Quick Payment"}`,
      `Amount: ₹${(booking.amount / 100).toLocaleString()}`,
      `Status: ${(booking.status || "confirmed").toUpperCase()}`,
      `Booked on: ${format(new Date(booking.created_at), "MMM dd, yyyy")}`,
      `Customer: ${booking.customer_name}`, `Email: ${booking.customer_email}`,
      `Phone: ${booking.customer_phone}`, "================================",
      "Thank you for choosing Yellodae Tours!",
    ].join("\n");
    const blob = new Blob([receipt], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url;
    a.download = `receipt-${booking.id.slice(0, 8)}.txt`; a.click();
    URL.revokeObjectURL(url);
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>;
  }

  const SortButton = ({ field, label }: { field: SortField; label: string }) => (
    <button onClick={() => toggleSort(field)} className="flex items-center gap-1 hover:text-foreground transition-colors">
      {label}
      <ArrowUpDown className={`h-3 w-3 ${sortField === field ? "text-primary" : "text-muted-foreground"}`} />
    </button>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 md:px-6 py-8 mt-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CalendarDays className="h-8 w-8 text-primary" /> Booking History
          </h1>

          <Tabs value={statusFilter} onValueChange={(v) => setStatusFilter(v as StatusFilter)} className="mb-4">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all" className="text-xs sm:text-sm">All ({getStatusCount("all")})</TabsTrigger>
              <TabsTrigger value="pending" className="text-xs sm:text-sm">Pending ({getStatusCount("pending")})</TabsTrigger>
              <TabsTrigger value="confirmed" className="text-xs sm:text-sm">Confirmed ({getStatusCount("confirmed")})</TabsTrigger>
              <TabsTrigger value="cancelled" className="text-xs sm:text-sm">Cancelled ({getStatusCount("cancelled")})</TabsTrigger>
              <TabsTrigger value="completed" className="text-xs sm:text-sm">Completed ({getStatusCount("completed")})</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search by name, description, or payment ID..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-9" />
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="whitespace-nowrap">
                  <CalendarDays className="h-4 w-4 mr-2" />
                  {dateFrom ? format(dateFrom, "MMM dd") : "From"} — {dateTo ? format(dateTo, "MMM dd") : "To"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <div className="p-3 space-y-3">
                  <p className="text-sm font-medium">Tour Date Range</p>
                  <Calendar mode="single" selected={dateFrom} onSelect={setDateFrom} />
                  <Calendar mode="single" selected={dateTo} onSelect={setDateTo} />
                  <Button variant="ghost" size="sm" onClick={() => { setDateFrom(undefined); setDateTo(undefined); }}>Clear Dates</Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {filteredBookings.length > 0 ? (
            <Card>
              <CardHeader>
                <CardTitle>Booking History</CardTitle>
                <CardDescription>{filteredBookings.length} booking(s) found</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead><SortButton field="created_at" label="Date" /></TableHead>
                        <TableHead><SortButton field="customer_name" label="Customer" /></TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead><SortButton field="amount" label="Amount" /></TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Payment ID</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredBookings.map((booking) => (
                        <TableRow key={booking.id}>
                          <TableCell className="whitespace-nowrap">{format(new Date(booking.created_at), "MMM dd, yyyy")}</TableCell>
                          <TableCell>
                            <div className="font-medium">{booking.customer_name}</div>
                            <div className="text-xs text-muted-foreground">{booking.customer_email}</div>
                          </TableCell>
                          <TableCell>{booking.description || "Quick Payment"}</TableCell>
                          <TableCell className="font-semibold">₹{(booking.amount / 100).toLocaleString()}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className={statusColors[booking.status || "confirmed"]}>
                              {(booking.status || "confirmed").charAt(0).toUpperCase() + (booking.status || "confirmed").slice(1)}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-xs font-mono text-muted-foreground">{booking.payment_id?.slice(0, 16)}...</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm" onClick={() => handleDownloadReceipt(booking)}>
                              <Download className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Booking History</CardTitle>
                <CardDescription>View and manage all your bookings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="rounded-full bg-muted p-6 mb-4"><CalendarDays className="h-12 w-12 text-muted-foreground" /></div>
                  <h3 className="text-lg font-semibold mb-2">No Bookings Yet</h3>
                  <p className="text-muted-foreground mb-6 max-w-md">You haven't made any bookings yet. Start exploring our amazing tours!</p>
                  <Link to="/thailand"><Button><Search className="mr-2 h-4 w-4" />Explore Tours</Button></Link>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingHistory;
