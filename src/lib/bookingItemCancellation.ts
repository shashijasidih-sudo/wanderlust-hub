export type ItemStatus = string | null | undefined;

export interface BookingItemLike {
  id?: string;
  status?: ItemStatus;
  product_type?: string | null;
  activity_name?: string | null;
}

const CLOSED = new Set(["cancelled", "completed"]);

/** An item can be cancelled only while it is still pending or confirmed. */
export const canCancelItem = (status: ItemStatus) => !CLOSED.has(String(status || "confirmed").toLowerCase());

export const isTransferItem = (item: BookingItemLike) =>
  /transfer/i.test(String(item.product_type || "")) || /airport|transfer/i.test(String(item.activity_name || ""));

export const itemKindLabel = (item: BookingItemLike) => (isTransferItem(item) ? "Transfer" : "Activity");

/**
 * Parent status after items change: cancelled only when every item is cancelled;
 * otherwise the parent keeps its current status.
 */
export const nextParentStatus = (items: BookingItemLike[], currentParentStatus: string) =>
  items.length > 0 && items.every((i) => String(i.status || "").toLowerCase() === "cancelled")
    ? "cancelled"
    : currentParentStatus;

export const itemDisplayNames = (items: BookingItemLike[]) =>
  items.map((i) => String(i.activity_name || "").trim()).filter(Boolean);
