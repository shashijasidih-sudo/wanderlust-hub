import { format } from "date-fns";
import { ReceiptText, XCircle, Loader2, RefreshCw } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SafeImage from "@/components/SafeImage";
import { useCurrency } from "@/contexts/CurrencyContext";
import { toursData } from "@/data/tourData";
import { adminDisplayItems, adminItemKind, resolveAdminTour, savedValue, type SavedBookingItem } from "@/lib/adminBookingDisplay";
import { canCancelAdminItem } from "@/lib/adminItemCancellation";
import { canRefundItem, canFullRefund, formatMinorAmount, refundsNeedingEmailRetry, type RefundLedgerRow } from "@/lib/adminRefund";

type AdminBooking = Record<string, unknown> & { id: string; booking_items?: SavedBookingItem[]; items_load_error?: boolean };

const dateValue = (value: string) => {
  if (!value) return "";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : format(date, "MMM dd, yyyy");
};

const Fields = ({ rows }: { rows: [string, string][] }) => (
  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
    {rows.filter(([, value]) => value !== "").map(([label, value]) => (
      <div key={label} className="min-w-0">
        <dt className="text-muted-foreground">{label}</dt>
        <dd className="font-medium break-words whitespace-pre-line">{value}</dd>
      </div>
    ))}
  </dl>
);

const ItemDetails = ({ item, onCancel, cancellationBusy, cancelling, onRefund, refundBusy = false, refunding = false }: { item: SavedBookingItem; onCancel?: () => void; cancellationBusy: boolean; cancelling: boolean; onRefund?: () => void; refundBusy?: boolean; refunding?: boolean }) => {
  const transfer = adminItemKind(item) === "TRANSFER";
  const tour = resolveAdminTour(item, toursData);
  const v = (...keys: string[]) => savedValue(item, ...keys);
  const adults = v("adults");
  const children = v("children");
  const passengerCount = v("passengers", "number_of_persons", "numberOfPersons") ||
    (adults || children ? String(Number(adults || 0) + Number(children || 0)) : "");
  const common: [string, string][] = [
    ["Travel Date", dateValue(v("travel_date", "travelDate", "tour_date", "date"))],
    ["Pickup Location", v("pickup_location", "pickup_address", "pickupLocation")],
    ["Pickup Time", v("pickup_time", "pickupTime")],
    ["Special Requests", v("special_requests", "specialRequests")],
  ];
  const rows: [string, string][] = transfer ? [
    ...common,
    ["Drop-off Location", v("drop_location", "dropoff_location", "dropLocation")],
    ["Passengers", passengerCount],
    ["Flight Number", v("flight_number", "flightNumber")],
    ["Airline", v("airline")], ["Terminal", v("terminal")],
    ["Vehicle Type", v("vehicle_type", "vehicle_name", "vehicleName", "vehicle")],
  ] : [
    ["Destination", v("destination")], ...common,
    ["Adults", adults], ["Children", children],
    ["Hotel Name", v("hotel_name", "hotelName")],
    ["Meeting Point", v("meeting_point", "meetingPoint")],
  ];
  const policies: [string, string[] | undefined][] = tour ? [
    ["Inclusions", tour.inclusions], ["Exclusions", tour.exclusions],
    ["Cancellation Policy", tour.cancellationPolicy], ["Booking & Refund Policy", tour.bookingPolicy],
    ["Child Policy", tour.childPolicy],
  ] : [];

  return (
    <article className="border border-border rounded-lg p-4 sm:p-5 space-y-4 min-w-0">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="text-base font-semibold min-w-0 break-words">{v("activity_name") || (transfer ? "Transfer" : "Activity")}</h3>
        <div className="flex gap-2 shrink-0">
          {v("status") && <Badge variant="outline" className="capitalize">{v("status")}</Badge>}
          {v("refund_status") && v("refund_status") !== "none" && <Badge variant="secondary" className="capitalize">Refund: {v("refund_status")}</Badge>}
        </div>
      </div>
      <Fields rows={rows} />
      {onRefund && <Button variant="outline" size="sm" className="mr-2" disabled={refundBusy} aria-label={`Refund ${transfer ? "Transfer" : "Activity"}: ${v("activity_name")}`} onClick={onRefund}>
        {refunding ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <RefreshCw className="h-4 w-4 mr-2" />}
        Refund {transfer ? "Transfer" : "Activity"}
      </Button>}
      {onCancel && <Button variant="outline" size="sm" className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground" disabled={cancellationBusy} aria-label={`Cancel ${transfer ? "Transfer" : "Activity"}: ${v("activity_name")}`} onClick={onCancel}>
        {cancelling ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <XCircle className="h-4 w-4 mr-2" />}
        Cancel {transfer ? "Transfer" : "Activity"}
      </Button>}
      {tour?.description?.overview && <div className="space-y-2"><h4 className="font-semibold text-sm">Tour Overview</h4><p className="text-sm text-muted-foreground whitespace-pre-line">{tour.description.overview}</p></div>}
      {!!tour?.galleryImages?.length && (
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Photo Gallery</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {tour.galleryImages.map((image, index) => <div key={`${image.src}-${index}`} className="aspect-video rounded-md overflow-hidden"><SafeImage src={image.src} alt={image.alt} loading="lazy" className="w-full h-full object-cover" /></div>)}
          </div>
        </div>
      )}
      {(!!tour?.itinerary?.length || policies.some(([, entries]) => entries?.length)) && (
        <Accordion type="multiple">
          {!!tour?.itinerary?.length && <AccordionItem value="itinerary"><AccordionTrigger className="text-sm">Itinerary</AccordionTrigger><AccordionContent><ol className="space-y-3">{tour.itinerary.map((step, index) => <li key={index}><p className="text-primary text-xs">{step.time}</p><p className="font-medium">{step.title}</p><p className="text-muted-foreground">{step.description}</p></li>)}</ol></AccordionContent></AccordionItem>}
          {policies.filter(([, entries]) => entries?.length).map(([label, entries]) => <AccordionItem key={label} value={label}><AccordionTrigger className="text-sm">{label}</AccordionTrigger><AccordionContent><ul className="list-disc pl-5 space-y-1">{entries?.map((entry, index) => <li key={index}>{entry}</li>)}</ul></AccordionContent></AccordionItem>)}
        </Accordion>
      )}
    </article>
  );
};

