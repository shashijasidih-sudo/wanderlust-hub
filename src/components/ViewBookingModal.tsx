import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCurrency } from "@/contexts/CurrencyContext";
import { toursData, TourData } from "@/data/tourData";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CalendarDays, Users, MapPin, Clock, CreditCard, Mail, Phone, User,
  CheckCircle2, XCircle, ShieldCheck, Baby, Ban, ReceiptText, Loader2,
} from "lucide-react";

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
  contact_phone?: string;
  special_requests?: string;
  created_at: string;
  item_details?: any;
}

interface ViewBookingModalProps {
  booking: Booking | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCancel?: (bookingId: string, tourName: string) => void;
  cancellingId?: string | null;
}

const statusConfig: Record<string, { color: string; icon: React.ReactNode; label: string }> = {
  pending: { color: "bg-yellow-100 text-yellow-800 border-yellow-200", icon: <Clock className="h-4 w-4" />, label: "Pending" },
  confirmed: { color: "bg-green-100 text-green-800 border-green-200", icon: <CheckCircle2 className="h-4 w-4" />, label: "Confirmed" },
  cancelled: { color: "bg-red-100 text-red-800 border-red-200", icon: <XCircle className="h-4 w-4" />, label: "Cancelled" },
  completed: { color: "bg-blue-100 text-blue-800 border-blue-200", icon: <CheckCircle2 className="h-4 w-4" />, label: "Completed" },
};

const ViewBookingModal = ({ booking, open, onOpenChange, onCancel, cancellingId }: ViewBookingModalProps) => {
  const { formatPrice } = useCurrency();

  if (!booking) return null;

  const tourData: TourData | undefined = toursData[booking.tour_slug];
  const status = statusConfig[booking.status] || statusConfig.confirmed;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl flex items-center gap-2">
            <ReceiptText className="h-5 w-5 text-primary" />
            Booking Details
          </DialogTitle>
        </DialogHeader>

        {/* Status Banner */}
        <div className={`flex items-center gap-2 px-4 py-3 rounded-lg border ${status.color}`}>
          {status.icon}
          <span className="font-semibold">{status.label}</span>
          <span className="text-sm ml-auto font-mono">ID: {booking.id.slice(0, 8)}</span>
        </div>

        {/* Tour Info */}
        <div className="space-y-1">
          <h2 className="text-lg font-bold">{booking.tour_name}</h2>
          {tourData && (
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{tourData.location}</span>
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{tourData.duration}</span>
            </div>
          )}
          {tourData?.description?.overview && (
            <p className="text-sm text-muted-foreground mt-2">{tourData.description.overview}</p>
          )}
        </div>

        <Separator />

        {/* Booking Details Grid */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-1">
            <p className="text-muted-foreground flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> Tour Date</p>
            <p className="font-semibold">{format(new Date(booking.tour_date), "EEE, MMM dd, yyyy")}</p>
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> Booked On</p>
            <p className="font-semibold">{format(new Date(booking.created_at), "MMM dd, yyyy")}</p>
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground flex items-center gap-1"><Users className="h-3.5 w-3.5" /> Guests</p>
            <p className="font-semibold">
              {booking.adults} Adult{booking.adults > 1 ? "s" : ""}
              {booking.children > 0 ? `, ${booking.children} Child${booking.children > 1 ? "ren" : ""}` : ""}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground flex items-center gap-1"><CreditCard className="h-3.5 w-3.5" /> Amount Paid</p>
            <p className="font-bold text-primary text-base">{formatPrice(booking.total_price)}</p>
          </div>
        </div>

        <Separator />

        {/* Customer Details */}
        <div className="space-y-2">
          <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Customer Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              <span>{booking.contact_name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span className="truncate">{booking.contact_email}</span>
            </div>
            {booking.contact_phone && (
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>{booking.contact_phone}</span>
              </div>
            )}
          </div>
          {booking.special_requests && (
            <div className="bg-muted/50 p-3 rounded-lg text-sm mt-2">
              <p className="text-muted-foreground font-medium mb-1">Special Requests</p>
              <p>{booking.special_requests}</p>
            </div>
          )}
        </div>

        {/* Item Details (pickup, hotel) */}
        {booking.item_details && (
          <>
            <Separator />
            <div className="space-y-2">
              <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Pickup Details</h3>
              <div className="bg-muted/50 p-3 rounded-lg text-sm space-y-1">
                {booking.item_details.hotel_name && <p><span className="text-muted-foreground">Hotel:</span> {booking.item_details.hotel_name}</p>}
                {booking.item_details.pickup_address && <p><span className="text-muted-foreground">Pickup:</span> {booking.item_details.pickup_address}</p>}
                {booking.item_details.country && <p><span className="text-muted-foreground">Country:</span> {booking.item_details.country}</p>}
              </div>
            </div>
          </>
        )}

        {/* Tour Policies Accordion */}
        {tourData && (
          <>
            <Separator />
            <Accordion type="multiple" className="w-full">
              {tourData.inclusions?.length > 0 && (
                <AccordionItem value="inclusions">
                  <AccordionTrigger className="text-sm font-semibold">
                    <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-600" /> Inclusions</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-1.5 text-sm">
                      {tourData.inclusions.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-green-500 mt-0.5 shrink-0" />
                          {item}
                        </li>
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
                        <li key={i} className="flex items-start gap-2">
                          <XCircle className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />
                          {item}
                        </li>
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
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-orange-400 mt-0.5 shrink-0">•</span>
                          {item}
                        </li>
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
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-400 mt-0.5 shrink-0">•</span>
                          {item}
                        </li>
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
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-purple-400 mt-0.5 shrink-0">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </>
        )}

        {/* Cancel Button */}
        {(booking.status === "pending" || booking.status === "confirmed") && onCancel && (
          <>
            <Separator />
            <div className="flex justify-end">
              <Button
                variant="destructive"
                onClick={() => onCancel(booking.id, booking.tour_name)}
                disabled={cancellingId === booking.id}
              >
                {cancellingId === booking.id ? (
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                ) : (
                  <XCircle className="h-4 w-4 mr-2" />
                )}
                Cancel Booking
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ViewBookingModal;
