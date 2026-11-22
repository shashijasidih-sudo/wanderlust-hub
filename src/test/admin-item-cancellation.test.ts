import { describe, expect, it, vi } from "vitest";
import type { SupabaseClient } from "@supabase/supabase-js";
import { adminCancellationMode, canCancelAdminItem, cancelAdminBookingItem } from "@/lib/adminItemCancellation";

const activity = { id: "activity-1", booking_id: "combined", product_type: "activity", status: "confirmed" };
const transfer = { id: "transfer-1", booking_id: "combined", product_type: "transfer", status: "confirmed" };

// A small stateful Data API fake: writes must actually match both filters to change a row.
function database(options: { parentFails?: boolean; itemFails?: boolean; readFails?: boolean; rows?: typeof activity[] } = {}) {
  const rows = (options.rows || [activity, transfer]).map(row => ({ ...row }));
  const parent = { id: "combined", status: "confirmed" };
  const writes: { table: string; filters: [string, unknown][]; patch: Record<string, unknown> }[] = [];
  const from = vi.fn((table: string) => {
    const filters: [string, unknown][] = [];
    let patch: Record<string, unknown> | undefined;
    const execute = () => {
      const matches = (row: Record<string, unknown>) => filters.every(([key, value]) => row[key] === value);
      if (patch) {
        writes.push({ table, filters: [...filters], patch });
        if ((table === "bookings" && options.parentFails) || (table === "booking_items" && options.itemFails)) {
          return { data: null, error: new Error("Write rejected") };
        }
      }
      const found = (table === "bookings" ? [parent] : rows).filter(matches);
      if (patch) found.forEach(row => Object.assign(row, patch));
      return { data: found, error: null };
    };
    const builder = {
      select: () => builder,
      update: (value: Record<string, unknown>) => { patch = value; return builder; },
      eq: (key: string, value: unknown) => { filters.push([key, value]); return builder; },
      is: (key: string, value: unknown) => { filters.push([key, value]); return builder; },
      order: () => builder,
      single: async () => { const result = execute(); return { ...result, data: result.data?.[0] || null }; },
      range: async (start: number, end: number) => {
        if (options.readFails) return { data: null, error: new Error("Read rejected") };
        const result = execute();
        return { ...result, data: result.data?.slice(start, end + 1) || null };
      },
    };
    return builder;
  });
  return { client: { from } as unknown as SupabaseClient, rows, parent, writes, from };
}

describe("individual admin cancellation", () => {
  it("cancels only the activity, leaving the transfer and parent confirmed", async () => {
    const db = database();
    expect(await cancelAdminBookingItem(db.client, "combined", "activity-1")).toEqual({ allCancelled: false });
    expect(db.rows.map(row => row.status)).toEqual(["cancelled", "confirmed"]);
    expect(db.parent.status).toBe("confirmed");
    expect(db.writes).toEqual([{ table: "booking_items", filters: [["id", "activity-1"], ["booking_id", "combined"], ["status", "confirmed"]], patch: { status: "cancelled" } }]);
  });
  it("cancels only the transfer, leaving the activity confirmed", async () => {
    const db = database();
    await cancelAdminBookingItem(db.client, "combined", "transfer-1");
    expect(db.rows.map(row => row.status)).toEqual(["confirmed", "cancelled"]);
    expect(db.parent.status).toBe("confirmed");
  });
  it("updates the parent only after the final saved item is cancelled", async () => {
    const db = database();
    await cancelAdminBookingItem(db.client, "combined", "activity-1");
    expect(db.writes.filter(write => write.table === "bookings")).toHaveLength(0);
    expect(await cancelAdminBookingItem(db.client, "combined", "transfer-1")).toEqual({ allCancelled: true });
    expect(db.rows.map(row => row.status)).toEqual(["cancelled", "cancelled"]);
    expect(db.parent.status).toBe("cancelled");
    expect(db.writes.filter(write => write.table === "bookings")).toHaveLength(1);
  });
  it("retains legacy parent cancellation for historical bookings without saved items", async () => {
    const historical = { id: "old", status: "confirmed", booking_items: [] };
    expect(adminCancellationMode(historical)).toBe("legacy");
    expect(canCancelAdminItem({ ...activity, id: "legacy-old", booking_id: "old" }, historical)).toBe(false);
    const db = database({ rows: [] });
    await expect(cancelAdminBookingItem(db.client, "combined", "legacy-combined")).rejects.toThrow("unavailable");
    expect(db.writes).toHaveLength(0);
  });
  it("never treats a failed item read as historical-booking permission to cancel the parent", () => {
    expect(adminCancellationMode({ id: "combined", items_load_error: true })).toBe("unavailable");
  });
  it("rejects another booking's item without changing either record", async () => {
    const db = database({ rows: [{ ...activity, booking_id: "other" }, transfer] });
    await expect(cancelAdminBookingItem(db.client, "combined", "activity-1")).rejects.toThrow("unavailable");
    expect(db.rows.map(row => row.status)).toEqual(["confirmed", "confirmed"]);
    expect(db.writes).toHaveLength(0);
  });
  it.each(["cancelled", "completed", "refunded"])("does not offer cancellation for a %s item", status => {
    expect(canCancelAdminItem({ ...activity, status }, { id: "combined", status: "confirmed", booking_items: [activity] })).toBe(false);
  });
  it("does not change the parent when an item update fails or returns no row", async () => {
    const db = database({ itemFails: true });
    await expect(cancelAdminBookingItem(db.client, "combined", "activity-1")).rejects.toMatchObject({ itemCancelled: false });
    expect(db.rows.map(row => row.status)).toEqual(["confirmed", "confirmed"]);
    expect(db.parent.status).toBe("confirmed");
  });
  it("reports partial success when the last item saves but the parent update fails", async () => {
    const db = database({ parentFails: true, rows: [{ ...activity, status: "cancelled" }, transfer] });
    await expect(cancelAdminBookingItem(db.client, "combined", "transfer-1")).rejects.toMatchObject({ itemCancelled: true });
    expect(db.rows.map(row => row.status)).toEqual(["cancelled", "cancelled"]);
    expect(db.parent.status).toBe("confirmed");
  });
  it("does not update the parent when the remaining statuses cannot be read", async () => {
    const db = database({ readFails: true });
    await expect(cancelAdminBookingItem(db.client, "combined", "activity-1")).rejects.toMatchObject({ itemCancelled: true });
    expect(db.writes.map(write => write.table)).toEqual(["booking_items"]);
  });
});