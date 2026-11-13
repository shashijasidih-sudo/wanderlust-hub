// The existing checkout rounds the aggregate once, not each item separately.
export const MINOR_UNIT_FACTOR: Readonly<Record<string, number>> = Object.freeze({
  INR: 100, USD: 100, THB: 100, AED: 100, SGD: 100,
});
export const normaliseCurrency = (value: unknown): string | null => {
  if (typeof value !== "string") return null;
  const code = value.trim().toUpperCase();
  return Object.prototype.hasOwnProperty.call(MINOR_UNIT_FACTOR, code) ? code : null;
};
export const toMinor = (major: number, currency: string): number => {
  const factor = MINOR_UNIT_FACTOR[currency];
  if (!factor || !Number.isFinite(major) || major < 0) throw new Error("invalid_amount");
  const minor = Math.round(major * factor);
  if (!Number.isSafeInteger(minor)) throw new Error("invalid_amount");
  return minor;
};
export interface PricedItem {
  product_type: string; activity_name: string; activity_slug?: string | null;
  travel_date: string; quantity: number; adults: number; children: number;
  price: number; currency: string;
}
export const isTravelDate = (date: string): boolean =>
  /^\d{4}-\d{2}-\d{2}$/.test(date) && Number.isFinite(Date.parse(date)) &&
  new Date(date).toISOString().slice(0, 10) === date;
export const itemsTotalMinor = (items: Pick<PricedItem, "price">[], currency: string): number =>
  toMinor(items.reduce((sum, item) => sum + item.price, 0), currency);
export const orderAgeValid = (created: unknown, nowSeconds: number): boolean =>
  typeof created === "number" && Number.isSafeInteger(created) && created > 0 &&
  created <= nowSeconds && nowSeconds - created <= 24 * 60 * 60;
export const checkoutFingerprint = async (items: PricedItem[], currency: string): Promise<string> => {
  // No customer contact details in the hash input or Razorpay notes.
  // Fixed keys/order make browser and server snapshots deterministic.
  const snapshot = { version: 1, currency, items: items.map(item => ({
    product_type: item.product_type === "esim" ? "activity" : item.product_type,
    activity_name: item.activity_name,
    activity_slug: item.activity_slug || null,
    travel_date: item.travel_date,
    quantity: item.quantity, adults: item.adults, children: item.children,
    price: item.price, currency: normaliseCurrency(item.currency),
  })) };
  const hash = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(JSON.stringify(snapshot)));
  return Array.from(new Uint8Array(hash), b => b.toString(16).padStart(2, "0")).join("");
};
