import SafeImage from "@/components/SafeImage";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { format } from "date-fns";
import { useAuth } from "@/lib/auth";
import { supabase } from "@/lib/supabaseClient";
import { useCurrency } from "@/contexts/CurrencyContext";
import { toursData, TourData } from "@/data/tourData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TravelerExperiences from "@/components/TravelerExperiences";
import BookingRecommendations from "@/components/BookingRecommendations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  CalendarDays, Users, MapPin, Clock, CreditCard, Mail, Phone, User,
  CheckCircle2, XCircle, ShieldCheck, Baby, Ban, ArrowLeft, Loader2,
  Image as ImageIcon, FileText, Route, Star, ArrowUpRight,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { canCancelItem, nextParentStatus, itemKindLabel, isTransferItem } from "@/lib/bookingItemCancellation";

const statusConfig: Record<string, { color: string; icon: React.ReactNode; label: string }> = {
  pending: { color: "bg-yellow-100 text-yellow-800 border-yellow-200", icon: <Clock className="h-4 w-4" />, label: "Pending" },
  confirmed: { color: "bg-green-100 text-green-800 border-green-200", icon: <CheckCircle2 className="h-4 w-4" />, label: "Confirmed" },
  cancelled: { color: "bg-red-100 text-red-800 border-red-200", icon: <XCircle className="h-4 w-4" />, label: "Cancelled" },
  completed: { color: "bg-blue-100 text-blue-800 border-blue-200", icon: <CheckCircle2 className="h-4 w-4" />, label: "Completed" },
};

const BookingDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, isLoading: isAuthLoading } = useAuth();
  const { formatPrice } = useCurrency();
  const { toast } = useToast();
  const [booking, setBooking] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cancellingId, setCancellingId] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthLoading) return;
    if (!user) { navigate("/auth/"); return; }
    fetchBooking();
  }, [user, isAuthLoading, id]);

  const fetchBooking = async () => {
    if (!user || !id) return;
    try {
      const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .eq("id", id)
        .eq("user_id", user.id)
        .single();
      if (error) throw error;

      // Fetch the activity/transfer details saved against this booking.
      // The parent booking is already restricted to the signed-in user above.
      const { data: itemRows, error: itemError } = await supabase
        .from("booking_items")
        .select("*")
        .eq("booking_id", id);

      if (itemError) {
        // Keep the main booking page available if item details cannot be loaded.
        console.error("Failed to fetch booking items:", itemError);
      }

      setBooking({ ...data, booking_items: itemRows || [] });
    } catch (err) {
      console.error("Failed to fetch booking:", err);
      toast({ title: "Error", description: "Booking not found", variant: "destructive" });
      navigate("/user-bookings/");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = async () => {
    if (!booking || !user) return;
    setCancellingId(booking.id);
    try {
      const { error } = await supabase
        .from("bookings")
        .update({ status: "cancelled" })
        .eq("id", booking.id)
        .eq("user_id", user.id);
      if (error) throw error;
      setBooking({ ...booking, status: "cancelled" });
      toast({ title: "Booking Cancelled", description: `Your booking for ${booking.tour_name} has been cancelled. Refund will be processed within 3–5 days.` });

      // Send cancellation emails
      if (booking.contact_email) {
        const cancellationHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body style="margin:0;padding:0;background-color:#f4f4f5;font-family:Arial,sans-serif;"><table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:32px 16px;"><tr><td align="center"><table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;"><tr><td style="background:linear-gradient(135deg,#f59e0b,#d97706);padding:32px;text-align:center;"><h1 style="color:#ffffff;margin:0;font-size:28px;">Yellodae</h1></td></tr><tr><td style="padding:32px;text-align:center;"><h2 style="color:#dc2626;">Booking Cancelled</h2><p>Booking ID: ${booking.id.slice(0, 8)}</p><p>Tour: ${booking.tour_name}</p><p>Refund will be processed within 3–5 business days.</p></td></tr></table></td></tr></table></body></html>`;
        fetch("https://cymzgmfnhtnqledwwojt.supabase.co/functions/v1/send-email", {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ to: booking.contact_email, subject: `Booking Cancelled - ${booking.tour_name} | Yellodae`, html: cancellationHtml }),
        }).catch(err => console.error("Email failed:", err));
        fetch("https://cymzgmfnhtnqledwwojt.supabase.co/functions/v1/send-email", {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ to: "support@yellodae.com", subject: `Booking Cancelled - ${booking.tour_name} | ${booking.contact_name}`, html: cancellationHtml, replyTo: booking.contact_email }),
        }).catch(err => console.error("Admin email failed:", err));
      }
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    } finally {
      setCancellingId(null);
    }
  };

  const escapeHtml = (v: unknown) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));

  // Cancels one booking item only. RLS limits updates to items of the signed-in user's own booking.
  const handleCancelItem = async (item: any) => {
    if (!booking || !user || !item?.id || !canCancelItem(item.status)) return;
    const kind = itemKindLabel(item);
    const name = item.activity_name || booking.tour_name;
    setCancellingId(item.id);
    try {
      const { data: updated, error } = await supabase
        .from("booking_items")
        .update({ status: "cancelled" })
        .eq("id", item.id)
        .eq("booking_id", booking.id)
        .select("id, status");
      if (error) throw error;
      if (!updated?.length) throw new Error("This item could not be cancelled. Please contact support.");

      const items = (booking.booking_items || []).map((i: any) => (i.id === item.id ? { ...i, status: "cancelled" } : i));
      const parentStatus = nextParentStatus(items, booking.status);
      let parentUpdateFailed = false;
      if (parentStatus !== booking.status) {
        const { error: parentError } = await supabase
          .from("bookings").update({ status: parentStatus }).eq("id", booking.id).eq("user_id", user.id);
        if (parentError) {
          console.error("Parent booking status update failed:", parentError.message);
          parentUpdateFailed = true;
        }
      }
      if (parentUpdateFailed) {
        // The item is cancelled, but the overall booking status could not be
        // updated. Tell the customer and reload the booking so the page shows
        // the actual database status instead of an optimistic guess.
        toast({
          title: "Status Update Issue",
          description: `${name} was cancelled, but the overall booking status could not be updated. The page has been refreshed with the latest status. Please contact support if it looks incorrect.`,
          variant: "destructive",
        });
        await fetchBooking();
      } else {
        setBooking({ ...booking, booking_items: items, status: parentStatus });
        toast({ title: `${kind} Cancelled`, description: `${name} has been cancelled. Our team will review any refund under the cancellation policy.` });
      }

      if (booking.contact_email) {
        const html = `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body style="margin:0;padding:0;background-color:#f4f4f5;font-family:Arial,sans-serif;"><table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:32px 16px;"><tr><td align="center"><table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;"><tr><td style="background:linear-gradient(135deg,#f59e0b,#d97706);padding:32px;text-align:center;"><h1 style="color:#ffffff;margin:0;font-size:28px;">Yellodae</h1></td></tr><tr><td style="padding:32px;text-align:center;"><h2 style="color:#dc2626;">${kind} Cancelled</h2><p>Booking ID: ${escapeHtml(booking.id.slice(0, 8))}</p><p>Cancelled ${kind.toLowerCase()}: <strong>${escapeHtml(name)}</strong></p>${item.travel_date ? `<p>Travel date: ${escapeHtml(item.travel_date)}</p>` : ""}<p>${parentStatus === "cancelled" ? "All items in this booking are now cancelled." : "Other items in this booking remain active."}</p><p>Our team will review any refund under the cancellation policy.</p></td></tr></table></td></tr></table></body></html>`;
        const subject = `${kind} Cancelled - ${name}`;
        fetch("https://cymzgmfnhtnqledwwojt.supabase.co/functions/v1/send-email", {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ to: booking.contact_email, subject: `${subject} | Yellodae`, html }),
        }).catch(() => console.error("Item cancellation email failed"));
        fetch("https://cymzgmfnhtnqledwwojt.supabase.co/functions/v1/send-email", {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ to: "support@yellodae.com", subject: `${subject} | ${booking.contact_name}`, html, replyTo: booking.contact_email }),
        }).catch(() => console.error("Item cancellation admin email failed"));
      }
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    } finally {
      setCancellingId(null);
    }
  };

  if (isAuthLoading || isLoading) {
    return <div className="min-h-screen flex items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>;
  }

  if (!booking) return null;

  // Resolve tour content by the saved slug first. If older bookings use a
  // different slug format, fall back to the activity/tour name saved with
  // the booking so gallery, overview, itinerary and policies can still load.
  const normalizeTourName = (value?: string | null) =>
    String(value || "").trim().toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

  const bookingTourNames = [
    ...(booking.booking_items || []).filter((item: any) => !isTransferItem(item || {})).map((item: any) => item?.activity_name || item?.tour_name),
    ...((booking.booking_items || []).length ? [] : [booking.tour_name]),
  ]
    .map(normalizeTourName)
    .filter(Boolean);

  const hasActivityItems = (booking.booking_items || []).length === 0 || (booking.booking_items || []).some((i: any) => !isTransferItem(i || {}));
  const tourData: TourData | undefined = !hasActivityItems ? undefined :
    (toursData[booking.tour_slug] && !isTransferItem({ activity_name: toursData[booking.tour_slug].title }) ? toursData[booking.tour_slug] : undefined) ||
    (Object.values(toursData) as TourData[]).find((tour) =>
      bookingTourNames.includes(normalizeTourName(tour.title))
    );
  const status = statusConfig[booking.status] || statusConfig.confirmed;
  const itemRows: any[] = booking.booking_items || [];
  const activityItems = itemRows.filter((i) => !isTransferItem(i));
  const transferItems = itemRows.filter((i) => isTransferItem(i));
  const activityName = activityItems.map((i) => i.activity_name).filter(Boolean).join(", ") || (itemRows.length ? "" : booking.tour_name);
  const showActivity = itemRows.length === 0 || activityItems.length > 0;
  const tf = (item: any, key: string, ...alts: string[]) => {
    const d = item?.item_details || {};
    for (const k of [key, ...alts]) { const v = item?.[k] ?? d[k]; if (v !== null && v !== undefined && String(v).trim() !== "") return String(v); }
    return "";
  };

  // Product page URL for a booked item. Cart and transfer pages save the
  // page path as the item slug (e.g. "thailand/bangkok/...-transfer"), so the
  // saved activity_slug/product_id maps directly to the product route.
  const itemProductUrl = (item: any): string | null => {
    const raw = String(item?.activity_slug || item?.product_id || "").trim();
    const slug = raw.replace(/^\/+|\/+$/g, "");
    return slug ? `/${slug}/` : null;
  };

  const itemNameLink = (item: any, name: string, className: string) => {
    const url = itemProductUrl(item);
    if (!url) return <span className={className}>{name}</span>;
    return (
      <Link to={url} className={`${className} text-primary hover:underline inline-flex items-start gap-1`}>
        <span>{name}</span>
        <ArrowUpRight className="h-4 w-4 shrink-0 mt-0.5" />
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 md:px-6 py-8 md:py-12 mt-16">
        <div className="max-w-6xl mx-auto">
          {/* Back button */}
          <Button variant="ghost" className="mb-6 -ml-2 text-base" onClick={() => navigate("/user-bookings/")}>
            <ArrowLeft className="h-5 w-5 mr-2" /> Back to My Bookings
          </Button>

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-10">
            <div className="space-y-3">
              <h1 className="text-2xl md:text-3xl font-bold leading-tight">Booking Details</h1>
              {showActivity && activityName && (
                <h2 className="text-lg md:text-xl font-semibold text-foreground">
                  {activityItems.length > 0
                    ? activityItems.map((item: any, i: number) => (
                        <span key={item.id || i}>
                          {i > 0 && ", "}
                          {itemNameLink(item, item.activity_name || booking.tour_name, "font-semibold")}
                        </span>
                      ))
                    : activityName}
                </h2>
              )}
              {showActivity && tourData && (
                <div className="flex flex-wrap gap-4 text-base text-muted-foreground">
                  <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" />{tourData.location}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{tourData.duration}</span>
                  {tourData.rating && (
                    <span className="flex items-center gap-1.5"><Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />{tourData.rating} ({tourData.reviews} reviews)</span>
                  )}
                </div>
              )}
            </div>
            <Badge variant="outline" className={`${status.color} text-base px-5 py-2 flex items-center gap-2 shrink-0`}>
              {status.icon} {status.label}
            </Badge>
          </div>

          {/* Photo Gallery */}
          {showActivity && tourData && tourData.galleryImages?.length > 0 && (
            <Card className="mb-8 overflow-hidden">
              <CardContent className="p-5 md:p-6">
                <h2 className="font-semibold text-xl md:text-2xl flex items-center gap-2 mb-4">
                  <ImageIcon className="h-6 w-6 text-primary" /> Photo Gallery
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {tourData.galleryImages.slice(0, 8).map((img, i) => (
                    <div
                      key={i}
                      className="aspect-video rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setSelectedImage(img.src)}
                    >
                      <SafeImage src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Image Lightbox */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
              <SafeImage src={selectedImage} alt="Gallery" className="max-w-full max-h-[90vh] rounded-lg object-contain" />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Tour Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Transfer Details */}
              {transferItems.map((item) => {
                const pax = [Number(item.adults) > 0 ? `${item.adults} Adult${item.adults > 1 ? "s" : ""}` : "", Number(item.children) > 0 ? `${item.children} Child${item.children > 1 ? "ren" : ""}` : ""].filter(Boolean).join(", ");
                const airline = [tf(item, "airline"), tf(item, "terminal") && `Terminal ${tf(item, "terminal")}`].filter(Boolean).join(" · ");
                const dateTime = [item.travel_date ? format(new Date(item.travel_date), "EEE, MMM dd, yyyy") : "", tf(item, "pickup_time")].filter(Boolean).join(" · ");
                const rows: [string, string][] = ([
                  ["Pickup Location", tf(item, "pickup_location", "pickup_address", "hotel_name")],
                  ["Drop-off Location", tf(item, "drop_location", "dropoff_location")],
                  ["Travel Date & Pickup Time", dateTime],
                  ["Passengers", pax],
                  ["Flight Number", tf(item, "flight_number")],
                  ["Airline & Terminal", airline],
                  ["Vehicle Type", tf(item, "vehicle_type", "vehicle_name", "vehicle")],
                ] as [string, string][]).filter(([, v]) => v);
                const notes = tf(item, "special_requests");
                return (
                  <Card key={item.id}>
                    <CardContent className="p-6 md:p-7 space-y-4">
                      <div>
                        <p className="text-xs uppercase tracking-wide text-muted-foreground flex items-center gap-1.5"><Route className="h-4 w-4 text-primary" /> Transfer Details</p>
                        <h2 className="font-semibold text-lg md:text-xl mt-1">{itemNameLink(item, item.activity_name || "Transfer", "font-semibold")}</h2>
                      </div>
                      <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-base">
                        {rows.map(([label, value]) => (
                          <div key={label}>
                            <dt className="text-sm text-muted-foreground">{label}</dt>
                            <dd className="font-medium break-words">{value}</dd>
                          </div>
                        ))}
                      </dl>
                      {notes && (
                        <div className="bg-muted/50 p-3 rounded-lg text-sm">
                          <p className="text-muted-foreground font-medium text-xs mb-1">Special Requests</p>
                          <p>{notes}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}

              {/* Tour Overview */}
              {tourData?.description && (
                <Card>
                  <CardContent className="p-6 md:p-7">
                    <h2 className="font-semibold text-xl md:text-2xl flex items-center gap-2 mb-4">
                      <FileText className="h-6 w-6 text-primary" /> Tour Overview
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed mb-5">{tourData.description.overview}</p>
                    {tourData.description.whatToExpect && (
                      <>
                        <h3 className="font-semibold text-lg mb-3">What to Expect</h3>
                        <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line">{tourData.description.whatToExpect}</p>
                      </>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Itinerary */}
              {tourData?.itinerary?.length > 0 && (
                <Card>
                  <CardContent className="p-6 md:p-7">
                    <h2 className="font-semibold text-xl md:text-2xl flex items-center gap-2 mb-5">
                      <Route className="h-6 w-6 text-primary" /> Itinerary
                    </h2>
                    <div className="space-y-4">
                      {tourData.itinerary.map((step, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0">
                              {i + 1}
                            </div>
                            {i < tourData.itinerary.length - 1 && <div className="w-0.5 flex-1 bg-primary/20 mt-1" />}
                          </div>
                          <div className="pb-4">
                            <p className="text-sm font-semibold text-primary">{step.time}</p>
                            <h4 className="font-semibold text-base">{step.title}</h4>
                            <p className="text-base text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Policies Accordion */}
              {tourData && (
                <Card>
                  <CardContent className="p-6 md:p-7">
                    <h2 className="font-semibold text-xl md:text-2xl mb-4">Policies & Information</h2>
                    <Accordion type="multiple" className="w-full">
                      {tourData.inclusions?.length > 0 && (
                        <AccordionItem value="inclusions">
                          <AccordionTrigger className="text-sm font-semibold">
                            <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-600" /> Inclusions</span>
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-1.5 text-sm">
                              {tourData.inclusions.map((item, i) => (
                                <li key={i} className="flex items-start gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-green-500 mt-0.5 shrink-0" />{item}</li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      )}
                      {tourData.exclusions?.length > 0 && (
                        <AccordionItem value="exclusions">
                          <AccordionTrigger className="text-sm font-semibold">
                            <span className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-500" /> Exclusions</span>
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-1.5 text-sm">
                              {tourData.exclusions.map((item, i) => (
                                <li key={i} className="flex items-start gap-2"><XCircle className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />{item}</li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      )}
                      {tourData.cancellationPolicy?.length > 0 && (
                        <AccordionItem value="cancellation">
                          <AccordionTrigger className="text-sm font-semibold">
                            <span className="flex items-center gap-2"><Ban className="h-4 w-4 text-orange-500" /> Cancellation Policy</span>
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-1.5 text-sm">
                              {tourData.cancellationPolicy.map((item, i) => (
                                <li key={i} className="flex items-start gap-2"><span className="text-orange-400 mt-0.5 shrink-0">•</span>{item}</li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      )}
                      {tourData.bookingPolicy?.length > 0 && (
                        <AccordionItem value="refund">
                          <AccordionTrigger className="text-sm font-semibold">
                            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-blue-500" /> Booking & Refund Policy</span>
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-1.5 text-sm">
                              {tourData.bookingPolicy.map((item, i) => (
                                <li key={i} className="flex items-start gap-2"><span className="text-blue-400 mt-0.5 shrink-0">•</span>{item}</li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      )}
                      {tourData.childPolicy?.length > 0 && (
                        <AccordionItem value="child">
                          <AccordionTrigger className="text-sm font-semibold">
                            <span className="flex items-center gap-2"><Baby className="h-4 w-4 text-purple-500" /> Child Policy</span>
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-1.5 text-sm">
                              {tourData.childPolicy.map((item, i) => (
                                <li key={i} className="flex items-start gap-2"><span className="text-purple-400 mt-0.5 shrink-0">•</span>{item}</li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      )}
                    </Accordion>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Right Column - Booking Summary */}
            <div className="space-y-8">
              {/* Booking Details Card */}
              <Card className="sticky top-24">
                <CardContent className="p-6 md:p-7 space-y-5">
                  <h2 className="font-semibold text-xl md:text-2xl">Booking Details</h2>
                  <div className="text-sm font-mono text-muted-foreground">ID: {booking.id.slice(0, 8)}</div>

                  <Separator />

                  <div className="space-y-4 text-base">
                    <div className="flex items-center gap-3">
                      <CalendarDays className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-muted-foreground text-sm">Tour Date</p>
                        <p className="font-semibold">{format(new Date(booking.tour_date), "EEE, MMM dd, yyyy")}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <CalendarDays className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-muted-foreground text-sm">Booked On</p>
                        <p className="font-semibold">{format(new Date(booking.created_at), "MMM dd, yyyy")}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-muted-foreground text-sm">Guests</p>
                        <p className="font-semibold">
                          {booking.adults} Adult{booking.adults > 1 ? "s" : ""}
                          {booking.children > 0 ? `, ${booking.children} Child${booking.children > 1 ? "ren" : ""}` : ""}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-muted-foreground text-sm">Amount Paid</p>
                        <p className="font-bold text-primary text-xl">{formatPrice(booking.total_price)}</p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Customer Info */}
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">Customer Information</h3>
                    <div className="space-y-2.5 text-base">
                      <div className="flex items-center gap-2"><User className="h-4 w-4 text-muted-foreground" />{booking.contact_name}</div>
                      <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-muted-foreground" /><span className="truncate">{booking.contact_email}</span></div>
                      {booking.contact_phone && <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-muted-foreground" />{booking.contact_phone}</div>}
                    </div>
                  </div>

                  {booking.special_requests && (
                    <>
                      <Separator />
                      <div className="bg-muted/50 p-3 rounded-lg text-sm">
                        <p className="text-muted-foreground font-medium text-xs mb-1">Special Requests</p>
                        <p>{booking.special_requests}</p>
                      </div>
                    </>
                  )}

                  {/* Saved activity and pickup details: one card per booking item */}
                  {(itemRows.length > 0 || booking.item_details) && (
                    <>
                      <Separator />
                      <div>
                        <h3 className="font-semibold text-xs text-muted-foreground uppercase tracking-wide mb-2">
                          {itemRows.length > 1 ? `Booked Items (${itemRows.length})` : "Activity & Pickup Details"}
                        </h3>
                        <div className="space-y-3">
                          {(itemRows.length ? itemRows : [booking.item_details]).map((item: any, index: number) => {
                            const details = item?.item_details || {};
                            const kind = itemKindLabel(item || {});
                            const isRealItem = itemRows.length > 0 && !!item?.id;
                            const itemStatusKey = String(item?.status || booking.status || "confirmed").toLowerCase();
                            const itemStatus = statusConfig[itemStatusKey] || statusConfig.confirmed;
                            const fields = (isTransferItem(item || {}) ? [
                              ["Travel Date", item?.travel_date],
                            ] : [
                              ["Destination", item?.destination],
                              ["Travel Date", item?.travel_date],
                              ["Adults", item?.adults],
                              ["Children", item?.children],
                              ["Hotel", item?.hotel_name || details.hotel_name],
                              ["Pickup Location", item?.pickup_location || item?.pickup_address || details.pickup_address],
                              ["Pickup Time", item?.pickup_time || details.pickup_time],
                              ["Meeting Point", item?.meeting_point || details.meeting_point],
                              ["Drop Location", item?.drop_location || details.drop_location],
                              ["Country", item?.country || details.country],
                              ["Flight Number", item?.flight_number || details.flight_number],
                              ["Airline", item?.airline || details.airline],
                              ["Terminal", item?.terminal || details.terminal],
                              ["Special Requests", item?.special_requests || details.special_requests],
                            ]).filter(([, value]) => value !== null && value !== undefined && String(value).trim() !== "");
                            const name = item?.activity_name || item?.tour_name || booking.tour_name;

                            return (
                              <div key={item?.id || index} className="bg-muted/50 p-3 rounded-lg text-sm space-y-2 border border-border">
                                <div className="flex items-start justify-between gap-2">
                                  <div className="min-w-0">
                                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{kind}</p>
                                    <p className="font-semibold break-words">{itemNameLink(item, name, "font-semibold")}</p>
                                  </div>
                                  {isRealItem && (
                                    <Badge variant="outline" className={`${itemStatus.color} shrink-0 text-xs`}>{itemStatus.label}</Badge>
                                  )}
                                </div>
                                <div className="space-y-1">
                                  {fields.map(([label, value]) => (
                                    <p key={String(label)}><span className="text-muted-foreground">{label}:</span> {String(value)}</p>
                                  ))}
                                </div>
                                {isRealItem && booking.status !== "cancelled" && booking.status !== "completed" && canCancelItem(item.status) && (
                                  <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                      <Button variant="destructive" size="sm" className="w-full" disabled={cancellingId === item.id}>
                                        {cancellingId === item.id ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <XCircle className="h-4 w-4 mr-2" />}
                                        Cancel {kind}
                                      </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                      <AlertDialogHeader>
                                        <AlertDialogTitle>Cancel this {kind.toLowerCase()}?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                          You are cancelling only <strong>{name}</strong>{item.travel_date ? ` on ${item.travel_date}` : ""}.
                                          {itemRows.filter((i) => canCancelItem(i.status)).length > 1 && " Other items in this booking stay active."}
                                          <br /><br />Our team will review any refund under the cancellation policy.
                                        </AlertDialogDescription>
                                      </AlertDialogHeader>
                                      <AlertDialogFooter>
                                        <AlertDialogCancel>Keep {kind}</AlertDialogCancel>
                                        <AlertDialogAction onClick={() => handleCancelItem(item)}>Yes, Cancel {kind}</AlertDialogAction>
                                      </AlertDialogFooter>
                                    </AlertDialogContent>
                                  </AlertDialog>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  )}

                  {/* Whole-booking cancel: only for older bookings without saved items */}
                  {itemRows.length === 0 && (booking.status === "pending" || booking.status === "confirmed") && (
                    <>
                      <Separator />
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="destructive" className="w-full" disabled={cancellingId === booking.id}>
                            {cancellingId === booking.id ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <XCircle className="h-4 w-4 mr-2" />}
                            Cancel Booking
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Cancel Booking?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to cancel your booking for <strong>{booking.tour_name}</strong>?
                              <br /><br />Refund will be processed by admin within 3–5 days.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Keep Booking</AlertDialogCancel>
                            <AlertDialogAction onClick={handleCancel}>Yes, Cancel</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <TravelerExperiences />
      <BookingRecommendations city={tourData?.city || booking.tour_slug?.split("/")?.[1]} excludeSlug={booking.tour_slug} />
      <Footer />
    </div>
  );
};

export default BookingDetail;
