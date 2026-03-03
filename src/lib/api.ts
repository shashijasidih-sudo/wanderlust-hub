// Placeholder API helpers — swap base URL when backend is ready
const API_BASE = "/api";

async function request<T = any>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json", ...options?.headers },
    ...options,
  });
  if (!res.ok) throw new Error(`API error ${res.status}`);
  return res.json();
}

export const api = {
  // Profiles
  getProfile: (userId: string) =>
    request(`/profiles/${userId}`).catch(() => null),
  updateProfile: (userId: string, data: Record<string, any>) =>
    request(`/profiles/${userId}`, { method: "PATCH", body: JSON.stringify(data) }).catch(() => null),

  // Bookings
  getBookings: (userId: string) =>
    request<any[]>(`/bookings?user_id=${userId}`).catch(() => []),
  createBooking: (data: Record<string, any>) =>
    request(`/bookings`, { method: "POST", body: JSON.stringify(data) }).catch(() => null),
  cancelBooking: (bookingId: string) =>
    request(`/bookings/${bookingId}`, { method: "PATCH", body: JSON.stringify({ status: "cancelled" }) }).catch(() => null),

  // Wishlists
  getWishlist: (userId: string) =>
    request<any[]>(`/wishlists?user_id=${userId}`).catch(() => []),
  addToWishlist: (data: Record<string, any>) =>
    request(`/wishlists`, { method: "POST", body: JSON.stringify(data) }).catch(() => null),
  removeFromWishlist: (id: string) =>
    request(`/wishlists/${id}`, { method: "DELETE" }).catch(() => null),
  checkWishlist: (userId: string, tourSlug: string) =>
    request<{ exists: boolean }>(`/wishlists/check?user_id=${userId}&tour_slug=${tourSlug}`).catch(() => ({ exists: false })),

  // Cart (server-side)
  getCart: (userId: string) =>
    request<any[]>(`/cart?user_id=${userId}`).catch(() => []),
  addToCartApi: (data: Record<string, any>) =>
    request(`/cart`, { method: "POST", body: JSON.stringify(data) }).catch(() => null),
  removeFromCartApi: (id: string) =>
    request(`/cart/${id}`, { method: "DELETE" }).catch(() => null),
  updateCartItem: (id: string, data: Record<string, any>) =>
    request(`/cart/${id}`, { method: "PATCH", body: JSON.stringify(data) }).catch(() => null),
  clearCartApi: (userId: string) =>
    request(`/cart?user_id=${userId}`, { method: "DELETE" }).catch(() => null),

  // Payments
  createPayment: (data: Record<string, any>) =>
    request(`/payments`, { method: "POST", body: JSON.stringify(data) }).catch(() => null),
  updatePayment: (id: string, data: Record<string, any>) =>
    request(`/payments/${id}`, { method: "PATCH", body: JSON.stringify(data) }).catch(() => null),

  // Razorpay order
  createRazorpayOrder: (data: Record<string, any>) =>
    request(`/create-razorpay-order`, { method: "POST", body: JSON.stringify(data) }),
};
