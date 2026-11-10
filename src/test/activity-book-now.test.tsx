import { fireEvent, render, screen, waitFor, cleanup } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import PricingCalculator from "@/components/activity-detail/PricingCalculator";

const { addToCart, navigate, errorToast } = vi.hoisted(() => ({
  addToCart: vi.fn(), navigate: vi.fn(), errorToast: vi.fn(),
}));
vi.mock("@/contexts/CartContext", () => ({ useCart: () => ({ addToCart }) }));
vi.mock("@/contexts/CurrencyContext", () => ({ useCurrency: () => ({ formatPrice: (n: number) => `INR ${n}` }) }));
vi.mock("react-router-dom", () => ({ useNavigate: () => navigate }));
vi.mock("sonner", () => ({ toast: { error: errorToast, success: vi.fn() } }));
vi.mock("@/lib/analytics", () => ({ trackAddToCart: vi.fn(), destinationFromSlug: vi.fn() }));

const setup = () => {
  const view = render(<PricingCalculator basePrice={4500} childPrice={1000} activityName="Selected activity"
    tourSlug="/thailand/pattaya-activities/89-show-pattaya-with-transfer/" tourTimings={["18:00"]}
    tourOptions={[{ label: "Selected ticket", adultPrice: 4500, childPrice: 1500 }]}
    tourAddOns={[{ label: "Transfer", adultPrice: 500 }]} />);
  const date = view.container.querySelector('input[type="date"]');
  const timing = view.container.querySelector("select");
  if (!date || !timing) throw new Error("Booking inputs missing");
  fireEvent.change(date, { target: { value: "2026-12-15" } });
  fireEvent.change(timing, { target: { value: "18:00" } });
  return view;
};

beforeEach(() => { vi.clearAllMocks(); addToCart.mockResolvedValue(undefined); });
afterEach(cleanup);

describe("Activity Book Now", () => {
  it("saves the selected booking and goes directly to Customer Information only after insertion succeeds", async () => {
    let finish: (() => void) | undefined;
    addToCart.mockImplementation(() => new Promise<void>(resolve => { finish = resolve; }));
    setup();
    fireEvent.click(screen.getByRole("checkbox"));
    fireEvent.click(screen.getByRole("button", { name: "Book Now" }));
    expect(addToCart).toHaveBeenCalledWith(expect.objectContaining({
      itemType: "activity", title: "Selected activity — Selected ticket + Transfer",
      price: 10000, adults: 2, children: 0, childPrice: 1500,
      selectedDate: "2026-12-15", selectedTime: "18:00", numberOfPersons: 2,
    }));
    expect(navigate).not.toHaveBeenCalled();
    expect(screen.getByRole("button", { name: "Book Now" })).toBeDisabled();
    finish?.();
    await waitFor(() => expect(navigate).toHaveBeenCalledWith("/customer-information/"));
    expect(addToCart).toHaveBeenCalledTimes(1);
  });

  it("does not add an activity or navigate without a selected date and timing", () => {
    const view = setup();
    const date = view.container.querySelector('input[type="date"]');
    if (!date) throw new Error("Date input missing");
    fireEvent.change(date, { target: { value: "" } });
    fireEvent.click(screen.getByRole("button", { name: "Book Now" }));
    expect(addToCart).not.toHaveBeenCalled();
    fireEvent.change(date, { target: { value: "2026-12-15" } });
    const timing = view.container.querySelector("select");
    if (!timing) throw new Error("Timing input missing");
    fireEvent.change(timing, { target: { value: "" } });
    fireEvent.click(screen.getByRole("button", { name: "Book Now" }));
    expect(addToCart).not.toHaveBeenCalled();
    expect(navigate).not.toHaveBeenCalled();
  });

  it("stays on the activity when cart insertion fails and permits retry", async () => {
    addToCart.mockRejectedValue(new Error("Cart unavailable"));
    setup();
    fireEvent.click(screen.getByRole("button", { name: "Book Now" }));
    await waitFor(() => expect(errorToast).toHaveBeenCalled());
    expect(navigate).not.toHaveBeenCalled();
    expect(screen.getByRole("button", { name: "Book Now" })).toBeEnabled();
  });

  it("keeps Add to Cart on the current page", async () => {
    setup();
    fireEvent.click(screen.getByRole("button", { name: "Add to Cart" }));
    await waitFor(() => expect(addToCart).toHaveBeenCalledTimes(1));
    expect(navigate).not.toHaveBeenCalled();
  });
});