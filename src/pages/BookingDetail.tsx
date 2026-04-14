import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { useAuth } from "@/lib/auth";
import { supabase } from "@/lib/supabaseClient";
import { useCurrency } from "@/contexts/CurrencyContext";
import { toursData, TourData } from "@/data/tourData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  Image as ImageIcon, FileText, Route, Star,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
    if (!user) { navigate("/auth"); return; }
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
      setBooking(data);
    } catch (err) {
      console.error("Failed to fetch booking:", err);
      toast({ title: "Error", description: "Booking not found", variant: "destructive" });
      navigate("/user-bookings");
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

  if (isAuthLoading || isLoading) {
    return <div className="min-h-screen flex items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>;
  }

  if (!booking) return null;

  const tourData: TourData | undefined = toursData[booking.tour_slug];
  const status = statusConfig[booking.status] || statusConfig.confirmed;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 md:px-6 py-8 mt-16">
        <div className="max-w-5xl mx-auto">
          {/* Back button */}
          <Button variant="ghost" className="mb-4 -ml-2" onClick={() => navigate("/user-bookings")}>
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to My Bookings
          </Button>

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{booking.tour_name}</h1>
              {tourData && (
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mt-1">
                  <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{tourData.location}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{tourData.duration}</span>
                  {tourData.rating && (
                    <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />{tourData.rating} ({tourData.reviews} reviews)</span>
                  )}
                </div>
              )}
            </div>
            <Badge variant="outline" className={`${status.color} text-sm px-4 py-1.5 flex items-center gap-1.5 shrink-0`}>
              {status.icon} {status.label}
            </Badge>
          </div>

          {/* Photo Gallery */}
          {tourData && tourData.galleryImages?.length > 0 && (
            <Card className="mb-6 overflow-hidden">
              <CardContent className="p-4">
                <h2 className="font-semibold text-lg flex items-center gap-2 mb-3">
                  <ImageIcon className="h-5 w-5 text-primary" /> Photo Gallery
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {tourData.galleryImages.slice(0, 8).map((img, i) => (
                    <div
                      key={i}
                      className="aspect-video rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setSelectedImage(img.src)}
                    >
                      <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Image Lightbox */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
              <img src={selectedImage} alt="Gallery" className="max-w-full max-h-[90vh] rounded-lg object-contain" />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Tour Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Tour Overview */}
              {tourData?.description && (
                <Card>
                  <CardContent className="p-5">
                    <h2 className="font-semibold text-lg flex items-center gap-2 mb-3">
                      <FileText className="h-5 w-5 text-primary" /> Tour Overview
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{tourData.description.overview}</p>
                    {tourData.description.whatToExpect && (
                      <>
                        <h3 className="font-semibold text-sm mb-2">What to Expect</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{tourData.description.whatToExpect}</p>
                      </>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Itinerary */}
              {tourData?.itinerary?.length > 0 && (
                <Card>
                  <CardContent className="p-5">
                    <h2 className="font-semibold text-lg flex items-center gap-2 mb-4">
                      <Route className="h-5 w-5 text-primary" /> Itinerary
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
                            <p className="text-xs font-semibold text-primary">{step.time}</p>
                            <h4 className="font-semibold text-sm">{step.title}</h4>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
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
                  <CardContent className="p-5">
                    <h2 className="font-semibold text-lg mb-3">Policies & Information</h2>
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
            <div className="space-y-6">
              {/* Booking Details Card */}
              <Card className="sticky top-24">
                <CardContent className="p-5 space-y-4">
                  <h2 className="font-semibold text-lg">Booking Details</h2>
                  <div className="text-xs font-mono text-muted-foreground">ID: {booking.id.slice(0, 8)}</div>

                  <Separator />

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-muted-foreground text-xs">Tour Date</p>
                        <p className="font-semibold">{format(new Date(booking.tour_date), "EEE, MMM dd, yyyy")}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-muted-foreground text-xs">Booked On</p>
                        <p className="font-semibold">{format(new Date(booking.created_at), "MMM dd, yyyy")}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-muted-foreground text-xs">Guests</p>
                        <p className="font-semibold">
                          {booking.adults} Adult{booking.adults > 1 ? "s" : ""}
                          {booking.children > 0 ? `, ${booking.children} Child${booking.children > 1 ? "ren" : ""}` : ""}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-muted-foreground text-xs">Amount Paid</p>
                        <p className="font-bold text-primary text-lg">{formatPrice(booking.total_price)}</p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Customer Info */}
                  <div>
                    <h3 className="font-semibold text-xs text-muted-foreground uppercase tracking-wide mb-2">Customer Information</h3>
                    <div className="space-y-2 text-sm">
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

                  {/* Pickup Details */}
                  {booking.item_details && (
                    <>
                      <Separator />
                      <div>
                        <h3 className="font-semibold text-xs text-muted-foreground uppercase tracking-wide mb-2">Pickup Details</h3>
                        <div className="bg-muted/50 p-3 rounded-lg text-sm space-y-1">
                          {booking.item_details.hotel_name && <p><span className="text-muted-foreground">Hotel:</span> {booking.item_details.hotel_name}</p>}
                          {booking.item_details.pickup_address && <p><span className="text-muted-foreground">Pickup:</span> {booking.item_details.pickup_address}</p>}
                          {booking.item_details.country && <p><span className="text-muted-foreground">Country:</span> {booking.item_details.country}</p>}
                        </div>
                      </div>
                    </>
                  )}

                  {/* Cancel Button */}
                  {(booking.status === "pending" || booking.status === "confirmed") && (
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
      <Footer />
    </div>
  );
};

export default BookingDetail;