const AdminViewBookingModal = ({ booking, open, onOpenChange, onCancelItem, cancellingItemId = null, refundLedger = [], refundBusy = null, onRefundItem, onRefundFull, onRetryRefundEmail }: { booking: AdminBooking | null; open: boolean; onOpenChange: (open: boolean) => void; onCancelItem?: (item: SavedBookingItem) => void; cancellingItemId?: string | null; refundLedger?: RefundLedgerRow[]; refundBusy?: string | null; onRefundItem?: (item: SavedBookingItem) => void; onRefundFull?: () => void; onRetryRefundEmail?: (row: RefundLedgerRow) => void }) => {
  const { formatPrice } = useCurrency();
  if (!booking) return null;
  const v = (...keys: string[]) => savedValue(booking, ...keys);
  const items = adminDisplayItems(booking);
  const activities = items.filter(item => adminItemKind(item) === "ACTIVITY");
  const transfers = items.filter(item => adminItemKind(item) === "TRANSFER");
  const renderItem = (item: SavedBookingItem) => <ItemDetails key={item.id} item={item}
    onCancel={onCancelItem && canCancelAdminItem(item, booking) ? () => onCancelItem(item) : undefined}
    cancellationBusy={cancellingItemId !== null} cancelling={cancellingItemId === item.id}
    onRefund={onRefundItem && item.id && !String(item.id).startsWith("legacy") && canRefundItem(item as any, booking as any, refundLedger) ? () => onRefundItem(item) : undefined}
    refundBusy={refundBusy !== null} refunding={refundBusy === item.id} />;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[96vw] max-w-none h-[96dvh] sm:w-[94vw] sm:h-[94dvh] flex flex-col gap-0 overflow-hidden p-0">
        <DialogHeader className="shrink-0 border-b border-border px-5 py-5 sm:px-8 pr-12 sm:pr-12">
          <DialogTitle className="text-xl flex items-center gap-2"><ReceiptText className="h-5 w-5 text-primary" />Booking Details</DialogTitle>
          <DialogDescription className="sr-only">Booking, customer and booked item information</DialogDescription>
        </DialogHeader>
        <div className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="space-y-8 lg:col-span-2">
        {booking.items_load_error && <p role="alert" className="text-sm text-destructive">Booked item details could not be loaded. Only the available booking summary is shown; close this window and refresh to retry.</p>}
        {activities.length > 0 && <section className="space-y-4"><h2 className="font-semibold text-lg text-primary">Activity Details</h2>{activities.map(renderItem)}</section>}
        {transfers.length > 0 && <section className="space-y-4"><h2 className="font-semibold text-lg text-primary">Transfer Details</h2>{transfers.map(renderItem)}</section>}
        </div>
        <div className="space-y-6 min-w-0">
        <section className="space-y-3">
          <h2 className="font-semibold text-base">Booking Information</h2>
          <Fields rows={[
            ["Booking ID", v("booking_number") || booking.id], ["Booking Date", dateValue(v("created_at"))],
            ["Overall Booking Status", v("status")],
            ["Tour Date", dateValue(v("tour_date"))], ["Adults", v("adults")], ["Children", v("children")],
          ]} />
        </section>
        <section className="border-t border-border pt-5 space-y-3">
          <h2 className="font-semibold text-base">Customer Information</h2>
          <Fields rows={[["Customer Name", v("contact_name")], ["Email", v("contact_email")], ["Phone Number", v("contact_phone")], ["Special Requests", v("special_requests")]]} />
        </section>
        {(onRefundFull || refundLedger.length > 0) && <section className="border-t border-border pt-5 space-y-3">
          <h2 className="font-semibold text-base">Refunds</h2>
          {refundLedger.length === 0 && <p className="text-sm text-muted-foreground">No refunds recorded.</p>}
          {refundLedger.map(row => <div key={row.id} className="text-sm flex flex-wrap items-center justify-between gap-2">
            <span>{row.scope === "item" ? "Item" : "Full"} · {formatMinorAmount(Number(row.amount_minor), row.currency)} · <span className="capitalize">{row.status}</span> · email {row.email_status.replace("_", " ")}</span>
            {onRetryRefundEmail && refundsNeedingEmailRetry([row]).length > 0 && <Button variant="outline" size="sm" disabled={refundBusy !== null} onClick={() => onRetryRefundEmail(row)}>Retry refund email</Button>}
          </div>)}
          {onRefundFull && canFullRefund(booking as any, refundLedger) && <Button variant="outline" size="sm" disabled={refundBusy !== null} onClick={onRefundFull}>
            {refundBusy === booking.id ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <RefreshCw className="h-4 w-4 mr-2" />}
            {refundLedger.some(r => r.status === "processed") ? "Refund remaining balance" : "Refund full booking"}
          </Button>}
        </section>}
        <section className="border-t border-border pt-5 space-y-3">
          <h2 className="font-semibold text-base">Payment Information</h2>
          <Fields rows={[
            ["Total Amount", formatPrice(Number(booking.total_price || 0))],
            ["Currency", v("currency")], ["Payment Status", v("payment_status")], ["Payment ID", v("payment_id")],
          ]} />
        </section>
        </div>
        </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdminViewBookingModal;