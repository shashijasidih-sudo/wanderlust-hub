import SafeImage from "@/components/SafeImage";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  CalendarDays, Users, MapPin, Hotel, Plane, Clock, Ticket,
  Wifi, FileDown, MessageCircle, Globe, Navigation,
} from "lucide-react";
import { getActivityImage, getActivityLocation, type ProductType } from "@/lib/bookingItems";

export interface BookingItemView {
  id: string;
  product_type: ProductType | string;
  activity_name: string;
  activity_slug?: string | null;
  image_url?: string | null;
  destination?: string | null;
  travel_date?: string | null;
  quantity?: number;
  adults?: number;
  children?: number;
  price?: number;
  currency?: string;
  status?: string;
  pickup_required?: boolean;
  pickup_type?: string | null;
  hotel_name?: string | null;
  pickup_location?: string | null;
  country?: string | null;
  meeting_point?: string | null;
  pickup_time?: string | null;
  drop_location?: string | null;
  flight_number?: string | null;
  airline?: string | null;
  terminal?: string | null;
  voucher_number?: string | null;
  voucher_url?: string | null;
  supplier_reference?: string | null;
  item_details?: any;
}

const typeIcon = (t: string) => {
  if (t === "airport_transfer") return <Plane className="h-4 w-4" />;
  if (t === "transfer") return <Navigation className="h-4 w-4" />;
  if (t === "esim") return <Wifi className="h-4 w-4" />;
  if (t === "ticket") return <Ticket className="h-4 w-4" />;
  return <MapPin className="h-4 w-4" />;
};

const typeLabel = (t: string) =>
  ({ airport_transfer: "Airport Transfer", transfer: "Hotel Transfer", esim: "eSIM", ticket: "Attraction Ticket", activity: "Activity", package: "Package" } as Record<string, string>)[t] || "Activity";

const Field = ({ label, value }: { label: string; value?: string | null }) =>
  value ? (
    <div>
      <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="text-sm font-medium break-words">{value}</p>
    </div>
  ) : null;

export const BookingItemCard = ({ item, onSupport }: { item: BookingItemView; onSupport?: () => void }) => {
  const image = item.image_url || (item.activity_slug ? getActivityImage(item.activity_slug) : null);
  const location = item.destination || (item.activity_slug ? getActivityLocation(item.activity_slug) : null);
  const type = String(item.product_type || "activity");
  const showPickup = !!item.pickup_required;
  const guests = `${item.adults || 0} Adult${(item.adults || 0) !== 1 ? "s" : ""}${(item.children || 0) > 0 ? `, ${item.children} Child${(item.children || 0) !== 1 ? "ren" : ""}` : ""}`;

  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr]">
        {image ? (
          <div className="h-32 sm:h-full bg-muted">
            <SafeImage src={image} alt={item.activity_name} loading="lazy" className="h-full w-full object-cover" />
          </div>
        ) : (
          <div className="h-32 sm:h-full bg-gradient-to-br from-primary/10 to-accent flex items-center justify-center">
            {typeIcon(type)}
          </div>
        )}
        <CardContent className="p-4 space-y-3">
          <div className="flex items-start justify-between gap-3 flex-wrap">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="secondary" className="text-[10px] gap-1">
                  {typeIcon(type)} {typeLabel(type)}
                </Badge>
                {location && (
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {location}
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-base mt-1 line-clamp-2">{item.activity_name}</h3>
            </div>
            {typeof item.price === "number" && item.price > 0 && (
              <p className="font-bold text-primary shrink-0">
                {(item.currency || "INR") === "INR" ? "₹" : `${item.currency} `}
                {Number(item.price).toLocaleString()}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {item.travel_date && (
              <div className="flex items-start gap-1.5">
                <CalendarDays className="h-3.5 w-3.5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                    {type === "esim" ? "Activation" : "Travel Date"}
                  </p>
                  <p className="font-medium">{format(new Date(item.travel_date), "MMM dd, yyyy")}</p>
                </div>
              </div>
            )}
            {(item.adults || item.children) && type !== "esim" && (
              <div className="flex items-start gap-1.5">
                <Users className="h-3.5 w-3.5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Guests</p>
                  <p className="font-medium">{guests}</p>
                </div>
              </div>
            )}
            {item.voucher_number && (
              <Field label="Voucher #" value={item.voucher_number} />
            )}
          </div>

          {showPickup && (
            <>
              <Separator />
              <div>
                <p className="text-xs font-semibold text-primary mb-2 flex items-center gap-1.5">
                  {type === "airport_transfer" ? <Plane className="h-3.5 w-3.5" /> : <Hotel className="h-3.5 w-3.5" />}
                  Pickup Details
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {type === "airport_transfer" ? (
                    <>
                      <Field label="Airline" value={item.airline} />
                      <Field label="Flight #" value={item.flight_number} />
                      <Field label="Terminal" value={item.terminal} />
                      <Field label="Pickup Time" value={item.pickup_time} />
                      <Field label="Drop Hotel" value={item.drop_location || item.hotel_name} />
                      <Field label="Country" value={item.country} />
                    </>
                  ) : (
                    <>
                      <Field label="Hotel" value={item.hotel_name} />
                      <Field label="Pickup Location" value={item.pickup_location} />
                      <Field label="Pickup Time" value={item.pickup_time} />
                      <Field label="Meeting Point" value={item.meeting_point} />
                      <Field label="Country" value={item.country} />
                    </>
                  )}
                </div>
              </div>
            </>
          )}

          {type === "esim" && item.item_details?.activation_email && (
            <>
              <Separator />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Field label="Delivery Email" value={item.item_details.activation_email} />
                <Field label="Country" value={item.country} />
              </div>
            </>
          )}

          <div className="flex flex-wrap items-center gap-2 pt-1">
            {item.voucher_url ? (
              <Button asChild size="sm" variant="outline" className="h-8">
                <a href={item.voucher_url} target="_blank" rel="noopener noreferrer">
                  <FileDown className="h-3.5 w-3.5 mr-1" /> Voucher
                </a>
              </Button>
            ) : (
              <Button size="sm" variant="outline" className="h-8" disabled>
                <FileDown className="h-3.5 w-3.5 mr-1" /> Voucher pending
              </Button>
            )}
            {item.activity_slug && (
              <Button asChild size="sm" variant="ghost" className="h-8">
                <Link to={`/${String(item.activity_slug).replace(/^\/+/, "")}`}>
                  <Globe className="h-3.5 w-3.5 mr-1" /> View activity
                </Link>
              </Button>
            )}
            {onSupport && (
              <Button size="sm" variant="ghost" className="h-8" onClick={onSupport}>
                <MessageCircle className="h-3.5 w-3.5 mr-1" /> Support
              </Button>
            )}
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default BookingItemCard;
