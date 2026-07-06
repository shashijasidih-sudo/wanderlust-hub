import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackOutboundClick } from "@/lib/analytics";

/**
 * Global analytics initializer:
 * - Pushes a page_view on every route change (GA4 auto-tracks, but this
 *   surfaces client-side SPA navigations to GTM triggers).
 * - Attaches a delegated listener for outbound clicks (WhatsApp, mailto,
 *   tel, Instagram, Facebook, LinkedIn, YouTube).
 */
const channelForUrl = (url: string): string | null => {
  const u = url.toLowerCase();
  if (u.startsWith("tel:")) return "phone";
  if (u.startsWith("mailto:")) return "email";
  if (u.includes("wa.me") || u.includes("whatsapp.com")) return "whatsapp";
  if (u.includes("instagram.com")) return "instagram";
  if (u.includes("facebook.com")) return "facebook";
  if (u.includes("linkedin.com")) return "linkedin";
  if (u.includes("youtube.com") || u.includes("youtu.be")) return "youtube";
  return null;
};

const AnalyticsInit = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: "page_view",
      page_path: location.pathname + location.search,
      page_title: document.title,
    });
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest("a");
      if (!target) return;
      const href = target.getAttribute("href") || "";
      if (!href) return;
      const channel = channelForUrl(href);
      if (!channel) return;
      trackOutboundClick(channel, href);
    };
    document.addEventListener("click", handler, { capture: true });
    return () => document.removeEventListener("click", handler, { capture: true } as any);
  }, []);

  return null;
};

export default AnalyticsInit;
