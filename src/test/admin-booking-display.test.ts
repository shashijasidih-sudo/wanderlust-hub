import { describe, expect, it } from "vitest";
import { adminDisplayItems, adminItemKind, attachBookingItems, resolveAdminTour, savedValue, type SavedBookingItem } from "@/lib/adminBookingDisplay";
import type { TourData } from "@/data/tourData";

const activity: SavedBookingItem = { id: "activity-1", booking_id: "combined", product_type: "activity", activity_name: "Coral Island Join Tour with Indian Lunch" };
const transfer: SavedBookingItem = { id: "transfer-1", booking_id: "combined", product_type: "transfer", activity_name: "Don Mueang International Airport to Bangkok Hotel Drop Private" };

describe("admin combined booking data", () => {
  it("matches both activity and transfer by their actual parent and item IDs", () => {
    const [booking, other] = attachBookingItems([{ id: "combined" }, { id: "other" }], [activity, transfer]);
    expect(booking.booking_items.map(item => item.id)).toEqual(["activity-1", "transfer-1"]);
    expect(other.booking_items).toEqual([]);
    expect(adminItemKind(activity)).toBe("ACTIVITY");
    expect(adminItemKind(transfer)).toBe("TRANSFER");
  });
  it.each([[2, 0], [0, 2], [2, 2], [1, 0]])("retains every saved item for %i activities and %i transfers", (activities, transfers) => {
    const items = [
      ...Array.from({ length: activities }, (_, index) => ({ ...activity, id: `a-${index}` })),
      ...Array.from({ length: transfers }, (_, index) => ({ ...transfer, id: `t-${index}` })),
    ];
    const shown = adminDisplayItems({ id: "combined", tour_name: "2 experiences", booking_items: items });
    expect(shown).toEqual(items);
    expect(shown.filter(item => adminItemKind(item) === "ACTIVITY")).toHaveLength(activities);
    expect(shown.filter(item => adminItemKind(item) === "TRANSFER")).toHaveLength(transfers);
  });
  it("uses saved parent fields only for historical records without associated items", () => {
    const [shown] = adminDisplayItems({ id: "old", tour_name: "Legacy Tour", tour_date: "2026-11-18", item_details: { hotel_name: "Saved Hotel" }, booking_items: [activity] });
    expect(shown.activity_name).toBe("Legacy Tour");
    expect(shown.travel_date).toBe("2026-11-18");
    expect(shown.booking_id).toBe("old");
    expect(savedValue(shown, "hotel_name")).toBe("Saved Hotel");
  });
  it("uses actual saved fields, retaining zero and skipping empty values without inventing details", () => {
    const item = { pickup_location: "", children: 0, item_details: { pickup_location: "Airport", vehicleName: "Sedan" } };
    expect(savedValue(item, "pickup_location")).toBe("Airport");
    expect(savedValue(item, "children")).toBe("0");
    expect(savedValue(item, "vehicle_type", "vehicleName")).toBe("Sedan");
    expect(savedValue(item, "flight_number")).toBe("");
  });
  it("resolves each exact activity independently and never supplies tour content to transfers", () => {
    const first = { id: "first", title: activity.activity_name } as TourData;
    const second = { id: "second", title: "Second Tour" } as TourData;
    const catalog = { "coral-island": first, "second-tour": second };
    expect(resolveAdminTour({ ...activity, activity_slug: "thailand/pattaya/coral-island/" }, catalog)).toBe(first);
    expect(resolveAdminTour({ ...activity, product_id: "second", activity_name: "Second Tour" }, catalog)).toBe(second);
    expect(resolveAdminTour(transfer, catalog)).toBeUndefined();
    expect(resolveAdminTour({ ...activity, activity_name: "Unknown Tour" }, catalog)).toBeUndefined();
  });
});