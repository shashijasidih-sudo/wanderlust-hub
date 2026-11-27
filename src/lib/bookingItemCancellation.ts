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

/** Saved product type is authoritative; title words such as "with Transfer" are not categories. */
export const isTransferItem = (item: BookingItemLike) => {
  const type = String(item.product_type || "").trim().toLowerCase();
  return type === "transfer" || type.endsWith("_transfer");
};

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
