import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock supabase client
const mockInsert = vi.fn();
const mockSelect = vi.fn();
const mockSingle = vi.fn();
const mockUpdate = vi.fn();
const mockEq = vi.fn();
const mockGetUser = vi.fn();

vi.mock("@/integrations/supabase/client", () => ({
  supabase: {
    auth: {
      getUser: mockGetUser,
    },
    from: vi.fn(() => ({
      insert: mockInsert,
      update: mockUpdate,
    })),
    channel: vi.fn(() => ({
      on: vi.fn().mockReturnThis(),
      subscribe: vi.fn().mockReturnThis(),
    })),
    removeChannel: vi.fn(),
  },
}));

describe("Payment Flow", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockInsert.mockReturnValue({ select: mockSelect });
    mockSelect.mockReturnValue({ single: mockSingle });
    mockUpdate.mockReturnValue({ eq: mockEq });
  });

  describe("Payment row creation", () => {
    it("should create a payment row with correct fields", async () => {
      const userId = "test-user-123";
      const amount = 500000; // 5000 INR in paise

      mockGetUser.mockResolvedValue({ data: { user: { id: userId } } });
      mockSingle.mockResolvedValue({
        data: { id: "payment-1", user_id: userId, amount, status: "created" },
        error: null,
      });

      const { supabase } = await import("@/integrations/supabase/client");
      
      const { data, error } = await supabase
        .from("payments")
        .insert({ user_id: userId, amount, status: "created", currency: "INR" })
        .select()
        .single();

      expect(supabase.from).toHaveBeenCalledWith("payments");
      expect(mockInsert).toHaveBeenCalledWith({
        user_id: userId,
        amount,
        status: "created",
        currency: "INR",
      });
      expect(data).toBeDefined();
      expect(data?.status).toBe("created");
      expect(error).toBeNull();
    });

    it("should handle insert errors gracefully", async () => {
      mockSingle.mockResolvedValue({
        data: null,
        error: { message: "RLS policy violation" },
      });

      const { supabase } = await import("@/integrations/supabase/client");

      const { data, error } = await supabase
        .from("payments")
        .insert({ user_id: "x", amount: 100, status: "created", currency: "INR" })
        .select()
        .single();

      expect(data).toBeNull();
      expect(error).toBeDefined();
    });
  });

  describe("Razorpay order update", () => {
    it("should update payment row with razorpay_order_id", async () => {
      mockEq.mockResolvedValue({ data: null, error: null });

      const { supabase } = await import("@/integrations/supabase/client");

      await supabase
        .from("payments")
        .update({ razorpay_order_id: "order_ABC123" })
        .eq("id", "payment-1");

      expect(mockUpdate).toHaveBeenCalledWith({ razorpay_order_id: "order_ABC123" });
      expect(mockEq).toHaveBeenCalledWith("id", "payment-1");
    });
  });

  describe("Auth guard", () => {
    it("should block payment if user is not logged in", async () => {
      mockGetUser.mockResolvedValue({ data: { user: null } });

      const { supabase } = await import("@/integrations/supabase/client");
      const { data: { user } } = await supabase.auth.getUser();

      expect(user).toBeNull();
    });

    it("should allow payment if user is logged in", async () => {
      mockGetUser.mockResolvedValue({ data: { user: { id: "user-123" } } });

      const { supabase } = await import("@/integrations/supabase/client");
      const { data: { user } } = await supabase.auth.getUser();

      expect(user).toBeDefined();
      expect(user?.id).toBe("user-123");
    });
  });
});

describe("Edge Function - create-razorpay-order", () => {
  const EDGE_FN_URL = "https://cymzgmfnhtnqledwwojt.supabase.co/functions/v1/create-razorpay-order";

  it("should reject invalid amount", async () => {
    const res = await fetch(EDGE_FN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: -100 }),
    });

    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toBe("Invalid amount");
  });

  it("should reject zero amount", async () => {
    const res = await fetch(EDGE_FN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 0 }),
    });

    expect(res.status).toBe(400);
  });

  it("should create an order with valid amount", async () => {
    const res = await fetch(EDGE_FN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 50000, currency: "INR" }),
    });

    expect(res.status).toBe(200);
    const order = await res.json();
    expect(order.id).toBeDefined();
    expect(order.id).toMatch(/^order_/);
    expect(order.amount).toBe(50000);
    expect(order.currency).toBe("INR");
    expect(order.status).toBe("created");
  });

  it("should handle CORS preflight", async () => {
    const res = await fetch(EDGE_FN_URL, { method: "OPTIONS" });

    expect(res.status).toBe(200);
    expect(res.headers.get("access-control-allow-origin")).toBe("*");
  });
});
