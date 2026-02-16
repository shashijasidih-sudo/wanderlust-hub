import { useState, useEffect, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Loader2, CalendarDays, Search, Users, XCircle, ArrowUpDown, Download } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { format, isWithinInterval, parseISO } from "date-fns";
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
type SortField = "created_at" | "tour_date" | "total_price" | "tour_name";
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

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDir(d => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDir("desc");
    }
  };

  const filteredBookings = useMemo(() => {
    let result = bookings;

    if (statusFilter !== "all") {
      result = result.filter(b => b.status === statusFilter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(b =>
        b.tour_name.toLowerCase().includes(q) || b.contact_name.toLowerCase().includes(q)
      );
    }

    if (dateFrom || dateTo) {
      result = result.filter(b => {
        const d = parseISO(b.tour_date);
        if (dateFrom && dateTo) return isWithinInterval(d, { start: dateFrom, end: dateTo });
        if (dateFrom) return d >= dateFrom;
        if (dateTo) return d <= dateTo;
        return true;
      });
    }

    result.sort((a, b) => {
      let cmp = 0;
      if (sortField === "total_price") cmp = a.total_price - b.total_price;
      else if (sortField === "tour_name") cmp = a.tour_name.localeCompare(b.tour_name);
      else if (sortField === "tour_date") cmp = new Date(a.tour_date).getTime() - new Date(b.tour_date).getTime();
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
    try {
      const { error } = await supabase.from("bookings").update({ status: "cancelled" }).eq("id", bookingId);
      if (error) throw error;
      setBookings(prev => prev.map(b => (b.id === bookingId ? { ...b, status: "cancelled" as const } : b)));
      toast({ title: "Booking Cancelled", description: `Your booking for ${tourName} has been cancelled.` });
    } catch (error: any) {
      toast({ title: "Error", description: error.message || "Failed to cancel booking.", variant: "destructive" });
    } finally {
      setCancellingId(null);
    }
  };

  const handleDownloadReceipt = (booking: Booking) => {
    const receipt = [
      "YELLODAE TOURS - BOOKING RECEIPT",
      "================================",
      `Booking ID: ${booking.id}`,
      `Tour: ${booking.tour_name}`,
      `Date: ${format(new Date(booking.tour_date), "MMM dd, yyyy")}`,
      `Adults: ${booking.adults}`,
      `Children: ${booking.children}`,
      `Total: ${formatPrice(booking.total_price)}`,
      `Status: ${booking.status.toUpperCase()}`,
      `Booked on: ${format(new Date(booking.created_at), "MMM dd, yyyy")}`,
      `Contact: ${booking.contact_name}`,
      "================================",
      "Thank you for choosing Yellodae Tours!",
    ].join("\n");

    const blob = new Blob([receipt], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `receipt-${booking.id.slice(0, 8)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    const checkAuthAndFetch = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { navigate("/auth"); return; }

      const { data, error } = await supabase
        .from("bookings").select("*").eq("user_id", session.user.id)
        .order("created_at", { ascending: false });

      if (error) console.error("Error fetching bookings:", error);
      else setBookings(data || []);
      setIsLoading(false);
    };

    checkAuthAndFetch();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      if (!session) navigate("/auth");
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
            <CalendarDays className="h-8 w-8 text-primary" />
            Booking History
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

          {/* Search & Date Filter Row */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by tour or contact name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
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
                  <Button variant="ghost" size="sm" onClick={() => { setDateFrom(undefined); setDateTo(undefined); }}>
                    Clear Dates
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {filteredBookings.length === 0 ? (
            <Card>
              <CardHeader>
                <CardTitle>{statusFilter === "all" ? "Booking History" : `${statusFilter.charAt(0).toUpperCase() + statusFilter.slice(1)} Bookings`}</CardTitle>
                <CardDescription>{bookings.length === 0 ? "View and manage all your tour bookings" : `No matching bookings found`}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="rounded-full bg-muted p-6 mb-4">
                    <CalendarDays className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{bookings.length === 0 ? "No Bookings Yet" : "No Results"}</h3>
                  <p className="text-muted-foreground mb-6 max-w-md">
                    {bookings.length === 0
                      ? "You haven't made any bookings yet. Start exploring our amazing tours!"
                      : "Try adjusting your search or filters."}
                  </p>
                  {bookings.length === 0 && (
                    <Link to="/thailand"><Button><Search className="mr-2 h-4 w-4" />Explore Tours</Button></Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ) : (
            <>
              {/* Desktop Table */}
              <div className="hidden md:block rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead><SortButton field="tour_name" label="Tour" /></TableHead>
                      <TableHead><SortButton field="tour_date" label="Tour Date" /></TableHead>
                      <TableHead>Guests</TableHead>
                      <TableHead><SortButton field="total_price" label="Total" /></TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead><SortButton field="created_at" label="Booked On" /></TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredBookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell>
                          <Link to={`/${booking.tour_slug}`} className="font-medium hover:text-primary transition-colors">
                            {booking.tour_name}
                          </Link>
                        </TableCell>
                        <TableCell>{format(new Date(booking.tour_date), "MMM dd, yyyy")}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3 text-muted-foreground" />
                            {booking.adults}A{booking.children > 0 ? `, ${booking.children}C` : ""}
                          </div>
                        </TableCell>
                        <TableCell className="font-semibold text-primary">{formatPrice(booking.total_price)}</TableCell>
                        <TableCell>
                          <Badge className={statusColors[booking.status]}>
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{format(new Date(booking.created_at), "MMM dd, yyyy")}</TableCell>
                        <TableCell className="text-right space-x-2">
                          <Button variant="ghost" size="sm" onClick={() => handleDownloadReceipt(booking)}>
                            <Download className="h-4 w-4" />
                          </Button>
                          {booking.status === "pending" && (
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="destructive" size="sm" disabled={cancellingId === booking.id}>
                                  {cancellingId === booking.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <XCircle className="h-4 w-4" />}
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Cancel Booking?</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Are you sure you want to cancel "{booking.tour_name}"? This cannot be undone.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Keep</AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={() => handleCancelBooking(booking.id, booking.tour_name)}
                                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                  >
                                    Yes, Cancel
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-4">
                {filteredBookings.map((booking) => (
                  <Card key={booking.id} className="overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <Link to={`/${booking.tour_slug}`} className="text-sm font-semibold hover:text-primary transition-colors flex-1 mr-2">
                          {booking.tour_name}
                        </Link>
                        <Badge className={statusColors[booking.status] + " text-xs"}>
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1"><CalendarDays className="h-3 w-3" />{format(new Date(booking.tour_date), "MMM dd, yyyy")}</div>
                        <div className="flex items-center gap-1"><Users className="h-3 w-3" />{booking.adults}A{booking.children > 0 ? `, ${booking.children}C` : ""}</div>
                      </div>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t">
                        <span className="font-semibold text-primary">{formatPrice(booking.total_price)}</span>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" onClick={() => handleDownloadReceipt(booking)}><Download className="h-4 w-4" /></Button>
                          {booking.status === "pending" && (
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="destructive" size="sm" disabled={cancellingId === booking.id}>
                                  <XCircle className="h-4 w-4" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Cancel Booking?</AlertDialogTitle>
                                  <AlertDialogDescription>Cancel "{booking.tour_name}"?</AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Keep</AlertDialogCancel>
                                  <AlertDialogAction onClick={() => handleCancelBooking(booking.id, booking.tour_name)} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">Yes, Cancel</AlertDialogAction>
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
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingHistory;
