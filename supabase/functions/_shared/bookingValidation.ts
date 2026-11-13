import { z } from "npm:zod@3.25.76";
import { isTravelDate } from "./checkoutPricing.ts";
const text = z.string().max(2000);
const optionalText = text.nullable().optional();
export const checkoutRefSchema = z.string().uuid();
export const itemSchema = z.object({
  product_id: optionalText,
  product_type: z.enum(["activity", "transfer", "airport_transfer", "ticket", "esim"]),
  activity_name: text.min(1).refine(s => s.trim().length > 0),
  activity_slug: optionalText, image_url: optionalText, destination: optionalText,
  travel_date: z.string().refine(isTravelDate, "A valid travel date is required for every item, including eSIM."),
  quantity: z.number().int().min(1), adults: z.number().int().min(0), children: z.number().int().min(0),
  price: z.number().finite().nonnegative(), currency: z.string().length(3),
  pickup_required: z.boolean().optional(),
  pickup_type: z.enum(["airport", "hotel", "meeting_point"]).nullable().optional(),
  hotel_name: optionalText, pickup_location: optionalText, country: optionalText,
  meeting_point: optionalText, pickup_time: optionalText, drop_location: optionalText,
  flight_number: optionalText, airline: optionalText, terminal: optionalText,
  special_requests: optionalText, item_details: z.record(z.unknown()).optional(),
});
export const orderBodySchema = z.object({
  amount: z.number().int().positive().refine(Number.isSafeInteger),
  currency: z.string().length(3), checkout_ref: checkoutRefSchema,
  items: z.array(itemSchema).min(1).max(10),
});
export const bookingBodySchema = z.object({
  payment_id: z.string().regex(/^pay_[A-Za-z0-9]+$/).max(100),
  order_id: z.string().regex(/^order_[A-Za-z0-9]+$/).max(100),
  razorpay_signature: z.string().regex(/^[a-fA-F0-9]{64}$/),
  checkout_ref: checkoutRefSchema,
  tour_name: text.min(1).refine(s => s.trim().length > 0), tour_slug: optionalText,
  tour_date: z.string().refine(isTravelDate).nullable().optional(),
  total_price: z.number().finite().positive(), currency: z.string().length(3),
  contact_name: z.string().trim().min(1).max(100), contact_email: z.string().email().max(255),
  contact_phone: optionalText, adults: z.number().int().min(0).optional(),
  children: z.number().int().min(0).optional(), special_requests: optionalText,
  items: z.array(itemSchema).min(1).max(10),
});
