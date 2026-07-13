/**
 * Yellodae GA4 Ecommerce dataLayer helper
 * ---------------------------------------
 * All events flow through GTM (GTM-M8M9C49G) -> GA4 (G-TR2JE3RHQN).
 * Purchase fires ONCE per transaction_id (deduped via localStorage).
 * No purchase is ever fired from a page URL — only from real callbacks.
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

const DEBUG =
  typeof import.meta !== "undefined" && (import.meta as any)?.env?.DEV;
const PROCESSED_ORDERS_KEY = "ga_processed_orders";

// ---- Core push helpers -------------------------------------------------
const ensureDataLayer = () => {
  if (typeof window === "undefined") return null;
  if (!Array.isArray(window.dataLayer)) window.dataLayer = [];
  return window.dataLayer;
};

const push = (payload: Record<string, any>) => {
  const dl = ensureDataLayer();
  if (!dl) return;
  // Reset ecommerce before each ecommerce event (GA4 best practice)
  if (payload.ecommerce) dl.push({ ecommerce: null });
  dl.push(payload);
  if (DEBUG) console.log(`✔ ${payload.event} fired`, payload);
};

// SHA-256 for Enhanced Conversion user data
const sha256 = async (value?: string | null): Promise<string | undefined> => {
  if (!value || typeof crypto === "undefined" || !crypto.subtle) return undefined;
  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(value.trim().toLowerCase())
  );
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
};

// ---- Item shape --------------------------------------------------------
export interface AnalyticsItem {
  item_id: string;
  item_name: string;
  item_category?: string; // destination
  price: number;
  quantity?: number;
  destination?: string;
}

const normaliseItem = (i: Partial<AnalyticsItem>): AnalyticsItem => ({
  item_id: i.item_id || i.item_name || "unknown",
  item_name: i.item_name || "unknown",
  item_category: i.item_category || i.destination,
  price: Number(i.price || 0),
  quantity: i.quantity ?? 1,
  destination: i.destination || i.item_category,
});

// ---- Ecommerce events --------------------------------------------------
export const trackViewItem = (item: Partial<AnalyticsItem>) => {
  const it = normaliseItem(item);
  push({
    event: "view_item",
    destination: it.destination,
    ecommerce: {
      currency: "INR",
      value: it.price,
      items: [it],
    },
  });
};

export const trackViewItemList = (
  listName: string,
  items: Partial<AnalyticsItem>[]
) => {
  push({
    event: "view_item_list",
    ecommerce: {
      currency: "INR",
      item_list_name: listName,
      items: items.map(normaliseItem),
    },
  });
};

export const trackSelectItem = (
  listName: string,
  item: Partial<AnalyticsItem>
) => {
  push({
    event: "select_item",
    ecommerce: {
      currency: "INR",
      item_list_name: listName,
      items: [normaliseItem(item)],
    },
  });
};

export const trackAddToCart = (item: Partial<AnalyticsItem>) => {
  const it = normaliseItem(item);
  push({
    event: "add_to_cart",
    destination: it.destination,
    ecommerce: {
      currency: "INR",
      value: it.price * (it.quantity || 1),
      items: [it],
    },
  });
};

export const trackRemoveFromCart = (item: Partial<AnalyticsItem>) => {
  const it = normaliseItem(item);
  push({
    event: "remove_from_cart",
    ecommerce: {
      currency: "INR",
      value: it.price * (it.quantity || 1),
      items: [it],
    },
  });
};

export const trackViewCart = (
  value: number,
  items: Partial<AnalyticsItem>[]
) => {
  push({
    event: "view_cart",
    ecommerce: {
      currency: "INR",
      value,
      items: items.map(normaliseItem),
    },
  });
};

export const trackBeginCheckout = (
  value: number,
  items: Partial<AnalyticsItem>[]
) => {
  push({
    event: "begin_checkout",
    ecommerce: {
      currency: "INR",
      value,
      items: items.map(normaliseItem),
    },
  });
};

export const trackAddPaymentInfo = (
  value: number,
  items: Partial<AnalyticsItem>[],
  paymentType = "razorpay"
) => {
  push({
    event: "add_payment_info",
    ecommerce: {
      currency: "INR",
      value,
      payment_type: paymentType,
      items: items.map(normaliseItem),
    },
  });
};

// ---- Purchase (deduped) -----------------------------------------------
interface PurchasePayload {
  booking_id: string;
  total_amount: number;
  activity_id: string;
  activity_name: string;
  destination?: string;
  guests?: number;
  booking_date?: string;
  travel_date?: string;
  items?: Partial<AnalyticsItem>[];
  user?: {
    email?: string;
    phone?: string;
    first_name?: string;
    last_name?: string;
    country?: string;
    city?: string;
  };
}

const getProcessed = (): string[] => {
  try {
    return JSON.parse(localStorage.getItem(PROCESSED_ORDERS_KEY) || "[]");
  } catch {
    return [];
  }
};
const markProcessed = (id: string) => {
  try {
    const list = getProcessed();
    if (!list.includes(id)) {
      list.push(id);
      // keep last 200
      localStorage.setItem(
        PROCESSED_ORDERS_KEY,
        JSON.stringify(list.slice(-200))
      );
    }
  } catch {}
};

export const trackPurchase = async (p: PurchasePayload) => {
  if (!p.booking_id) return;
  if (getProcessed().includes(p.booking_id)) {
    if (DEBUG) console.log("purchase deduped for", p.booking_id);
    return;
  }
  markProcessed(p.booking_id);

  const items =
    p.items && p.items.length
      ? p.items.map(normaliseItem)
      : [
          normaliseItem({
            item_id: p.activity_id,
            item_name: p.activity_name,
            item_category: p.destination,
            price: p.total_amount,
            quantity: p.guests || 1,
          }),
        ];

  // Enhanced Conversion user data (hashed)
  let user_data: Record<string, string> | undefined;
  if (p.user) {
    const [sha_email, sha_phone, sha_fname, sha_lname] = await Promise.all([
      sha256(p.user.email),
      sha256(p.user.phone?.replace(/\D/g, "")),
      sha256(p.user.first_name),
      sha256(p.user.last_name),
    ]);
    user_data = {
      ...(sha_email && { sha256_email_address: sha_email }),
      ...(sha_phone && { sha256_phone_number: sha_phone }),
      ...(sha_fname && { sha256_first_name: sha_fname }),
      ...(sha_lname && { sha256_last_name: sha_lname }),
      ...(p.user.country && { address_country: p.user.country }),
      ...(p.user.city && { address_city: p.user.city }),
    };
  }

  push({
    event: "purchase",
    destination: p.destination,
    activity_name: p.activity_name,
    activity_id: p.activity_id,
    booking_id: p.booking_id,
    booking_date: p.booking_date || new Date().toISOString().split("T")[0],
    travel_date: p.travel_date,
    guest_count: p.guests,
    ecommerce: {
      transaction_id: p.booking_id,
      value: p.total_amount,
      currency: "INR",
      tax: 0,
      shipping: 0,
      coupon: "",
      items,
    },
    ...(user_data && { user_data }),
  });

  // Google Ads conversion (fires only here — after a confirmed, deduped purchase)
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    try {
      window.gtag("event", "purchase", {
        transaction_id: p.booking_id,
        value: p.total_amount,
        currency: "INR",
        items: items.map((i) => ({
          item_name: i.item_name,
          item_id: i.item_id,
          price: i.price,
          quantity: i.quantity,
        })),
      });
      window.gtag("event", "conversion", {
        send_to: "AW-11416530867/P7W0CKzL1M8cELPf6cMq",
        transaction_id: p.booking_id,
        value: p.total_amount,
        currency: "INR",
      });
    } catch {}
  }

};

// ---- Failure & misc events --------------------------------------------
export const trackPaymentFailed = (data: {
  booking_id?: string;
  activity_name?: string;
  destination?: string;
  amount?: number;
  reason?: string;
}) => {
  push({
    event: "payment_failed",
    booking_id: data.booking_id,
    activity_name: data.activity_name,
    destination: data.destination,
    amount: data.amount,
    reason: data.reason,
    currency: "INR",
  });
};

export const trackSearch = (search_term: string) => {
  if (!search_term) return;
  push({ event: "search", search_term });
};

export const trackLogin = async (method: string, email?: string) => {
  const sha256_email = await sha256(email);
  push({
    event: "login",
    method,
    ...(sha256_email && { user_data: { sha256_email_address: sha256_email } }),
  });
};

export const trackSignUp = async (method: string, email?: string) => {
  const sha256_email = await sha256(email);
  push({
    event: "sign_up",
    method,
    ...(sha256_email && { user_data: { sha256_email_address: sha256_email } }),
  });
};

export const trackAddToWishlist = (item: Partial<AnalyticsItem>) => {
  const it = normaliseItem(item);
  push({
    event: "add_to_wishlist",
    ecommerce: {
      currency: "INR",
      value: it.price,
      items: [it],
    },
  });
};

export const trackGenerateLead = (data: {
  lead_source?: string;
  activity_name?: string;
  destination?: string;
  value?: number;
}) => {
  push({
    event: "generate_lead",
    currency: "INR",
    value: data.value || 0,
    lead_source: data.lead_source,
    activity_name: data.activity_name,
    destination: data.destination,
  });
};

export const trackOutboundClick = (channel: string, url: string) => {
  push({ event: "outbound_click", channel, link_url: url });
};

// Utility to derive destination from a URL slug
export const destinationFromSlug = (slug?: string): string | undefined => {
  if (!slug) return undefined;
  const parts = slug.replace(/^\//, "").toLowerCase().split("/");
  const known = [
    "singapore",
    "phuket",
    "koh-samui",
    "dubai",
    "bangkok",
    "krabi",
    "bali",
    "pattaya",
    "chiang-mai",
    "abu-dhabi",
    "thailand",
  ];
  for (const p of parts) if (known.includes(p)) return p.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return undefined;
};
